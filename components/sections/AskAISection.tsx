"use client";

import { MessageSquare, Sparkles, Eye, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/animations";
import { Button } from "@/components/ui/button";

const AI_ASSISTANTS = [
  {
    name: "ChatGPT",
    icon: MessageSquare,
    description: "Comprehensive analysis",
    color: "from-green-500 to-emerald-600",
    hoverColor: "hover:from-green-600 hover:to-emerald-700",
    query: encodeURIComponent(
      "I'm evaluating ELITE, a platform for tracking verified work credentials. Can you help me understand if this is right for my career development?\n\nKey features:\n- Real-time activity tracking across development tools\n- Blockchain-verified credentials\n- Privacy-first design with user-controlled sharing\n- Integration with 100+ development tools\n- Free tier available\n\nWhat should I consider when deciding to use a credential verification platform like ELITE? How does it compare to traditional resumes and portfolios?"
    ),
    url: "https://chatgpt.com/",
  },
  {
    name: "Claude",
    icon: Sparkles,
    description: "Career-focused guidance",
    color: "from-orange-500 to-amber-600",
    hoverColor: "hover:from-orange-600 hover:to-amber-700",
    query: encodeURIComponent(
      "I'm researching ELITE, a credential verification platform for professionals. I need help deciding if it's right for my career.\n\nWhat it does:\n- Tracks real work across tools you already use\n- Generates blockchain-verified skill credentials\n- Lets you control what you share and with whom\n- Free tier with generous limits\n\nAs someone focused on career growth, what factors should I weigh when considering ELITE? What are the pros and cons compared to alternatives like LinkedIn certifications or traditional portfolios?"
    ),
    url: "https://claude.ai/",
  },
  {
    name: "Perplexity",
    icon: Eye,
    description: "Research & comparison",
    color: "from-blue-500 to-cyan-600",
    hoverColor: "hover:from-blue-600 hover:to-cyan-700",
    query: encodeURIComponent(
      "Is ELITE credential verification platform worth using for career development in 2025? Compare it to alternatives like LinkedIn certifications, traditional portfolios, and other credential verification systems. Include recent information about blockchain credentials and skill verification trends."
    ),
    url: "https://www.perplexity.ai/",
  },
];

export function AskAISection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-24 md:py-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-pink-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="container">
        <div className="mx-auto max-w-5xl">
          {/* Section header */}
          <FadeIn delay={0} direction="up" className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Unbiased perspective
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Still Not Sure?
              <br />
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Ask AI if ELITE Is Right for You
              </span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Get an unbiased third-party perspective. Each AI assistant receives a tailored
              question about ELITE and can help you evaluate if it fits your career goals.
            </p>
          </FadeIn>

          {/* AI Assistant Cards */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {AI_ASSISTANTS.map((assistant, index) => {
              const Icon = assistant.icon;
              return (
                <FadeIn key={assistant.name} delay={0.1 + index * 0.1} direction="up">
                  <a
                    href={`${assistant.url}?q=${assistant.query}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div
                      className={`relative h-full rounded-2xl border-2 bg-gradient-to-br ${assistant.color} p-[2px] transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]`}
                    >
                      <div className="relative h-full rounded-[14px] bg-background p-6">
                        {/* Icon and header */}
                        <div className="flex items-start justify-between mb-4">
                          <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${assistant.color} ${assistant.hoverColor} text-white shadow-lg`}>
                            <Icon className="h-7 w-7" strokeWidth={2.5} />
                          </div>
                          <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold mb-1">{assistant.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{assistant.description}</p>

                        {/* CTA */}
                        <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                          <span>Ask {assistant.name}</span>
                          <ExternalLink className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </a>
                </FadeIn>
              );
            })}
          </div>

          {/* Trust note */}
          <FadeIn delay={0.4} direction="up">
            <div className="mt-12 flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground text-center max-w-2xl">
                Each link opens a pre-filled, context-aware question about ELITE. Your conversations
                remain private between you and the AI assistant—we can't see what you discuss.
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>No tracking</span>
                <span className="text-muted-foreground/50">•</span>
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Private conversations</span>
                <span className="text-muted-foreground/50">•</span>
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Unbiased analysis</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
