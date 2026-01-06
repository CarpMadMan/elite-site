"use client";

import { Download, Zap, Trophy } from "lucide-react";
import { FadeIn, StaggerContainer } from "@/components/animations";

export function SolutionSection() {
  const steps = [
    {
      icon: Download,
      number: "01",
      title: "Install & Connect",
      description: "Download the browser extension and connect your tools in seconds.",
    },
    {
      icon: Zap,
      number: "02",
      title: "Track & Verify",
      description: "Automatic work capture, AI analysis, and skill point attribution.",
    },
    {
      icon: Trophy,
      number: "03",
      title: "Unlock & Grow",
      description: "Your verified profile opens doors to better opportunities.",
    },
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container">
        <StaggerContainer>
          <FadeIn delay={0} direction="up" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              How ELITE Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to verify your skills and unlock opportunities
            </p>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeIn key={index} delay={index * 0.15} direction="up">
                  <div className="relative flex flex-col items-start p-8 rounded-2xl border border-border/50 bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-200">
                    {/* Step number - Wispr Flow style: more subtle */}
                    <div className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>

                    {/* Content - Wispr Flow style: lighter font weights */}
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
