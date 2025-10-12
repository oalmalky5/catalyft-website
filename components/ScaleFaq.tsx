'use client';

import { useId, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function ScaleFaq() {
  const [openSection, setOpenSection] = useState(false);
  const [openItem, setOpenItem] = useState<string | ''>('');

  const items: { id: string; q: string; a: string }[] = [
    {
      id: 'q1',
      q: 'How do custom packages differ from pay-per-service?',
      a: 'Custom packages bundle a scoped set of services with clear timelines and owners. Pay-per-service lets you request specific actions on demand. We’ll recommend the right fit in a short discovery.',
    },
    {
      id: 'q2',
      q: 'Can you run Etimad for us end to end?',
      a: 'We set up the account, guide readiness, and support submissions with working sessions. Awards and approvals are made by the issuing bodies—we make your path clear and compliant.',
    },
    {
      id: 'q3',
      q: 'Do you provide prospect lists or introductions?',
      a: 'Yes, where there is clear fit. We can generate targeted lists and make warm intros when valuable on both sides.',
    },
    {
      id: 'q4',
      q: 'What if we only need one certification or approval?',
      a: 'That’s a good pay-per-service use case. We coordinate requirements, prepare the pack, and track to decision.',
    },
    {
      id: 'q5',
      q: 'How fast can we start?',
      a: 'Usually within days of discovery. We align on scope, confirm access, and begin execution on the agreed track.',
    },
    {
      id: 'q6',
      q: 'How do you price Scale?',
      a: 'Transparent fees per package or per service with clear inclusions. If scope changes, we agree it in advance.',
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
            Scale questions we get a lot.
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
