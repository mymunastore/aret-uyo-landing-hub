import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Recycle, RotateCcw, Minus, ArrowRight, Shield, Clock } from "lucide-react";

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
          {/* Content Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The <span className="text-primary">3Rs</span> Approach
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our mantra - the 3Rs - are fundamental principles that align closely with 
              the concept of circular economy. At ARET Environmental Services, we believe 
              in creating sustainable solutions that benefit both our community and environment.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Certified & Compliant</h4>
                  <p className="text-muted-foreground">All operations follow strict environmental regulations and safety standards.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">24/7 Service</h4>
                  <p className="text-muted-foreground">Round-the-clock support for emergency waste management needs.</p>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-105">
              Learn More About Us
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>

          {/* 3Rs Cards */}
          <div className="space-y-6">
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