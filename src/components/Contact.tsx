import { Phone, Mail, MapPin, Clock } from "lucide-react";
import GoogleRegistrationForm from "@/components/GoogleRegistrationForm";

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-glow rounded-full blur-3xl animate-bounce-gentle"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-scale">
          <div className="inline-flex items-center gap-3 bg-primary/15 border-2 border-primary/30 rounded-full px-8 py-4 mb-10 shadow-card">
            <Phone className="text-primary" size={24} />
            <span className="text-primary font-bold text-base tracking-wide">GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tight">
            <span className="text-gradient">Contact</span> Us Today
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
            Ready to start your waste management journey? Contact us today for 
            a free consultation and personalized quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-scale">
            <h3 className="text-3xl font-black text-foreground mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">
              {/* Phone Numbers */}
              <div className="flex items-start gap-6 p-8 card-modern shadow-hover hover:scale-105 transition-all duration-500">
                <div className="bg-gradient-primary p-4 rounded-2xl shadow-card">
                  <Phone className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-3 text-xl">Phone</h4>
                  <a href="tel:09152870616" className="text-foreground font-bold text-lg hover:text-primary transition-colors block">Front Desk: 09152870616</a>
                  <a href="tel:07032224738" className="text-foreground font-bold text-lg hover:text-primary transition-colors block">Alternative: 07032224738</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6 p-8 card-modern shadow-hover hover:scale-105 transition-all duration-500">
                <div className="bg-gradient-primary p-4 rounded-2xl shadow-card">
                  <Mail className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-3 text-xl">Email</h4>
                  <a href="mailto:info@aret-environmental-ng.com" className="text-foreground font-bold text-lg hover:text-primary transition-colors block">info@aret-environmental-ng.com</a>
                  <a href="mailto:support@aret-environmental-ng.com" className="text-foreground font-bold text-base mt-2 hover:text-primary transition-colors block">support@aret-environmental-ng.com</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-6 p-8 card-modern shadow-hover hover:scale-105 transition-all duration-500">
                <div className="bg-gradient-primary p-4 rounded-2xl shadow-card">
                  <MapPin className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-3 text-xl">Address</h4>
                  <p className="text-foreground font-bold text-lg">
                    No. 576 Oron Road, Uyo<br />
                    Akwa Ibom State, Nigeria
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-6 p-8 card-modern shadow-hover hover:scale-105 transition-all duration-500">
                <div className="bg-gradient-primary p-4 rounded-2xl shadow-card">
                  <Clock className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-3 text-xl">Business Hours</h4>
                  <div className="text-foreground font-bold space-y-2 text-lg">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:30 PM</p>
                    <p>Sunday: Emergency Services Only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
            <GoogleRegistrationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;