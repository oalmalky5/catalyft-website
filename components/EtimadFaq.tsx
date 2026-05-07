'use client';

import { useId, useState } from 'react';
import { Minus, Plus } from 'lucide-react';

export default function EtimadFaq() {
  const [openItem, setOpenItem] = useState<string | ''>('q1');

  const items: { id: string; q: string; a: string }[] = [
    {
      id: 'q1',
      q: 'What is Etimad?',
      a: 'Etimad is the Saudi government e-procurement platform where suppliers can access and respond to government and public-sector tender opportunities.',
    },
    {
      id: 'q2',
      q: 'Is Etimad registration enough to start bidding?',
      a: 'Registration is only the first step. Your team also needs the right access, reusable documents, qualification criteria, submission owners, and a clear process for each opportunity.',
    },
    {
      id: 'q3',
      q: 'Can Catalyft set up our Etimad account?',
      a: 'Yes. We can support account setup or review existing access, user roles, permissions, and secure handover, subject to the platform requirements and information your team provides.',
    },
    {
      id: 'q4',
      q: 'Can you help us find relevant tenders?',
      a: 'Yes. We guide your team on where to search, how to filter opportunities, and how to maintain a shortlist of tenders that may fit your business.',
    },
    {
      id: 'q5',
      q: 'Can you help us decide which tenders to pursue?',
      a: 'We help create a go/no-go checklist and review requirements, timing, fit, and internal capacity. Your team owns the final commercial decision to pursue or skip each tender.',
    },
    {
      id: 'q6',
      q: 'Do you write the full proposal for us?',
      a: 'We can support proposal structure, required documents, review points, and submission preparation. Your team owns the commercial and technical proposal content unless a separate writing scope is agreed.',
    },
    {
      id: 'q7',
      q: 'Can you guarantee tender awards?',
      a: 'No. Tender awards, buyer decisions, scoring results, platform processing, and submission acceptance are decided by the issuing entity or relevant platform process.',
    },
    {
      id: 'q8',
      q: 'What documents do we need before bidding?',
      a: 'Requirements depend on the tender. Common inputs include Commercial Registration, company certificates, authorization letters, signatory details, Arabic documents where needed, and technical or commercial supporting information.',
    },
    {
      id: 'q9',
      q: 'Can you train our team to use Etimad?',
      a: 'Yes. We run working sessions for sales, operations, or proposal teams and hand over process notes, templates, trackers, and a repeatable Etimad playbook.',
    },
    {
      id: 'q10',
      q: 'What does the Etimad readiness call cover?',
      a: 'We review your current access, document readiness, tender goals, team owners, and the next steps needed to build a workable Etimad submission process.',
    },
  ];

  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
          FAQ
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Etimad FAQ</h2>
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
