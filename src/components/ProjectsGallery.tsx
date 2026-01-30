"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import type { ProjectDetail, ProjectTier, SectorLabel } from "@/data/projects";
import { projectImageUrl, SECTOR_LABELS } from "@/data/projects";

const TIER_LABELS: Record<ProjectTier | "all", string> = {
  all: "All",
  0: "All",
  1: ">$1M",
  2: ">$3M",
  3: ">$5M",
  4: ">$10M",
};

const TIER_PILL_ACTIVE: Record<ProjectTier | "all", string> = {
  all: "border-[var(--foreground)] bg-[var(--foreground)] text-white shadow-sm",
  0: "border-[var(--foreground)] bg-[var(--foreground)] text-white shadow-sm",
  1: "border-amber-700 bg-amber-700 text-white shadow-sm",
  2: "border-slate-600 bg-slate-600 text-white shadow-sm",
  3: "border-amber-600 bg-amber-600 text-white shadow-sm",
  4: "border-emerald-700 bg-emerald-700 text-white shadow-sm",
};

const TIER_PILL_INACTIVE: Record<ProjectTier | "all", string> = {
  all: "border-[var(--border)] bg-[var(--background)] text-[var(--muted)] hover:border-[var(--foreground)]/40 hover:text-[var(--foreground)]",
  0: "border-[var(--border)] bg-[var(--background)] text-[var(--muted)] hover:border-[var(--foreground)]/40 hover:text-[var(--foreground)]",
  1: "border-amber-700/50 bg-[var(--background)] text-amber-700 hover:bg-amber-700/10",
  2: "border-slate-600/50 bg-[var(--background)] text-slate-600 hover:bg-slate-600/10",
  3: "border-amber-600/50 bg-[var(--background)] text-amber-600 hover:bg-amber-600/10",
  4: "border-emerald-700/50 bg-[var(--background)] text-emerald-700 hover:bg-emerald-700/10",
};

type FilterValue = ProjectTier | "all";
type SectorFilterValue = SectorLabel | "all";

type ProjectsGalleryProps = {
  projects: ProjectDetail[];
};

export default function ProjectsGallery({ projects }: ProjectsGalleryProps) {
  const [valueFilter, setValueFilter] = useState<FilterValue>("all");
  const [sectorFilter, setSectorFilter] = useState<SectorFilterValue>("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = projects;
    if (valueFilter !== "all") {
      list = list.filter((p) => p.tier === valueFilter);
    }
    if (sectorFilter !== "all") {
      list = list.filter((p) => p.sector === sectorFilter);
    }
    if (search.trim()) {
      const lower = search.toLowerCase().trim();
      list = list.filter((p) => {
        const searchable = [p.title, p.location, p.sector, p.contractValue, p.generalContractor, p.architect, p.cmsEngineer, p.courtroomDesigner ?? "", ...p.summary].filter(Boolean).join(" ").toLowerCase();
        return searchable.includes(lower) || lower.split(/\s+/).every((word) => searchable.includes(word));
      });
    }
    return list;
  }, [projects, valueFilter, sectorFilter, search]);

  const availableTiers = useMemo(
    () => ([1, 2, 3, 4] as const).filter((t) => projects.some((p) => p.tier === t)),
    [projects]
  );
  const availableSectors = useMemo(
    () => SECTOR_LABELS.filter((s) => projects.some((p) => p.sector === s)),
    [projects]
  );

  return (
    <>
    <div className="mx-auto max-w-7xl">
      {/* Single row: value pills (only tiers with projects) + sector dropdown (only sectors with projects) + search + count */}
      <div className="mb-8 flex flex-wrap items-center gap-3 border-b border-[var(--border)] pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="section-label mr-0.5">Value</span>
          <button
            type="button"
            onClick={() => setValueFilter("all")}
            className={`cursor-pointer rounded-full border-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              valueFilter === "all" ? TIER_PILL_ACTIVE.all : TIER_PILL_INACTIVE.all
            }`}
          >
            All
          </button>
          {availableTiers.map((tier) => (
            <button
              key={tier}
              type="button"
              onClick={() => setValueFilter(tier)}
              className={`cursor-pointer rounded-full border-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                valueFilter === tier ? TIER_PILL_ACTIVE[tier] : TIER_PILL_INACTIVE[tier]
              }`}
            >
              {TIER_LABELS[tier]}
            </button>
          ))}
        </div>
        {availableSectors.length > 0 && (
          <div className="flex items-center gap-2">
            <label htmlFor="sector-filter" className="section-label sr-only">
              Sector
            </label>
            <select
              id="sector-filter"
              value={sectorFilter}
              onChange={(e) => setSectorFilter(e.target.value as SectorFilterValue)}
              className="rounded-full border border-[var(--border)] bg-[var(--background)] py-1.5 pl-3 pr-8 text-xs font-medium text-[var(--foreground)] focus:border-[var(--foreground)]/40 focus:outline-none focus:ring-1 focus:ring-[var(--foreground)]/20"
              aria-label="Filter by sector"
            >
              <option value="all">All sectors</option>
              {availableSectors.map((sector) => (
                <option key={sector} value={sector}>
                  {sector}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="ml-auto flex items-center gap-3">
          <span className="text-xs text-[var(--muted)] tabular-nums">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
          <div className="relative w-40 sm:w-52">
            <label htmlFor="projects-search" className="sr-only">
              Search projects
            </label>
            <input
              id="projects-search"
              type="search"
              placeholder="Search…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-[var(--border)] bg-[var(--background)] py-1.5 pl-3 pr-8 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--foreground)]/40 focus:outline-none focus:ring-1 focus:ring-[var(--foreground)]/20"
              aria-label="Search projects"
            />
            <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--muted)]" aria-hidden>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Project grid: architectural, more cards per row */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((project) => {
          const coverSrc = projectImageUrl(project, project.coverImage);
          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block overflow-hidden rounded-lg bg-white transition duration-200 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/20 focus:ring-offset-2"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[var(--border)]">
                <Image
                  src={coverSrc}
                  alt={project.title}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="px-3 py-3 sm:px-4 sm:py-3.5">
                <h2 className="text-sm font-semibold tracking-tight text-[var(--foreground)] line-clamp-2 group-hover:text-[var(--accent)] sm:text-base">
                  {project.title}
                </h2>
                <p className="mt-0.5 text-[11px] text-[var(--muted)] sm:text-xs">
                  {project.location}
                  {project.contractValue && (
                    <span className="ml-1.5 border-l border-[var(--border)] pl-1.5">
                      {project.contractValue}
                    </span>
                  )}
                </p>
                <span className="mt-2 inline-block text-[11px] font-medium text-[var(--foreground)] opacity-0 transition group-hover:opacity-100 sm:text-xs">
                  View project →
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-sm text-[var(--muted)]">
          No projects match. Try a different filter or search.
        </p>
      ) : null}
    </div>
    </>
  );
}
