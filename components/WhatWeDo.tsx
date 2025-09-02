// components/WhatWeDo.tsx
import {
  Landmark,
  Compass,
  Handshake,
  Layers3,
  ListChecks,
  Rocket,
} from 'lucide-react';

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-black text-white scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            What We Do
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            We remove friction and create momentum. Here’s how we help you win
            in Saudi—without drowning you in the paperwork details.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            icon={<Landmark className="size-5" />}
            title="Set a Strong Foundation"
            desc="We stabilize your entry from day one—built on the right legal, operational, and regulatory footing."
          />
          <Card
            icon={<Compass className="size-5" />}
            title="Navigate with Confidence"
            desc="From first decisions to daily execution, we reduce uncertainty and give you clarity at every step."
          />
          <Card
            icon={<Handshake className="size-5" />}
            title="Handle the Heavy Lifting"
            desc="You focus on strategy and growth—we take on the operational grind so you never get stuck."
          />
          <Card
            icon={<Layers3 className="size-5" />}
            title="Align with Local Realities"
            desc="We localize your org, people practices, and decision flows to what actually works in Saudi."
          />
          <Card
            icon={<ListChecks className="size-5" />}
            title="Operate with Precision"
            desc="Timelines, workflows, and systems—engineered for predictability so you’re never reacting blindly."
          />
          <Card
            icon={<Rocket className="size-5" />}
            title="Build for Scale"
            desc="We think beyond setup. We remove friction now so you can move faster later."
          />
        </div>
      </div>
    </section>
  );
}

/* -------- subcomponents -------- */

function Card({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group rounded-2xl border border-white/15 bg-white/0 p-6 transition hover:border-white/35 hover:bg-white/[0.03]">
      <div className="flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-lg bg-white text-black">
          {icon}
        </span>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{desc}</p>
    </div>
  );
}
