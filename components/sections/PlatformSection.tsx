"use client";

import { Chrome, Firefox, Safari, Globe } from "lucide-react";
import { FadeIn, StaggerContainer } from "@/components/animations";

/**
 * PlatformSection - Multi-platform availability
 *
 * Maps Wispr Flow's "On-the-go or at your desk" to ELITE's browser extension positioning.
 * Shows browser compatibility with visual mockups and platform grid.
 *
 * Content mapping:
 * - Wispr: "On-the-go or at your desk" with Desktop + iPhone mockups
 * - ELITE: "In your browser, where you work" with browser window mockups
 */
export function PlatformSection() {
  const browsers = [
    {
      name: "Chrome",
      icon: Chrome,
      color: "text-red-500",
    },
    {
      name: "Firefox",
      icon: Firefox,
      color: "text-orange-500",
    },
    {
      name: "Safari",
      icon: Safari,
      color: "text-blue-500",
    },
    {
      name: "Edge",
      icon: Globe,
      color: "text-cyan-500",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <StaggerContainer>
          {/* Section header */}
          <FadeIn delay={0} direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              In your browser, where you work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              One extension. Seamless verification. Works everywhere you do.
            </p>
          </FadeIn>

          {/* Browser mockups display */}
          <FadeIn delay={0.2} direction="up" className="mb-16">
            <div className="relative mx-auto max-w-5xl">
              {/* Main browser window - Chrome */}
              <div className="relative z-10 bg-background rounded-lg shadow-2xl border overflow-hidden">
                {/* Browser chrome */}
                <div className="bg-muted border-b px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 ml-4">
                    <div className="bg-background rounded-md px-4 py-1.5 text-sm text-muted-foreground flex items-center gap-2">
                      <Chrome className="w-4 h-4 text-red-500" />
                      <span>elite.community/your-work</span>
                    </div>
                  </div>
                </div>

                {/* Browser content - ELITE extension UI */}
                <div className="p-8 bg-gradient-to-br from-primary/5 to-background">
                  <div className="max-w-md mx-auto">
                    <div className="bg-background rounded-lg border p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Globe className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">ELITE Extension</h3>
                          <p className="text-sm text-muted-foreground">Active</p>
                        </div>
                        <div className="ml-auto">
                          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <span className="text-sm">Work tracked today</span>
                          <span className="font-semibold text-primary">4.2 hrs</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <span className="text-sm">Skills verified</span>
                          <span className="font-semibold text-primary">12 new</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <span className="text-sm">Credentials earned</span>
                          <span className="font-semibold text-primary">3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background browser windows - depth effect */}
              <div className="absolute -top-4 -left-4 w-[calc(100%-2rem)] h-full bg-muted/60 rounded-lg border -z-10" />
              <div className="absolute -top-8 -left-8 w-[calc(100%-4rem)] h-full bg-muted/40 rounded-lg border -z-20" />
            </div>
          </FadeIn>

          {/* Platform icons grid */}
          <FadeIn delay={0.4} direction="up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {browsers.map((browser, index) => {
                const Icon = browser.icon;
                return (
                  <FadeIn key={browser.name} delay={0.5 + index * 0.1} direction="up">
                    <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-background border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className={`w-16 h-16 rounded-full ${browser.color} bg-opacity-10 flex items-center justify-center`}>
                        <Icon className={`w-8 h-8 ${browser.color}`} />
                      </div>
                      <span className="font-semibold">{browser.name}</span>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.9} direction="up" className="text-center mt-16">
            <p className="text-sm text-muted-foreground mb-4">
              Works everywhere you work
            </p>
            <a
              href="#install"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Install Extension
            </a>
          </FadeIn>
        </StaggerContainer>
      </div>
    </section>
  );
}
