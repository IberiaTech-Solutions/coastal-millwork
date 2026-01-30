"use client";

import { useInView } from "@/hooks/useInView";

type AnimateSectionProps = {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
  id?: string;
} & Omit<React.HTMLAttributes<HTMLElement>, "className">;

/**
 * Wraps content and applies a very subtle fade + tiny slide when it scrolls into view.
 * Architectural feel: if it feels like nothing, it's perfect.
 */
export default function AnimateSection({
  children,
  className = "",
  as: Tag = "div",
  id,
  ...rest
}: AnimateSectionProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref as unknown as React.Ref<HTMLDivElement>}
      id={id}
      className={`animate-section-enter ${inView ? "is-visible" : ""} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  );
}
