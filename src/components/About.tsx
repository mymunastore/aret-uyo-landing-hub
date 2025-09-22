import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Recycle, RotateCcw, Minus, ArrowRight, Users, Award, Building } from "lucide-react";
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

const coreValues = [
  {
    icon: Building,
    title: "Integrity",
    description: "Honesty and ethical conduct in all our business practices and client relationships."
  },
  {
    icon: Users,
    title: "Customer Satisfaction", 
    description: "Exceeding client expectations through reliable service and personalized solutions."
  },
  {
    icon: Award,
    title: "Environmental Stewardship",
    description: "Committed to cleanliness, care, and community well-being through sustainable practices."
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side - Company Overview */}
          <div>
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                About <span className="text-primary">ARET Environmental Services</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Welcome to ARET Environmental Services, your trusted partner in sustainable waste management 
                solutions. We are deeply committed to providing exceptional service while prioritizing community 
                well-being and environmental responsibility.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Our Mission:</h3>
                <p>
                  To deliver reliable, efficient, and personalized waste management solutions tailored to 
                  residential, commercial, and industrial clients. We believe in being active and responsible 
                  members of our community through partnerships and environmental conservation initiatives.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Our Commitment:</h3>
                <p>
                  Guided by a strong sustainability framework, we invest in innovative technologies and 
                  practices that minimize waste, promote recycling, and reduce environmental footprint. 
                  Our goal is to support a circular economy where resources are valued and utilized responsibly.
                </p>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-primary font-bold text-lg mb-2">Our Core Values:</p>
                <div className="grid grid-cols-1 gap-4">
                  {coreValues.map((value, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <value.icon className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-foreground">{value.title}:</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Button className="mt-8 bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-105">
              Learn More About Our Services
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