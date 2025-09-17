import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Recycle, Shield } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "100+",
    label: "Happy Clients",
    description: "Satisfied customers across Akwa Ibom State",
  },
  {
    icon: Recycle,
    number: "5M+",
    label: "Tons Recycled",
    description: "Environmental impact through proper recycling",
  },
  {
    icon: TrendingUp,
    number: "98%",
    label: "Success Rate",
    description: "Efficient waste collection and processing",
  },
  {
    icon: Shield,
    number: "24/7",
    label: "Service Available",
    description: "Round-the-clock emergency support",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-accent rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
            Our <span className="text-accent">Impact</span>
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in-up">
            Making a difference in waste management across Uyo and beyond
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-500 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="bg-accent p-4 rounded-xl w-16 h-16 mx-auto mb-6 group-hover:animate-pulse-glow transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <div className="text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground mb-3">
                  {stat.label}
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;