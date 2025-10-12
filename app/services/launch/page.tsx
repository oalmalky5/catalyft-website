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
import LaunchFaq from '../../../components/LaunchFaq'; // or '@/components/LaunchFaq' if using aliases
import ContactButton from '@/components/ContactButton';

export const metadata: Metadata = {
  title: 'Launch in Saudi – Market Entry & Setup | CataLyft',
  description:
    'Engineered market entry for Saudi Arabia. Entity or branch setup, approvals, banking coordination, and day-one readiness delivered on a predictable timeline.',
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
            We structure your market entry with clear decisions, predictable
            timelines, and day-one operational readiness so your team can focus
            on customers, not paperwork.
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
              <CheckCircle2 className="size-4" /> Entity or branch setup
            </li>
            <li className="flex items-center justify-center gap-2">
              <CheckCircle2 className="size-4" /> Predictable timelines
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
            desc="Branches or new entities, set up with the right approvals and structure from day one."
          />
          <WhoCard
            icon={<Handshake className="size-5" />}
            title="Saudi partners & founder-led teams"
            desc="Saudi-owned teams or co-owned entities that want a compliant, scalable foundation fast."
          />
          <WhoCard
            icon={<ShieldCheck className="size-5" />}
            title="Ops-minded leaders"
            desc="You want clear owners, tasks, and timing in one place so work keeps moving."
          />
        </div>

        <div className="mt-6 text-sm text-neutral-500">
          <p>
            <span className="font-medium">Note on terminology:</span> “Joint
            venture” usually means a new Saudi entity co-owned by a foreign
            company and a local partner. If that term feels unfamiliar to your
            audience, “Saudi partners & founder-led teams” is simpler and
            clearer.
          </p>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section id="included" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          What’s included
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Everything you need to stand up in Saudi with no guesswork.
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<Stamp className="size-5" />}
            title="Attestations guidance"
            desc="We guide your team on required document attestations in your home country and provide authority-ready templates."
          />
          <Feature
            icon={<ShieldCheck className="size-5" />}
            title="MISA license (guidance + execution)"
            desc="We prepare, submit, and track your MISA application and tell you exactly where founder input is needed."
          />
          <Feature
            icon={<FileBadge className="size-5" />}
            title="CR & Articles of Association"
            desc="We coordinate Commercial Registration and Articles drafting with the right model for your case."
          />
          <Feature
            icon={<IdCard className="size-5" />}
            title="GM onboarding (visa → iqama)"
            desc="From visa application to iqama issuance, we map steps, track progress, and keep documents moving."
          />
          <Feature
            icon={<CreditCard className="size-5" />}
            title="Bank account support"
            desc="We guide bank selection, prepare required packs, and coordinate meetings until the account is opened."
          />
          <Feature
            icon={<ShieldCheck className="size-5" />}
            title="Government portals onboarding"
            desc="Qiwa, GOSI, Muqeem, ZATCA, MISA/Najiz, and optional Etimad. We create accounts, request access, and hand over credentials securely."
          />
        </div>
      </section>

      {/* STARTUPS FOCUS */}
      <section id="startups" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          Startups
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Startup enablement: incentives, programs, and a cost-aware path.
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700">
          We work closely with global startups that want to enter Saudi and keep
          burn under control. We map eligibility for relevant programs, explain
          how they work, and prepare the right application packs. Where
          appropriate, we make introductions to initiatives and partners that
          can reduce setup friction or cost. Program decisions are made by the
          issuing bodies, so we never promise awards, but we do give you the
          clearest path to a strong application.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <StartupsCard
            icon={<Sparkles className="size-5" />}
            title="Eligibility map"
            desc="We assess your model, stage, and footprint against available grants, incentives, and support programs."
          />
          <StartupsCard
            icon={<BookOpen className="size-5" />}
            title="Program briefings"
            desc="Plain-English summaries of what each program offers, who qualifies, evidence needed, and typical timelines."
          />
          <StartupsCard
            icon={<CircleDollarSign className="size-5" />}
            title="Application packs"
            desc="We help assemble the documents, narratives, and forms programs expect, tailored to your case."
          />
          <StartupsCard
            icon={<Handshake className="size-5" />}
            title="Introductions where appropriate"
            desc="Warm intros to relevant initiatives and partners when there is clear fit and value on both sides."
          />
          <StartupsCard
            icon={<Globe className="size-5" />}
            title="Market-entry runway plan"
            desc="Cost-aware sequencing of company setup, first hires, vendors, and go-to-market milestones."
          />
          <StartupsCard
            icon={<Calendar className="size-5" />}
            title="Program calendar"
            desc="A simple tracker for application windows, deliverables, and decision dates so nothing slips."
          />
        </div>

        <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-xs text-neutral-600">
          <p>
            Note: we provide guidance, preparation, and introductions. Awards,
            discounts, and approvals are granted at the discretion of the
            issuing authorities and partners.
          </p>
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
            title="Receive attested parent company documents"
            desc="We guide what to attest and where, making sure all documents meet MISA and MoJ requirements."
          />
          <Step
            step="Step 02"
            title="Filings and approvals"
            desc="We coordinate MISA, CR, and Articles filings, tracking every authority touchpoint along the way."
          />
          <Step
            step="Step 03"
            title="Banking and portals onboarding"
            desc="We help open your corporate bank account and onboard to Qiwa, GOSI, Muqeem, ZATCA, and others."
          />
          <Step
            step="Step 04"
            title="Day-one readiness and handover"
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
          Get your company onboarded in 2 months.
        </h2>

        <div className="mt-8 max-w-2xl rounded-2xl border border-neutral-200 p-6">
          <p className="text-sm leading-relaxed text-neutral-700">
            Most launches complete within 6–8 weeks from kickoff, depending on
            your company model and authority response times. We manage the
            process end to end, keep you informed, and make sure every step
            moves on schedule.
          </p>
        </div>
      </section>

      {/* FAQ (collapsible, client component) */}
      <LaunchFaq />

      {/* FINAL CTA — modal + email fallback */}
      <section id="contact" className="scroll-mt-24 bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to launch with clarity?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Send us a note. Most teams start with a 20-minute discovery so we
            can map your path and timeline.
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
