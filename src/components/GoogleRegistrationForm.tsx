import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus } from "lucide-react";

const GoogleRegistrationForm = () => {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-elegant hover-lift">
      <CardHeader>
        <CardTitle className="text-2xl text-gradient flex items-center gap-2">
          <UserPlus size={24} />
          Customer Information Form
        </CardTitle>
        <p className="text-muted-foreground mb-4">
          As part of our effort to serve you better, we would like to have your information on record to communicate effectively and serve you properly.
        </p>
        <p className="text-muted-foreground">
          Kindly fill. It's quick and easy to fill.
        </p>
      </CardHeader>
      
      <CardContent>
        <div className="w-full h-[600px] rounded-lg overflow-hidden border border-border/50">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeKz1yKjhzOplbz2CQl0czWAJjNJ8-uuhjUV-IEQpWowkfWaQ/viewform?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Customer Information Form"
            className="w-full h-full"
          >
            Loading customer information form...
          </iframe>
        </div>
        
        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            Having trouble with the form? You can also access it directly at: 
            <a 
              href="https://forms.gle/m3yL5f68ksnn7h6Z6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline ml-1"
            >
              https://forms.gle/m3yL5f68ksnn7h6Z6
            </a>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoogleRegistrationForm;