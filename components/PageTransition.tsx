// components/PageTransition.tsx
'use client';

import { PropsWithChildren, useLayoutEffect, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useAnimation,
  type Variants,
} from 'framer-motion';

// isomorphic layout effect: useLayoutEffect on client, useEffect on server
const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const easing = [0.22, 1, 0.36, 1] as const;

export default function PageTransition({ children }: PropsWithChildren) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const controls = useAnimation();

  // Render invisible on the server; reveal only after we set initial state in layout effect
  const [hydrated, setHydrated] = useState(false);

  const variants: Variants = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.15 } },
      }
    : {
        initial: { opacity: 0, y: 6 },
        animate: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.38, ease: easing },
        },
        exit: {
          opacity: 0,
          y: -6,
          transition: { duration: 0.28, ease: easing },
        },
      };

  // 1) On first client paint, set initial state BEFORE paint, then kick off animation on next frame
  useIsoLayoutEffect(() => {
    setHydrated(true);
    // Ensure the element is at the "initial" state immediately
    controls.set('initial');
    // Start the enter animation on the very next frame
    const id = requestAnimationFrame(() => {
      controls.start('animate');
    });
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]); // run on route changes

  // Optional: scroll to top on route change
  useEffect(() => {
    if (!hydrated) return;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }, [pathname, prefersReducedMotion, hydrated]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        // We control the states; avoid Framer re-applying "initial" post-hydration
        initial={false}
        animate={controls}
        exit="exit"
        variants={variants}
        className="will-change-transform"
        // Keep invisible on the server / pre-hydration to avoid flash
        style={hydrated ? undefined : { opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
