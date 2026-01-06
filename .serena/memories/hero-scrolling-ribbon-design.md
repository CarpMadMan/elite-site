# Hero Section Scrolling Ribbon Design - ELITE Site

## Concept: "Skills Verification Journey"

**Visual Metaphor**: People emojis scroll through a "verification glass" and emerge as gold-certified professionals, representing ELITE's core value proposition of turning real work into undeniable proof.

## Animation Components

### 1. Scrolling Ribbon (Primary Animation)
**Layout**: Horizontal banner spanning hero width
**Background**: Semi-transparent glass effect (`bg-white/5 backdrop-blur-sm`)
**Border**: Subtle top/bottom borders (`border-y border-white/10`)

**Scrolling Content**:
- 30 diverse people emojis (👨‍💼👩‍💻👨‍🎨👩‍🔬👨‍🚀👩‍⚖️👨‍🏫👩‍🌾👨‍💼👩‍🎤👨‍🔧👩‍⚕️👨‍🎓👩‍💼👨‍🍳👩‍🎨👨‍🔬👩‍🚀👨‍⚖️👩‍🏫👨‍🌾👩‍💻👨‍🎤👩‍🔧👨‍⚕️👩‍🎓👨‍💼👩‍🍳👨‍🎨👩‍🔬)
- Each emoji spaced evenly (60px gap)
- Continuous seamless loop (left-to-right)
- Speed: 30px per second

**Glass Verification Zone** (Center):
- Width: 200px glass panel centered in ribbon
- Background: `bg-gradient-to-b from-white/10 to-white/5`
- Borders: `border-2 border-[#2A9D8F]/30`
- Glow effect: `shadow-[0_0_30px_-5px_rgba(42,157,143,0.2)]`

**Transformation Effect**:
1. **Before glass** (left side): Regular grayscale emojis
2. **In glass**: Scale up (1.2x), sparkle effect ✨
3. **After glass** (right side): Gold glowing emojis with checkmarks

**Gold Badge Animation**:
- As emoji exits glass, gold badge appears above: `🏅✓`
- Badge fades in with scale (0.8 → 1.0)
- Stays visible for 1 second, then fades out
- Color: Gold gradient `bg-gradient-to-br from-yellow-400 to-yellow-600`

### 2. Transcribing Effect (Secondary Animation)
**Position**: Overlapping the glass verification zone
**Animation Sequence**:
1. Three dots pulse above glass: `•••`
2. Transform to checkmark: `✓`
3. Text appears: "Verified!"
4. Fade out after 1.5 seconds
5. Repeat for each emoji passing through

**Timing**: Synced with emoji scroll speed
- When emoji center enters glass: dots appear
- When emoji center reaches glass middle: dots → checkmark
- When emoji exits glass: checkmark + "Verified!" fade out

### 3. Dynamic Text Overlay
**Position**: Below scrolling ribbon
**Text Rotation** (2.5 second intervals):
1. "Turn Your Real Work Into Proof"
2. "Get Verified. Get Hired."
3. "Skills That Speak For Themselves"
4. "Your Expertise, Undeniable"
5. "Join 10,000+ Verified Professionals"

**Animation**:
- Fade out current text (opacity 1 → 0)
- Slide up slightly (translateY 0 → -10px)
- Swap text
- Fade in new text (opacity 0 → 1)
- Slide down to position (translateY 10px → 0)

### 4. Rounded Card Section (Below Hero)
**Purpose**: Logo carousel showing "Trusted By" companies
**Design**:
- Background: White card with rounded corners (`rounded-3xl`)
- Shadow: Subtle elevation (`shadow-lg`)
- Padding: `p-8`
- Border: `border border-gray-200`

**Logo Ribbon**:
- Scrolling left-to-right (reverse of hero ribbon)
- Company logos: grayscale → color on hover
- Logos: GitHub, GitLab, Bitbucket, VS Code, JetBrains, Figma, Notion, Slack
- Seamless infinite loop

