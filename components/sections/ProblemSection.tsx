"use client";

import { FadeIn } from "@/components/animations";

export function ProblemSection() {
  const messyResume = "Experienced software engineer with strong skills in JavaScript, Python, and cloud technologies. Looking for opportunities in full-stack development. Self-motivated team player with good communication skills...";

  const cleanProfile = "Senior Full-Stack Engineer\n\n• 472 verified commits across 23 repositories\n• Expert in TypeScript (94th percentile), Python (89th)\n• Led 3 production launches at scale\n• Available immediately, EST timezone";

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <FadeIn delay={0} direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Stop proving yourself.
              <br />
              <span className="text-muted-foreground">Start being discovered.</span>
            </h2>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Before - Traditional Resume */}
            <FadeIn delay={0.15} direction="up">
              <div className="rounded-2xl border-2 border-border bg-card p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                    <span className="text-lg">📄</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Traditional Resume</h3>
                    <p className="text-sm text-muted-foreground">Claims, not proof</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="h-2 w-2 rounded-full bg-muted mt-2"></div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{messyResume}</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-2 w-2 rounded-full bg-muted mt-2"></div>
                    <p className="text-sm text-muted-foreground">Projects: React Dashboard, E-commerce Platform, API Integration...</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm font-medium text-orange-600">
                    ⚠ 73% of hiring managers don't trust resumes
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* After - ELITE Profile */}
            <FadeIn delay={0.3} direction="up">
              <div className="rounded-2xl border-2 border-primary bg-primary/5 p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                    <span className="text-lg">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">ELITE Profile</h3>
                    <p className="text-sm text-primary">Verified by real work</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                    <p className="text-sm leading-relaxed whitespace-pre-line">{cleanProfile}</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-primary/20">
                  <p className="text-sm font-medium text-primary">
                    ✓ Skills verified by actual code commits
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
