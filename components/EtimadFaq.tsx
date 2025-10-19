'use client';

import { useId, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function EtimadFaq() {
  const [openSection, setOpenSection] = useState(false);
  const [openItem, setOpenItem] = useState<string | ''>('');

  const items: { id: string; q: string; a: string }[] = [
    {
      id: 'q1',
      q: 'What is Etimad?',
      a: 'Etimad is the Saudi government e-procurement portal. Buyers publish tenders, and suppliers register, qualify, and submit bids. We get you set up and teach your team how to operate confidently.',
    },
    {
      id: 'q2',
      q: 'Do you handle the account registration?',
      a: 'Yes. We register your company, set roles and permissions, and hand over secure credentials. You keep ownership; we make sure it’s configured correctly.',
    },
    {
      id: 'q3',
      q: 'How do you help us find the right tenders?',
      a: 'We run live sessions on where to search, how to filter and save views, and a simple qualification method so you focus only on bids that fit your strengths and timing.',
    },
    {
      id: 'q4',
      q: 'What documents are typically needed for a compliant bid?',
      a: 'We give you a reusable “readiness pack” list—company profile, authorizations, technical evidence, financials, and any sector-specific items—plus templates and examples so your team knows exactly what to prepare.',
    },
    {
      id: 'q5',
      q: 'Do you review our proposals before submission?',
      a: 'Yes. We review drafts for structure, compliance, and clarity, and we suggest concrete edits. We also teach best practices for technical and commercial responses.',
    },
    {
      id: 'q6',
      q: 'Can you submit the bid for us?',
      a: 'We guide and supervise the submission end-to-end and can perform the upload with your permission. Final responsibility and declarations remain with your company.',
    },
    {
      id: 'q7',
      q: 'What about deadlines and bid timelines?',
      a: 'We set internal checkpoints for clarifications, documents, approvals, and final upload—so there’s no last-minute scramble. Your team sees owners and dates in one place.',
    },
    {
      id: 'q8',
      q: 'Is everything in Arabic?',
      a: 'Etimad communications and submissions are mainly in Arabic. We show you how to manage translations efficiently and where English is acceptable. We keep templates bilingual where helpful.',
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
            Etimad Q&amp;A
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setOpenSection((v) => !v)}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
          aria-expanded={openSection}
          aria-controls="etimad-faq-panel"
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
          id="etimad-faq-panel"
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
