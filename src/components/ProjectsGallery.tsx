"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import type { ProjectDetail, ProjectTier, SectorLabel } from "@/data/projects";
import { projectImageUrl, SECTOR_LABELS } from "@/data/projects";
import AnimateSection from "@/components/AnimateSection";
import ImageReveal from "@/components/ImageReveal";

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
    <div className="mx-auto max-w-6xl">
      {/* Filter bar – minimal chrome, gallery not database */}
      <div className="mb-14 flex flex-wrap items-center gap-4 border-b border-[var(--border-drafting)] pb-10 sm:mb-16 sm:gap-5 sm:pb-12">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-wider text-[var(--muted)]">Value</span>
          <button
            type="button"
            onClick={() => setValueFilter("all")}
            className={`cursor-pointer rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider transition focus:outline-none focus:ring-1 focus:ring-[var(--foreground)]/20 focus:ring-offset-1 ${
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
              className={`cursor-pointer rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider transition focus:outline-none focus:ring-1 focus:ring-[var(--foreground)]/20 focus:ring-offset-1 ${
                valueFilter === tier ? TIER_PILL_ACTIVE[tier] : TIER_PILL_INACTIVE[tier]
              }`}
            >
              {TIER_LABELS[tier]}
            </button>
          ))}
        </div>
        {availableSectors.length > 0 && (
          <div className="flex items-center gap-2">
            <label htmlFor="sector-filter" className="sr-only">Sector</label>
            <select
              id="sector-filter"
              value={sectorFilter}
              onChange={(e) => setSectorFilter(e.target.value as SectorFilterValue)}
              className="rounded border border-[var(--border)]/80 bg-transparent py-1.5 pl-2 pr-6 text-[11px] font-medium text-[var(--muted)] focus:border-[var(--foreground)]/30 focus:outline-none focus:ring-1 focus:ring-[var(--foreground)]/10"
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
          <span className="text-[11px] tabular-nums text-[var(--muted)]">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
          <div className="relative w-36 sm:w-44">
            <label htmlFor="projects-search" className="sr-only">Search</label>
            <input
              id="projects-search"
              type="search"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded border border-[var(--border)]/80 bg-transparent py-1.5 pl-2.5 pr-7 text-[11px] text-[var(--foreground)] placeholder:text-[var(--muted)] focus:border-[var(--foreground)]/30 focus:outline-none focus:ring-1 focus:ring-[var(--foreground)]/10"
              aria-label="Search projects"
            />
            <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[var(--muted)]" aria-hidden>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      {/* Gallery grid – more cards per row, smaller cards */}
      <AnimateSection as="div" className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-10 lg:gap-12">
        {filtered.map((project) => {
          const coverSrc = projectImageUrl(project, project.coverImage);
          const scaleLabel = project.tier === 0 ? "—" : TIER_LABELS[project.tier];
          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/20 focus:ring-offset-2"
            >
              {/* Image: gentle zoom on hover, soft overlay reveal */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--border)]/50">
                <ImageReveal className="absolute inset-0 h-full w-full">
                  <Image
                    src={coverSrc}
                    alt={project.title}
                    width={400}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </ImageReveal>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" aria-hidden />
                <span className="absolute bottom-3 left-3 right-3 text-[11px] font-medium text-white opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
                  View project →
                </span>
              </div>
              {/* Location + type hierarchy – compact for smaller cards */}
              <div className="px-4 py-4 sm:px-5 sm:py-5">
                <p className="text-sm font-medium tracking-wide text-[var(--foreground)]">
                  {project.location}
                </p>
                <h2 className="mt-1 text-lg font-semibold tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent)]">
                  {project.title}
                </h2>
                <p className="mt-1.5 text-[10px] font-medium uppercase tracking-wider text-[var(--muted)]">
                  {project.sector}
                  {scaleLabel !== "—" && (
                    <span className="ml-1.5 normal-case tracking-normal text-[var(--foreground)]/60">
                      · {scaleLabel}
                    </span>
                  )}
                </p>
              </div>
            </Link>
          );
        })}
      </AnimateSection>

      {filtered.length === 0 ? (
        <p className="py-28 text-center text-sm text-[var(--muted)]">
          No projects match. Try a different filter or search.
        </p>
      ) : null}
    </div>
    </>
  );
}
