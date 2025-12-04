import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Terminal, Cpu, Globe } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-0 pb-10"
      style={{ perspective: "1000px" }} // Essential for 3D parallax
    >
      {/* 1. Parallax Background Grid 
          Moves slowly to create depth distance
      */}
      <div
        className="absolute inset-0 z-0 transform-gpu will-change-transform"
        style={{
          transform: "translateY(calc(var(--scroll-y, 0) * 0.5)) scale(1.1)",
          opacity: "calc(1 - var(--scroll-y, 0) * 0.001)",
        }}
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
          style={{
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* col 1  */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 shadow-soft">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                Industry-grade engineering
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-6">
              Build{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                scalable
              </span>{" "}
              products with
              <br />a team that ships.
            </h1>

            <p className="max-w-2xl text-lg text-muted-foreground mb-8">
              We design, develop, and operate resilient web & cloud systems —
              from prototypes to enterprise-grade platforms. Fast delivery,
              pragmatic architecture, measurable outcomes.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button className="inline-flex items-center gap-2 bg-primary text-primary-foreground shadow-3d hover:shadow-glow">
                  Start your project
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link to="/services" className="w-full sm:w-auto">
                <Button
                  variant="ghost"
                  className="inline-flex items-center gap-2"
                >
                  Explore services
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <strong className="text-foreground">50+</strong>
                <span>Modern Technologies</span>
              </div>
              <div className="flex items-center gap-2">
                <strong className="text-foreground">24/7</strong>
                <span>Support Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <strong className="text-foreground">100%</strong>
                <span>On-Time Delivery</span>
              </div>
            </div>
          </div>

          {/* col 2  - 3D Code Card with Parallax */}
          <div
            className="relative relative w-full mx-auto max-w-5xl animate-fade-in-up transform-gpu will-change-transform"
            style={{
              animationDelay: "0.5s",
              transform:
                "translateY(calc(var(--scroll-y, 0) * 0.1)) rotateX(calc(var(--scroll-y, 0) * 0.02deg))",
              opacity: "calc(1 - var(--scroll-y, 0) * 0.002)",
            }}
          >
            <div className="relative transform-3d rotate-x-12 bg-card border border-border rounded-xl shadow-2xl overflow-hidden group hover:rotate-x-0 transition-transform duration-700 ease-out">
              {/* Window Controls */}
              <div className="flex items-center px-4 py-3 border-b border-border bg-muted/30">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto text-xs font-mono text-muted-foreground flex items-center gap-2">
                  <Globe className="w-3 h-3" />
                  techcorp_config.ts
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 sm:p-10 text-left bg-gradient-to-b from-card to-muted/20">
                <pre className="font-mono text-sm sm:text-base leading-relaxed overflow-x-auto">
                  <code className="block">
                    <span className="text-primary">const</span>{" "}
                    <span className="text-foreground">projectConfig</span>{" "}
                    <span className="text-primary">=</span>{" "}
                    <span className="text-foreground">{"{"}</span>
                    <br />
                    <span className="text-muted-foreground">
                      {" "}
                      // The vision for your next big thing
                    </span>
                    <br />
                    <span className="text-foreground"> vision: </span>
                    <span className="text-foreground">{"{"}</span>
                    <br />
                    <span className="text-foreground"> name: </span>
                    <span className="text-secondary">'Project Phoenix'</span>
                    <span className="text-foreground">,</span>
                    <br />
                    <span className="text-foreground"> status: </span>
                    <span className="text-secondary">'ready_to_launch'</span>
                    <span className="text-foreground">,</span>
                    <br />
                    <span className="text-foreground"> performance: </span>
                    <span className="text-accent">'100%'</span>
                    <br />
                    <span className="text-foreground"> {"}"},</span>
                    <br />
                    <br />
                    <span className="text-muted-foreground">
                      {" "}
                      // Direct line to our engineering team
                    </span>
                    <br />
                    <span className="text-foreground"> contact: </span>
                    <span className="text-foreground">{"{"}</span>
                    <br />
                    <span className="text-foreground"> phone: </span>
                    <a
                      href="tel:+915551234567"
                      className="text-secondary hover:underline hover:text-primary transition-colors cursor-pointer font-bold border-b border-dashed border-secondary/50 pb-0.5"
                    >
                      '+91 (555) 123-4567'
                    </a>
                    <span className="text-foreground">,</span>
                    <br />
                    <span className="text-foreground"> email: </span>
                    <a
                      href="mailto:hello@techcorp.com"
                      className="text-secondary hover:underline hover:text-primary transition-colors cursor-pointer font-bold border-b border-dashed border-secondary/50 pb-0.5"
                    >
                      'hello@techcorp.com'
                    </a>
                    <span className="text-foreground">,</span>
                    <br />
                    <span className="text-foreground"> office: </span>
                    <span className="text-secondary">'Pune, India'</span>
                    <br />
                    <span className="text-foreground"> {"}"}</span>
                    <br />
                    <span className="text-foreground">{"}"};</span>
                    {/* Blinking Cursor */}
                    <span className="inline-block w-2.5 h-5 ml-1 bg-accent align-middle animate-blink" />
                  </code>
                </pre>
              </div>

              {/* Bottom Reflection Effect */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Shadow beneath the 3D element */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-[50%] opacity-40 animate-pulse-slow" />
          </div>
        </div>
      </div>

      <style>{`
        .transform-3d {
          transform-style: preserve-3d;
        }
        
        /* Base rotation state */
        .rotate-x-12 {
          transform: rotateX(12deg) scale(0.95);
        }
        
        /* Smooth Hover Reset */
        .hover\\:rotate-x-0:hover {
          transform: rotateX(0deg) scale(1) !important;
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        
        @keyframes float-slower {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slower { animation: float-slower 8s ease-in-out infinite; }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s step-end infinite; }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
