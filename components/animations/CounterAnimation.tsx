"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion';
import { useReducedMotion } from './useReducedMotion';

export interface CounterAnimationProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  onAnimationComplete?: () => void;
}

/**
 * CounterAnimation - animated number counter from start to end
 * Uses spring physics for smooth animation
 *
 * @example
 * <CounterAnimation end={73} duration={2000} suffix="%" />
 * <CounterAnimation end={1000} duration={1500} prefix="$" />
 */
export function CounterAnimation({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  decimals = 0,
  className = '',
  prefix = '',
  suffix = '',
  onAnimationComplete,
}: CounterAnimationProps) {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    hasAnimated.current = true;

    if (prefersReducedMotion) {
      setCount(end);
      onAnimationComplete?.();
      return;
    }

    const startTime = setTimeout(() => {
      const startTimeStamp = Date.now();
      const animateCount = () => {
        const elapsed = Date.now() - startTimeStamp;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (easeOutExpo)
        const eased =
          progress === 1
            ? 1
            : 1 - Math.pow(2, -10 * progress);

        const currentCount = start + (end - start) * eased;
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          onAnimationComplete?.();
        }
      };

      requestAnimationFrame(animateCount);
    }, delay);

    return () => clearTimeout(startTime);
  }, [isInView, end, start, duration, delay, prefersReducedMotion, onAnimationComplete]);

  const formatNumber = (num: number) => {
    const fixed = num.toFixed(decimals);
    return `${prefix}${fixed}${suffix}`;
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {formatNumber(count)}
    </motion.span>
  );
}

/**
 * CounterSpring - alternative implementation using Framer Motion spring
 * Provides more physics-based animation
 */
export interface CounterSpringProps {
  end: number;
  start?: number;
  stiffness?: number;
  damping?: number;
  delay?: number;
  decimals?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export function CounterSpring({
  end,
  start = 0,
  stiffness = 100,
  damping = 30,
  delay = 0,
  decimals = 0,
  className = '',
  prefix = '',
  suffix = '',
}: CounterSpringProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const prefersReducedMotion = useReducedMotion();

  const motionValue = useMotionValue(start);
  const springValue = useSpring(motionValue, {
    stiffness: prefersReducedMotion ? 0 : stiffness,
    damping: prefersReducedMotion ? 0 : damping,
  });

  const [displayValue, setDisplayValue] = useState(start);

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setDisplayValue(end);
      return;
    }

    const timeout = setTimeout(() => {
      motionValue.set(end);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isInView, motionValue, end, delay, prefersReducedMotion]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(latest);
    });

    return unsubscribe;
  }, [springValue]);

  const formatNumber = (num: number) => {
    const fixed = num.toFixed(decimals);
    return `${prefix}${fixed}${suffix}`;
  };

  return (
    <span ref={ref} className={className}>
      {formatNumber(displayValue)}
    </span>
  );
}
