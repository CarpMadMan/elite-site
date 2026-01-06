# Hero Section Wispr Flow Exact Clone - Fix Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix HeroSection to be a pixel-perfect visual clone of wisprflow.ai - completely replacing the current purple gradient theme with Wispr Flow's minimalist black/white/teal aesthetic

**Architecture:** Complete color system overhaul + component restructure to match Wispr Flow's exact visual patterns (solid colors, no gradients, high contrast)

**Tech Stack:** Next.js 15, React 19, Tailwind CSS 4, TypeScript, Framer Motion 12

---

## Critical Issues Identified

**Current State vs Wispr Flow:**

| Element | Current (WRONG) | Wispr Flow (CORRECT) |
|---------|----------------|---------------------|
| Color Theme | Purple/pink gradients, dark mode | White background, black text, teal accents |
| Badge | "The future of verified credentials" with purple border | "New" or "Free Forever" solid black pill |
| H1 Text | Gradient purple→pink on second line | Solid black text, no gradient |
| Subhead | Purple/dark theme | Gray text on white bg |
| Platform Icons | Text "Available on Mac, Windows..." | 4 actual browser logo icons (Chrome, Firefox, Safari, Edge) |
| CTAs | Purple glow effects, gradient buttons | Solid black buttons, white text |
| Hero Visual | Generic dashboard mockup | Before/After comparison panel (Resume → Verified) |

**Root Cause:** The current HeroSection uses a completely different design system (purple gradients, dark theme, glowing effects) that must be entirely replaced.

---

## Task 1: Overhaul Global Color System

**Files:**
- Modify: `app/globals.css`

**Step 1: Replace color variables with Wispr Flow palette**

```css
:root {
  --radius: 0.5rem;

  /* Wispr Flow Color Palette - Light Theme */
  --background: 255 255 255;           /* #ffffff - pure white */
  --foreground: 10 10 10;               /* #0a0a0a - near black */
  --card: 250 250 250;                  /* #fafafa - light gray */
  --card-foreground: 10 10 10;          /* #0a0a0a */
  --popover: 255 255 255;
  --popover-foreground: 10 10 10;

  /* Wispr Flow Teal Accent */
  --primary: 0 128 128;                 /* #008080 - teal */
  --primary-foreground: 255 255 255;    /* #ffffff */

  /* Neutral Grays */
  --secondary: 245 245 245;             /* #f5f5f5 */
  --secondary-foreground: 10 10 10;
  --muted: 250 250 250;                 /* #fafafa */
  --muted-foreground: 115 115 115;      /* #737373 */
  --accent: 0 128 128;                  /* #008080 - teal */
  --accent-foreground: 255 255 255;

  /* Borders */
  --border: 229 229 229;                /* #e5e5e5 */
  --input: 229 229 229;
  --ring: 0 128 128;                    /* #008080 - teal */

  /* Destructive (keep red) */
  --destructive: 220 38 38;
}
```

**Step 2: Remove dark theme override**

Delete the entire `.dark` section (lines 86-105)

**Step 3: Remove gradient utilities**

Delete from `.text-gradient` through `.glow` (lines 121-126)

**Step 4: Commit**

```bash
git add app/globals.css
git commit -m "fix(color): replace purple gradient theme with Wispr Flow black/white/teal palette"
```

---

## Task 2: Rewrite HeroSection - Wispr Flow Exact Clone

**Files:**
- Modify: `components/sections/HeroSection.tsx`

