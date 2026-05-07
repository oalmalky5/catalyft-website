'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useCallback, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isServices = pathname?.startsWith('/services/');

  // Homepage center links
  const LINKS_HOME = useMemo(
    () => [
      { href: '#about', label: 'About' },
      { href: '#what-we-do', label: 'How We Help' },
      { href: '#services', label: 'Services' },
    ],
    []
  );

  // Services center links (now includes RHQ and Etimad)
  const LINKS_SERVICES = useMemo(
    () => [
      { href: '/services/launch', label: 'Launch' },
      { href: '/services/operate', label: 'Operate' },
      { href: '/services/scale', label: 'Custom Support' },
      { href: '/services/rhq', label: 'RHQ' },
      { href: '/services/etimad', label: 'Etimad' },
    ],
    []
  );

  const handleContactClick = useCallback(() => {
    const el = document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href =
        'mailto:info@catalyft.sa?subject=Website%20Inquiry&body=Hi%20CataLyft%2C%0A%0A';
    }
  }, []);

  // Active matcher for services links
  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(href + '/');

  const desktopLinkClass = (active = false) =>
    clsx(
      'group relative rounded-full px-3 py-2 text-sm transition duration-200 hover:-translate-y-px hover:bg-white/8',
      active ? 'text-white' : 'text-neutral-200 hover:text-white'
    );

  const desktopAccentClass = (active = false) =>
    clsx(
      'absolute inset-x-3 -bottom-0.5 h-px origin-center scale-x-0 bg-[#b9a56d] transition-transform duration-200 group-hover:scale-x-100',
      active && 'scale-x-100'
    );

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
        <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-2 md:flex">
          {isServices
            ? LINKS_SERVICES.map((l) => {
                const active = isActive(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    prefetch={false}
                    className={desktopLinkClass(active)}
                  >
                    <span className="relative z-10">{l.label}</span>
                    <span
                      aria-hidden
                      className={desktopAccentClass(active)}
                    />
                  </Link>
                );
              })
            : LINKS_HOME.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  prefetch={false}
                  className={desktopLinkClass()}
                >
                  <span className="relative z-10">{l.label}</span>
                  <span aria-hidden className={desktopAccentClass()} />
                </Link>
              ))}
        </div>

        {/* Right: CTA */}
        <div className="flex shrink-0 items-center gap-3 md:flex">
          {isServices ? (
            <button
              type="button"
              onClick={handleContactClick}
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-200 md:inline-block"
            >
              Book call
            </button>
          ) : (
            <a
              href="#contact"
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-200 md:inline-block"
            >
              Book call
            </a>
          )}

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
          {isServices
            ? LINKS_SERVICES.map((l) => {
                const active = isActive(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    prefetch={false}
                    className={clsx(
                      'rounded-lg border border-transparent px-3 py-2 text-sm transition hover:border-white/10 hover:bg-white/8',
                      active
                        ? 'border-[#b9a56d]/40 bg-white/8 text-white'
                        : 'text-neutral-200'
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                );
              })
            : LINKS_HOME.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  prefetch={false}
                  className="rounded-lg border border-transparent px-3 py-2 text-sm text-white transition hover:border-white/10 hover:bg-white/8"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}

          {isServices ? (
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setTimeout(handleContactClick, 0);
              }}
              className="mt-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-black hover:bg-neutral-200"
            >
              Book call
            </button>
          ) : (
            <a
              href="#contact"
              className="mt-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-black hover:bg-neutral-200"
              onClick={() => setOpen(false)}
            >
              Book call
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
