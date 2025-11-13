// components/CTA.tsx
'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Mail } from 'lucide-react';
import ContactButton from '@/components/ContactButton';
import { MotionSection, Item, fadeIn, fadeInUp } from '@/components/anim';

export default function CTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionSection
      id="contact"
      className="relative bg-black px-6 py-20 text-white scroll-mt-20 overflow-hidden"
      aria-labelledby="cta-title"
      once
      amount={0.25}
    >
      {/* Soft background glow (very light, fades in) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_50%_0%,rgba(255,255,255,0.08),transparent_60%)]" />
      </motion.div>

      <div className="relative mx-auto max-w-3xl text-center">
        <Item variants={fadeIn}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
            Get in Touch
          </p>
        </Item>

        <Item variants={fadeInUp}>
          <h2
            id="cta-title"
            className="mt-3 text-3xl font-bold tracking-tight md:text-4xl"
          >
            Ready to Launch Your Venture.
          </h2>
        </Item>

        <Item variants={fadeInUp}>
          <p className="mt-4 text-base text-white/70 md:text-lg">
            Book a free discovery call. We’ll answer your questions, map your
            expansion path, and help you plan with clarity.
          </p>
        </Item>

        <Item variants={fadeInUp} className="mt-8">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {/* Primary: open the modal form */}
            <motion.div
              whileHover={
                prefersReducedMotion ? undefined : { y: -2, scale: 1.01 }
              }
              whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            >
              <ContactButton className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
                <motion.span
                  aria-hidden
                  animate={
                    prefersReducedMotion ? undefined : { rotate: [0, -8, 0] }
                  }
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : { duration: 2.2, repeat: Infinity, repeatDelay: 3 }
                  }
                  className="grid"
                >
                  <Mail className="size-4" />
                </motion.span>
                Book a discovery call
              </ContactButton>
            </motion.div>

            {/* Optional secondary: plain mailto fallback */}
            <a
              href="mailto:hello@catalyft.sa?subject=Catalyft%20Website%20Inquiry"
              className="text-sm text-white/70 underline underline-offset-4 transition hover:text-white"
            >
              or email us: info@catalyft.sa
            </a>
          </div>
        </Item>

        <Item variants={fadeIn} className="mt-6">
          <p className="text-sm text-white/50">
            We typically respond within 24 hours.
          </p>
        </Item>

        <Item variants={fadeIn} className="mt-2">
          <p className="text-xs text-white/40">
            By contacting us, you agree to our privacy policy. Your information
            is kept strictly confidential and will never be shared.
          </p>
        </Item>
      </div>
    </MotionSection>
  );
}
