import { Monitor, Smartphone, Cloud, BrainCircuit } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FeaturedServiceCard, {
  FeaturedServiceProps,
} from "@/components/FeaturedServiceCard";

// Data for the featured services
const featuredServices: FeaturedServiceProps[] = [
  {
    title: "Web Development",
    href: "/services/web-development",
    Icon: Monitor,
  },
  {
    title: "Mobile Development",
    href: "/services/mobile-development",
    Icon: Smartphone,
  },
  {
    title: "Cloud & DevOps",
    href: "/services/cloud-solutions",
    Icon: Cloud,
  },
  {
    title: "AI & Machine Learning",
    href: "/services/ai-ml",
    Icon: BrainCircuit,
  },
];

export default function FeaturedServicesCarousel() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
            TOP-TIER SOLUTIONS
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Featured Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our most in-demand services, designed to solve complex
            challenges.
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {featuredServices.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <FeaturedServiceCard {...service} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
