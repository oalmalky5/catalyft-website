import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import ContactButton from '@/components/ContactButton';
import OperateFaq from '@/components/OperateFaq';

export const metadata: Metadata = {
  title: 'Saudi Operations Support | Operate Track | Catalyft',
  description:
    'Monthly Saudi operations support for renewals, certificates, Qiwa, GOSI, Mudad, HR and payroll coordination, government portals, and customer or vendor onboarding requests.',
};

const workstreams = [
  'Renewals',
  'Portals',
  'HR records',
  'Payroll coordination',
  'Certificates',
  'Customer onboarding',
];

const cycleSteps = [
  {
    number: '01',
    title: 'Review what is due',
    desc: 'We check upcoming renewals, payroll dates, portal tasks, employee changes, certificates, and customer requests.',
  },
  {
    number: '02',
    title: 'Prepare and submit',
    desc: 'We prepare the required forms, documents, portal updates, and submission packs within the agreed retainer scope.',
  },
  {
    number: '03',
    title: 'Coordinate approvals',
    desc: 'We tell your team what needs approval, signature, payment, employee input, bank action, or management decision.',
  },
  {
    number: '04',
    title: 'Track blockers and follow up',
    desc: 'We track pending items across portals, authorities, banks, vendors, customers, and internal stakeholders.',
  },
  {
    number: '05',
    title: 'Report status and next actions',
    desc: 'You receive a simple status view showing what is done, what is pending, what is blocked, and what is coming next.',
  },
];

const managedCategories = [
  {
    title: 'Company compliance',
    items: [
      'License and registration renewals',
      'Company certificates and proof-of-compliance documents',
      'National address and portal record updates',
      'Government requests and follow-ups',
    ],
  },
  {
    title: 'People and payroll coordination',
    items: [
      'Qiwa, GOSI, Mudad, and HR record coordination',
      'Employment contract updates',
      'Work permit and iqama support',
      'Monthly payroll coordination and WPS follow-through',
    ],
  },
  {
    title: 'Portals and operating access',
    items: [
      'Government portal administration',
      'User access and credential handover',
      'Status tracking across active requests',
      'Renewal and submission calendars',
    ],
  },
  {
    title: 'Customer and vendor requirements',
    items: [
      'Customer onboarding document packs',
      'Supplier and marketplace registrations',
      'Letters, attestations, and required certificates',
      'Submission follow-up until accepted or next action is clear',
    ],
  },
];

const clientNeeds = [
  'Authorized portal access or approved sub-user access',
  'Employee details and updates when HR records change',
  'Payroll inputs, salary changes, and payment confirmation',
  'Management approvals for submissions, renewals, or documents',
  'Signatures, stamps, or board approvals where required',
  'Customer or vendor requirements when onboarding packs are requested',
];

const problems = [
  'A certificate expires before a customer or bank asks for it',
  'Payroll is delayed because employee records, WPS, or bank steps are not aligned',
  'Qiwa, GOSI, or Mudad records do not match',
  'A portal request is submitted late because no one owns it',
  'A customer onboarding pack is missing Arabic documents, certificates, or authorization letters',
  'Access sits with one person and is not handed over properly',
  'Leadership has no clear view of what is done, pending, or blocked',
];

const retainers = [
  {
    level: 'Light support',
    bestFor:
      'Companies with low activity that need renewals, reminders, certificates, and occasional portal support.',
    includes: [
      'Compliance calendar',
      'Renewal tracking',
      'Certificate requests',
      'Light portal support',
      'Monthly status summary',
    ],
  },
  {
    level: 'Standard support',
    bestFor:
      'Active companies with employees, payroll, portals, and recurring government requirements.',
    includes: [
      'Everything in Light',
      'HR and payroll coordination',
      'Qiwa, GOSI, Mudad follow-through',
      'Employment record updates',
      'Customer/vendor document support',
      'Regular status tracker',
    ],
  },
  {
    level: 'Full support',
    bestFor:
      'Companies that need Catalyft to act as their ongoing Saudi operations partner.',
    includes: [
      'Everything in Standard',
      'Broader portal administration',
      'Recurring approvals and submissions',
      'Onboarding packs and customer requests',
      'Employee and vendor coordination',
      'More frequent operating updates',
    ],
  },
];

const jumpLinks = [
  { href: '#after-setup', label: 'After setup' },
  { href: '#monthly-cycle', label: 'Monthly cycle' },
  { href: '#what-we-manage', label: 'What we manage' },
  { href: '#responsibilities', label: 'Responsibilities' },
  { href: '#retainers', label: 'Retainers' },
  { href: '#faq', label: 'FAQ' },
];

