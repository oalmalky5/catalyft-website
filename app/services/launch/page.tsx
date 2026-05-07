import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import ContactButton from '@/components/ContactButton';
import LaunchFaq from '@/components/LaunchFaq';

export const metadata: Metadata = {
  title: 'Saudi Company Setup Roadmap | Launch Track | Catalyft',
  description:
    'Practical Saudi entity setup support for foreign companies, including MISA licensing, Commercial Registration, formation documents, GM onboarding, bank setup, government portals, and handover.',
};

const whoItIsFor = [
  {
    title: 'Foreign companies entering Saudi for the first time',
    desc: 'You need to understand the right legal route, required documents, government steps, and operating setup before committing.',
  },
  {
    title: 'Companies opening a branch or local entity',
    desc: 'You need MISA licensing, Commercial Registration, constitutional documents, GM setup, banking, and government portal access handled in the right order.',
  },
  {
    title: 'Founder-led or lean expansion teams',
    desc: 'You do not have a Saudi operations team yet and need a local partner to manage the setup process, explain requirements, and keep the work moving.',
  },
];

const journey = [
  {
    number: '01',
    title: 'Setup route and activity review',
    desc: 'We confirm the right setup route based on your ownership structure, business activity, hiring plan, and Saudi revenue model.',
    output: 'Setup route recommendation, required document list, and process map.',
  },
  {
    number: '02',
    title: 'Document preparation and attestations',
    desc: 'We tell you which parent-company documents are needed, prepare the templates where possible, and guide your team through the home-country attestation requirements.',
    output: 'Ready-to-submit document pack.',
  },
  {
    number: '03',
    title: 'MISA license application',
    desc: 'For foreign-owned entities, we prepare and submit the MISA investment license application and follow up on government requests or clarification points.',
    output: 'MISA investment license, where applicable.',
  },
  {
    number: '04',
    title: 'Commercial Registration and constitutional documents',
    desc: 'We prepare the company formation documents, align the activities, and support issuance of the Commercial Registration.',
    output: 'Saudi Commercial Registration and formation documents.',
  },
  {
    number: '05',
    title: 'GM onboarding and operating setup',
    desc: 'We support the General Manager onboarding process, banking steps, national address, and required government portal registrations.',
    output:
      'Company ready for core operations, hiring, payroll setup, and compliance follow-through.',
  },
  {
    number: '06',
    title: 'Handover and next-step tracker',
    desc: 'We hand over access, credentials, status of each workstream, pending items, renewal dates, and recommended next actions.',
    output: 'Clear handover tracker and operating runbook.',
  },
];

const catalyftHandles = [
  'Setup route planning and process coordination',
  'MISA application preparation and submission',
  'Commercial Registration and formation document support',
  'GM onboarding guidance and coordination',
  'Bank account application support',
  'Government portal registration and handover',
  'Tracker, status updates, blockers, and next actions',
];

const clientProvides = [
  'Parent-company documents',
  'Authorized signatories and board approvals where needed',
  'Home-country attestations and notarizations',
  'GM information and availability',
  'Bank compliance and KYC information',
  'Final approvals on legal structure, activity, and submitted documents',
];

const blockers = [
  'Starting with the wrong legal structure or activity',
  'Preparing documents that are not accepted after attestation',
  'Missing board approvals or signatory requirements',
  'Choosing a GM before understanding visa, iqama, and bank requirements',
  'Treating CR issuance as the finish line, then discovering banking, portals, HR, and payroll are still not ready',
  'Not knowing who owns each step between the foreign parent, Saudi entity, GM, bank, and government portals',
];

const startupSupport = [
  'Eligibility review for relevant programs',
  'Application document preparation',
  'Introductions where there is a clear fit',
  'Cost-aware sequencing of setup, hiring, vendors, and go-to-market steps',
];

const timelineFactors = [
  'Whether the required documents are ready and properly attested',
  'Whether the chosen activity is straightforward or needs extra review',
  'How quickly the GM and signatories can complete required steps',
  'Whether the relevant authorities request clarifications or additional evidence',
];

