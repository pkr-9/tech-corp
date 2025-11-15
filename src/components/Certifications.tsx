import { CheckCircle2, Award } from "lucide-react";

const certifications = [
  "ISO 9001:2015 Certified",
  "AWS Certified Solutions Architect",
  "Google Cloud Professional",
  "Microsoft Azure Expert",
  "Certified Scrum Master",
  "PMP Certified Project Managers",
];

export default function Certifications() {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      {/* [CHANGED] Swapped accent to primary for the blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* [CHANGED] Swapped accent to primary for the blue badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            <span>CERTIFICATIONS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Certified Excellence
          </h2>
          <p className="text-lg text-muted-foreground">
            Our team holds industry-recognized certifications ensuring top-tier
            quality and security.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert}
              // [CHANGED] Swapped accent to primary for the blue hover border
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-3d hover:-translate-y-2 cursor-default"
              style={{
                animation: `fade-in 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
            >
              {/* Gradient overlay on hover */}
              {/* [CHANGED] Swapped accent to primary */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10 flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {/* [CHANGED] Swapped accent to primary for the blue icon bg */}
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    {/* [CHANGED] Swapped accent to primary for the blue icon color */}
                    <CheckCircle2 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                {/* [CHANGED] Swapped accent to primary for the blue hover text */}
                <span className="text-foreground font-medium leading-relaxed group-hover:text-primary transition-colors duration-300">
                  {cert}
                </span>
              </div>

              {/* Decorative corner accent */}
              {/* [CHANGED] Swapped accent to primary */}
              <div className="absolute top-2 right-2 w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Want to learn more about our certifications and expertise?
          </p>
          {/* [CHANGED] Swapped accent to primary for the blue button */}
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <Award className="w-5 h-5" />
            <span>View All Credentials</span>
          </a>
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
        
        /* [CHANGED] Swapped accent to primary for the blue shadows */
        .shadow-3d {
          box-shadow: 0 20px 60px -15px hsl(var(--primary) / 0.3), 0 10px 20px -10px hsl(var(--primary) / 0.2);
        }
        
        .shadow-glow {
          box-shadow: 0 0 40px hsl(var(--primary) / 0.4);
        }
      `}</style>
    </section>
  );
}
