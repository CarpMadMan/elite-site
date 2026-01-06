"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          {/* Promo badge */}
          <FadeIn delay={0} direction="up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="text-sm font-medium text-primary">
                The future of verified credentials
              </span>
            </div>
          </FadeIn>

          {/* Main headline - Wispr Flow style: more subtle weight, better emphasis */}
          <FadeIn delay={0.1} direction="up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.15]">
              Your Skills Are Real.
              <br />
              <span className="font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Make Them Undeniable.
              </span>
            </h1>
          </FadeIn>

          {/* Subhead - Wispr Flow style: better spacing, lighter color */}
          <FadeIn delay={0.2} direction="up">
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Track real work. Earn verified credentials. Unlock the opportunities you deserve.
            </p>
          </FadeIn>

          {/* CTAs - Wispr Flow style: more subtle shadows, better hover */}
          <FadeIn delay={0.3} direction="up">
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                <Link href="#get-started">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 py-6 hover:bg-accent transition-all">
                <Link href="#demo">
                  Watch Demo
                  <Play className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>

          {/* Platform badges */}
          <FadeIn delay={0.4} direction="up">
            <p className="mt-8 text-sm text-muted-foreground">
              Available on Mac, Windows, and as a browser extension
            </p>
          </FadeIn>

          {/* App mockup placeholder */}
          <FadeIn delay={0.5} direction="up">
            <div className="mt-16 rounded-xl border-4 border-border bg-card p-4 shadow-2xl">
              <div className="rounded-lg bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 p-16 md:p-24">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/30 flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full bg-primary/50"></div>
                  </div>
                  <p className="text-2xl font-semibold text-primary">ELITE Dashboard</p>
                  <p className="text-muted-foreground">Your verified skills profile</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
