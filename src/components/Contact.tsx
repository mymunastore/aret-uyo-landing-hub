import { Phone, Mail, MapPin, Clock } from "lucide-react";
import AdvancedContactForm from "@/components/AdvancedContactForm";

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
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl hover-lift">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                  <p className="text-muted-foreground">07032224738</p>
                  <p className="text-muted-foreground">09152870616</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl hover-lift">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <p className="text-muted-foreground">info@aret-environmental-ng.com</p>
                  <p className="text-muted-foreground text-sm mt-1">support@aret-environmental-ng.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl hover-lift">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Address</h4>
                  <p className="text-muted-foreground">
                    No. 576 Oron Road, Uyo<br />
                    Akwa Ibom State, Nigeria
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl hover-lift">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Business Hours</h4>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Emergency Service Only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <AdvancedContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;