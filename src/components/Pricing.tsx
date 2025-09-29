import { Check, Star, Building, Chrome as Home, Users, Clock, Phone, Mail, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Basic Plan",
    icon: <Home className="text-primary" size={32} />,
    description: "Perfect for small households and basic waste management needs",
    price: "Affordable",
    period: "per month",
    features: [
      "Weekly waste collection",
      "General waste disposal",
      "Saturday pickup (10 AM - 2:30 PM)",
      "Basic customer support",
      "Flexible scheduling",
      "Residential service"
    ],
    popular: false,
    buttonText: "Choose Basic",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Premium Plan",
    icon: <Star className="text-primary" size={32} />,
    description: "Enhanced service for environmentally conscious clients",
    price: "Competitive",
    period: "per month",
    features: [
      "Bi-weekly pickup options",
      "Segregated waste collection",
      "Recyclable materials handling",
      "Priority customer support",
      "Flexible scheduling",
      "Environmental reporting"
    ],
    popular: true,
    buttonText: "Choose Premium",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Enterprise Plan",
    icon: <Building className="text-primary" size={32} />,
    description: "Comprehensive solution for businesses and large-scale operations",
    price: "Custom",
    period: "negotiable",
    features: [
      "Daily pickup services",
      "Comprehensive waste solutions",
      "Composting & recycling",
      "24/7 dedicated support",
      "Custom scheduling",
      "Volume-based pricing"
    ],
    popular: false,
    buttonText: "Choose Enterprise",
    color: "from-purple-500 to-pink-500"
  }
];

const additionalServices = [
  {
    title: "Residential Services",
    description: "Tailored solutions for households with flexible pickup schedules and affordable pricing.",
    icon: "🏠",
    features: ["Weekly collection", "Flexible timing", "Affordable rates", "Reliable service"]
  },
  {
    title: "Commercial Services",
    description: "Professional waste management for businesses, offices, and commercial establishments.",
    icon: "🏢",
    features: ["Daily collection", "Business hours", "Professional handling", "Custom contracts"]
  },
  {
    title: "Industrial Services",
    description: "Specialized solutions for construction sites, factories, and industrial facilities.",
    icon: "🏭",
    features: ["Heavy-duty collection", "Specialized equipment", "Safety protocols", "Regulatory compliance"]
  }
];

const Pricing = () => {
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
    <section id="pricing" className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-80 h-80 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary-glow rounded-full blur-2xl animate-float"></div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-scale">
          <div className="inline-flex items-center gap-3 bg-primary/15 border-2 border-primary/30 rounded-full px-8 py-4 mb-10 shadow-card">
            <Star className="text-primary" size={24} />
            <span className="text-primary font-bold text-base tracking-wide">PRICING PLANS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tight">
            Choose Your <span className="text-gradient">Plan</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
            Flexible pricing options designed to meet your specific waste management needs and budget.
          </p>
        </div>

        {/* Pickup Schedule Notice */}
        <div className="bg-primary/10 border-2 border-primary/20 rounded-2xl p-8 mb-16 text-center animate-fade-in-scale">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="text-primary" size={28} />
            <h3 className="text-2xl font-bold text-foreground">Pickup Schedule</h3>
          </div>
          <p className="text-foreground text-lg font-medium mb-2">
            <strong>Saturday Service:</strong> 10:00 AM - 2:30 PM
          </p>
          <p className="text-muted-foreground">
            Please ensure your waste is ready for collection during these hours
          </p>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`group card-modern shadow-hover hover:scale-105 transition-all duration-700 animate-fade-in-scale relative overflow-hidden ${
                plan.popular ? 'border-2 border-primary shadow-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-card">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardContent className="p-10 relative z-10">
                {/* Icon */}
                <div className="text-center mb-8">
                  <div className={`bg-gradient-to-br ${plan.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card group-hover:shadow-hover transition-all duration-500`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-black text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="text-3xl font-black text-foreground mb-2">
                    {plan.price}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {plan.period}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="text-primary flex-shrink-0" size={18} />
                      <span className="text-muted-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Button 
                  className={`w-full btn-modern ${plan.popular ? 'shadow-glow' : ''}`}
                  onClick={scrollToContact}
                >
                  {plan.buttonText}
                  <ArrowRight className="ml-2" size={16} />
                </Button>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-16 animate-fade-in-scale" style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-foreground mb-4">
              Who We <span className="text-primary">Serve</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our services are designed to meet the diverse needs of different client segments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="card-modern shadow-hover hover:scale-105 transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{service.title}</h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 justify-center">
                        <Check className="text-primary" size={14} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center animate-fade-in-scale" style={{ animationDelay: '0.8s' }}>
          <div className="card-modern p-12 max-w-4xl mx-auto shadow-hover">
            <h4 className="text-3xl font-black text-foreground mb-6">
              Need Help Choosing the Right Plan?
            </h4>
            <p className="text-muted-foreground mb-8 text-lg font-medium max-w-2xl mx-auto">
              Contact our team to discuss the best plan for your specific needs or to create a customized solution that fits your requirements perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                className="btn-modern"
                onClick={() => window.open('tel:09152870616', '_self')}
              >
                <Phone className="mr-2" size={16} />
                Call: 09152870616
              </Button>
              <Button 
                variant="outline"
                className="border-2 hover:border-primary transition-all duration-300"
                onClick={() => window.open('mailto:info@aret-environmental-ng.com', '_self')}
              >
                <Mail className="mr-2" size={16} />
                Email Us
              </Button>
              <Button 
                onClick={scrollToContact}
                className="bg-background text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;