import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UserPlus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const GoogleRegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    clientName: "",
    phoneNumber: "",
    clientAddress: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.email || !formData.clientName || !formData.phoneNumber || !formData.clientAddress) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Success message
    toast({
      title: "Form Submitted Successfully",
      description: "Thank you for providing your information. We will contact you soon.",
    });

    // Reset form
    setFormData({
      email: "",
      clientName: "",
      phoneNumber: "",
      clientAddress: ""
    });
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
      
      <CardContent className="p-6 space-y-6">
        <p className="text-sm text-destructive">* Indicates required question</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-medium">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="clientName" className="text-base font-medium">
              Client's Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="clientName"
              name="clientName"
              type="text"
              placeholder="Your answer"
              value={formData.clientName}
              onChange={handleInputChange}
              className="w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber" className="text-base font-medium">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder="Your answer"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="clientAddress" className="text-base font-medium">
              Client's Address <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="clientAddress"
              name="clientAddress"
              placeholder="Your answer"
              value={formData.clientAddress}
              onChange={handleInputChange}
              className="w-full min-h-[100px]"
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Submit Form
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default GoogleRegistrationForm;