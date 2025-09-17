import { Recycle, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import aretLogo from "@/assets/aret-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={aretLogo} 
                alt="ARET Environmental Services Logo" 
                className="h-10 w-auto mr-3"
              />
              <div>
                <p className="text-xs opacity-80">Environmental Services</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Leading provider of waste collection, management and disposal services for Uyo and 
              Akwa Ibom State communities. Partnering for sustainable solutions.
            </p>
            <div className="text-xs opacity-70 mb-4 p-3 bg-primary-foreground/5 rounded-lg">
              <p>CAC Registration No.: 8278298</p>
            </div>
            <div className="flex gap-3">
              <div className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Facebook size={16} />
              </div>
              <div className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Instagram size={16} />
              </div>
              <div className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                <Twitter size={16} />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Waste Collection</li>
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Waste Management</li>
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Waste Disposal</li>
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Recycling Programs</li>
              <li className="hover:opacity-100 cursor-pointer transition-opacity">General Environmental Services</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="hover:opacity-100 cursor-pointer transition-opacity">About Us</li>
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Our Services</li>
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Contact</li>
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Get Quote</li>
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Emergency Service</li>
              <li className="hover:opacity-100 cursor-pointer transition-opacity">Sustainability</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 opacity-80">
                <Phone size={14} />
                <span>Primary: 07032224738</span>
              </div>
              <div className="flex items-center gap-2 opacity-80">
                <Phone size={14} />
                <span>Front Desk/General Enquiry: 09152870616</span>
              </div>
              <div className="flex items-center gap-2 opacity-80">
                <Phone size={14} />
                <span>Operations: 09152870617</span>
              </div>
              <div className="flex items-center gap-2 opacity-80">
                <Mail size={14} />
                <span>info@aret-environmental-ng.com</span>
              </div>
              <div className="flex items-start gap-2 opacity-80">
                <MapPin size={14} className="mt-0.5" />
                <span>No. 576 Oron Road, Uyo<br />Akwa Ibom State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2 opacity-80 mt-3">
                <Phone size={14} />
                <span className="text-xs">Complaints & Incidents: 09152870618</span>
              </div>
              <div className="flex items-center gap-2 opacity-80">
                <Mail size={14} />
                <span className="text-xs">support@aret-environmental-ng.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>© 2025 ARET Environmental Services. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#policies" className="hover:opacity-100 cursor-pointer transition-opacity">Privacy Policy</a>
            <a href="#policies" className="hover:opacity-100 cursor-pointer transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;