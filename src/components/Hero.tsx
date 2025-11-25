// src/components/Hero.tsx
import React, { useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

/**
 * Accessible hero with tabbed interactive mock preview.
 * Tabs: "dashboard", "architecture", "code"
 */
const TABS = ["dashboard", "architecture", "code"] as const;
type TabKey = (typeof TABS)[number];

export default function Hero(): JSX.Element {
  const [active, setActive] = useState<TabKey>("dashboard");
  const tabListRef = useRef<HTMLDivElement | null>(null);

  // keyboard navigation for tabs (Left/Right/Home/End)
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const idx = TABS.indexOf(active);
      if (e.key === "ArrowRight") {
        const next = TABS[(idx + 1) % TABS.length];
        setActive(next);
        e.preventDefault();
      } else if (e.key === "ArrowLeft") {
        const prev = TABS[(idx - 1 + TABS.length) % TABS.length];
        setActive(prev);
        e.preventDefault();
      } else if (e.key === "Home") {
        setActive(TABS[0]);
        e.preventDefault();
      } else if (e.key === "End") {
        setActive(TABS[TABS.length - 1]);
        e.preventDefault();
      }
    },
    [active]
  );

  return (
    <section
      aria-label="Hero"
      className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-background"
    >
      {/* decorative blurred blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -left-24 -top-24 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(168,85,247,0.08))",
          }}
        />
        <div
          className="absolute -right-24 -bottom-12 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(56,189,248,0.08), rgba(34,197,94,0.07))",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text & CTAs */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6 shadow-soft">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                Industry-grade engineering
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-6">
              Build{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                scalable
              </span>{" "}
              products with
              <br />a team that ships.
            </h1>

            <p className="max-w-2xl text-lg text-muted-foreground mb-8">
              We design, develop, and operate resilient web & cloud systems —
              from prototypes to enterprise-grade platforms. Fast delivery,
              pragmatic architecture, measurable outcomes.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button className="inline-flex items-center gap-2 bg-primary text-primary-foreground shadow-3d hover:shadow-glow">
                  Start your project
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Link to="/services" className="w-full sm:w-auto">
                <Button
                  variant="ghost"
                  className="inline-flex items-center gap-2"
                >
                  Explore services
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <strong className="text-foreground">500+</strong>
                <span>happy clients</span>
              </div>
              <div className="flex items-center gap-2">
                <strong className="text-foreground">10+</strong>
                <span>years in business</span>
              </div>
              <div className="flex items-center gap-2">
                <strong className="text-foreground">1200+</strong>
                <span>projects delivered</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive mock + testimonial + logos */}
          <div className="order-first lg:order-last">
            <div className="mx-auto max-w-md lg:max-w-lg space-y-6">
              {/* Tabbed mockup card */}
              <div className="rounded-3xl bg-card border border-border p-4 shadow-3d">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-8 rounded-full bg-muted" />
                    <span className="h-2 w-8 rounded-full bg-muted/60" />
                    <span className="h-2 w-8 rounded-full bg-muted/40" />
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs">
                    Live demo
                  </div>
                </div>

                {/* Tab buttons */}
                <div
                  ref={tabListRef}
                  role="tablist"
                  aria-label="Preview tabs"
                  className="flex gap-2 mb-3"
                  onKeyDown={onKeyDown}
                >
                  <button
                    role="tab"
                    id="tab-dashboard"
                    aria-controls="panel-dashboard"
                    aria-selected={active === "dashboard"}
                    tabIndex={active === "dashboard" ? 0 : -1}
                    onClick={() => setActive("dashboard")}
                    className={`flex-1 text-xs font-medium py-2 rounded-lg transition ${
                      active === "dashboard"
                        ? "bg-primary/8"
                        : "bg-transparent hover:bg-muted/8"
                    }`}
                  >
                    Dashboard
                  </button>

                  <button
                    role="tab"
                    id="tab-architecture"
                    aria-controls="panel-architecture"
                    aria-selected={active === "architecture"}
                    tabIndex={active === "architecture" ? 0 : -1}
                    onClick={() => setActive("architecture")}
                    className={`flex-1 text-xs font-medium py-2 rounded-lg transition ${
                      active === "architecture"
                        ? "bg-primary/8"
                        : "bg-transparent hover:bg-muted/8"
                    }`}
                  >
                    Architecture
                  </button>

                  <button
                    role="tab"
                    id="tab-code"
                    aria-controls="panel-code"
                    aria-selected={active === "code"}
                    tabIndex={active === "code" ? 0 : -1}
                    onClick={() => setActive("code")}
                    className={`flex-1 text-xs font-medium py-2 rounded-lg transition ${
                      active === "code"
                        ? "bg-primary/8"
                        : "bg-transparent hover:bg-muted/8"
                    }`}
                  >
                    Code
                  </button>
                </div>

                {/* Panels */}
                <div className="rounded-xl bg-gradient-to-br from-white/2 to-muted/2 p-4 min-h-[220px]">
                  {/* Dashboard panel */}
                  <div
                    id="panel-dashboard"
                    role="tabpanel"
                    aria-labelledby="tab-dashboard"
                    aria-hidden={active !== "dashboard"}
                    className={
                      active === "dashboard" ? "block space-y-3" : "hidden"
                    }
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-3 w-36 rounded-full bg-muted" />
                        <div className="h-3 w-20 rounded-full bg-muted/70 mt-2" />
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">
                          Active
                        </div>
                        <div className="text-lg font-semibold text-foreground">
                          1.2M
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex items-end gap-3">
                      <div className="flex-1 h-28 bg-primary/60 rounded-sm" />
                      <div className="flex-1 h-16 bg-primary/40 rounded-sm" />
                      <div className="flex-1 h-24 bg-primary/30 rounded-sm" />
                      <div className="flex-1 h-10 bg-primary/20 rounded-sm" />
                      <div className="flex-1 h-14 bg-primary/10 rounded-sm" />
                    </div>

                    <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                      <div>Uptime 99.99%</div>
                      <div>Avg latency 42ms</div>
                    </div>
                  </div>

                  {/* Architecture panel */}
                  <div
                    id="panel-architecture"
                    role="tabpanel"
                    aria-labelledby="tab-architecture"
                    aria-hidden={active !== "architecture"}
                    className={
                      active === "architecture" ? "block space-y-3" : "hidden"
                    }
                  >
                    <div className="flex gap-3 items-center">
                      <div className="p-3 rounded-lg bg-muted/8">
                        <svg
                          width="48"
                          height="36"
                          viewBox="0 0 48 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden
                        >
                          <rect
                            x="2"
                            y="6"
                            width="16"
                            height="10"
                            rx="2"
                            fill="rgba(59,130,246,0.12)"
                          />
                          <rect
                            x="30"
                            y="6"
                            width="16"
                            height="10"
                            rx="2"
                            fill="rgba(16,185,129,0.1)"
                          />
                          <rect
                            x="16"
                            y="22"
                            width="16"
                            height="10"
                            rx="2"
                            fill="rgba(168,85,247,0.08)"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="h-3 w-28 rounded-full bg-muted" />
                        <div className="h-3 w-20 rounded-full bg-muted/70 mt-2" />
                        <div className="text-sm text-muted-foreground mt-2">
                          Microservices • Event-driven • Auto-scaling
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <div className="p-3 rounded-lg bg-white/3 border border-border">
                        <div className="h-3 w-20 rounded-full bg-muted mb-2" />
                        <div className="h-3 w-12 rounded-full bg-muted/70" />
                      </div>
                      <div className="p-3 rounded-lg bg-white/3 border border-border">
                        <div className="h-3 w-20 rounded-full bg-muted mb-2" />
                        <div className="h-3 w-12 rounded-full bg-muted/70" />
                      </div>
                    </div>
                  </div>

                  {/* Code panel */}
                  <div
                    id="panel-code"
                    role="tabpanel"
                    aria-labelledby="tab-code"
                    aria-hidden={active !== "code"}
                    className={active === "code" ? "block space-y-3" : "hidden"}
                  >
                    <div className="rounded-md bg-[#0b1221] p-3 text-xs font-mono text-green-300">
                      <div>const server = createServer({/* ... */});</div>
                      <div>await deploy(server).to('prod');</div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Well-documented APIs • CI/CD • Observability
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial card */}
              <div className="rounded-2xl bg-card border border-border p-4 shadow-soft">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-sm text-foreground font-semibold">
                    P
                  </div>
                  <div>
                    <p className="text-sm text-foreground">
                      "TechCorp helped us stabilise a mission-critical service
                      and cut costs by 32% in three months."
                    </p>
                    <div className="mt-2 text-xs text-muted-foreground">
                      — Priya Rao, CTO @ FinEdge
                    </div>
                  </div>
                </div>
              </div>

              {/* Client logos (compact placeholders) */}
              {/* <div className="flex items-center justify-between gap-3 text-muted-foreground">
                <div className="h-6 w-20 bg-muted/10 rounded-md flex items-center justify-center text-xs">
                  Acme
                </div>
                <div className="h-6 w-20 bg-muted/10 rounded-md flex items-center justify-center text-xs">
                  Nova
                </div>
                <div className="h-6 w-20 bg-muted/10 rounded-md flex items-center justify-center text-xs">
                  Pulse
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* small scoped styles that use tokens already present in repo */}
      <style>{`
        .shadow-3d { box-shadow: var(--shadow-3d); }
        .shadow-glow { box-shadow: var(--shadow-glow); }
        .shadow-soft { box-shadow: var(--shadow-soft); }
      `}</style>
    </section>
  );
}
