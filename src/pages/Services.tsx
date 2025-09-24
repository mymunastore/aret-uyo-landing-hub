import { Card, CardContent } from "@/components/ui/card";
import { Truck, Building, Home, Factory, Recycle, Shield, Leaf, ShoppingCart, ArrowRight, Clock, MapPin } from "lucide-react";
import { useResponsive } from "@/hooks/useResponsive";
import { useRealTimeAnimations } from "@/hooks/useRealTimeAnimations";
import { Button } from "@/components/ui/button";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceIndustrial from "@/assets/service-industrial.jpg";
import serviceRecycling from "@/assets/service-recycling.jpg";
import serviceSkipHire from "@/assets/service-skip-hire.jpg";
import serviceHazardous from "@/assets/service-hazardous.jpg";
import serviceWasteManagement from "@/assets/service-waste-management.jpg";

const services = [
  {
    icon: Building,
    title: "Waste Management",
    description: "Comprehensive waste management solutions for residential, commercial, and industrial clients with sustainable practices.",
    image: serviceWasteManagement,
  },
  {
    icon: Truck,
    title: "Waste Collection", 
    description: "Regular and reliable waste pickup services across Uyo and surrounding areas with scheduled routes.",
    image: serviceResidential,
  },
  {
    icon: Factory,
    title: "Waste Disposal",
    description: "Safe and environmentally compliant waste disposal following all regulatory standards and best practices.",
    image: serviceIndustrial,
  },
  {
    icon: Recycle,
    title: "Waste Recycling",
    description: "Complete recycling programs to transform waste materials into valuable resources, supporting a circular economy.",
    image: serviceRecycling,
  },
  {
    icon: Leaf,
    title: "General Environmental Services",
    description: "Comprehensive environmental solutions including consultation, monitoring, and specialized services for various sectors.",
    image: serviceHazardous,
  },
  {
    icon: ShoppingCart,
    title: "Equipment Sales",
    description: "Quality waste management equipment including bins, containers, and other essential waste handling items for residential and commercial use.",
    image: serviceCommercial,
  },
];

const servicePlans = [
  {
    name: "Subscription Plan",
    type: "Weekly Collection",
    description: "Regular weekly waste collection for general household and business waste",
    features: ["Weekly pickup", "General waste collection", "Standard bins provided", "Regular maintenance"],
    schedule: "Saturdays 10 AM - 2:30 PM"
  },
  {
    name: "Premium Plan", 
    type: "Flexible Scheduling",
    description: "Choose between weekly and biweekly collection based on your needs",
    features: ["Weekly or biweekly pickup", "Priority scheduling", "Multiple waste types", "Emergency collection available"],
    schedule: "Saturdays 10 AM - 2:30 PM"
  },
  {
    name: "Enterprise Plan",
    type: "Daily Service", 
    description: "Daily pickup services for high-volume commercial and industrial clients",
    features: ["Daily pickup service", "Large capacity containers", "Specialized waste handling", "24/7 support"],
    schedule: "Daily service available"
  }
];

const ServicesPage = () => {
  const { isMobile, isTablet } = useResponsive();

  const servicesRef = useRealTimeAnimations((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-visible');
    }
  });

  const getGridCols = () => {
    if (isMobile) return "grid-cols-1";
    if (isTablet) return "grid-cols-2"; 
    return "grid-cols-3";
  };

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
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className={`font-bold mb-6 ${
            isMobile ? 'text-3xl' : isTablet ? 'text-4xl' : 'text-5xl'
          }`}>
            Our Services
          </h1>
          <p className={`max-w-2xl mx-auto ${
            isMobile ? 'text-base' : 'text-xl'
          }`}>
            Comprehensive waste management solutions for Uyo and Akwa Ibom State
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section 
        ref={servicesRef}
        className="py-16 sm:py-20 lg:py-24 bg-gradient-subtle animate-on-scroll"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid ${getGridCols()} gap-6 sm:gap-8`}>
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group interactive-card hover:shadow-elegant transition-all duration-500 border-0 bg-card overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`relative overflow-hidden ${
                  isMobile ? 'h-40' : isTablet ? 'h-44' : 'h-48'
                }`}>
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 bg-gradient-primary p-3 rounded-xl shadow-lg group-hover:scale-110 transition-all duration-300">
                    <service.icon className={`text-primary-foreground ${
                      isMobile ? 'w-5 h-5' : 'w-6 h-6'
                    }`} />
                  </div>
                  
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className={`${
                  isMobile ? 'p-4' : isTablet ? 'p-5' : 'p-6'
                }`}>
                  <h3 className={`font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 ${
                    isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-xl'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-muted-foreground leading-relaxed ${
                    isMobile ? 'text-sm' : 'text-sm'
                  }`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Plans */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`font-bold text-foreground mb-4 ${
              isMobile ? 'text-2xl' : 'text-4xl'
            }`}>
              Service Plans
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your waste management needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePlans.map((plan, index) => (
              <Card key={index} className="relative overflow-hidden border-0 shadow-elegant">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-primary font-medium">{plan.type}</p>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6 text-center">
                    {plan.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-muted/50 p-3 rounded-lg mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock size={14} />
                      <span>{plan.schedule}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={scrollToContact}
                    className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact our experts to design a waste management plan specifically for your unique requirements.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4"
          >
            Contact Us Today
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;