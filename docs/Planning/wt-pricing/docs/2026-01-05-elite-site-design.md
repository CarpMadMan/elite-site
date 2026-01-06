# ELITE Site Design Plan

**Date:** 2026-01-05
**Status:** Approved
**Framework:** Next.js 15 (App Router) + shadcn/ui + Framer Motion

---

## Overview

Build an exact structural replica of Wispr Flow's marketing site, adapted with ELITE's content. ELITE is a platform that tracks real work and provides verified credentials to connect users with better opportunities.

**Source Site:** https://whisprflow.com
**Content Source:** https://elite.community

---

## Architecture

### Project Structure

```
elite-site/
├── app/
│   ├── layout.tsx          # Root layout with fonts, theme providers
│   ├── page.tsx            # Main landing page (composite of sections)
│   └── globals.css         # Global styles + Tailwind directives
├── components/
│   ├── sections/           # Page sections (hero, features, pricing, etc.)
│   ├── ui/                 # shadcn/ui components
│   ├── animations/         # Framer Motion/GSAP wrappers
│   └── layout/             # Navigation, footer, etc.
├── lib/
│   ├── utils.ts            # Utilities (cn function, etc.)
│   └── content/            # Content data files
├── public/
│   └── assets/             # Images, icons, fonts
└── components.json         # shadcn/ui config
```

### Tech Stack

- **Next.js 15** with App Router
- **shadcn/ui** for pre-built components
- **Framer Motion** for animations
- **Lucide React** for icons
- **Tailwind CSS** for styling
- **Inter** font family

---

## Component Structure

### Page Sections (in order)

1. **HeroSection** - Headline, subhead, CTAs, hero graphic
2. **ProblemSection** - Stats grid (73%, 6 months, 0%)
3. **CredentialGapSection** - "What's broken" cards with icons
4. **ResultSection** - "The result" narrative section
5. **SolutionSection** - "How ELITE works" - tool tracking flow
6. **FlowDiagramSection** - Install → Track → Unlock visual
7. **PricingSection** - Three pricing cards (Free, Pro, Enterprise)
8. **GroupsSection** - Subscription groups feature + earning potential
9. **FinalCTASection** - "Start free" closing CTA
10. **TestimonialsSection** - (optional) Social proof carousel

### Layout Components

- **Navbar** - Logo, nav links, "Get Started" button
  - MobileMenu - Animated mobile drawer
  - NavDropdown - Animated dropdown menus
- **Footer** - Three-column footer with links

### Animation Components

- **FadeIn** - Fade up on scroll
- **SlideIn** - Slide from left/right on scroll
- **ScaleIn** - Scale up on scroll
- **StaggerContainer** - Stagger children animations
- **ParallaxImage** - Parallax scrolling effect
- **CounterAnimation** - Animated number counters

### Content Data Files

- `hero.ts` - Hero section content
- `problem.ts` - Problem stats and descriptions
- `pricing.ts` - Pricing tiers data
- `features.ts` - Feature cards and icons
- `navigation.ts` - Nav menu structure

---

## Animations & Interactions

### Scroll Animations

**Hero Section:**
- Headline fades in + slides up (staggered words)
- Subhead fades in after headline
- CTA buttons scale in with bounce effect
- Hero graphic parallax on scroll

**Problem Stats:**
- CounterAnimation for numbers (73%, 6 months, 0%)
- Cards fade in + slide up (staggered by 150ms each)
- Hover: scale 1.05 + subtle glow

**"What's Broken" Cards:**
- Cards alternate slide-in (left → right)
- Hover: icon rotates, card lifts
- StaggerContainer for sequential reveal

**Pricing Cards:**
- Fade in + scale up
- "Most Popular" badge pulse animation
- Hover: shadow expand + slight lift
- Mobile: horizontal scroll snap

**Flow Diagram (Install → Track → Unlock):**
- Each step fades in sequentially
- Connecting line draws itself (SVG path animation)
- Icons scale in with spring physics

### Micro-interactions

- **Buttons:** Hover scale 1.05, active press 0.95, ripple effect
- **Nav Links:** Hover underline animates from center
- **Dropdowns:** Height transition 300ms, opacity fade
- **Mobile Menu:** Slide in from right, backdrop blur

