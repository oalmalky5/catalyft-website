// app/components/Hero.tsx
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import ServicesMenuButton from './ServicesMenuButton';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  // Cohesive easing/timing
  const easing = [0.22, 1, 0.36, 1] as const;

  // Parent controls stagger timing
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  // Child elements fade & rise slightly
  const item = {
    hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10 },
    show: prefersReducedMotion
      ? { opacity: 1, transition: { duration: 0.35, ease: easing } }
      : {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: easing },
        },
  };

  return (
    <motion.section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-black text-center text-white overflow-hidden"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Subtle background glow that fades in */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.8, ease: easing, delay: 0.1 },
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_10%,rgba(255,255,255,0.08),transparent_60%)]" />
      </motion.div>

      {/* Brand name (EN | AR) */}
      <motion.h1
        className="text-2xl font-bold tracking-wide md:text-3xl text-white/90"
        variants={item}
      >
        CataLyft <span className="mx-2">|</span> كاتاليفت
      </motion.h1>

      {/* Hero tagline */}
      <motion.h2
        className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl"
        variants={item}
      >
        Lift, Align, Launch.
      </motion.h2>

      {/* Subtitle */}
      <motion.h3
        className="mt-2 text-xl font-semibold tracking-wide"
        variants={item}
      >
        Your launchpad into the Saudi market.
      </motion.h3>

      {/* Description paragraph */}
      <motion.p
        className="mt-4 max-w-2xl px-6 text-gray-400 text-base md:text-lg"
        variants={item}
      >
        CataLyft helps companies stabilize, structure, and scale in Saudi
        Arabia. From government licensing to local operations setup, we handle
        the heavy lifting so you can focus on growth.
      </motion.p>

      {/* CTA */}
      <motion.div
        className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        variants={item}
      >
        <ServicesMenuButton variant="light" />
      </motion.div>
    </motion.section>
  );
}
