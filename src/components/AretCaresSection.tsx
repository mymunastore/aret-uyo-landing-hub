import { Heart, Leaf, Shield, Users } from "lucide-react";

const AretCaresSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent rounded-full blur-2xl animate-bounce-gentle"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
            <Heart className="text-primary" size={20} />
            <span className="text-primary font-semibold text-sm">OUR MISSION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            <span className="text-gradient">ARET CARES</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in-up">
              ARET is like a devoted mother—always alert, nurturing, and steadfast in her commitment to the well-being of her children. Just as a mother carefully watches over her family with love and compassion, ARET is driven by a deep-seated concern for the environment and our collective future. She works relentlessly, day and night, to ensure that the spaces we inhabit—whether at home, work, or play—are clean, safe, and sustainable.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Her commitment is not fleeting; it is profound and enduring. ARET understands that the actions we take today significantly impact the legacy we leave for future generations. Her dedication is evident in her proactive measures, which include educating communities, innovating waste solutions, and collaborating with stakeholders to protect the environment.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Across every neighborhood, ARET's presence serves as a gentle reminder that caring for our planet is not merely a duty but an act of love. Her efforts inspire others to adopt responsible habits, fostering a culture where environmental stewardship is celebrated and practiced by everyone.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              In essence, ARET embodies the spirit of a mother who will never give up on her children or her home. Her unwavering dedication to our environment and shared future drives her mission to create a cleaner, healthier, and more hopeful world for all.
            </p>
          </div>

          {/* Care Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-primary p-6 rounded-full mb-4 mx-auto w-20 h-20 flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                <Heart className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Nurturing Care</h3>
              <p className="text-sm text-muted-foreground">Like a mother's love for her children</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-primary p-6 rounded-full mb-4 mx-auto w-20 h-20 flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                <Leaf className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Environmental Love</h3>
              <p className="text-sm text-muted-foreground">Protecting our shared home</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-primary p-6 rounded-full mb-4 mx-auto w-20 h-20 flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Steadfast Commitment</h3>
              <p className="text-sm text-muted-foreground">Unwavering dedication to our future</p>
            </div>
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-primary p-6 rounded-full mb-4 mx-auto w-20 h-20 flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Community Family</h3>
              <p className="text-sm text-muted-foreground">Building bonds across neighborhoods</p>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="text-center mt-16">
            <div className="bg-card border border-border rounded-2xl p-8 shadow-elegant animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <p className="text-2xl font-bold text-foreground mb-2">
                Welcome to ARET Environmental Services
              </p>
              <p className="text-lg text-primary italic">
                Partnering for sustainable solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AretCaresSection;