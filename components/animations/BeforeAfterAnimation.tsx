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
            className="rounded-xl border-2 border-neutral-200 bg-neutral-50 p-8"
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl">❌</div>
              <div>
                <h3 className="text-lg font-semibold text-neutral-700">{beforeLabel}</h3>
                <p className="mt-2 text-neutral-600 whitespace-pre-line">{beforeText}</p>
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
            className="rounded-xl border-2 border-neutral-900 bg-neutral-900 p-8"
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-white">{afterLabel}</h3>
                <p className="mt-2 text-neutral-300 whitespace-pre-line">{afterText}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
