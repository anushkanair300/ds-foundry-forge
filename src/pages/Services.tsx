import { Card, CardContent } from "@/components/ui/card";
import {
  Factory,
  Flame,
  Recycle,
  Shield,
  Layers,
  Droplet,
  Hammer,
  Filter,
} from "lucide-react";
import heatTreatmentImage from "@/assets/heat-treatment.jpg";
import sandPlantImage from "@/assets/sand-plant.jpg";
import pollutionControlImage from "@/assets/pollution-control.jpg";

const Services = () => {
  const mainServices = [
    {
      icon: Factory,
      title: "Phenolic Sand Plant",
      description:
        "Complete turnkey solutions for advanced sand plant machinery designed for steel, heavy engineering, and iron & ferrous foundries.",
      image: sandPlantImage,
      features: [
        "Phenolic Sand Plant Setup",
        "Sand Reclamation System",
        "Resin Coating Units",
        "Attrition Unit",
      ],
    },
    {
      icon: Flame,
      title: "Heat Treatment Furnace",
      description:
        "High-efficiency heating solutions engineered for industrial excellence with precision-controlled operations.",
      image: heatTreatmentImage,
      features: [
        "Gas / Oil / Electric Fired Furnaces",
        "Movable Bogie Hearth Design",
        "Capacities up to 100 Tons",
        "Maximum Fuel Efficiency",
      ],
    },
    {
      icon: Recycle,
      title: "Foundry Equipment",
      description:
        "Comprehensive range of foundry equipment designed for optimal performance and durability.",
      features: [
        "Industrial Ladles",
        "Ladle Preheaters",
        "Swing Grinders",
        "Sand Mixture Systems",
      ],
    },
    {
      icon: Shield,
      title: "Pollution Control Plant",
      description:
        "Advanced pollution control systems – the foundry's first line of defence against environmental impact.",
      image: pollutionControlImage,
      features: [
        "Dust Collection Systems",
        "Fume Extraction Units",
        "Air Filtration Systems",
        "Emission Control Solutions",
      ],
    },
  ];

  const specializedSystems = [
    {
      icon: Layers,
      title: "Phenolic Sand Plant Setup",
      description: "Complete installation and commissioning services",
    },
    {
      icon: Recycle,
      title: "Sand Reclamation System",
      description: "Efficient sand recovery and reuse solutions",
    },
    {
      icon: Droplet,
      title: "Resin Coating Units",
      description: "Precision coating technology for optimal results",
    },
    {
      icon: Hammer,
      title: "Attrition Unit",
      description: "Advanced sand conditioning equipment",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Complete Turnkey Solutions for Modern Foundries
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    isEven ? "" : "lg:grid-flow-dense"
                  }`}
                >
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <Card className="border-border h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon className="h-7 w-7 text-primary" />
                          </div>
                          <h2 className="text-2xl font-bold text-foreground">
                            {service.title}
                          </h2>
                        </div>
                        <p className="text-foreground leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <div className="space-y-2">
                          <h3 className="font-semibold text-foreground mb-3">
                            Key Features:
                          </h3>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-primary mr-2 mt-1">✓</span>
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className={isEven ? "lg:col-start-2" : "lg:col-start-1 lg:row-start-1"}>
                    {service.image && (
                      <div className="rounded-lg overflow-hidden shadow-lg h-full min-h-[300px]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialized Systems */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Specialized Systems
            </h2>
            <p className="text-lg text-muted-foreground">
              Advanced solutions for specific foundry needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedSystems.map((system, index) => {
              const Icon = system.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-primary transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {system.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{system.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Heat Treatment Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-border bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <Flame className="h-12 w-12 opacity-90" />
                  <h2 className="text-3xl font-bold">Heat Treatment Excellence</h2>
                </div>
                <p className="text-lg opacity-90 leading-relaxed mb-4">
                  High-efficiency heating solutions for industrial excellence with
                  precision-controlled Gas/Oil Fired Furnaces engineered for consistent
                  performance and maximum fuel efficiency.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-primary-foreground/10 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Movable Design</h3>
                    <p className="text-sm opacity-90">
                      Bogie hearth design for easy loading and operational flexibility
                    </p>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Large Capacity</h3>
                    <p className="text-sm opacity-90">
                      Capacities up to 100 tons for large-scale industrial operations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
