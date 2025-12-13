import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BrowseByCategory from "@/components/BrowseByCategory";
import BrowseByIndustry from "@/components/BrowseByIndustry";
import FeaturedServicesCarousel from "@/components/FeaturedServicesCarousel";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  Smartphone,
  Cloud,
  BrainCircuit,
  ShieldCheck,
  GitBranch,
  ArrowRight,
} from "lucide-react";

// Expanded Service List for Grid with Images
const SERVICES = [
  {
    title: "Web Development",
    description:
      "Crafting beautiful, responsive, and high-performance websites and web applications.",
    href: "/services/web-development",
    category: "Development",
    industry: "Tech",
    Icon: Monitor,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Mobile Development",
    description:
      "Building native and cross-platform mobile apps that delight users on iOS and Android.",
    href: "/services/mobile-development",
    category: "Development",
    industry: "Mobile",
    Icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Expert cloud architecture, migration, and DevOps to scale your infrastructure securely.",
    href: "/services/cloud-solutions",
    category: "Infrastructure",
    industry: "SaaS",
    Icon: Cloud,
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Cutting-edge AI solutions to automate processes and unlock data-driven insights.",
    href: "/services/ai-ml",
    category: "Data",
    industry: "Analytics",
    Icon: BrainCircuit,
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "QA & Testing",
    description:
      "Ensuring your software is bug-free, reliable, and performs under pressure with our expert QA.",
    href: "/services/qa-testing",
    category: "Quality",
    industry: "All",
    Icon: ShieldCheck,
    image: "/services/testing.jpg",
  },
  {
    title: "UX/UI Design",
    description:
      "Creating intuitive, user-centric designs that are both beautiful and functional.",
    href: "/services/ux-ui-design",
    category: "Design",
    industry: "All",
    Icon: GitBranch,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
  },
];

// Define Categories for Filter
const CATEGORIES = [
  "All",
  "Development",
  "Infrastructure",
  "Data",
  "Quality",
  "Design",
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredServices =
    activeCategory === "All"
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHeader
          title="Our Services"
          subtitle="From concept to deployment, we provide end-to-end technology services to build, launch, and scale your vision."
        >
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Request a Quote
            </a>
          </div>
        </PageHeader>

        <BrowseByCategory />
        <BrowseByIndustry />
        <FeaturedServicesCarousel />

        {/* Service Grid with Filter */}
        <section className="py-24" id="service-grid">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Explore All Services</h2>
              <p className="text-muted-foreground">
                Filter by category to find exactly what you need.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex justify-center mb-12 overflow-x-auto pb-4">
              <Tabs
                defaultValue="All"
                className="w-full max-w-3xl"
                onValueChange={setActiveCategory}
              >
                <TabsList className="w-full grid grid-cols-3 sm:grid-cols-6 h-auto p-1 bg-muted/50">
                  {CATEGORIES.map((cat) => (
                    <TabsTrigger
                      key={cat}
                      value={cat}
                      className="text-xs sm:text-sm px-2 py-2"
                    >
                      {cat}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
              {filteredServices.length > 0 ? (
                filteredServices.map((service, index) => {
                  const Icon = service.Icon;
                  return (
                    <Link
                      to={service.href}
                      key={service.title}
                      className="service-card-fade-in group block h-full"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                        animationFillMode: "both",
                      }}
                    >
                      <Card className="h-full overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
                        <div className="relative h-48 overflow-hidden bg-muted">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                          <div className="absolute top-4 left-4 p-2 rounded-lg bg-background/90 backdrop-blur-sm shadow-sm">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                        </div>

                        <CardHeader>
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                        </CardHeader>

                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {service.description}
                          </p>
                        </CardContent>

                        <CardFooter className="border-t pt-4">
                          <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                            Learn more <ArrowRight className="ml-1 w-4 h-4" />
                          </div>
                        </CardFooter>
                      </Card>
                    </Link>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-20 text-muted-foreground">
                  No services found in this category.
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        @keyframes service-fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .service-card-fade-in {
          animation: service-fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
