import { ArrowRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

// Define the properties for a blog post
export interface PostProps {
  id: string;
  title: string;
  href: string;
  description: string;
  imageUrl: string;
  date: string;
}

interface BlogPostCardProps {
  post: PostProps;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="group relative flex flex-col h-full overflow-hidden rounded-2xl shadow-soft border border-border transition-all duration-300 hover:shadow-3d hover:-translate-y-2">
      {/* Post Image */}
      <a href={post.href} className="block overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>
      </a>

      {/* Post Content */}
      <div className="flex flex-col flex-1 p-6">
        <CardHeader className="p-0 mb-4">
          <CardTitle className="text-xl font-bold text-foreground mb-2">
            <a
              href={post.href}
              className="hover:text-primary transition-colors"
            >
              {post.title}
            </a>
          </CardTitle>
          <p className="text-sm text-muted-foreground">{post.date}</p>
        </CardHeader>
        <CardContent className="p-0 flex-1">
          <p className="text-muted-foreground leading-relaxed">
            {post.description}
          </p>
        </CardContent>
        <CardFooter className="p-0 pt-6">
          <Button
            asChild
            variant="link"
            className="p-0 text-primary group-hover:text-primary-deep font-semibold"
          >
            <a href={post.href} className="flex items-center gap-2">
              Read More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
