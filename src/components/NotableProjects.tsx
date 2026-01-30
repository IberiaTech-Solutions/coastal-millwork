"use client";

import Link from "next/link";
import { useState } from "react";
import AnimateHeading from "@/components/AnimateHeading";

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

// Money/value progression: bronze → silver → gold → green (ascending contract size)
const TIER_PILL_ACTIVE: Record<ProjectTier | "all", string> = {
  all: "border-[var(--foreground)] bg-[var(--foreground)] text-white shadow-sm",
  1: "border-amber-700 bg-amber-700 text-white shadow-sm",
  2: "border-slate-600 bg-slate-600 text-white shadow-sm",
  3: "border-amber-600 bg-amber-600 text-white shadow-sm",
  4: "border-emerald-700 bg-emerald-700 text-white shadow-sm",
};

const TIER_PILL_INACTIVE: Record<ProjectTier | "all", string> = {
  all: "border-[var(--border)] bg-[var(--background)] text-[var(--muted)] hover:border-[var(--foreground)]/40 hover:text-[var(--foreground)]",
  1: "border-amber-700/50 bg-[var(--background)] text-amber-700 hover:bg-amber-700/10",
  2: "border-slate-600/50 bg-[var(--background)] text-slate-600 hover:bg-slate-600/10",
  3: "border-amber-600/50 bg-[var(--background)] text-amber-600 hover:bg-amber-600/10",
  4: "border-emerald-700/50 bg-[var(--background)] text-emerald-700 hover:bg-emerald-700/10",
};

const TIER_LABEL_STYLES: Record<ProjectTier, string> = {
  1: "text-amber-700",
  2: "text-slate-600",
  3: "text-amber-600",
  4: "text-emerald-700",
};

/** Curated gallery: show this many items at once (exhibits, not index). */
const GALLERY_PREVIEW_COUNT = 12;

/** Fallback copy so we never render "0+ projects in 0 years" (CountUp starts at 0). */
const HERO_PROJECTS_COUNT = 800;
const HERO_YEARS_COUNT = 20;

const TIER_BAR_COLORS: Record<ProjectTier, string> = {
  1: "bg-amber-700",
  2: "bg-slate-600",
  3: "bg-amber-600",
  4: "bg-emerald-700",
};

type NotableProjectsProps = {
  projects: Project[];
};

function useTierCounts(projects: Project[]) {
  const counts: Record<ProjectTier, number> = { 1: 0, 2: 0, 3: 0, 4: 0 };
  projects.forEach((p) => { counts[p.tier] += 1; });
  return counts;
}

