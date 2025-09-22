import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, ExternalLink, RefreshCw } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import googleFormPreview from "@/assets/google-form-preview.png";

const GoogleRegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { toast } = useToast();

  // Google Form URL
  const GOOGLE_FORM_URL = "https://forms.gle/m3yL5f68ksnn7h6Z6";

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
    toast({
      title: "Form Loading Error",
      description: "Please try refreshing or contact us directly.",
      variant: "destructive"
    });
  };

  const refreshForm = () => {
    setIsLoading(true);
    setHasError(false);
    // Force iframe reload by changing the src
    const iframe = document.getElementById('google-form') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  const openInNewTab = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
  };

  const handleImageClick = () => {
    window.open(GOOGLE_FORM_URL, '_blank');
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
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-destructive">* Indicates required question</p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={refreshForm}
                disabled={isLoading}
                className="flex items-center gap-1"
              >
                <RefreshCw size={14} className={isLoading ? "animate-spin" : ""} />
                Refresh
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={openInNewTab}
                className="flex items-center gap-1"
              >
                <ExternalLink size={14} />
                Open in New Tab
              </Button>
            </div>
          </div>

          <div className="relative group">
            <div 
              onClick={handleImageClick}
              className="cursor-pointer rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant"
            >
              <img 
                src={googleFormPreview} 
                alt="ARET Environmental Services Client Information Form Preview"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ExternalLink size={20} />
                  <span className="font-medium">Click to Fill Form</span>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-3">
              Click the form above to access and complete your client registration
            </p>
          </div>

          <div className="text-center space-y-2">
            <p className="text-xs text-muted-foreground">
              Form not loading? <Button variant="link" onClick={openInNewTab} className="h-auto p-0 text-xs">Click here to open in a new tab</Button>
            </p>
            <p className="text-xs text-muted-foreground">
              Or contact us directly: <a href="tel:+234-XXX-XXX-XXXX" className="text-primary hover:underline">+234-XXX-XXX-XXXX</a> | <a href="mailto:info@aretenvironmental.com" className="text-primary hover:underline">info@aretenvironmental.com</a>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoogleRegistrationForm;