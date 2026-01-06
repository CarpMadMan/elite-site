"use client";

import { FadeIn } from "@/components/animations";

export function SocialProofSection() {
  // Expand list to 18 companies for the carousel
  const companies = [
    { name: "Google", color: "from-blue-500 to-green-500" },
    { name: "Meta", color: "from-blue-600 to-cyan-500" },
    { name: "Amazon", color: "from-orange-500 to-yellow-500" },
    { name: "Microsoft", color: "from-blue-700 to-cyan-600" },
    { name: "Netflix", color: "from-red-600 to-red-500" },
    { name: "Stripe", color: "from-purple-600 to-indigo-600" },
    { name: "Shopify", color: "from-green-600 to-emerald-500" },
    { name: "Spotify", color: "from-green-500 to-green-600" },
    { name: "Airbnb", color: "from-rose-500 to-pink-600" },
    { name: "Uber", color: "from-gray-800 to-gray-600" },
    { name: "Coinbase", color: "from-blue-600 to-indigo-600" },
    { name: "Vercel", color: "from-black to-gray-800" },
    { name: "Netlify", color: "from-teal-500 to-cyan-600" },
    { name: "Superhuman", color: "from-violet-600 to-purple-600" },
    { name: "Notion", color: "from-gray-800 to-gray-700" },
    { name: "Figma", color: "from-pink-500 to-rose-500" },
    { name: "Linear", color: "from-violet-700 to-indigo-700" },
    { name: "Replit", color: "from-orange-600 to-amber-500" },
  ];

  // Duplicate the list 3 times to create seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="py-20 border-y overflow-hidden">
      <div className="container mb-12">
        <FadeIn delay={0} direction="up" className="text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Trusted by industry leaders
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">
            Used by professionals everywhere to{" "}
            <span className="text-gradient">verify their skills</span>
          </h2>
        </FadeIn>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative">
        {/* Fade masks on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling container */}
        <div className="flex animate-infinite-scroll hover:[animation-play-state:paused]">
          {duplicatedCompanies.map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="flex-shrink-0 px-8 md:px-12 group"
            >
              <div className="flex items-center gap-3">
                {/* Logo placeholder with gradient */}
                <div
                  className={`
                    w-10 h-10 md:w-12 md:h-12 rounded-lg
                    bg-gradient-to-br ${company.color}
                    flex items-center justify-center
                    opacity-40 group-hover:opacity-100
                    transition-opacity duration-300
                    shadow-lg
                  `}
                >
                  <span className="text-white font-bold text-lg">
                    {company.name[0]}
                  </span>
                </div>
                <span
                  className={`
                    text-xl md:text-2xl font-semibold
                    text-muted-foreground/60
                    group-hover:text-foreground
                    transition-colors duration-300
                  `}
                >
                  {company.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
