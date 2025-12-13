import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    id: 1,
    client: "FinTech Startup (Stealth)",
    title: "High-Frequency Trading Platform",
    description:
      "A split-second latency trading engine processing $50M+ daily volume. We engineered a custom WebSocket architecture to ensure real-time data delivery to thousands of concurrent users.",
    tags: ["React", "Rust", "WebSockets"],
    image: "/trade.jpg",
    link: "/case-studies/fintech-revolution",
  },
  {
    id: 2,
    client: "HealthConnect",
    title: "Telemedicine Mobile App",
    description:
      "HIPAA-compliant video consultation platform connecting patients with specialists. Features include encrypted messaging, appointment scheduling, and e-prescriptions.",
    tags: ["React Native", "WebRTC", "Node.js"],
    image: "/Healthcare.jpg",
    link: "/case-studies/telehealth-app",
  },
  {
    id: 3,
    client: "ShopMax",
    title: "Headless Commerce Migration",
    description:
      "Replatforming a legacy e-commerce site to a modern headless stack. Resulted in a 300% increase in page load speed and a 25% boost in conversion rates during Black Friday.",
    tags: ["Next.js", "Shopify Plus", "Vercel"],
    image: "/commerce.jpg",
    link: "/case-studies/ecommerce-scale",
  },
];

export default function StickyProjectShowcase() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            We don't just write code; we build digital assets that drive
            business growth. Here are a few of our recent successes.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start"
            >
              {/* Text Content - Sticky on Desktop */}
              <div className="lg:sticky lg:top-32 flex flex-col justify-center h-full order-2 lg:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-mono text-primary/80 uppercase tracking-widest">
                    0{index + 1} / PROJECT
                  </span>
                  <div className="h-px bg-border flex-1" />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link to={project.link}>
                  <Button variant="outline" className="group w-fit">
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Image Visual - Scrolls normally */}
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl order-1 lg:order-2">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating overlay card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-background/90 backdrop-blur-md rounded-xl border border-white/20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">
                      {project.client}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
