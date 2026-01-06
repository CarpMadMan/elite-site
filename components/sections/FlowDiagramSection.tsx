"use client";

import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations";

export function FlowDiagramSection() {
  const steps = [
    { icon: "🔌", label: "Install" },
    { icon: "📊", label: "Track" },
    { icon: "🚀", label: "Unlock" },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <FadeIn delay={0} direction="up" className="flex flex-col items-center">
          {/* Flow diagram */}
          <div className="flex items-center gap-4 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                {/* Step circle */}
                <div className="flex flex-col items-center gap-3">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-4xl shadow-lg">
                    {step.icon}
                  </div>
                  <span className="text-lg font-semibold">{step.label}</span>
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <ArrowRight className="h-8 w-8 text-muted-foreground mx-4 md:mx-8 hidden sm:block" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile stack arrow */}
          <div className="sm:hidden flex flex-col items-center gap-8 mt-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-3xl shadow-lg">
                  {step.icon}
                </div>
                <span className="font-semibold">{step.label}</span>
                {index < steps.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 mt-2" />
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
