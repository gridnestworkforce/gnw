import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import ramPhoto from "@/assets/ram-photo.jpg";
import viswaPhoto from "@/assets/viswa-photo.jpg";

export default function Leadership() {
  const leaders = [
    {
      name: "Ram",
      title: "Founder & Director",
      image: ramPhoto,
      bio: "Over a decade of experience in workforce management and logistics. Drives GridNest's strategic vision while staying hands-on with operations.",
      expertise: ["Workforce Management", "Strategic Planning", "Operations", "Business Development"],
      experience: "10+ years"
    },
    {
      name: "Viswa Virat",
      title: "Co-Founder / Head of Operations",
      image: viswaPhoto,
      bio: "Executes on-ground operations with focus on scalable solutions, compliance, and professionalism.",
      expertise: ["Operations Management", "Process Optimization", "Quality Assurance", "Team Leadership"],
      experience: "8+ years"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold">Leadership Team</h1>
            <p className="text-xl opacity-90">
              Meet the visionaries driving GridNest's mission to transform workforce management
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Profiles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {leaders.map((leader, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="border-0 shadow-card overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-square bg-gradient-primary">
                        <img 
                          src={leader.image} 
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{leader.name}</h2>
                    <p className="text-xl text-primary font-semibold mb-4">{leader.title}</p>
                    <p className="text-lg text-muted-foreground leading-relaxed">{leader.bio}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Experience</h3>
                      <p className="text-primary font-medium">{leader.experience}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2">Areas of Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {leader.expertise.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Leadership Philosophy</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                "Leadership is not about being in charge. It's about taking care of those in your charge and empowering them to achieve their best."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 bg-card">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-3">People First</h3>
                  <p className="text-muted-foreground">
                    Our workforce is our most valuable asset. We invest in their growth, well-being, and professional development.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-3">Innovation Driven</h3>
                  <p className="text-muted-foreground">
                    We constantly seek new ways to improve our processes, leverage technology, and deliver better outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-3">Results Oriented</h3>
                  <p className="text-muted-foreground">
                    We measure success not just by our growth, but by the success of our clients and the satisfaction of our workforce.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Culture</h2>
              <p className="text-xl text-muted-foreground">
                Building a workplace where everyone can thrive
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">What Drives Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <strong>Collaborative Environment</strong>
                      <p className="text-muted-foreground text-sm">Open communication and teamwork across all levels</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <strong>Continuous Learning</strong>
                      <p className="text-muted-foreground text-sm">Regular training and skill development opportunities</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <strong>Work-Life Balance</strong>
                      <p className="text-muted-foreground text-sm">Flexible working arrangements and wellness programs</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Our Values in Action</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <strong>Diversity & Inclusion</strong>
                      <p className="text-muted-foreground text-sm">Embracing different perspectives and backgrounds</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <strong>Social Responsibility</strong>
                      <p className="text-muted-foreground text-sm">Contributing to community development and social causes</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <strong>Ethical Leadership</strong>
                      <p className="text-muted-foreground text-sm">Leading by example with integrity and transparency</p>
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
              Want to Work with Us?
            </h2>
            <p className="text-xl opacity-90">
              Join our mission to transform workforce management. Whether you're looking for staffing solutions or career opportunities, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/20 bg-white/10 hover:text-blue-600 hover:border-blue-600" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}