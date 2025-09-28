import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Building, Home, Factory, Recycle, Shield, Leaf, ShoppingCart, ArrowRight, Clock, Calendar } from "lucide-react";
import { useResponsive } from "@/hooks/useResponsive";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
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
    title: "Subscription Plan",
    icon: Home,
    description: "Weekly general waste collection for residential and small commercial clients",
    features: [
      "Weekly waste collection",
      "General waste only",
      "Reliable scheduled pickups",
      "Competitive pricing"
    ],
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Premium Plan",
    icon: Shield,
    description: "Flexible weekly and biweekly pickup options with enhanced services",
    features: [
      "Weekly and biweekly options",
      "Segregated waste collection",
      "Recyclable materials processing",
      "Priority customer support"
    ],
    color: "bg-green-50 border-green-200"
  },
  {
    title: "Enterprise Plan",
    icon: Building,
    description: "Daily pickup services for large-scale commercial and industrial operations",
    features: [
      "Daily pickup services",
      "Customizable frequency",
      "Comprehensive waste solutions",
      "Dedicated account management"
    ],
    color: "bg-purple-50 border-purple-200"
  }
];

const Services = () => {
  const { isMobile, isTablet } = useResponsive();

  const getGridCols = () => {
    if (isMobile) return "grid-cols-1";
    if (isTablet) return "grid-cols-2"; 
    return "grid-cols-3";
  };

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead />
      <Header showTestimonials={false} onToggleTestimonials={() => {}} />
      
      <main className="pt-20">
        {/* Page Header */}
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Comprehensive waste management solutions tailored to meet the unique needs 
              of Uyo residents, businesses, and industries.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-md border border-primary-foreground/30 rounded-full px-6 py-3">
              <Calendar size={20} className="text-accent" />
              <span className="font-semibold">Pickup Schedule: Saturdays 10:00 AM - 2:30 PM</span>
            </div>
          </div>
        </section>

        {/* Service Plans */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Service Plans
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the perfect plan for your waste management needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {servicePlans.map((plan, index) => (
                <Card key={index} className={`${plan.color} border-2 hover:shadow-elegant transition-all duration-300`}>
                  <CardContent className="p-8 text-center">
                    <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-6">
                      <plan.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{plan.title}</h3>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    <ul className="space-y-2 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" onClick={scrollToContact}>
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Services */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Complete Service Portfolio
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From waste collection to environmental consulting, we provide end-to-end solutions
              </p>
            </div>

            <div className={`grid ${getGridCols()} gap-8`}>
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-elegant transition-all duration-500 border-0 bg-card overflow-hidden"
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
                    
                    <button 
                      onClick={scrollToContact}
                      className="group/btn w-full flex items-center justify-center gap-2 bg-muted hover:bg-primary text-muted-foreground hover:text-primary-foreground py-2 sm:py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:shadow-lg"
                    >
                      <span className={isMobile ? 'text-sm' : 'text-base'}>Get Quote</span>
                      <ArrowRight 
                        size={isMobile ? 14 : 16} 
                        className="group-hover/btn:translate-x-1 transition-transform duration-300" 
                      />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and customized waste management solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Get Free Quote
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="tel:07032224738">Call Now: 070-3222-4738</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;