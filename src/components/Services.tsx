import { Card, CardContent } from "@/components/ui/card";
import { Truck, Building, Home, Factory, Recycle, Shield, Leaf, ShoppingCart, ArrowRight } from "lucide-react";
import { useResponsive } from "@/hooks/useResponsive";
import { useRealTimeAnimations } from "@/hooks/useRealTimeAnimations";
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

const Services = () => {
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
    <section 
      ref={servicesRef}
      id="services" 
      className="py-16 sm:py-20 lg:py-24 bg-gradient-subtle animate-on-scroll"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <div className="mb-4">
            <p className={`text-primary font-medium tracking-wide uppercase mb-2 ${
              isMobile ? 'text-xs' : 'text-sm'
            }`}>
              MOTTO: PARTNERING FOR SUSTAINABLE SOLUTIONS
            </p>
          </div>
          <h2 className={`font-bold text-foreground mb-4 sm:mb-6 ${
            isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-4xl md:text-5xl'
          }`}>
            Our <span className="text-primary">Services</span>
          </h2>
          <p className={`text-muted-foreground max-w-3xl mx-auto ${
            isMobile ? 'text-base' : isTablet ? 'text-lg' : 'text-xl'
          }`}>
            Comprehensive waste management solutions tailored to meet the unique needs 
            of Uyo residents, businesses, and industries.
          </p>
        </div>

        {/* Services Grid */}
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
                
                {/* Icon with enhanced animation */}
                <div className="absolute bottom-4 left-4 bg-gradient-primary p-3 rounded-xl shadow-lg group-hover:scale-110 transition-all duration-300">
                  <service.icon className={`text-primary-foreground ${
                    isMobile ? 'w-5 h-5' : 'w-6 h-6'
                  }`} />
                </div>
                
                {/* Hover overlay */}
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
                <p className={`text-muted-foreground leading-relaxed mb-4 ${
                  isMobile ? 'text-sm' : 'text-sm'
                }`}>
                  {service.description}
                </p>
                
                {/* Learn More Button */}
                <button className="group/btn w-full flex items-center justify-center gap-2 bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground py-2 sm:py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg real-time-hover">
                  <span className={isMobile ? 'text-sm' : 'text-base'}>Learn More</span>
                  <ArrowRight 
                    size={isMobile ? 14 : 16} 
                    className="group-hover/btn:translate-x-1 transition-transform duration-300" 
                  />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20 animate-fade-in-up">
          <div className={`bg-card border border-border/50 rounded-2xl sm:rounded-3xl shadow-elegant ${
            isMobile ? 'p-6' : isTablet ? 'p-8' : 'p-12'
          }`}>
            <h3 className={`font-bold text-foreground mb-3 sm:mb-4 ${
              isMobile ? 'text-xl' : isTablet ? 'text-2xl' : 'text-3xl'
            }`}>
              Need a Custom Solution?
            </h3>
            <p className={`text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto ${
              isMobile ? 'text-sm' : isTablet ? 'text-base' : 'text-lg'
            }`}>
              Our experts can design a waste management plan specifically for your unique requirements.
            </p>
            <button 
              onClick={scrollToContact}
              className={`interactive-button bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover:shadow-glow transition-all duration-300 ${
                isMobile ? 'px-6 py-3 text-sm' : 'px-8 py-4 text-base'
              }`}
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;