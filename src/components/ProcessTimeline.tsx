import {
  Search,
  PenTool,
  Code,
  TestTube,
  Rocket,
  RefreshCw,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business goals, user needs, and technical requirements. We define the scope, roadmap, and architecture to ensure alignment from day one.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Our designers create intuitive, user-centric interfaces. We move from wireframes to high-fidelity interactive prototypes, ensuring the look and feel matches your brand vision.",
  },
  {
    icon: Code,
    title: "Agile Development",
    description:
      "We build your product in two-week sprints, providing you with regular updates and demoable builds. This iterative approach allows for flexibility and rapid feedback integration.",
  },
  {
    icon: TestTube,
    title: "Quality Assurance",
    description:
      "Rigorous automated and manual testing ensures your software is bug-free, secure, and performs flawlessly under load before it ever reaches production.",
  },
  {
    icon: Rocket,
    title: "Launch & Deployment",
    description:
      "We handle the complex DevOps of deploying your application to the cloud (AWS/Azure/GCP), ensuring a smooth transition with zero downtime.",
  },
  {
    icon: RefreshCw,
    title: "Maintenance & Scale",
    description:
      "Our partnership doesn't end at launch. We monitor performance, apply security patches, and scale infrastructure as your user base grows.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From chaos to clarity. Our proven engineering process ensures
            predictable results and high-quality software delivery.
          </p>
        </div>

        <div className="space-y-12 md:space-y-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={step.title}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 w-full md:w-1/2 text-center md:text-left px-4">
                  <div
                    className={`p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow ${
                      !isEven ? "md:text-right" : ""
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-glow border-4 border-background">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>

                {/* Empty Side for Balance */}
                <div className="flex-1 w-full md:w-1/2 hidden md:block" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
