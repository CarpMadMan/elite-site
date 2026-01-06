'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface TranscribingEffectProps {
  isVerifying: boolean;
  emojiCentered: boolean;
}

const TranscribingEffect: React.FC<TranscribingEffectProps> = ({
  isVerifying,
  emojiCentered,
}) => {
  return (
    <div className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none">
      <AnimatePresence mode="wait">
        {!emojiCentered && isVerifying && (
          <motion.div
            key="verifying"
            className="flex items-center gap-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-white text-sm font-medium drop-shadow-lg">Verifying</span>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="text-[#2A9D8F] text-lg"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'easeInOut',
                  }}
                >
                  •
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}

        {emojiCentered && (
          <motion.div
            key="verified"
            className="flex items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-yellow-400 text-2xl">✓</span>
            <span className="text-white text-lg font-semibold drop-shadow-lg">
              Verified!
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TranscribingEffect;
