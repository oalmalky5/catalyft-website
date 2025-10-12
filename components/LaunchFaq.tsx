'use client';

import { useId, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function LaunchFaq() {
  const [openSection, setOpenSection] = useState(false);
  const [openItem, setOpenItem] = useState<string | ''>('');

  const items: { id: string; q: string; a: string }[] = [
    {
      id: 'q1',
      q: 'What exactly do you handle versus what we handle?',
      a: 'We coordinate the full path, prepare packs, submit where permitted, and guide the steps that need your e-signature or presence. You make key decisions and provide documents. We keep momentum and close loops.',
    },
    {
      id: 'q2',
      q: 'Should we set up a branch or a new Saudi entity?',
      a: 'It depends on your model, contracts, and hiring plans. We map pros and cons in kickoff and recommend a structure that fits, then run the filings.',
    },
    {
      id: 'q3',
      q: 'Do we need a Saudi partner?',
      a: 'Not for many activities. Some regulated sectors do require local participation. We flag this in scoping and structure the path accordingly.',
    },
    {
      id: 'q4',
      q: 'What documents will you need from us?',
      a: 'Parent company documents, board resolution and PoA, IDs for authorized signatories, and basic ownership details. We send an exact list after kickoff.',
    },
    {
      id: 'q5',
      q: 'Can this be done remotely?',
      a: 'Most steps are remote. Some banks and authority steps may require an in-person visit or e-signature. We highlight those early and schedule around your team.',
    },
    {
      id: 'q6',
      q: 'Can you open the bank account for us?',
      a: 'We coordinate the process, prepare the pack, and book meetings. The bank will require your authorized signatory for KYC and final signing.',
    },
    {
      id: 'q7',
      q: 'Do you handle the GM visa and iqama?',
      a: 'Yes. We map the steps, collect the required documents, and track progress from visa application through iqama issuance.',
    },
    {
      id: 'q8',
      q: 'Do you register us with ZATCA and handle e-invoicing?',
      a: 'We register with ZATCA and guide e-invoicing setup. If you need accounting delivery, we can recommend firms and stay aligned.',
    },
    {
      id: 'q9',
      q: 'What about Etimad?',
      a: 'We can add a light Etimad onboarding module to Launch or cover deeper enablement in the Scale track.',
    },
    {
      id: 'q10',
      q: 'How is pricing structured?',
      a: 'Fixed-fee by phase after a short discovery. If scope changes, we agree it upfront — no surprises.',
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
            Launch questions we answer early.
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setOpenSection((v) => !v)}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
          aria-expanded={openSection}
          aria-controls="launch-faq-panel"
        >
          {openSection ? (
            <Minus className="size-4" />
          ) : (
            <Plus className="size-4" />
          )}
          {openSection ? 'Hide Q&A' : 'Show Q&A'}
        </button>
      </div>

      {/* OUTER WRAPPER: removes space when closed (no mt-8) and animates height */}
      <div className={`${openSection ? 'mt-8' : ''}`}>
        <div
          id="launch-faq-panel"
          aria-hidden={!openSection}
          className={`grid overflow-hidden transition-all duration-300 ${
            openSection
              ? 'grid-rows-[1fr] opacity-100'
              : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          {/* INNER: needs min-h-0 to allow true collapse */}
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

      {/* Per-item animation with true zero-height when closed */}
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
