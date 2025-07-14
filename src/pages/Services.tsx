import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Headphones, Building, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: Users,
      title: "Manpower Supply",
      description: "Comprehensive workforce solutions for various skill levels",
      features: [
        "Skilled & Semi-skilled labor",
        "Last-mile & warehouse staff",
        "Kitchen and housekeeping crew",
        "Security and maintenance personnel",
        "Data entry and administrative staff"
      ],
      benefits: [
        "Thorough background verification",
        "Skills assessment and training",
        "Flexible contract terms",
        "24/7 replacement guarantee"
      ]
    },
    {
      icon: Headphones,
      title: "CX & Call Center Support",
      description: "Professional customer experience and call center operations",
      features: [
        "Voice process agents",
        "Complaint resolution specialists",
        "Multilingual support teams",
        "Technical support representatives",
        "Sales and lead generation"
      ],
      benefits: [
        "Industry-specific training",
        "Quality monitoring systems",
        "Scalable team sizes",
        "Performance analytics"
      ]
    },
    {
  icon: 'Monitor',
  title: "IT Services & Support",
  description: "Comprehensive IT solutions and technical support services",
  features: [
    "Helpdesk and desktop support",
    "Network administration",
    "Cloud infrastructure management",
    "Cybersecurity monitoring",
    "Software installation and troubleshooting"
  ],
  benefits: [
    "Certified IT professionals",
    "24/7 support availability",
    "Proactive issue resolution",
    "Customizable IT solutions"
  ]
}
,
    {
      icon: Building,
      title: "Operational Staffing (Food & Retail)",
      description: "Specialized workforce for food service and retail operations",
      features: [
        "Kitchen helpers & packers",
        "Restaurant support crew",
        "Food preparation specialists",
        "Retail floor staff",
        "Inventory management teams"
      ],
      benefits: [
        "Food safety certified staff",
        "Hygiene protocol training",
        "Peak hour flexibility",
        "Cross-trained personnel"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold">Our Services</h1>
            <p className="text-xl opacity-90">
              Comprehensive workforce solutions designed to power your business growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold">{service.title}</h2>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Service Features:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="cta" size="lg">
                    Request Staff
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Card className="border-0 shadow-card">
                    <CardHeader>
                      <CardTitle>Key Benefits</CardTitle>
                      <CardDescription>What makes our {service.title.toLowerCase()} exceptional</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              Simple, transparent, and efficient staffing process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Requirement Analysis",
                description: "We understand your specific staffing needs and requirements"
              },
              {
                step: "02",
                title: "Candidate Selection",
                description: "Our team identifies and screens suitable candidates from our verified pool"
              },
              {
                step: "03",
                title: "Training & Onboarding",
                description: "Selected candidates undergo role-specific training and orientation"
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Staff deployment with ongoing support and performance monitoring"
              },
            ].map((process, index) => (
              <Card key={index} className="text-center border-0 bg-card">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-4">{process.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground text-sm">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90">
              Contact us today to discuss your staffing requirements and get a customized solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contact">
                  Get Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 bg-white/10 hover:text-blue-600 hover:border-blue-600" asChild>
                <Link to="/industries">View Industries</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}