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
    <div className="relative w-full h-16 flex items-center justify-center overflow-hidden">
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
          className="absolute w-full text-xl md:text-2xl text-white font-medium text-center drop-shadow-lg px-4"
        >
          {messages[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotatingTextBanner;
