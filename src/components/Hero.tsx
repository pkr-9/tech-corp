import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute top-1/4 -right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        />
        <div
          className="absolute -bottom-1/4 left-1/3 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Column 1: Text Content (Same as before) */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 mb-8 animate-fade-in shadow-soft">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Next-Generation Software Solutions
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="block text-foreground mb-2">
                Build, Launch, and
              </span>
              <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient">
                Scale Your Vision
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              We are your end-to-end technology partner, providing expert-led
              services in web, mobile, cloud, and AI to turn your ideas into
              reality.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Link to="/services">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-deep hover:from-primary-deep hover:to-primary text-primary-foreground shadow-3d hover:shadow-glow transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Our Services
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </Link>

              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-2 border-primary/30 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <span className="flex items-center gap-2 text-primary">
                    Get in Touch
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Column 2: Single Code Window with Contact Info */}
          <div
            className="relative animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div
              className="relative animate-float"
              style={{ animationDuration: "6s" }}
            >
              <div className="relative rounded-xl border border-border/50 bg-card/50 shadow-3d backdrop-blur-sm transition-all duration-300 hover:shadow-glow hover:-translate-y-1 overflow-hidden">
                {/* Window Header */}
                <div className="px-4 py-3 border-b border-border/50 flex items-center gap-2 bg-muted/30">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono opacity-50">
                    config.ts
                  </span>
                </div>

                {/* Combined Code Content */}
                <div className="p-5 bg-foreground/5 overflow-x-auto">
                  <pre className="code-block font-mono text-sm text-foreground/80 leading-relaxed">
                    <code className="animate-typing">
                      {/* Block 1: Vision */}
                      <span className="line">
                        <span className="text-primary">const</span> vision ={" "}
                        {"{"}
                      </span>
                      <span className="line">
                        {"  "}name:{" "}
                        <span className="text-secondary">
                          'Project Phoenix'
                        </span>
                        ,
                      </span>
                      <span className="line">
                        {"  "}status:{" "}
                        <span className="text-secondary">'launching'</span>,
                      </span>
                      <span className="line">
                        {"  "}scalable:{" "}
                        <span className="text-accent">true</span>
                      </span>
                      <span className="line">{"}"};</span>

                      {/* Spacer */}
                      <span className="line h-4 block"></span>

                      {/* Block 2: Contact (Interactive) */}
                      <span className="line">
                        <span className="text-primary">const</span> fastContact
                        = {"{"}
                      </span>
                      <span className="line">
                        {"  "}phone:{" "}
                        <a
                          href="tel:+915551234567"
                          className="text-secondary hover:underline hover:text-primary transition-colors cursor-pointer font-bold"
                        >
                          '+91 (555) 123-4567'
                        </a>
                        ,
                      </span>
                      <span className="line">
                        {"  "}email:{" "}
                        <a
                          href="mailto:hello@techcorp.com"
                          className="text-accent hover:underline hover:text-primary transition-colors cursor-pointer font-bold"
                        >
                          'hello@techcorp.com'
                        </a>
                      </span>
                      <span className="line">{"}"};</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-16 sm:h-24 text-background"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C360,96 720,96 1080,64 C1440,32 1440,32 1440,96 L1440,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(-10px) translateX(-10px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-gradient { background-size: 200% 200%; animation: gradient 3s ease infinite; }
        .shadow-glow { box-shadow: 0 0 40px currentColor; }
        .shadow-3d { box-shadow: 0 20px 60px -15px hsl(var(--primary) / 0.3), 0 10px 20px -10px hsl(var(--primary) / 0.2); }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; opacity: 0; }

        /* Typing Animation Logic */
        .code-block .line {
          display: block;
          white-space: pre;
          overflow: hidden;
          width: 0;
          animation: typing-line 0.5s steps(30, end) forwards;
        }
        
        /* Staggered Delays for all 10 lines */
        .code-block .line:nth-child(1) { animation-delay: 0.5s; }
        .code-block .line:nth-child(2) { animation-delay: 1.0s; }
        .code-block .line:nth-child(3) { animation-delay: 1.5s; }
        .code-block .line:nth-child(4) { animation-delay: 2.0s; }
        .code-block .line:nth-child(5) { animation-delay: 2.5s; }
        /* Spacer at 6 */
        .code-block .line:nth-child(6) { animation-delay: 3.0s; } 
        /* Contact Block Starts */
        .code-block .line:nth-child(7) { animation-delay: 3.5s; }
        .code-block .line:nth-child(8) { animation-delay: 4.0s; }
        .code-block .line:nth-child(9) { animation-delay: 4.5s; }
        .code-block .line:nth-child(10) { animation-delay: 5.0s; }

        .animate-typing { position: relative; }
        
        /* Blinking caret on the last line */
        .animate-typing .line:last-child:after {
          content: '|';
          animation: blink-caret 1s step-end infinite;
          animation-delay: 5.5s;
          color: hsl(var(--accent));
        }

        @keyframes typing-line {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink-caret {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
