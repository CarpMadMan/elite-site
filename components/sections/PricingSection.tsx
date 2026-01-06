"use client";

import { Check } from "lucide-react";
import { FadeIn, ScaleIn } from "@/components/animations";

export function PricingSection() {
  const tiers = [
    {
      name: "Free",
      price: "Free",
      description: "Track work across 3 tools",
      features: [
        "Track work across 3 tools",
        "Basic skill verification",
        "Public profile",
      ],
      recommended: false,
    },
    {
      name: "Pro",
      price: "$12/mo",
      description: "Career & skills mapping powered by ENGINE",
      features: [
        "Everything in Free",
        "Unlimited tool tracking",
        "AI-powered career mapping",
        "Skill gap analysis",
        "Priority verification",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Unlimited team seats with centralized management",
      features: [
        "Everything in Pro",
        "Unlimited team seats",
        "Centralized admin dashboard",
        "API access",
        "Custom integrations",
        "Dedicated support",
      ],
      recommended: false,
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <FadeIn delay={0} direction="up" className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Start free, upgrade when you're ready
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <ScaleIn delay={index * 0.1 + 0.2}>
                <div
                  className={`relative flex flex-col p-8 rounded-2xl border ${
                    tier.recommended
                      ? "border-primary bg-primary/5 shadow-xl scale-105"
                      : "bg-card"
                  }`}
                >
                  {tier.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                        Recommended
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold">{tier.name}</h3>
                    <p className="text-muted-foreground mt-2">{tier.description}</p>
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                  </div>

                  <ul className="space-y-4 flex-1">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`mt-8 w-full rounded-lg py-3 font-semibold transition-colors ${
                      tier.recommended
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </ScaleIn>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
