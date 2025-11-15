import { ArrowRight, type LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Define the properties for a service
export interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  category: string;
  industry: string;
  Icon: LucideIcon;
}

export default function ServiceCard({
  title,
  description,
  href,
  category,
  industry,
  Icon,
}: ServiceCardProps) {
  return (
    <Card className="group relative flex flex-col h-full overflow-hidden rounded-2xl shadow-soft border border-border transition-all duration-300 hover:shadow-3d hover:-translate-y-2">
      {/* Card Header with Icon and Title */}
      <CardHeader className="flex flex-row items-start gap-4 p-6">
        {/* Icon (styles from FeaturedServices [cite: 117-118]) */}
        <div className="flex-shrink-0">
          <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary to-primary-deep shadow-lg group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
        {/* Title */}
        <div className="flex-1">
          <CardTitle className="text-xl font-bold text-foreground mb-1">
            <a
              href={href}
              className="hover:text-primary transition-colors stretched-link"
            >
              {title}
            </a>
          </CardTitle>
          <span className="text-sm font-medium text-primary">{category}</span>
        </div>
      </CardHeader>

      {/* Card Content (Description) */}
      <CardContent className="p-6 pt-0 flex-1">
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>

      {/* Card Footer (Badges and CTA) */}
      <CardFooter className="p-6 pt-0 flex flex-wrap items-center justify-between gap-4">
        {/* Industry Badge */}
        <Badge variant="outline">{industry}</Badge>

        {/* Learn More Button */}
        <Button
          asChild
          variant="link"
          className="p-0 text-primary group-hover:text-primary-deep font-semibold"
        >
          <a href={href} className="flex items-center gap-2">
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </CardFooter>

      {/* [ADDED] This style makes the whole card clickable on the title */}
      <style>{`
        .stretched-link::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
        }
      `}</style>
    </Card>
  );
}
