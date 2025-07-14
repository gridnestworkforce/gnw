import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold">About GridNest</h1>
            <p className="text-xl opacity-90">
              Building the future of workforce management through structured solutions and reliable partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <Card className="border-0 shadow-card">
              <CardContent className="p-8 text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become India's most trusted partner for structured and scalable workforce solutions.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-0 shadow-card">
              <CardContent className="p-8 text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower businesses with reliable, well-trained crews backed by efficient systems and ethical practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
              <p className="text-xl text-muted-foreground">
                Built on experience, driven by innovation
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="text-center space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  GridNest Workforce was founded with a simple yet powerful vision: to transform how businesses access and manage their workforce. In today's rapidly evolving business landscape, companies need more than just staffing solutions—they need strategic partners who understand their unique challenges and can adapt quickly to their changing needs.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our founders, with over a decade of combined experience in workforce management and logistics, recognized the gap between traditional staffing agencies and what modern businesses truly need. They envisioned a company that would combine the reliability of traditional hiring with the efficiency of modern technology and the flexibility of contemporary business practices.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, GridNest serves diverse industries across India, from logistics and food tech to customer service and retail. Our success is built on three pillars: verified workforce quality, technological innovation, and unwavering commitment to our clients' success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                  <p className="text-muted-foreground">
                    We maintain the highest standards in workforce verification and training to ensure excellence in every deployment.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                  <p className="text-muted-foreground">
                    Clear communication, honest pricing, and complete compliance documentation in all our partnerships.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    Leveraging technology to streamline processes and provide real-time visibility into workforce management.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                  <p className="text-muted-foreground">
                    Consistent delivery on promises with backup plans and contingency measures for critical operations.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Scalability</h3>
                  <p className="text-muted-foreground">
                    Building solutions that grow with your business, from startup phases to enterprise-level operations.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2">Partnership</h3>
                  <p className="text-muted-foreground">
                    Working as an extension of your team, understanding your culture and business objectives deeply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Partner with GridNest Today
            </h2>
            <p className="text-xl opacity-90">
              Experience the difference of working with a workforce partner that truly understands your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contact">
                  Start Partnership
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 bg-white/10 hover:text-blue-600 hover:border-blue-600" asChild>
                <Link to="/leadership">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}