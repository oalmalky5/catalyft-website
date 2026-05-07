import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import ContactButton from '@/components/ContactButton';
import ScaleFaq from '@/components/ScaleFaq';

export const metadata: Metadata = {
  title: 'Custom Saudi Operations Support | Catalyft',
  description:
    'Targeted Saudi operations support for defined blockers, customer onboarding packs, supplier registrations, approvals, certificates, first-hire support, and 30-90 day execution sprints.',
};

const fitRows = [
  {
    title: 'You have a specific blocker',
    desc: 'A customer, vendor, bank, portal, or authority is asking for documents, certificates, registrations, or follow-up.',
  },
  {
    title: 'You need a short execution sprint',
    desc: 'You need focused support for a 30-90 day period to clean up a process, prepare submissions, onboard a customer, or coordinate a defined workstream.',
  },
  {
    title: 'You are not ready for a full retainer',
    desc: 'You need help with a specific scope now, but do not yet need ongoing monthly operations support.',
  },
  {
    title: 'Your internal team needs local execution help',
    desc: 'Your team knows the business goal, but needs someone who understands Saudi portals, documents, government requirements, and local operating steps.',
  },
];

const requestCategories = [
  {
    title: 'Customer and vendor onboarding',
    items: [
      'Customer onboarding document packs',
      'Supplier and marketplace registrations',
      'Arabic company documents and authorization letters',
      'Follow-up until the next action is clear',
    ],
  },
  {
    title: 'Certificates, letters, and approvals',
    items: [
      'Company certificates and proof-of-compliance documents',
      'Sector or customer-specific approval packs',
      'Letters, attestations, and supporting documents',
      'Submission preparation and tracking',
    ],
  },
  {
    title: 'HR and first-hire support',
    items: [
      'Employment offer and contract support',
      'First-hire onboarding steps',
      'Qiwa, GOSI, or HR record coordination',
      'Work permit or iqama support where applicable',
    ],
  },
  {
    title: 'Process cleanup and operating setup',
    items: [
      'Tracker setup for owners, due dates, and blockers',
      'Handover of portal access or active requests',
      'Simple SOPs for recurring tasks',
      'Cleanup of unclear or stalled workstreams',
    ],
  },
  {
    title: 'Proposal and local documentation support',
    items: [
      'Local company information packs',
      'Required Saudi documents for proposals',
      'Tender or customer submission support',
      'Document review before submission',
    ],
  },
];

const sprintSteps = [
  {
    number: '01',
    title: 'Define the request',
    desc: 'We confirm what needs to be done, why it matters, what the deadline is, and who is asking for it.',
  },
  {
    number: '02',
    title: 'Confirm inputs and dependencies',
    desc: 'We identify the documents, access, approvals, signatures, payments, or client information needed to complete the work.',
  },
  {
    number: '03',
    title: 'Execute and follow up',
    desc: 'We prepare the required documents, coordinate submissions, follow up with relevant parties, and track open items.',
  },
  {
    number: '04',
    title: 'Handover the result',
    desc: 'You receive a clear summary of what was completed, what remains pending, and any recommended next steps.',
  },
];

const deliverables = [
  'Completed onboarding or submission pack',
  'Prepared forms, letters, or supporting documents',
  'Tracker showing owners, deadlines, blockers, and status',
  'Submitted portal or customer request',
  'Summary of follow-ups and pending items',
  'Recommended next steps after completion',
  'Handover notes for your internal team',
];

const customExamples = [
  'Onboarding pack',
  'Approval request',
  'Certificate or letter',
  'First-hire setup',
  'Process cleanup',
  '30-90 day sprint',
];

const operateExamples = [
  'Compliance calendar',
  'Monthly operating tracker',
  'HR and payroll coordination',
  'Qiwa/GOSI/Mudad follow-up',
  'Renewals and certificates',
  'Customer/vendor requests over time',
];

const useCases = [
  {
    title: 'A customer asks for Saudi onboarding documents',
    desc: 'We prepare the company pack, certificates, authorization letters, Arabic documents, and submission tracker.',
  },
  {
    title: 'A supplier platform requires registration',
    desc: 'We collect requirements, prepare the documents, coordinate submission, and track the request until the next action is clear.',
  },
  {
    title: 'A first hire needs to be onboarded properly',
    desc: 'We support the employment documentation, portal steps, and HR record coordination needed to start cleanly.',
  },
  {
    title: 'A process is stuck with no clear owner',
    desc: 'We map the workstream, identify missing inputs, assign next actions, and create a tracker until the issue is resolved or clearly handed over.',
  },
  {
    title: 'A proposal requires local Saudi documentation',
    desc: 'We prepare or review the local documentation needed for the submission and flag gaps before the deadline.',
  },
];

const jumpLinks = [
  { href: '#when-it-fits', label: 'When it fits' },
  { href: '#common-requests', label: 'Common requests' },
  { href: '#sprint-process', label: 'Sprint process' },
  { href: '#deliverables', label: 'Deliverables' },
  { href: '#compare-operate', label: 'Custom Support vs Operate' },
  { href: '#faq', label: 'FAQ' },
];

