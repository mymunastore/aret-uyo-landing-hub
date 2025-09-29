import { Shield, Clock, Users, Award, Leaf, Recycle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Reliable Service",
    description: "Consistent and dependable waste collection services you can count on, with scheduled pickups and professional handling.",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Convenient pickup times that work with your schedule, including weekend services and emergency collections.",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Trained professionals committed to providing exceptional service while maintaining the highest safety standards.",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Certified waste management processes that meet all regulatory requirements and environmental standards.",
    gradient: "from-orange-500 to-red-600"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable practices that prioritize recycling and environmental protection for a greener future.",
    gradient: "from-teal-500 to-cyan-600"
  },
  {
    icon: Recycle,
    title: "Recycling Programs",
    description: "Comprehensive recycling solutions that help reduce waste and promote circular economy principles.",
    gradient: "from-indigo-500 to-purple-600"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-glow rounded-full blur-3xl animate-bounce-gentle"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-scale">
          <div className="inline-flex items-center gap-3 bg-primary/15 border-2 border-primary/30 rounded-full px-8 py-4 mb-10 shadow-card">
            <Award className="text-primary" size={24} />
            <span className="text-primary font-bold text-base tracking-wide">WHY CHOOSE US</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tight">
            Why Choose <span className="text-gradient">ARET</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            Experience the difference with our professional waste management services designed for your peace of mind.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative card-modern hover:shadow-hover transition-all duration-700 hover:scale-105 animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              <div className="p-10 text-center relative z-10">
                {/* Icon with Animated Background */}
                <div className="relative mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <div className={`relative bg-gradient-to-br ${feature.gradient} p-6 rounded-3xl w-24 h-24 mx-auto flex items-center justify-center shadow-card group-hover:shadow-hover transition-all duration-500`}>
                    <feature.icon className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-black text-foreground mb-6 group-hover:text-primary transition-colors duration-300 tracking-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-base font-medium">
                  {feature.description}
                </p>

                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-500`}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-in-scale" style={{ animationDelay: '0.8s' }}>
          <div className="card-modern p-10 max-w-2xl mx-auto shadow-hover">
            <h3 className="text-3xl font-black text-foreground mb-6">
              Ready to Experience the Difference?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg font-medium">
              Join hundreds of satisfied customers who trust ARET for their waste management needs.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-modern"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;