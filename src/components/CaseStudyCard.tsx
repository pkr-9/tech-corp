import { ArrowRight, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export interface CaseStudyProps {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  imageUrl: string;
  result: string;
  tags: string[];
}

export default function CaseStudyCard({
  id,
  title,
  client,
  category,
  description,
  imageUrl,
  result,
  tags,
}: CaseStudyProps) {
  return (
    <Card className="group flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-3d hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
          <Badge
            variant="secondary"
            className="bg-background/80 backdrop-blur-sm text-foreground"
          >
            {category}
          </Badge>
        </div>
        <img
          src={imageUrl}
          alt={`Case study for ${client}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
      </div>

      <CardHeader className="p-6 pb-2">
        <div className="text-sm font-medium text-primary mb-1">{client}</div>
        <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
          <a href={`/case-studies/${id}`} className="stretched-link">
            {title}
          </a>
        </h3>
      </CardHeader>

      <CardContent className="p-6 pt-2 flex-1 flex flex-col gap-4">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {description}
        </p>

        {/* Key Result Highlight */}
        <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/10">
          <TrendingUp className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">
            {result}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex flex-wrap gap-2">
        {tags.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="outline" className="text-xs font-normal">
            {tag}
          </Badge>
        ))}
        {tags.length > 3 && (
          <Badge variant="outline" className="text-xs font-normal">
            +{tags.length - 3}
          </Badge>
        )}
      </CardFooter>

      {/* CSS for clickable card */}
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
