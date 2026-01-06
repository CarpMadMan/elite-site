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
      {/* Glass Verification Zone */}
      {glassZone && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[120px] z-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-[2px] border-2 border-[#2A9D8F]/30 rounded-lg shadow-[0_0_30px_-5px_rgba(42,157,143,0.2)]">
            {/* Verification indicator */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="text-[#2A9D8F] text-sm font-semibold tracking-wide drop-shadow-lg">
                VERIFICATION ZONE
              </span>
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
