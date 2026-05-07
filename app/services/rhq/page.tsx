import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Mail } from 'lucide-react';
import ContactButton from '@/components/ContactButton';
import RHQFaq from '@/components/RHQFaq';

export const metadata: Metadata = {
  title: 'Saudi RHQ Assessment, Setup & Activation | Catalyft',
  description:
    'RHQ assessment, licensing support, setup coordination, activation planning, governance, staffing coordination, and operating support for multinational groups considering a Regional Headquarters in Riyadh.',
};

const rhqPoints = [
  'It is a regional management structure',
  'It requires activation, staffing, and governance',
  'It creates ongoing operating and compliance responsibilities',
];

const fitCriteria = [
  'Operate across more than one market in the region',
  'Want to centralize regional leadership or management functions in Riyadh',
  'Need a Saudi-based headquarters model for strategic positioning',
  'Are preparing to engage with major Saudi public-sector, semi-government, or enterprise buyers',
  'Can assign real functions, employees, governance, and reporting to the RHQ',
  'Want a structured operating model rather than a light representative presence',
];

const notFitCriteria = [
  'You only need a Saudi sales or delivery entity',
  'Your regional leadership will remain outside Saudi',
  'You are not ready to staff or activate the RHQ properly',
  'You need a lighter commercial presence first',
  'You are still testing the Saudi market and do not yet have a regional operating plan',
  'Your main requirement is basic company setup rather than regional headquarters activation',
];

const assessmentAreas = [
  {
    title: 'Group structure',
    desc: 'Parent company, subsidiaries, regional footprint, ownership, and existing Saudi presence.',
  },
  {
    title: 'Regional functions',
    desc: 'Which leadership, management, support, or shared-service functions may sit in Riyadh.',
  },
  {
    title: 'Staffing plan',
    desc: 'Who will lead the RHQ, what roles are needed, and what hiring or transfer steps may be required.',
  },
  {
    title: 'Governance and reporting',
    desc: 'Which decisions, committees, reporting lines, and management routines need to be reflected in the operating model.',
  },
  {
    title: 'Documents and approvals',
    desc: 'What corporate documents, authorizations, attestations, and sign-offs are likely needed before submission.',
  },
  {
    title: 'Operating readiness',
    desc: 'What needs to happen after licensing so the RHQ is not just registered, but properly activated.',
  },
];

const roadmap = [
  {
    number: '01',
    title: 'Fit assessment and route decision',
    desc: 'We review your group structure, regional footprint, intended RHQ functions, and Saudi plans to confirm whether RHQ is the right route.',
    output: 'RHQ fit assessment, decision points, and recommended next steps.',
  },
  {
    number: '02',
    title: 'Document and authorization preparation',
    desc: 'We identify required corporate documents, approvals, attestations, signatories, and supporting information before submission.',
    output: 'Document checklist, responsibility map, and submission-ready inputs.',
  },
  {
    number: '03',
    title: 'RHQ licensing support',
    desc: 'We prepare the RHQ license application, coordinate required information, submit where applicable, and follow up on authority requests.',
    output: 'RHQ license application managed through submission and follow-up.',
  },
  {
    number: '04',
    title: 'Corporate setup and registrations',
    desc: 'We support the related corporate setup steps, registrations, access, and administrative requirements needed to make the RHQ usable.',
    output: 'Registered RHQ structure and required setup workstreams tracked.',
  },
  {
    number: '05',
    title: 'Activation planning',
    desc: 'We help translate the RHQ model into a practical activation plan, including functions, roles, governance routines, reporting, and early operating priorities.',
    output:
      'Activation plan with owners, timing, functions, and required follow-through.',
  },
  {
    number: '06',
    title: 'Ongoing operations or handover',
    desc: 'We either support the ongoing operational requirements or hand over a clear tracker, renewal calendar, responsibilities, and next actions to your internal team.',
    output: 'Operating tracker, renewal calendar, and handover notes.',
  },
];

const supportCategories = [
  {
    title: 'RHQ fit and planning',
    items: [
      'RHQ suitability review',
      'Route and structure discussion',
      'Group and regional footprint mapping',
      'Decision points and next-step plan',
    ],
  },
  {
    title: 'Licensing and setup coordination',
    items: [
      'RHQ licensing preparation and submission support',
      'Corporate document coordination',
      'Registrations and administrative setup',
      'Authority follow-up and status tracking',
    ],
  },
  {
    title: 'Activation support',
    items: [
      'Staffing and function planning',
      'Governance and reporting routines',
      'Operating tracker and responsibility map',
      'Early activation workstreams',
    ],
  },
  {
    title: 'Ongoing requirements',
    items: [
      'Renewals and compliance calendar',
      'Portal and document support',
      'Operational handover or retainer support',
      'Ongoing coordination where needed',
    ],
  },
];

const clientNeeds = [
  'Group structure and regional footprint information',
  'Parent-company corporate documents',
  'Authorized signatories and approvals',
  'Intended RHQ functions and responsibilities',
  'Staffing plan or leadership input',
  'Governance and reporting preferences',
  'Availability of decision-makers for approvals',
  'Final confirmation of submitted information',
];

const routeComparison = [
  {
    route: 'RHQ',
    bestFor:
      'Multinational groups centralizing regional leadership, management, or support functions in Riyadh.',
    focus: [
      'Regional headquarters model',
      'Leadership and governance',
      'Regional management functions',
      'Activation and ongoing requirements',
    ],
  },
  {
    route: 'Branch or local entity',
    bestFor:
      'Companies that need to sell, deliver, hire, or operate in Saudi as a commercial presence.',
    focus: [
      'MISA license where applicable',
      'Commercial Registration',
      'Banking and portals',
      'HR, payroll, and customer onboarding',
    ],
  },
  {
    route: 'Custom support',
    bestFor:
      'Companies that already have a Saudi setup and need help with a specific blocker, request, or short-term workstream.',
    focus: [
      'Certificates',
      'Onboarding packs',
      'Approvals',
      'Document support',
      'Process cleanup',
    ],
  },
];

