import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your waste management journey? Contact us today for 
            professional, reliable, and sustainable waste solutions in Uyo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <Card className="border-0 bg-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-primary p-3 rounded-xl">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">+234 806 615 8613</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-primary p-3 rounded-xl">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">info@aretenvironmental.ng</p>
                      <p className="text-xs text-muted-foreground mt-1">We respond within 2 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-primary p-3 rounded-xl">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Location</h4>
                      <p className="text-muted-foreground">Uyo, Akwa Ibom State</p>
                      <p className="text-muted-foreground">Nigeria</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-primary p-3 rounded-xl">
                      <Clock className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Working Hours</h4>
                      <p className="text-muted-foreground">Mon - Fri: 7:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Sat: 8:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 bg-card shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Request a Quote
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Full Name" className="border-border" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email Address" className="border-border" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input type="tel" placeholder="Phone Number" className="border-border" />
                  </div>
                  <div>
                    <Input placeholder="Service Type" className="border-border" />
                  </div>
                </div>
                
                <div>
                  <Textarea 
                    placeholder="Tell us about your waste management needs..." 
                    className="border-border min-h-[120px]" 
                  />
                </div>
                
                <Button className="w-full bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-105">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;