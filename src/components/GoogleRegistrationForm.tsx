import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus } from "lucide-react";
import googleFormImage from "@/assets/google-form-image.png";

const GoogleRegistrationForm = () => {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-elegant hover-lift">
      <CardHeader>
        <CardTitle className="text-2xl text-gradient flex items-center gap-2">
          <UserPlus size={24} />
          Customer Information Form
        </CardTitle>
        <p className="text-muted-foreground text-center mt-2">
          Please fill out our form with your email address and contact details
        </p>
      </CardHeader>
      
      <CardContent className="p-0">
        <a 
          href="https://forms.gle/m3yL5f68ksnn7h6Z6" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="relative overflow-hidden rounded-b-lg border-t border-border/50 hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg">
            <img 
              src={googleFormImage} 
              alt="Customer Information Form"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
          </div>
        </a>
      </CardContent>
    </Card>
  );
};

export default GoogleRegistrationForm;