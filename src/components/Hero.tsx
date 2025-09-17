import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Recycle, Trash2, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-waste-management.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="ARET Environmental Services - Professional Waste Management in Uyo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 opacity-20">
        <Recycle size={120} className="text-accent animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-20">
        <Leaf size={80} className="text-primary-glow animate-bounce" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Welcome Badge */}
          <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm border border-primary-glow/30 rounded-full px-4 py-2 mb-6">
            <Trash2 size={16} className="text-accent" />
            <span className="text-primary-foreground text-sm font-medium">
              Welcome to ARET Environmental Services
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Your Partner in
            <span className="block text-accent">Sustainability</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Leading waste management solutions in Uyo, Akwa Ibom State. 
            We are committed to reducing environmental impact and promoting 
            sustainability across all sectors.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Discover More
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <Play className="mr-2" size={20} />
              How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/80">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">1M+</div>
              <div className="text-primary-foreground/80">Tons Recycled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-primary-foreground/80">Service Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;