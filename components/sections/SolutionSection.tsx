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
    <section className="py-24">
      <div className="container">
        <StaggerContainer>
          <FadeIn delay={0} direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              How ELITE Works
            </h2>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <FadeIn key={index} delay={index * 0.15} direction="up">
                  <div className="relative flex flex-col items-start p-8 rounded-2xl border bg-card">
                    {/* Step number */}
                    <div className="absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
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
