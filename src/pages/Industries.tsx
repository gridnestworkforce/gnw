import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, ChefHat, ShoppingCart, Headphones, Building, Utensils, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Industries() {
  const industries = [
    {
      icon: Truck,
      title: "Logistics & Delivery",
      description: "Last-mile delivery, warehouse operations, and supply chain support",
      services: ["Delivery personnel", "Warehouse staff", "Loading/unloading crews", "Inventory management"],
      stats: "500+ delivery professionals deployed"
    },
    {
      icon: ChefHat,
      title: "Food Tech & Cloud Kitchens",
      description: "Kitchen operations, food preparation, and quality assurance teams",
      services: ["Kitchen helpers", "Food prep specialists", "Quality checkers", "Packaging staff"],
      stats: "200+ cloud kitchens supported"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce & Retail",
      description: "Retail floor operations, customer service, and order fulfillment",
      services: ["Sales associates", "Store managers", "Stock personnel", "Customer service reps"],
      stats: "100+ retail locations staffed"
    },
    {
      icon: Headphones,
      title: "Customer Support / BPO",
      description: "Call center operations, technical support, and customer experience",
      services: ["Voice process agents", "Chat support", "Technical support", "Lead generation"],
      stats: "1000+ agents trained & deployed"
    },
    {
      icon: Building,
      title: "Hospitality & Facilities",
      description: "Hotel operations, facility management, and guest services",
      services: ["Housekeeping staff", "Front desk personnel", "Maintenance crews", "Security guards"],
      stats: "50+ hospitality partners"
    },
    {
      icon: Utensils,
      title: "Restaurants & Catering",
      description: "Restaurant operations, catering services, and event management",
      services: ["Service staff", "Kitchen support", "Event coordinators", "Catering teams"],
      stats: "300+ restaurant staff placed"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold">Industries We Serve</h1>
            <p className="text-xl opacity-90">
              Specialized workforce solutions across diverse industry verticals
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise Spans Multiple Sectors</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From startups to enterprises, we provide tailored workforce solutions for every industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 bg-card">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                  <CardDescription className="text-base">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Services Provided:</h4>
                    <ul className="space-y-1">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t">
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              Real results from our industry partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 bg-card">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="text-3xl font-bold text-primary">48hrs</div>
                  <h3 className="font-semibold">Rapid Deployment</h3>
                  <p className="text-sm text-muted-foreground">
                    Deployed 50+ delivery staff for a major e-commerce player during peak season in just 48 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="text-3xl font-bold text-primary">99.5%</div>
                  <h3 className="font-semibold">Attendance Rate</h3>
                  <p className="text-sm text-muted-foreground">
                    Maintained 99.5% attendance rate for a leading cloud kitchen chain across 15 locations
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-card">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="text-3xl font-bold text-primary">30%</div>
                  <h3 className="font-semibold">Cost Reduction</h3>
                  <p className="text-sm text-muted-foreground">
                    Helped a BPO company reduce operational costs by 30% through optimized staffing solutions
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vendor Partnerships */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Diverse Partners</h2>
            <p className="text-xl text-muted-foreground">
              Building lasting partnerships across India
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Why Partners Choose Us:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <strong>Quick turnaround on urgent staffing needs</strong>
                      <p className="text-muted-foreground text-sm">Rapid response for critical business requirements</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <strong>Reliable, verified manpower at scale</strong>
                      <p className="text-muted-foreground text-sm">Thoroughly vetted workforce for all your needs</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <strong>End-to-end compliance and transparency</strong>
                      <p className="text-muted-foreground text-sm">Complete documentation and regulatory adherence</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Our Commitment:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <strong>Pan-India deployment with local adaptability</strong>
                      <p className="text-muted-foreground text-sm">National reach with local market understanding</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <strong>Tech-driven tracking and coordination</strong>
                      <p className="text-muted-foreground text-sm">Real-time monitoring and efficient management</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <strong>Continuous improvement and innovation</strong>
                      <p className="text-muted-foreground text-sm">Evolving solutions for changing business needs</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Don't See Your Industry?
            </h2>
            <p className="text-xl opacity-90">
              We're always expanding our expertise. Contact us to discuss how we can support your specific industry needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contact">
                  Discuss Your Needs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 bg-white/10 hover:text-blue-600 hover:border-blue-600" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}