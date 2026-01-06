"use client";

import { motion } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';

export interface SlideInProps {
  children: React.ReactNode;
  side?: 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

/**
 * SlideIn component - slides content in from left or right
 *
 * @example
 * <SlideIn side="left" delay={0.3}>
 *   <p>This slides in from the left</p>
 * </SlideIn>
 */
export function SlideIn({
  children,
  side = 'left',
  delay = 0,
  duration = 0.6,
  distance = 100,
  className = '',
}: SlideInProps) {
  const prefersReducedMotion = useReducedMotion();

  const getInitialX = () => {
    if (prefersReducedMotion) return 0;
    return side === 'left' ? -distance : distance;
  };

  const variants = {
    hidden: {
      x: getInitialX(),
      opacity: prefersReducedMotion ? 1 : 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0.01 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1] as const, // Custom easing for smooth slide
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
