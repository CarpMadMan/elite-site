"use client";

import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer } from "@/components/animations";
import Link from "next/link";

export function UserTypesSection() {
  const userTypes = [
    {
      title: "Software Engineers",
      description: "Verify your coding skills with real commit data",
      icon: "💻",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Frontend Developers",
      description: "Showcase your UI/UX expertise through verified projects",
      icon: "🎨",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Backend Developers",
      description: "Prove your system architecture and API skills",
      icon: "⚙️",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Full-Stack Developers",
      description: "Demonstrate end-to-end technical capabilities",
      icon: "🔧",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "DevOps Engineers",
      description: "Verify infrastructure and deployment expertise",
      icon: "🚀",
      gradient: "from-indigo-500/20 to-violet-500/20",
    },
    {
      title: "ML Engineers",
      description: "Showcase model training and data pipeline skills",
      icon: "🤖",
      gradient: "from-teal-500/20 to-cyan-500/20",
    },
    {
      title: "Data Scientists",
      description: "Prove your analytics and data modeling abilities",
      icon: "📊",
      gradient: "from-yellow-500/20 to-orange-500/20",
    },
    {
      title: "Students",
      description: "Build verified skills before you even graduate",
      icon: "🎓",
      gradient: "from-pink-500/20 to-rose-500/20",
    },
    {
      title: "Career Changers",
      description: "Transition with proof, not just resume claims",
      icon: "🔄",
      gradient: "from-sky-500/20 to-blue-500/20",
    },
  ];

  return (
    <section className="py-24">
      <div className="container">
        {/* Section Header */}
        <FadeIn delay={0} direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            ELITE is made for you
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Whatever your role, verify your real skills
          </p>
        </FadeIn>

        {/* User Types Grid */}
        <StaggerContainer>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {userTypes.map((userType, index) => (
              <FadeIn key={index} delay={index * 0.08} direction="up">
                <Link
                  href="#learn-more"
                  className="group block h-full"
                >
                  <div className="relative h-full rounded-2xl border-2 border-border bg-card p-8 transition-all hover:scale-105 hover:shadow-xl hover:border-primary/50">
                    {/* Icon with gradient background */}
                    <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${userType.gradient} text-3xl`}>
                      {userType.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {userType.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {userType.description}
                    </p>

                    {/* Learn more link */}
                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
