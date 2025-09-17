import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Clock, MapPin, Shield } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-foreground/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border border-accent/30 rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 animate-fade-in-up">
            Join hundreds of satisfied customers in Uyo who trust ARET Environmental 
            Services for all their waste management needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <Phone className="mr-2" size={20} />
              Call Now: +234 806 615 8613
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              Get Free Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto animate-fade-in">
            <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
              <MapPin size={20} className="text-accent" />
              <span>Serving all of Akwa Ibom State</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
              <Shield size={20} className="text-accent" />
              <span>Certified & Compliant</span>
            </div>
          </div>

          {/* Guarantee Badge */}
          <div className="mt-12 animate-scale-in">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              <span className="text-primary-foreground font-medium">
                100% Satisfaction Guaranteed
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;