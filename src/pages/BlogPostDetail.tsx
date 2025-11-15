import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

// Dummy data - In a real app, you'd fetch this based on the postSlug
const DUMMY_POST = {
  title: "The Future of Web Development: Trends to Watch",
  date: "November 10, 2025",
  author: "Jane Doe, Lead Engineer",
  imageUrl:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  // This is where your actual blog content (e.g., from a CMS) would go.
  // We're using simple HTML elements for this example.
  content: `
    <p>Welcome to the future of web development! The digital landscape is evolving at an unprecedented pace, and staying ahead of the curve is key to building successful, modern applications.</p>
    
    <h2>1. AI-Driven UI/UX Generation</h2>
    <p>The rise of generative AI is no longer a futuristic concept; it's here. We're seeing powerful new tools that can:
    <ul>
      <li>Generate component code from a simple text prompt.</li>
      <li>Create multiple design variations from a single wireframe.</li>
      <li>Analyze user behavior to suggest real-time UX improvements.</li>
    </ul>
    This shift will empower developers to focus more on complex logic and architecture while AI handles the initial boilerplate.</p>
    
    <h2>2. The Serverless Revolution</h2>
    <p>Serverless functions (like AWS Lambda or Vercel Functions) are fundamentally changing how we build backends. The "scale-to-zero" and "pay-per-use" models are incredibly efficient. Instead of managing a monolithic server, developers can deploy individual functions that handle specific tasks, like user authentication or processing payments.</p>
    
    <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1000&q=80" alt="Code on a laptop" style="width: 100%; border-radius: 0.75rem; margin-top: 1.5rem; margin-bottom: 1.5rem;" />
    
    <h2>3. Edge Computing</h2>
    <p>Why wait for a server in a distant data center? Edge computing brings your code closer to your users. By deploying functions on a global Content Delivery Network (CDN), you can dramatically reduce latency, leading to faster load times and a snappier user experience. This is especially critical for global applications and real-time data.</p>
    
    <blockquote>
      "The future is not about finding the one 'perfect' framework, but about building a flexible, composable architecture that can adapt to new technologies as they emerge."
    </blockquote>
    
    <p>At TechCorp, we're not just watching these trends—we're actively implementing them. We believe that leveraging AI, serverless, and edge computing is the key to building the next generation of scalable, high-performance digital products.</p>
  `,
};

export default function BlogPostDetailPage() {
  // In a real app, you'd use the slug to fetch data
  const { postSlug } = useParams();

  // For this example, we'll just use the dummy data
  const post = DUMMY_POST;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Reusable Page Header, using the post title */}
        <PageHeader title={post.title}>
          {/* We can pass children like 'date' into the PageHeader */}
          <div className="text-primary/70 text-lg">
            Posted on {post.date} by {post.author}
          </div>
        </PageHeader>

        {/* Main Article Content Section */}
        <section className="py-18">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            {/* This is where the 'prose' class from @tailwindcss/typography works its magic.
              It automatically styles all the HTML elements inside it (h2, p, ul, blockquote).
              We also use 'prose-primary' to make links and highlights match your blue theme.
            */}
            <article
              className="prose prose-lg lg:prose-xl prose-primary mx-auto"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
