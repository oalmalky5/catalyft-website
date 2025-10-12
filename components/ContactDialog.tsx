'use client';

import { useEffect, useMemo, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactDialog() {
  const [open, setOpen] = useState(false);

  // Global open/close so any button can trigger the modal
  useEffect(() => {
    const openHandler = () => setOpen(true);
    const closeHandler = () => setOpen(false);
    window.addEventListener('catalyft:contact:open', openHandler);
    window.addEventListener('catalyft:contact:close', closeHandler);
    return () => {
      window.removeEventListener('catalyft:contact:open', openHandler);
      window.removeEventListener('catalyft:contact:close', closeHandler);
    };
  }, []);

  // Capture page context for the email
  const context = useMemo(
    () =>
      typeof window !== 'undefined'
        ? { path: window.location.pathname }
        : { path: '' },
    []
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Panel */}
      <div className="pointer-events-auto absolute inset-x-4 top-8 mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 md:inset-x-0">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white px-6 py-4">
          <h2
            id="contact-title"
            className="text-base md:text-lg font-semibold text-neutral-900"
          >
            Book a quick discovery
          </h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-md px-2 py-1 text-sm text-neutral-500 hover:bg-neutral-100"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <FormspreeForm onSuccess={() => setOpen(false)} context={context} />
      </div>
    </div>
  );
}

function FormspreeForm({
  onSuccess,
  context,
}: {
  onSuccess: () => void;
  context: { path: string };
}) {
  const [state, handleSubmit] = useForm('mgvnpwqr');

  // Track interest (for subject line) and optional company (if you want it in subject)
  const [interest, setInterest] = useState('');
  const [company, setCompany] = useState('');

  if (state.succeeded) {
    return (
      <div className="px-6 py-8">
        <p className="rounded-lg bg-green-50 px-3 py-3 text-sm text-green-700">
          Thanks — we’ve received your message. We’ll reply shortly.
        </p>
        <div className="mt-6 text-right">
          <button
            type="button"
            onClick={onSuccess}
            className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white hover:bg-neutral-800"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="px-6 py-5">
      {/* Context + honeypot */}
      <input type="hidden" name="context_path" value={context.path} />
      <input
        type="text"
        name="_honeypot"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Dynamic subject for the email you receive */}
      <input
        type="hidden"
        name="_subject"
        value={`Catalyft Service Inquiry — ${interest || 'General'}${
          context.path ? ` (${context.path})` : ''
        }${company ? ` • ${company}` : ''}`}
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="First name" name="first_name" required />
        <Field label="Last name" name="last_name" required />

        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" />

        <Field
          label="Company"
          name="company"
          required
          onChange={(e) => setCompany((e.target as HTMLInputElement).value)}
        />
        <Field label="Job title" name="job_title" />

        <Field label="Company website" name="website" required />

        {/* Friendly interest labels */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-neutral-700">
            Interested in
          </label>
          <select
            name="interest"
            className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 outline-none focus:ring-2 focus:ring-black"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          >
            <option value="">Choose one…</option>
            <option>Business Setup</option>
            <option>Business Support</option>
            <option>Custom Service</option>
            <option>I’m not sure</option>
          </select>
        </div>

        {/* Qualifiers */}
        <YesNo name="ksa_entity" label="Established entity in KSA (CR)?" />
        <YesNo name="saudi_owned" label="Owned by a Saudi national?" />
        <YesNo name="start_60" label="Aiming to start within 60 days?" />
        <YesNo
          name="need_portals"
          label="Need help with portals (Qiwa/GOSI/ZATCA/Etimad)?"
        />
      </div>

      <div className="mt-4">
        <label className="text-xs font-medium text-neutral-700">
          Tell us a bit more (optional)
        </label>
        <textarea
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-black"
          placeholder="Timeline, goals, or anything we should know."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[11px] leading-snug text-neutral-500">
          By submitting, you agree we may contact you about this request. We
          don’t share your info.
        </p>
        <button
          type="submit"
          disabled={state.submitting}
          className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:opacity-60"
        >
          {state.submitting ? 'Submitting…' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-neutral-700">
        {label}
        {required && <span className="text-rose-600"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        onChange={onChange}
        className="rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-black"
        placeholder=""
      />
    </div>
  );
}

function YesNo({ name, label }: { name: string; label: string }) {
  return (
    <fieldset className="rounded-lg border border-neutral-200 p-3">
      <legend className="px-1 text-xs font-medium text-neutral-700">
        {label}
      </legend>
      <div className="mt-1 flex gap-4 text-sm text-neutral-900">
        <label className="inline-flex items-center gap-2">
          <input
            type="radio"
            name={name}
            value="Yes"
            className="accent-black"
          />{' '}
          Yes
        </label>
        <label className="inline-flex items-center gap-2">
          <input type="radio" name={name} value="No" className="accent-black" />{' '}
          No
        </label>
      </div>
    </fieldset>
  );
}

/** Helper: open the modal from anywhere */
export function openContact() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('catalyft:contact:open'));
  }
}
