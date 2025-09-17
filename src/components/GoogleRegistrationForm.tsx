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
        <div className="w-full min-h-[600px] rounded-lg overflow-hidden border border-border/50">
          <div className="p-8 text-center bg-muted/20">
            <UserPlus size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Customer Information Form
            </h3>
            <p className="text-muted-foreground mb-6">
              Please click the button below to access our customer information form.
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