'use client';

import { motion, useAnimation, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import EmojiWithBadge from './EmojiWithBadge';
import useEmojiPositionTracker from './useEmojiPositionTracker';

interface ScrollingRibbonProps {
  items: string[];
  speed?: number;
  direction?: 'ltr' | 'rtl';
  glassZone?: boolean;
  gap?: string;
}

const ScrollingRibbon: React.FC<ScrollingRibbonProps> = ({
  items,
  speed = 30,
  direction = 'ltr',
  glassZone = true,
  gap = '1.5rem'
}) => {
  const [duplicatedItems] = useState(() => [...items, ...items, ...items]);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  const emojiStates = useEmojiPositionTracker({
    emojis: duplicatedItems,
    containerRef,
    glassZone: glassZone ? { width: 200, centerXOffset: 0 } : null,
    direction,
  });

  useEffect(() => {
    const animate = async () => {
      const itemWidth = 80; // Approximate emoji width + gap
      const totalWidth = itemWidth * items.length;

      if (direction === 'ltr') {
        await controls.start({
          x: -totalWidth,
          transition: {
            duration: speed,
            ease: 'linear',
            repeat: Infinity,
          },
        });
      } else {
        await controls.start({
          x: totalWidth,
          transition: {
            duration: speed,
            ease: 'linear',
            repeat: Infinity,
          },
        });
      }
    };

    animate();
  }, [controls, speed, direction, items.length]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Enhanced Glass Verification Zone with Wispr Flow styling */}
      {glassZone && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[140px] z-10 pointer-events-none">
          {/* Outer glow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2A9D8F]/20 to-transparent blur-xl" />

          {/* Main glass panel */}
          <div className="relative w-full h-full bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_8px_32px_-8px_rgba(42,157,143,0.3),inset_0_1px_0_0_rgba(255,255,255,0.1)]">
            {/* Inner highlight */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-2xl" />

            {/* Accent border */}
            <div className="absolute inset-0 border-2 border-[#2A9D8F]/40 rounded-2xl" />

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#2A9D8F]/60 to-transparent blur-sm" />
          </div>

          {/* Verification indicator - more prominent */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <div className="bg-[#2A9D8F]/90 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider shadow-[0_4px_20px_-4px_rgba(42,157,143,0.5)] border border-white/20">
              ✨ VERIFICATION ZONE
            </div>
          </div>
        </div>
      )}

      {/* Scrolling Container */}
      <div ref={containerRef} className="relative w-full py-16">
        <motion.div
          style={{ x, gap }}
          animate={controls}
          className="flex items-center"
        >
          {duplicatedItems.map((emoji, index) => {
            const state = emojiStates[index];
            let emojiState: 'pre-verify' | 'verifying' | 'verified' = 'pre-verify';

            if (state?.verified) {
              emojiState = 'verified';
            } else if (state?.inGlass) {
              emojiState = 'verifying';
            }

            return (
              <div
                key={`${emoji}-${index}`}
                className="flex-shrink-0 w-16 h-16 flex items-center justify-center"
              >
                <EmojiWithBadge
                  emoji={emoji}
                  state={emojiState}
                  showBadge={state?.verified || false}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingRibbon;
