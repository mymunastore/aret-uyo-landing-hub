import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-professional-facility.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="ARET Environmental Services - Professional waste management facility in Uyo showcasing modern operations"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/10"></div>
      </div>

      {/* Professional Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border rounded-full px-6 py-3 mb-8 shadow-sm">
            <Shield size={20} className="text-primary" />
            <span className="text-foreground font-medium">
              Certified Environmental Solutions Provider
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Professional Waste
            <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Management Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl leading-relaxed font-medium">
            ARET Environmental Services delivers comprehensive waste management solutions 
            across Uyo, Akwa Ibom State. Our certified team ensures compliance, 
            sustainability, and operational excellence for businesses and communities.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Professional Quote
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              View Our Services
            </Button>
          </div>

          {/* Professional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 mx-auto">
                <Users className="text-primary" size={24} />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">50+</div>
              <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 mx-auto">
                <TrendingUp className="text-primary" size={24} />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">1M+</div>
              <div className="text-sm text-muted-foreground font-medium">Tons Processed</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 mx-auto">
                <Award className="text-primary" size={24} />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">15+</div>
              <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 mx-auto">
                <Shield className="text-primary" size={24} />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">100%</div>
              <div className="text-sm text-muted-foreground font-medium">Compliance Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;