export default function CustomSupportPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Custom Support track
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              Targeted Saudi operations support for specific blockers, requests,
              and short-term execution needs.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
              Catalyft helps companies handle defined Saudi workstreams that do
              not need a full retainer, from customer onboarding packs and
              supplier registrations to approvals, certificates, first-hire
              support, and process cleanup.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactButton className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200">
                Scope a custom support request
                <ArrowRight className="size-4" />
              </ContactButton>
              <a
                href="#common-requests"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                See example requests
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

      <section id="when-it-fits" className="scroll-mt-24 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              When it fits
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              When Custom Support fits
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Use Custom Support when you have a defined Saudi operations need
              that is important enough to move quickly, but does not require a
              full monthly retainer.
            </p>
          </div>

          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {fitRows.map((row) => (
              <TextRow key={row.title} title={row.title} desc={row.desc} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="common-requests"
        className="scroll-mt-24 bg-[#f7f6f2] px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Common requests
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Common requests we handle
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Every scope is defined around the specific outcome or blocker.
              These are common examples.
            </p>
          </div>

          <div className="mt-10 grid gap-x-12 gap-y-10 border-y border-neutral-300 py-10 md:grid-cols-2">
            {requestCategories.map((category) => (
              <ListBlock
                key={category.title}
                title={category.title}
                items={category.items}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="sprint-process" className="scroll-mt-24 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Sprint process
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              How a custom support sprint works
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600">
              We define the scope before work starts, so both sides know the
              outcome, inputs, owners, and timeline.
            </p>
          </div>

          <ol className="relative border-l border-neutral-300 pl-7">
            {sprintSteps.map((step) => (
              <ProcessStep key={step.number} {...step} />
            ))}
          </ol>
        </div>
      </section>

      <section id="deliverables" className="scroll-mt-24 bg-black px-6 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Deliverables
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              What you receive
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/65">
              Each custom scope should end with a clear deliverable, not vague
              support hours.
            </p>
          </div>

          <ul className="divide-y divide-white/10 border-y border-white/10">
            {deliverables.map((item) => (
              <li key={item} className="flex gap-4 py-4 text-sm leading-relaxed text-white/75">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#b9a56d]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="compare-operate" className="scroll-mt-24 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Compare
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Custom Support vs Operate
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Custom Support is for defined tasks or short sprints. Operate is
              for recurring monthly management of your Saudi entity.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto border-y border-neutral-200">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="w-1/2 py-4 pr-8 text-xl font-semibold text-neutral-950">
                    Custom Support
                  </th>
                  <th className="w-1/2 py-4 pl-8 text-xl font-semibold text-neutral-950">
                    Operate
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="align-top">
                  <td className="py-6 pr-8 text-neutral-700">
                    Best when you need help with a specific task, blocker,
                    customer request, or short-term workstream.
                    <BulletList items={customExamples} />
                  </td>
                  <td className="border-l border-neutral-200 py-6 pl-8 text-neutral-700">
                    Best when you need ongoing monthly support across renewals,
                    HR, payroll coordination, portals, certificates, and
                    recurring submissions.
                    <BulletList items={operateExamples} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Link
            href="/services/operate"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Need ongoing support? Explore Operate
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section id="use-cases" className="bg-[#f7f6f2] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Use cases
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Example use cases
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              A few examples of when companies use Custom Support.
            </p>
          </div>

          <div className="mt-10 divide-y divide-neutral-300 border-y border-neutral-300">
            {useCases.map((item) => (
              <TextRow key={item.title} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      <ScaleFaq />

      <section id="contact" className="scroll-mt-24 bg-black px-6 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 border-y border-white/10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Get in touch
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
              Have a specific Saudi operations request?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Book a consultation and we’ll help define the scope, required
              inputs, likely dependencies, and the right next step.
            </p>
          </div>

          <div className="lg:ml-auto lg:max-w-sm">
            <ContactButton className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200 sm:w-auto lg:w-full">
              Scope a custom support request
              <ArrowRight className="size-4" />
            </ContactButton>
            <a
              href="mailto:info@catalyft.sa?subject=Catalyft%20Custom%20Support%20Inquiry"
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
    <div className="grid gap-3 py-6 md:grid-cols-[0.45fr_0.55fr] md:gap-8">
      <h3 className="text-lg font-semibold text-neutral-950">{title}</h3>
      <p className="text-sm leading-relaxed text-neutral-600">{desc}</p>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
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

function ProcessStep({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) {
  return (
    <li className="relative pb-10 last:pb-0">
      <span className="absolute -left-[37px] top-1 grid size-5 place-items-center rounded-full border border-neutral-300 bg-white" />
      <div className="grid gap-4 md:grid-cols-[100px_1fr]">
        <p className="text-sm font-semibold tracking-[0.18em] text-neutral-500">
          {number}
        </p>
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-neutral-950">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</p>
        </div>
      </div>
    </li>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-950" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
