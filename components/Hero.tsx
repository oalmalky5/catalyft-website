// app/components/Hero.tsx
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, CheckCircle2 } from 'lucide-react';
import ContactButton from './ContactButton';
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
      className="relative overflow-hidden bg-black text-white"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <Image
        src="/catalyft-saudi-market-entry.png"
        alt="Executives planning Saudi market entry in a Riyadh office"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/72 to-black/24" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/25" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.8, ease: easing, delay: 0.1 },
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(55%_40%_at_20%_15%,rgba(255,255,255,0.14),transparent_64%)]" />
      </motion.div>

      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-10 px-6 py-24 lg:grid-cols-[1.05fr_0.75fr]">
        <div className="max-w-3xl">
          <motion.p
            className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65"
            variants={item}
          >
            CATALYFT | SAUDI MARKET ENTRY PARTNER
          </motion.p>

          <motion.h1
            className="mt-5 max-w-4xl text-4xl font-extrabold tracking-tight md:text-6xl"
            variants={item}
          >
            Saudi company setup and operations, handled end to end.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/78 md:text-xl"
            variants={item}
          >
            Catalyft helps international startups, SMEs, and expansion teams
            set up and run their Saudi operations, from MISA licensing and
            Commercial Registration to HR, payroll, Etimad, and government
            portal readiness.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            variants={item}
          >
            <ContactButton
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              <Calendar className="size-4" />
              Book a Saudi setup call
            </ContactButton>
            <ServicesMenuButton variant="light" />
          </motion.div>
        </div>

        <motion.div
          className="rounded-2xl border border-white/15 bg-black/45 p-5 shadow-2xl backdrop-blur"
          variants={item}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
            WHAT WE HANDLE
          </p>
          <div className="mt-5 grid gap-3">
            {[
              'MISA license, CR, constitutional documents, and bank setup',
              'Government portals, HR, payroll, and renewals',
              'Etimad registration, tender workflows, and bid readiness',
              'RHQ setup, activation, governance, and compliance support',
            ].map((text) => (
              <div
                key={text}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-white/82"
              >
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-white" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