export default function OperatePage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Operate track
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              Keep your Saudi entity active, compliant, and ready to operate.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
              Catalyft supports the recurring work that keeps a Saudi entity
              usable after setup, including renewals, certificates, Qiwa, GOSI,
              Mudad, HR and payroll coordination, government portals, and
              customer or vendor onboarding requests.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactButton className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200">
                Book an operations support call
                <ArrowRight className="size-4" />
              </ContactButton>
              <a
                href="#what-we-manage"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                See what we manage
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

      <section id="after-setup" className="scroll-mt-24 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                After setup
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                After setup, the work continues
              </h2>
            </div>
            <div>
              <p className="text-base leading-relaxed text-neutral-600">
                A Saudi entity is not finished once the Commercial Registration
                is issued. Renewals, portals, employee records, payroll,
                certificates, and customer onboarding requests still need active
                follow-up. Operate is for companies that want this work managed
                through a clear monthly process.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {workstreams.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="monthly-cycle"
        className="scroll-mt-24 bg-[#f7f6f2] px-6 py-16 md:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Monthly cycle
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              The monthly operating cycle
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600">
              Each month, we keep the key workstreams visible, update what is
              due, handle agreed submissions, and flag what needs client
              approval or action.
            </p>
          </div>

          <ol className="relative border-l border-neutral-300 pl-7">
            {cycleSteps.map((step) => (
              <CycleStep key={step.number} {...step} />
            ))}
          </ol>
        </div>
      </section>

      <section id="what-we-manage" className="scroll-mt-24 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              What we manage
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              What Catalyft manages
            </h2>
          </div>

          <div className="mt-10 grid gap-x-12 gap-y-10 border-y border-neutral-200 py-10 md:grid-cols-2">
            {managedCategories.map((category) => (
              <ListBlock
                key={category.title}
                title={category.title}
                items={category.items}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="responsibilities" className="scroll-mt-24 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Responsibilities
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              What we need from your team
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Operate works best when responsibilities are clear. Catalyft
              manages the agreed operational work, but some items still require
              client input, approvals, payments, signatures, or employee
              information.
            </p>
          </div>

          <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
            {clientNeeds.map((item) => (
              <li key={item} className="flex gap-4 py-4 text-sm leading-relaxed text-neutral-700">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-neutral-950" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="problems" className="bg-black px-6 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
              Problems prevented
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Common problems we help prevent
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-white/65">
              Most operating issues start small: a missed renewal, outdated
              portal record, unclear owner, pending employee update, or customer
              document request with no one assigned.
            </p>
          </div>

          <ul className="divide-y divide-white/10 border-y border-white/10">
            {problems.map((item) => (
              <li key={item} className="flex gap-4 py-4 text-sm leading-relaxed text-white/75">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#b9a56d]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="retainers" className="scroll-mt-24 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Retainer levels
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Choose the level of operating support you need
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Operate can be scoped as a light, standard, or full monthly
              retainer depending on how much recurring Saudi work your team
              wants Catalyft to manage.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto border-y border-neutral-200">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="w-[22%] py-4 pr-6 font-semibold text-neutral-950">
                    Level
                  </th>
                  <th className="w-[36%] px-6 py-4 font-semibold text-neutral-950">
                    Best for
                  </th>
                  <th className="w-[42%] py-4 pl-6 font-semibold text-neutral-950">
                    Includes
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {retainers.map((retainer) => (
                  <tr key={retainer.level} className="align-top">
                    <td className="py-6 pr-6 text-base font-semibold text-neutral-950">
                      {retainer.level}
                    </td>
                    <td className="px-6 py-6 leading-relaxed text-neutral-600">
                      {retainer.bestFor}
                    </td>
                    <td className="py-6 pl-6">
                      <ul className="grid gap-2 text-neutral-700">
                        {retainer.includes.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-950" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Find the right retainer level
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      <OperateFaq />

      <section id="contact" className="scroll-mt-24 bg-black px-6 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 border-y border-white/10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Get in touch
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
              Need help keeping your Saudi entity operating properly?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Book an operations support call and we’ll review your current
              setup, recurring requirements, active blockers, and the right
              support level.
            </p>
          </div>

          <div className="lg:ml-auto lg:max-w-sm">
            <ContactButton className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200 sm:w-auto lg:w-full">
              Book an operations support call
              <ArrowRight className="size-4" />
            </ContactButton>
            <a
              href="mailto:info@catalyft.sa?subject=Catalyft%20Operate%20Track%20Inquiry"
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

function CycleStep({
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
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-700">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-950" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
