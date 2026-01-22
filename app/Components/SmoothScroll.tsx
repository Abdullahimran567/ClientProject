'use client';

import { ReactNode, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { useAnimationFrame } from 'framer-motion';

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,

      wrapper: document.body,
      content: (document.scrollingElement ?? document.body) as HTMLElement,
    });

    window.lenis = lenis;

    return () => {
      lenis.destroy();
      window.lenis = undefined;
    };
  }, []);

  useAnimationFrame(time => {
    window.lenis?.raf(time);
  });

  return <>{children}</>;
}
