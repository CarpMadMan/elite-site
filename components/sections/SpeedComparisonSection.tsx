"use client";

import { FadeIn } from "@/components/animations";

export function SpeedComparisonSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <FadeIn delay={0} direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              10x faster than resumes.
              <br />
              <span className="text-primary">Verified skills, not claims.</span>
            </h2>
          </FadeIn>

          {/* Comparison Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left Column - Traditional Way */}
            <FadeIn delay={0.15} direction="up">
              <div className="rounded-2xl border-2 border-border bg-card p-8 h-full">
                {/* Header */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
                    <span>⌨️</span>
                    <span>Traditional Resumes</span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-muted-foreground">45</span>
                    <span className="text-xl text-muted-foreground">wpm</span>
                  </div>
                  <p className="text-muted-foreground mt-2">
                    Messy, unstructured text
                  </p>
                </div>

                {/* Content Panel - Resume */}
                <div className="bg-muted/50 rounded-xl p-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-muted-foreground/30 mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        "Experienced software engineer with strong skills in JavaScript, Python, and cloud technologies..."
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-muted-foreground/30 mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        "Self-motivated team player with good communication skills..."
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-muted-foreground/30 mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        "Projects: Dashboard, Platform, Integration..."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Stat */}
                <div className="pt-6 border-t">
                  <p className="text-sm font-medium text-orange-600">
                    ⚠ After 150 years of keyboards, we're still typing claims
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Right Column - ELITE Way */}
            <FadeIn delay={0.3} direction="up">
              <div className="rounded-2xl border-2 border-primary bg-primary/5 p-8 h-full">
                {/* Header */}
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-4">
                    <span>⚡</span>
                    <span>ELITE Verified Skills</span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-primary">10x</span>
                    <span className="text-xl text-primary">faster</span>
                  </div>
                  <p className="text-primary mt-2">
                    Real evidence, real skills
                  </p>
                </div>

                {/* Content Panel - ELITE Profile */}
                <div className="bg-primary/10 rounded-xl p-6 mb-6 border border-primary/20">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-sm leading-relaxed font-medium">
                        <span className="text-primary">Senior Full-Stack Engineer</span>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-sm leading-relaxed">
                        • <span className="font-semibold">472 verified commits</span> across 23 repos
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-sm leading-relaxed">
                        • Expert in <span className="font-semibold">TypeScript (94th percentile)</span>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <p className="text-sm leading-relaxed">
                        • Led <span className="font-semibold">3 production launches</span> at scale
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Stat */}
                <div className="pt-6 border-t border-primary/20">
                  <p className="text-sm font-medium text-primary">
                    ✓ After decades of empty resumes, real proof wins
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
