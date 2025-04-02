# Scroll Animations for Components

This project includes a set of reusable scroll animation components that make it easy to add engaging animations to your site. Animations are triggered when elements come into view during scrolling.

## Available Components and Utilities

### Animation Utility Library (`/lib/animation.ts`)

Contains predefined animation variants:

- `fadeUpVariants`: Elements fade in and move up
- `fadeInVariants`: Simple fade in effect
- `staggerContainerVariants`: For parent containers with staggered children
- `scaleUpVariants`: Elements scale up with fade in
- `slideInRightVariants`: Elements slide in from the right
- `slideInLeftVariants`: Elements slide in from the left

### Custom Hooks (`/lib/hooks/useScrollAnimation.tsx`)

A custom hook that manages scroll-triggered animations:

```tsx
const { ref, controls, inView } = useScrollAnimation({
  variants: fadeUpVariants,
  threshold: 0.2,
  once: true,
  delay: 0
});
```

### Animation Components (`/components/ui/AnimatedElement.tsx`)

Two primary components to use in your application:

1. `AnimatedElement`: Wraps individual elements that should animate
2. `AnimatedGroup`: For elements with staggered child animations

## How to Use

### Basic Usage

Wrap any component with `AnimatedElement` to make it animate when scrolled into view:

```tsx
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { fadeUpVariants } from "@/lib/animation";

export default function MyComponent() {
  return (
    <AnimatedElement variants={fadeUpVariants} threshold={0.2}>
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h2>This content will animate when scrolled into view</h2>
        <p>The entire element fades in and moves upward.</p>
      </div>
    </AnimatedElement>
  );
}
```

### Staggered Children Animations

Use `AnimatedGroup` for parent containers, and `AnimatedElement` for each child:

```tsx
import { AnimatedGroup, AnimatedElement } from "@/components/ui/AnimatedElement";
import { fadeUpVariants, scaleUpVariants } from "@/lib/animation";

export default function StaggeredList() {
  return (
    <AnimatedGroup 
      className="space-y-4"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {items.map((item) => (
        <AnimatedElement 
          key={item.id} 
          variants={scaleUpVariants}
          as="li"
        >
          {item.content}
        </AnimatedElement>
      ))}
    </AnimatedGroup>
  );
}
```

## Animation Options

Each animation component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variants` | `AnimationVariants` | `fadeUpVariants` | Animation variants to use |
| `threshold` | `number` | `0.2` | Fraction of element visible to trigger animation (0-1) |
| `once` | `boolean` | `true` | Whether to run the animation only once |
| `delay` | `number` | `0` | Delay before running the animation (seconds) |
| `as` | `keyof JSX.IntrinsicElements` | `'div'` | HTML element to render as |
| `className` | `string` | - | CSS classes to apply |
| `motionProps` | `MotionProps` | - | Additional Framer Motion props |

## Creating Custom Animations

You can create custom animation variants:

```tsx
import { AnimationVariants } from "@/lib/animation";

const customVariants: AnimationVariants = {
  hidden: {
    opacity: 0,
    rotateY: 90,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Use with AnimatedElement
<AnimatedElement variants={customVariants}>
  {/* Your content */}
</AnimatedElement>
```

## Tips for Best Results

- Use appropriate thresholds based on element size (smaller values for larger elements)
- Consider setting `once: false` for repeated animations when scrolling back up
- Combine different animation types for visual interest
- Stagger delays for sequential animations
- Keep animations subtle and quick for best user experience 