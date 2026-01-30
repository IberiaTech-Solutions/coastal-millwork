"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";

type CountUpProps = {
  /** Target number to count to. */
  end: number;
  /** Duration in ms. Keep subtle (e.g. 1200–1600). */
  duration?: number;
  /** Optional prefix (e.g. "20+") – use suffix for "800+". */
  prefix?: string;
  suffix?: string;
  className?: string;
};

/**
 * Counts from 0 to end once when the element scrolls into view.
 * Uses requestAnimationFrame for smooth, subtle motion. Runs only once.
 */
export default function CountUp({
  end,
  duration = 1400,
  prefix = "",
  suffix = "",
  className = "",
}: CountUpProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;

    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out so it settles gently at the end
      const eased = 1 - (1 - progress) ** 2;
      setValue(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
