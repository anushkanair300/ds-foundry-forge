import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Users, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality solutions",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Driving technological advancement in foundry solutions",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Building lasting relationships through exceptional service",
    },
    {
      icon: Zap,
      title: "Sustainability",
      description: "Eco-friendly processes for a better tomorrow",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About DS Engineering
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Excellence in Foundry Solutions with 40 Years Experience
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Visionary Leadership
                    </h2>
                    <p className="text-muted-foreground">
                      Guided by Shri Purushottam Sharma
                    </p>
                  </div>
                </div>
                <p className="text-foreground leading-relaxed mb-4">
                  Guided by the vision and leadership of{" "}
                  <span className="font-semibold">Shri Purushottam Sharma</span>, who
                  brings over 40 years of foundry experience, DS Engineering has become a
                  trusted name in Phenolic Resin Sand Plant solutions.
                </p>
                <p className="text-foreground leading-relaxed">
                  Our founder's deep industry knowledge and commitment to innovation have
                  shaped DS Engineering into a company that not only meets but exceeds
                  industry standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Our Story
            </h2>
            <Card className="border-border">
              <CardContent className="p-8">
                <p className="text-foreground leading-relaxed mb-4">
                  We specialize in turnkey design, manufacturing, and installation of
                  advanced sand plant machinery for steel, heavy engineering, and iron &
                  ferrous foundries.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  Our commitment to innovation, quality, and sustainability drives us to
                  deliver reliable, high-performance solutions that enhance productivity and
                  reduce operational costs.
                </p>
                <p className="text-foreground leading-relaxed">
                  With four decades of hands-on experience, we understand the unique
                  challenges faced by modern foundries and provide tailored solutions that
                  address these needs effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-primary transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <Award className="h-16 w-16 mx-auto mb-6 opacity-90" />
                <h2 className="text-3xl font-bold mb-4">40 Years of Excellence</h2>
                <p className="text-lg opacity-90 leading-relaxed">
                  Four decades of continuous innovation, quality service, and customer
                  satisfaction have made DS Engineering a respected name in the foundry
                  industry. We are proud to be your trusted partner in foundry solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
