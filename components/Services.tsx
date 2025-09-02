// components/Services.tsx
import {
  FileDown,
  Building2,
  ShieldCheck,
  SlidersHorizontal,
} from 'lucide-react';

type Item = { text: React.ReactNode };
type Pkg = {
  theme: 'dark' | 'light';
  badge: string;
  title: string;
  subtitle: string;
  items: Item[];
  brochure: string;
};

const PACKAGES: Pkg[] = [
  {
    theme: 'dark',
    badge: 'Setup',
    title: 'Foundation Setup',
    subtitle: 'Start in Saudi with a precise, engineered launch.',
    items: [
      {
        text: 'Set up a branch of a foreign company (MISA issuance & approvals)',
      },
      { text: 'Establish a new company from scratch in KSA' },
      { text: 'Structure a Saudi‑owned brand / joint venture' },
      { text: 'Initial operational scaffolding ready for day‑one execution' },
    ],
    brochure: '/brochures/catalyft-foundation-setup.pdf',
  },
  {
    theme: 'light',
    badge: 'Post‑Setup',
    title: 'Continuity & Compliance',
    subtitle: 'Keep operations stable, compliant, and moving.',
    items: [
      { text: 'Renewals and monthly actions (policy, filings, and reminders)' },
      { text: 'GOSI, payroll rhythms, and HR guardrails' },
      { text: 'Operational enablement sessions (incl. Etimad readiness)' },
      { text: 'Ongoing operational oversight with clear SLAs' },
    ],
    brochure: '/brochures/catalyft-continuity-compliance.pdf',
  },
  {
    theme: 'dark',
    badge: 'Custom & PPS',
    title: 'Tailored & PPS',
    subtitle: 'Exactly what you need — as a bundle or pay‑per‑service.',
    items: [
      <>
        <strong>Etimad onboarding & working sessions</strong> — account
        creation, readiness, and hands‑on enablement
      </>,
      { text: 'Customized scope after discovery with your team' },
      { text: 'Certificate issuances with Saudi authorities (all types)' },
      {
        text: 'Targeted prospecting: curated list of potential clients to reach out to',
      },
    ] as Item[],
    brochure: '/brochures/catalyft-tailored-pps.pdf',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Services
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Packages built for momentum
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-700">
            Choose a package—or mix and match with pay‑per‑service. We lift,
            align, and launch your operations in Saudi with clarity and
            predictable execution.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {PACKAGES.map((pkg, i) => (
            <ServiceCard key={i} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- subcomponents ---------------- */

function ServiceCard({ pkg }: { pkg: Pkg }) {
  const isDark = pkg.theme === 'dark';

  const Icon = iMatch(pkg.badge, {
    Setup: Building2,
    'Post‑Setup': ShieldCheck,
    default: SlidersHorizontal,
  });

  return (
    <div
      className={[
        'flex h-full flex-col rounded-2xl border p-8',
        isDark
          ? 'bg-black text-white border-white/15'
          : 'bg-white text-neutral-900 border-neutral-200',
      ].join(' ')}
    >
      <div className="mb-6 flex items-center justify-between">
        <span
          className={[
            'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium',
            isDark
              ? 'bg-white/10 text-white'
              : 'bg-neutral-100 text-neutral-700',
          ].join(' ')}
        >
          {Icon ? <Icon className="size-4" /> : null}
          {pkg.badge}
        </span>
      </div>

      <h3
        className={[
          'text-2xl font-bold',
          isDark ? 'text-white' : 'text-neutral-900',
        ].join(' ')}
      >
        {pkg.title}
      </h3>
      <p
        className={[
          'mt-2 text-sm',
          isDark ? 'text-white/75' : 'text-neutral-600',
        ].join(' ')}
      >
        {pkg.subtitle}
      </p>

      <ul className="mt-6 flex flex-1 flex-col gap-2">
        {pkg.items.map((it, idx) => (
          <li
            key={idx}
            className={[
              'flex items-start gap-3 text-sm leading-relaxed',
              isDark ? 'text-white/85' : 'text-neutral-800',
            ].join(' ')}
          >
            <span
              className={[
                'mt-2 inline-block size-1.5 rounded-full',
                isDark ? 'bg-white' : 'bg-neutral-900',
              ].join(' ')}
            />
            <span>{it.text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-start">
        <a
          href={pkg.brochure}
          download
          className={[
            'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium',
            isDark
              ? 'bg-white text-black hover:bg-neutral-200'
              : 'bg-black text-white hover:bg-neutral-800',
          ].join(' ')}
        >
          <FileDown className="size-4" />
          Download Brochure (PDF)
        </a>
      </div>
    </div>
  );
}

function iMatch<T extends Record<string, any>>(
  key: string,
  map: T & { default: any }
) {
  return map[key as keyof T] ?? map.default;
}
