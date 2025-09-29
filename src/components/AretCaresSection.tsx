import { Heart, Shield, Leaf, Users } from "lucide-react";

const AretCaresSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-background/95 to-accent/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <Heart className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold text-lg">ARET CARES</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-xl leading-relaxed text-muted-foreground mb-8 animate-fade-in-up">
              ARET is like a devoted mother—always alert, nurturing, and steadfast in her commitment to the well-being of her children. Just as a mother carefully watches over her family with love and compassion, ARET is driven by a deep-seated concern for the environment and our collective future. She works relentlessly, day and night, to ensure that the spaces we inhabit—whether at home, work, or play—are clean, safe, and sustainable.
            </p>
            
            <p className="text-xl leading-relaxed text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Her commitment is not fleeting; it is profound and enduring. ARET understands that the actions we take today significantly impact the legacy we leave for future generations. Her dedication is evident in her proactive measures, which include educating communities, innovating waste solutions, and collaborating with stakeholders to protect the environment.
            </p>
            
            <p className="text-xl leading-relaxed text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Across every neighborhood, ARET's presence serves as a gentle reminder that caring for our planet is not merely a duty but an act of love. Her efforts inspire others to adopt responsible habits, fostering a culture where environmental stewardship is celebrated and practiced by everyone.
            </p>
            
            <p className="text-xl leading-relaxed text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              In essence, ARET embodies the spirit of a mother who will never give up on her children or her home. Her unwavering dedication to our environment and shared future drives her mission to create a cleaner, healthier, and more hopeful world for all.
            </p>
          </div>

          {/* Core Values Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group hover:bg-primary/20 transition-colors">
                <Heart className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="font-semibold text-foreground">Caring</h4>
            </div>
            
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group hover:bg-primary/20 transition-colors">
                <Users className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="font-semibold text-foreground">Community</h4>
            </div>
            
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group hover:bg-primary/20 transition-colors">
                <Leaf className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="font-semibold text-foreground">Sustainability</h4>
            </div>
            
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group hover:bg-primary/20 transition-colors">
                <Shield className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="font-semibold text-foreground">Protection</h4>
            </div>
          </div>

          {/* Welcome Message */}
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
              <p className="text-2xl font-semibold text-primary mb-2">
                Welcome to ARET Environmental Services
              </p>
              <p className="text-lg text-muted-foreground italic">
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