# Hero Section Wispr Flow Clone Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign HeroSection to be a pixel-perfect visual clone of wisprflow.ai with ELITE content

**Architecture:** Single-column centered layout with staggered FadeIn animations, auto-looping before/after comparison using Framer Motion, official platform logo assets

**Tech Stack:** Next.js 15, React 19, Framer Motion 12, Tailwind CSS 4, TypeScript, Lucide React icons

---

## Task 1: Create Platform Logo Assets Directory

**Files:**
- Create: `public/platforms/.gitkeep`

**Step 1: Create platforms directory**

```bash
mkdir -p public/platforms
touch public/platforms/.gitkeep
```

**Step 2: Commit**

```bash
git add public/platforms/.gitkeep
git commit -m "feat: add platforms directory for brand logos"
```

---

## Task 2: Source Platform Logo Assets

**Files:**
- Create: `public/platforms/chrome.svg`
- Create: `public/platforms/firefox.svg`
- Create: `public/platforms/safari.svg`
- Create: `public/platforms/edge.svg`

**Step 1: Source Chrome logo**

Download or create SVG: [Chrome Brand Guidelines](https://www.google.com/chrome/brand/)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
  <!-- Chrome logo SVG -->
</svg>
```

**Step 2: Source Firefox logo**

Download or create SVG: [Firefox Brand Assets](https://mozilla.design/firefox/)

**Step 3: Source Safari logo**

Download or create SVG: [SF Symbols Style]

**Step 4: Source Edge logo**

Download or create SVG: [Microsoft Brand Guidelines](https://www.microsoft.com/en-us/brandcenter)

**Step 5: Commit**

```bash
git add public/platforms/
git commit -m "feat: add platform logo assets (Chrome, Firefox, Safari, Edge)"
```

---

## Task 3: Create BeforeAfterAnimation Component

**Files:**
- Create: `components/animations/BeforeAfterAnimation.tsx`

**Step 1: Write the component skeleton**

```typescript
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface BeforeAfterAnimationProps {
  beforeLabel?: string
  afterLabel?: string
  beforeText?: string
  afterText?: string
  cycleDuration?: number
}

export function BeforeAfterAnimation({
  beforeLabel = 'Resume Claims',
  afterLabel = 'Verified Skills',
  beforeText = 'Java Developer\n5 years experience',
  afterText = 'Java ✓\n47 projects verified',
  cycleDuration = 3000,
}: BeforeAfterAnimationProps) {
  const [phase, setPhase] = useState<'before' | 'after'>('before')

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase(p => p === 'before' ? 'after' : 'before')
    }, cycleDuration)
    return () => clearInterval(interval)
  }, [cycleDuration])

  return (
    <div className="relative max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        {phase === 'before' ? (
          <motion.div
            key="before"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border-2 border-neutral-200 bg-neutral-50 p-8"
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl">❌</div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-700">{beforeLabel}</h3>
                <p className="mt-2 text-neutral-600 whitespace-pre-line">{beforeText}</p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="after"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border-2 border-neutral-900 bg-neutral-900 p-8"
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-white">{afterLabel}</h3>
                <p className="mt-2 text-neutral-300 whitespace-pre-line">{afterText}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
```

**Step 2: Export from animations index**

Modify: `components/animations/index.ts`

```typescript
export { FadeIn } from './FadeIn'
export { SlideIn } from './SlideIn'
export { ScaleIn } from './ScaleIn'
export { StaggerContainer } from './StaggerContainer'
export { CounterAnimation } from './CounterAnimation'
export { ParallaxImage } from './ParallaxImage'
export { BeforeAfterAnimation } from './BeforeAfterAnimation'
```

**Step 3: Commit**

```bash
git add components/animations/BeforeAfterAnimation.tsx components/animations/index.ts
git commit -m "feat: add BeforeAfterAnimation component with auto-loop"
```

---

## Task 4: Create PromoBadge Component

**Files:**
- Modify: `components/sections/HeroSection.tsx`

**Step 1: Extract PromoBadge as internal component**

Add inside HeroSection.tsx:

```typescript
function PromoBadge() {
  return (
    <div className="inline-flex">
      <div className="bg-neutral-900 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
        Free Forever
      </div>
    </div>
  )
}
```

**Step 2: Test locally**

Run: `bun run dev`

Expected: Badge renders with black background and white text

---

## Task 5: Create PlatformIcons Component

**Files:**
- Modify: `components/sections/HeroSection.tsx`

**Step 1: Add PlatformIcons component**

```typescript
import Image from 'next/image'

const platforms = [
  { name: 'Chrome', icon: '/platforms/chrome.svg' },
  { name: 'Firefox', icon: '/platforms/firefox.svg' },
  { name: 'Safari', icon: '/platforms/safari.svg' },
  { name: 'Edge', icon: '/platforms/edge.svg' },
]

function PlatformIcons() {
  return (
    <div className="flex justify-center gap-6">
      {platforms.map((platform) => (
        <div
          key={platform.name}
          className="grayscale hover:grayscale-0 transition-all duration-200"
        >
          <Image
            src={platform.icon}
            alt={platform.name}
            width={24}
            height={24}
          />
        </div>
      ))}
    </div>
  )
}
```

**Step 2: Test locally**

Expected: Four platform icons render in horizontal row with grayscale filter

---

## Task 6: Update HeroSection with Wispr Flow Layout

**Files:**
- Modify: `components/sections/HeroSection.tsx:7-82`

**Step 1: Replace entire HeroSection body**

```typescript
'use client'

import { ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { FadeIn } from '@/components/animations'
import { Button } from '@/components/ui/button'
import { BeforeAfterAnimation } from '@/components/animations'

const platforms = [
  { name: 'Chrome', icon: '/platforms/chrome.svg' },
  { name: 'Firefox', icon: '/platforms/firefox.svg' },
  { name: 'Safari', icon: '/platforms/safari.svg' },
  { name: 'Edge', icon: '/platforms/edge.svg' },
]

function PromoBadge() {
  return (
    <div className="inline-flex">
      <div className="bg-neutral-900 text-white px-4 py-1.5 rounded-full text-sm font-semibold">
        Free Forever
      </div>
    </div>
  )
}

function PlatformIcons() {
  return (
    <div className="flex justify-center gap-6">
      {platforms.map((platform) => (
        <div
          key={platform.name}
          className="grayscale hover:grayscale-0 transition-all duration-200"
        >
          <Image
            src={platform.icon}
            alt={platform.name}
            width={24}
            height={24}
          />
        </div>
      ))}
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 px-4">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          {/* Promo badge */}
          <FadeIn delay={0} direction="up">
            <div className="mb-6">
              <PromoBadge />
            </div>
          </FadeIn>

          {/* Main headline */}
          <FadeIn delay={0.1} direction="up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
              Your Skills Are Real.
              <br />
              Make Them Undeniable.
            </h1>
          </FadeIn>

          {/* Subhead */}
          <FadeIn delay={0.2} direction="up">
            <p className="mt-6 text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              The credential verification platform that turns your real work
              into undeniable proof of expertise.
            </p>
          </FadeIn>

          {/* Platform icons */}
          <FadeIn delay={0.3} direction="up">
            <div className="mt-8">
              <PlatformIcons />
            </div>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.4} direction="up">
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-neutral-900 hover:bg-neutral-800 text-white">
                <Link href="#get-started">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-neutral-300 hover:bg-neutral-100">
                <Link href="#demo">
                  Watch Demo
                  <Play className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>

          {/* Before/After Animation */}
          <FadeIn delay={0.5} direction="up">
            <div className="mt-16">
              <BeforeAfterAnimation
                beforeLabel="Resume Claims"
                afterLabel="Verified Skills"
                beforeText="Java Developer\n5 years experience"
                afterText="Java ✓\n47 projects verified"
                cycleDuration={3000}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Test locally**

Run: `bun run dev`

Expected:
- Badge "Free Forever" at top
- H1 "Your Skills Are Real. Make Them Undeniable."
- Subhead text in gray
- 4 platform icons (Chrome, Firefox, Safari, Edge)
- 2 CTAs (Get Started Free, Watch Demo)
- Before/After animation auto-loops every 3 seconds

**Step 3: Commit**

```bash
git add components/sections/HeroSection.tsx
git commit -m "feat: redesign HeroSection as Wispr Flow clone with auto-loop animation"
```

---

## Task 7: Update Sections Index Export

**Files:**
- Modify: `components/sections/index.ts`

**Step 1: Verify HeroSection export**

Ensure export exists:

```typescript
export { HeroSection } from './HeroSection'
```

**Step 2: Commit**

```bash
git add components/sections/index.ts
git commit -m "chore: ensure HeroSection export in sections index"
```

---

## Task 8: Verify Page Integration

**Files:**
- Modify: `app/page.tsx`

**Step 1: Check HeroSection import and render**

Ensure page.tsx imports and renders HeroSection:

```typescript
import { HeroSection } from '@/components/sections'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      {/* Other sections... */}
    </main>
  )
}
```

**Step 2: Test locally**

Run: `bun run dev`
Navigate to: `http://localhost:3000`

Expected: HeroSection renders at top of page with all elements

**Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "chore: verify HeroSection integration in main page"
```

---

## Task 9: Responsive Testing

**Files:**
- No file changes

**Step 1: Test mobile (375px)**

Run: `bun run dev`
Open DevTools, set viewport to 375x667

Expected:
- H1 scales to 48px
- CTAs stack vertically
- Platform icons maintain spacing
- Before/After animation full width

**Step 2: Test tablet (768px)**

Set viewport to 768x1024

Expected:
- H1 scales to 56px
- CTAs in horizontal row
- Platform icons in row

**Step 3: Test desktop (1280px+)**

Set viewport to 1280x720

Expected:
- H1 at full 64px
- CTAs in horizontal row
- All elements centered

**Step 4: Commit responsive fixes if needed**

```bash
git add components/sections/HeroSection.tsx
git commit -m "fix: adjust responsive breakpoints for mobile/tablet/desktop"
```

---

## Task 10: Animation Performance Verification

**Files:**
- No file changes

**Step 1: Check animation timing**

Open DevTools Performance tab, record 5 seconds

Expected:
- FadeIn animations complete within 0.6s each
- Stagger delays: 0, 0.1, 0.2, 0.3, 0.4, 0.5
- Before/After loop: 3s cycle (1.2s before, 0.3s transition, 1.2s after)

**Step 2: Verify reduced motion support**

Enable OS reduced motion preference

Expected:
- Animations skip to final state
- No jarring movements

**Step 3: Check for layout shifts**

Run Lighthouse Performance audit

Expected:
- CLS < 0.1 (minimal layout shift)
- No visual jumps during animation

**Step 4: Commit performance fixes if needed**

```bash
git add components/animations/BeforeAfterAnimation.tsx components/animations/FadeIn.tsx
git commit -m "perf: optimize animation performance and reduced motion support"
```

---

## Task 11: Visual Polish - Color Matching

**Files:**
- Modify: `components/sections/HeroSection.tsx`
- Modify: `app/globals.css`

**Step 1: Extract exact Wispr Flow colors**

Reference screenshot for exact hex values:

```css
/* Add to globals.css */
:root {
  --wispr-bg: #ffffff;
  --wispr-text-primary: #0a0a0a;
  --wispr-text-muted: #737373;
  --wispr-accent: #ff6b35;
  --wispr-border: #e5e5e5;
  --wispr-badge-bg: #0a0a0a;
  --wispr-badge-text: #ffffff;
}
```

**Step 2: Apply colors to HeroSection**

Update Tailwind classes to use exact colors:

```typescript
// PromoBadge
<div className="bg-[#0a0a0a] text-white px-4 py-1.5 rounded-full text-sm font-semibold">

// Headline
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0a0a0a]">

// Subhead
<p className="mt-6 text-xl text-[#737373]">

// Primary CTA
<Button className="bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white">

// Outline CTA
<Button variant="outline" className="border-[#e5e5e5] hover:bg-[#f4f4f5]">
```

**Step 3: Commit**

```bash
git add components/sections/HeroSection.tsx app/globals.css
git commit -m "style: apply exact Wispr Flow color palette"
```

---

## Task 12: Visual Polish - Spacing & Typography

**Files:**
- Modify: `components/sections/HeroSection.tsx`

**Step 1: Match exact spacing from Wispr Flow**

Update vertical spacing:

```typescript
<section className="relative overflow-hidden pt-32 pb-24 px-4">
  {/* Existing content */}
</section>

// Element spacing
<div className="mb-6">  {/* Badge to H1: 24px */}
<div className="mt-6">  {/* H1 to Subhead: 24px */}
<div className="mt-8">  {/* Subhead to Platforms: 32px */}
<div className="mt-10"> {/* Platforms to CTAs: 40px */}
<div className="mt-16"> {/* CTAs to Visual: 64px */}
```

**Step 2: Match typography scale**

```typescript
// Headline - exact Wispr Flow sizing
<h1 className="
  text-[48px]        /* Mobile: 48px */
  md:text-[56px]     /* Tablet: 56px */
  lg:text-[64px]     /* Desktop: 64px */
  leading-[1.1]      /* Tight line height */
  tracking-tight     /* Letter spacing -0.02em */
">

// Subhead
<p className="
  text-[18px]        /* Mobile: 18px */
  md:text-[20px]     /* Desktop: 20px */
  leading-[1.6]      /* Relaxed line height */
">
```

**Step 3: Commit**

```bash
git add components/sections/HeroSection.tsx
git commit -m "style: match Wispr Flow spacing and typography scale"
```

---

## Task 13: Accessibility Verification

**Files:**
- No file changes

**Step 1: Check semantic HTML**

Run axe DevTools audit

Expected:
- No ARIA issues
- Proper heading hierarchy (h1 → h2)
- Alt text for all images

**Step 2: Verify keyboard navigation**

Tab through all interactive elements

Expected:
- Visible focus indicators
- Logical tab order
- CTAs accessible via Enter/Space

**Step 3: Check color contrast**

Use WCAG contrast checker

Expected:
- All text meets WCAG AA (4.5:1 minimum)
- Badge text on dark background: 14.6:1 ✓
- Body text: 7.5:1 ✓

**Step 4: Commit a11y fixes if needed**

```bash
git add components/sections/HeroSection.tsx
git commit -m "a11y: fix accessibility issues from audit"
```

---

## Task 14: Cross-Browser Testing

**Files:**
- No file changes

**Step 1: Test in Chrome**

Expected: All features work, animations smooth

**Step 2: Test in Firefox**

Expected: Matching Chrome behavior

**Step 3: Test in Safari**

Expected: Matching Chrome behavior

**Step 4: Test in Edge**

Expected: Matching Chrome behavior

**Step 5: Commit browser compatibility fixes**

```bash
git add components/sections/HeroSection.tsx components/animations/BeforeAfterAnimation.tsx
git commit -m "fix: ensure cross-browser compatibility"
```

---

## Task 15: Final Polish & Documentation

**Files:**
- Modify: `docs/Planning/wt-hero-problem/docs/2026-01-05-elite-site-design.md`

**Step 1: Update design documentation**

Add section documenting Wispr Flow clone implementation:

```markdown
## Hero Section - Wispr Flow Clone

**Implementation Date:** 2026-01-05

**Design Reference:** wisprflow.ai

**Key Features:**
- Single-column centered layout (max-w-4xl)
- Staggered FadeIn animations (0-0.5s delays)
- Auto-looping before/after comparison (3s cycle)
- Official platform logo assets (Chrome, Firefox, Safari, Edge)
- Exact color matching (#0a0a0a, #737373, #e5e5e5)

**Components:**
- `PromoBadge` - "Free Forever" pill
- `HeroHeadline` - Main H1
- `HeroSubhead` - Supporting text
- `PlatformIcons` - 4 platform logos
- `CTAButtons` - 2 action buttons
- `BeforeAfterAnimation` - Auto-loop comparison
```

**Step 2: Create component README**

Create: `components/sections/HeroSection.README.md`

```markdown
# HeroSection Component

## Purpose
Top-of-page hero section that introduces ELITE value proposition.

## Design
Pixel-perfect clone of wisprflow.ai hero section.

## Usage
```tsx
import { HeroSection } from '@/components/sections'

<HeroSection />
```

## Props
None - static content component.

## Dependencies
- FadeIn animation
- BeforeAfterAnimation
- Button (shadcn/ui)
- Platform logo assets in `/public/platforms/`

## Animation Sequence
1. Badge (0s delay)
2. H1 (0.1s delay)
3. Subhead (0.2s delay)
4. Platforms (0.3s delay)
5. CTAs (0.4s delay)
6. Before/After (0.5s delay)

## Responsive Behavior
- Mobile (< 768px): Stacked layout, 48px H1
- Tablet (768-1024px): 56px H1, horizontal CTAs
- Desktop (> 1024px): 64px H1, full spacing
```

**Step 3: Final commit**

```bash
git add docs/Planning/wt-hero-problem/docs/2026-01-05-elite-site-design.md
git add components/sections/HeroSection.README.md
git commit -m "docs: add HeroSection implementation documentation"
```

---

## Completion Criteria

✅ HeroSection matches Wispr Flow layout exactly
✅ Before/After animation auto-loops every 3 seconds
✅ All 4 platform logos render correctly
✅ FadeIn animations stagger at 0.1s intervals
✅ Color palette matches Wispr Flow (#0a0a0a, #737373, #e5e5e5)
✅ Responsive on mobile (375px), tablet (768px), desktop (1280px+)
✅ Accessibility audit passes (WCAG AA)
✅ Cross-browser compatible (Chrome, Firefox, Safari, Edge)
✅ Performance: CLS < 0.1, animations < 0.6s

---

## Notes for Next Developer

**Design Decisions:**
- Auto-loop animation chosen for maximum visibility without user interaction
- Official platform logos for authenticity over generic icons
- Single-column layout for focus and readability
- Staggered animations create narrative flow

**Known Limitations:**
- Platform logo assets need to be manually sourced (Task 2)
- Before/After animation uses hardcoded content (could be prop-based for flexibility)

**Future Enhancements:**
- Add analytics tracking for CTA clicks
- A/B test animation timing (3s vs 5s cycles)
- Consider parallax scroll effect on background
- Add micro-interaction on platform icons (hover scale)
