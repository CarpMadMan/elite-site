'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useMemo } from 'react'

interface LogoCarouselProps {
  logos: string[]
  speed?: number
  direction?: 'ltr' | 'rtl'
  grayscale?: boolean
  className?: string
}

export function LogoCarousel({
  logos,
  speed = 25,
  direction = 'ltr',
  grayscale = true,
  className = '',
}: LogoCarouselProps) {
  // Duplicate logos 3x for seamless infinite loop
  const duplicatedLogos = useMemo(() => {
    return [...logos, ...logos, ...logos]
  }, [logos])

  // Calculate animation duration based on speed
  // Speed 25 = 40 seconds for full cycle (1000 / 25)
  const duration = 1000 / speed

  // Calculate animation direction
  // ltr (left-to-right) = negative x movement
  // rtl (right-to-left) = positive x movement
  const animateX = direction === 'ltr' ? [0, -1000] : [-1000, 0]

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-12"
        animate={{
          x: animateX,
        }}
        transition={{
          duration,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className={`flex-shrink-0 transition-opacity duration-200 ${
              grayscale ? 'grayscale hover:grayscale-0' : ''
            } opacity-70 hover:opacity-100`}
          >
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
