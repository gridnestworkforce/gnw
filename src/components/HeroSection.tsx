import { Button } from "@/components/ui/button";
import { ArrowRight, Users, CheckCircle, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      
      {/* Hero Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroBanner} 
          alt="Professional workforce" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Powering Teams.
                <span className="block text-blue-200">Structuring Growth.</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl">
                GridNest Workforce delivers high-quality manpower and operations support across industries like logistics, food tech, and customer service. We are your structured partner for scalable staffing, CX delivery, and backend ops support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 bg-white/10 hover:text-blue-600 hover:border-blue-600">
                <Link to="/services">Hire Staff Now</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">100%</p>
                  <p className="text-blue-200 text-sm">Verified Workforce</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">Pan-India</p>
                  <p className="text-blue-200 text-sm">Coverage</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-blue-200 text-sm">Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side content can be added here */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
              <div className="relative p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white">Why Choose GridNest?</h3>
                <ul className="space-y-4 text-white">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-300" />
                    <span>100% Verified Workforce</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-300" />
                    <span>Quick Deployment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-300" />
                    <span>Shift Flexibility</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-300" />
                    <span>End-to-End Compliance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}