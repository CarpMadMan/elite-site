# ELITE Site Project Overview

## Purpose
ELITE is a credential verification platform that helps users track real work, earn verified credentials, and unlock career opportunities. The site is a marketing/landing page built to showcase the product and convert visitors into users.

## Tech Stack
- **Framework:** Next.js 16.1.1 (App Router)
- **Runtime:** Bun (not npm/yarn/pnpm)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **UI Components:** Radix UI primitives with custom wrappers
- **Icons:** Lucide React

## Project Structure
```
├── app/                    # Next.js app router pages
├── components/
│   ├── animations/        # Reusable animation components (FadeIn, SlideIn, ScaleIn, etc.)
│   ├── layout/           # Navbar, Footer, MobileMenu
│   ├── sections/         # Page sections (Hero, SocialProof, Problem, Solution, etc.)
│   └── ui/               # Base UI components (Button, Dialog, etc.)
├── lib/                  # Utility functions
├── public/               # Static assets
└── docs/Planning/        # Design documentation by feature area
```

## Key Design Patterns
1. **Section Components:** Each page section is a separate component in `components/sections/`
2. **Animation System:** Uses `FadeIn`, `SlideIn`, `ScaleIn` with delay props for stagger effects
3. **Client Components:** All interactive sections use `"use client"` directive
4. **Tailwind Classes:** Extensive use of utility classes for responsive design
5. **Component Composition:** Sections composed from smaller reusable components

## Reference Implementation
- HeroSection.tsx demonstrates the pattern for new sections
- SocialProofSection.tsx shows grid layouts with stagger animations
