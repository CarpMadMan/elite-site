"use client";

import { motion } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';

export interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  className?: string;
}

/**
 * FadeIn component with directional animation
 * Default: fades in from bottom with 0.5s duration
 *
 * @example
 * <FadeIn delay={0.2} direction="up">
 *   <h1>Hello World</h1>
 * </FadeIn>
 */
export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className = '',
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();

  // Define initial offset based on direction
  const getInitialOffset = () => {
    if (prefersReducedMotion) return 0;

    switch (direction) {
      case 'up':
        return { y: 40 };
      case 'down':
        return { y: -40 };
      case 'left':
        return { x: 40 };
      case 'right':
        return { x: -40 };
      default:
        return { y: 40 };
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...getInitialOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1] as const,
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
