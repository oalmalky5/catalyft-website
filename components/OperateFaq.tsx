'use client';

import { useId, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function OperateFaq() {
  const [openSection, setOpenSection] = useState(false);
  const [openItem, setOpenItem] = useState<string | ''>('');

  const items: { id: string; q: string; a: string }[] = [
    {
      id: 'q1',
      q: 'What exactly do you handle every month?',
      a: 'We handle the recurring work that keeps your Saudi operation running: renewals and compliance deadlines, payroll coordination, employment contracts and updates, visas/work permits/iqama, customer & vendor onboarding packs, and the letters or certificates buyers ask for. You get one tracker with owners, due dates, and status.',
    },
    {
      id: 'q2',
      q: 'Do you track renewals and compliance dates so nothing expires?',
      a: 'Yes. We load all renewal dates into a shared calendar, prepare the required documents, submit on time, and confirm completion. We flag anything that needs your sign-off ahead of time and keep proof on file.',
    },
    {
      id: 'q3',
      q: 'Who handles visas, work permits, and iqama for our team?',
      a: 'We do. We gather requirements, prepare the packs, submit the requests, and track each stage through to issuance or renewal. Your role is to provide the personal documents we request and approve key steps—we run the process end to end.',
    },
    {
      id: 'q4',
      q: 'How do you run payroll and HR each month?',
      a: 'We coordinate monthly payroll runs, prepare the needed proofs, and keep employment records clean and audit-ready. We also handle contract creation, amendments, joins/leavers, and job/compensation changes with the right approvals.',
    },
    {
      id: 'q5',
      q: 'Will you onboard us with customers, marketplaces, and vendors?',
      a: 'Yes. We assemble and submit the onboarding packs those platforms ask for (company docs, forms, certificates, IDs, etc.), follow up for approvals, and update you as soon as access is granted.',
    },
    {
      id: 'q6',
      q: 'Do you prepare official letters and certificates when buyers ask?',
      a: 'Yes. We prepare and submit the required letters, attestations, and certificates your customers request to release payments, register you as a supplier, or allow delivery. We keep templates ready so turnarounds are fast.',
    },
    {
      id: 'q7',
      q: 'What do you need from us to keep things moving?',
      a: 'Two things: timely approvals and the documents only you can provide (e.g., passport scans or signed forms). We keep requests short and specific inside the tracker so your team spends minimal time.',
    },
    {
      id: 'q8',
      q: 'How do we see progress and who is accountable?',
      a: 'You get a single live tracker with each task’s owner, due date, and status—plus short weekly updates. We assign named owners on our side so you always know who is driving what and when it will be done.',
    },
    {
      id: 'q9',
      q: 'Do you require technical “portal” knowledge from our team?',
      a: 'No. We avoid jargon and handle the submissions ourselves. We guide you to grant the minimum secure access we need, and we document each step in plain English so anyone on your team can follow along.',
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
            Operate Q&amp;A — clear and simple.
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setOpenSection((v) => !v)}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
          aria-expanded={openSection}
          aria-controls="operate-faq-panel"
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
          id="operate-faq-panel"
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
