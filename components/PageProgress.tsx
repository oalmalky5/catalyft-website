// components/TopProgress.tsx
'use client';

import { motion, useIsPresent } from 'framer-motion';

export default function TopProgress() {
  const isPresent = useIsPresent();

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px] bg-white/40"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1, transition: { duration: 0.4 } }}
      exit={{
        opacity: 0,
        transition: { duration: 0.2, delay: 0.1 },
      }}
      style={{ transformOrigin: '0% 50%' }}
    />
  );
}
