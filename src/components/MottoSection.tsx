import { Leaf, Heart, Shield } from "lucide-react";

const MottoSection = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary-foreground/10 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-primary-foreground/15 rounded-full animate-bounce-gentle"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Motto */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Partnering for <span className="text-accent">Sustainable Solutions</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed animate-fade-in-up" 
             style={{ animationDelay: '0.2s' }}>
            Like a nurturing mother cares for her family, ARET Environmental Services cares for your community - 
            providing reliable waste management solutions while protecting our shared environment for future generations.
          </p>

          {/* ARET Cares Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" 
               style={{ animationDelay: '0.4s' }}>
            <div className="text-center group">
              <div className="bg-primary-foreground/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Environmental Stewardship</h3>
              <p className="text-primary-foreground/80 text-sm">
                Protecting and preserving our natural environment through responsible waste management practices
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-primary-foreground/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Community Education</h3>
              <p className="text-primary-foreground/80 text-sm">
                Empowering our community with knowledge and resources for sustainable living and waste reduction
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-primary-foreground/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sustainability</h3>
              <p className="text-primary-foreground/80 text-sm">
                Building a circular economy that values resources and ensures a cleaner future for all
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MottoSection;