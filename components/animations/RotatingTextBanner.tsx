'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const RotatingTextBanner: React.FC = () => {
  const messages = [
    'Turn Your Real Work Into Proof',
    'Get Verified. Get Hired.',
    'Skills That Speak For Themselves',
    'Your Expertise, Undeniable',
    'Join 10,000+ Verified Professionals',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [messages.length]);

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 20 : -20,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      y: direction < 0 ? 20 : -20,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="relative w-full h-20 flex items-center justify-center overflow-hidden">
      {/* Ambient glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          custom={1}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
            scale: { duration: 0.2 },
          }}
          className="absolute w-full px-4"
        >
          <div className="relative inline-block">
            {/* Text glow effect */}
            <div className="absolute inset-0 blur-xl bg-[#2A9D8F]/20" />

            {/* Main text with Wispr Flow styling */}
            <p className="relative text-2xl md:text-3xl font-bold text-white text-center tracking-tight">
              <span className="inline-block bg-gradient-to-r from-white via-white/95 to-white/80 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(255,255,255,0.3)]">
                {messages[currentIndex]}
              </span>
            </p>

            {/* Accent underline */}
            <motion.div
              className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-transparent via-[#2A9D8F] to-transparent"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.2, duration: 0.4 }}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingTextBanner;
