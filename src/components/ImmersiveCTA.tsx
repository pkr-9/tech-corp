import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

export default function ImmersiveCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/cta.jpg"
          alt="Office collaboration"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 backdrop-blur-sm border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span>Ready to scale?</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Let's build something <br />
            <span className="text-primary">extraordinary</span> together.
          </h2>

          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Whether you need a full product team or expert consultation on your
            architecture, we are ready to jump in.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 shadow-xl hover:shadow-primary/25 transition-all"
              >
                Schedule a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg bg-background/50 backdrop-blur-md border-foreground/10 hover:bg-background/80"
              >
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
