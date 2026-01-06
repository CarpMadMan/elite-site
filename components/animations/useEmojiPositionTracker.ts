'use client';

import { useEffect, useRef, useState } from 'react';

interface EmojiState {
  id: string;
  emoji: string;
  x: number;
  inGlass: boolean;
  verified: boolean;
}

interface UseEmojiPositionTrackerProps {
  emojis: string[];
  containerRef: React.RefObject<HTMLDivElement>;
  glassZone: { width: number; centerXOffset: number } | null;
  direction: 'ltr' | 'rtl';
}

const useEmojiPositionTracker = ({
  emojis,
  containerRef,
  glassZone,
  direction,
}: UseEmojiPositionTrackerProps) => {
  const [emojiStates, setEmojiStates] = useState<EmojiState[]>([]);
  const rafRef = useRef<number>();
  const previousStatesRef = useRef<Map<string, boolean>>(new Map());

  useEffect(() => {
    if (!glassZone || !containerRef.current) {
      return;
    }

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;
    const glassLeft = centerX - glassZone.width / 2;
    const glassRight = centerX + glassZone.width / 2;

    const initialState = emojis.map((emoji, index) => ({
      id: `${emoji}-${index}`,
      emoji,
      x: index * 80, // Approximate width including gap
      inGlass: false,
      verified: false,
    }));

    setEmojiStates(initialState);
    previousStatesRef.current.clear();

    const trackPositions = () => {
      if (!containerRef.current) {
        return;
      }

      const currentRect = containerRef.current.getBoundingClientRect();
      const emojiElements = containerRef.current.querySelectorAll('[data-emoji-track]');

      const newStates: EmojiState[] = Array.from(emojiElements).map((el, index) => {
        const emoji = emojis[index % emojis.length];
        const id = `${emoji}-${index}`;
        const rect = (el as HTMLElement).getBoundingClientRect();

        const emojiCenterX = rect.left + rect.width / 2;
        const inGlass = emojiCenterX >= glassLeft && emojiCenterX <= glassRight;

        const wasVerified = previousStatesRef.current.get(id);
        const verified = wasVerified || (inGlass && direction === 'ltr');

        return {
          id,
          emoji,
          x: rect.left,
          inGlass,
          verified,
        };
      });

      // Update previous states
      newStates.forEach((state) => {
        previousStatesRef.current.set(state.id, state.verified);
      });

      setEmojiStates(newStates);
      rafRef.current = requestAnimationFrame(trackPositions);
    };

    rafRef.current = requestAnimationFrame(trackPositions);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [emojis, containerRef, glassZone, direction]);

  return emojiStates;
};

export default useEmojiPositionTracker;
