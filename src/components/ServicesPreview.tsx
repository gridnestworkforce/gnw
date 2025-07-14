import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Headphones, Building, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesPreview() {
  const services = [
    {
      icon: Users,
      title: "Manpower Supply",
      description: "Skilled & semi-skilled labor, last-mile & warehouse staff, kitchen and housekeeping crew",
      features: ["Verified workforce", "Quick deployment", "Scalable solutions"]
    },
    {
      icon: Headphones,
      title: "CX & Call Center Support",
      description: "Voice process agents, complaint resolution, multilingual support",
      features: ["24/7 availability", "Trained professionals", "Multi-language support"]
    },
    {
      icon: Building,
      title: "Operational Staffing",
      description: "Kitchen helpers & packers, restaurant support crew for food & retail",
      features: ["Industry expertise", "Flexible shifts", "Quality assurance"]
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive workforce solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-0 bg-card">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Request Staff
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="cta" size="xl" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}