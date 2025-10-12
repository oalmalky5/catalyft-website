'use client';

import { openContact } from '@/components/ContactDialog';

export default function ContactButton({
  children = 'Contact Us',
  className = 'rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200',
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <button type="button" onClick={() => openContact()} className={className}>
      {children}
    </button>
  );
}