export default function NotableProjects({ projects }: NotableProjectsProps) {
  const [filter, setFilter] = useState<ProjectTier | "all">("all");
  const tierCounts = useTierCounts(projects);
  const total = projects.length;

  const filtered = (
    filter === "all"
      ? [...projects]
      : projects.filter((p) => p.tier === filter)
  ).sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));

  const displayed = filtered.slice(0, GALLERY_PREVIEW_COUNT);
  const hasMore = filtered.length > GALLERY_PREVIEW_COUNT;

  return (
    <section id="projects" className="scroll-mt-24 border-b border-[var(--border)] bg-section-alt px-4 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end sm:gap-8">
          <div>
            <AnimateHeading className="text-2xl font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-3xl">
              Notable & Current Projects
            </AnimateHeading>
            <p className="mt-3 max-w-xl text-sm text-[var(--muted)]">
              Over {HERO_PROJECTS_COUNT}+ architectural projects in {HERO_YEARS_COUNT}+ years. Contract scope from $1M to $10M+. Filter by scope below.
            </p>
          </div>
          <Link
            href="/projects"
            className="shrink-0 rounded-full border-2 border-[var(--foreground)] bg-transparent px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--foreground)] hover:text-white"
          >
            View full gallery
          </Link>
        </div>

        {/* Filter pills + bar */}
        <div className="mt-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="section-label mr-1">Contract scope</span>
            {(["all", 1, 2, 3, 4] as const).map((tier) => (
              <button
                key={tier}
                type="button"
                onClick={() => setFilter(tier)}
                className={`cursor-pointer rounded-full border-2 px-4 py-2 text-sm font-semibold transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  filter === tier ? TIER_PILL_ACTIVE[tier] : TIER_PILL_INACTIVE[tier]
                } ${filter === tier ? "focus:ring-[var(--foreground)]" : "focus:ring-[var(--accent)]"}`}
              >
                {TIER_LABELS[tier]}
              </button>
            ))}
          </div>

          {/* Graphic bar — click a segment to filter */}
          <div className="mt-4">
            <p className="mb-2 text-[10px] uppercase tracking-wider text-[var(--muted)]">
              Click a segment to filter
            </p>
            <div
              className="flex h-8 w-full cursor-pointer overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--border)]/50 shadow-sm"
              role="img"
              aria-label={`Stacked bar: ${([1, 2, 3, 4] as const).map((t) => `${TIER_LABELS[t]}: ${tierCounts[t]} projects`).join(", ")}. Click a segment to filter.`}
            >
              {([1, 2, 3, 4] as const).map((tier) => {
                const count = tierCounts[tier];
                const pct = total > 0 ? (count / total) * 100 : 0;
                const widthPct = Math.max(pct, 0);
                const showLabelInside = widthPct >= 12;
                const isSelected = filter === tier;
                const barColor = filter !== "all" && !isSelected
                  ? (tier === 1 ? "bg-neutral-400" : tier === 2 ? "bg-neutral-500" : tier === 3 ? "bg-neutral-600" : "bg-neutral-700")
                  : TIER_BAR_COLORS[tier];
                return (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setFilter(tier)}
                    className={`group relative min-w-0 shrink-0 cursor-pointer border-r border-white/30 last:border-r-0 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/80 first:rounded-l-xl last:rounded-r-xl ${
                      isSelected ? "ring-2 ring-inset ring-white/90 ring-offset-2 ring-offset-[var(--section-alt)]" : ""
                    } ${barColor}`}
                    style={{ width: `${widthPct}%`, minWidth: count > 0 ? "24px" : "0" }}
                    title={`${TIER_LABELS[tier]}: ${count} project${count !== 1 ? "s" : ""} — click to filter`}
                  >
                    {count > 0 && (
                      <>
                        {showLabelInside ? (
                          <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow-[0_0_1px_rgba(0,0,0,0.8)]">
                            {count} project{count !== 1 ? "s" : ""}
                          </span>
                        ) : (
                          <span className="absolute -bottom-6 left-1/2 z-10 -translate-x-1/2 rounded bg-[var(--foreground)] px-1.5 py-0.5 text-[10px] font-semibold text-white opacity-0 shadow transition group-hover:opacity-100 group-focus:opacity-100 whitespace-nowrap">
                            {count} project{count !== 1 ? "s" : ""}
                          </span>
                        )}
                      </>
                    )}
                  </button>
                );
              })}
            </div>
            {/* Money labels below each segment */}
            <div className="mt-2 flex w-full">
              {([1, 2, 3, 4] as const).map((tier) => {
                const count = tierCounts[tier];
                const pct = total > 0 ? (count / total) * 100 : 0;
                const widthPct = Math.max(pct, 0);
                const isSelected = filter === tier;
                const isFilterActive = filter !== "all";
                const labelMuted = isFilterActive && !isSelected;
                return (
                  <div
                    key={tier}
                    className="flex min-w-0 shrink-0 items-center justify-center py-1"
                    style={{ width: `${widthPct}%`, minWidth: count > 0 ? "24px" : "0" }}
                  >
                    {count > 0 && (
                      <span
                        className={`text-[11px] font-medium tabular-nums tracking-tight transition-colors ${
                          labelMuted
                            ? "text-[var(--muted)]"
                            : tier === 1
                              ? "text-amber-700"
                              : tier === 2
                                ? "text-slate-600"
                                : tier === 3
                                  ? "text-amber-600"
                                  : "text-emerald-700"
                        } ${isSelected ? "font-semibold" : ""}`}
                      >
                        {TIER_LABELS[tier]}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <p className="mt-4 text-xs text-[var(--muted)]">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            {filtered.length > GALLERY_PREVIEW_COUNT
              ? ` · showing ${GALLERY_PREVIEW_COUNT} below`
              : ""}
          </p>
        </div>

        {/* Gallery – 2026 cards: compact padding, title loud, metadata one line, normalized heights, 1/2/3/4 cols */}
        <ul
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4 xl:gap-6"
          role="list"
        >
          {displayed.map(({ name, location, tier }) => (
            <li
              key={`${name}-${location}`}
              className="card-float flex h-full flex-col rounded-lg border border-[var(--border)] bg-white p-4 transition hover:border-[var(--foreground)]/20 sm:p-5"
            >
              <h3 className="line-clamp-2 text-base font-semibold leading-tight tracking-tight text-[var(--foreground)] sm:text-lg sm:leading-snug">
                {name}
              </h3>
              <p className="mt-2 text-xs font-medium tracking-wide text-[var(--muted)] sm:mt-2.5">
                {location}
                <span className="mx-1.5" aria-hidden>·</span>
                <span className={TIER_LABEL_STYLES[tier]}>{TIER_LABELS[tier]}</span>
              </p>
            </li>
          ))}
        </ul>

        {hasMore && (
          <p className="mt-10 text-center">
            <Link
              href="/projects"
              className="text-sm font-medium text-[var(--accent)] hover:underline"
            >
              View all {filtered.length} projects in gallery →
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
