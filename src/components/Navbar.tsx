// import { useState } from "react";
// import { Menu, X, Rocket } from "lucide-react";
// import { Button } from "./ui/button";

// const navLinks = [
//   { href: "/services", label: "Services" },
//   { href: "/case-studies", label: "Case Studies" },
//   { href: "/about", label: "About Us" },
//   { href: "/blog", label: "Blog" },
// ];

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="flex h-20 items-center justify-between">
//           {/* Logo */}
//           <a
//             href="/"
//             className="flex items-center gap-3 text-xl font-bold text-foreground group"
//           >
//             <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-primary-deep shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
//               <Rocket className="h-5 w-5 text-white" />
//             </div>
//             <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
//               TechCorp
//             </span>
//           </a>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex md:items-center md:gap-8">
//             <div className="flex gap-1">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.label}
//                   href={link.href}
//                   className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 rounded-lg hover:bg-primary/5"
//                 >
//                   {link.label}
//                 </a>
//               ))}
//             </div>

//             <a href="/contact">
//               <Button className="bg-gradient-to-r from-primary to-primary-deep hover:from-primary-deep hover:to-primary text-primary-foreground shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105">
//                 Contact Us
//               </Button>
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             type="button"
//             className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors duration-300"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMobileMenuOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
//           <div className="px-6 py-4 space-y-2">
//             {navLinks.map((link) => (
//               <a
//                 key={link.label}
//                 href={link.href}
//                 className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {link.label}
//               </a>
//             ))}
//             <div className="pt-4">
//               <Button
//                 className="w-full bg-gradient-to-r from-primary to-primary-deep hover:from-primary-deep hover:to-primary text-primary-foreground shadow-lg"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 Contact Us
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}

//       <style>{`
//         .shadow-glow {
//           box-shadow: 0 0 40px hsl(var(--primary) / 0.4);
//         }
//       `}</style>
//     </nav>
//   );
// }
