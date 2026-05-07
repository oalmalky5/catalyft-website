// app/components/About.tsx
'use client';

import { Compass, FileSearch, Workflow } from 'lucide-react';
import { MotionSection, Stagger, Item } from '@/components/anim';

const cards = [
  {
    icon: Compass,
    title: 'The right setup route',
    desc: 'Branch, LLC, RHQ, or another suitable structure. We help you understand what fits your ownership, activity, hiring plan, and Saudi revenue model.',
  },
  {
    icon: FileSearch,
    title: 'The actual process',
    desc: 'What needs to happen first, what can run in parallel, which documents need attestation, and where government or banking delays usually happen.',
  },
  {
    icon: Workflow,
    title: 'The full operating picture',
    desc: 'Setup is only the first step. We map what comes after: bank account, address, portals, HR, payroll, renewals, Etimad, and compliance responsibilities.',
  },
];

export default function About() {
  return (
    <MotionSection
      id="about"
      aria-labelledby="about-title"
      className="bg-white scroll-mt-20"
      once
      amount={0.25}
    >
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-16 md:pt-14 md:pb-20">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p
              id="about-title"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500"
            >
              Before you start
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-neutral-950 md:text-5xl">
              Before you start, get the full picture
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
            Saudi market entry has a lot of moving parts. Before you commit to
            a setup route, we help you understand what needs to happen, what can
            slow things down, and what your team needs to prepare.
          </p>
        </div>

        <Stagger delay={0.08}>
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
            {cards.map(({ icon: Icon, title, desc }) => (
              <Item key={title} className="h-full">
                <article className="h-full rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition hover:-translate-y-0.5 hover:border-neutral-300 hover:bg-white hover:shadow-sm">
                  <span className="grid size-9 place-items-center rounded-lg bg-black text-white">
                    <Icon className="size-4" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-neutral-950">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                    {desc}
                  </p>
                </article>
              </Item>
            ))}
          </div>
        </Stagger>
      </div>
    </MotionSection>
  );
}
