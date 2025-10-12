'use client';

import { useId, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function OperateFaq() {
  const [openSection, setOpenSection] = useState(false);
  const [openItem, setOpenItem] = useState<string | ''>('');

  const items: { id: string; q: string; a: string }[] = [
    {
      id: 'q1',
      q: 'Do you act as our GRO/PRO or just coordinate?',
      a: 'We can operate as your day-to-day GRO/PRO function or coordinate with your in-house team. Either way, we own the tracker, timelines, and follow-ups.',
    },
    {
      id: 'q2',
      q: 'Can you run payroll end to end?',
      a: 'We set up a clean workflow: contracts in Qiwa, WPS file prep/coordination, GOSI changes, and reconciliations. If you prefer a payroll provider, we integrate and manage the cadence.',
    },
    {
      id: 'q3',
      q: 'Which portals do you manage?',
      a: 'Commonly Qiwa, GOSI, Muqeem, ZATCA, MISA/Najiz—and others as needed. We keep access and renewals organized and on schedule.',
    },
    {
      id: 'q4',
      q: 'What vendor registrations do you handle?',
      a: 'Customer and marketplace onboarding where document packs are required. We gather evidence, submit, and track to approval.',
    },
    {
      id: 'q5',
      q: 'Can you secure sector approvals for us?',
      a: 'We coordinate third-party or customer approvals tied to your activity. The decision rests with the issuing body—we make the path and pack clear.',
    },
    {
      id: 'q6',
      q: 'How do you price Operate?',
      a: 'Light, Standard, and Full packages with clear inclusions. We’ll map needs on a short call and recommend the fit before we start.',
    },
  ];

  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
            FAQ
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Operate questions we get a lot.
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setOpenSection((v) => !v)}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
          aria-expanded={openSection}
          aria-controls="operate-faq-panel"
        >
          {openSection ? (
            <Minus className="size-4" />
          ) : (
            <Plus className="size-4" />
          )}
          {openSection ? 'Hide Q&A' : 'Show Q&A'}
        </button>
      </div>

      {/* Collapsible wrapper with zero space when closed */}
      <div className={`${openSection ? 'mt-8' : ''}`}>
        <div
          id="operate-faq-panel"
          aria-hidden={!openSection}
          className={`grid overflow-hidden transition-all duration-300 ${
            openSection
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="min-h-0">
            <ul className="divide-y divide-neutral-200 overflow-hidden rounded-2xl border border-neutral-200 bg-white">
              {items.map((item) => (
                <FaqItem
                  key={item.id}
                  id={item.id}
                  question={item.q}
                  answer={item.a}
                  openItem={openItem}
                  setOpenItem={setOpenItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({
  id,
  question,
  answer,
  openItem,
  setOpenItem,
}: {
  id: string;
  question: string;
  answer: string;
  openItem: string | '';
  setOpenItem: (id: string | '') => void;
}) {
  const contentId = useId();
  const isOpen = openItem === id;

  return (
    <li className="bg-white">
      <button
        type="button"
        onClick={() => setOpenItem(isOpen ? '' : id)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left hover:bg-neutral-50"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="text-base font-semibold text-neutral-900">
          {question}
        </span>
        <span
          className={`shrink-0 rounded-full border border-neutral-300 p-1 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          aria-hidden
        >
          {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </span>
      </button>

      <div
        id={contentId}
        className={`grid transition-all duration-300 ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-5 pb-5 text-sm leading-relaxed text-neutral-700">
            {answer}
          </div>
        </div>
      </div>
    </li>
  );
}
