import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus } from "lucide-react";

const GoogleRegistrationForm = () => {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-elegant hover-lift">
      <CardHeader>
        <CardTitle className="text-2xl text-gradient flex items-center gap-2">
          <UserPlus size={24} />
          Registration Form
        </CardTitle>
        <p className="text-muted-foreground">
          Please fill out our registration form to get started with our services.
        </p>
      </CardHeader>
      
      <CardContent>
        <div className="w-full h-[600px] rounded-lg overflow-hidden border border-border/50">
          <iframe
            src="https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/viewform?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Registration Form"
            className="w-full h-full"
          >
            Loading registration form...
          </iframe>
        </div>
        
        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Note:</strong> Replace the Google Form URL above with your actual Google Form embed URL. 
            You can get this by going to your Google Form → Send → Embed HTML and copying the src URL.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoogleRegistrationForm;