import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Your Trusted Partner for Scalable Workforce Solutions
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              GridNest Workforce delivers high-quality manpower and operations support across industries like logistics, food tech, and customer service. We are your structured partner for scalable staffing, CX delivery, and backend ops support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">
                  Start Your Staffing Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ServicesPreview />
      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Scale Your Workforce?
            </h2>
            <p className="text-xl opacity-90">
              Join hundreds of businesses that trust GridNest for their staffing needs. Get started today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 bg-white/10 hover:text-blue-600 hover:border-blue-600" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}