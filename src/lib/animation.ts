import { Variants } from 'framer-motion';

export type AnimationVariants = Variants;

// Fade up animation - good for sections and cards
export const fadeUpVariants: AnimationVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.1, 0.4, 0.3, 1.0],
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
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.1, 0.3, 0.2, 1.0],
      type: "spring",
      damping: 15,
      stiffness: 40,
      mass: 0.8,
      delay: 0.05,
    },
  },
};

// Stagger children animation - for list items
export const staggerContainerVariants: AnimationVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// Scale up animation - for buttons, icons, or images
export const scaleUpVariants: AnimationVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.1, 0.4, 0.3, 1.0],
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
};

// Slide in from right
export const slideInRightVariants: AnimationVariants = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.1, 0.4, 0.3, 1.0],
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
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.1, 0.4, 0.3, 1.0],
      type: "spring",
      damping: 15,
      stiffness: 50,
    },
  },
}; 