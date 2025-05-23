import React, { ReactNode, JSX } from 'react';
import { useScrollAnimation } from '@/lib/hooks/useScrollAnimation';
import { AnimationVariants, fadeUpVariants } from '@/lib/animation';
import { cn } from '@/lib/utils';
import { motion, MotionProps } from 'framer-motion';

interface AnimatedElementProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variants?: AnimationVariants;
  threshold?: number;
  once?: boolean;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  motionProps?: MotionProps;
}

/**
 * A component that animates its children when they enter the viewport
 */
export function AnimatedElement({
  children,
  variants = fadeUpVariants,
  threshold = 0.2,
  once = true,
  delay = 0.2,
  as = 'div',
  className,
  motionProps,
  ...props
}: AnimatedElementProps) {
  const { ref, controls } = useScrollAnimation({
    variants,
    threshold,
    once,
    delay,
  });

  // @ts-expect-error - framer-motion typing issue
  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={cn(className)}
      {...motionProps}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

/**
 * A component that animates a group of children with staggered timing
 */
export function AnimatedGroup({
  children,
  variants,
  threshold = 0.2,
  once = true,
  delay = 0.2,
  as = 'div',
  className,
  motionProps,
  ...props
}: AnimatedElementProps) {
  const { ref, controls } = useScrollAnimation({
    variants: variants || {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.15,
        },
      },
    },
    threshold,
    once,
    delay,
  });

  // @ts-expect-error - framer-motion typing issue
  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={cn(className)}
      {...motionProps}
      {...props}
    >
      {children}
    </MotionTag>
  );
} 