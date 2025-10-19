import type { Metadata } from 'next';
import {
  FileText,
  Target,
  Search,
  ListChecks,
  Presentation,
  FolderCheck,
  Users2,
  CheckCircle2,
  Mail,
  Globe2,
} from 'lucide-react';

import ContactButton from '@/components/ContactButton';
import EtimadFaq from '@/components/EtimadFaq';

export const metadata: Metadata = {
  title: 'Etimad Enablement — End-to-End Onboarding & Bid Support | CataLyft',
  description:
    'Full Etimad onboarding and hands-on enablement: account setup, working sessions on finding and qualifying tenders, compliant submissions, proposal best practices, timelines, and procurement know-how.',
};

export default function EtimadPage() {
  return (
    <main className="bg-white text-neutral-900">
      {/* HERO */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-widest">
            <Globe2 className="size-3.5" />
            Etimad Service
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-6xl">
            Get your team winning-ready on Etimad.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            We don’t stop at registration. We teach your team how to find the
            right tenders, qualify fast, prepare compliant bids, and submit on
            time—with clear checklists and working sessions that stick.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ContactButton className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
              Book a consultation
            </ContactButton>

            <a
              href="mailto:info@catalyft.sa?subject=Etimad%20Enablement%20Inquiry"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <Mail className="size-4" />
              info@catalyft.sa
            </a>
          </div>

          <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-2 text-sm text-white/70 sm:grid-cols-3">
            <li className="flex items-center justify-center gap-2">
              <CheckCircle2 className="size-4" /> Full onboarding & access
            </li>
            <li className="flex items-center justify-center gap-2">
              <CheckCircle2 className="size-4" /> Hands-on bid workflows
            </li>
            <li className="flex items-center justify-center gap-2">
              <CheckCircle2 className="size-4" /> Proposal reviews & best
              practices
            </li>
          </ul>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="offer" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          What we do
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          From zero to confident on Etimad.
        </h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            icon={<FolderCheck className="size-5" />}
            title="Full onboarding & account setup"
            desc="We register your company, set the right roles and permissions, and hand over secure credentials with a simple runbook."
          />
          <Feature
            icon={<Search className="size-5" />}
            title="Finding & qualifying tenders"
            desc="Working sessions on where to look, how to filter, what to ignore, and quick go/no-go rules so your team doesn’t waste time."
          />
          <Feature
            icon={<ListChecks className="size-5" />}
            title="Compliance & documentation"
            desc="Exactly what supporting documents are usually required, how to prepare them, and the evidence pack reviewers expect."
          />
          <Feature
            icon={<Presentation className="size-5" />}
            title="Proposal structure & best practices"
            desc="How to shape technical and commercial responses, highlight differentiators, and avoid common rejection triggers."
          />
          <Feature
            icon={<FileText className="size-5" />}
            title="Submission workflow & timelines"
            desc="We walk your team through the submission steps, timelines, and internal checkpoints so nothing slips the deadline."
          />
          <Feature
            icon={<Target className="size-5" />}
            title="Reviews & feedback loops"
            desc="We review draft submissions, give actionable edits, and set up a repeatable internal process for the next tenders."
          />
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
          <p className="text-sm text-neutral-700">
            Decisions and awards are made by the issuing bodies. Our job is to
            make your bid compliant, on-time, and stronger—every single time.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="process" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          How it works
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          A clear path to bidding confidently.
        </h2>

        <ol className="relative mt-10 space-y-8 border-l border-neutral-200 pl-6">
          <Step
            step="Step 01"
            title="Access & roles"
            desc="We create your Etimad account, set company roles and user permissions, and confirm secure access."
          />
          <Step
            step="Step 02"
            title="Readiness pack"
            desc="We assemble the core documentation (company info, authorizations, certificates) you’ll reuse across bids."
          />
          <Step
            step="Step 03"
            title="Working sessions"
            desc="Hands-on sessions: finding tenders, quick qualification, proposal structure, and submission flow."
          />
          <Step
            step="Step 04"
            title="Live submissions"
            desc="We guide your first submissions end-to-end, review drafts, and set the internal cadence for the next ones."
          />
        </ol>
      </section>

      {/* OUTCOMES */}
      <section id="outcomes" className="mx-auto max-w-6xl px-6 pb-8">
        <div className="rounded-2xl border border-neutral-200 p-6">
          <h3 className="text-lg font-semibold">What you leave with</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-700">
            A fully set up Etimad account, a trained team that knows where to
            look and how to qualify, reusable document packs and templates, a
            proposal playbook, and a submission rhythm your team can repeat
            without hand-holding.
          </p>
        </div>
      </section>

      {/* FAQ (collapsible, client component) */}
      <EtimadFaq />

      {/* FINAL CTA (anchor for site nav on services pages) */}
      <section id="contact" className="scroll-mt-24 bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to compete on Etimad?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Book a quick consult. We’ll check readiness, set up your access, and
            start the working sessions.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <ContactButton className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200">
              Book a consultation
            </ContactButton>

            <a
              href="mailto:info@catalyft.sa?subject=Etimad%20Enablement%20Inquiry"
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
