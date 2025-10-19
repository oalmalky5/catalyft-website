// components/Services.tsx
import Link from 'next/link';
import {
  Building2,
  ShieldCheck,
  TrendingUp,
  Globe2,
  FileText,
  type LucideIcon,
} from 'lucide-react';

type Badge = 'Launch' | 'Operate' | 'Scale' | 'RHQ' | 'Etimad';

type Offering = {
  badge: Badge;
  title: string;
  subtitle: string;
  bullets: string[];
  href: string;
};

const ICONS: Record<Badge, LucideIcon> = {
  Launch: Building2,
  Operate: ShieldCheck,
  Scale: TrendingUp,
  RHQ: Globe2,
  Etimad: FileText,
};

const ROW1: Offering[] = [
  {
    badge: 'Launch',
    title: 'Launch (Foundation Setup)',
    subtitle: 'Start in Saudi with a precise, engineered launch.',
    bullets: [
      'MISA license issuance & guidance',
      'Commercial Registration & Articles drafting/issuance',
      'GM onboarding (visa → iqama) & secure handover',
      'Corporate bank setup & key gov-portal onboarding',
    ],
    href: '/services/launch',
  },
  {
    badge: 'Operate',
    title: 'Operate (Continuity & Compliance)',
    subtitle: 'Keep operations stable, compliant, and moving.',
    bullets: [
      'Renewals & recurring filings with clear reminders',
      'HR & payroll guardrails (contracts, WPS, GOSI rhythms)',
      'Vendor/marketplace registrations & third-party approvals',
      'One tracker for owners, dates, and follow-through',
    ],
    href: '/services/operate',
  },
  {
    badge: 'Scale',
    title: 'Scale (Custom & PPS)',
    subtitle: 'Exactly what you need — bundle or pay-per-service.',
    bullets: [
      'Custom scope after discovery, built around targets',
      'Approvals & certifications that unlock delivery',
      'Hands-on enablement workshops (non-Etimad)',
      'Customer onboarding packs & light prospecting support',
    ],
    href: '/services/scale',
  },
];

const ROW2: Offering[] = [
  {
    badge: 'RHQ',
    title: 'Regional Headquarters (RHQ)',
    subtitle: 'License, activate, and operate your regional command center.',
    bullets: [
      'End-to-end RHQ licensing & core registrations',
      'Staffing plan & activation of HQ functions',
      'Governance, evidence packs, & renewals cadence',
      'Banking and compliant operating setup in Riyadh',
    ],
    href: '/services/rhq',
  },
  {
    badge: 'Etimad',
    title: 'Etimad Enablement',
    subtitle: 'Onboarding, working sessions, and bid submission know-how.',
    bullets: [
      'Account setup, roles, and secure access handover',
      'Finding & qualifying tenders with a simple go/no-go',
      'Proposal structure, reviews, and compliant document packs',
      'Submission workflow, checkpoints, and timelines',
    ],
    href: '/services/etimad',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            Services
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            Built to Launch, Operate, Scale — plus RHQ and Etimad
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-700">
            Pick the track you need now—or mix and match. These tiles are
            summaries; click through for the full flow, inclusions, and FAQs.
          </p>
        </div>

        {/* Row 1: three equal cards */}
        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ROW1.map((o) => (
            <Card key={o.badge} o={o} />
          ))}
        </div>

        {/* Row 2: centered two cards, same width as row 1 (1/3 each) */}
        <div className="mt-6 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-6">
          {ROW2.map((o, idx) => (
            <div
              key={o.badge}
              className={
                idx === 0
                  ? 'lg:col-span-2 lg:col-start-2'
                  : 'lg:col-span-2 lg:col-start-4'
              }
            >
              <Card o={o} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- subcomponents ---------------- */

function Card({ o }: { o: Offering }) {
  const Icon = ICONS[o.badge];

  return (
    <div
      className={[
        'flex h-full min-h-[34rem] flex-col', // uniform height across rows
        'overflow-hidden rounded-2xl border border-neutral-200 bg-white',
        'shadow-sm transition hover:bg-neutral-50 hover:shadow-md',
        'focus-within:ring-2 focus-within:ring-neutral-300',
      ].join(' ')}
    >
      <div className="p-6">
        {/* Chip */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
          <span className="grid size-5 place-items-center rounded-md bg-neutral-100 text-neutral-900">
            <Icon className="size-3.5" />
          </span>
          {o.badge}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-semibold text-neutral-900">{o.title}</h3>
        <p className="mt-2 text-sm text-neutral-600">{o.subtitle}</p>

        {/* Bullets */}
        <ul className="mt-5 flex flex-1 flex-col gap-2">
          {o.bullets.map((t, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm leading-relaxed text-neutral-800"
            >
              <span className="mt-2 inline-block size-1.5 rounded-full bg-neutral-900/90" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer CTA */}
      <div className="mt-auto border-t border-neutral-200 bg-white/60 p-4">
        <Link
          href={o.href}
          className="inline-flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-3.5 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
        >
          Explore {o.badge}
        </Link>
      </div>
    </div>
  );
}
