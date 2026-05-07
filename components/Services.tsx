// components/Services.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';
import clsx from 'clsx';
import { ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import { MotionSection, Item, fadeIn, fadeInUp } from '@/components/anim';

type ServiceId = 'launch' | 'operate' | 'custom' | 'rhq' | 'etimad';

type Service = {
  id: ServiceId;
  group: 'Core services' | 'Specialist services';
  label: string;
  title: string;
  description: string;
  bestFor: string;
  includes: string[];
  cta: string;
  href: string;
};

const services: Service[] = [
  {
    id: 'launch',
    group: 'Core services',
    label: 'Launch',
    title: 'Saudi entity setup',
    description:
      'Set up your Saudi entity and get the core operating basics in place.',
    bestFor: 'Foreign companies entering Saudi for the first time.',
    includes: [
      'MISA licensing and Commercial Registration',
      'Constitutional documents and formation filings',
      'GM onboarding, bank setup, and core portal activation',
      'Clear handover of what is live, pending, and next',
    ],
    cta: 'Explore Launch',
    href: '/services/launch',
  },
  {
    id: 'operate',
    group: 'Core services',
    label: 'Operate',
    title: 'Post-setup operations',
    description: 'Keep your Saudi entity active, compliant, and ready to operate.',
    bestFor:
      'Companies already incorporated in Saudi that need ongoing support.',
    includes: [
      'Renewals, recurring filings, and company certificates',
      'Qiwa, GOSI, Mudad, HR, and payroll coordination',
      'Portal administration and compliance follow-through',
      'Ongoing operational support across recurring requirements',
    ],
    cta: 'Explore Operate',
    href: '/services/operate',
  },
  {
    id: 'custom',
    group: 'Core services',
    label: 'Custom support',
    title: 'Saudi operations sprint',
    description:
      'Targeted support for specific blockers, short-term needs, or custom scope.',
    bestFor: 'Teams that need help with a defined task after setup.',
    includes: [
      'Approvals, certificates, and customer onboarding requirements',
      'Supplier and platform registrations',
      'Process cleanup, enablement sessions, or defined support tasks',
      'Flexible scope built around the immediate need',
    ],
    cta: 'Explore Custom Support',
    href: '/services/scale',
  },
  {
    id: 'rhq',
    group: 'Specialist services',
    label: 'RHQ',
    title: 'Regional Headquarters support',
    description: 'Set up and activate your Regional Headquarters in Riyadh.',
    bestFor:
      'Groups exploring RHQ or preparing to operate under the RHQ model.',
    includes: [
      'RHQ licensing and related registrations',
      'Activation planning and compliance support',
      'Staffing and operating setup in Riyadh',
      'Ongoing RHQ requirements and renewals',
    ],
    cta: 'Explore RHQ',
    href: '/services/rhq',
  },
  {
    id: 'etimad',
    group: 'Specialist services',
    label: 'Etimad',
    title: 'Etimad enablement',
    description: 'Get registered on Etimad and build a workable tender process.',
    bestFor: 'Companies selling to government or semi-government buyers.',
    includes: [
      'Account setup and access handover',
      'Tender search and qualification support',
      'Bid document preparation and submission workflows',
      'Working sessions and first-submission guidance',
    ],
    cta: 'Explore Etimad',
    href: '/services/etimad',
  },
];

const groups: Service['group'][] = ['Core services', 'Specialist services'];

export default function Services() {
  const [selectedId, setSelectedId] = useState<ServiceId>('launch');
  const selected =
    services.find((service) => service.id === selectedId) ?? services[0];

  return (
    <MotionSection
      id="services"
      className="bg-white scroll-mt-20"
      once
      amount={0.25}
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <Item variants={fadeIn}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
              Services
            </p>
          </Item>
          <Item variants={fadeInUp}>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950 md:text-5xl">
              Choose the support you need
            </h2>
          </Item>
          <Item variants={fadeInUp}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
              Select a service track to see what it includes, who it’s for, and
              where to go next.
            </p>
          </Item>
        </div>

        <div className="hidden gap-6 lg:grid lg:grid-cols-[0.4fr_0.6fr]">
          <ServiceSelector selectedId={selectedId} onSelect={setSelectedId} />
          <ServiceDetail service={selected} />
        </div>

        <div className="lg:hidden">
          <p className="mb-4 text-sm font-semibold text-neutral-800">
            Choose a service to view details
          </p>
          <div className="grid gap-3">
            {services.map((service) => (
              <MobileService
                key={service.id}
                service={service}
                open={selectedId === service.id}
                onToggle={() => setSelectedId(service.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function ServiceSelector({
  selectedId,
  onSelect,
}: {
  selectedId: ServiceId;
  onSelect: (id: ServiceId) => void;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-[#f7f6f2] p-5">
      <div className="mb-5 px-1">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
          Step 1
        </p>
        <h3 className="mt-1 text-lg font-semibold text-neutral-950">
          Choose a service
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          Pick a track below. The service brief updates on the right.
        </p>
      </div>

      {groups.map((group) => (
        <div key={group} className="py-3">
          <div className="mb-3 flex items-center gap-3 px-1">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-800">
              {group}
            </p>
            <span className="h-px flex-1 bg-neutral-300" />
          </div>
          <div className="grid gap-2">
            {services
              .filter((service) => service.group === group)
              .map((service) => {
                const active = selectedId === service.id;

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => onSelect(service.id)}
                    className={clsx(
                      'group relative flex items-center justify-between gap-4 rounded-xl border px-4 py-3.5 text-left text-sm transition',
                      active
                        ? 'border-[#b9a56d] bg-white text-neutral-950 shadow-[inset_3px_0_0_#b9a56d]'
                        : 'border-transparent bg-transparent text-neutral-600 hover:border-neutral-200 hover:bg-white/70 hover:text-neutral-950'
                    )}
                    aria-pressed={active}
                  >
                    <span>
                      <span className="flex items-center gap-2 font-semibold">
                        {service.label}
                        {active && (
                          <span className="rounded-full border border-[#d6c89a] bg-[#faf7ee] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#7a6428]">
                            Selected
                          </span>
                        )}
                      </span>
                      <span className="mt-1 block text-xs text-neutral-500">
                        {service.title}
                      </span>
                    </span>
                    <ChevronRight
                      className={clsx(
                        'size-4 shrink-0 transition',
                        active
                          ? 'translate-x-0 text-[#8a7434]'
                          : 'text-neutral-400 group-hover:translate-x-0.5 group-hover:text-neutral-700'
                      )}
                    />
                  </button>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}

function ServiceDetail({ service }: { service: Service }) {
  return (
    <article className="rounded-2xl border border-neutral-200 bg-white p-7">
      <div className="mb-6 border-b border-neutral-200 pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
          Step 2
        </p>
        <h3 className="mt-1 text-lg font-semibold text-neutral-950">
          Review what’s included
        </h3>
      </div>

      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
        {service.label}
      </p>
      <h4 className="mt-3 text-3xl font-bold tracking-tight text-neutral-950">
        {service.title}
      </h4>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600">
        {service.description}
      </p>

      <div className="mt-5 rounded-xl border border-neutral-200 bg-[#f7f6f2] p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
          Best for
        </p>
        <p className="mt-2 text-sm font-medium text-neutral-900">
          {service.bestFor}
        </p>
      </div>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
          Includes
        </p>
        <ul className="mt-3 grid gap-3">
          {service.includes.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-neutral-700"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-900" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href={service.href}
        className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
      >
        {service.cta}
        <ArrowRight className="size-4" />
      </Link>
    </article>
  );
}

function MobileService({
  service,
  open,
  onToggle,
}: {
  service: Service;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
      <button
        type="button"
        onClick={onToggle}
        className={clsx(
          'flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition',
          open ? 'bg-neutral-50' : 'hover:bg-neutral-50'
        )}
        aria-expanded={open}
      >
        <span>
          <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
            {service.label}
          </span>
          <span className="mt-1 block text-lg font-semibold text-neutral-950">
            {service.title}
          </span>
        </span>
        <ChevronDown
          className={clsx('size-5 shrink-0 transition', open && 'rotate-180')}
        />
      </button>

      {open && (
        <div className="border-t border-neutral-200 px-5 py-5">
          <p className="text-sm leading-relaxed text-neutral-600">
            {service.description}
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Best for
          </p>
          <p className="mt-2 text-sm font-medium text-neutral-900">
            {service.bestFor}
          </p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">
            Includes
          </p>
          <ul className="mt-3 grid gap-2">
            {service.includes.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-neutral-700"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-neutral-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href={service.href}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
          >
            {service.cta}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      )}
    </article>
  );
}
