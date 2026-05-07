// components/CTA.tsx
'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import ContactButton from '@/components/ContactButton';
import { MotionSection, Item, fadeIn, fadeInUp } from '@/components/anim';

export default function CTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <MotionSection
        id="contact"
        className="bg-black px-6 py-16 text-white scroll-mt-20 md:py-20"
        aria-labelledby="cta-title"
        once
        amount={0.25}
      >
        <div className="mx-auto grid max-w-6xl gap-10 border-y border-white/10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Item variants={fadeIn}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                Get in touch
              </p>
            </Item>

            <Item variants={fadeInUp}>
              <h2
                id="cta-title"
                className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl"
              >
                Need help setting up or operating in Saudi Arabia?
              </h2>
            </Item>

            <Item variants={fadeInUp}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                Book a Saudi setup call and we’ll help you clarify the right
                route, key requirements, and next steps.
              </p>
            </Item>
          </div>

          <Item variants={fadeInUp}>
            <div className="lg:ml-auto lg:max-w-sm">
              <motion.div
                whileHover={
                  prefersReducedMotion ? undefined : { y: -2, scale: 1.01 }
                }
                whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
                transition={{
                  duration: 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ContactButton className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 sm:w-auto lg:w-full">
                  Book a Saudi setup call
                  <ArrowRight className="size-4" />
                </ContactButton>
              </motion.div>

              <a
                href="mailto:info@catalyft.sa?subject=Catalyft%20Saudi%20Setup%20Inquiry"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/70 underline underline-offset-4 transition hover:text-white"
              >
                <Mail className="size-4" />
                Or email info@catalyft.sa
              </a>

              <div className="mt-6 grid gap-3 text-sm text-white/55">
                <p>We typically respond within 24 hours.</p>
                <p>Your information stays confidential.</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-white/35">
                <span>Setup route clarity</span>
                <span>Document guidance</span>
                <span>Next-step recommendations</span>
              </div>
            </div>
          </Item>
        </div>
      </MotionSection>

      <footer className="border-t border-white/10 bg-black px-6 py-6 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Image
              src="/catalyft-logo-main-transparent.png"
              alt="Catalyft"
              width={118}
              height={28}
              style={{ width: '118px', height: 'auto' }}
            />
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span>Riyadh, Saudi Arabia</span>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <a
              href="mailto:info@catalyft.sa?subject=Catalyft%20Website%20Inquiry"
              className="transition hover:text-white"
            >
              info@catalyft.sa
            </a>
            <span>© 2026 Catalyft. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
