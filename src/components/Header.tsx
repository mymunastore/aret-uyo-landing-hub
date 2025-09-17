import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import aretLogo from "@/assets/aret-logo.png";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    href: "#home",
    label: "Home"
  }, {
    href: "#services",
    label: "Services"
  }, {
    href: "#pricing",
    label: "Pricing"
  }, {
    href: "#about",
    label: "About"
  }, {
    href: "#contact",
    label: "Contact"
  }];
  return <header className="relative z-40">
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            
            <a href="tel:09152870616" className="flex items-center gap-1 hover:text-accent transition-colors">
              <Phone size={14} />
              09152870616
            </a>
            <a href="mailto:info@aret-environmental-ng.com" className="hidden md:flex items-center gap-1 hover:text-accent transition-colors">
              <Mail size={14} />
              info@aret-environmental-ng.com
            </a>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <MapPin size={14} />
            <span>Uyo, Akwa Ibom State</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={aretLogo} alt="ARET Environmental Services Logo" className="h-10 w-auto hover:scale-105 transition-transform duration-300" />
              <div className="hidden md:block">
                <span className="text-sm font-medium text-foreground">ARET</span>
                <p className="text-xs text-muted-foreground">Environmental Services</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => <a key={item.href} href={item.href} className="text-foreground hover:text-primary transition-colors font-medium relative group">
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>)}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button size="sm" className="hidden md:flex bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Get Quote
              </Button>
              
              {/* Mobile Menu Button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-64 pb-4" : "max-h-0"}`}>
            <div className="space-y-2 pt-4 border-t border-border">
              {navItems.map(item => <a key={item.href} href={item.href} className="block py-2 px-4 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>)}
              <div className="pt-2">
                <Button size="sm" className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>;
};
export default Header;