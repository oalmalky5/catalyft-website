import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';

import ContactButton from '@/components/ContactButton';
import EtimadFaq from '@/components/EtimadFaq';

export const metadata: Metadata = {
  title: 'Etimad Readiness & Tender Workflow Support | Catalyft',
  description:
    'Etimad registration, document readiness, tender qualification, first-submission support, and repeatable Saudi tender workflow setup for companies selling to public-sector buyers.',
};

const fitCriteria = [
  'Need to register on Etimad for the first time',
  'Already have Etimad access but do not know how to use it properly',
  'Want to monitor tenders but need a better way to filter and qualify opportunities',
  'Need reusable company documents and bid support templates',
  'Are preparing for first Saudi government or semi-government submissions',
  'Want sales, operations, or proposal teams trained on the submission process',
];

const readinessItems = [
  'Company registration and Etimad account access',
  'Correct user roles and permissions',
  'Authorized signatory information',
  'Commercial Registration and company documents',
  'Required certificates and supporting documents',
  'Arabic documentation where needed',
  'Internal go/no-go criteria for tender qualification',
  'Proposal owner, commercial owner, and submission owner',
  'Submission calendar and deadline tracking',
  'Reusable document pack for future bids',
];

const workflow = [
  {
    number: '01',
    title: 'Access and permissions',
    desc: 'We set up or review your Etimad account, user roles, permissions, and secure access handover.',
    output: 'Active account access and clear user-role setup.',
  },
  {
    number: '02',
    title: 'Readiness document pack',
    desc: 'We identify the company documents, certificates, authorization letters, and supporting materials your team can reuse across submissions.',
    output: 'Reusable Etimad document pack.',
  },
  {
    number: '03',
    title: 'Tender search and filtering',
    desc: 'We show your team where to find opportunities, how to filter them, and how to avoid wasting time on irrelevant tenders.',
    output: 'Tender search and filtering approach.',
  },
  {
    number: '04',
    title: 'Qualification and go/no-go rules',
    desc: 'We help define simple criteria for whether a tender is worth pursuing based on fit, requirements, timeline, competition, and internal capacity.',
    output: 'Tender qualification checklist.',
  },
  {
    number: '05',
    title: 'Submission preparation',
    desc: 'We support the preparation of required documents, proposal structure, internal review points, and deadline tracking.',
    output: 'Submission checklist and prepared bid materials.',
  },
  {
    number: '06',
    title: 'First submissions and handover',
    desc: 'We guide initial submissions where agreed, review draft materials, and hand over a repeatable workflow your team can use again.',
    output: 'First-submission support and internal Etimad playbook.',
  },
];

const supportCategories = [
  {
    title: 'Account and access setup',
    items: [
      'Etimad account setup or access review',
      'User roles and permissions',
      'Secure credential handover',
      'Basic runbook for platform access',
    ],
  },
  {
    title: 'Document readiness',
    items: [
      'Reusable company information pack',
      'Certificates and supporting documents',
      'Authorization letters',
      'Arabic documentation guidance where needed',
    ],
  },
  {
    title: 'Tender qualification',
    items: [
      'Tender search walkthrough',
      'Filtering and shortlisting method',
      'Go/no-go checklist',
      'Opportunity tracker setup',
    ],
  },
  {
    title: 'Submission workflow',
    items: [
      'Submission checklist',
      'Proposal structure guidance',
      'Internal review points',
      'First-submission support where agreed',
    ],
  },
  {
    title: 'Team enablement',
    items: [
      'Working sessions for sales, operations, or proposal teams',
      'Clear process notes',
      'Repeatable playbook',
      'Handover of templates and trackers',
    ],
  },
];

const clientNeeds = [
  'Company documents and certificates',
  'Authorized signatory details',
  'Etimad access or approval to create or manage access',
  'Commercial and technical proposal content',
  'Pricing and bid strategy decisions',
  'Internal approval owners',
  'Final review and approval before submission',
  'Decision on whether to pursue or skip each tender',
];

const deliverables = [
  'Etimad account access and role setup',
  'Reusable company document pack',
  'Authorization and supporting document checklist',
  'Tender search and filtering method',
  'Go/no-go qualification checklist',
  'Submission checklist and internal deadline tracker',
  'Proposal structure guidance',
  'First-submission review notes',
  'Repeatable Etimad playbook for your team',
];

const jumpLinks = [
  { href: '#what-etimad-is-for', label: 'What Etimad is for' },
  { href: '#who-it-fits', label: 'Who it fits' },
  { href: '#readiness', label: 'Readiness checklist' },
  { href: '#etimad-workflow', label: 'Workflow' },
  { href: '#support', label: 'What we support' },
  { href: '#deliverables', label: 'Deliverables' },
  { href: '#faq', label: 'FAQ' },
];

