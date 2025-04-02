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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  variants,
  threshold = 0.05,
  once = true,
  delay = 0,
}: UseScrollAnimationProps): UseScrollAnimationReturn {
  const controls = useAnimation();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { 
    amount: threshold,
    once 
  });

  useEffect(() => {
    if (inView) {
      const animationDelay = delay + 1.0;
      controls.start('visible', { delay: animationDelay });
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once, delay]);

  return { 
    ref: ref as React.RefObject<HTMLElement>,
    controls, 
    inView 
  };
} 