import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Data for the industry tiles
const industries = [
  {
    title: "FinTech",
    href: "/services/industry/fintech",
    description:
      "Secure, scalable, and compliant financial technology solutions.",
    serviceCount: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
  },
  {
    title: "Healthcare",
    href: "/services/industry/healthcare",
    description:
      "HIPAA-compliant applications for patient care and data management.",
    serviceCount: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1538392102528-6a9c30f41c5a?w=600&q=80",
  },
  {
    title: "SaaS",
    href: "/services/industry/saas",
    description:
      "Build, launch, and scale your subscription-based software products.",
    serviceCount: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1556742502-0d0c2e63a40b?w=600&q=80",
  },
];

export default function BrowseByIndustry() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Browse by Industry
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide tailored solutions for the unique challenges of your
            industry.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <a
              key={industry.title}
              href={industry.href}
              className="group block"
            >
              <Card className="relative h-full overflow-hidden rounded-2xl shadow-soft border border-border transition-all duration-300 hover:shadow-3d hover:-translate-y-2">
                {/* Background Image */}
                <img
                  src={industry.imageUrl}
                  alt={industry.title}
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-colors" />

                {/* Content */}
                <CardContent className="relative z-20 p-6 flex flex-col justify-end h-full min-h-[300px]">
                  <Badge
                    variant="default"
                    className="absolute top-4 right-4 bg-primary/80 backdrop-blur-sm"
                  >
                    {industry.serviceCount} Services
                  </Badge>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
