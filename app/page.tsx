// app/page.tsx
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatWeDo from '@/components/WhatWeDo';
import Services from '@/components/Services';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main className="bg-white">
      {/* hero already paints its own black background and includes pt-16 */}
      <Hero />

      {/* then your white sections */}
      <About />
      <WhatWeDo />
      <Services />
      <CTA />

      {/* optional: stats & CTA can be added later as separate components */}
    </main>
  );
}
