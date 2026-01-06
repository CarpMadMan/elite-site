"use client";

import { Download, Globe } from "lucide-react";
import { FadeIn, StaggerContainer } from "@/components/animations";
import { Button } from "@/components/ui/button";

export function PlatformSection() {
  const browsers = [
    {
      name: "Chrome",
      users: "65%",
    },
    {
      name: "Firefox",
      users: "10%",
    },
    {
      name: "Safari",
      users: "20%",
    },
    {
      name: "Edge",
      users: "5%",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              <FadeIn delay={0} direction="up">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                  In your browser,
                  <br />
                  <span className="text-primary">where you work</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  No desktop apps to install. No complex setup. Just a simple browser extension that works seamlessly with your existing development tools.
                </p>
              </FadeIn>

              {/* Feature List */}
              <FadeIn delay={0.15} direction="up">
                <ul className="space-y-4 mb-8">
                  {[
                    "Install in seconds, not minutes",
                    "Works with your existing workflow",
                    "Automatic skill tracking in the background",
                    "Privacy-first - your data stays yours",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5 flex-shrink-0">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              {/* CTA Button */}
              <FadeIn delay={0.3} direction="up">
                <Button size="lg" className="text-base px-8 py-6 shadow-xl shadow-primary/25">
                  <Download className="mr-2 h-5 w-5" />
                  Install Extension
                </Button>
              </FadeIn>
            </div>

            {/* Right Column - Browser Mockups */}
            <StaggerContainer>
              <FadeIn delay={0.15} direction="left">
                <div className="relative">
                  {/* Main browser mockup */}
                  <div className="rounded-xl border-4 border-border bg-card shadow-2xl overflow-hidden">
                    {/* Browser chrome */}
                    <div className="bg-muted border-b border-border px-4 py-3 flex items-center gap-3">
                      <div className="flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1 flex items-center gap-2">
                        <div className="h-4 w-4 rounded bg-muted-foreground/20"></div>
                        <div className="flex-1 h-8 rounded-full bg-muted-foreground/10 flex items-center px-3 gap-2">
                          <div className="h-3 w-3 rounded-full bg-primary/30"></div>
                          <div className="flex-1 h-2 rounded bg-muted-foreground/10"></div>
                        </div>
                      </div>
                    </div>

                    {/* Browser content */}
                    <div className="bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 p-12">
                      <div className="flex flex-col items-center justify-center space-y-6 text-center">
                        <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="h-10 w-10 rounded-full bg-primary/40"></div>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-primary">ELITE Extension</p>
                          <p className="text-muted-foreground mt-2">
                            Your skills, verified
                          </p>
                        </div>

                        {/* Feature badges */}
                        <div className="flex flex-wrap gap-3 justify-center mt-6">
                          {["Auto-tracking", "Skill Analysis", "Real-time Verification"].map((badge, index) => (
                            <div
                              key={index}
                              className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/20"
                            >
                              {badge}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating browser icons */}
                  <div className="absolute -bottom-4 -right-4 flex gap-2 p-3 rounded-xl bg-card shadow-xl border border-border">
                    {browsers.map((browser, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-1 group"
                      >
                        <Globe className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-xs text-muted-foreground">{browser.users}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
