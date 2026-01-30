"use client";

import { useInView } from "@/hooks/useInView";

type ImageRevealProps = {
  children: React.ReactNode;
  /** Wrapper className (e.g. aspect ratio, overflow). */
  className?: string;
};

/**
 * Wraps an image (or any content) and reveals it with a subtle slide-up from bottom when in view.
 * Architectural: one gentle rise, then done.
 */
export default function ImageReveal({ children, className = "" }: ImageRevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div className={`h-full w-full animate-image-reveal ${inView ? "is-visible" : ""}`}>
        {children}
      </div>
    </div>
  );
}
