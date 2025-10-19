'use client';

import { useId, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function RHQFaq() {
  const [openSection, setOpenSection] = useState(false);
  const [openItem, setOpenItem] = useState<string | ''>('');

  const items: { id: string; q: string; a: string }[] = [
    {
      id: 'q1',
      q: 'What is a Regional Headquarters (RHQ)?',
      a: 'An RHQ is a real headquarters in Riyadh that leads and supports your operations across multiple countries. It houses decision-makers and shared services (strategy, finance, people, legal, etc.)—it’s more than a branch or representative office.',
    },
    {
      id: 'q2',
      q: 'Who is an RHQ best suited for?',
      a: 'Multinationals consolidating regional leadership in Riyadh—teams that want one executive base directing multiple markets, with the structure to hire, report, and run core HQ functions in the Kingdom.',
    },
    {
      id: 'q3',
      q: 'What are the tangible benefits of an RHQ?',
      a: [
        'In short: it makes running the region easier and more attractive. RHQ status unlocks a purpose-built incentive framework for eligible HQ activities—most notably long-term relief on corporate and withholding taxes tied to RHQ work. It also smooths mobility: issuing work visas for your team is simpler, dependents can access work via local programs, and top executives have premium residency pathways. Practically, procurement doors open wider because buyers and public entities look for a real HQ presence. Internally, you get a clean way to centralize finance, HR, legal, and procurement in one place, with an operating model designed for multi-country oversight. Put together, it’s a no-brainer if you want a serious regional command center rather than piecemeal offices.',
      ].join(' '),
    },
    {
      id: 'q4',
      q: 'What are the key requirements we should plan for?',
      a: 'Think of it in simple terms: you’ll set up a physical headquarters in Riyadh and actually switch on HQ functions—not just put a name on the door. That means appointing your executives, activating leadership and shared services on a clear timeline, and building the first-year team (a common benchmark is around 15 full-time roles including leadership). From there, you keep a clean operating rhythm—light governance, periodic evaluations with evidence packs, and on-time renewals. The RHQ focuses on regional leadership across multiple countries, while direct revenue typically stays with your operating entities. We translate this into a step-by-step plan and keep each obligation visible so nothing slips.',
    },
    {
      id: 'q5',
      q: 'How do you help with RHQ licensing?',
      a: 'End-to-end: eligibility confirmation, document preparation, application submission, authority follow-ups, and issuance. After licensing, we complete core registrations and corporate banking so you can operate.',
    },
    {
      id: 'q6',
      q: 'What about staffing and activation?',
      a: 'We define required functions, build a staffing plan, onboard executives, and enable compliant hiring for initial roles. We also set up the evidence and reports you’ll need for evaluations and renewals.',
    },
    {
      id: 'q7',
      q: 'Can the RHQ generate revenue directly?',
      a: 'RHQs are primarily for strategic and administrative leadership. Direct commercial revenue typically sits with operating entities. We structure the setup so leadership, delivery, and compliance align.',
    },
    {
      id: 'q8',
      q: 'How do you keep the RHQ compliant over time?',
      a: 'We install a simple cadence: one tracker for owners and dates, lightweight governance, and monthly/quarterly evidence packs—so renewals and obligations are met on time without scramble.',
    },
    {
      id: 'q9',
      q: 'Do we need local portal or regulatory expertise on our side?',
      a: 'No. We handle the submissions and guide the minimum secure access your team needs to grant. We keep instructions in plain English and only request documents that must come from you.',
    },
    {
      id: 'q10',
      q: 'How fast can we start?',
      a: 'Usually within days of an initial consult. We align the plan, confirm access, and begin execution on the agreed track while keeping status and next steps visible the whole way.',
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
            RHQ Q&amp;A
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setOpenSection((v) => !v)}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
          aria-expanded={openSection}
          aria-controls="rhq-faq-panel"
        >
          {openSection ? (
            <Minus className="size-4" />
          ) : (
            <Plus className="size-4" />
          )}
          {openSection ? 'Hide Q&A' : 'Show Q&A'}
        </button>
      </div>

      {/* zero-space when closed */}
      <div className={openSection ? 'mt-8' : ''}>
        <div
          id="rhq-faq-panel"
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

      {/* smooth collapse, no leftover space when closed */}
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
