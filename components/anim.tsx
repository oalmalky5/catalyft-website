'use client';

import {
  motion,
  useReducedMotion,
  type Variants,
  type HTMLMotionProps,
} from 'framer-motion';
import React from 'react';

/** Shared variants */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
};

/**
 * MotionSection
 * - Props use Framer's HTMLMotionProps<'section'> to avoid signature clashes
 * - `once` and `amount` are convenience props for viewport triggering
 */
type MotionSectionProps = Omit<HTMLMotionProps<'section'>, 'ref'> & {
  once?: boolean;
  amount?: number; // how much of the section must be visible to trigger
};

export function MotionSection({
  children,
  className,
  once = true,
  amount = 0.2,
  ...rest
}: MotionSectionProps) {
  const prefersReduce = useReducedMotion();

  if (prefersReduce) {
    // Render a motion.section without animation props (no movement, no 'any' cast)
    return (
      <motion.section className={className} {...rest}>
        {children}
      </motion.section>
    );
  }

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={fadeIn}
      {...rest}
    >
      {children}
    </motion.section>
  );
}

/**
 * Stagger
 * - Typed with HTMLMotionProps<'div'> so motion handlers match Framer exactly
 */
type StaggerProps = Omit<HTMLMotionProps<'div'>, 'ref'> & {
  delay?: number;
};

export function Stagger({
  children,
  delay = 0.05,
  className,
  ...rest
}: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: delay } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/**
 * Item
 * - Also typed with HTMLMotionProps<'div'>
 */
type ItemProps = Omit<HTMLMotionProps<'div'>, 'ref'> & {
  variants?: Variants;
};

export function Item({
  children,
  variants = fadeInUp,
  className,
  ...rest
}: ItemProps) {
  return (
    <motion.div className={className} variants={variants} {...rest}>
      {children}
    </motion.div>
  );
}
