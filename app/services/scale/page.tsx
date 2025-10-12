// app/services/scale/page.tsx
import type { Metadata } from 'next';
import {
  TrendingUp,
  Layers,
  Puzzle,
  Wrench,
  ListChecks,
  Search,
  FileText,
  Target,
  Handshake,
  CheckCircle2,
  Mail,
  ArrowRight,
} from 'lucide-react';
import ScaleFaq from '../../../components/ScaleFaq'; // or '@/components/ScaleFaq' if using aliases
import ContactButton from '@/components/ContactButton';

export const metadata: Metadata = {
  title: 'Scale in Saudi – Custom Packages & Pay-Per-Service | CataLyft',
  description:
    'Exactly what you need to scale in Saudi: bundle a custom package or use pay-per-service. Deep Etimad enablement from account creation to hands-on bid workflows.',
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
            Choose a custom package built around your goals—or pay per service.
            We plug into your team and unlock the next set of wins in KSA.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#offer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              See options
              <ArrowRight className="size-4" />
            </a>
          </div>

          <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-2 text-sm text-white/70 sm:grid-cols-3">
            <li className="flex items-center justify-center gap-2">
              <CheckCircle2 className="size-4" /> Custom bundles
            </li>
            <li className="flex items-center justify-center gap-2">
              <CheckCircle2 className="size-4" /> Pay-per-service
            </li>
            <li className="flex items-center justify-center gap-2">
              <CheckCircle2 className="size-4" /> Etimad enablement
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
            desc="We design a focused scope after a short discovery and plug in alongside your team with clear owners and timelines."
          />
          <Feature
            icon={<Puzzle className="size-5" />}
            title="Pay-per-service"
            desc="Pick specific services as you need them—fast turnarounds and no long commitments."
          />
          <Feature
            icon={<Wrench className="size-5" />}
            title="Hands-on enablement"
            desc="Working sessions, templates, and trackers so your team can run the process the right way, every time."
          />
          <Feature
            icon={<ListChecks className="size-5" />}
            title="Approvals & certifications"
            desc="Coordinate the requirements and submissions that unlock delivery for customers and sectors."
          />
          <Feature
            icon={<Search className="size-5" />}
            title="Prospecting support"
            desc="Target lists and intros where there’s fit, so your pipeline starts with warm context."
          />
          <Feature
            icon={<Handshake className="size-5" />}
            title="Customer onboarding packs"
            desc="We assemble and submit the document packs platforms and key accounts expect."
          />
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
          <p className="text-sm text-neutral-700">
            Not sure which way to go? Talk to us and we’ll map a bundle or a
            simple per-service plan that fits your stage and targets.
          </p>
        </div>
      </section>

      {/* ETIMAD ENABLEMENT */}
      <section id="etimad" className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          Etimad
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          End-to-end Etimad onboarding and working sessions.
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-neutral-700">
          We provide a holistic Etimad service—from account creation to hands-on
          enablement. We’ll set up the company, walk your team through where to
          find relevant bids, how to read requirements, how submissions work,
          and what to expect in procurement and selection. Decisions sit with
          the government and buyers, so we don’t promise awards; we do give you
          a clear, compliant path and stronger applications.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Feature
            icon={<FileText className="size-5" />}
            title="Account creation & readiness"
            desc="Company setup, access, and validation so you can start operating on Etimad without friction."
          />
          <Feature
            icon={<Search className="size-5" />}
            title="Finding & qualifying bids"
            desc="Working sessions on where to look, filters that matter, and quick ways to qualify or pass."
          />
          <Feature
            icon={<Target className="size-5" />}
            title="Winning-quality submissions"
            desc="Checklists, evidence mapping, and application-pack preparation aligned to buyer expectations."
          />
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-xs text-neutral-600">
          Note: We guide, prepare, and support submissions. Awards and timelines
          are determined by the issuing bodies.
        </div>
      </section>

      {/* FAQ (collapsible, client component) */}
      <ScaleFaq />

      {/* FINAL CTA — modal + email fallback */}
      <section id="contact" className="scroll-mt-24 bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to scale with a package that fits?
          </h2>

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
