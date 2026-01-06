# Execution Plan: ELITE-site Marketing Website

## Overview
Build an **exact visual clone** of wisprflow.ai with ELITE content. Every design element must match Wispr Flow precisely: colors, typography, spacing, animations, icons, images, layout patterns. **Foundation complete** - Next.js 15, shadcn/ui, Framer Motion, and animation system are ready.

**Estimated Complexity:** High (pixel-perfect replication required)
**Parallelizable:** Highly - 4 independent tracks with minimal dependencies

---

# Wispr Flow Design Specification

## Color Palette (Extracted)
- **Primary/Brand:** #0a0a0a (near-black)
- **Background:** #ffffff (white), #fafafa (light gray)
- **Text:** #0a0a0a (primary), #737373 (muted), #a1a1aa (light-muted)
- **Accent:** #ff6b35 (orange/coral for CTAs)
- **Borders:** #e5e5e5, #f4f4f5

## Typography
- **Headings:** Inter/sans-serif, tracking-tight, font-bold
- **Hero H1:** ~64px (desktop), ~48px (mobile)
- **Section H2:** ~48px (desktop), ~36px (mobile)
- **Body:** 16-18px base, leading-relaxed
- **Muted:** text-muted-foreground (#737373)

## Spacing System
- **Section padding:** py-24 (96px vertical)
- **Container:** max-w-7xl (1280px) for most sections
- **Hero:** Centered, max-w-4xl (896px) for text
- **Grid gaps:** gap-6 (24px), gap-8 (32px), gap-12 (48px)

## Animation Patterns
- **FadeIn:** Up direction, 0-0.5s delay stagger
- **Scroll-triggered:** Intersection Observer at 20% threshold
- **Hover effects:** border-color transition, scale-105
- **Logo carousel:** infinite horizontal scroll (smooth)

## Icon/Asset Requirements
- **App logos:** 30+ app integration logos (SVG preferred)
- **Company logos:** 18 company logos in carousel (SVG)
- **Platform icons:** Apple, Mac, Windows (inline SVG)
- **Feature icons:** Simple line icons or emoji for cards
- **Hero image:** Before/after comparison graphic

---

# Wispr Flow Section Structure (Exact Order)

## Section 1: Hero
**Wispr Flow Reference:** Top of homepage
**Layout:** Centered, single column
**Content Mapping:**

| Wispr Flow | ELITE |
|------------|-------|
| "Don't type, just speak" | "Your Skills Are Real. Make Them Undeniable." |
| "The voice-to-text AI that turns speech into clear, polished writing in every app." | "The credential verification platform that turns your real work into undeniable proof of expertise." |
| Platform: Apple, Mac, Windows | Platform: Browser Extension, VS Code, JetBrains |
| "Download for free" / "Watch Demo" | "Get Started Free" / "Watch Demo" |
| Before/After: Messy → Clean text | Before/After: Resume claims → Verified skills |

**Components to modify:**
- `components/sections/HeroSection.tsx` (exists, complete redesign)

**Visual specs:**
- Promo badge at top (pill with "New" or similar)
- H1: text-4xl md:text-6xl font-bold tracking-tight
- Subhead: text-xl text-muted-foreground
- Platform icons: flex row, gap-4
- CTAs: flex row, gap-4, primary button + outline button
- Before/After graphic: two panels side-by-side

---

## Section 2: App Integrations Grid
**Wispr Flow Reference:** "Write faster in all your apps, on any device"
**Layout:** Grid of app logos
**Content Mapping:**

| Wispr Flow | ELITE |
|------------|-------|
| "Write faster in all your apps, on any device" | "Track skills across all your development tools" |
| "Seamless speech-to-text in every application..." | "Connect your tools and start tracking automatically..." |
| 30+ apps (ChatGPT, WhatsApp, VS Code, etc.) | Dev tools (GitHub, GitLab, VS Code, JetBrains, Linear, Jira, Figma, Notion, Slack, etc.) |

**Components to modify:**
- `components/sections/IntegrationsSection.tsx` (exists, needs updating)

**Visual specs:**
- Grid: grid-cols-4 md:grid-cols-6 lg:grid-cols-10
- Each logo in rounded square with border
- Hover: border-primary/50
- FadeIn animation with stagger (delay = index * 0.03)

**App logos needed (30+):**
GitHub, GitLab, VS Code, JetBrains, IntelliJ, PyCharm, WebStorm, Figma, Linear, Notion, Slack, Discord, Jira, Asana, Trello, Confluence, Google Docs, Office 365, AWS, Azure, GCP, Vercel, Netlify, Heroku, Docker, Kubernetes, Postman, Insomnia, DBeaver, DataGrip

---

## Section 3: Company Logo Carousel
**Wispr Flow Reference:** "Used by professionals everywhere to speed up their thoughts"
**Layout:** Infinite horizontal scroll carousel
**Content Mapping:**

| Wispr Flow | ELITE |
|------------|-------|
| "Used by professionals everywhere to speed up their thoughts" | "Used by professionals everywhere to verify their skills" |
| 18 companies (Lovable, Menlo, Instacart, etc.) | Same companies OR tech companies (Google, Meta, Amazon, Microsoft, etc.) |

**Components to modify:**
- `components/sections/SocialProofSection.tsx` (exists, needs infinite scroll)

**Visual specs:**
- Infinite scroll animation (CSS keyframes or Framer Motion)
- Logos duplicated 2-3x for seamless loop
- Grayscale or muted color with hover to full color
- Smooth, continuous animation (no gaps)

**Company logos needed (18+):**
Google, Meta, Amazon, Microsoft, Netflix, Stripe, Shopify, Spotify, Airbnb, Uber, Coinbase, Vercel, Netlify, Superhuman, Notion, Figma, Linear, Replit

---

## Section 4: Speed Comparison (4x Faster)
**Wispr Flow Reference:** "4x faster than typing"
**Layout:** Two-column comparison (before/after)
**Content Mapping:**

| Wispr Flow | ELITE |
|------------|-------|
| "4x faster than typing" | "10x faster than resumes" |
| Keyboard: 45 wpm (messy text) | Resume: Claims only (no proof) |
| Flow: 220 wpm (polished text) | ELITE: Verified skills (real evidence) |
| After 150 years of keyboard... | After decades of resumes that don't prove anything... |

**Components to create:**
- `components/sections/SpeedComparisonSection.tsx` (new)

**Visual specs:**
- Two columns: left (old way), right (ELITE way)
- Left: muted colors, "45 wpm" or similar stat
- Right: accent color, "220 wpm" or "10x faster" stat
- Text panels showing before/after content
- FadeIn animation for each panel

---

## Section 5: User Types Grid ("Flow is made for you")
**Wispr Flow Reference:** "Flow is made for you" with 9 user type cards
**Layout:** 9 cards in grid (3x3 on desktop)
**Content Mapping:**

| Wispr Flow | ELITE |
|------------|-------|
| "Flow is made for you" | "ELITE is made for you" |
| Teams, Students, Developers, Creators, Sales, Customer Support, Lawyers, Leaders, Accessibility | Software Engineers, Frontend Devs, Backend Devs, Full-Stack Devs, DevOps, ML Engineers, Data Scientists, Students, Career Changers |

**Components to create:**
- `components/sections/UserTypesSection.tsx` (new)

**Visual specs:**
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Each card: image + title + "Learn more" link
- Hover: scale-105, shadow increase
- Each card links to user-specific subpage
- FadeIn stagger animation

**Images needed:** 9 user type photos (similar style to Wispr Flow)

---

## Section 6: AI Auto Edits (Feature Deep-Dive)
**Wispr Flow Reference:** "AI Auto Edits" with subfeatures
**Layout:** Text + feature breakdown with visuals
**Content Mapping:**

| Wispr Flow | ELITE |
|------------|-------|
| "AI Auto Edits" | "AI Skill Verification" |
| Personal dictionary | Skill fingerprinting |
| Snippet library | Project tracking |
| Different tones for each app | Different skills for each tech stack |
| 100+ languages | 50+ programming languages & frameworks |

**Components to modify:**
- `components/sections/SolutionSection.tsx` (exists, complete redesign)

**Visual specs:**
- H2: "AI Skill Verification"
- Hero image showing the feature
- Subfeatures with visuals:
  - Skill fingerprinting (with visual)
  - Project tracking (with visual)
  - Tech stack detection
  - Language/framework support (grid of icons)
- FadeIn animations for each subfeature

---

## Section 7: Multi-Platform Availability
**Wispr Flow Reference:** "On-the-go or at your desk" with Desktop + iPhone mockups
**Layout:** Device mockups side by side
**Content Mapping:**

| Wispr Flow | ELITE |
|------------|-------|
| "On-the-go or at your desk" | "In your browser, where you work" |
| Desktop + iPhone apps | Browser extension (works everywhere) |
| iOS, Mac, Windows icons | Chrome, Firefox, Safari, Edge icons |

**Components to create:**
- `components/sections/PlatformSection.tsx` (new)

**Visual specs:**
- Device mockups or browser mockups
- Platform icons row
- CTA: "Install Extension"

---

## Section 8: Testimonials ("Love letters to Flow")
**Wispr Flow Reference:** Grid of testimonial cards with photos
**Status:** **OMIT per original user request** - can be added in future iteration

---

## Section 9: Final CTA
**Wispr Flow Reference:** "Start flowing"
**Layout:** Centered, single column
**Content Mapping:**

| Wispr Flow | ELITE |
|------------|-------|
| "Start flowing" | "Start Verifying" |
| "Effortless voice dictation in every application..." | "Turn your real work into undeniable proof of expertise..." |
| "Try Flow" / "Download Flow" | "Get Started Free" / "Watch Demo" |
| "Available on Mac, Windows and iPhone" | "Works with VS Code, JetBrains, and more" |

**Components to modify:**
- `components/sections/FinalCTASection.tsx` (exists, needs redesign)

**Visual specs:**
- Centered layout, max-w-4xl
- H2: text-4xl md:text-5xl font-bold
- Subhead: text-xl text-muted-foreground
- CTAs: primary + secondary buttons
- Platform icons at bottom

---

## Section 10: Ask AI
**Wispr Flow Reference:** "Still not sure that Wispr Flow is right for you?"
**Layout:** Three AI assistant buttons
**Content Mapping:**

| Wispr Flow | ELITE |
|------------|-------|
| "Still not sure..." | Same (or "Ask AI if ELITE is right for you") |
| Ask ChatGPT, Ask Claude, Ask Perplexity | Same |

**Components to create:**
- `components/sections/AskAISection.tsx` (new)

**Visual specs:**
- Three buttons: ChatGPT, Claude, Perplexity
- Each button opens pre-filled query
- Graphic illustration (similar to Wispr Flow)

---

# Critical Dependency Graph

```
                    ┌─────────────────┐
                    │  Wave 0: Done   │
                    │  (Foundation)   │
                    └────────┬────────┘
                             │
                ┌────────────┴────────────┐
                │                         │
         ┌──────▼──────┐          ┌──────▼──────┐
         │  Wave 1     │          │  Wave 1     │
         │  (Hero +    │          │  (Assets &  │
         │   Integrat.)│          │   Design)   │
         └─────────────┘          └─────────────┘
                │                         │
                └────────────┬────────────┘
                             │
                ┌────────────▼────────────┐
                │                         │
         ┌──────▼──────┐          ┌──────▼──────┐
         │  Wave 2     │          │  Wave 2     │
         │  (Compare   │          │  (User      │
         │   +         │          │   Types +   │
         │   Features) │          │   Platform) │
         └─────────────┘          └─────────────┘
                             │
                ┌────────────▼────────────┐
                │                         │
         ┌──────▼──────┐          ┌──────▼──────┐
         │  Wave 3     │          │  Wave 3     │
         │  (CTA +     │          │  (Page      │
         │   Ask AI)   │          │   Integrate)│
         └─────────────┘          └─────────────┘
                             │
                    ┌────────▼────────┐
                    │  Wave 4: Final  │
                    │  (Polish, Test) │
                    └─────────────────┘
```

---

# Wave 1: Hero + Integrations

**Goal:** Build the top sections (hero + integrations grid)

## Group A: Hero Section
- **Task 1.A.1:** Redesign HeroSection
  - Implementation: Exact Wispr Flow hero layout with ELITE content
  - Promo badge, H1, subhead, platform icons, CTAs, before/after graphic
  - Use FadeIn animations with stagger
  - Files: `components/sections/HeroSection.tsx`
  - Dependencies: Foundation complete

## Group B: Integrations + Company Carousel (parallel with A)
- **Task 1.B.1:** Update IntegrationsSection
  - Implementation: App integrations grid matching Wispr Flow layout
  - 30+ dev tool logos in grid, hover effects, stagger animations
  - Files: `components/sections/IntegrationsSection.tsx`
  - Dependencies: Foundation complete

- **Task 1.B.2:** Update SocialProofSection
  - Implementation: Infinite scroll company logo carousel
  - 18 company logos, seamless loop animation
  - Files: `components/sections/SocialProofSection.tsx`
  - Dependencies: Foundation complete

**Wave 1 Agent Dispatch:**
- Spawn 2 parallel agents (Group A + Group B)

**Completion Criteria:**
- HeroSection matches Wispr Flow layout exactly
- IntegrationsSection has 30+ app logos in grid
- SocialProofSection has infinite scroll animation

---

# Wave 2: Comparison + User Types + Features

**Goal:** Build the middle narrative sections

## Group A: Comparison + Features
- **Task 2.A.1:** Create SpeedComparisonSection
  - Implementation: Two-column before/after comparison
  - Left: "Resumes are claims", Right: "ELITE proves skills"
  - Files: `components/sections/SpeedComparisonSection.tsx`
  - Dependencies: Wave 1 complete

- **Task 2.A.2:** Redesign SolutionSection
  - Implementation: "AI Skill Verification" feature deep-dive
  - Hero image + subfeatures (skill fingerprinting, project tracking, etc.)
  - Files: `components/sections/SolutionSection.tsx`
  - Dependencies: Wave 1 complete

## Group B: User Types + Platform (parallel with A)
- **Task 2.B.1:** CreateUserTypesSection
  - Implementation: 9 user type cards in grid
  - Each card: image + title + "Learn more" link
  - Files: `components/sections/UserTypesSection.tsx`
  - Dependencies: Wave 1 complete

- **Task 2.B.2:** Create PlatformSection
  - Implementation: Browser extension availability section
  - Browser icons + mockups + CTA
  - Files: `components/sections/PlatformSection.tsx`
  - Dependencies: Wave 1 complete

**Wave 2 Agent Dispatch:**
- Spawn 2 parallel agents (Group A + Group B)

**Completion Criteria:**
- SpeedComparisonSection shows before/after comparison
- SolutionSection has feature deep-dive layout
- UserTypesSection has 9 cards with images
- PlatformSection shows browser availability

---

# Wave 3: Final CTA + Ask AI

**Goal:** Build the bottom conversion sections

## Group A: Final CTA
- **Task 3.A.1:** Redesign FinalCTASection
  - Implementation: Centered CTA matching Wispr Flow
  - H2, subhead, CTAs, platform icons
  - Files: `components/sections/FinalCTASection.tsx`
  - Dependencies: Wave 2 complete

## Group B: Ask AI (parallel with A)
- **Task 3.B.1:** Create AskAISection
  - Implementation: Three AI assistant buttons
  - ChatGPT, Claude, Perplexity with pre-filled queries
  - Files: `components/sections/AskAISection.tsx`
  - Dependencies: Wave 2 complete

**Wave 3 Agent Dispatch:**
- Spawn 2 parallel agents (Group A + Group B)

**Completion Criteria:**
- FinalCTASection matches Wispr Flow layout
- AskAISection has three working AI buttons

---

# Wave 4: Page Integration + Asset Sourcing

**Goal:** Integrate all sections and source/create assets

## Group A: Asset Sourcing
- **Task 4.A.1:** Source app logos
  - Implementation: Download/create SVG logos for 30+ dev tools
  - Files: `public/logos/*.svg`
  - Dependencies: None

- **Task 4.A.2:** Source company logos
  - Implementation: Download/create SVG logos for 18 companies
  - Files: `public/companies/*.svg`
  - Dependencies: None

- **Task 4.A.3:** Create user type images
  - Implementation: Create or source 9 user type photos
  - Files: `public/users/*.avif`
  - Dependencies: None

## Group B: Page Integration (parallel with A)
- **Task 4.B.1:** Update page.tsx
  - Implementation: Import all sections in Wispr Flow order
  - Order: Hero → Integrations → SocialProof → SpeedComparison → UserTypes → Solution → Platform → FinalCTA → AskAI
  - Files: `app/page.tsx`
  - Dependencies: Waves 1-3 complete

- **Task 4.B.2:** Update sections index
  - Implementation: Export all sections from index.ts
  - Files: `components/sections/index.ts`
  - Dependencies: Waves 1-3 complete

**Wave 4 Agent Dispatch:**
- Spawn 2 parallel agents (Group A + Group B)

**Completion Criteria:**
- All asset files sourced/created
- Main page renders all sections in correct order

---

# Wave 5: Polish, Test & Verify

**Goal:** Ensure pixel-perfect match with Wispr Flow

## Group A: Visual Polish
- **Task 5.A.1:** Match spacing and typography
  - Implementation: Compare each section to Wispr Flow screenshots
  - Adjust padding, margins, font sizes, line heights
  - Files: All section components
  - Dependencies: Wave 4 complete

- **Task 5.A.2:** Match colors and borders
  - Implementation: Extract exact colors from Wispr Flow
  - Update all color tokens to match
  - Files: `app/globals.css`, all components
  - Dependencies: Wave 4 complete

## Group B: Animation & Performance (parallel with A)
- **Task 5.B.1:** Match animations
  - Implementation: Recreate Wispr Flow animation timings and easing
  - Test scroll-triggered animations
  - Files: `components/animations/*.tsx`
  - Dependencies: Wave 4 complete

- **Task 5.B.2:** Responsiveness verification
  - Implementation: Test on mobile (375px), tablet (768px), desktop (1024px+)
  - Ensure breakpoints match Wispr Flow
  - Files: All section components
  - Dependencies: Wave 4 complete

**Wave 5 Agent Dispatch:**
- Spawn 2 parallel agents (Group A + Group B)

**Completion Criteria:**
- Pixel-perfect visual match with Wispr Flow
- All animations smooth and matching
- Responsive at all breakpoints

---

# Git Workflow

Use worktrees for parallel development:
- `wt-hero-integrations` - Wave 1 (Hero, Integrations, SocialProof)
- `wt-comparison-features` - Wave 2 (SpeedComparison, Solution, UserTypes, Platform)
- `wt-cta-askai` - Wave 3 (FinalCTA, AskAI)
- `wt-integration` - Wave 4 (Page integration, assets)
- `wt-polish` - Wave 5 (Visual polish, animations)

---

# File Reference

## Components to create (3 new files):
```
components/sections/
├── SpeedComparisonSection.tsx  (Wave 2.A.1 - NEW)
├── UserTypesSection.tsx        (Wave 2.B.1 - NEW)
├── PlatformSection.tsx         (Wave 2.B.2 - NEW)
└── AskAISection.tsx            (Wave 3.B.1 - NEW)
```

## Components to modify (complete redesign):
```
components/sections/
├── HeroSection.tsx         (Wave 1.A.1 - REDESIGN)
├── IntegrationsSection.tsx (Wave 1.B.1 - UPDATE)
├── SocialProofSection.tsx  (Wave 1.B.2 - UPDATE)
├── SolutionSection.tsx     (Wave 2.A.2 - REDESIGN)
└── FinalCTASection.tsx     (Wave 3.A.1 - REDESIGN)
```

## Components to remove (no longer needed):
```
components/sections/
├── ProblemSection.tsx       (DELETE - replaced by SpeedComparison)
├── CredentialGapSection.tsx (DELETE - content moved elsewhere)
├── FlowDiagramSection.tsx   (DELETE - replaced by Solution)
└── PricingSection.tsx       (DELETE - pricing not on Wispr Flow homepage)
```

## Assets needed:
```
public/
├── logos/          (30+ dev tool logos - .svg)
├── companies/      (18 company logos - .svg)
├── users/          (9 user type photos - .avif or .webp)
└── devices/        (browser mockups - .avif or .webp)
```

---

# Estimated Timeline

- **Wave 1:** ~20-25 minutes (2 parallel agents)
- **Wave 2:** ~25-30 minutes (2 parallel agents)
- **Wave 3:** ~15-20 minutes (2 parallel agents)
- **Wave 4:** ~20-25 minutes (2 parallel agents, includes asset sourcing)
- **Wave 5:** ~20-25 minutes (2 parallel agents)

**Total:** ~100-125 minutes with optimal parallelization

---

# Critical Path Analysis

**Must complete sequentially:**
1. Wave 1 (Hero + Integrations) → Wave 2 (Comparison + Features) → Wave 3 (CTA + AskAI) → Wave 4 (Integration) → Wave 5 (Polish)
   Each wave builds sections in Wispr Flow order

**Can run in parallel:**
- **Within each wave:** Task Groups A and B are fully independent
- **Across tracks:** After Wave 1, subsequent waves can start with partial dependencies

---

# Success Criteria

1. **Visual Match:** Pixel-perfect match with Wispr Flow design
2. **Content:** ELITE content properly mapped to Wispr Flow structure
3. **Animations:** Smooth, matching Wispr Flow timing and easing
4. **Responsive:** Works on mobile, tablet, desktop
5. **Performance:** < 2s first contentful paint
