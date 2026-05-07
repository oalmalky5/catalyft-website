'use client';

import { useId, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function LaunchFaq() {
  const [openItem, setOpenItem] = useState<string | ''>('q1');

  const items: { id: string; q: string; a: string }[] = [
    {
      id: 'q1',
      q: 'Do foreign companies need a MISA license?',
      a: 'In most cases, yes. It depends on the company’s country, ownership, and nationality of the shareholders. We confirm upfront whether MISA is required.',
    },
    {
      id: 'q2',
      q: 'What documents are usually needed?',
      a: 'Common requirements include parent company registration documents, board approvals, powers of attorney, passport details, and activity-related information. Some documents may need notarization, legalization, or attestation before submission. Catalyft gives you full guidance on the required documents so the Saudi entity registration can move through the right process.',
    },
    {
      id: 'q3',
      q: 'Does the General Manager need to be in Saudi?',
      a: 'Yes, some GM steps require presence in Saudi, including work visa and iqama steps, banking confirmation, and any required in-person government actions. We aim to make the GM visit as smooth as possible and coordinate the required steps cleanly once the GM is in Saudi.',
    },
    {
      id: 'q4',
      q: 'Can Catalyft control government processing times?',
      a: 'We do our part by preparing the file correctly, following up continuously, and helping move items forward where possible. Government and portal processing times can still vary, so we cannot guarantee that delays will not happen.',
    },
    {
      id: 'q5',
      q: 'What happens after the Commercial Registration is issued?',
      a: 'The CR is an important milestone, but it is not the end of setup. Banking and all relevant government portals still need to be activated and handed over properly.',
    },
    {
      id: 'q6',
      q: 'Can you help with bank account opening?',
      a: 'Yes. In coordination with your team, we guide you through the banking process in Saudi, recommend suitable banks, explain how their requirements may differ, and support the GM with opening the corporate bank account while they are in Saudi.',
    },
    {
      id: 'q7',
      q: 'Do you support startups looking for programs or incentives?',
      a: 'Yes. Saudi offers several programs for certain startups that choose Saudi as an operating base. We explain the relevant options, guide you through how to apply, and clarify what documents you need to provide. Approvals, grants, discounts, and incentives are decided by the relevant program, authority, or partner.',
    },
    {
      id: 'q8',
      q: 'What does the setup call cover?',
      a: 'It is a free call where we explain the Saudi setup process, guide you through the likely route, and answer any questions you may have about requirements, documents, timeline, and next steps.',
    },
  ];

  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          FAQ
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Launch FAQ</h2>
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

      {/* smooth collapse */}
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
