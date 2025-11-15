import { Rocket, Github, Twitter, Linkedin } from "lucide-react";

const footerLinks = [
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/careers', label: 'Careers' },
      { href: '/blog', label: 'Blog' },
    ],
  },
  {
    title: 'Services',
    links: [
      { href: '/services/web-development', label: 'Web Development' },
      { href: '/services/mobile-development', label: 'Mobile Development' },
      { href: '/services/cloud-solutions', label: 'Cloud Solutions' },
      { href: '/services/ai-ml', label: 'AI & ML' },
    ],
  },
];

const socialLinks = [
  { name: 'GitHub', href: '#', icon: Github },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-br from-muted/30 to-background overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <a
              href="/"
              className="flex items-center gap-3 text-2xl font-bold text-foreground group mb-4"
            >
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-primary-deep shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                TechCorp
              </span>
            </a>
            <p className="max-w-md text-muted-foreground mb-6 leading-relaxed">
              Building delightful developer experiences and scalable products. Your trusted technology partner for web, mobile, cloud, and AI solutions.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="group p-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-3d hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">
                {section.title}
              </h3>
              <ul role="list" className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} TechCorp. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="/privacy" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .shadow-3d {
          box-shadow: 0 10px 30px -10px hsl(var(--primary) / 0.3);
        }
        
        .shadow-glow {
          box-shadow: 0 0 40px hsl(var(--primary) / 0.4);
        }
      `}</style>
    </footer>
  );
}
