"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import type { ProjectDetail, ProjectTier, SectorLabel } from "@/data/projects";
import { projectImageUrl, SECTOR_LABELS } from "@/data/projects";
import ImageReveal from "@/components/ImageReveal";

const TIER_LABELS: Record<ProjectTier | "all", string> = {
  all: "All",
  0: "All",
  1: ">$1M",
  2: ">$3M",
  3: ">$5M",
  4: ">$10M",
};

// Same colored pills as home page (NotableProjects): All dark, then amber/slate/amber/emerald
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
    <div className="mx-auto max-w-6xl">
      {/* Filter bar – Value segments, Sector select, count + search */}
      <div className="filter-bar mb-14 border-b border-[var(--border-drafting)] pb-10 sm:mb-16 sm:pb-12">
        <div className="filter-bar-inner flex flex-wrap items-end gap-x-8 gap-y-6 sm:gap-x-10">
          <div className="filter-group flex flex-wrap items-baseline gap-3">
            <span className="filter-label">Value</span>
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by contract value">
              <button
                type="button"
                onClick={() => setValueFilter("all")}
                aria-pressed={valueFilter === "all"}
                className={`rounded-full border-2 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                  valueFilter === "all" ? TIER_PILL_ACTIVE.all : TIER_PILL_INACTIVE.all
                } ${valueFilter === "all" ? "focus:ring-[var(--foreground)]" : "focus:ring-[var(--accent)]"}`}
              >
                All
              </button>
              {availableTiers.map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setValueFilter(tier)}
                  aria-pressed={valueFilter === tier}
                  className={`rounded-full border-2 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider transition focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                    valueFilter === tier ? TIER_PILL_ACTIVE[tier] : TIER_PILL_INACTIVE[tier]
                  } ${valueFilter === tier ? "focus:ring-[var(--foreground)]" : "focus:ring-[var(--accent)]"}`}
                >
                  {TIER_LABELS[tier]}
                </button>
              ))}
            </div>
          </div>
          {availableSectors.length > 0 && (
            <div className="filter-group flex flex-wrap items-baseline gap-3">
              <span className="filter-label">Sector</span>
              <label htmlFor="sector-filter" className="sr-only">Filter by sector</label>
              <select
                id="sector-filter"
                value={sectorFilter}
                onChange={(e) => setSectorFilter(e.target.value as SectorFilterValue)}
                className="filter-select"
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
          <div className="filter-bar-end ml-auto flex items-baseline gap-5 pt-0.5">
            <span className="filter-count text-[11px] tabular-nums text-[var(--muted)]">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>
            <div className="relative w-28 sm:w-36">
              <label htmlFor="projects-search" className="sr-only">Search projects</label>
              <input
                id="projects-search"
                type="search"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-underline pr-6"
                aria-label="Search projects"
              />
              <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[var(--muted)]" aria-hidden>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery grid – visible on load so projects show without scrolling */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 lg:gap-12">
        {filtered.map((project) => {
          const coverSrc = projectImageUrl(project, project.coverImage);
          const scaleLabel = project.tier === 0 ? "—" : TIER_LABELS[project.tier];
          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/20 focus:ring-offset-2"
            >
              {/* Image: gentle zoom on hover */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--border)]/50">
                <ImageReveal className="absolute inset-0 h-full w-full">
                  <Image
                    src={coverSrc}
                    alt={project.title}
                    width={400}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </ImageReveal>
              </div>
              {/* Card: location (small), title (dominant), sector + value (quiet), subtle link */}
              <div className="px-4 py-4 sm:px-5 sm:py-5">
                <p className="text-xs text-[var(--muted)]">
                  {project.location}
                </p>
                <h2 className="mt-0.5 text-lg font-semibold tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent)] sm:text-xl">
                  {project.title}
                </h2>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-[var(--muted)]/90">
                  {project.sector}
                  {scaleLabel !== "—" && (
                    <span className="ml-1.5 normal-case tracking-normal text-[var(--muted)]">
                      · {scaleLabel}
                    </span>
                  )}
                </p>
                <span className="mt-3 inline-block text-xs text-[var(--muted)] transition group-hover:text-[var(--accent)]">
                  View project →
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="py-28 text-center text-sm text-[var(--muted)]">
          No projects match. Try a different filter or search.
        </p>
      ) : null}
    </div>
    </>
  );
}
