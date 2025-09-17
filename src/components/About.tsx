import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Recycle, RotateCcw, Minus, ArrowRight, Shield, Clock } from "lucide-react";
import about3Rs from "@/assets/about-3rs.jpg";

const principles = [
  {
    icon: Recycle,
    title: "Recycle",
    description: "Converting waste materials into reusable products to prevent environmental harm.",
    color: "text-primary",
  },
  {
    icon: Minus,
    title: "Reduce",
    description: "Minimizing waste generation through efficient practices and conscious consumption.",
    color: "text-accent",
  },
  {
    icon: RotateCcw,
    title: "Reuse",
    description: "Finding new purposes for materials before considering disposal options.",
    color: "text-primary-glow",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side - CEO Welcome Message */}
          <div>
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Welcome Message <span className="text-primary">From The CEO</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Dear valued customers and community members, As the CEO of our waste collection and disposal company, I am 
                honoured to extend a warm welcome to you. Our organization is deeply committed to providing exceptional service 
                while prioritizing the well-being of our community and the environment. We understand that effective waste 
                management is crucial not only for maintaining cleanliness but also for fostering a sustainable future.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Our Commitment to You:</h3>
                <div className="space-y-3">
                  <p>
                    <strong className="text-foreground">Customer Satisfaction:</strong> We strive to deliver reliable, efficient, and 
                    personalized waste management solutions tailored to your needs. Whether you are a residential, commercial, or 
                    industrial client, we are dedicated to ensuring your satisfaction and peace of mind.
                  </p>
                  <p>
                    <strong className="text-foreground">Community Engagement:</strong> We believe in being an active and responsible 
                    member of our community. Through partnerships with local organizations and initiatives, we aim to contribute 
                    positively to environmental conservation and social welfare.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Sustainability:</h3>
                <p>
                  Our operations are guided by a strong sustainability framework. We aim to invest in innovative technologies and 
                  practices that minimize waste, promote recycling, and reduce our environmental footprint. Our goal is to support 
                  a circular economy where resources are valued and utilized responsibly.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Looking Forward:</h3>
                <p>
                  As we continue to grow and evolve, we remain steadfast in our commitment to you and our community. We are excited 
                  about the opportunities ahead to enhance our services, expand our sustainability initiatives, and make a lasting impact.
                </p>
                <p>
                  Thank you for choosing us as your waste management partner. We look forward to working together to create a cleaner, 
                  greener future for everyone.
                </p>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-foreground font-medium">Warm regards,</p>
                <p className="text-primary font-bold">CEO, ARET Environmental Services</p>
              </div>
            </div>

            <Button className="mt-8 bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-105">
              Learn More About Our Mission
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </div>

          {/* Visual Section with 3Rs Cards */}
          <div className="space-y-6">
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden mb-8">
                <img 
                  src={about3Rs} 
                  alt="3Rs Approach - Reduce, Reuse, Recycle"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold text-primary-foreground">
                  Sustainable Solutions
                </h3>
                <p className="text-primary-foreground/90 text-sm">
                  Environmental responsibility at its core
                </p>
              </div>
            </div>

            {/* 3Rs Cards */}
            {principles.map((principle, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-primary p-3 rounded-xl group-hover:shadow-glow transition-all duration-300">
                      <principle.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;