export default function EtimadPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Etimad track
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              Set up Etimad access and build a repeatable Saudi tender workflow.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
              Catalyft helps companies register on Etimad, prepare reusable bid
              documents, identify relevant tender opportunities, qualify them
              properly, and support first submissions with clear checklists and
              working sessions.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactButton className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200">
                Book an Etimad readiness call
                <ArrowRight className="size-4" />
              </ContactButton>
              <a
                href="#etimad-workflow"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                See the Etimad workflow
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

      <section id="what-etimad-is-for" className="scroll-mt-24 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Etimad readiness
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              What Etimad support is for
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-neutral-600">
              Etimad is the main platform companies use to access and respond to
              Saudi government and public-sector tender opportunities.
              Registration is only the first step. To use Etimad effectively,
              your team also needs the right access, reusable company documents,
              a way to qualify tenders, and a repeatable submission process.
            </p>
            <p className="mt-6 border-y border-neutral-200 py-5 text-lg font-semibold leading-relaxed text-neutral-950">
              Etimad support is not just account setup. It is registration,
              document readiness, tender qualification, and submission workflow
              support.
            </p>
          </div>
        </div>
      </section>

      <section
        id="who-it-fits"
        className="scroll-mt-24 bg-[#f7f6f2] px-6 py-16"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Fit
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Who this service is for
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              This service is for companies that want to sell to Saudi
              government, semi-government, or large public-sector-linked buyers
              and need a practical Etimad workflow.
            </p>
          </div>

          <Checklist items={fitCriteria} />
        </div>
      </section>

      <section id="readiness" className="scroll-mt-24 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Checklist
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Etimad readiness checklist
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Before bidding, your team needs the right account setup,
              documents, owners, and internal workflow.
            </p>
          </div>

          <Checklist items={readinessItems} />
        </div>
      </section>

      <section
        id="etimad-workflow"
        className="scroll-mt-24 bg-[#f7f6f2] px-6 py-16 md:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Workflow
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              The Etimad workflow we help build
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600">
              The goal is not only to register your company. The goal is to give
              your team a practical process for finding, qualifying, preparing,
              and submitting opportunities.
            </p>
          </div>

          <ol className="relative border-l border-neutral-300 pl-7">
            {workflow.map((step) => (
              <RoadmapStep key={step.number} {...step} />
            ))}
          </ol>
        </div>
      </section>

      <section id="support" className="scroll-mt-24 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Support scope
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              What Catalyft supports
            </h2>
          </div>

          <div className="mt-10 grid gap-x-12 gap-y-10 border-y border-neutral-200 py-10 md:grid-cols-2">
            {supportCategories.map((category) => (
              <ListBlock
                key={category.title}
                title={category.title}
                items={category.items}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="responsibilities" className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Responsibilities
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              What we need from your team
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Etimad support works best when the commercial owner, proposal
              owner, and decision-makers are clear. Catalyft can support the
              workflow, but your team still owns the business decision to pursue
              each opportunity.
            </p>
          </div>

          <Checklist items={clientNeeds} />
        </div>
      </section>

      <section
        id="deliverables"
        className="scroll-mt-24 bg-[#f7f6f2] px-6 py-16"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Deliverables
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              What you leave with
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              The goal is to leave your team with reusable assets and a
              repeatable process, not only a completed registration.
            </p>
          </div>

          <Checklist items={deliverables} />
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl border-y border-neutral-200 py-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                Important note
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                What remains outside Catalyft&apos;s control
              </h2>
            </div>
            <p className="text-base leading-relaxed text-neutral-600">
              Tender outcomes are decided by the issuing entity. Catalyft can
              help prepare your access, documents, workflow, and submissions,
              but we cannot guarantee tender awards, buyer decisions, scoring
              results, platform processing times, or authority or customer
              acceptance of any submission.
            </p>
          </div>
        </div>
      </section>

      <EtimadFaq />

      <section
        id="contact"
        className="scroll-mt-24 bg-black px-6 py-16 text-white md:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 border-y border-white/10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Get in touch
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
              Need to get Etimad-ready?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Book an Etimad readiness call and we&apos;ll review your current
              access, document readiness, tender goals, and the next steps to
              build a workable submission process.
            </p>
          </div>

          <div className="lg:ml-auto lg:max-w-sm">
            <ContactButton className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200 sm:w-auto lg:w-full">
              Book an Etimad readiness call
              <ArrowRight className="size-4" />
            </ContactButton>
            <a
              href="mailto:info@catalyft.sa?subject=Etimad%20Readiness%20Inquiry"
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

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-4 py-4 text-sm leading-relaxed text-neutral-700"
        >
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-neutral-950" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function RoadmapStep({
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
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            {desc}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-800">
            <span className="font-semibold">Output:</span> {output}
          </p>
        </div>
      </div>
    </li>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-neutral-950">{title}</h3>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-relaxed text-neutral-700"
          >
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-950" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
