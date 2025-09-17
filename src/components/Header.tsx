import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+2348066158613" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone size={14} />
              +234 806 615 8613
            </a>
            <a href="mailto:info@aretenvironmental.ng" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Mail size={14} />
              info@aretenvironmental.ng
            </a>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <MapPin size={14} />
            Uyo, Akwa Ibom State, Nigeria
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background shadow-elegant border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-gradient-primary p-3 rounded-xl mr-3 shadow-glow">
                <div className="w-8 h-8 text-primary-foreground font-bold text-xl flex items-center justify-center">
                  A
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">ARET</h1>
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