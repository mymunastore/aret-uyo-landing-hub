import { Check, Star, Building, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      icon: <Home className="text-primary" size={32} />,
      description: "Perfect for households and small properties",
      benefits: [
        "Company house sticker",
        "Domestic waste poster", 
        "A roll of waste bags quarterly"
      ],
      popular: false,
      buttonText: "Choose Basic",
      buttonStyle: "outline"
    },
    {
      name: "Premium Plan", 
      icon: <Star className="text-primary" size={32} />,
      description: "Enhanced service for environmentally conscious clients",
      benefits: [
        "All Basic Plan benefits",
        "Recyclable waste poster",
        "An additional roll of waste bags",
        "Total of two rolls quarterly"
      ],
      popular: true,
      buttonText: "Choose Premium",
      buttonStyle: "default"
    },
    {
      name: "Enterprise Plan",
      icon: <Building className="text-primary" size={32} />,
      description: "Comprehensive solution for businesses and large properties", 
      benefits: [
        "All Premium Plan benefits",
        "Two rolls of waste bags monthly",
        "Priority customer support",
        "Dedicated account management"
      ],
      popular: false,
      buttonText: "Choose Enterprise", 
      buttonStyle: "outline"
    }
  ];

  const additionalServices = [
    {
      title: "Waste Bins",
      description: "Available at an affordable fee",
      icon: "🗑️"
    },
    {
      title: "Customized Plans",
      description: "If you are not comfortable with our standard fees, we are open to developing a specific plan tailored to meet your needs at a budget-friendly fee. Please contact us to discuss further.",
      icon: "⚙️"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Subscription Plans
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your waste management needs. All plans include professional waste collection services.
          </p>
        </div>

        {/* Subscription Plans */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card border rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 ${
                plan.popular ? 'border-primary shadow-glow scale-105' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-foreground">Plan Benefits:</h4>
                {plan.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-start gap-3">
                    <Check className="text-primary flex-shrink-0 mt-1" size={16} />
                    <span className="text-muted-foreground text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="w-full"
                variant={plan.buttonStyle === 'outline' ? 'outline' : 'default'}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Additional Services</h3>
            <p className="text-muted-foreground">
              Enhance your waste management experience with our additional offerings
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-2xl flex-shrink-0">{service.icon}</div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-foreground mb-4">
              Need Help Choosing?
            </h4>
            <p className="text-muted-foreground mb-6">
              Contact our team to discuss the best plan for your specific needs or to create a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="tel:09152870617">Call Us: 0915 287 0617</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:info@aret-environmental-ng.com">Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;