import { useState } from "react";
import { ChevronDown, ChevronUp, Eye, EyeOff, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showFAQ, setShowFAQ] = useState(true); // FAQ is shown by default for streamlined experience

  const faqData: FAQItem[] = [
    // Service Information
    {
      category: "Service Information",
      question: "What services does ARET Environmental Services provide?",
      answer: "We provide comprehensive waste collection, disposal, and recycling solutions for residential, commercial, and industrial clients. Our services include weekly waste collection, recyclable materials processing, and environmental consulting - all focused on sustainability and community care."
    },
    {
      category: "Service Information",
      question: "What are your pickup schedules?",
      answer: "Our main pickup schedule is Saturdays from 10:00 AM to 2:30 PM. We offer Subscription Plans (weekly collection), Premium Plans (weekly and biweekly options), and Enterprise Plans (daily pickup services). Clients are mapped to zones with designated pickup days."
    },
    {
      category: "Service Information",
      question: "How do you collect waste?",
      answer: "We use the bagged method for waste collection. We also provide garbage bags to our clients to help them manage their waste more effectively, demonstrating our commitment to comprehensive service."
    },
    
    // Pricing & Plans
    {
      category: "Pricing & Plans",
      question: "What subscription plans do you offer?",
      answer: "We offer three main plans: Subscription Plan (weekly general waste collection), Premium Plan (weekly and biweekly options with segregated collection), and Enterprise Plan (daily pickup services with comprehensive waste management solutions). All plans include Saturday service from 10 AM to 2:30 PM."
    },
    {
      category: "Pricing & Plans",
      question: "How do I choose the right plan for my needs?",
      answer: "Contact our team at 070-3222-4738 for a free consultation. We'll assess your waste generation patterns and recommend the most suitable plan - whether you're residential, commercial, or industrial."
    },

    // Contact & Support
    {
      category: "Contact & Support",
      question: "How can I reach ARET Environmental Services?",
      answer: "Primary contact: 070-3222-4738. General enquiry: 0915-287-0616. Operations: 0915-287-0617. Email: info@aret-environmental-ng.com. Visit us at No. 576 Oron Road, Uyo, Akwa Ibom State, Nigeria."
    },
    {
      category: "Contact & Support",
      question: "What are your business hours?",
      answer: "Monday - Friday: 8:00 AM - 6:00 PM. Pickup Schedule: Saturdays 10:00 AM - 2:30 PM. Sunday: Emergency Service Only. We're committed to being available when you need us most."
    },

    // Environmental Commitment
    {
      category: "Environmental Commitment",
      question: "How does ARET support environmental sustainability?",
      answer: "We practice the 3Rs: Reduce, Reuse, Recycle. We segregate waste, process recyclable materials, support a circular economy, and provide community education on sustainable practices. Our motto is 'Partnering for Sustainable Solutions.'"
    },
    {
      category: "Environmental Commitment",
      question: "What makes ARET different from other waste management companies?",
      answer: "Like a nurturing mother cares for her family, ARET cares for the community. We combine reliable service with environmental stewardship, provide garbage bags to clients, maintain 98% customer satisfaction, and focus on measurable community impact."
    }
  ];

  // Group FAQs by category
  const categories = [...new Set(faqData.map(item => item.category))];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our waste management services and community commitment.
          </p>
        </div>

        {/* FAQ Content */}
        {showFAQ && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            {categories.map((category, categoryIndex) => (
              <div key={category} className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-primary/20">
                  {category}
                </h3>
                
                <div className="space-y-4">
                  {faqData
                    .filter(item => item.category === category)
                    .map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex; // Unique index
                      const isOpen = openIndex === globalIndex;
                      
                      return (
                        <div 
                          key={globalIndex}
                          className="bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                          <button
                            onClick={() => toggleFAQ(globalIndex)}
                            className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/50 transition-colors rounded-lg"
                          >
                            <span className="font-medium text-foreground pr-4">
                              {faq.question}
                            </span>
                            {isOpen ? (
                              <ChevronUp className="text-primary flex-shrink-0" size={20} />
                            ) : (
                              <ChevronDown className="text-primary flex-shrink-0" size={20} />
                            )}
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 pb-4">
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Still have questions? We're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:07032224738" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Call Us: 070-3222-4738
                </a>
                <a 
                  href="mailto:info@aret-environmental-ng.com" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Alternative message when FAQ is hidden */}
        {!showFAQ && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
              <HelpCircle className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Click the button above to view our comprehensive FAQ section, or contact us directly for immediate assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:07032224738" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Call Us: 070-3222-4738
                </a>
                <a 
                  href="mailto:info@aret-environmental-ng.com" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;