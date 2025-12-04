import {
  CheckCircle2,
  Award,
  Landmark,
  FileCheck,
  ShieldCheck,
  Building2,
} from "lucide-react";

// Data with Government Certifications
const certifications = [
  {
    title: "DPIIT Recognized",
    issuer: "Startup India (Govt. of India)",
    icon: Award,
    description:
      "Officially recognized startup by the Department for Promotion of Industry and Internal Trade.",
  },
  {
    title: "MSME Udyam Registered",
    issuer: "Ministry of MSME",
    icon: Building2,
    description:
      "Registered enterprise under the Micro, Small and Medium Enterprises Development Act.",
  },
  {
    title: "GST Compliant",
    issuer: "Goods & Services Tax",
    icon: FileCheck,
    description:
      "Fully compliant with Indian tax regulations, ensuring transparent billing for B2B clients.",
  },
  {
    title: "ISO 27001 Compliant",
    issuer: "Information Security",
    icon: ShieldCheck,
    description:
      "We adhere to international standards for information security management systems (ISMS).",
  },
];

export default function Certifications() {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
            <Landmark className="w-4 h-4" />
            <span>GOVERNMENT RECOGNIZED</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Verified & Compliant
          </h2>
          <p className="text-lg text-muted-foreground">
            We operate with full transparency and regulatory compliance, backed
            by the Government of India.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.title}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-3d hover:-translate-y-1 cursor-default flex items-start gap-5"
                style={{
                  animation: `fade-in 0.5s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon Column */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Text Column */}
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                    {cert.issuer}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {cert.description}
                  </p>
                </div>

                {/* Decorative Checkmark */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-2 group-hover:translate-x-0">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .shadow-3d {
          box-shadow: 0 20px 60px -15px hsl(var(--primary) / 0.3), 0 10px 20px -10px hsl(var(--primary) / 0.2);
        }
      `}</style>
    </section>
  );
}
