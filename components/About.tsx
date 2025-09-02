export default function About() {
  return (
    <section
      id="about" // <— anchor target for the nav
      aria-labelledby="about-title"
      className="bg-white scroll-mt-20" // <— offset so content isn't hidden under sticky nav
    >
      {/* About title only */}
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-8 text-center">
        <p
          id="about-title"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500"
        >
          About
        </p>
      </div>

      {/* Brand traits with vertical dividers on md+ */}
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="pointer-events-none absolute inset-y-0 left-1/3 hidden w-px -translate-x-1/2 bg-neutral-200 md:block" />
        <div className="pointer-events-none absolute inset-y-0 left-2/3 hidden w-px -translate-x-1/2 bg-neutral-200 md:block" />

        <div className="grid gap-12 md:grid-cols-3">
          <Trait
            title="Precise"
            kicker="Clarity that builds trust."
            desc="Detail‑oriented and exact. Clear timelines, scope, and ownership so everyone knows what’s next."
          />
          <Trait
            title="Engineered"
            kicker="Systems, not guesswork."
            desc="We structure market entry like a dependable system — robust processes with measurable outcomes."
          />
          <Trait
            title="Forward‑moving"
            kicker="Momentum by design."
            desc="Active partnership and clear next steps. We keep progress unblocked without over‑promising."
          />
        </div>
      </div>
    </section>
  );
}

/* If you need the Trait component as well: */
function Trait({
  title,
  kicker,
  desc,
}: {
  title: string;
  kicker: string;
  desc: string;
}) {
  return (
    <div className="mx-auto max-w-xl text-center md:text-left">
      <div className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-700">
        {kicker}
      </div>
      <h3 className="text-2xl font-bold text-neutral-900 md:text-3xl">
        {title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-neutral-700">
        {desc}
      </p>
    </div>
  );
}
