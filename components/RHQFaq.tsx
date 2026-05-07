'use client';

import { useId, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function RHQFaq() {
  const [openItem, setOpenItem] = useState<string | ''>('q1');

  const items: { id: string; q: string; a: string }[] = [
    {
      id: 'q1',
      q: 'What is a Saudi RHQ?',
      a: 'A Saudi RHQ is a Regional Headquarters route for multinational groups that want to centralize regional leadership, management, or support functions in Riyadh. It is not just a company registration.',
    },
    {
      id: 'q2',
      q: 'Which companies should consider RHQ?',
      a: 'RHQ is usually relevant for groups operating across more than one regional market and planning to place real leadership, management, support functions, staffing, governance, and reporting in Riyadh.',
    },
    {
      id: 'q3',
      q: 'Is RHQ the same as opening a branch or local entity?',
      a: 'No. A branch or local entity is usually used for commercial presence, delivery, hiring, and local operations. RHQ is focused on a regional headquarters model and requires a different assessment and activation plan.',
    },
    {
      id: 'q4',
      q: 'What does Catalyft assess before starting?',
      a: 'We assess group structure, regional footprint, intended RHQ functions, staffing plans, governance, documents, approvals, and what activation would require after licensing.',
    },
    {
      id: 'q5',
      q: 'What documents are usually needed?',
      a: 'Requirements depend on your group structure and the latest available requirements. Common inputs may include parent-company documents, authorizations, signatory details, ownership information, regional footprint details, and information about intended RHQ functions.',
    },
    {
      id: 'q6',
      q: 'Do you support staffing and activation?',
      a: 'Yes. We support staffing and function planning, governance routines, reporting expectations, operating trackers, and the early workstreams needed to activate the RHQ after licensing.',
    },
    {
      id: 'q7',
      q: 'Can you guarantee RHQ approval or processing timelines?',
      a: 'No. RHQ approval and timing are subject to authority review and the completeness of the file. We prepare, coordinate, submit where applicable, follow up, and keep decision points visible.',
    },
    {
      id: 'q8',
      q: 'What happens after the RHQ license is issued?',
      a: 'The RHQ still needs to be activated. That can include registrations, access, staffing coordination, governance routines, reporting, renewals, operating trackers, and handover or ongoing support.',
    },
    {
      id: 'q9',
      q: 'Can Catalyft support ongoing RHQ operations?',
      a: 'Yes. We can support ongoing requirements through an operating tracker, renewal calendar, portal and document support, handover support, or a retainer where needed.',
    },
    {
      id: 'q10',
      q: 'What does the RHQ assessment call cover?',
      a: 'We use the call to understand your group structure, regional footprint, intended functions, Saudi plans, and current documents. From there, we can explain whether RHQ may fit and what should be assessed next.',
    },
  ];

  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          FAQ
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">RHQ FAQ</h2>
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
