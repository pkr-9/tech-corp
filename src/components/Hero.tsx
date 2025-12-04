import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Terminal, Cpu, Globe } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-20 pb-32">
      {/* Background: Perspective Grid */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
          style={{
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4" />
          <span>Next-Gen Engineering</span>
        </div>

        {/* Main Headline */}
        <h1
          className="max-w-4xl mx-auto text-5xl md:text-7xl font-bold tracking-tight mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Software that <br />
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Defies Expectations
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="max-w-2xl mx-auto text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          We are the expert team behind high-performance platforms. From
          scalable architecture to seamless user experiences, we build the
          technology that powers your vision.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Link to="/contact">
            <Button
              size="lg"
              className="h-12 px-8 text-base bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Link to="/services">
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base border-primary/20 hover:bg-primary/5"
            >
              View Capabilities
            </Button>
          </Link>
        </div>

        {/* 3D Perspective Container */}
        <div
          className="relative mx-auto max-w-5xl perspective-1000 animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          {/* Floating Icons (Decorative) */}
          <div className="absolute -left-12 top-1/4 p-3 bg-card border border-border rounded-xl shadow-xl animate-float-slow hidden lg:block">
            <Terminal className="w-6 h-6 text-primary" />
          </div>
          <div className="absolute -right-12 top-1/3 p-3 bg-card border border-border rounded-xl shadow-xl animate-float-slower hidden lg:block">
            <Cpu className="w-6 h-6 text-accent" />
          </div>

          {/* Main 3D Card */}
          <div className="relative transform-3d rotate-x-12 bg-card border border-border rounded-xl shadow-2xl overflow-hidden group hover:rotate-x-0 transition-transform duration-700 ease-out">
            {/* Window Controls */}
            <div className="flex items-center px-4 py-3 border-b border-border bg-muted/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto text-xs font-mono text-muted-foreground flex items-center gap-2">
                <Globe className="w-3 h-3" />
                techcorp_config.ts
              </div>
            </div>

            {/* Code Content */}
            <div className="p-6 sm:p-10 text-left bg-gradient-to-b from-card to-muted/20">
              <pre className="font-mono text-sm sm:text-base leading-relaxed overflow-x-auto">
                <code className="block">
                  <span className="text-primary">const</span>{" "}
                  <span className="text-foreground">projectConfig</span>{" "}
                  <span className="text-primary">=</span>{" "}
                  <span className="text-foreground">{"{"}</span>
                  <br />
                  <span className="text-muted-foreground">
                    {" "}
                    // The vision for your next big thing
                  </span>
                  <br />
                  <span className="text-foreground"> vision: </span>
                  <span className="text-foreground">{"{"}</span>
                  <br />
                  <span className="text-foreground"> name: </span>
                  <span className="text-secondary">'Project Phoenix'</span>
                  <span className="text-foreground">,</span>
                  <br />
                  <span className="text-foreground"> status: </span>
                  <span className="text-secondary">'ready_to_launch'</span>
                  <span className="text-foreground">,</span>
                  <br />
                  <span className="text-foreground"> performance: </span>
                  <span className="text-accent">'100%'</span>
                  <br />
                  <span className="text-foreground"> {"}"},</span>
                  <br />
                  <br />
                  <span className="text-muted-foreground">
                    {" "}
                    // Direct line to our engineering team
                  </span>
                  <br />
                  <span className="text-foreground"> contact: </span>
                  <span className="text-foreground">{"{"}</span>
                  <br />
                  <span className="text-foreground"> phone: </span>
                  <a
                    href="tel:+915551234567"
                    className="text-secondary hover:underline hover:text-primary transition-colors cursor-pointer font-bold border-b border-dashed border-secondary/50 pb-0.5"
                  >
                    '+91 (555) 123-4567'
                  </a>
                  <span className="text-foreground">,</span>
                  <br />
                  <span className="text-foreground"> email: </span>
                  <a
                    href="mailto:hello@techcorp.com"
                    className="text-secondary hover:underline hover:text-primary transition-colors cursor-pointer font-bold border-b border-dashed border-secondary/50 pb-0.5"
                  >
                    'hello@techcorp.com'
                  </a>
                  <span className="text-foreground">,</span>
                  <br />
                  <span className="text-foreground"> office: </span>
                  <span className="text-secondary">'Pune, India'</span>
                  <br />
                  <span className="text-foreground"> {"}"}</span>
                  <br />
                  <span className="text-foreground">{"}"};</span>
                  {/* Blinking Cursor */}
                  <span className="inline-block w-2.5 h-5 ml-1 bg-accent align-middle animate-blink" />
                </code>
              </pre>
            </div>

            {/* Bottom Reflection Effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>

          {/* Shadow beneath the 3D element */}
          <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-[50%] opacity-40 animate-pulse-slow" />
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-3d {
          transform-style: preserve-3d;
        }
        
        .rotate-x-12 {
          transform: rotateX(12deg) scale(0.95);
        }
        
        /* Smooth Hover Reset */
        .hover\\:rotate-x-0:hover {
          transform: rotateX(0deg) scale(1);
        }

        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        
        @keyframes float-slower {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slower { animation: float-slower 8s ease-in-out infinite; }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s step-end infinite; }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

// // src/components/Hero.tsx
// import React, { useState, useCallback, useRef } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, Sparkles } from "lucide-react";
// import { Button } from "./ui/button";

// /**
//  * Accessible hero with tabbed interactive mock preview.
//  * Tabs: "dashboard", "architecture", "code"
//  */
// const TABS = ["dashboard", "architecture", "code"] as const;
// type TabKey = (typeof TABS)[number];

// export default function Hero(): JSX.Element {
//   const [active, setActive] = useState<TabKey>("dashboard");
//   const tabListRef = useRef<HTMLDivElement | null>(null);

//   // keyboard navigation for tabs (Left/Right/Home/End)
//   const onKeyDown = useCallback(
//     (e: React.KeyboardEvent) => {
//       const idx = TABS.indexOf(active);
//       if (e.key === "ArrowRight") {
//         const next = TABS[(idx + 1) % TABS.length];
//         setActive(next);
//         e.preventDefault();
//       } else if (e.key === "ArrowLeft") {
//         const prev = TABS[(idx - 1 + TABS.length) % TABS.length];
//         setActive(prev);
//         e.preventDefault();
//       } else if (e.key === "Home") {
//         setActive(TABS[0]);
//         e.preventDefault();
//       } else if (e.key === "End") {
//         setActive(TABS[TABS.length - 1]);
//         e.preventDefault();
//       }
//     },
//     [active]
//   );

//   return (
//     <section
//       aria-label="Hero"
//       className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-background"
//     >
//       {/* decorative blurred blobs */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div
//           className="absolute -left-24 -top-24 w-96 h-96 rounded-full blur-3xl"
//           style={{
//             background:
//               "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(168,85,247,0.08))",
//           }}
//         />
//         <div
//           className="absolute -right-24 -bottom-12 w-96 h-96 rounded-full blur-3xl"
//           style={{
//             background:
//               "linear-gradient(135deg, rgba(56,189,248,0.08), rgba(34,197,94,0.07))",
//           }}
//         />
//       </div>

//       <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left: text & CTAs */}
//           <div className="text-center lg:text-left">
//             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 shadow-soft">
//               <Sparkles className="w-4 h-4 text-primary" />
//               <span className="text-sm font-medium">
//                 Industry-grade engineering
//               </span>
//             </div>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-6">
//               Build{" "}
//               <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
//                 scalable
//               </span>{" "}
//               products with
//               <br />a team that ships.
//             </h1>

//             <p className="max-w-2xl text-lg text-muted-foreground mb-8">
//               We design, develop, and operate resilient web & cloud systems —
//               from prototypes to enterprise-grade platforms. Fast delivery,
//               pragmatic architecture, measurable outcomes.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center gap-3">
//               <Link to="/contact" className="w-full sm:w-auto">
//                 <Button className="inline-flex items-center gap-2 bg-primary text-primary-foreground shadow-3d hover:shadow-glow">
//                   Start your project
//                   <ArrowRight className="w-4 h-4" />
//                 </Button>
//               </Link>

//               <Link to="/services" className="w-full sm:w-auto">
//                 <Button
//                   variant="ghost"
//                   className="inline-flex items-center gap-2"
//                 >
//                   Explore services
//                 </Button>
//               </Link>
//             </div>

//             <div className="flex flex-wrap gap-6 mt-8 text-sm text-muted-foreground">
//               <div className="flex items-center gap-2">
//                 <strong className="text-foreground">50+</strong>
//                 <span>Modern Technologies</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <strong className="text-foreground">24/7</strong>
//                 <span>Support Availability</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <strong className="text-foreground">100%</strong>
//                 <span>On-Time Delivery</span>
//               </div>
//             </div>
//           </div>

//           {/* Right: Interactive mock + testimonial + logos */}
//           <div className="order-first lg:order-last">
//             <div className="mx-auto max-w-md lg:max-w-lg space-y-6">
//               {/* Tabbed mockup card */}
//               <div className="rounded-3xl bg-card border border-border p-4 shadow-3d">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center gap-2">
//                     <span className="h-2 w-8 rounded-full bg-muted" />
//                     <span className="h-2 w-8 rounded-full bg-muted/60" />
//                     <span className="h-2 w-8 rounded-full bg-muted/40" />
//                   </div>

//                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">
//                     Live demo
//                   </div>
//                 </div>

//                 {/* Tab buttons */}
//                 <div
//                   ref={tabListRef}
//                   role="tablist"
//                   aria-label="Preview tabs"
//                   className="flex gap-2 mb-3"
//                   onKeyDown={onKeyDown}
//                 >
//                   <button
//                     role="tab"
//                     id="tab-dashboard"
//                     aria-controls="panel-dashboard"
//                     aria-selected={active === "dashboard"}
//                     tabIndex={active === "dashboard" ? 0 : -1}
//                     onClick={() => setActive("dashboard")}
//                     className={`flex-1 text-xs font-medium py-2 rounded-lg transition ${
//                       active === "dashboard"
//                         ? "bg-primary/8"
//                         : "bg-transparent hover:bg-muted/8"
//                     }`}
//                   >
//                     Dashboard
//                   </button>

//                   <button
//                     role="tab"
//                     id="tab-architecture"
//                     aria-controls="panel-architecture"
//                     aria-selected={active === "architecture"}
//                     tabIndex={active === "architecture" ? 0 : -1}
//                     onClick={() => setActive("architecture")}
//                     className={`flex-1 text-xs font-medium py-2 rounded-lg transition ${
//                       active === "architecture"
//                         ? "bg-primary/8"
//                         : "bg-transparent hover:bg-muted/8"
//                     }`}
//                   >
//                     Architecture
//                   </button>

//                   <button
//                     role="tab"
//                     id="tab-code"
//                     aria-controls="panel-code"
//                     aria-selected={active === "code"}
//                     tabIndex={active === "code" ? 0 : -1}
//                     onClick={() => setActive("code")}
//                     className={`flex-1 text-xs font-medium py-2 rounded-lg transition ${
//                       active === "code"
//                         ? "bg-primary/8"
//                         : "bg-transparent hover:bg-muted/8"
//                     }`}
//                   >
//                     Code
//                   </button>
//                 </div>

//                 {/* Panels */}
//                 <div className="rounded-xl bg-gradient-to-br from-white/2 to-muted/2 p-4 min-h-[220px]">
//                   {/* Dashboard panel */}
//                   <div
//                     id="panel-dashboard"
//                     role="tabpanel"
//                     aria-labelledby="tab-dashboard"
//                     aria-hidden={active !== "dashboard"}
//                     className={
//                       active === "dashboard" ? "block space-y-3" : "hidden"
//                     }
//                   >
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <div className="h-3 w-36 rounded-full bg-muted" />
//                         <div className="h-3 w-20 rounded-full bg-muted/70 mt-2" />
//                       </div>
//                       <div className="text-right">
//                         <div className="text-sm text-muted-foreground">
//                           Active
//                         </div>
//                         <div className="text-lg font-semibold text-foreground">
//                           1.2M
//                         </div>
//                       </div>
//                     </div>

//                     <div className="mt-3 flex items-end gap-3">
//                       <div className="flex-1 h-28 bg-primary/60 rounded-sm" />
//                       <div className="flex-1 h-16 bg-primary/40 rounded-sm" />
//                       <div className="flex-1 h-24 bg-primary/30 rounded-sm" />
//                       <div className="flex-1 h-10 bg-primary/20 rounded-sm" />
//                       <div className="flex-1 h-14 bg-primary/10 rounded-sm" />
//                     </div>

//                     <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
//                       <div>Uptime 99.99%</div>
//                       <div>Avg latency 42ms</div>
//                     </div>
//                   </div>

//                   {/* Architecture panel */}
//                   <div
//                     id="panel-architecture"
//                     role="tabpanel"
//                     aria-labelledby="tab-architecture"
//                     aria-hidden={active !== "architecture"}
//                     className={
//                       active === "architecture" ? "block space-y-3" : "hidden"
//                     }
//                   >
//                     <div className="flex gap-3 items-center">
//                       <div className="p-3 rounded-lg bg-muted/8">
//                         <svg
//                           width="48"
//                           height="36"
//                           viewBox="0 0 48 36"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                           aria-hidden
//                         >
//                           <rect
//                             x="2"
//                             y="6"
//                             width="16"
//                             height="10"
//                             rx="2"
//                             fill="rgba(59,130,246,0.12)"
//                           />
//                           <rect
//                             x="30"
//                             y="6"
//                             width="16"
//                             height="10"
//                             rx="2"
//                             fill="rgba(16,185,129,0.1)"
//                           />
//                           <rect
//                             x="16"
//                             y="22"
//                             width="16"
//                             height="10"
//                             rx="2"
//                             fill="rgba(168,85,247,0.08)"
//                           />
//                         </svg>
//                       </div>
//                       <div>
//                         <div className="h-3 w-28 rounded-full bg-muted" />
//                         <div className="h-3 w-20 rounded-full bg-muted/70 mt-2" />
//                         <div className="text-sm text-muted-foreground mt-2">
//                           Microservices • Event-driven • Auto-scaling
//                         </div>
//                       </div>
//                     </div>

//                     <div className="mt-2 grid grid-cols-2 gap-2">
//                       <div className="p-3 rounded-lg bg-white/3 border border-border">
//                         <div className="h-3 w-20 rounded-full bg-muted mb-2" />
//                         <div className="h-3 w-12 rounded-full bg-muted/70" />
//                       </div>
//                       <div className="p-3 rounded-lg bg-white/3 border border-border">
//                         <div className="h-3 w-20 rounded-full bg-muted mb-2" />
//                         <div className="h-3 w-12 rounded-full bg-muted/70" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Code panel */}
//                   <div
//                     id="panel-code"
//                     role="tabpanel"
//                     aria-labelledby="tab-code"
//                     aria-hidden={active !== "code"}
//                     className={active === "code" ? "block space-y-3" : "hidden"}
//                   >
//                     <div className="rounded-md bg-[#0b1221] p-3 text-xs font-mono text-green-300">
//                       <div>const server = createServer({/* ... */});</div>
//                       <div>await deploy(server).to('prod');</div>
//                     </div>
//                     <div className="text-sm text-muted-foreground">
//                       Well-documented APIs • CI/CD • Observability
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Testimonial card */}
//               <div className="rounded-2xl bg-card border border-border p-4 shadow-soft">
//                 <div className="flex items-start gap-3">
//                   <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-sm text-foreground font-semibold">
//                     A
//                   </div>
//                   <div>
//                     <p className="text-sm text-foreground">
//                       "TechCorp helped us stabilise a mission-critical service
//                       and cut costs by 32% in three months."
//                     </p>
//                     <div className="mt-2 text-xs text-muted-foreground">
//                       — Anirudh Kumar, CEO @ TenderLink
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Client logos (compact placeholders) */}
//               {/* <div className="flex items-center justify-between gap-3 text-muted-foreground">
//                 <div className="h-6 w-20 bg-muted/10 rounded-md flex items-center justify-center text-xs">
//                   Acme
//                 </div>
//                 <div className="h-6 w-20 bg-muted/10 rounded-md flex items-center justify-center text-xs">
//                   Nova
//                 </div>
//                 <div className="h-6 w-20 bg-muted/10 rounded-md flex items-center justify-center text-xs">
//                   Pulse
//                 </div>
//               </div> */}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* small scoped styles that use tokens already present in repo */}
//       <style>{`
//         .shadow-3d { box-shadow: var(--shadow-3d); }
//         .shadow-glow { box-shadow: var(--shadow-glow); }
//         .shadow-soft { box-shadow: var(--shadow-soft); }
//       `}</style>
//     </section>
//   );
// }
