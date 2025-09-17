import { Card, CardContent } from "@/components/ui/card";
import { Truck, Building, Home, Factory, Recycle, Shield } from "lucide-react";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";
import serviceIndustrial from "@/assets/service-industrial.jpg";
import serviceRecycling from "@/assets/service-recycling.jpg";
import serviceSkipHire from "@/assets/service-skip-hire.jpg";
import serviceHazardous from "@/assets/service-hazardous.jpg";

const services = [
  {
    icon: Home,
    title: "Residential Waste Collection",
    description: "Regular household waste pickup and disposal services for homes across Uyo and surrounding areas.",
    image: serviceResidential,
  },
  {
    icon: Building,
    title: "Commercial Waste Management",
    description: "Comprehensive waste solutions for offices, retail stores, and commercial establishments.",
    image: serviceCommercial,
  },
  {
    icon: Factory,
    title: "Industrial Waste Solutions",
    description: "Specialized handling and disposal of industrial waste with proper safety protocols.",
    image: serviceIndustrial,
  },
  {
    icon: Recycle,
    title: "Recycling Services",
    description: "Complete recycling programs to transform waste materials into valuable resources.",
    image: serviceRecycling,
  },
  {
    icon: Truck,
    title: "Skip Hire Services",
    description: "Various skip sizes available for construction projects and large cleanouts.",
    image: serviceSkipHire,
  },
  {
    icon: Shield,
    title: "Hazardous Waste Disposal",
    description: "Safe and compliant disposal of hazardous materials following environmental regulations.",
    image: serviceHazardous,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive waste management solutions tailored to meet the unique needs 
            of Uyo residents, businesses, and industries.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-0 bg-card overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-gradient-primary p-3 rounded-xl shadow-lg">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;