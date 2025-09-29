import { Recycle, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import aretLogo from "@/assets/aret-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-glow rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent rounded-full blur-2xl animate-float"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src={aretLogo} 
                alt="ARET Environmental Services Logo" 
                className="h-12 w-auto mr-4"
              />
              <div>
                <p className="text-sm opacity-90 font-medium">Environmental Services</p>
              </div>
            </div>
            <p className="text-base opacity-90 mb-6 leading-relaxed font-medium">
              Leading provider of waste collection, management and disposal services for Uyo and 
              Akwa Ibom State communities. Partnering for sustainable solutions.
            </p>
            <div className="text-sm opacity-80 mb-6 p-4 bg-primary-foreground/10 rounded-xl border border-primary-foreground/20">
              <p className="font-semibold">CAC Registration No.: 8278298</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-primary-foreground/15 p-3 rounded-xl hover:bg-primary-foreground/25 transition-all duration-300 cursor-pointer hover:scale-110">
                <Facebook size={20} />
              </div>
              <div className="bg-primary-foreground/15 p-3 rounded-xl hover:bg-primary-foreground/25 transition-all duration-300 cursor-pointer hover:scale-110">
                <Instagram size={20} />
              </div>
              <div className="bg-primary-foreground/15 p-3 rounded-xl hover:bg-primary-foreground/25 transition-all duration-300 cursor-pointer hover:scale-110">
                <Twitter size={20} />
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-xl mb-6">Our Services</h4>
            <ul className="space-y-3 text-base opacity-90">
              <li className="hover:opacity-100 cursor-pointer transition-all duration-300 hover:translate-x-2 font-medium">Waste Collection</li>
              <li className="hover:opacity-100 cursor-pointer transition-all duration-300 hover:translate-x-2 font-medium">Waste Management</li>
              <li className="hover:opacity-100 cursor-pointer transition-all duration-300 hover:translate-x-2 font-medium">Waste Disposal</li>
              <li className="hover:opacity-100 cursor-pointer transition-all duration-300 hover:translate-x-2 font-medium">Recycling Programs</li>
              <li className="hover:opacity-100 cursor-pointer transition-all duration-300 hover:translate-x-2 font-medium">General Environmental Services</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3 text-base opacity-90">
              <li>
                <a href="/about" className="hover:opacity-100 cursor-pointer transition-all duration-300 hover:translate-x-2 font-medium hover:text-primary-glow">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 cursor-pointer transition-all duration-300 hover:translate-x-2 font-medium hover:text-primary-glow" onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                  Our Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 cursor-pointer transition-all duration-300 hover:translate-x-2 font-medium hover:text-primary-glow" onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:opacity-100 cursor-pointer transition-all duration-300 hover:translate-x-2 font-medium hover:text-primary-glow" onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#pricing');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                  Get Quote
                </a>
              </li>
              <li>
                <a href="tel:09152870616" className="hover:opacity-100 cursor-pointer transition-all duration-300 hover:translate-x-2 font-medium hover:text-primary-glow">
                  Emergency Service
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:opacity-100 cursor-pointer transition-all duration-300 hover:translate-x-2 font-medium hover:text-primary-glow">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-xl mb-6">Contact Info</h4>
            <div className="space-y-4 text-base">
              <div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
                <Phone size={16} />
                <span className="font-medium">Front Desk: 09152870616</span>
              </div>
              <div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
                <Phone size={16} />
                <span className="font-medium">Alternative: 07032224738</span>
              </div>
              <div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
                <Phone size={16} />
                <span className="font-medium">Operations: 09152870617</span>
              </div>
              <div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
                <Mail size={16} />
                <span className="font-medium">info@aret-environmental-ng.com</span>
              </div>
              <div className="flex items-start gap-3 opacity-90 hover:opacity-100 transition-opacity">
                <MapPin size={16} className="mt-1" />
                <span className="font-medium">No. 576 Oron Road, Uyo<br />Akwa Ibom State, Nigeria</span>
              </div>
              <div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity mt-4">
                <Phone size={16} />
                <span className="text-sm font-medium">Complaints & Incidents: 09152870618</span>
              </div>
              <div className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-opacity">
                <Mail size={16} />
                <span className="text-sm font-medium">support@aret-environmental-ng.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-base opacity-90">
          <p className="font-medium">© 2025 ARET Environmental Services. All rights reserved.</p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="/privacy-policy" className="hover:opacity-100 cursor-pointer transition-all duration-300 hover:text-primary-glow font-medium">Privacy Policy</a>
            <a href="/privacy-policy" className="hover:opacity-100 cursor-pointer transition-all duration-300 hover:text-primary-glow font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;