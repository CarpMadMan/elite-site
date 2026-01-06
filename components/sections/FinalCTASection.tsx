"use client";

import { ArrowRight, Code2, Terminal, FileCode, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/animations";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden py-32 bg-muted/30">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_1px_at_1px_1px,theme(colors.foreground)_1px,transparent_0)] [background-size:24px_24px]" />
      </div>

      <div className="container max-w-4xl">
        <FadeIn delay={0} direction="up" className="text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Start Verifying
          </h2>

          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Turn your real work into undeniable proof of expertise.
          </p>

          {/* Trust indicator */}
          <FadeIn delay={100} direction="up" className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>Free forever plan</span>
            </div>
            <span className="text-muted-foreground/40">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>No credit card required</span>
            </div>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={200} direction="up" className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="text-lg px-8 py-6 group">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6"
            >
              Watch Demo
            </Button>
          </FadeIn>

          {/* Platform/integration section */}
          <FadeIn delay={300} direction="up" className="mt-16">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Works with your favorite tools
            </p>
            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50 backdrop-blur">
                <Code2 className="h-5 w-5" />
                <span className="text-sm font-medium">VS Code</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50 backdrop-blur">
                <Terminal className="h-5 w-5" />
                <span className="text-sm font-medium">JetBrains</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background/50 backdrop-blur">
                <FileCode className="h-5 w-5" />
                <span className="text-sm font-medium">+ more</span>
              </div>
            </div>
          </FadeIn>
        </FadeIn>
      </div>
    </section>
  );
}
