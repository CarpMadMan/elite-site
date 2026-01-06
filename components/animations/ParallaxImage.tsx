"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';

export interface ParallaxImageProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  offset?: ["start end" | "end start", "start end" | "end start"];
}

/**
 * ParallaxImage - creates a parallax scroll effect
 * Moves content at different speed than scroll
 *
 * @example
 * <ParallaxImage speed={0.5}>
 *   <img src="image.jpg" alt="Parallax image" />
 * </ParallaxImage>
 */
export function ParallaxImage({
  children,
  speed = 0.5,
  className = '',
  offset = ['start end', 'end start'],
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as ["start end", "end start"],
  });

  // Transform scroll progress to Y translation
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 300]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{
          y: prefersReducedMotion ? 0 : y,
        }}
        transition={{
          type: 'spring',
          stiffness: prefersReducedMotion ? 0 : 100,
          damping: prefersReducedMotion ? 0 : 30,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/**
 * ParallaxWrapper - horizontal parallax variant
 */
export interface ParallaxWrapperProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  className?: string;
  offset?: ["start end" | "end start", "start end" | "end start"];
}

export function ParallaxWrapper({
  children,
  speed = 0.5,
  direction = 'vertical',
  className = '',
  offset = ['start end', 'end start'],
}: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as ["start end", "end start"],
  });

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'vertical' ? [0, speed * 300] : [0, speed * 200]
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{
          [direction === 'vertical' ? 'y' : 'x']: prefersReducedMotion
            ? 0
            : transform,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
