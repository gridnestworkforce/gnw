import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/gnw_logo.png";


export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
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
            <img
              src={logo}
              alt="GridNest Logo"
              className="h-10 w-auto sm:h-12 md:h-14 lg:h-16"
            />
          </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-20">
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

      {/* Company Info */}
      <div className="flex space-y-4 m-auto flex-col text-center">
        <img
          src={logo}
          alt="GridNest Workforce Logo"
          className=" w-[50%] h-auto object-contain rounded-lg"
        />
        <p className="text-sm w-[50%] opacity-90">
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="/about" className="opacity-90 hover:opacity-100">About Us</Link>
          </li>
          <li>
            <Link to="/services" className="opacity-90 hover:opacity-100">Services</Link>
          </li>
          <li>
            <Link to="/industries" className="opacity-90 hover:opacity-100">Industries</Link>
          </li>
          <li>
            <Link to="/leadership" className="opacity-90 hover:opacity-100">Leadership</Link>
          </li>
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
        <div className="space-y-3 text-sm">
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <a href="mailto:gridnestworkforce@gmail.com" className="opacity-90 hover:underline">
              gridnestworkforce@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <a href="tel:+919980026516" className="opacity-90 hover:underline">
              +91-9980026516
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span className="opacity-90">Indiranagar, Bangalore</span>
          </div>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="border-t border-white/20 mt-10 pt-6 text-center">
      <p className="text-sm opacity-90">
        © 2024 GridNest Workforce. All rights reserved.
      </p>
    </div>
  </div>
</footer>

    </div>
  );
}