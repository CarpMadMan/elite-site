"use client";

import { ArrowRight, Code2, Terminal, FileCode, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/animations";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-muted/30">
      {/* Wispr Flow style: subtle dotted pattern */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_1px_at_1px_1px,theme(colors.foreground)_1px,transparent_0)] [background-size:24px_24px]" />
      </div>

      <div className="container max-w-4xl">
        <FadeIn delay={0} direction="up" className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
            Start Verifying Your Skills
          </h2>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Turn your real work into undeniable proof of expertise.
          </p>

          {/* Trust indicators - Wispr Flow style: more subtle */}
          <FadeIn delay={0.1} direction="up" className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>Free forever plan</span>
            </div>
            <span className="text-muted-foreground/30">•</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>No credit card required</span>
            </div>
          </FadeIn>

          {/* CTAs - Wispr Flow style: cleaner shadows */}
          <FadeIn delay={0.2} direction="up" className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 hover:bg-accent transition-all"
            >
              Watch Demo
            </Button>
          </FadeIn>

          {/* Platform badges - Wispr Flow style: minimalist */}
          <FadeIn delay={0.3} direction="up" className="mt-16">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Works with your favorite tools
            </p>
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/50 backdrop-blur border border-border/50">
                <Code2 className="h-4 w-4" />
                <span className="text-sm">VS Code</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/50 backdrop-blur border border-border/50">
                <Terminal className="h-4 w-4" />
                <span className="text-sm">JetBrains</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background/50 backdrop-blur border border-border/50">
                <FileCode className="h-4 w-4" />
                <span className="text-sm">+ more</span>
              </div>
            </div>
          </FadeIn>
        </FadeIn>
      </div>
    </section>
  );
}
