// app/services/operate/page.tsx
import type { Metadata } from 'next';
import {
  ShieldCheck,
  Building2,
  Users2,
  BadgeCheck,
  Package,
  FileBadge,
  CheckCircle2,
  Mail,
  ArrowRight,
} from 'lucide-react';
import OperateFaq from '../../../components/OperateFaq'; // use '@/components/OperateFaq' if you use path aliases
import ContactButton from '@/components/ContactButton';

export const metadata: Metadata = {
  title:
    'Operate in Saudi – GRO/PRO, HR & Payroll, Vendor Onboarding | CataLyft',
  description:
    'Keep Saudi operations moving: corporate GRO/PRO, HR & payroll workflows, vendor registrations, and third-party approvals. Clear ownership, fast follow-through.',
};

export default function OperatePage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* HERO */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest">
            <ShieldCheck className="size-3.5" />
            Operate Track
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
            Your Saudi operations, uninterrupted.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            We run the boring but critical parts of operating in KSA—GRO/PRO, HR
            & payroll workflows, vendor registrations, and required approvals—so
            your team can focus on growth.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#offer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              See what we run
              <ArrowRight className="size-4" />
            </a>
          </div>

          <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-2 text-sm text-white/70 sm:grid-cols-3">
            <li className="flex items-center justify-center gap-2">
              <CheckCircle2 className="size-4" /> Corporate GRO / PRO
            </li>
            <li className="flex items-center justify-center gap-2">
              <CheckCircle2 className="size-4" /> HR & payroll workflows
            </li>
            <li className="flex items-center justify-center gap-2">
              <CheckCircle2 className="size-4" /> Vendor registrations &
              approvals
            </li>
          </ul>
        </div>
      </section>

      {/* WHAT WE RUN */}
      <section id="offer" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          What we run
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          The core services that keep you compliant and moving.
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<Building2 className="size-5" />}
            title="Corporate GRO Services in KSA"
            desc="Government relations handled with structure and follow-through across MISA, MoJ/Najiz, MLSD/Qiwa, GOSI, Muqeem, and ZATCA touchpoints."
          />
          <Feature
            icon={<Users2 className="size-5" />}
            title="Corporate PRO Services in KSA"
            desc="Labor and ministry submissions, letters, appointments, attestations, and on-time follow-ups—without the back-and-forth."
          />
          <Feature
            icon={<BadgeCheck className="size-5" />}
            title="HR & Payroll Services in KSA"
            desc="Contracts on Qiwa, onboarding/offboarding, WPS payroll run coordination, GOSI updates, and clean records—built for auditability."
          />
          <Feature
            icon={<Package className="size-5" />}
            title="Vendor & Marketplace Registrations"
            desc="We assemble the right packs and submit registrations to your priority customers and platforms, then track to approval."
          />
          <Feature
            icon={<FileBadge className="size-5" />}
            title="Third-Party Approvals"
            desc="Sector or customer approvals that unlock operations. We coordinate the requirements and keep timelines visible."
          />
          <Feature
            icon={<ShieldCheck className="size-5" />}
            title="Simple Ops Reporting"
            desc="A single tracker for owners, tasks, dates, and renewals so nothing slips."
          />
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
          <p className="text-sm text-neutral-700">
            Want the right level of help? We’ll map your needs on a quick call
            and recommend a light, standard, or full package. No pressure—just
            clear options and timelines.
          </p>
        </div>
      </section>

      {/* FAQ (collapsible, client component) */}
      <OperateFaq />

      {/* FINAL CTA — modal + email fallback */}
      <section id="contact" className="scroll-mt-24 bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Keep your Saudi operations running smoothly.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Send us a note and we’ll share the package that fits your stage and
            team.
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
