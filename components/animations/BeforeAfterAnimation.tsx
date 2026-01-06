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
            className="rounded-xl border-2 border-[#333333] bg-[#1a1a1a] p-8"
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl">❌</div>
              <div>
                <h3 className="text-lg font-semibold text-[#a0a0a0]">{beforeLabel}</h3>
                <p className="mt-2 text-white whitespace-pre-line">{beforeText}</p>
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
            className="rounded-xl border-2 border-[#2A9D8F] bg-[#2A9D8F] p-8 shadow-[0_0_40px_-10px_rgba(42,157,143,0.3)]"
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl text-white">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-white">{afterLabel}</h3>
                <p className="mt-2 text-white whitespace-pre-line">{afterText}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
