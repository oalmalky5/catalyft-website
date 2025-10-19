// app/services/scale/page.tsx
import type { Metadata } from 'next';
import {
  TrendingUp,
  Layers,
  Puzzle,
  Wrench,
  ListChecks,
  ClipboardList,
  Users2,
  FileCheck2,
  Briefcase,
  Rocket,
  Mail,
} from 'lucide-react';

import ContactButton from '@/components/ContactButton';
import ScaleFaq from '@/components/ScaleFaq'; // create/update as below

export const metadata: Metadata = {
  title: 'Scale in Saudi – Custom Packages or Pay-Per-Service | CataLyft',
  description:
    'Exactly what you need to grow in Saudi: choose a custom package or pay per service. We handle certifications and approvals, customer/vendor onboarding, hiring support, and the operating rhythm that keeps growth on track.',
};

export default function ScalePage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* HERO */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest">
            <TrendingUp className="size-3.5" />
            Scale Track
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
            Scale in Saudi, your way.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Choose a custom package built around your priorities—or pick
            specific services as you need them. We plug into your team and drive
            the next set of wins.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ContactButton className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
              Book a consultation
            </ContactButton>

            <a
              href="mailto:info@catalyft.sa?subject=Scale%20Track%20Inquiry"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <Mail className="size-4" />
              info@catalyft.sa
            </a>
          </div>

          <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-2 text-sm text-white/70 sm:grid-cols-3">
            <li className="flex items-center justify-center gap-2">
              <Rocket className="size-4" /> Custom bundles
            </li>
            <li className="flex items-center justify-center gap-2">
              <Puzzle className="size-4" /> Pay-per-service
            </li>
            <li className="flex items-center justify-center gap-2">
              <ListChecks className="size-4" /> Outcome-driven delivery
            </li>
          </ul>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section id="offer" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          What we offer
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Exactly what you need — bundle or pay per service.
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<Layers className="size-5" />}
            title="Custom package"
            desc="We shape a focused scope after a short discovery, then plug in with named owners, timelines, and visible progress."
          />
          <Feature
            icon={<Puzzle className="size-5" />}
            title="Pay-per-service"
            desc="Pick specific actions as you need them — fast turnarounds, no long commitment."
          />
          <Feature
            icon={<FileCheck2 className="size-5" />}
            title="Certifications & approvals"
            desc="We prepare the packs and submit the approvals you need to deliver for customers or sectors — tracked to decision."
          />
          <Feature
            icon={<Briefcase className="size-5" />}
            title="Customer & vendor onboarding"
            desc="We assemble, submit, and follow up on onboarding packs for key accounts and platforms — so revenue isn’t waiting on paperwork."
          />
          <Feature
            icon={<Users2 className="size-5" />}
            title="Hiring support & HR ramp"
            desc="We set up clean employment docs, help you onboard the first hires, and get the day-to-day people ops flowing."
          />
          <Feature
            icon={<ClipboardList className="size-5" />}
            title="Operating rhythm"
            desc="A simple tracker and regular reviews: what’s done, what’s next, and what we need from you — in plain English."
          />
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
          <p className="text-sm text-neutral-700">
            Start small or go deep. We can run a 30–90 day sprint for quick
            wins, or a longer package when you want steady hands on the wheel.
          </p>
        </div>
      </section>

      {/* EXAMPLES (PRACTICAL, JARGON-FREE) */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="rounded-2xl border border-neutral-200 p-6">
          <h3 className="text-lg font-semibold">Examples of what we handle</h3>
          <ul className="mt-3 grid list-disc gap-2 pl-5 text-sm text-neutral-700 md:grid-cols-2">
            <li>Customer or sector approvals needed to deliver</li>
            <li>Onboarding to key accounts and marketplaces</li>
            <li>Employment offers, contracts, and first-hire onboarding</li>
            <li>Supplier paperwork and simple vendor enablement</li>
            <li>Proposal support and local documentation</li>
            <li>Light process setup so work flows without chasing</li>
          </ul>
        </div>
      </section>

      {/* FAQ (collapsible client component) */}
      <ScaleFaq />

      {/* FINAL CTA — modal + email fallback */}
      <section id="contact" className="scroll-mt-24 bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to scale with a package that fits?
          </h2>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <ContactButton className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
              Book a consultation
            </ContactButton>

            <a
              href="mailto:info@catalyft.sa?subject=Scale%20Track%20Inquiry"
              className="text-sm text-white/70 underline underline-offset-4 hover:text-white"
            >
              or email us: info@catalyft.sa
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- small server subcomponents ---------- */

function Feature(props: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group rounded-2xl border border-neutral-200 p-6 transition hover:border-neutral-300">
      <div className="mb-3 grid size-9 place-items-center rounded-lg bg-black text-white">
        {props.icon}
      </div>
      <h3 className="text-lg font-semibold">{props.title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{props.desc}</p>
    </div>
  );
}

function Step(props: { step: string; title: string; desc: string }) {
  return (
    <li className="ml-2">
      <div className="absolute -left-[9px] mt-1.5 size-4 rounded-full border border-neutral-300 bg-white" />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
        {props.step}
      </p>
      <h3 className="mt-1 text-lg font-semibold">{props.title}</h3>
      <p className="mt-1 text-sm text-neutral-600">{props.desc}</p>
    </li>
  );
}
