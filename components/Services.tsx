import Link from 'next/link';
import {
  Building2,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

type Item = { text: React.ReactNode };

type Theme = 'dark' | 'light';
type Badge = 'Launch' | 'Operate' | 'Scale';

type Offering = {
  theme: Theme;
  badge: Badge;
  title: string;
  subtitle: string;
  items: Item[];
  href: string; // route to the detail page
};

const OFFERINGS: Offering[] = [
  {
    theme: 'dark',
    badge: 'Launch',
    title: 'Launch (Foundation Setup)',
    subtitle: 'Start in Saudi with a precise, engineered launch.',
    items: [
      { text: 'Branch of a foreign company (MISA issuance & approvals)' },
      { text: 'New company set-up from scratch in KSA' },
      { text: 'Saudi-owned brand / joint-venture structuring' },
      { text: 'Day-one operational scaffolding ready to run' },
    ],
    href: '/services/launch',
  },
  {
    theme: 'light',
    badge: 'Operate',
    title: 'Operate (Continuity & Compliance)',
    subtitle: 'Keep operations stable, compliant, and moving.',
    items: [
      { text: 'Renewals & monthly actions (policies, filings, reminders)' },
      { text: 'GOSI, payroll rhythms, and HR guardrails' },
      { text: 'Operational enablement sessions (incl. Etimad readiness)' },
      { text: 'Ongoing operational oversight with clear SLAs' },
    ],
    href: '/services/operate', // create later
  },
  {
    theme: 'dark',
    badge: 'Scale',
    title: 'Scale (Custom & PPS)',
    subtitle: 'Exactly what you need — bundle or pay-per-service.',
    items: [
      {
        text: (
          <>
            <strong>Etimad onboarding & working sessions</strong> — account
            creation, readiness, and hands-on enablement
          </>
        ),
      },
      { text: 'Customized scope after discovery with your team' },
      { text: 'Certificate issuances with Saudi authorities (all types)' },
      {
        text: 'Targeted prospecting: curated list of potential clients to reach out to',
      },
    ],
    href: '/services/scale', // create later
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
            Built to Launch, Operate, and Scale
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-700">
            Pick the track you need now—or mix and match. We lift, align, and
            launch your operations in Saudi with clarity and predictable
            execution.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {OFFERINGS.map((o, i) => (
            <OfferingCard key={i} o={o} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- subcomponents ---------------- */

const ICONS: Record<Badge, LucideIcon> = {
  Launch: Building2,
  Operate: ShieldCheck,
  Scale: TrendingUp,
};

function OfferingCard({ o }: { o: Offering }) {
  const isDark = o.theme === 'dark';
  const Icon = ICONS[o.badge];

  return (
    <div
      className={[
        'flex h-full flex-col rounded-2xl border p-8',
        isDark
          ? 'bg-black text-white border-white/15'
          : 'bg-white text-neutral-900 border-neutral-200',
      ].join(' ')}
    >
      {/* header */}
      <div className="mb-6 flex items-center justify-between">
        <span
          className={[
            'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium',
            isDark
              ? 'bg-white/10 text-white'
              : 'bg-neutral-100 text-neutral-700',
          ].join(' ')}
        >
          <Icon className="size-4" />
          {o.badge}
        </span>
      </div>

      {/* title & subtitle */}
      <h3
        className={[
          'text-2xl font-bold',
          isDark ? 'text-white' : 'text-neutral-900',
        ].join(' ')}
      >
        {o.title}
      </h3>
      <p
        className={[
          'mt-2 text-sm',
          isDark ? 'text-white/75' : 'text-neutral-600',
        ].join(' ')}
      >
        {o.subtitle}
      </p>

      {/* list grows to push footer down */}
      <ul className="mt-6 flex flex-1 flex-col gap-2">
        {o.items.map((it, idx) => (
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

      {/* footer: route to detail page */}
      <div className="mt-8 flex justify-start">
        <Link
          href={o.href}
          className={[
            'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium',
            isDark
              ? 'bg-white text-black hover:bg-neutral-200'
              : 'bg-black text-white hover:bg-neutral-800',
          ].join(' ')}
        >
          Explore {o.badge}
        </Link>
      </div>
    </div>
  );
}
