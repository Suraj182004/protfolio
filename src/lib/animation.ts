import { Variants } from 'framer-motion';

export type AnimationVariants = Variants;

// Fade up animation - good for sections and cards
export const fadeUpVariants: AnimationVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2.0,
      ease: [0.06, 0.4, 0.2, 0.95],
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
};

// Fade in animation - good for text elements
export const fadeInVariants: AnimationVariants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 3.5,
      ease: [0.01, 0.2, 0.1, 0.99],
      type: "spring",
      damping: 25,
      stiffness: 15,
      mass: 2,
      delay: 0.3,
    },
  },
};

// Stagger children animation - for list items
export const staggerContainerVariants: AnimationVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
};

// Scale up animation - for buttons, icons, or images
export const scaleUpVariants: AnimationVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: [0.06, 0.4, 0.2, 0.95],
      type: "spring",
      damping: 15,
      stiffness: 80,
    },
  },
};

// Slide in from right
export const slideInRightVariants: AnimationVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.8,
      ease: [0.06, 0.4, 0.2, 0.95],
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
};

// Slide in from left
export const slideInLeftVariants: AnimationVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.8,
      ease: [0.06, 0.4, 0.2, 0.95],
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
}; 