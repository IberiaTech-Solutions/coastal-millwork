"use client";

import Link from "next/link";
import { useState } from "react";

export type ProjectTier = 1 | 2 | 3 | 4;

export type Project = {
  name: string;
  location: string;
  tier: ProjectTier;
};

const TIER_LABELS: Record<ProjectTier | "all", string> = {
  all: "All",
  1: ">$1M",
  2: ">$3M",
  3: ">$5M",
  4: ">$10M",
};

const TIER_PILL_ACTIVE: Record<ProjectTier | "all", string> = {
  all: "border-[var(--foreground)] bg-[var(--foreground)] text-white shadow-sm",
  1: "border-[var(--foreground)] bg-[var(--foreground)] text-white shadow-sm",
  2: "border-red-700 bg-red-700 text-white shadow-sm",
  3: "border-orange-600 bg-orange-600 text-white shadow-sm",
  4: "border-emerald-700 bg-emerald-700 text-white shadow-sm",
};

const TIER_PILL_INACTIVE: Record<ProjectTier | "all", string> = {
  all: "border-[var(--border)] bg-[var(--background)] text-[var(--muted)] hover:border-[var(--foreground)]/40 hover:text-[var(--foreground)]",
  1: "border-[var(--foreground)]/50 bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--foreground)]/10",
  2: "border-red-700/50 bg-[var(--background)] text-red-700 hover:bg-red-700/10",
  3: "border-orange-600/50 bg-[var(--background)] text-orange-600 hover:bg-orange-600/10",
  4: "border-emerald-700/50 bg-[var(--background)] text-emerald-700 hover:bg-emerald-700/10",
};

const TIER_TEXT_STYLES: Record<ProjectTier, string> = {
  1: "font-semibold text-[var(--foreground)]",
  2: "font-semibold text-red-700",
  3: "font-semibold text-orange-600",
  4: "font-semibold text-emerald-700",
};

type NotableProjectsProps = {
  projects: Project[];
};

export default function NotableProjects({ projects }: NotableProjectsProps) {
  const [filter, setFilter] = useState<ProjectTier | "all">("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.tier === filter);

  return (
    <section id="projects" className="scroll-mt-24 border-b border-[var(--border)] bg-section-alt px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end sm:gap-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-3xl">
              Notable & Current Projects
            </h2>
            <p className="mt-3 max-w-xl text-sm text-[var(--muted)]">
              Over 800 architectural projects in 20 years. Filter by contract scope below.
            </p>
          </div>
          <Link
            href="/projects"
            className="shrink-0 rounded-full border-2 border-[var(--foreground)] bg-transparent px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--foreground)] hover:text-white"
          >
            View full gallery
          </Link>
        </div>

        {/* Filter pills */}
        <div className="mt-8">
          <p className="section-label mb-3">
            Contract scope
          </p>
          <div className="flex flex-wrap gap-2">
            {(["all", 1, 2, 3, 4] as const).map((tier) => (
              <button
                key={tier}
                type="button"
                onClick={() => setFilter(tier)}
                className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  filter === tier ? TIER_PILL_ACTIVE[tier] : TIER_PILL_INACTIVE[tier]
                } ${filter === tier ? "focus:ring-[var(--foreground)]" : "focus:ring-[var(--accent)]"}`}
              >
                {TIER_LABELS[tier]}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-[var(--muted)]">
            Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            <span className="ml-2 hidden sm:inline">· Bold &gt;$1M · Red &gt;$3M · Orange &gt;$5M · Green &gt;$10M</span>
          </p>
        </div>

        {/* Project list */}
        <ul
          className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {filtered.map(({ name, location, tier }) => (
            <li
              key={`${name}-${location}`}
              className="rounded-lg border border-[var(--border)] bg-white p-4 shadow-sm transition hover:border-[var(--foreground)]/20 hover:shadow"
            >
              <span className={`block ${TIER_TEXT_STYLES[tier]}`}>{name}</span>
              <span className="mt-1 block text-sm text-[var(--muted)]">
                {location}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
