import { useEffect, useRef } from 'react';
import { useInView, useAnimation, AnimationControls } from 'framer-motion';
import { AnimationVariants } from '../animation';

interface UseScrollAnimationProps {
  variants: AnimationVariants;
  threshold?: number;
  once?: boolean;
  delay?: number;
}

interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLElement>;
  controls: AnimationControls;
  inView: boolean;
}

/**
 * A custom hook that handles scroll-triggered animations
 * 
 * @param variants The animation variants to use
 * @param threshold Value between 0 and 1 indicating how much of the element should be in view
 * @param once Whether the animation should only trigger once
 * @param delay Delay before the animation starts (in seconds)
 * @returns Object containing the ref to attach to the element, animation controls, and inView state
 */
export function useScrollAnimation({
  threshold = 0.2,
  once = true,
}: Omit<UseScrollAnimationProps, 'variants' | 'delay'>): UseScrollAnimationReturn {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { 
    amount: threshold,
    once 
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  return { ref, controls, inView };
} 