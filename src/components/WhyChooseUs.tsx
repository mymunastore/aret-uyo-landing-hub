import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Shield, Users, Leaf, Award } from "lucide-react";

const reasons = [
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description: "Over 1 year of reliable waste management services in Akwa Ibom State with 98% customer satisfaction rate.",
  },
  {
    icon: Clock,
    title: "Timely Service",
    description: "Punctual waste collection with flexible scheduling to meet your specific needs and requirements.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Trained professionals who understand waste management best practices and environmental regulations.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Approach",
    description: "Committed to sustainable practices with focus on recycling and reducing environmental impact.",
  },
  {
    icon: Award,
    title: "Local Excellence",
    description: "Proud local company serving Uyo community with personalized service and local market understanding.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-accent rounded-full blur-3xl animate-bounce-gentle"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Why Choose <span className="text-primary">ARET?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            We're more than just a waste management company - we're your partner in 
            creating a cleaner, more sustainable environment for Uyo and beyond.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-500 hover:scale-105 border-0 bg-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-primary p-4 rounded-xl w-16 h-16 mx-auto mb-6 group-hover:animate-pulse-glow transition-all duration-300">
                  <reason.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;