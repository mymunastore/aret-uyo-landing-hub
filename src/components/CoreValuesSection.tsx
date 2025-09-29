import { Shield, Heart, Sparkles } from "lucide-react";

const CoreValuesSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with unwavering honesty and ethical conduct. Integrity is the cornerstone of our relationships with employees, clients, partners, and stakeholders. We are committed to transparent practices, ensuring that every transaction and decision is made with the highest degree of professionalism and moral clarity."
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      description: "Our clients are at the heart of our operations. We continuously strive to exceed expectations by delivering reliable and innovative waste management solutions. Our success is measured by the trust and satisfaction of our customers, and we invest in proactive service improvements and personalized support to maintain and grow these relationships."
    },
    {
      icon: Sparkles,
      title: "Cleanliness & Care",
      description: "Environmental stewardship is a non-negotiable priority. We are committed to upholding the highest standards of cleanliness and care, both in our operational practices and in our interactions with the communities we serve. Every decision we make is designed to minimize our ecological footprint, promote recycling, and foster a safer environment for all."
    }
  ];

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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
            <Shield className="text-primary" size={20} />
            <span className="text-primary font-semibold text-sm">CORE VALUES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Guiding Principles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our core values are the guiding principles that shape every decision and action within our organization
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group relative bg-card border-0 shadow-elegant hover:shadow-glow transition-all duration-700 hover:scale-105 overflow-hidden rounded-2xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="p-8 text-center relative z-10">
                {/* Icon with Animated Background */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-primary p-6 rounded-2xl w-20 h-20 mx-auto flex items-center justify-center shadow-lg">
                    <value.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {value.description}
                </p>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;