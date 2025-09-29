import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ClientInformationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    clientName: '',
    phoneNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.email || !formData.clientName || !formData.phoneNumber) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields marked with *",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Form Submitted Successfully",
        description: "Thank you! We'll contact you soon to discuss your waste management needs.",
      });

      // Reset form
      setFormData({
        email: '',
        clientName: '',
        phoneNumber: ''
      });
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-elegant hover-lift">
      <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-t-lg">
        <CardTitle className="text-2xl flex items-center gap-2 text-white">
          <UserPlus size={24} />
          CLIENT INFORMATION FORM (INDIVIDUAL)
        </CardTitle>
        <p className="text-primary-foreground/90 text-center mt-2">
          ARET Environmental Services Client Information Form
        </p>
      </CardHeader>
      
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-sm text-destructive mb-6">
            * Indicates required question
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-semibold text-foreground">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="h-12 text-base border-2 focus:border-primary transition-colors"
            />
          </div>

          {/* Client's Name Field */}
          <div className="space-y-2">
            <Label htmlFor="clientName" className="text-base font-semibold text-foreground">
              Client's Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="clientName"
              name="clientName"
              type="text"
              placeholder="Your full name"
              value={formData.clientName}
              onChange={handleInputChange}
              required
              className="h-12 text-base border-2 focus:border-primary transition-colors"
            />
          </div>

          {/* Phone Number Field */}
          <div className="space-y-2">
            <Label htmlFor="phoneNumber" className="text-base font-semibold text-foreground">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder="Your phone number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="h-12 text-base border-2 focus:border-primary transition-colors"
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full h-12 text-base font-semibold bg-gradient-primary hover:shadow-glow transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Information'}
          </Button>

          {/* Contact Information */}
          <div className="text-center pt-4 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-2">
              Need help? Contact us directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
              <a 
                href="tel:09152870616" 
                className="text-primary hover:underline font-medium"
              >
                Phone: 09152870616
              </a>
              <span className="hidden sm:inline text-muted-foreground">|</span>
              <a 
                href="mailto:info@aret-environmental-ng.com" 
                className="text-primary hover:underline font-medium"
              >
                Email: info@aret-environmental-ng.com
              </a>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ClientInformationForm;