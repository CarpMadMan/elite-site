"use client";

import { motion } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';

export interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  initialScale?: number;
  stiffness?: number;
  damping?: number;
  className?: string;
}

/**
 * ScaleIn component - scales up with spring physics
 * Scales from initialScale (default 0.9) to 1
 *
 * @example
 * <ScaleIn delay={0.2} stiffness={260}>
 *   <div>This pops in with a spring effect</div>
 * </ScaleIn>
 */
export function ScaleIn({
  children,
  delay = 0,
  initialScale = 0.9,
  stiffness = 260,
  damping = 20,
  className = '',
}: ScaleInProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: {
      scale: prefersReducedMotion ? 1 : initialScale,
      opacity: prefersReducedMotion ? 1 : 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: prefersReducedMotion ? 0 : delay,
        type: "spring" as const,
        stiffness: prefersReducedMotion ? 0 : stiffness,
        damping: prefersReducedMotion ? 0 : damping,
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
