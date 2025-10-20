// app/components/About.tsx
'use client';

import { motion } from 'framer-motion';
import { MotionSection, Stagger, Item, fadeIn } from '@/components/anim';

export default function About() {
  return (
    <MotionSection
      id="about"
      aria-labelledby="about-title"
      className="bg-white scroll-mt-20"
      once
      amount={0.25}
    >
      {/* About title */}
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-8 text-center">
        <Item variants={fadeIn}>
          <p
            id="about-title"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500"
          >
            About
          </p>
        </Item>
      </div>

      {/* Brand traits (with animated vertical dividers on md+) */}
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        {/* Divider 1 */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-1/3 hidden w-px -translate-x-1/2 bg-neutral-200 md:block"
          initial={{ opacity: 0, scaleY: 0.7, transformOrigin: 'center top' }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
        />
        {/* Divider 2 */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-2/3 hidden w-px -translate-x-1/2 bg-neutral-200 md:block"
          initial={{ opacity: 0, scaleY: 0.7, transformOrigin: 'center top' }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.12 }}
        />

        <Stagger delay={0.08}>
          <div className="grid gap-12 md:grid-cols-3">
            <Item>
              <Trait
                title="Precise"
                kicker="Clarity that builds trust."
                desc="Detail-oriented and exact. Clear timelines, scope, and ownership so everyone knows what’s next."
              />
            </Item>

            <Item>
              <Trait
                title="Engineered"
                kicker="Systems, not guesswork."
                desc="We structure market entry like a dependable system — robust processes with measurable outcomes."
              />
            </Item>

            <Item>
              <Trait
                title="Forward-moving"
                kicker="Momentum by design."
                desc="Active partnership and clear next steps to expand. We keep progress unblocked without over-promising."
              />
            </Item>
          </div>
        </Stagger>
      </div>
    </MotionSection>
  );
}

/* Trait stays presentational; animation comes from Item wrappers */
function Trait({
  title,
  kicker,
  desc,
}: {
  title: string;
  kicker: string;
  desc: string;
}) {
  return (
    <div className="mx-auto max-w-xl text-center md:text-left">
      <div className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-700">
        {kicker}
      </div>
      <h3 className="text-2xl font-bold text-neutral-900 md:text-3xl">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
        {desc}
      </p>
    </div>
  );
}
