import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import aretLogo from "@/assets/aret-logo.png";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:09152870616" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone size={14} />
              09152870616
            </a>
            <a href="mailto:info@aret-environmental-ng.com" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Mail size={14} />
              info@aret-environmental-ng.com
            </a>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <MapPin size={14} />
            No. 576 Oron Road, Uyo, Akwa Ibom State, Nigeria
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background shadow-elegant border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src={aretLogo} 
                alt="ARET Environmental Services Logo" 
                className="h-12 w-auto mr-3"
              />
              <div>
                <p className="text-xs text-muted-foreground">Environmental Services</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                About Us
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
                Services
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium">
                Pricing
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
            </div>

            {/* CTA Button */}
            <Button className="hidden md:flex bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-105">
              Get Quote
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;