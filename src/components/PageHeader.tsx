import React from "react";

// Define the props the component will accept
interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode; // For optional content like breadcrumbs
}

export default function PageHeader({
  title,
  subtitle,
  children,
}: PageHeaderProps) {
  return (
    <section className="relative bg-[var(--gradient-dark)] py-11 sm:py-12 overflow-hidden">
      {/* Decorative background elements */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-10"
        style={{ backgroundPosition: "center top" }}
      />
      <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-50" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Title */}
        <h1
          className="text-4xl sm:text-5xl font-bold text-primary mb-4 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="text-lg text-primary/70 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            {subtitle}
          </p>
        )}

        {/* Children (for breadcrumbs or other elements) */}
        {children && (
          <div
            className="mt-6 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            {children}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }

        /* This grid pattern uses a light color (white at 10% opacity) 
          to be visible on the dark gradient background.
        */
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--primary-foreground) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary-foreground) / 0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}
