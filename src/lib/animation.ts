import { Variant } from 'framer-motion';

export interface AnimationVariants {
  hidden: Variant;
  visible: Variant;
}

// Fade up animation - good for sections and cards
export const fadeUpVariants: AnimationVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

// Fade in animation - good for text elements
export const fadeInVariants: AnimationVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
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
    },
  },
};

// Scale up animation - for buttons, icons, or images
export const scaleUpVariants: AnimationVariants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

// Slide in from right
export const slideInRightVariants: AnimationVariants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

// Slide in from left
export const slideInLeftVariants: AnimationVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
}; 