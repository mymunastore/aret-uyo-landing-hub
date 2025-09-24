import { Leaf, Heart, Shield } from "lucide-react";

const MottoSection = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Motto */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-primary">Partnering</span> for{" "}
              <span className="text-accent">Sustainable Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Like a nurturing mother, ARET Environmental Services cares deeply for our 
              community and environment, providing dedicated waste management solutions 
              that protect and sustain our shared home.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center group">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                <Heart className="w-8 h-8 text-primary-foreground mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Environmental Stewardship
              </h3>
              <p className="text-muted-foreground text-sm">
                Caring for our planet with the love and attention of a devoted mother
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                <Leaf className="w-8 h-8 text-primary-foreground mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Community Education
              </h3>
              <p className="text-muted-foreground text-sm">
                Nurturing awareness and knowledge for sustainable living practices
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                <Shield className="w-8 h-8 text-primary-foreground mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Sustainable Future
              </h3>
              <p className="text-muted-foreground text-sm">
                Protecting tomorrow by making responsible choices today
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MottoSection;