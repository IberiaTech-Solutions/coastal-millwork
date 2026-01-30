"use client";

import { useInView } from "@/hooks/useInView";

type AnimateHeadingProps = {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
  id?: string;
};

/**
 * Wraps a heading and applies a subtle fade + small slide when it scrolls into view.
 * Use for section titles to add motion without fluff.
 */
export default function AnimateHeading({
  as: Tag = "h2",
  children,
  className = "",
  id,
}: AnimateHeadingProps) {
  const { ref, inView } = useInView<HTMLHeadingElement>();

  return (
    <Tag
      ref={ref}
      id={id}
      className={`animate-heading-enter ${inView ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
