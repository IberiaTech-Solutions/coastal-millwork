"use client";

import { useInView } from "@/hooks/useInView";

type AnimateLineProps = {
  /** Optional className (e.g. for color). Default: 1px height, centered, var(--border). */
  className?: string;
};

/**
 * A thin horizontal line that animates from 0 to full width when in view.
 * Use under section labels or as a divider.
 */
export default function AnimateLine({ className = "" }: AnimateLineProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();

  return (
    <span
      ref={ref}
      className={`block h-px bg-[var(--border)] mx-auto mt-2 animate-line-in ${inView ? "is-visible" : ""} ${className}`.trim()}
      style={{ maxWidth: "2rem" }}
      aria-hidden
    />
  );
}
