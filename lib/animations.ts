import type { Variants } from "framer-motion";

const bezier: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function makeFadeUp(baseDelay = 0, stagger = 0.1): Variants {
  return {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: baseDelay + i * stagger,
        ease: bezier,
      },
    }),
  };
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: bezier },
  }),
};

export const fadeUpSlow: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: bezier },
  }),
};

export const heroFloat: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: bezier },
  }),
};