### Performance Optimizations

- Lazy load sections below fold using `IntersectionObserver`
- Use `useReducedMotion` for accessibility
- `will-change` hints for animated properties
- GPU-accelerated transforms (translate, scale, opacity)

---

## Content Mapping

### Hero Section

**Headline:** "Your Skills Are Real. Make Them Undeniable."

**Subhead:** "Track real work. Earn verified credentials. Unlock the opportunities you deserve."

**CTAs:** "Get Started Free", "Watch Demo"

### Problem Section

**Stats:**
- 73% of hiring managers don't trust resumes
- 6 months average time to build trust with new clients
- 0% of your real work is captured or verified

### Solution Flow

**Install & Connect** → Download browser extension, connect tools

**Track & Verify** → Automatic work capture, AI analysis, skill points

**Unlock & Grow** → Verified profile opens doors to opportunities

### Pricing Tiers

**Free:** Track work across 3 tools

**Pro:** Career & skills mapping powered by ENGINE

**Enterprise:** Unlimited team seats, centralized management, API access

---

## Implementation Plan

### Phase 1: Foundation Setup

1. Initialize Next.js project with App Router
2. Install and configure shadcn/ui
3. Install Framer Motion, Lucide icons
4. Set up folder structure and base files

### Phase 2: Parallel Development Tracks

**Track 1: Layout & Navigation**
- Navbar with responsive mobile menu
- Footer component
- Layout wrapper with theme providers

**Track 2: Hero & Problem Sections**
- HeroSection with animated headline
- ProblemSection with counter animations
- CredentialGapSection with card grid

**Track 3: Solution & Features**
- SolutionSection (how ELITE works)
- FlowDiagramSection (Install → Track → Unlock)
- Feature cards with icons

**Track 4: Pricing & CTAs**
- PricingSection with three tiers
- GroupsSection (subscription groups)
- FinalCTASection

**Track 5: Animation System**
- Base animation components (FadeIn, SlideIn, ScaleIn, etc.)
- CounterAnimation component
- ParallaxImage wrapper
- StaggerContainer

**Track 6: Content & Assets**
- Content files with all copy (hero.ts, problem.ts, etc.)
- Image asset organization
- Icon mapping and configuration

### Phase 3: Integration & Polish

1. Compose main page from sections
2. Connect navigation scroll behavior
3. Responsive testing across breakpoints
4. Performance optimization (lazy loading, image optimization)
5. Accessibility audit (keyboard nav, ARIA labels, reduced motion)

---

## Agent Allocation

```
Agent 1 (Foundation) → Setup + Layout Track
Agent 2 (Content) → Hero/Problem Track + Content Track
Agent 3 (Features) → Solution/Features Track
Agent 4 (Pricing) → Pricing/CTA Track
Agent 5 (Motion) → Animation System Track
```

Each agent gets isolated work with clear boundaries. They'll produce PR-ready code that integrates cleanly.

---

## Git Workflow

### Repository Structure

- **Main Branch:** `main` (production-ready code only)
- **Worktrees:**
  - `wt-foundation` - Foundation setup
  - `wt-layout` - Layout & Navigation
  - `wt-hero-problem` - Hero & Problem sections
  - `wt-solution` - Solution & Features
  - `wt-pricing` - Pricing & CTAs
  - `wt-animations` - Animation system
  - `wt-content` - Content & Assets

### Pull Request Process

1. Create worktree for track
2. Complete work in worktree
3. Create PR from worktree branch
4. Code review and merge
5. Clean up worktree after merge

---

## Success Criteria

- [ ] All sections implemented with ELITE content
- [ ] Smooth scroll animations throughout
- [ ] Mobile-responsive across all breakpoints
- [ ] Accessibility compliant (WCAG AA)
- [ ] Lighthouse score 90+ on all metrics
- [ ] Fast page load (< 2s first contentful paint)

---

## Notes

- Prioritize performance over excessive animations
- Use semantic HTML throughout
- All copy should be easily editable via content files
- Component reusability is key for maintainability
