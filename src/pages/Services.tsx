import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BrowseByCategory from "@/components/BrowseByCategory";
import BrowseByIndustry from "@/components/BrowseByIndustry";
import FeaturedServicesCarousel from "@/components/FeaturedServicesCarousel";
import ServiceCard, { ServiceCardProps } from "@/components/ServiceCard";
import {
  Monitor,
  Smartphone,
  Cloud,
  BrainCircuit,
  ShieldCheck,
  GitBranch,
} from "lucide-react";

// Dummy data for the services grid, using the ServiceCardProps interface
const DUMMY_SERVICES: ServiceCardProps[] = [
  {
    title: "Web Development",
    description:
      "Crafting beautiful, responsive, and high-performance websites and web applications.",
    href: "/services/web-development",
    category: "Development",
    industry: "Tech",
    Icon: Monitor,
  },
  {
    title: "Mobile Development",
    description:
      "Building native and cross-platform mobile apps that delight users on iOS and Android.",
    href: "/services/mobile-development",
    category: "Development",
    industry: "Mobile",
    Icon: Smartphone,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Expert cloud architecture, migration, and DevOps to scale your infrastructure securely.",
    href: "/services/cloud-solutions",
    category: "Infrastructure",
    industry: "SaaS",
    Icon: Cloud,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Cutting-edge AI solutions to automate processes and unlock data-driven insights.",
    href: "/services/ai-ml",
    category: "Data",
    industry: "Analytics",
    Icon: BrainCircuit,
  },
  {
    title: "QA & Testing",
    description:
      "Ensuring your software is bug-free, reliable, and performs under pressure with our expert QA.",
    href: "/services/qa-testing",
    category: "Quality",
    industry: "All",
    Icon: ShieldCheck,
  },
  {
    title: "UX/UI Design",
    description:
      "Creating intuitive, user-centric designs that are both beautiful and functional.",
    href: "/services/ux-ui-design",
    category: "Design",
    industry: "All",
    Icon: GitBranch, // Placeholder icon
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Item 1: Hero */}
        <PageHeader
          title="Our Services"
          subtitle="From concept to deployment, we provide end-to-end technology services to build, launch, and scale your vision."
        >
          {/* You can add your Primary CTA here */}
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Request a Quote
            </a>
          </div>
        </PageHeader>

        {/* <BrowseByCategory /> */}
        <FeaturedServicesCarousel />
        <BrowseByIndustry />
        {/* This section will hold your filter bar (Item 2) and service grid (Item 5) */}
        <section className="py-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Item 2: Filter Bar (Placeholder) */}
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Browse by Category
              </h2>
              <p className="text-lg text-muted-foreground">
                Find the exact solution you need by exploring our core service
                categories.
              </p>
            </div>

            {/* Item 5: Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DUMMY_SERVICES.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>

            {/* Items 6 & 7 (Why Choose Us / Footer CTA) would go here */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
