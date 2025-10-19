'use client';

import { useId, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function ScaleFaq() {
  const [openSection, setOpenSection] = useState(false);
  const [openItem, setOpenItem] = useState<string | ''>('');

  const items: { id: string; q: string; a: string }[] = [
    {
      id: 'q1',
      q: 'What does “Scale” actually cover?',
      a: 'We handle the work that moves growth forward: certifications and approvals your customers require, onboarding to key accounts and platforms, hiring support for your first roles, proposal/local docs, and a simple operating rhythm so actions keep moving.',
    },
    {
      id: 'q2',
      q: 'Custom package or pay-per-service — how do I choose?',
      a: 'If you have several priorities and want one team to drive them, pick a custom package. If you only need one or two actions now, choose pay-per-service. We’ll recommend the right fit after a short call.',
    },
    {
      id: 'q3',
      q: 'How fast can you start and what happens first?',
      a: 'We can usually start within days. First, we confirm priorities and access, then we ship the quickest unlocks while setting up a tracker with owners and dates you can see anytime.',
    },
    {
      id: 'q4',
      q: 'Do you handle customer or sector approvals end to end?',
      a: 'Yes. We prepare the documents, submit the applications, and track to decision. We keep you posted on anything that needs your sign-off and share confirmations once approved.',
    },
    {
      id: 'q5',
      q: 'Can you onboard us to marketplaces or strategic customers?',
      a: 'Yes. We assemble and file the onboarding packs those platforms ask for, follow up for approvals, and confirm access so sales isn’t blocked by paperwork.',
    },
    {
      id: 'q6',
      q: 'Do you help with hiring and first-time HR setup?',
      a: 'Yes. We prepare clean offer and employment documents, guide first-hire onboarding, and put a light people-ops rhythm in place so changes are handled correctly.',
    },
    {
      id: 'q7',
      q: 'How do we keep track of progress?',
      a: 'You get a single tracker with named owners, due dates, and status updates. We also send short weekly notes: what’s done, what’s next, and any inputs needed from you.',
    },

    {
      id: 'q9',
      q: 'Do you require us to understand local portals or jargon?',
      a: 'No. We avoid jargon and handle submissions directly. When we need your approval or a document, we ask in plain English and keep it minimal.',
    },
    {
      id: 'q10',
      q: 'What do you need from us to move quickly?',
      a: 'A primary point of contact, timely approvals, and the documents only you can provide (e.g., company IDs, signed forms). We keep requests short so your team can stay focused on customers.',
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
            Scale Q&amp;A
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setOpenSection((v) => !v)}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
          aria-expanded={openSection}
          aria-controls="scale-faq-panel"
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
      <div className={`${openSection ? 'mt-8' : ''}`}>
        <div
          id="scale-faq-panel"
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
