// app/about/page.tsx
import {
  CheckCircle2,
  Compass,
  Building2,
  ShieldCheck,
  Users,
  Workflow,
  Rocket,
  Gauge,
  Landmark,
} from 'lucide-react';

export const metadata = {
  title: 'About | CataLyft',
  description:
    'CataLyft is the structural framework and growth catalyst that lifts, aligns, and launches businesses into the Saudi market.',
};

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-sm uppercase tracking-widest text-neutral-500">
          About
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
          CataLyft | كاتاليفت
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-neutral-600">
          We’re the structural framework and growth catalyst that helps
          companies <span className="font-medium">lift, align, and launch</span>{' '}
          into the Saudi market. Our job is to remove friction — from licensing
          and entity setup to GRO/PRO, HR, and compliance — so your team can
          focus on product, customers, and growth.
        </p>
      </section>

      {/* Brand pillars */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-8">
            <h3 className="text-xl font-semibold">Precise</h3>
            <p className="mt-3 text-neutral-600">
              Detail‑oriented and exact. Clear timelines, clear scope, clear
              ownership. Precision builds the trust we work with.
            </p>
          </div>

          <div className="rounded-2xl bg-black p-8 text-white">
            <h3 className="text-xl font-semibold">Engineered</h3>
            <p className="mt-3 text-white/80">
              Structured, reliable, and methodical. We approach market entry
              like a system — with robust processes and measurable outcomes.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-8">
            <h3 className="text-xl font-semibold">Forward‑moving</h3>
            <p className="mt-3 text-neutral-600">
              Active partnership and clear next steps. We create momentum and
              keep you progressing without over‑promising.
            </p>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What We Do
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
            A full stack of market‑entry and scale services designed for KSA.
            Pick a single module or run the end‑to‑end track.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<Landmark className="size-5" />}
            title="Government Licensing (MISA)"
            desc="End‑to‑end handling of documentation, submissions, and follow‑ups — with predictable timelines."
          />
          <Feature
            icon={<Building2 className="size-5" />}
            title="Entity Setup"
            desc="Legal structuring, CR issuance, bank account support, and policy templates to get you operational."
          />
          <Feature
            icon={<Users className="size-5" />}
            title="GRO / PRO"
            desc="On‑the‑ground government relations and process orchestration so nothing blocks execution."
          />
          <Feature
            icon={<Workflow className="size-5" />}
            title="HR & Payroll"
            desc="Qiwa, GOSI, Mudad setups, compliant contracts, and onboarding workflows aligned to local norms."
          />
          <Feature
            icon={<ShieldCheck className="size-5" />}
            title="Compliance"
            desc="Policy pack and operating guardrails covering labor law, invoicing, and ongoing obligations."
          />
          <Feature
            icon={<Compass className="size-5" />}
            title="Go‑to‑Market Operations"
            desc="Vendor onboarding, Etimad registration, and operational rhythms tailored for Saudi customers."
          />
        </div>
      </section>

      {/* How we work */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            How We Work
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
            A structured path that creates momentum and reduces risk — from day
            one to scale.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Step
            step="01"
            title="Lift"
            icon={<Gauge className="size-5" />}
            points={[
              'Kickoff & requirements map',
              'Risk + dependency scan',
              'Critical path & timeline',
            ]}
          />
          <Step
            step="02"
            title="Align"
            icon={<CheckCircle2 className="size-5" />}
            points={[
              'Licensing & entity setup',
              'Compliance baseline & policies',
              'Ops stack and HR workflows',
            ]}
          />
          <Step
            step="03"
            title="Launch"
            icon={<Rocket className="size-5" />}
            points={[
              'GRO/PRO execution',
              'Vendor onboarding & GTM ops',
              'Operate and iterate with metrics',
            ]}
          />
        </div>
      </section>

      {/* Metrics / proof band */}
      <section className="bg-neutral-950">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-16 text-white sm:grid-cols-3">
          <Stat number="4–8 wks" label="Typical MISA licensing window" />
          <Stat number="20+" label="Operational checklists & templates" />
          <Stat number="End‑to‑end" label="From licensing to GTM ops" />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h3 className="text-2xl font-semibold md:text-3xl">
          Ready to build in Saudi — with precision and momentum?
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
          Let’s outline your path to launch. We’ll map the work, de‑risk the
          timeline, and get your foundation stable.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="/contact"
            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Book a call
          </a>
          <a
            href="/products"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
          >
            Explore services
          </a>
        </div>
      </section>
    </main>
  );
}

/* ---------- tiny components ---------- */

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group rounded-2xl border p-6 transition hover:-translate-y-0.5 hover:shadow-sm">
      <div className="flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-lg bg-black text-white">
          {icon}
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-neutral-600">{desc}</p>
    </div>
  );
}

function Step({
  step,
  title,
  icon,
  points,
}: {
  step: string;
  title: string;
  icon: React.ReactNode;
  points: string[];
}) {
  return (
    <div className="rounded-2xl border p-6">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold tracking-widest text-neutral-500">
          STEP {step}
        </span>
        <span className="grid size-9 place-items-center rounded-lg bg-black text-white">
          {icon}
        </span>
      </div>
      <h4 className="mt-3 text-xl font-semibold">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-neutral-600">
        {points.map((p, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 size-1.5 rounded-full bg-neutral-800" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold">{number}</div>
      <div className="mt-2 text-sm text-white/70">{label}</div>
    </div>
  );
}
