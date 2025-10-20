// components/WhatWeDo.tsx
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  Landmark,
  Compass,
  Handshake,
  Layers3,
  ListChecks,
  Rocket,
} from 'lucide-react';
import {
  MotionSection,
  Stagger,
  Item,
  fadeInUp,
  fadeIn,
} from '@/components/anim';

export default function WhatWeDo() {
  return (
    <MotionSection
      id="what-we-do"
      className="bg-black text-white scroll-mt-20"
      once
      amount={0.25}
    >
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Heading */}
        <div className="mb-10 text-center">
          <Item variants={fadeIn}>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What We Do
            </h2>
          </Item>
          <Item variants={fadeInUp}>
            <p className="mx-auto mt-3 max-w-2xl text-white/70">
              We remove friction and create momentum. Here’s how we help you win
              in Saudi—without drowning you in the paperwork details.
            </p>
          </Item>
        </div>

        {/* Cards */}
        <Stagger delay={0.08}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Item>
              <Card
                icon={<Landmark className="size-5" />}
                title="Set a Strong Foundation"
                desc="We stabilize your entry from day one—built on the right legal, operational, and regulatory footing."
              />
            </Item>
            <Item>
              <Card
                icon={<Compass className="size-5" />}
                title="Navigate with Confidence"
                desc="From first decisions to daily execution, we reduce uncertainty and give you clarity at every step."
              />
            </Item>
            <Item>
              <Card
                icon={<Handshake className="size-5" />}
                title="Handle the Heavy Lifting"
                desc="You focus on strategy and growth—we take on the operational grind so you never get stuck."
              />
            </Item>
            <Item>
              <Card
                icon={<Layers3 className="size-5" />}
                title="Align with Local Realities"
                desc="We localize your org, people practices, and decision flows to what actually works in Saudi."
              />
            </Item>
            <Item>
              <Card
                icon={<ListChecks className="size-5" />}
                title="Operate with Precision"
                desc="Timelines, workflows, and systems—engineered for predictability so you’re never reacting blindly."
              />
            </Item>
            <Item>
              <Card
                icon={<Rocket className="size-5" />}
                title="Build for Scale"
                desc="We think beyond setup. We remove friction now so you can move faster later."
              />
            </Item>
          </div>
        </Stagger>
      </div>
    </MotionSection>
  );
}

/* -------- subcomponents -------- */

function Card({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeInUp}
      className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/0 p-6 transition will-change-transform hover:border-white/35 hover:bg-white/[0.03]"
      whileHover={
        prefersReducedMotion
          ? undefined
          : { y: -4, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }
      }
    >
      {/* soft glow on hover (cheap radial) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_-10%,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <div className="flex items-center gap-3">
        <motion.span
          aria-hidden
          className="grid size-9 place-items-center rounded-lg bg-white text-black"
          whileHover={
            prefersReducedMotion ? undefined : { scale: 1.05, rotate: 1.5 }
          }
          transition={{
            type: 'spring',
            stiffness: 220,
            damping: 18,
            mass: 0.6,
          }}
        >
          {icon}
        </motion.span>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{desc}</p>

      {/* subtle bottom border sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </motion.div>
  );
}
