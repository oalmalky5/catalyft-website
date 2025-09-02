// components/CTA.tsx
import { Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section
      id="contact" // ← anchor for the nav
      className="bg-black text-white px-6 py-20 scroll-mt-20" // offset under sticky nav
      aria-labelledby="cta-title"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
          Get in Touch
        </p>

        <h2
          id="cta-title"
          className="mt-3 text-3xl md:text-4xl font-bold tracking-tight"
        >
          Let’s Lift, Align, and Launch Your Venture.
        </h2>

        <p className="mt-4 text-white/70 text-base md:text-lg">
          Book a free 20‑minute discovery call. We’ll answer your questions, map
          your expansion path, and help you plan with clarity.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="mailto:hello@catalyft.sa"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:bg-neutral-200 transition"
          >
            <Mail className="size-4" />
            Email Us: hello@catalyft.sa
          </a>
        </div>

        <p className="mt-6 text-sm text-white/50">
          We typically respond within 24 hours.
        </p>

        <p className="mt-2 text-xs text-white/40">
          By contacting us, you agree to our privacy policy. Your information is
          kept strictly confidential and will never be shared.
        </p>
      </div>
    </section>
  );
}