**Step 1: Replace entire file content**

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
      <div className="bg-[#0a0a0a] text-white px-4 py-1.5 rounded-full text-sm font-semibold">
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
    <section className="relative bg-white pt-32 pb-24 px-4">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          {/* Promo badge */}
          <FadeIn delay={0} direction="up">
            <div className="mb-6">
              <PromoBadge />
            </div>
          </FadeIn>

          {/* Main headline - SOLID BLACK, NO GRADIENT */}
          <FadeIn delay={0.1} direction="up">
            <h1 className="text-[48px] md:text-[56px] lg:text-[64px] font-bold tracking-tight text-[#0a0a0a] leading-[1.1]">
              Your Skills Are Real.
              <br />
              Make Them Undeniable.
            </h1>
          </FadeIn>

          {/* Subhead - GRAY TEXT */}
          <FadeIn delay={0.2} direction="up">
            <p className="mt-6 text-[18px] md:text-[20px] text-[#737373] max-w-2xl mx-auto leading-[1.6]">
              The credential verification platform that turns your real work
              into undeniable proof of expertise.
            </p>
          </FadeIn>

          {/* Platform icons - BROWSER LOGOS */}
          <FadeIn delay={0.3} direction="up">
            <div className="mt-8">
              <PlatformIcons />
            </div>
          </FadeIn>

          {/* CTAs - SOLID BLACK BUTTONS, NO GLOW */}
          <FadeIn delay={0.4} direction="up">
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-[#0a0a0a] hover:bg-[#1a1a1a] text-white rounded-lg"
              >
                <Link href="#get-started" className="flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#e5e5e5] hover:bg-[#f4f4f5] text-[#0a0a0a] rounded-lg"
              >
                <Link href="#demo" className="flex items-center">
                  Watch Demo
                  <Play className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>

          {/* Before/After Animation - COMPARISON PANEL */}
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

**Step 2: Commit**

```bash
git add components/sections/HeroSection.tsx
git commit -m "fix(hero): complete rewrite to match Wispr Flow - solid colors, platform icons, before/after animation"
```

---

## Task 3: Update Button Component Styles

**Files:**
- Modify: `components/ui/button.tsx`

**Step 1: Remove glow and shadow effects**

Find and remove `shadow-xl`, `shadow-primary/25`, `glow` class references

**Step 2: Ensure solid border radius**

Update all button variants to use `rounded-lg` instead of dynamic radius

**Step 3: Commit**

```bash
git add components/ui/button.tsx
git commit -m "fix(buttons): remove glow effects, use solid rounded-lg for Wispr Flow style"
```

---

## Task 4: Verify BeforeAfterAnimation Component Exists

**Files:**
- Check: `components/animations/BeforeAfterAnimation.tsx`

**Step 1: Verify component exists**

Run: `ls -la components/animations/BeforeAfterAnimation.tsx`

Expected: File exists

**Step 2: If missing, create it**

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
            className="rounded-xl border-2 border-[#e5e5e5] bg-[#fafafa] p-8"
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl">❌</div>
              <div>
                <h3 className="text-lg font-semibold text-[#737373]">{beforeLabel}</h3>
                <p className="mt-2 text-[#0a0a0a] whitespace-pre-line">{beforeText}</p>
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
            className="rounded-xl border-2 border-[#008080] bg-[#008080] p-8"
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl text-white">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-white">{afterLabel}</h3>
                <p className="mt-2 text-white whitespace-pre-line">{afterText}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
```

**Step 3: Commit if created**

```bash
git add components/animations/BeforeAfterAnimation.tsx
git commit -m "fix(animation): create BeforeAfterAnimation with Wispr Flow colors (teal bg, white text)"
```

---

## Task 5: Verify Platform Logo Assets

**Files:**
- Check: `public/platforms/*.svg`

**Step 1: Verify all platform logos exist**

Run: `ls -la public/platforms/`

Expected:
```
chrome.svg
firefox.svg
safari.svg
edge.svg
```

**Step 2: If missing, create placeholder SVGs**

See previous plan for SVG content

**Step 3: Commit if created**

```bash
git add public/platforms/
git commit -m "fix(assets): add platform logo SVGs for Chrome, Firefox, Safari, Edge"
```

---

## Task 6: Update RootLayout Background

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Ensure body has white background**

```typescript
<body className={`${inter.variable} font-sans antialiased bg-white`}>
```

**Step 2: Commit**

```bash
git add app/layout.tsx
git commit -m "fix(layout): set white background for Wispr Flow light theme"
```

---

## Task 7: Visual Verification Against Screenshot

**Files:**
- No file changes

**Step 1: Start dev server**

Run: `bun run dev`

**Step 2: Open browser and compare**

Navigate to: `http://localhost:3000`

Open screenshot: `docs/Planning/screencapture-wisprflow-ai-2026-01-05-11_55_30.png`

**Verification Checklist:**

- [ ] Badge: Black background, white text, says "Free Forever"
- [ ] H1: Solid black text (#0a0a0a), NO gradient
- [ ] H1 Size: 48px mobile, 56px tablet, 64px desktop
- [ ] Subhead: Gray text (#737373) on white background
- [ ] Platform icons: 4 browser logos in horizontal row
- [ ] Platform icons: Grayscale, color on hover
- [ ] CTA buttons: Solid black background, white text
- [ ] CTA buttons: NO glow, NO shadow effects
- [ ] Before/After: Light gray "before" panel, teal "after" panel
- [ ] Before/After: Auto-loops every 3 seconds
- [ ] Overall: White background, high contrast, minimalist

**Step 3: Document any remaining discrepancies**

Create: `docs/plans/2026-01-05-hero-remaining-fixes.md`

List any elements that don't match Wispr Flow

---

## Task 8: Cross-Browser Testing

**Files:**
- No file changes

**Step 1: Test in Chrome**

Open: `http://localhost:3000` in Chrome

Expected: All elements render correctly

**Step 2: Test in Firefox**

Expected: Matching Chrome behavior

**Step 3: Test in Safari**

Expected: Matching Chrome behavior

**Step 4: Test in Edge**

Expected: Matching Chrome behavior

**Step 5: Commit browser-specific fixes if needed**

```bash
git add components/
git commit -m "fix(browser): ensure cross-browser compatibility for HeroSection"
```

---

## Task 9: Accessibility Audit

**Files:**
- No file changes

**Step 1: Run axe DevTools audit**

Open DevTools → axe DevTools

Run audit

Expected:
- No critical issues
- Color contrast: WCAG AA (4.5:1 minimum)
- Badge text: 14.6:1 ✓
- H1 text: 21:1 ✓
- Body text: 7.5:1 ✓

**Step 2: Test keyboard navigation**

Tab through all interactive elements

Expected:
- Visible focus indicators
- Logical tab order
- Enter/Space activates buttons

**Step 3: Commit a11y fixes**

```bash
git add components/
git commit -m "fix(a11y): address accessibility issues from audit"
```

---

## Task 10: Performance Verification

**Files:**
- No file changes

**Step 1: Run Lighthouse audit**

Open DevTools → Lighthouse

Run "Desktop" audit

Expected:
- Performance: >90
- Accessibility: 100
- CLS: <0.1
- No layout shifts during animations

**Step 2: Verify animation timing**

Open DevTools → Performance

Record 5 seconds

Expected:
- FadeIn animations: 0.6s each
- Stagger delays: 0, 0.1, 0.2, 0.3, 0.4, 0.5
- Before/After loop: 3s cycle

**Step 3: Commit performance fixes**

```bash
git add components/
git commit -m "perf: optimize HeroSection animation performance"
```

---

## Completion Criteria

✅ Color system: White background, black text, teal accents (NO purple/pink)
✅ Badge: Solid black "Free Forever" pill
✅ H1: Solid black text, NO gradient effects
✅ Subhead: Gray text (#737373)
✅ Platform icons: 4 browser logos (Chrome, Firefox, Safari, Edge)
✅ CTAs: Solid black buttons, NO glow/shadow
✅ Before/After: Light gray → teal panels, auto-looping
✅ Typography: 48px → 56px → 64px scaling
✅ Spacing: Matches Wispr Flow vertical rhythm
✅ Cross-browser: Works in Chrome, Firefox, Safari, Edge
✅ Accessibility: WCAG AA compliant
✅ Performance: CLS < 0.1, animations smooth

---

## Notes for Implementation

**Critical Difference from Previous Attempt:**

The previous implementation kept the purple gradient theme. This plan:

1. **Completely replaces the color system** in globals.css
2. **Removes all gradient utilities** (.text-gradient, .glow)
3. **Uses solid hex colors** (#0a0a0a, #737373, #008080) instead of theme variables
4. **Explicit bg-white** on section (not relying on theme)
5. **Rounded-lg** buttons (not dynamic radius)

**Why This Will Work:**

By replacing the root color variables and removing gradient utilities, we ensure the ENTIRE site uses Wispr Flow's palette. The HeroSection uses explicit hex colors for critical elements (badge, H1, CTAs) to guarantee exact matching.

**Testing Strategy:**

After each task, refresh the browser and compare against the screenshot. The visual changes should be dramatic - from purple gradients to clean black/white/teal.
