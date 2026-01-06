"use client";

import { FadeIn, StaggerContainer } from "@/components/animations";

export function CredentialGapSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <StaggerContainer>
          <div className="mx-auto max-w-4xl">
            <FadeIn delay={0} direction="up">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">
                Why traditional credentials fail
              </h2>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={0.1} direction="up">
                <div className="flex items-start gap-4 p-6 rounded-xl border bg-card">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500/10">
                    <span className="text-2xl">📜</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Resumes are just claims</h3>
                    <p className="text-muted-foreground">Anyone can say they know React. Proving it takes months of on-the-job validation.</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <div className="flex items-start gap-4 p-6 rounded-xl border bg-card">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500/10">
                    <span className="text-2xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">6 months to build trust</h3>
                    <p className="text-muted-foreground">That's the average time before employers trust your claimed skills. Opportunities lost.</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <div className="flex items-start gap-4 p-6 rounded-xl border bg-card">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500/10">
                    <span className="text-2xl">👻</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real work goes unseen</h3>
                    <p className="text-muted-foreground">The code you write, the features you ship, the problems you solve—none of it counts toward your "credentials."</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