### 5. Green Background Section
**Purpose**: Partner/integration showcase
**Design**:
- Background: Wispr Flow green (`bg-[#2A9D8F]`)
- Rounded top corners: `rounded-t-3xl`
- Padding: `py-16`
- Full width

**Logo Ribbon**:
- Scrolling right-to-left
- White logos (inverted for visibility on green)
- Partner logos: AWS, Google Cloud, Azure, DigitalOcean, Vercel, Netlify, Cloudflare
- Slower speed (20px per second) for elegance

## Technical Implementation

### Component Structure
```
components/sections/
  ├── HeroSection.tsx (main container)
  ├── ScrollingRibbon.tsx (people emoji animation)
  ├── LogoCarousel.tsx (reusable for both sections)
  └── TrustedBySection.tsx (rounded card)
```

### Animation Technology
- **Framer Motion** for smooth transforms and opacity transitions
- **CSS keyframes** for continuous scroll (more performant than JS)
- **useRef** for tracking emoji positions in glass zone
- **useEffect** for syncing animations

### Performance Optimizations
1. **will-change**: Add to transforming elements
2. **transform**: Use GPU-accelerated properties only
3. **requestAnimationFrame**: For position tracking
4. **Intersection Observer**: Pause animations when off-screen
5. **CSS containment**: Isolate repaint areas

### Responsive Behavior
- **Mobile**: Reduce emoji count to 15, slow scroll speed (20px/s)
- **Tablet**: 20 emojis, medium speed (25px/s)
- **Desktop**: 30 emojis, full speed (30px/s)
- Glass zone scales proportionally (120px mobile → 200px desktop)

## Color Palette

### Hero Section
```css
--hero-bg: #0a0a0a;          /* Near-black background */
--hero-text: #ffffff;         /* Primary text */
--hero-subtext: #a0a0a0;      /* Secondary text */
--accent-teal: #2A9D8F;       /* Primary accent */
--accent-teal-dark: #238B7D;  /* Hover state */
--gold-gradient: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
```

### Glass Effect
```css
--glass-bg: rgba(255, 255, 255, 0.05);
--glass-border: rgba(42, 157, 143, 0.3);
--glass-glow: rgba(42, 157, 143, 0.2);
```

### Verification State Colors
```css
--pre-verify: #9ca3af;        /* Gray-400 */
--verifying: #60a5fa;         /* Blue-400 */
--verified-gold: #f59e0b;     /* Amber-500 */
```

## Copy Reference

### Scrolling Ribbon Context
"People representing diverse careers scroll through our verification glass and emerge as certified professionals."

### Dynamic Text Messages
1. "Turn Your Real Work Into Proof"
2. "Get Verified. Get Hired."
3. "Skills That Speak For Themselves"
4. "Your Expertise, Undeniable"
5. "Join 10,000+ Verified Professionals"

### Trusted By Section
"Trusted by forward-thinking companies worldwide"

### Partners Section
"Integrated with the tools you use every day"

## Accessibility

### Motion Preferences
- Respect `prefers-reduced-motion`
- Provide pause button for all carousels
- Reduce animation speed to 50% when reduced motion preferred

### Screen Readers
- Add `aria-label` to ribbon: "Animation: People being verified as they pass through glass"
- Use `role="img"` for emoji sequences
- Provide text alternative for visual effects

### Keyboard Navigation
- Allow pausing/playing with Space key
- Tab-focusable glass verification zone
- Visual focus indicators on interactive elements

## Performance Targets

- **60 FPS** on all devices
- **Initial load**: Animation ready within 100ms
- **Frame budget**: < 16ms per frame
- **Memory**: Stable over time (no leaks)

## Next Steps for Implementation

1. Create base ScrollingRibbon component with CSS animation
2. Add glass verification zone with position tracking
3. Implement transformation logic (gray → verifying → gold)
4. Add dynamic text overlay with rotation logic
5. Create reusable LogoCarousel component
6. Build TrustedBySection (rounded card)
7. Build green partner section
8. Add responsive breakpoints
9. Implement accessibility features
10. Performance test and optimize
