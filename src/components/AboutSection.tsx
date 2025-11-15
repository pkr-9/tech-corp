import { Button } from "./ui/button";
import { CheckCircle2, Sparkles } from "lucide-react";

const features = [
  "Expert team with 10+ years of experience",
  "Agile development methodology",
  "24/7 dedicated support",
  "Scalable and secure solutions",
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      {/* [CHANGED] Swapped accent to primary */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative group">
              {/* Main image container with 3D effect */}
              <div className="relative rounded-3xl overflow-hidden shadow-3d group-hover:shadow-glow transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-1">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&h=800&fit=crop"
                  alt="Team collaborating on a project"
                  className="w-full h-auto rounded-3xl transform transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                {/* [CHANGED] Swapped accent to secondary for a blue/cyan gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating badge */}
              <div className="absolute -top-6 -right-6 px-6 py-4 rounded-2xl bg-card border border-primary/30 shadow-3d backdrop-blur-sm animate-float">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-xs text-muted-foreground">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-gradient-to-br from-secondary/40 to-secondary/10 backdrop-blur-sm border border-secondary/30 flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">500+</div>
                  <div className="text-xs text-muted-foreground">
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
              WHO WE ARE
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Your Trusted{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Technology Partner
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We are a team of passionate engineers, designers, and strategists
              dedicated to delivering world-class software solutions. With years
              of experience across various industries, we help businesses
              transform their ideas into scalable, user-centric products.
            </p>

            {/* Features list */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 group"
                  style={{
                    animation: `fade-in-left 0.5s ease-out ${
                      index * 0.1
                    }s forwards`,
                    opacity: 0,
                  }}
                >
                  <div className="mt-1 p-1 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button
              size="lg"
              className="group bg-gradient-to-r from-primary to-primary-deep hover:from-primary-deep hover:to-primary text-primary-foreground shadow-3d hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Learn More About Us
                <CheckCircle2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .shadow-3d {
          box-shadow: 0 20px 60px -15px hsl(var(--primary) / 0.3), 0 10px 20px -10px hsl(var(--primary) / 0.2);
        }
        
        .shadow-glow {
          box-shadow: 0 0 60px hsl(var(--primary) / 0.5);
        }
      `}</style>
    </section>
  );
}
