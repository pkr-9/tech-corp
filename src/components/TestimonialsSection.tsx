import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TESTIMONIALS = [
  {
    content:
      "The team's energy is infectious. They built our MVP in record time, and the code quality was better than agencies we've paid double for.",
    author: "Michael Ross",
    role: "Founder, QuickEats (Startup)",
    avatar: "MR",
  },
  {
    content:
      "I was hesitant to work with a new agency, but their technical depth convinced me. They modernized our entire frontend workflow seamlessly.",
    author: "Sarah L.",
    role: "Product Owner, RetailFlow",
    avatar: "SL",
  },
  {
    content:
      "They don't just write code; they act as strategic partners. They helped us define our roadmap and choose the right tech stack for scaling.",
    author: "James Chen",
    role: "CTO, NextLevel Ops",
    avatar: "JC",
  },
  {
    content:
      "Responsive, transparent, and incredibly skilled. It feels like having an in-house engineering team.",
    author: "Anita Patel",
    role: "Director, Civic Innovation",
    avatar: "AP",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background decoration reused from Certifications component */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
            TESTIMONIALS
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {TESTIMONIALS.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/2 p-2"
              >
                <div className="h-full p-1">
                  <Card className="h-full border-none shadow-soft bg-background/80 backdrop-blur-sm">
                    <CardContent className="flex flex-col justify-between h-full p-8">
                      <div>
                        <Quote className="w-10 h-10 text-primary/20 mb-6" />
                        <p className="text-lg text-foreground/80 leading-relaxed italic mb-8">
                          "{testimonial.content}"
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border-2 border-primary/20">
                          <AvatarImage
                            src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.avatar}`}
                          />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-foreground">
                            {testimonial.author}
                          </div>
                          <div className="text-sm text-primary">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </div>
        </Carousel>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}
