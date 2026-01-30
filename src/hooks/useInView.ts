"use client";

import { useEffect, useRef, useState } from "react";

type Options = {
  /** Fraction of element visible to trigger (0–1). Default 0.08 = just entering view. */
  threshold?: number;
  /** Root margin so animation can start slightly before fully in view. */
  rootMargin?: string;
  /** Run only once (stay "in view" after first trigger). Default true. */
  once?: boolean;
};

/**
 * Returns true when the element is in view. Used for subtle scroll-triggered animations.
 * Default: trigger once when ~8% visible, with a small bottom margin so it feels natural.
 */
export function useInView<T extends HTMLElement>(options: Options = {}) {
  const { threshold = 0.08, rootMargin = "0px 0px -4% 0px", once = true } = options;
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
