import type { Metadata } from 'next';
import {
  Building2,
  ShieldCheck,
  Landmark,
  Briefcase,
  ClipboardList,
  Users2,
  FileCheck2,
  ArrowRight,
  Mail,
  CheckCircle2,
  Globe2,
} from 'lucide-react';

import ContactButton from '@/components/ContactButton';
import RHQFaq from '@/components/RHQFaq';

export const metadata: Metadata = {
  title: 'RHQ in Saudi Arabia — Licensing & Operations Partner | CataLyft',
  description:
    'End-to-end Regional Headquarters (RHQ) setup and operations in Saudi Arabia: eligibility, licensing, staffing plan, governance, and the operating cadence to keep your RHQ compliant and effective.',
};

export default function RHQPage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* HERO */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest">
            <Globe2 className="size-3.5" />
            RHQ Service
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
            Establish & Operate your Regional HQ in Saudi Arabia
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            We take your RHQ from decision to day-to-day operation: eligibility,
            licensing, staffing plan, governance, reporting, and the rhythms
            that keep you compliant and effective across the region.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ContactButton className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
              Book a consultation
            </ContactButton>

            <a
              href="mailto:info@catalyft.sa?subject=RHQ%20in%20Saudi%20Inquiry"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <Mail className="size-4" />
              info@catalyft.sa
            </a>
          </div>

          <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-2 text-sm text-white/70 sm:grid-cols-3">
            <li className="flex items-center justify-center gap-2">
              <CheckCircle2 className="size-4" /> End-to-end licensing & setup
            </li>
            <li className="flex items-center justify-center gap-2">
              <CheckCircle2 className="size-4" /> Staffing & governance
              activation
            </li>
            <li className="flex items-center justify-center gap-2">
              <CheckCircle2 className="size-4" /> Ongoing operations &
              compliance
            </li>
          </ul>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          Who it’s for
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Multinationals centralizing real regional leadership in Riyadh.
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <WhoCard
            icon={<Building2 className="size-5" />}
            title="Regional leadership & decision-making"
            desc="Companies moving regional management and support functions into a single Riyadh headquarters—not just a representative office or branch."
          />
          <WhoCard
            icon={<Landmark className="size-5" />}
            title="Access to strategic programs & contracts"
            desc="Organizations that benefit from having an RHQ presence activated in KSA to support eligibility and positioning with major buyers and public entities."
          />
          <WhoCard
            icon={<Users2 className="size-5" />}
            title="Structured growth with accountability"
            desc="Groups ready to meet RHQ activation requirements—functions, staffing, and reporting—and who want a clear operating cadence from day one."
          />
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="offer" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          What we do
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          From license to live operations—one partner.
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<ShieldCheck className="size-5" />}
            title="Eligibility & pathway mapping"
            desc="We validate eligibility, select the right RHQ structure, and map the exact route to license issuance and activation."
          />
          <Feature
            icon={<FileCheck2 className="size-5" />}
            title="RHQ license & corporate setup"
            desc="We prepare, submit, and track your RHQ license, then complete core registrations and corporate banking so you can operate."
          />
          <Feature
            icon={<ClipboardList className="size-5" />}
            title="Staffing plan & activation"
            desc="We define required functions and headcount, onboard executives, and sequence first hires with compliant documentation."
          />
          <Feature
            icon={<Briefcase className="size-5" />}
            title="Governance & reporting"
            desc="We implement a simple operating cadence, board/committee basics, and the reporting your RHQ must keep current."
          />
          <Feature
            icon={<Landmark className="size-5" />}
            title="Approvals & attestations"
            desc="We handle the letters, attestations, and confirmations authorities and counterparties expect."
          />
          <Feature
            icon={<Users2 className="size-5" />}
            title="Go-forward operations"
            desc="We run renewals, evidence packs, and people-ops rhythms—or hand over cleanly to your in-house team."
          />
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
          <p className="text-sm text-neutral-700">
            Program specifics can evolve. We keep your plan aligned with the
            latest rules while staying practical and executive-friendly.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="process" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          How it works
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          A clear, executive-friendly path.
        </h2>

        <ol className="relative mt-10 space-y-8 border-l border-neutral-200 pl-6">
          <Step
            step="Step 01"
            title="Decision & eligibility"
            desc="We confirm your multinational footprint and align on the RHQ route, structure, and initial document set."
          />
          <Step
            step="Step 02"
            title="License & registrations"
            desc="We prepare and submit the RHQ license, then complete essential registrations and banking so you can operate."
          />
          <Step
            step="Step 03"
            title="Activation & staffing"
            desc="We onboard executives, stand up the required functions, and sequence early hires to hit activation timelines."
          />
          <Step
            step="Step 04"
            title="Operating cadence"
            desc="We implement a simple governance and reporting rhythm—owners, dates, deliverables—so nothing slips."
          />
        </ol>
      </section>

      {/* TIMELINE PITCH */}
      <section id="timeline" className="mx-auto max-w-6xl px-6 pb-8">
        <div className="rounded-2xl border border-neutral-200 p-6">
          <h3 className="text-lg font-semibold">
            Fastest path, zero guesswork
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            RHQ timelines vary by company model and responsiveness. We run an
            executive-grade project plan, keep owners and decisions visible, and
            move each step the moment inputs are ready. The result: the fastest
            compliant path your case allows.
          </p>
        </div>
      </section>

      {/* FAQ (collapsible client component—no external links shown) */}
      <RHQFaq />

      {/* FINAL CTA (anchor for site nav) */}
      <section id="contact" className="scroll-mt-24 bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to stand up your RHQ in Saudi?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Book a quick consult. We’ll map eligibility, scope the plan, and
            start execution.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <ContactButton className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
              Book a consultation
            </ContactButton>

            <a
              href="mailto:info@catalyft.sa?subject=RHQ%20in%20Saudi%20Inquiry"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <Mail className="size-4" />
              info@catalyft.sa
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- small server subcomponents ---------- */
function WhoCard(props: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-6">
      <div className="mb-3 grid size-9 place-items-center rounded-lg bg-neutral-100 text-neutral-900">
        {props.icon}
      </div>
      <h3 className="text-lg font-semibold">{props.title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{props.desc}</p>
    </div>
  );
}

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
