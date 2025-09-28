import { Check, Star, Building, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Pricing = () => {
  const plans = [
    {
      name: "Subscription Plan",
      icon: <Home className="text-primary" size={32} />,
      description: "Perfect for regular residential and small commercial needs",
      schedule: "Weekly general waste collection",
      benefits: [
        "Weekly scheduled pickups",
        "General waste collection", 
        "Reliable service guarantee",
        "Competitive market rates",
        "Saturday service: 10 AM - 2:30 PM"
      ],
      popular: false,
      buttonText: "Choose Subscription",
      buttonStyle: "outline"
    },
    {
      name: "Premium Plan", 
      icon: <Star className="text-primary" size={32} />,
      description: "Enhanced service for environmentally conscious clients",
      schedule: "Weekly and biweekly pickup options",
      benefits: [
        "Flexible weekly or biweekly service",
        "Segregated waste collection",
        "Recyclable materials processing",
        "Priority customer support",
        "Environmental impact reporting"
      ],
      popular: true,
      buttonText: "Choose Premium",
      buttonStyle: "default"
    },
    {
      name: "Enterprise Plan",
      icon: <Building className="text-primary" size={32} />,
      description: "Comprehensive solution for large-scale operations", 
      schedule: "Daily pickup services available",
      benefits: [
        "Daily pickup service options",
        "Customizable collection schedule",
        "Comprehensive waste management solutions",
        "Dedicated account management",
        "Volume-based pricing negotiations"
      ],
      popular: false,
      buttonText: "Choose Enterprise", 
      buttonStyle: "outline"
    }
  ];

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead />
      <Header showTestimonials={false} onToggleTestimonials={() => {}} />
      
      <main className="pt-20">
        <section className="py-16 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Subscription <span className="text-accent">Plans</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your waste management needs with Saturday pickups from 10 AM to 2:30 PM.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card 
                  key={index}
                  className={`relative bg-card border rounded-xl p-8 shadow-sm hover:shadow-elegant transition-all duration-300 ${
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
                    <p className="text-muted-foreground text-sm mb-3">{plan.description}</p>
                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
                      <p className="text-accent font-semibold text-sm">{plan.schedule}</p>
                    </div>
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
                    onClick={scrollToContact}
                  >
                    {plan.buttonText}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Help Choosing the Right Plan?
            </h2>
            <p className="text-xl mb-8">
              Contact our team for a free consultation and customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <ArrowRight className="mr-2" size={20} />
                Get Custom Quote
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="tel:07032224738">Call: 070-3222-4738</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;