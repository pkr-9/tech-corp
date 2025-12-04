// src/components/Header.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Rocket, Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  // { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    // keep body scroll locked when mobile menu is open
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [open]);

  function toggleDark() {
    const el = document.documentElement;
    if (el.classList.contains("dark")) {
      el.classList.remove("dark");
      setIsDark(false);
    } else {
      el.classList.add("dark");
      setIsDark(true);
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="inline-flex items-center justify-center rounded-lg p-2 bg-gradient-to-tr from-primary to-primary-deep shadow-md">
              <Rocket className="w-5 h-5 text-white" />
            </span>
            <span className="text-lg font-bold leading-none">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                TechCorp
              </span>
              <span className="ml-1 text-sm block text-muted-foreground">
                Engineering products that scale
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main" className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              <Link to="/contact">
                <Button variant="ghost" className="hidden sm:inline-flex">
                  Contact
                </Button>
              </Link>

              <button
                onClick={toggleDark}
                aria-label="Toggle dark mode"
                className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" />
                )}
              </button>

              <Link to="/contact">
                <Button className="hidden sm:inline-flex bg-primary text-primary-foreground shadow-3d hover:shadow-glow">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          "md:hidden fixed inset-x-4 top-20 z-40 rounded-xl bg-card border border-border shadow-lg p-6 transform transition-all",
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        )}
        role="dialog"
        aria-modal="true"
      >
        <ul className="flex flex-col gap-4 mb-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                onClick={() => setOpen(false)}
                className="block text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3">
          <Link to="/contact" onClick={() => setOpen(false)}>
            <Button className="w-full bg-primary text-primary-foreground">
              Request a Quote
            </Button>
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            <Button variant="ghost" className="w-full">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
