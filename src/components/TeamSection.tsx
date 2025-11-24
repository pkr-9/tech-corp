import { Github, Linkedin, Twitter } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TEAM_MEMBERS = [
  {
    name: "Alex Morgan",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in software architecture. Formerly Lead Arch at TechGiant.",
    image: "/team/profile.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "Expert in cloud infrastructure and AI. Passionate about scalable distributed systems.",
    image: "/team/profile.png",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Marcus Johnson",
    role: "Lead Product Designer",
    bio: "Award-winning designer focused on creating intuitive, human-centric digital experiences.",
    image: "/team/profile.png",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Emily Davis",
    role: "Head of Engineering",
    bio: "Full-stack wizard specializing in React and Node.js ecosystems. Open source contributor.",
    image: "/team/profile.png",
    socials: {
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="py-14 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Meet the Minds
          </h2>
          <p className="text-lg text-muted-foreground">
            The passionate individuals driving innovation and technical
            excellence at TechCorp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <Card
              key={member.name}
              className="group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-3d hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Social Overlay - Slides up on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-end justify-center p-6">
                  <div className="flex gap-4">
                    {member.socials.linkedin && (
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    )}
                    {member.socials.github && (
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                    {member.socials.twitter && (
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full hover:bg-primary hover:text-white transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
