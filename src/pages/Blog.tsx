import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import BlogPostCard, { PostProps } from "@/components/BlogPostCard";

// Dummy data for the blog posts
const DUMMY_POSTS: PostProps[] = [
  {
    id: "1",
    title: "The Future of Web Development: Trends to Watch",
    href: "/blog/future-of-web-dev",
    description:
      "Explore the upcoming trends in web development, from AI-driven UI generation to the rise of serverless functions.",
    imageUrl: "/blog/card1.jpg",
    date: "November 10, 2025",
  },
  {
    id: "2",
    title: "Why We Chose React for Our Enterprise-Level Apps",
    href: "/blog/why-react",
    description:
      "A deep dive into the technical and business reasons why React remains our top choice for building scalable applications.",
    imageUrl: "/blog/card2.jpg",
    date: "November 3, 2025",
  },
  {
    id: "3",
    title: "Mastering Cloud & DevOps: A Guide to CI/CD",
    href: "/blog/mastering-devops",
    description:
      "Learn how to build, test, and deploy your applications faster and more reliably with a robust CI/CD pipeline.",
    imageUrl: "/blog/card3.jpg",
    date: "October 28, 2025",
  },
  // Add more dummy posts as needed
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Reusable Page Header */}
        <PageHeader
          title="Our Blog"
          subtitle="Insights, trends, and thoughts from the TechCorp team on development, design, and technology."
        />

        {/* Main Content Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Blog Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {DUMMY_POSTS.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
