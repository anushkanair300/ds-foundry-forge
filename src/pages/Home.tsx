import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Factory,
  Flame,
  Shield,
  Recycle,
  CheckCircle,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";
import heroImage from "@/assets/hero-foundry.jpg";

const Home = () => {
  const offerings = [
    {
      icon: Factory,
      title: "Phenolic Sand Plant",
      description: "Complete turnkey solutions for advanced sand plant machinery",
    },
    {
      icon: Flame,
      title: "Heat Treatment Furnace",
      description: "Gas / Oil / Electric furnaces for industrial excellence",
    },
    {
      icon: Recycle,
      title: "Foundry Equipment",
      description: "Ladle, Preheater, Swing Grinder, and Sand Mixture systems",
    },
    {
      icon: Shield,
      title: "Pollution Control",
      description: "First line of defence against foundry pollution",
    },
  ];

  const whyChooseUs = [
    { icon: Award, text: "40 Years of Experience" },
    { icon: TrendingUp, text: "Omega-Technology Design" },
    { icon: Shield, text: "Eco-friendly Processes" },
    { icon: Users, text: "Customized Turnkey Solutions" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-dark/95 via-industrial-dark/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight">
              Excellence in Foundry Solutions
            </h1>
            <p className="text-xl md:text-2xl text-background/90 mb-4">
              with 40 Years Experience
            </p>
            <p className="text-lg text-background/80 mb-8 max-w-2xl">
              DS Engineering delivers complete turnkey foundry solutions powered by decades
              of expertise — from Phenolic Sand Plants to Heat Treatment Furnaces and
              Pollution Control Systems.
            </p>
            <Link to="/services">
              <Button size="lg" className="text-lg px-8 py-6">
                Explore Our Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Offerings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete Turnkey Solutions for Modern Foundries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((offering, index) => {
              const Icon = offering.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {offering.title}
                    </h3>
                    <p className="text-muted-foreground">{offering.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground">
              Trusted partner in foundry excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-card rounded-lg border border-border"
                >
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <p className="font-semibold text-foreground">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Foundry Operations?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts for customized solutions tailored to your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Get Quote
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="min-w-[200px] bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
