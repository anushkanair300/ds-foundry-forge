import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-foundry.jpg";
import heatTreatmentImage from "@/assets/heat-treatment.jpg";
import sandPlantImage from "@/assets/sand-plant.jpg";
import pollutionControlImage from "@/assets/pollution-control.jpg";

const Gallery = () => {
  const images = [
    {
      src: heroImage,
      title: "Foundry Operations",
      description: "Modern foundry facility with advanced equipment",
    },
    {
      src: heatTreatmentImage,
      title: "Heat Treatment Furnace",
      description: "High-efficiency industrial heating solutions",
    },
    {
      src: sandPlantImage,
      title: "Phenolic Sand Plant",
      description: "Advanced sand processing machinery",
    },
    {
      src: pollutionControlImage,
      title: "Pollution Control System",
      description: "Environmental protection equipment",
    },
    {
      src: heroImage,
      title: "Manufacturing Excellence",
      description: "Precision engineering in action",
    },
    {
      src: heatTreatmentImage,
      title: "Industrial Furnaces",
      description: "State-of-the-art heat treatment solutions",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Gallery
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our foundry solutions and manufacturing excellence
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border hover:border-primary transition-all duration-300 group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-dark/90 via-industrial-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-background">
                      <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block border-border bg-accent">
              <div className="p-6">
                <p className="text-foreground">
                  <span className="font-semibold">Note:</span> This gallery features
                  representative images. Actual project photos will be added soon.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Interested in Our Solutions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to discuss how we can provide customized foundry solutions for your
            needs
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
