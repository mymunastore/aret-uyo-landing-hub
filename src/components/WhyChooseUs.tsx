import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Leaf, Clock, Award, CircleCheck as CheckCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Reliable Service",
    description: "Consistent and dependable waste collection services you can count on.",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/30"
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Experienced and trained professionals committed to excellence.",
    color: "text-green-600", 
    bgColor: "bg-green-50 dark:bg-green-950/30"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable practices that protect our environment for future generations.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your waste management needs.",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/30"
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Certified processes and quality standards that exceed industry requirements.",
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/30"
  },
  {
    icon: CheckCircle,
    title: "Proven Results",
    description: "Track record of successful waste management solutions across various sectors.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/30"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">ARET?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine expertise, reliability, and environmental responsibility to deliver 
            exceptional waste management solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className={`${feature.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
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