import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Monitor,
  Smartphone,
  Cloud,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Crafting beautiful, responsive, and high-performance websites and web applications.",
    href: "/services/web-development",
    gradient: "from-primary to-primary-deep",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Building native and cross-platform mobile apps that delight users on iOS and Android.",
    href: "/services/mobile-development",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Expert cloud architecture, migration, and DevOps to scale your infrastructure.",
    href: "/services/cloud-solutions",
    gradient: "from-accent to-secondary",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description:
      "Cutting-edge AI solutions to automate processes and unlock data-driven insights.",
    href: "/services/ai-ml",
    gradient: "from-primary to-accent",
  },
];

export default function FeaturedServices() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header - Fades in first */}
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            A Full Suite of Services
          </h2>
          <p className="text-lg text-muted-foreground">
            From initial concept to final deployment, we have the expertise to
            cover every angle of your product's development.
          </p>
        </div>

        {/* Services Grid - Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                to={service.href}
                key={service.title}
                className={cn(
                  "block h-full transition-all duration-700 transform",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-20"
                )}
                style={{ transitionDelay: `${index * 150}ms` }} // Stagger delay
              >
                <div className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-3d hover:-translate-y-2 cursor-pointer h-full overflow-hidden">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                  />

                  {/* Icon container with 3D effect */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .shadow-3d { box-shadow: 0 20px 60px -15px hsl(var(--primary) / 0.3), 0 10px 20px -10px hsl(var(--primary) / 0.2); }
        .shadow-glow { box-shadow: 0 0 40px hsl(var(--primary) / 0.4); }
      `}</style>
    </section>
  );
}
