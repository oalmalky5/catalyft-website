'use client';

import { useId, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function OperateFaq() {
  const [openItem, setOpenItem] = useState<string | ''>('q1');

  const items: { id: string; q: string; a: string }[] = [
    {
      id: 'q1',
      q: 'Is Operate only for companies Catalyft helped set up?',
      a: 'No. We can support companies Catalyft helped set up and companies that already have a Saudi entity. We start by reviewing your current records, portal access, active requirements, and recurring obligations.',
    },
    {
      id: 'q2',
      q: 'What does a monthly retainer include?',
      a: 'It depends on the agreed scope. A retainer can include renewal tracking, certificate requests, portal administration, HR and payroll coordination, Qiwa, GOSI, Mudad follow-up, customer onboarding documents, and regular status updates.',
    },
    {
      id: 'q3',
      q: 'Can you manage Qiwa, GOSI, Mudad, and other portals?',
      a: 'Yes, within the agreed scope and access model. We coordinate records, submissions, follow-ups, and status tracking across the relevant portals, subject to portal rules and authority processing.',
    },
    {
      id: 'q4',
      q: 'Do you handle payroll directly?',
      a: 'We provide payroll coordination unless a direct payroll processing scope is agreed separately. That means we help align employee records, payroll inputs, WPS requirements, approvals, and follow-through with the relevant parties.',
    },
    {
      id: 'q5',
      q: 'Can you guarantee renewals or approvals happen on time?',
      a: 'We prepare, submit, track, and follow up within the agreed scope. Some outcomes still depend on authority, bank, customer, or portal processing, and on receiving required approvals or documents from your team.',
    },
    {
      id: 'q6',
      q: 'What access do you need from us?',
      a: 'We usually need authorized portal access or approved sub-user access, plus the right internal contacts for approvals, signatures, payroll inputs, employee updates, and payment confirmations.',
    },
    {
      id: 'q7',
      q: 'Can Operate include one-off tasks?',
      a: 'Yes. One-off tasks can be added when they fit the scope, such as a certificate request, customer onboarding pack, portal cleanup, vendor registration, or specific government submission.',
    },
    {
      id: 'q8',
      q: 'How do we choose between light, standard, and full support?',
      a: 'We review your current activity, employee count, portal workload, renewals, customer requirements, and internal capacity. From there, we recommend the retainer level that matches the amount of recurring work you want Catalyft to manage.',
    },
  ];

  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          FAQ
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Operate FAQ</h2>
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
