import { Card, CardContent } from "@/components/ui/card";
import { Truck, Building, Home, Factory, Recycle, Shield } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Waste Collection",
    description: "Regular household waste pickup and disposal services for homes across Uyo and surrounding areas.",
  },
  {
    icon: Building,
    title: "Commercial Waste Management",
    description: "Comprehensive waste solutions for offices, retail stores, and commercial establishments.",
  },
  {
    icon: Factory,
    title: "Industrial Waste Solutions",
    description: "Specialized handling and disposal of industrial waste with proper safety protocols.",
  },
  {
    icon: Recycle,
    title: "Recycling Services",
    description: "Complete recycling programs to transform waste materials into valuable resources.",
  },
  {
    icon: Truck,
    title: "Skip Hire Services",
    description: "Various skip sizes available for construction projects and large cleanouts.",
  },
  {
    icon: Shield,
    title: "Hazardous Waste Disposal",
    description: "Safe and compliant disposal of hazardous materials following environmental regulations.",
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
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-0 bg-card">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-primary p-4 rounded-xl w-16 h-16 mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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