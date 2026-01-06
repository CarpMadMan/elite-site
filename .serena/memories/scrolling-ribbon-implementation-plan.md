# Scrolling Ribbon Implementation Plan

## Overview
Build Wispr Flow-style scrolling ribbon animations for ELITE hero section with people emoji transformation effect, logo carousels, and dynamic text overlays.

## Implementation Tasks

### Phase 1: Core Scrolling Ribbon Component (Tasks 1-4)

#### Task 1: Create Base ScrollingRibbon Component
**File**: `components/animations/ScrollingRibbon.tsx`

**Requirements**:
- Accept children array (emojis or logos)
- Configure scroll direction (left-to-right or right-to-left)
- Set scroll speed (px per second)
- Implement seamless infinite loop using CSS animation
- Glass verification zone (optional overlay)
- Responsive sizing (mobile/tablet/desktop)

**Technical Approach**:
```typescript
interface ScrollingRibbonProps {
  items: string[]           // Emoji array or logo URLs
  speed?: number            // Default: 30 (px per second)
  direction?: 'ltr' | 'rtl' // Left-to-right or right-to-left
  glassZone?: boolean       // Show verification glass
  gap?: string              // Default: '60px'
  className?: string
}

// CSS animation for infinite scroll
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

**Props**:
- `items`: Array of 30 people emojis
- `speed`: 30 (desktop), 25 (tablet), 20 (mobile)
- `direction`: 'ltr' for hero, 'rtl' for logo carousels
- `glassZone`: true for hero ribbon
- `gap`: '60px' between emojis

#### Task 2: Implement Position Tracking System
**File**: `components/animations/useEmojiPositionTracker.ts`

**Purpose**: Track which emojis are in the glass verification zone

**Technical Approach**:
```typescript
interface EmojiPosition {
  id: string
  emoji: string
  x: number
  inGlass: boolean
  verified: boolean
}

function useEmojiPositionTracker(
  emojiCount: number,
  containerRef: RefObject<HTMLDivElement>,
  glassZoneRef: RefObject<HTMLDivElement>
) {
  const [positions, setPositions] = useState<EmojiPosition[]>([])
  
  useEffect(() => {
    // Track scroll position
    // Determine which emojis are in glass zone
    // Update verification state
    const rafId = requestAnimationFrame(updatePositions)
    return () => cancelAnimationFrame(rafId)
  }, [])
  
  return positions
}
```

**Logic**:
1. Get glass zone bounds (center X, width)
2. Track each emoji's current X position
3. Determine emoji state:
   - `x < glassZone.start`: Pre-verification (gray)
   - `glassZone.start <= x <= glassZone.end`: Verifying (blue)
   - `x > glassZone.end`: Verified (gold)

#### Task 3: Build Transformation Effect System
**File**: `components/animations/EmojiWithBadge.tsx`

**Requirements**:
- Render emoji with appropriate styling based on state
- Show sparkle effect during verification
- Display gold badge with checkmark when verified
- Smooth transitions between states

**Component Structure**:
```typescript
interface EmojiWithBadgeProps {
  emoji: string
  state: 'pre-verify' | 'verifying' | 'verified'
  showBadge: boolean
}

