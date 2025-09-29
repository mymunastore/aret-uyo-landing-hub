import { Target, Compass } from "lucide-react";

const VisionMissionSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent rounded-full blur-2xl animate-bounce-gentle"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Vision Statement */}
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-8">
              <Target className="text-primary" size={20} />
              <span className="text-primary font-semibold text-sm">VISION STATEMENT</span>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-8 shadow-elegant">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At ARET Environmental Services, our vision is to revolutionize the waste management landscape by 
                creating an ecosystem where efficiency, sustainability, and innovation converges. We aim to be the catalyst for change 
                in environmental stewardship, fostering a future in which communities and industries alike benefit from a 
                meticulously managed waste system that promotes a cleaner, healthier, and more sustainable environment. Our 
                forward-thinking approach drives us to evolve continuously and set new benchmarks in service 
                excellence, technology integration, and corporate responsibility.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-8">
              <Compass className="text-primary" size={20} />
              <span className="text-primary font-semibold text-sm">MISSION STATEMENT</span>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-8 shadow-elegant">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our mission is to provide exceptional waste management services that balance operational efficiency with 
                environmental responsibility. We are committed to:
              </p>
              
              <div className="text-left space-y-4 max-w-4xl mx-auto">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">i.</span>
                  <p className="text-muted-foreground">
                    Delivering superior waste collection, disposal, and recycling services.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">ii.</span>
                  <p className="text-muted-foreground">
                    Promoting sustainable practices that reduce landfill waste by 20% within the first two years.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">iii.</span>
                  <p className="text-muted-foreground">
                    Exceeding customer expectations by achieving a minimum 90% satisfaction rate within the first year.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">iv.</span>
                  <p className="text-muted-foreground">
                    Empowering our workforce through continuous training, robust performance reviews, and 
                    competitive compensation packages, including salary reviews twice in the first year and annually thereafter, 
                    along with bonus and rewards packages at the company's discretion.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg">v.</span>
                  <p className="text-muted-foreground">
                    Upholding transparency, accountability, and ethical business practices across all levels of our 
                    organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;