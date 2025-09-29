import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Building, Factory, Recycle, Shield, Leaf, Users, Clock, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Waste Collection",
    description: "Regular and reliable waste pickup services across Uyo and surrounding areas with scheduled routes and professional handling.",
    features: ["Weekly pickup schedule", "Residential & commercial", "Flexible timing", "Professional staff"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Building,
    title: "Waste Management",
    description: "Comprehensive waste management solutions for residential, commercial, and industrial clients with sustainable practices.",
    features: ["Complete solutions", "Sustainable practices", "Custom plans", "24/7 support"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Factory,
    title: "Waste Disposal",
    description: "Safe and environmentally compliant waste disposal following all regulatory standards and best practices.",
    features: ["Regulatory compliance", "Safe disposal", "Environmental protection", "Certified processes"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Recycle,
    title: "Recycling Programs",
    description: "Complete recycling programs to transform waste materials into valuable resources, supporting a circular economy.",
    features: ["Material recovery", "Circular economy", "Environmental impact", "Resource optimization"],
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Shield,
    title: "Hazardous Waste",
    description: "Specialized handling and disposal of hazardous materials with certified processes and safety protocols.",
    features: ["Certified handling", "Safety protocols", "Regulatory compliance", "Specialized equipment"],
    color: "from-red-500 to-rose-500"
  },
  {
    icon: Leaf,
    title: "Environmental Services",
    description: "Comprehensive environmental solutions including consultation, monitoring, and specialized services for various sectors.",
    features: ["Environmental consulting", "Monitoring services", "Impact assessment", "Compliance support"],
    color: "from-teal-500 to-green-500"
  }
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const headerHeight = 120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-glow rounded-full blur-3xl animate-bounce-gentle"></div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-scale">
          <div className="inline-flex items-center gap-3 bg-primary/15 border-2 border-primary/30 rounded-full px-8 py-4 mb-10 shadow-card">
            <Truck className="text-primary" size={24} />
            <span className="text-primary font-bold text-base tracking-wide">OUR SERVICES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tight">
            Comprehensive <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
            Professional waste management services designed to meet the unique needs of 
            Uyo residents, businesses, and industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group card-modern shadow-hover hover:scale-105 transition-all duration-700 animate-fade-in-scale relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardContent className="p-10 relative z-10">
                {/* Icon with Animated Background */}
                <div className="relative mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <div className={`relative bg-gradient-to-br ${service.color} p-4 rounded-2xl w-20 h-20 mx-auto flex items-center justify-center shadow-card group-hover:shadow-hover transition-all duration-500`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-foreground mb-4 group-hover:text-primary transition-colors duration-300 text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="text-primary flex-shrink-0" size={16} />
                      <span className="text-sm text-muted-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <Button 
                  className="w-full btn-modern group-hover:shadow-glow transition-all duration-300"
                  onClick={scrollToContact}
                >
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </Button>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-in-scale" style={{ animationDelay: '0.8s' }}>
          <div className="card-modern p-12 max-w-4xl mx-auto shadow-hover">
            <h3 className="text-3xl font-black text-foreground mb-6">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg font-medium max-w-2xl mx-auto">
              Our experts can design a waste management plan specifically tailored to your unique requirements and business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={scrollToContact}
                className="btn-modern"
              >
                Get Custom Quote
              </Button>
              <Button 
                variant="outline"
                className="border-2 hover:border-primary transition-all duration-300"
                onClick={() => {
                  window.open('tel:09152870616', '_self');
                }}
              >
                <Clock className="mr-2" size={16} />
                Call Now: 09152870616
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;