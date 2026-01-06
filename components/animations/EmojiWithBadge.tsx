'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface EmojiWithBadgeProps {
  emoji: string;
  state: 'pre-verify' | 'verifying' | 'verified';
  showBadge: boolean;
}

const EmojiWithBadge: React.FC<EmojiWithBadgeProps> = ({ emoji, state, showBadge }) => {
  const [showSparkle, setShowSparkle] = useState(false);

  useEffect(() => {
    if (state === 'verifying') {
      setShowSparkle(true);
    }
  }, [state]);

  const getEmojiStyle = () => {
    switch (state) {
      case 'pre-verify':
        return 'grayscale opacity-70';
      case 'verifying':
        return 'scale-110';
      case 'verified':
        return 'drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]';
      default:
        return '';
    }
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Emoji */}
      <motion.span
        data-emoji-track="true"
        className={`text-5xl transition-all duration-300 ${getEmojiStyle()}`}
        animate={
          state === 'verifying'
            ? {
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }
            : {}
        }
        transition={
          state === 'verifying'
            ? {
                duration: 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : {}
        }
      >
        {emoji}
      </motion.span>

      {/* Sparkle effect during verification */}
      <AnimatePresence>
        {state === 'verifying' && showSparkle && (
          <motion.span
            className="absolute -top-2 -right-2 text-lg"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            ✨
          </motion.span>
        )}
      </AnimatePresence>

      {/* Gold Badge */}
      <AnimatePresence>
        {showBadge && state === 'verified' && (
          <motion.div
            className="absolute -bottom-1 -right-1 w-7 h-7 flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
            }}
          >
            <span className="text-xs">🏅✓</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EmojiWithBadge;