const jumpLinks = [
  { href: '#what-rhq-is-for', label: 'What RHQ is for' },
  { href: '#who-should-consider-rhq', label: 'Who it fits' },
  { href: '#assessment', label: 'What we assess' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#support', label: 'What we support' },
  { href: '#route-comparison', label: 'RHQ vs other routes' },
  { href: '#faq', label: 'FAQ' },
];

export default function RHQPage() {
  return (
    <main className="bg-white text-neutral-900">
      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              RHQ track
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              Assess, set up, and activate your Regional Headquarters in Saudi
              Arabia.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
              Catalyft helps multinational groups understand whether the Saudi
              RHQ route fits their structure, then supports the licensing,
              setup, staffing coordination, governance, and operating
              requirements needed to activate the headquarters in Riyadh.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ContactButton className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200">
                Book an RHQ assessment call
                <ArrowRight className="size-4" />
              </ContactButton>
              <a
                href="#who-should-consider-rhq"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                See if RHQ fits
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

      <section id="what-rhq-is-for" className="scroll-mt-24 px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              RHQ route
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              What the RHQ route is for
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-neutral-600">
              The Saudi RHQ route is designed for multinational groups that want
              to centralize regional leadership, management, or support
              functions in Riyadh. It is not just a registration step. It
              requires a real operating model, clear regional responsibilities,
              and the ability to meet ongoing activation and compliance
              expectations.
            </p>
            <div className="mt-7 border-y border-neutral-200">
              {rhqPoints.map((item) => (
                <div key={item} className="flex gap-3 border-b border-neutral-200 py-4 last:border-b-0">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-neutral-950" />
                  <span className="text-sm text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="who-should-consider-rhq"
        className="scroll-mt-24 bg-[#f7f6f2] px-6 py-16"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Fit
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Who should consider RHQ
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              RHQ is usually relevant when the Saudi presence is part of a
              broader regional strategy, not just a single-market sales setup.
            </p>
          </div>

          <Checklist items={fitCriteria} />
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Route caution
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Who may not need RHQ
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              RHQ is not always the right route. In some cases, a branch, LLC,
              or another Saudi structure may be more practical.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 underline underline-offset-4"
            >
              Not sure which route fits? Book an RHQ assessment call.
            </a>
          </div>

          <Checklist items={notFitCriteria} />
        </div>
      </section>

      <section id="assessment" className="scroll-mt-24 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Assessment
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              What we assess before starting
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              Before starting the RHQ process, we help clarify whether the route
              fits your group structure, regional model, and practical operating
              plans.
            </p>
          </div>

          <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
            {assessmentAreas.map((item) => (
              <TextRow key={item.title} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="roadmap"
        className="scroll-mt-24 bg-[#f7f6f2] px-6 py-16 md:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Roadmap
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              RHQ setup and activation roadmap
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600">
              The exact path depends on your group structure, functions,
              documents, and activation plan. This is the typical sequence we
              help manage.
            </p>
          </div>

          <ol className="relative border-l border-neutral-300 pl-7">
            {roadmap.map((step) => (
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
              RHQ requires client-side decisions, approvals, and internal
              alignment. Catalyft can manage the process, but your team still
              needs to provide the group information and decisions needed to
              support the application and activation plan.
            </p>
          </div>

          <Checklist items={clientNeeds} />
        </div>
      </section>

      <section id="route-comparison" className="scroll-mt-24 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Route comparison
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              RHQ vs other Saudi setup routes
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">
              RHQ is one possible route, but it is not the only way to
              establish in Saudi. The right route depends on your group
              structure, activities, customers, and operating plan.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto border-y border-neutral-200">
            <table className="w-full min-w-[880px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200">
                  {routeComparison.map((route) => (
                    <th
                      key={route.route}
                      className="w-1/3 px-6 py-4 text-xl font-semibold text-neutral-950 first:pl-0 last:pr-0"
                    >
                      {route.route}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="align-top">
                  {routeComparison.map((route, index) => (
                    <td
                      key={route.route}
                      className={`px-6 py-6 text-neutral-700 first:pl-0 last:pr-0 ${
                        index > 0 ? 'border-l border-neutral-200' : ''
                      }`}
                    >
                      <p className="leading-relaxed">{route.bestFor}</p>
                      <BulletList items={route.focus} />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Not sure which route fits? Book an RHQ assessment call
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>

      <RHQFaq />

      <section id="contact" className="scroll-mt-24 bg-black px-6 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 border-y border-white/10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Get in touch
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
              Considering RHQ in Saudi Arabia?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Book an RHQ assessment call and we’ll help you understand whether
              the route fits your group structure, what needs to be prepared,
              and what activation would require.
            </p>
          </div>

          <div className="lg:ml-auto lg:max-w-sm">
            <ContactButton className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200 sm:w-auto lg:w-full">
              Book an RHQ assessment call
              <ArrowRight className="size-4" />
            </ContactButton>
            <a
              href="mailto:info@catalyft.sa?subject=RHQ%20Assessment%20Inquiry"
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
    <div className="grid gap-3 py-6 md:grid-cols-[0.4fr_0.6fr] md:gap-8">
      <h3 className="text-lg font-semibold text-neutral-950">{title}</h3>
      <p className="text-sm leading-relaxed text-neutral-600">{desc}</p>
    </div>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
      {items.map((item) => (
        <li key={item} className="flex gap-4 py-4 text-sm leading-relaxed text-neutral-700">
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
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</p>
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
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-700">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-950" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
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
