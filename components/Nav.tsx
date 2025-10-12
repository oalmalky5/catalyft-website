'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';
  const isServices = pathname.startsWith('/services');

  const HOME_LINKS = [
    { href: '#about', label: 'About' },
    { href: '#what-we-do', label: 'What We Do' },
    { href: '#services', label: 'Services' },
  ];

  const SERVICE_LINKS = [
    { href: '/services/launch', label: 'Launch' },
    { href: '/services/operate', label: 'Operate' },
    { href: '/services/scale', label: 'Scale' },
  ];

  // Build a stable href that always includes the page path
  const contactHref = isServices ? `${pathname}#contact` : '#contact';

  const handleContactClick: React.MouseEventHandler<HTMLAnchorElement> = (
    e
  ) => {
    // Try smooth scroll with header offset; otherwise let the native anchor work.
    const el = document.getElementById('contact');
    if (!el) return; // don't prevent default; native hash navigation will try
    e.preventDefault();
    const headerOffset = 80; // adjust if your header height changes
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const handleMobileContactClick: React.MouseEventHandler<HTMLAnchorElement> = (
    e
  ) => {
    const el = document.getElementById('contact');
    if (el) {
      e.preventDefault();
      setOpen(false);
      setTimeout(() => {
        const headerOffset = 80;
        const y =
          el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 50);
    } else {
      // No element found—close and let native navigation attempt the hash
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-black text-white" role="banner">
      {/* Desktop / Tablet */}
      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Left: Logo */}
        <div className="flex shrink-0 items-center gap-3">
          <Link href="/" aria-label="Home" prefetch={false}>
            <Image
              src="/catalyft-logo-main-transparent.png"
              alt="Catalyft"
              width={128}
              height={28}
              priority
            />
          </Link>
        </div>

        {/* Center */}
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 md:flex">
          {isServices
            ? SERVICE_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  prefetch={false}
                  className={clsx(
                    'text-sm transition',
                    pathname === l.href
                      ? 'text-white underline underline-offset-4'
                      : 'text-neutral-200 hover:text-white'
                  )}
                  aria-current={pathname === l.href ? 'page' : undefined}
                >
                  {l.label}
                </Link>
              ))
            : HOME_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  prefetch={false}
                  className="text-sm text-neutral-200 transition hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
        </div>

        {/* Right */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={contactHref}
            onClick={handleContactClick}
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-200 md:inline-block"
          >
            Contact Us
          </a>

          {/* Mobile burger */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10 md:hidden"
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
          'overflow-hidden transition-[max-height,opacity] duration-200 md:hidden',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 pb-4">
          {(isServices ? SERVICE_LINKS : HOME_LINKS).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              prefetch={false}
              className="rounded-lg px-3 py-2 text-sm text-white hover:bg-white/10"
              onClick={() => setOpen(false)}
              aria-current={pathname === l.href ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}

          <a
            href={contactHref}
            onClick={handleMobileContactClick}
            className="mt-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-black hover:bg-neutral-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
