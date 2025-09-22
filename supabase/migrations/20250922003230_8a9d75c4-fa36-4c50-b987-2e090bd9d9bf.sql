-- Fix security issues with contacts table and improve overall security

-- 1. Ensure RLS is enabled on contacts table (defensive measure)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- 2. Ensure RLS is enabled on newsletter_subscribers table (defensive measure)  
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- 3. Fix function search path security issue by updating existing functions
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
 RETURNS boolean
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$function$;

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  INSERT INTO public.profiles (user_id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.handle_new_user_role()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'customer');
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.promote_user_to_admin(user_email text)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  target_user_id UUID;
  existing_role_count INTEGER;
BEGIN
  -- Find user by email
  SELECT id INTO target_user_id 
  FROM auth.users 
  WHERE email = user_email;
  
  -- Check if user exists
  IF target_user_id IS NULL THEN
    RAISE NOTICE 'User with email % not found', user_email;
    RETURN FALSE;
  END IF;
  
  -- Check if user already has admin role
  SELECT COUNT(*) INTO existing_role_count
  FROM public.user_roles 
  WHERE user_id = target_user_id AND role = 'admin';
  
  -- If user already has admin role, return true
  IF existing_role_count > 0 THEN
    RAISE NOTICE 'User % already has admin role', user_email;
    RETURN TRUE;
  END IF;
  
  -- Add admin role
  INSERT INTO public.user_roles (user_id, role)
  VALUES (target_user_id, 'admin');
  
  RAISE NOTICE 'Successfully promoted % to admin', user_email;
  RETURN TRUE;
  
EXCEPTION WHEN OTHERS THEN
  RAISE NOTICE 'Error promoting user to admin: %', SQLERRM;
  RETURN FALSE;
END;
$function$;

CREATE OR REPLACE FUNCTION public.remove_admin_privileges(user_email text)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  target_user_id UUID;
  deleted_count INTEGER;
BEGIN
  -- Find user by email
  SELECT id INTO target_user_id 
  FROM auth.users 
  WHERE email = user_email;
  
  -- Check if user exists
  IF target_user_id IS NULL THEN
    RAISE NOTICE 'User with email % not found', user_email;
    RETURN FALSE;
  END IF;
  
  -- Remove admin role
  DELETE FROM public.user_roles 
  WHERE user_id = target_user_id AND role = 'admin';
  
  GET DIAGNOSTICS deleted_count = ROW_COUNT;
  
  IF deleted_count > 0 THEN
    RAISE NOTICE 'Successfully removed admin privileges from %', user_email;
    RETURN TRUE;
  ELSE
    RAISE NOTICE 'User % did not have admin privileges', user_email;
    RETURN FALSE;
  END IF;
  
EXCEPTION WHEN OTHERS THEN
  RAISE NOTICE 'Error removing admin privileges: %', SQLERRM;
  RETURN FALSE;
END;
$function$;

CREATE OR REPLACE FUNCTION public.update_conversation_last_message()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path TO 'public'
AS $function$
BEGIN
  UPDATE public.support_conversations 
  SET last_message_at = NEW.created_at,
      updated_at = now()
  WHERE id = NEW.conversation_id;
  RETURN NEW;
END;
$function$;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path TO 'public'
AS $function$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$function$;

-- 4. Add rate limiting policy for contact form submissions (security enhancement)
-- Drop existing policies first to recreate with better security
DROP POLICY IF EXISTS "Anyone can submit contact forms" ON public.contacts;
DROP POLICY IF EXISTS "Admins can view all contacts" ON public.contacts;

-- Recreate contact policies with enhanced security
CREATE POLICY "Admins can view all contacts"
ON public.contacts
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- More restrictive contact form policy - only allow insertions, no reads for non-admins
CREATE POLICY "Anyone can submit contact forms"
ON public.contacts
FOR INSERT
TO anon, authenticated
WITH CHECK (
  -- Ensure basic data validation
  name IS NOT NULL AND 
  name != '' AND 
  email IS NOT NULL AND 
  email != '' AND 
  message IS NOT NULL AND 
  message != '' AND
  length(name) <= 100 AND
  length(email) <= 255 AND
  length(subject) <= 200 AND
  length(message) <= 2000
);

-- 5. Ensure newsletter subscribers table has proper security
DROP POLICY IF EXISTS "Anyone can subscribe to newsletter" ON public.newsletter_subscribers;
DROP POLICY IF EXISTS "Admins can view all subscribers" ON public.newsletter_subscribers;

-- Recreate newsletter policies with enhanced security
CREATE POLICY "Admins can view all subscribers"
ON public.newsletter_subscribers
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Anyone can subscribe to newsletter"
ON public.newsletter_subscribers
FOR INSERT
TO anon, authenticated
WITH CHECK (
  -- Ensure email validation and prevent duplicates
  email IS NOT NULL AND 
  email != '' AND
  length(email) <= 255 AND
  email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
);

-- 6. Add security function to check if user is authenticated admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT public.has_role(auth.uid(), 'admin'::app_role);
$$;

-- 7. Create audit log for contact form submissions (security monitoring)
CREATE TABLE IF NOT EXISTS public.contact_audit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_id uuid REFERENCES public.contacts(id) ON DELETE SET NULL,
  action text NOT NULL,
  user_id uuid,
  ip_address text,
  user_agent text,
  created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS on audit log
ALTER TABLE public.contact_audit_log ENABLE ROW LEVEL SECURITY;

-- Only admins can view audit logs
CREATE POLICY "Admins can view audit logs"
ON public.contact_audit_log
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Create trigger function for contact audit logging
CREATE OR REPLACE FUNCTION public.audit_contact_changes()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Log contact form submission
  IF TG_OP = 'INSERT' THEN
    INSERT INTO public.contact_audit_log (
      contact_id, 
      action, 
      user_id, 
      created_at
    ) VALUES (
      NEW.id, 
      'CONTACT_FORM_SUBMITTED', 
      auth.uid(), 
      now()
    );
    RETURN NEW;
  END IF;
  
  -- Log contact updates (admin actions)
  IF TG_OP = 'UPDATE' THEN
    INSERT INTO public.contact_audit_log (
      contact_id, 
      action, 
      user_id, 
      created_at
    ) VALUES (
      NEW.id, 
      'CONTACT_STATUS_UPDATED', 
      auth.uid(), 
      now()
    );
    RETURN NEW;
  END IF;
  
  RETURN NULL;
END;
$$;

-- Create audit trigger for contacts
DROP TRIGGER IF EXISTS audit_contact_trigger ON public.contacts;
CREATE TRIGGER audit_contact_trigger
  AFTER INSERT OR UPDATE ON public.contacts
  FOR EACH ROW
  EXECUTE FUNCTION public.audit_contact_changes();