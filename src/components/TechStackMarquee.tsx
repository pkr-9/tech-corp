import { Cpu } from "lucide-react";

// Mock logos using text for simplicity, in a real app use SVG logos
const techs = [
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "AWS",
  "Docker",
  "Kubernetes",
  "Next.js",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "GraphQL",
  "Flutter",
  "Swift",
  "Kotlin",
  "Terraform",
  "Figma",
  "Tailwind",
  "Firebase",
  "Google Cloud",
];

export default function TechStackMarquee() {
  return (
    <section className="py-16 bg-muted/30 border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
          Powering Innovation with Modern Stacks
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex gap-12 whitespace-nowrap py-4">
          {[...techs, ...techs].map((tech, idx) => (
            <div
              key={`${tech}-${idx}`}
              className="flex items-center gap-2 text-2xl font-bold text-foreground/40 hover:text-primary transition-colors cursor-default"
            >
              <Cpu className="w-6 h-6 opacity-50" />
              <span>{tech}</span>
            </div>
          ))}
        </div>

        {/* Duplicate for seamless loop */}
        <div className="absolute top-0 animate-marquee2 flex gap-12 whitespace-nowrap py-4">
          {[...techs, ...techs].map((tech, idx) => (
            <div
              key={`${tech}-${idx}-2`}
              className="flex items-center gap-2 text-2xl font-bold text-foreground/40 hover:text-primary transition-colors cursor-default"
            >
              <Cpu className="w-6 h-6 opacity-50" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
