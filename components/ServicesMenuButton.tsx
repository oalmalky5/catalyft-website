'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import {
  ChevronDown,
  Rocket,
  ShieldCheck,
  Wrench,
  Globe2,
  FileText,
} from 'lucide-react';

type Variant = 'light' | 'dark'; // light = white button (for dark hero), dark = outline (for light sections)

export default function ServicesMenuButton({
  variant = 'light',
}: {
  variant?: Variant;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<number | null>(null);

  const btnBase =
    'inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition';
  const btn =
    variant === 'light'
      ? `${btnBase} bg-white text-black hover:bg-neutral-200`
      : `${btnBase} border border-neutral-300 text-neutral-900 hover:bg-neutral-50 bg-transparent`;

  // ——— helpers
  const clearCloseTimer = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setOpen(false), 150);
  };

  // Close on outside click / Esc
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative inline-block">
      {/* Button */}
      <button
        type="button"
        className={btn}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="services-menu"
        // Hover support
        onMouseEnter={() => {
          clearCloseTimer();
          setOpen(true);
        }}
        onMouseLeave={scheduleClose}
        // Click/tap support
        onClick={() => setOpen((v) => !v)}
        // Keyboard support
        onFocus={() => setOpen(true)}
        onBlur={scheduleClose}
      >
        Explore Services
        <ChevronDown
          className={`size-4 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown */}
      <div
        id="services-menu"
        role="menu"
        aria-hidden={!open}
        // Keep open while hovering the menu
        onMouseEnter={() => {
          clearCloseTimer();
          setOpen(true);
        }}
        onMouseLeave={scheduleClose}
        className={`absolute left-0 top-full z-20 mt-2 w-56 origin-top rounded-xl border border-neutral-200 bg-white p-2 shadow-lg ring-1 ring-black/5 transition
        ${
          open
            ? 'pointer-events-auto opacity-100 scale-100'
            : 'pointer-events-none opacity-0 scale-95'
        }`}
      >
        <MenuItem
          href="/services/launch"
          icon={<Rocket className="size-4" />}
          label="Launch"
        />
        <MenuItem
          href="/services/operate"
          icon={<ShieldCheck className="size-4" />}
          label="Operate"
        />
        <MenuItem
          href="/services/scale"
          icon={<Wrench className="size-4" />}
          label="Custom Support"
        />
        <MenuItem
          href="/services/rhq"
          icon={<Globe2 className="size-4" />}
          label="RHQ"
        />
        <MenuItem
          href="/services/etimad"
          icon={<FileText className="size-4" />}
          label="Etimad"
        />
      </div>
    </div>
  );
}

function MenuItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      role="menuitem"
      className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-100"
    >
      <span className="grid size-6 place-items-center rounded-md bg-neutral-100 text-neutral-900">
        {icon}
      </span>
      <span>{label}</span>
    </Link>
  );
}
