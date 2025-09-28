import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Recycle, Shield, Award, Target, Globe, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "100+",
    label: "Happy Clients",
    description: "Satisfied customers across Akwa Ibom State",
    gradient: "from-blue-500 to-cyan-500",
    delay: "0s"
  },
  {
    icon: Recycle,
    number: "50+",
    label: "Tons Recycled",
    description: "Environmental impact through proper recycling",
    gradient: "from-green-500 to-emerald-500",
    delay: "0.2s"
  },
  {
    icon: TrendingUp,
    number: "98%",
    label: "Success Rate",
    description: "Efficient waste collection and processing",
    gradient: "from-purple-500 to-pink-500",
    delay: "0.4s"
  },
  {
    icon: Award,
    number: "1",
    label: "Year Experience",
    description: "Proven track record in waste management",
    gradient: "from-orange-500 to-red-500",
    delay: "0.6s"
  },
];

const achievements = [
  { icon: Target, text: "Zero Waste Goals" },
  { icon: Globe, text: "Eco-Friendly Solutions" },
  { icon: Zap, text: "24/7 Support Available" },
  { icon: Shield, text: "Certified & Compliant" },
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-bounce-gentle"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary-glow rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
            <TrendingUp className="text-primary" size={20} />
            <span className="text-primary font-semibold text-sm">OUR ACHIEVEMENTS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Measurable <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Leading the way in sustainable waste management with proven results that speak for themselves
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="group relative bg-card border-0 shadow-elegant hover:shadow-glow transition-all duration-700 hover:scale-105 overflow-hidden"
              style={{ animationDelay: stat.delay }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 text-center relative z-10">
                {/* Icon with Animated Background */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <div className={`relative bg-gradient-to-br ${stat.gradient} p-4 rounded-2xl w-20 h-20 mx-auto flex items-center justify-center shadow-lg`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Number with Counter Effect */}
                <div className="text-5xl font-black text-foreground mb-3 group-hover:scale-110 transition-transform duration-500">
                  {stat.number}
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Badges */}
        <div className="bg-card border border-border rounded-2xl p-8 shadow-elegant">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Our <span className="text-primary">Commitments</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gradient-primary p-4 rounded-full mb-4 group-hover:shadow-glow transition-all duration-300">
                  <achievement.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {achievement.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-primary/5 border border-primary/20 rounded-2xl p-6">
            <div className="text-3xl">🌱</div>
            <div>
              <h4 className="text-lg font-bold text-foreground mb-1">
                Join Our Community
              </h4>
              <p className="text-muted-foreground text-sm">
                Partner with us for sustainable waste management solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;