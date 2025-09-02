'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

export default function Nav() {
  const [open, setOpen] = useState(false);

  const LINKS = [
    { href: '#about', label: 'About' },
    { href: '#what-we-do', label: 'What We Do' },
    { href: '#services', label: 'Services' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black text-white" role="banner">
      {/* Desktop / Tablet */}
      <nav className="relative mx-auto h-16 max-w-6xl px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/" aria-label="Home">
            <Image
              src="/catalyft-logo-main-transparent.png"
              alt="Catalyft"
              width={128}
              height={28}
              priority
            />
          </Link>
        </div>

        {/* Center: Section links (visually centered) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              prefetch={false}
              className="text-sm text-neutral-200 hover:text-white transition"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: CTA */}
        <div className="flex items-center gap-3 shrink-0 md:flex">
          <a
            href="#contact" // changed from mailto to scroll target
            className="hidden md:inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-neutral-200 transition"
          >
            Contact Us
          </a>

          {/* Mobile burger */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 md:hidden hover:bg-white/10"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={clsx(
          'md:hidden transition-[max-height,opacity] duration-200 overflow-hidden',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 pb-4">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              prefetch={false}
              className="rounded-lg px-3 py-2 text-sm text-white hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}

          <a
            href="#contact" // mobile version scrolls to same CTA section
            className="mt-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-black hover:bg-neutral-200"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
