"use client";

import { Fragment, useEffect, useState } from "react";

const STEPS: { id: string; label: string }[] = [
  { id: "design-consultation", label: "Design & consultation" },
  { id: "value-engineering", label: "Value engineering" },
  { id: "submittals", label: "Submittals" },
  { id: "production", label: "Production" },
  { id: "project-management", label: "Project management" },
  { id: "installation", label: "Installation" },
];

type ServiceRailProps = {
  children?: React.ReactNode;
};

export default function ServiceRail({ children }: ServiceRailProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Sync active with URL hash on load and when hash changes (e.g. after clicking a link)
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash && STEPS.some((s) => s.id === hash)) setActiveId(hash);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  // Scroll-spy: highlight current section when scrolling
  useEffect(() => {
    const ids = STEPS.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          if (ids.includes(id)) setActiveId(id);
        }
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="border-b border-[var(--border)] bg-[var(--background)]" aria-label="Our process">
      {/* Heading scrolls away */}
      <div className="px-4 pt-6 pb-4 sm:pt-8 sm:pb-5">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-[var(--muted)] sm:text-[10px]">
          Our process
        </p>
        <p className="mt-1 text-center text-sm text-[var(--muted)] sm:text-xs">From design through install</p>
      </div>
      {/* Nav sticks flush under header: mobile ~5rem (logo row), sm+ 5.5rem (matches body.top-bar-hidden main) */}
      <div
        className="sticky top-[5rem] z-40 border-b border-[var(--border)] bg-[var(--background)] px-4 py-3 shadow-[0_1px_0_0_var(--border)] sm:top-[5.5rem] sm:py-4"
      >
        <nav className="service-rail service-rail--links mx-auto max-w-5xl" aria-label="Jump to process step">
          {STEPS.map(({ id, label }, i) => (
            <Fragment key={id}>
              {i > 0 && <span className="service-rail-arrow" aria-hidden>→</span>}
              <a
                href={`#${id}`}
                className="service-rail-item"
                aria-current={activeId === id ? "true" : undefined}
              >
                {label}
              </a>
            </Fragment>
          ))}
        </nav>
      </div>
      {children}
    </div>
  );
}
