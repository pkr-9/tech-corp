import {
  Monitor,
  Smartphone,
  Cloud,
  BrainCircuit,
  ShieldCheck,
  GitBranch,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Data for the category cards
const categories = [
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
  {
    title: "QA & Testing",
    href: "/services/qa-testing",
    Icon: ShieldCheck,
  },
  {
    title: "UX/UI Design",
    href: "/services/ux-ui-design",
    Icon: GitBranch, // Placeholder icon
  },
];

export default function BrowseByCategory() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
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

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <a
              key={category.title}
              href={category.href}
              className="group block"
            >
              <Card className="relative h-full overflow-hidden rounded-2xl shadow-soft border border-border transition-all duration-300 hover:shadow-3d hover:-translate-y-2">
                <CardContent className="p-6 flex items-center gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 p-3 rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                    <category.Icon className="w-6 h-6 text-primary" />
                  </div>
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {category.title}
                  </h3>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
