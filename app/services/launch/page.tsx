// app/services/launch/page.tsx
import type { Metadata } from 'next';
import {
  Rocket,
  Landmark,
  FileBadge,
  Handshake,
  CreditCard,
  ShieldCheck,
  IdCard,
  Stamp,
  CheckCircle2,
  Mail,
  ArrowRight,
  Sparkles,
  Globe,
  CircleDollarSign,
  BookOpen,
  Calendar,
} from 'lucide-react';
import ContactButton from '@/components/ContactButton';
import LaunchFaq from '@/components/LaunchFaq';

export const metadata: Metadata = {
  title: 'Launch in Saudi – Market Entry & Setup | CataLyft',
  description:
    'Straightforward market entry for Saudi Arabia. We guide attestations, secure the MISA license, issue your CR & Articles, onboard your General Manager, open a bank account, and register the right government portals.',
};

export default function LaunchPage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* HERO */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest">
            <Rocket className="size-3.5" />
            Launch Track
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
            Launch in Saudi, engineered to work.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            A simple, guided path to set up your Saudi presence—so your team can
            focus on customers, not process.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#included"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              See what’s included
              <ArrowRight className="size-4" />
            </a>
          </div>

          <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-2 text-sm text-white/70 sm:grid-cols-3">
            <li className="flex items-center justify-center gap-2">
              <CheckCircle2 className="size-4" /> Clear steps, start to finish
            </li>
            <li className="flex items-center justify-center gap-2">
              <CheckCircle2 className="size-4" /> One team, one tracker
            </li>
            <li className="flex items-center justify-center gap-2">
              <CheckCircle2 className="size-4" /> Day-one readiness
            </li>
          </ul>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section id="who" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          Who it’s for
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Built for teams that want momentum, not drag.
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <WhoCard
            icon={<Landmark className="size-5" />}
            title="Foreign companies opening in KSA"
            desc="Branch or new entity—set up correctly from day one."
          />
          <WhoCard
            icon={<Handshake className="size-5" />}
            title="Saudi partners & founder-led teams"
            desc="Co-owned or Saudi-owned teams that want a compliant, scalable foundation fast."
          />
          <WhoCard
            icon={<ShieldCheck className="size-5" />}
            title="Operators who want clarity"
            desc="You want plain language, clear owners, and visible next steps."
          />
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section id="included" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          What’s included
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Everything you need to stand up in Saudi—without the guesswork.
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<Stamp className="size-5" />}
            title="Document attestations (guidance)"
            desc="We give you the exact templates, pre-fill them correctly, and show you what to attest in your home country. Your team completes the local attestation step."
          />
          <Feature
            icon={<ShieldCheck className="size-5" />}
            title="MISA license (foreign investment)"
            desc="We submit all the required attested documents to the Ministry of investment and issue your MISA license. We deal with all and any governmental blockers"
          />
          <Feature
            icon={<FileBadge className="size-5" />}
            title="CR & Articles of Association"
            desc="We draft your Articles with the activities you choose and issue the Commercial Registration (CR) under the right legal form."
          />
          <Feature
            icon={<IdCard className="size-5" />}
            title="General Manager onboarding"
            desc="End-to-end support from GM visa issuance to iqama, plus registering the GM in Saudi systems so they can act on behalf of the company."
          />
          <Feature
            icon={<CreditCard className="size-5" />}
            title="Corporate bank account support"
            desc="We recommend suitable banks, prepare the application pack, coordinate meetings, and assist the GM through account opening."
          />
          <Feature
            icon={<ShieldCheck className="size-5" />}
            title="Government portal registrations"
            desc="We register your company on the key compliance portals, create the right access, and hand over credentials securely."
          />
        </div>
      </section>

      {/* STARTUPS FOCUS (unchanged, kept concise) */}
      <section id="startups" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          Startups
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Startup enablement: incentives, programs, and a cost-aware path.
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700">
          We work with global startups that want to enter Saudi while
          controlling burn. We map eligibility for relevant programs, explain
          how they work, and prepare strong application packs. Where helpful, we
          make introductions that can reduce friction or cost. Decisions are
          made by issuing bodies—we never promise awards, but we give you the
          clearest path to a solid application.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <StartupsCard
            icon={<Sparkles className="size-5" />}
            title="Eligibility map"
            desc="Which grants, incentives, and programs apply to your stage and model."
          />
          <StartupsCard
            icon={<BookOpen className="size-5" />}
            title="Program briefings"
            desc="Plain-English outlines, evidence needed, and typical timelines."
          />
          <StartupsCard
            icon={<CircleDollarSign className="size-5" />}
            title="Application packs"
            desc="The documents and narratives programs expect—tailored to your case."
          />
          <StartupsCard
            icon={<Handshake className="size-5" />}
            title="Introductions where useful"
            desc="Warm intros when there’s clear fit and value on both sides."
          />
          <StartupsCard
            icon={<Globe className="size-5" />}
            title="Runway plan"
            desc="Cost-aware sequencing of setup, first hires, vendors, and GTM."
          />
          <StartupsCard
            icon={<Calendar className="size-5" />}
            title="Program calendar"
            desc="Keep application windows and decisions on your radar."
          />
        </div>

        <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-xs text-neutral-600">
          We provide guidance, preparation, and introductions. Awards and
          discounts are granted at the discretion of authorities and partners.
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="process" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          How it works
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          A clear, engineered path to launch.
        </h2>

        <ol className="relative mt-10 space-y-8 border-l border-neutral-200 pl-6">
          <Step
            step="Step 01"
            title="Gather & attest your documents"
            desc="We confirm exactly what to prepare and pre-fill the right templates. Your team completes attestation in the home country."
          />
          <Step
            step="Step 02"
            title="Licenses & registrations"
            desc="We secure the Ministry of Investment (MISA) license, draft the Articles of Association, and issue the Commercial Registration (CR)."
          />
          <Step
            step="Step 03"
            title="Operational enablement"
            desc="We onboard your General Manager (visa → iqama), assist with corporate bank account opening, and register your company on the required government portals."
          />
          <Step
            step="Step 04"
            title="Day-one readiness & handover"
            desc="Access, credentials, and a simple runbook so your team can operate with confidence."
          />
        </ol>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          Timeline
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Fastest path to go-live in KSA.
        </h2>

        <div className="mt-8 max-w-3xl rounded-2xl border border-neutral-200 p-6">
          <ul className="list-disc pl-5 text-sm leading-relaxed text-neutral-700">
            <li>
              We map the critical path on day one—no vague steps, no surprises.
            </li>
            <li>
              Authority timing varies; our job is to keep everything moving in
              parallel.
            </li>
            <li>
              You see owners, blockers, and next actions in a single tracker.
            </li>
          </ul>
          <p className="mt-4 text-sm text-neutral-700">
            The result: the quickest compliant route from “decision made” to
            “operating in Saudi,” tailored to your model.
          </p>
        </div>
      </section>

      {/* FAQ (collapsible, tailored to first-time Saudi expansion) */}
      <LaunchFaq />

      {/* FINAL CTA — modal + email fallback */}
      <section id="contact" className="scroll-mt-24 bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to launch with clarity?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Start with a quick discovery. We’ll map your path and give you a
            clear plan.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <ContactButton className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
              <Mail className="size-4" />
              Book a consultation
            </ContactButton>

            <a
              href="mailto:info@catalyft.sa?subject=Catalyft%20Service%20Inquiry"
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

/* Startup cards */
function StartupsCard(props: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-6 transition hover:border-neutral-300">
      <div className="mb-3 grid size-9 place-items-center rounded-lg bg-neutral-100 text-neutral-900">
        {props.icon}
      </div>
      <h3 className="text-lg font-semibold">{props.title}</h3>
      <p className="mt-2 text-sm text-neutral-600">{props.desc}</p>
    </div>
  );
}
