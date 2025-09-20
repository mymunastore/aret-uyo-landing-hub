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
        <p className="text-muted-foreground mb-4">
          As part of our effort to serve you better, we would like to have your information on record to communicate effectively and serve you properly.
        </p>
        <p className="text-muted-foreground">
          Kindly fill. It's quick and easy to fill.
        </p>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form Image - Clickable */}
          <div className="order-2 lg:order-1">
            <a 
              href="https://forms.gle/m3yL5f68ksnn7h6Z6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative overflow-hidden rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg">
                <img 
                  src={googleFormImage} 
                  alt="ARET Environmental Services Client Information Form - Click to open"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-lg">
                    Click to Open Form
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Form Instructions */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="p-6 text-center lg:text-left">
              <UserPlus size={48} className="text-primary mx-auto lg:mx-0 mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Customer Information Form
              </h3>
              <p className="text-muted-foreground mb-6">
                Please click on the form image or the button below to access our customer information form.
              </p>
              <a 
                href="https://forms.gle/m3yL5f68ksnn7h6Z6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
              >
                <UserPlus size={20} />
                Open Form
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            💡 To embed the form directly (optional):
          </h4>
          <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-1 list-decimal list-inside">
            <li>Open your Google Form</li>
            <li>Click the "Send" button</li>
            <li>Click the embed tab (&lt; &gt;)</li>
            <li>Copy the embed code and share it with me</li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoogleRegistrationForm;