import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Recycle, RotateCcw, Minus, ArrowRight, Shield, Clock } from "lucide-react";
import about3Rs from "@/assets/about-3rs.jpg";

const principles = [
  {
    icon: Recycle,
    title: "Recycle",
    description: "Converting waste materials into reusable products to prevent environmental harm.",
    color: "text-primary",
  },
  {
    icon: Minus,
    title: "Reduce",
    description: "Minimizing waste generation through efficient practices and conscious consumption.",
    color: "text-accent",
  },
  {
    icon: RotateCcw,
    title: "Reuse",
    description: "Finding new purposes for materials before considering disposal options.",
    color: "text-primary-glow",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side - Focused on Impact */}
          <div>
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Measuring Our <span className="text-primary">Environmental Impact</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                At ARET Environmental Services, we focus on measurable outcomes that benefit our 
                community and environment. Our commitment to sustainable waste management goes beyond 
                collection - we actively work to create lasting positive change.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Our Measurable Impact:</h3>
                <div className="space-y-3">
                  <p>
                    <strong className="text-foreground">Community Health:</strong> Through proper waste 
                    management, we've contributed to reducing disease vectors and improving public health 
                    across Uyo and surrounding communities.
                  </p>
                  <p>
                    <strong className="text-foreground">Environmental Protection:</strong> Our systematic 
                    approach to waste collection and disposal has prevented improper dumping and protected 
                    local water sources and ecosystems.
                  </p>
                  <p>
                    <strong className="text-foreground">Resource Recovery:</strong> Through our recycling 
                    programs, we've diverted significant amounts of waste from landfills, converting them 
                    into valuable resources for the circular economy.
                  </p>
                </div>
              </div>
            </div>

            <Button className="mt-8 bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-105">
              Learn More About Our Mission
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>

          {/* Visual Section with 3Rs Cards */}
          <div className="space-y-6">
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden mb-8">
                <img 
                  src={about3Rs} 
                  alt="3Rs Approach - Reduce, Reuse, Recycle"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold text-primary-foreground">
                  Sustainable Solutions
                </h3>
                <p className="text-primary-foreground/90 text-sm">
                  Environmental responsibility at its core
                </p>
              </div>
            </div>

            {/* 3Rs Cards */}
            {principles.map((principle, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-primary p-3 rounded-xl group-hover:shadow-glow transition-all duration-300">
                      <principle.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;