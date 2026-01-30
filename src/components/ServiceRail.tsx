"use client";

import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

const STEPS: { id: string; label: string }[] = [
  { id: "design-consultation", label: "Design & consultation" },
  { id: "value-engineering", label: "Value engineering" },
  { id: "submittals", label: "Submittals" },
  { id: "production", label: "Production" },
  { id: "project-management", label: "Project management" },
  { id: "installation", label: "Installation" },
];

export default function ServiceRail() {
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
    <section className="sticky top-[5.25rem] z-40 border-b border-[var(--border)] bg-[var(--background)] px-4 py-6 shadow-[0_1px_0_0_var(--border)] sm:top-[6.25rem] sm:py-8" aria-label="Our process">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
          Our process
        </p>
        <p className="mt-1 text-center text-xs text-[var(--muted)]">From design through install</p>
        <nav className="service-rail service-rail--links mt-4" aria-label="Jump to process step">
          {STEPS.map(({ id, label }, i) => (
            <Fragment key={id}>
              {i > 0 && <span className="service-rail-arrow" aria-hidden>→</span>}
              <Link
                href={`#${id}`}
                className="service-rail-item"
                aria-current={activeId === id ? "true" : undefined}
              >
                {label}
              </Link>
            </Fragment>
          ))}
        </nav>
      </div>
    </section>
  );
}
