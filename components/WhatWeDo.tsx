// components/WhatWeDo.tsx
'use client';

import { MotionSection, Item, fadeInUp, fadeIn } from '@/components/anim';

const steps = [
  {
    number: '01',
    title: 'Before setup',
    desc: 'Choose the right Saudi entry route, understand the required documents, and avoid starting with the wrong structure.',
  },
  {
    number: '02',
    title: 'During setup',
    desc: 'Manage MISA licensing, Commercial Registration, constitutional documents, bank setup, and government portal registrations.',
  },
  {
    number: '03',
    title: 'After setup',
    desc: 'Keep the entity active and compliant through HR, payroll, Qiwa, GOSI, Mudad, renewals, and certificates.',
  },
  {
    number: '04',
    title: 'When you start selling',
    desc: 'Prepare for Etimad, customer onboarding, supplier registrations, Arabic documentation, and tender workflows.',
  },
];

export default function WhatWeDo() {
  return (
    <MotionSection
      id="what-we-do"
      className="bg-black text-white scroll-mt-20"
      once
      amount={0.25}
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-8 max-w-3xl">
          <Item variants={fadeIn}>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              Where Catalyft helps
            </h2>
          </Item>
          <Item variants={fadeInUp}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              From the first setup decision to day-to-day operating readiness,
              we support the practical work needed to establish and run a Saudi
              entity.
            </p>
          </Item>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {steps.map(({ number, title, desc }) => (
            <article
              key={number}
              className="group h-full rounded-2xl border border-white/18 bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.055]"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-base font-semibold tracking-[0.2em] text-white/58">
                  {number}
                </span>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-white/68 md:text-base">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
