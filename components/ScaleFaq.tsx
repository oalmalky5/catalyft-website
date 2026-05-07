'use client';

import { useId, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function ScaleFaq() {
  const [openItem, setOpenItem] = useState<string | ''>('q1');

  const items: { id: string; q: string; a: string }[] = [
    {
      id: 'q1',
      q: 'What is Custom Support?',
      a: 'Custom Support is targeted help for a defined Saudi operations task, blocker, customer request, approval, document pack, or short-term workstream.',
    },
    {
      id: 'q2',
      q: 'How is this different from Operate?',
      a: 'Custom Support is for a specific task or short sprint. Operate is for ongoing monthly management across renewals, portals, HR, payroll coordination, certificates, and recurring submissions.',
    },
    {
      id: 'q3',
      q: 'Can this be a one-off request?',
      a: 'Yes. A scope can be one defined request, such as preparing an onboarding pack, supporting a registration, cleaning up a portal issue, or preparing a specific certificate or letter.',
    },
    {
      id: 'q4',
      q: 'Do you offer 30-90 day sprints?',
      a: 'Yes. A short sprint can work well when the scope has a clear outcome, deadline, inputs, and owner. We define those before work starts.',
    },
    {
      id: 'q5',
      q: 'What types of documents can you help prepare?',
      a: 'We can help prepare forms, authorization letters, Arabic company documents, certificates, supporting documents, onboarding packs, proposal documents, and tracker-based handover notes within the agreed scope.',
    },
    {
      id: 'q6',
      q: 'Can you guarantee approvals or customer acceptance?',
      a: 'No. We prepare, coordinate, submit, and follow up, but approvals and acceptance remain subject to authority, customer, portal, or third-party review.',
    },
    {
      id: 'q7',
      q: 'What do you need from us to start?',
      a: 'We need the request, deadline, available documents, portal or customer requirements, required approvals, a point of contact, and any access or signatures needed to complete the work.',
    },
    {
      id: 'q8',
      q: 'Can Custom Support turn into a monthly retainer?',
      a: 'Yes. If one-off requests become recurring work, we can recommend moving to Operate so renewals, portals, HR, payroll coordination, certificates, and customer requests are managed monthly.',
    },
  ];

  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          FAQ
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          Custom Support FAQ
        </h2>
      </div>

      <ul className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200 bg-white">
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
