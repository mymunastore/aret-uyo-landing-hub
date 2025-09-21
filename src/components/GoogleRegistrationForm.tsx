import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, ExternalLink, RefreshCw } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const GoogleRegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { toast } = useToast();

  // Replace this URL with your actual Google Form embed URL
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true";

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
    window.open(GOOGLE_FORM_URL.replace('?embedded=true', ''), '_blank');
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

          <div className="relative">
            {isLoading && (
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg">
                <div className="flex flex-col items-center gap-2">
                  <RefreshCw className="animate-spin text-primary" size={24} />
                  <p className="text-sm text-muted-foreground">Loading form...</p>
                </div>
              </div>
            )}

            {hasError ? (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8 text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="text-destructive">
                    <UserPlus size={48} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Form Unavailable</h3>
                    <p className="text-muted-foreground mb-4">
                      The form couldn't load. Please try refreshing or contact us directly.
                    </p>
                    <div className="flex gap-2 justify-center">
                      <Button onClick={refreshForm} variant="outline">
                        Try Again
                      </Button>
                      <Button onClick={openInNewTab}>
                        Open in New Tab
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                id="google-form"
                src={GOOGLE_FORM_URL}
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                className="rounded-lg border border-border"
                title="ARET Environmental Services Client Information Form"
                sandbox="allow-scripts allow-forms allow-same-origin"
              >
                Loading form...
              </iframe>
            )}
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