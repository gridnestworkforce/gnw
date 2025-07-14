import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const contactData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string || null,
      service: formData.get('service') as string || null,
      message: formData.get('message') as string,
    };

    try {
      const { error } = await supabase
        .from('contacts')
        .insert(contactData);

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
            <p className="text-xl opacity-90">
              Ready to transform your workforce? Let's discuss your staffing needs and find the perfect solution for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and our team will get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          required 
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          required 
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          type="tel" 
                          required 
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input 
                          id="company" 
                          name="company" 
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <select 
                        id="service" 
                        name="service" 
                        className="w-full px-3 py-2 border border-input bg-background rounded-md"
                      >
                        <option value="">Select a service</option>
                        <option value="manpower">Manpower Supply</option>
                        <option value="cx-support">CX & Call Center Support</option>
                        <option value="operational">Operational Staffing</option>
                        <option value="multiple">Multiple Services</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        required 
                        rows={5}
                        placeholder="Tell us about your staffing requirements, expected timeline, and any specific needs..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="cta" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>
                    Multiple ways to connect with our team
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-muted-foreground">gridnestworkforce@gmail.com</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">+91-9980026516</p>
                      <p className="text-sm text-muted-foreground">Mon-Sat, 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="text-muted-foreground">Ejipura, Bangalore</p>
                      <p className="text-sm text-muted-foreground">Karnataka, India</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-muted-foreground">Sunday - Saturday</p>
                      <p className="text-sm text-muted-foreground">10:00 AM - 10:00 PM IST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card bg-gradient-primary text-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Need Immediate Help?</h3>
                  <p className="text-sm opacity-90 mb-4">
                    For urgent staffing requirements or emergency support, call us directly.
                  </p>
                  <Button variant="hero" className="w-full bg-white text-primary hover:bg-white/90">
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="border-0 bg-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">How quickly can you deploy staff?</h3>
                  <p className="text-sm text-muted-foreground">
                    We can typically deploy staff within 24-48 hours for urgent requirements, and within a week for planned staffing needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What industries do you serve?</h3>
                  <p className="text-sm text-muted-foreground">
                    We serve logistics, food tech, e-commerce, BPO, hospitality, retail, and many other industries across India.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Do you handle compliance?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, we handle all compliance requirements including documentation, verification, and regulatory adherence.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border-0 bg-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What's your pricing model?</h3>
                  <p className="text-sm text-muted-foreground">
                    Our pricing is competitive and transparent, based on role complexity, duration, and volume requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Do you provide training?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes, we provide role-specific training and orientation for all deployed staff to ensure they meet your standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">What if staff doesn't meet expectations?</h3>
                  <p className="text-sm text-muted-foreground">
                    We offer replacement guarantee and continuous monitoring to ensure all staff meet your performance expectations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}