export function EmojiWithBadge({ emoji, state, showBadge }: EmojiWithBadgeProps) {
  return (
    <div className="relative flex items-center justify-center w-12 h-12">
      {/* Badge (appears when verified) */}
      {showBadge && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute -top-6 bg-gradient-to-br from-yellow-400 to-yellow-600 
                     rounded-full px-2 py-0.5 text-white text-xs font-bold"
        >
          🏅✓
        </motion.div>
      )}
      
      {/* Emoji with state-based styling */}
      <motion.div
        className={cn(
          "text-3xl transition-all duration-300",
          state === 'pre-verify' && "grayscale opacity-70",
          state === 'verifying' && "scale-110",
          state === 'verified' && "drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]"
        )}
      >
        {emoji}
      </motion.div>
      
      {/* Sparkles during verification */}
      {state === 'verifying' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="text-sm"
          >
            ✨
          </motion.div>
        </div>
      )}
    </div>
  )
}
```

#### Task 4: Add Transcribing Effect Overlay
**File**: `components/animations/TranscribingEffect.tsx`

**Requirements**:
- Three dots pulsing above glass zone
- Transform to checkmark when emoji centers
- "Verified!" text appears
- Fade out after emoji exits

**Animation Timeline**:
```
Emoji enters glass → "•••" appears
Emoji at center → "✓" replaces dots
Emoji exits glass → "Verified!" + fade out
```

**Component**:
```typescript
export function TranscribingEffect({ 
  isVerifying,
  emojiCentered 
}: { 
  isVerifying: boolean
  emojiCentered: boolean
}) {
  return (
    <AnimatePresence>
      {isVerifying && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute -top-12 left-1/2 -translate-x-1/2"
        >
          {emojiCentered ? (
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl text-[#2A9D8F]">✓</span>
              <span className="text-sm text-[#2A9D8F] font-semibold">
                Verified!
              </span>
            </div>
          ) : (
            <div className="flex gap-1">
              {[0, 1, 2].map(i => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ 
                    duration: 0.8, 
                    repeat: Infinity, 
                    delay: i * 0.15 
                  }}
                  className="w-2 h-2 bg-[#2A9D8F] rounded-full"
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```

### Phase 2: Dynamic Text Overlay (Task 5)

#### Task 5: Build Rotating Text Banner
**File**: `components/animations/RotatingTextBanner.tsx`

**Requirements**:
- Cycle through 5 messages every 2.5 seconds
- Smooth fade-out/slide-up → swap → fade-in/slide-down
- Centered below scrolling ribbon
- White text with slight shadow

**Messages**:
1. "Turn Your Real Work Into Proof"
2. "Get Verified. Get Hired."
3. "Skills That Speak For Themselves"
4. "Your Expertise, Undeniable"
5. "Join 10,000+ Verified Professionals"

**Implementation**:
```typescript
const messages = [
  "Turn Your Real Work Into Proof",
  "Get Verified. Get Hired.",
  "Skills That Speak For Themselves",
  "Your Expertise, Undeniable",
  "Join 10,000+ Verified Professionals"
]

export function RotatingTextBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % messages.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <div className="h-16 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="text-xl md:text-2xl text-white font-medium 
                     text-center drop-shadow-lg"
        >
          {messages[currentIndex]}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
```

### Phase 3: Logo Carousel Components (Tasks 6-7)

#### Task 6: Create Reusable LogoCarousel Component
**File**: `components/animations/LogoCarousel.tsx`

**Requirements**:
- Accept array of logo URLs
- Configurable direction (ltr or rtl)
- Grayscale to color on hover
- Seamless infinite loop
- Responsive sizing

**Implementation**:
```typescript
interface LogoCarouselProps {
  logos: string[]
  speed?: number        // Default: 25
  direction?: 'ltr' | 'rtl'
  grayscale?: boolean   // Default: true
  className?: string
}

export function LogoCarousel({
  logos,
  speed = 25,
  direction = 'ltr',
  grayscale = true,
  className
}: LogoCarouselProps) {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos]
  
  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        animate={{
          x: direction === 'ltr' ? [0, -1000] : [-1000, 0]
        }}
        transition={{
          duration: 1000 / speed,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex gap-12"
      >
        {duplicatedLogos.map((logo, i) => (
          <div
            key={i}
            className={cn(
              "flex-shrink-0 transition-all duration-300",
              grayscale && "grayscale hover:grayscale-0"
            )}
          >
            <Image
              src={logo}
              alt={`Logo ${i}`}
              width={120}
              height={40}
              className="h-10 w-auto opacity-70 hover:opacity-100"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
```

#### Task 7: Build TrustedBySection (Rounded Card)
**File**: `components/sections/TrustedBySection.tsx`

**Requirements**:
- White background card with rounded-3xl corners
- Shadow and border
- "Trusted by" heading
- Logo carousel scrolling left-to-right
- GitHub, GitLab, Bitbucket, VS Code, JetBrains, Figma, Notion, Slack

**Company Logos** (to be scraped from Wispr Flow):
- GitHub: `/companies/github.svg`
- GitLab: `/companies/gitlab.svg`
- Bitbucket: `/companies/bitbucket.svg`
- VS Code: `/companies/vscode.svg`
- JetBrains: `/companies/jetbrains.svg`
- Figma: `/companies/figma.svg`
- Notion: `/companies/notion.svg`
- Slack: `/companies/slack.svg`

**Implementation**:
```typescript
const companyLogos = [
  '/companies/github.svg',
  '/companies/gitlab.svg',
  '/companies/bitbucket.svg',
  '/companies/vscode.svg',
  '/companies/jetbrains.svg',
  '/companies/figma.svg',
  '/companies/notion.svg',
  '/companies/slack.svg'
]

export function TrustedBySection() {
  return (
    <section className="relative -mt-8 z-10 px-4">
      <div className="container">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-center text-gray-600 font-medium mb-8">
            Trusted by forward-thinking companies worldwide
          </h2>
          <LogoCarousel
            logos={companyLogos}
            speed={25}
            direction="ltr"
            grayscale={true}
          />
        </div>
      </div>
    </section>
  )
}
```

### Phase 4: Green Partner Section (Task 8)

#### Task 8: Build PartnerSection with Green Background
**File**: `components/sections/PartnerSection.tsx`

**Requirements**:
- Wispr Flow green background (#2A9D8F)
- Rounded top corners (rounded-t-3xl)
- "Integrated with the tools you use every day" heading
- Logo carousel scrolling right-to-left (reverse of TrustedBy)
- White logos (inverted for visibility)
- AWS, Google Cloud, Azure, DigitalOcean, Vercel, Netlify, Cloudflare

**Partner Logos** (to be scraped):
- AWS: `/partners/aws.svg`
- Google Cloud: `/partners/google-cloud.svg`
- Azure: `/partners/azure.svg`
- DigitalOcean: `/partners/digitalocean.svg`
- Vercel: `/partners/vercel.svg`
- Netlify: `/partners/netlify.svg`
- Cloudflare: `/partners/cloudflare.svg`

**Implementation**:
```typescript
const partnerLogos = [
  '/partners/aws.svg',
  '/partners/google-cloud.svg',
  '/partners/azure.svg',
  '/partners/digitalocean.svg',
  '/partners/vercel.svg',
  '/partners/netlify.svg',
  '/partners/cloudflare.svg'
]

export function PartnerSection() {
  return (
    <section className="bg-[#2A9D8F] rounded-t-3xl py-16 px-4">
      <div className="container">
        <h2 className="text-center text-white font-medium mb-8">
          Integrated with the tools you use every day
        </h2>
        <LogoCarousel
          logos={partnerLogos}
          speed={20}
          direction="rtl"
          grayscale={false}
        />
      </div>
    </section>
  )
}
```

### Phase 5: Hero Section Integration (Task 9)

#### Task 9: Update HeroSection with Ribbon Animation
**File**: `components/sections/HeroSection.tsx`

**Changes**:
1. Add ScrollingRibbon with people emojis below subhead
2. Add RotatingTextBanner below ribbon
3. Keep existing BeforeAfterAnimation below text banner
4. Adjust spacing and layout
5. Add responsive breakpoints

**New Layout**:
```
HeroSection
├── Promo Badge (Free Forever)
├── Headline (Your Skills Are Real...)
├── Subhead (The credential verification platform...)
├── Platform Icons (Chrome, Firefox, Safari, Edge)
├── CTAs (Get Started Free, Watch Demo)
├── ScrollingRibbon (people emojis with glass zone) ← NEW
├── RotatingTextBanner (dynamic messages) ← NEW
└── BeforeAfterAnimation (comparison panel)
```

**Implementation**:
```typescript
export function HeroSection() {
  const peopleEmojis = [
    '👨‍💼','👩‍💻','👨‍🎨','👩‍🔬','👨‍🚀','👩‍⚖️','👨‍🏫','👩‍🌾','👨‍💼','👩‍🎤',
    '👨‍🔧','👩‍⚕️','👨‍🎓','👩‍💼','👨‍🍳','👩‍🎨','👨‍🔬','👩‍🚀','👨‍⚖️','👩‍🏫',
    '👨‍🌾','👩‍💻','👨‍🎤','👩‍🔧','👨‍⚕️','👩‍🎓','👨‍💼','👩‍🍳','👨‍🎨','👩‍🔬'
  ]

  return (
    <section className="relative bg-[#0a0a0a] pt-32 pb-24 px-4">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          {/* Existing elements... */}
          
          {/* NEW: Scrolling Ribbon */}
          <FadeIn delay={0.5} direction="up">
            <div className="mt-12">
              <ScrollingRibbon
                items={peopleEmojis}
                speed={30}
                direction="ltr"
                glassZone={true}
                gap="60px"
              />
            </div>
          </FadeIn>

          {/* NEW: Rotating Text Banner */}
          <FadeIn delay={0.6} direction="up">
            <div className="mt-6">
              <RotatingTextBanner />
            </div>
          </FadeIn>

          {/* Existing BeforeAfterAnimation */}
          <FadeIn delay={0.7} direction="up">
            <div className="mt-16">
              <BeforeAfterAnimation {...props} />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
```

### Phase 6: Asset Preparation (Tasks 10-11)

#### Task 10: Scrape Logos from Wispr Flow
**Action**: Visit wisprflow.ai, extract company/partner logos

**Sources**:
- Wispr Flow homepage "Trusted By" section
- Wispr Flow integrations page

**Target Logos** (16 total):
**Companies** (8):
1. GitHub
2. GitLab
3. Bitbucket
4. VS Code
5. JetBrains
6. Figma
7. Notion
8. Slack

**Partners** (7):
1. AWS
2. Google Cloud
3. Azure
4. DigitalOcean
5. Vercel
6. Netlify
7. Cloudflare

**Format**: SVG with transparent background, optimized for web
**Storage**: `/public/companies/*.svg` and `/public/partners/*.svg`

#### Task 11: Create Placeholder Logo SVGs
**Files**: 16 SVG files in `/public/companies/` and `/public/partners/`

**Temporary Solution**: Create simple text-based SVGs
**Example** (`/public/companies/github.svg`):
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40">
  <text x="60" y="25" font-size="20" font-weight="bold" fill="#333" text-anchor="middle">
    GitHub
  </text>
</svg>
```

**Long-term**: Replace with scraped official logos

### Phase 7: Page Integration (Task 12)

#### Task 12: Update Main Page with New Sections
**File**: `app/page.tsx`

**Changes**:
1. Add `TrustedBySection` after `HeroSection`
2. Add `PartnerSection` after `TrustedBySection`
3. Import new components
4. Adjust section spacing

**New Structure**:
```typescript
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustedBySection } from '@/components/sections/TrustedBySection'
import { PartnerSection } from '@/components/sections/PartnerSection'
// ... other imports

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBySection />
      <PartnerSection />
      <IntegrationsSection />
      <FeaturesSection />
      {/* ... other sections */}
    </>
  )
}
```

### Phase 8: Responsive Implementation (Task 13)

#### Task 13: Add Responsive Breakpoints
**Files**: All animation components

**Requirements**:
- Mobile (< 768px): 15 emojis, 20px/s speed
- Tablet (768px - 1024px): 20 emojis, 25px/s speed
- Desktop (> 1024px): 30 emojis, 30px/s speed

**Implementation Approach**:
```typescript
function useResponsiveConfig() {
  const [config, setConfig] = useState({
    emojiCount: 30,
    speed: 30
  })

  useEffect(() => {
    const updateConfig = () => {
      if (window.innerWidth < 768) {
        setConfig({ emojiCount: 15, speed: 20 })
      } else if (window.innerWidth < 1024) {
        setConfig({ emojiCount: 20, speed: 25 })
      } else {
        setConfig({ emojiCount: 30, speed: 30 })
      }
    }

    updateConfig()
    window.addEventListener('resize', updateConfig)
    return () => window.removeEventListener('resize', updateConfig)
  }, [])

  return config
}
```

**Glass Zone Sizing**:
- Mobile: 120px width
- Tablet: 160px width
- Desktop: 200px width

### Phase 9: Accessibility Features (Task 14)

#### Task 14: Implement Accessibility Enhancements
**Files**: All animation components

**Requirements**:

1. **Motion Preferences**:
```typescript
const prefersReducedMotion = useReducedMotion()
const animationSpeed = prefersReducedMotion ? speed * 0.5 : speed
```

2. **Pause Controls**:
```typescript
const [isPaused, setIsPaused] = useState(false)

// Keyboard handler
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.code === 'Space') {
      e.preventDefault()
      setIsPaused(p => !p)
    }
  }
  window.addEventListener('keydown', handleKeyPress)
  return () => window.removeEventListener('keydown', handleKeyPress)
}, [])
```

3. **ARIA Labels**:
```typescript
<div
  role="img"
  aria-label="Animation: People being verified as they pass through glass. Emojis scroll from left to right, turn gold when verified."
>
```

4. **Screen Reader Announcements**:
```typescript
<LiveRegion 
  message={`Verifying professional number ${verifiedCount}`}
  aria-live="polite"
/>
```

5. **Visual Focus Indicators**:
```typescript
className="focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:ring-offset-2"
```

### Phase 10: Testing & Optimization (Task 15)

#### Task 15: Performance Testing and Optimization
**Tasks**:

1. **FPS Monitoring**:
   - Use React DevTools Profiler
   - Target: Stable 60 FPS
   - Test on: Chrome, Firefox, Safari, Edge

2. **Memory Leak Detection**:
   - Check cleanup in useEffect hooks
   - Verify event listener removal
   - Monitor memory usage over 5 minutes

3. **Load Performance**:
   - Animation ready within 100ms of page load
   - Lazy load logo images
   - Use Next.js Image optimization

4. **Optimization Techniques**:
   - Add `will-change` to transforming elements
   - Use `transform` instead of `left`/`top`
   - Implement CSS containment
   - Reduce reflows with `requestAnimationFrame`

5. **Cross-browser Testing**:
   - Chrome 120+
   - Firefox 120+
   - Safari 17+
   - Edge 120+

## File Summary

### New Files (12)
1. `components/animations/ScrollingRibbon.tsx`
2. `components/animations/useEmojiPositionTracker.ts`
3. `components/animations/EmojiWithBadge.tsx`
4. `components/animations/TranscribingEffect.tsx`
5. `components/animations/RotatingTextBanner.tsx`
6. `components/animations/LogoCarousel.tsx`
7. `components/sections/TrustedBySection.tsx`
8. `components/sections/PartnerSection.tsx`
9. `public/companies/*.svg` (8 files)
10. `public/partners/*.svg` (7 files)

### Modified Files (3)
1. `components/sections/HeroSection.tsx`
2. `app/page.tsx`
3. `components/animations/index.ts` (export new components)

## Estimated Complexity
- **Total Tasks**: 15
- **New Components**: 8
- **Estimated Lines of Code**: ~2,500
- **Development Time**: 8-12 hours

## Success Criteria
✅ Smooth 60 FPS animations on all devices
✅ People emojis transform from gray to gold through glass
✅ Transcribing effect syncs with emoji position
✅ Rotating text banner cycles through 5 messages
✅ Logo carousels scroll seamlessly in both directions
✅ All features accessible with keyboard and screen readers
✅ Responsive design works on mobile, tablet, desktop
✅ Performance optimized with no memory leaks
