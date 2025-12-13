import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const posts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch",
    excerpt:
      "Explore the upcoming trends in web development, from AI-driven UI generation to the rise of serverless functions.",
    date: "Nov 10, 2025",
    category: "Tech",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    link: "/blog/future-of-web-dev",
  },
  {
    id: 2,
    title: "Why We Chose React for Enterprise Apps",
    excerpt:
      "A deep dive into the technical and business reasons why React remains our top choice for building scalable applications.",
    date: "Nov 03, 2025",
    category: "Engineering",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    link: "/blog/why-react",
  },
  {
    id: 3,
    title: "Mastering Cloud Costs in AWS",
    excerpt:
      "Practical strategies to optimize your cloud infrastructure bill without compromising on performance or security.",
    date: "Oct 28, 2025",
    category: "DevOps",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    link: "/blog/mastering-devops",
  },
];

export default function LatestInsights() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Insights
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Thoughts on technology, design, and business from our engineering
              team.
            </p>
          </div>
          <Link to="/blog" className="hidden md:block">
            <span className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              View all articles <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link to={post.link} key={post.id} className="group h-full">
              <Card className="h-full border-none shadow-none bg-transparent hover:bg-transparent overflow-visible">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 shadow-sm group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-background/90 backdrop-blur-md text-foreground font-medium"
                    >
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-0">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/blog">
            <span className="flex items-center justify-center gap-2 text-primary font-semibold">
              View all articles <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
