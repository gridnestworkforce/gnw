import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Leadership", href: "/leadership" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <div>
                <h1 className="font-bold text-xl text-primary">GridNest</h1>
                <p className="text-xs text-muted-foreground -mt-1">Workforce</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t bg-background">
              <nav className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                      isActive(item.href) ? "text-primary bg-secondary" : "text-muted-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-4">
                  <Button variant="cta" size="lg" className="w-full" asChild>
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                <div>
                  <h3 className="font-bold text-lg">GridNest</h3>
                  <p className="text-sm opacity-90">Workforce</p>
                </div>
              </div>
              <p className="text-sm opacity-90">
                Powering Teams. Structuring Growth.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="opacity-90 hover:opacity-100">About Us</Link></li>
                <li><Link to="/services" className="opacity-90 hover:opacity-100">Services</Link></li>
                <li><Link to="/industries" className="opacity-90 hover:opacity-100">Industries</Link></li>
                <li><Link to="/leadership" className="opacity-90 hover:opacity-100">Leadership</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li className="opacity-90">Manpower Supply</li>
                <li className="opacity-90">CX & Call Center Support</li>
                <li className="opacity-90">Operational Staffing</li>
                <li className="opacity-90">Workforce Management</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span className="opacity-90">gridnestworkforce@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span className="opacity-90">+91-9980026516</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span className="opacity-90">Indiranagar, Bangalore</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-90">
              © 2024 GridNest Workforce. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}