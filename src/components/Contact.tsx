import { Phone, Mail, MapPin, Clock } from "lucide-react";
import GoogleRegistrationForm from "@/components/GoogleRegistrationForm";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your waste management journey? Contact us today for 
            a free consultation and personalized quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h3>

            <div className="space-y-6">
              {/* Phone Numbers */}
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl hover-lift border border-border/50 shadow-sm">
                <div className="bg-primary/20 border border-primary/30 p-4 rounded-lg shadow-sm">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-lg">Phone</h4>
                  <p className="text-foreground font-medium">Primary: 07032224738</p>
                  <p className="text-foreground font-medium">General Enquiry: 09152870616</p>
                  <p className="text-foreground font-medium">Operations: 09152870617</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl hover-lift border border-border/50 shadow-sm">
                <div className="bg-primary/20 border border-primary/30 p-4 rounded-lg shadow-sm">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-lg">Email</h4>
                  <p className="text-foreground font-medium">info@aret-environmental-ng.com</p>
                  <p className="text-foreground font-medium text-sm mt-1">support@aret-environmental-ng.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl hover-lift border border-border/50 shadow-sm">
                <div className="bg-primary/20 border border-primary/30 p-4 rounded-lg shadow-sm">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-lg">Address</h4>
                  <p className="text-foreground font-medium">
                    No. 576 Oron Road, Uyo<br />
                    Akwa Ibom State, Nigeria
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl hover-lift border border-border/50 shadow-sm">
                <div className="bg-primary/20 border border-primary/30 p-4 rounded-lg shadow-sm">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-lg">Business Hours</h4>
                  <div className="text-foreground font-medium space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p><strong>Pickup Schedule:</strong> Saturdays 10:00 AM - 2:30 PM</p>
                    <p>Sunday: Emergency Service Only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <GoogleRegistrationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;