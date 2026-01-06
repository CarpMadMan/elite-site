/**
 * Animation Components
 *
 * A collection of reusable animation components built with Framer Motion.
 * All components respect user's prefers-reduced-motion setting for accessibility.
 *
 * @example
 * import { FadeIn, SlideIn, CounterAnimation } from '@/components/animations';
 */

// Accessibility hook
export { useReducedMotion } from './useReducedMotion';

// Basic animations
export { FadeIn } from './FadeIn';
export type { FadeInProps } from './FadeIn';

export { SlideIn } from './SlideIn';
export type { SlideInProps } from './SlideIn';

export { ScaleIn } from './ScaleIn';
export type { ScaleInProps } from './ScaleIn';

// Container animations
export { StaggerContainer, StaggerItem } from './StaggerContainer';
export type { StaggerContainerProps } from './StaggerContainer';

// Scroll-based animations
export { ParallaxImage, ParallaxWrapper } from './ParallaxImage';
export type { ParallaxImageProps, ParallaxWrapperProps } from './ParallaxImage';

// Number animations
export { CounterAnimation, CounterSpring } from './CounterAnimation';
export type { CounterAnimationProps, CounterSpringProps } from './CounterAnimation';

// Comparison animations
export { BeforeAfterAnimation } from './BeforeAfterAnimation';
export type { BeforeAfterAnimationProps } from './BeforeAfterAnimation';

// Scrolling ribbon system
export { default as ScrollingRibbon } from './ScrollingRibbon';
export type { ScrollingRibbonProps } from './ScrollingRibbon';

export { default as EmojiWithBadge } from './EmojiWithBadge';
export type { EmojiWithBadgeProps } from './EmojiWithBadge';

export { default as TranscribingEffect } from './TranscribingEffect';
export type { TranscribingEffectProps } from './TranscribingEffect';

export { default as RotatingTextBanner } from './RotatingTextBanner';

export { LogoCarousel } from './LogoCarousel';
export type { LogoCarouselProps } from './LogoCarousel';

// Hooks
export { useEmojiPositionTracker } from './useEmojiPositionTracker';
