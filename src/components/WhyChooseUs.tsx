import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Clock, CheckCircle, Globe, Cpu } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "100% Verified Workforce",
      description: "All our staff undergo thorough background checks and verification processes"
    },
    {
      icon: Zap,
      title: "Quick Deployment",
      description: "Rapid staff deployment to meet your urgent business requirements"
    },
    {
      icon: Clock,
      title: "Shift Flexibility",
      description: "Flexible scheduling to match your operational needs and preferences"
    },
    {
      icon: CheckCircle,
      title: "End-to-End Compliance",
      description: "Complete regulatory compliance and documentation management"
    },
    {
      icon: Globe,
      title: "Scalable Across India",
      description: "Pan-India presence with local adaptability and understanding"
    },
    {
      icon: Cpu,
      title: "Tech & Process Ready",
      description: "Technology-driven tracking, coordination, and process optimization"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose GridNest?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We deliver excellence through verified workforce, technology, and unwavering commitment to quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-0 bg-card">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}