const jumpLinks = [
  { href: '#who', label: 'Who it’s for' },
  { href: '#setup-journey', label: 'Setup journey' },
  { href: '#responsibilities', label: 'Responsibilities' },
  { href: '#blockers', label: 'Blockers' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#faq', label: 'FAQ' },
];

export default function LaunchPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Launch track
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              Set up your entity in Saudi, from licensing and registration to
              portal handover.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
              Catalyft helps foreign companies move from setup decision to Saudi
              operating readiness, including MISA licensing, Commercial
              Registration, constitutional documents, GM onboarding, bank setup,
              and government portal activation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactButton className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200">
                Book a Saudi setup call
                <ArrowRight className="size-4" />
              </ContactButton>
              <a
                href="#setup-journey"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                See the setup journey
              </a>
            </div>
          </div>
        </div>
      </section>

      <nav className="border-b border-neutral-200 bg-white/95 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-3 overflow-x-auto text-sm text-neutral-600">
          {jumpLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full border border-neutral-200 px-4 py-2 transition hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-950"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="who" className="scroll-mt-24 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Who it’s for
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                This service is for companies that need to establish in Saudi
              </h2>
            </div>

            <div className="divide-y divide-neutral-200 border-y border-neutral-200">
              {whoItIsFor.map((item) => (
                <TextRow key={item.title} title={item.title} desc={item.desc} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="setup-journey"
        className="scroll-mt-24 bg-[#f7f6f2] px-6 py-16 md:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Setup journey
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              The Saudi setup journey
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600">
              The exact path depends on your ownership, activity, documents, and
              legal structure. This is the typical sequence we help manage.
            </p>
          </div>

          <ol className="relative border-l border-neutral-300 pl-7">
            {journey.map((step) => (
              <JourneyStep key={step.number} {...step} />
            ))}
          </ol>
        </div>
      </section>

      <section id="responsibilities" className="scroll-mt-24 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Responsibilities
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              What we handle, and what we need from your team
            </h2>
          </div>

          <div className="mt-10 grid gap-10 border-y border-neutral-200 py-10 lg:grid-cols-2 lg:divide-x lg:divide-neutral-200">
            <ListColumn title="Catalyft handles" items={catalyftHandles} />
            <ListColumn
              title="Your team provides"
              items={clientProvides}
              className="lg:pl-10"
            />
          </div>
        </div>
      </section>

      <section id="blockers" className="scroll-mt-24 bg-black px-6 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Common blockers
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Common blockers we help you avoid
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/65">
              Many setup delays happen because the route, documents, approvals,
              or operating steps were not clear at the start.
            </p>
          </div>

          <ul className="divide-y divide-white/10 border-y border-white/10">
            {blockers.map((item) => (
              <li key={item} className="flex gap-4 py-4 text-sm leading-relaxed text-white/75">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#b9a56d]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="startups" className="px-6 py-16">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#f7f6f2] px-6 py-10 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Startups
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                For startups: keep the setup path cost-aware
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                If you are a startup entering Saudi, we help you understand
                whether any relevant programs, incentives, or partner pathways
                may fit your stage and business model.
              </p>
            </div>

            <div>
              <p className="font-semibold text-neutral-950">We can help with:</p>
              <ul className="mt-4 grid gap-3 text-sm text-neutral-700">
                {startupSupport.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-950" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-neutral-300 pt-5 text-sm leading-relaxed text-neutral-600">
                <strong className="text-neutral-950">Important:</strong> Program
                approvals, grants, discounts, and incentives are decided by the
                relevant authorities or partners. Catalyft helps you prepare a
                stronger path, but does not promise awards or approvals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="scroll-mt-24 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Timeline
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              A typical setup can take around 90 days once required parent
              company documents are complete and attested
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              If the required documents are complete, properly attested, and the
              activity does not require extra review, many setup paths can be
              planned around a 90-day working timeline. Government reviews,
              clarification requests, signatory availability, and document
              corrections can extend that timeline.
            </p>
            <p className="mt-3 text-base leading-relaxed text-neutral-600">
              Our role is to map the sequence, run workstreams in parallel where
              possible, follow up on pending items, and keep your team clear on
              what is blocking progress.
            </p>
          </div>

          <ol className="mt-10 grid gap-0 border-y border-neutral-200 md:grid-cols-4 md:divide-x md:divide-neutral-200">
            {timelineFactors.map((item, index) => (
              <li key={item} className="border-b border-neutral-200 py-6 md:border-b-0 md:px-6">
                <span className="text-sm font-semibold text-neutral-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                  {item}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <LaunchFaq />

      <section id="contact" className="scroll-mt-24 bg-black px-6 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 border-y border-white/10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Get in touch
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
              Planning your Saudi setup? Start with the route.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Book a Saudi setup call and we’ll help you understand the likely
              setup path, required documents, key blockers, and next steps.
            </p>
          </div>

          <div className="lg:ml-auto lg:max-w-sm">
            <ContactButton className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200 sm:w-auto lg:w-full">
              Book a Saudi setup call
              <ArrowRight className="size-4" />
            </ContactButton>
            <a
              href="mailto:info@catalyft.sa?subject=Catalyft%20Launch%20Track%20Inquiry"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/70 underline underline-offset-4 transition hover:text-white"
            >
              <Mail className="size-4" />
              Email info@catalyft.sa
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function TextRow({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="grid gap-3 py-6 md:grid-cols-[0.52fr_0.48fr] md:gap-8">
      <h3 className="text-lg font-semibold text-neutral-950">{title}</h3>
      <p className="text-sm leading-relaxed text-neutral-600">{desc}</p>
    </div>
  );
}

function JourneyStep({
  number,
  title,
  desc,
  output,
}: {
  number: string;
  title: string;
  desc: string;
  output: string;
}) {
  return (
    <li className="relative pb-10 last:pb-0">
      <span className="absolute -left-[37px] top-1 grid size-5 place-items-center rounded-full border border-neutral-300 bg-[#f7f6f2]" />
      <div className="grid gap-4 md:grid-cols-[100px_1fr]">
        <p className="text-sm font-semibold tracking-[0.18em] text-neutral-500">
          {number}
        </p>
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-neutral-950">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-800">
            <span className="font-semibold">Output:</span> {output}
          </p>
        </div>
      </div>
    </li>
  );
}

function ListColumn({
  title,
  items,
  className,
}: {
  title: string;
  items: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-xl font-semibold text-neutral-950">{title}</h3>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-700">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-950" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
