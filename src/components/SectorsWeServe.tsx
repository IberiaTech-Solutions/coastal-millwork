"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateSection from "@/components/AnimateSection";
import AnimateLine from "@/components/AnimateLine";
import AnimateHeading from "@/components/AnimateHeading";
import { PROJECTS_GALLERY, SECTOR_LABELS, projectImageUrl } from "@/data/projects";

/** Sectors that have at least one project in the gallery */
const SECTORS_WITH_PROJECTS = SECTOR_LABELS.filter((s) =>
  PROJECTS_GALLERY.some((p) => p.sector === s)
).map((label) => ({ label, href: "/projects" }));

/** Sectors We Serve: sectors with projects + Faith (always show Faith) */
const SECTORS_FOR_DISPLAY =
  SECTORS_WITH_PROJECTS.some((s) => s.label === "Faith")
    ? SECTORS_WITH_PROJECTS
    : [...SECTORS_WITH_PROJECTS, { label: "Faith" as const, href: "/projects" }];

/** Fallback image for Faith sector (Seacoast Worship Center) */
const FAITH_SECTOR_IMAGE = `/images/projects/${encodeURIComponent("Seacoast Worship Center - Coastal Millwork and Supply")}/seacoast-01.jpg`;

/** One representative project image per sector; Faith uses Seacoast image when no Faith project in gallery */
function getSectorPhotos() {
  return SECTORS_FOR_DISPLAY.map(({ label, href }) => {
    const project = PROJECTS_GALLERY.find((p) => p.sector === label);
    if (project)
      return { label, href, src: projectImageUrl(project, project.coverImage), alt: project.title };
    if (label === "Faith") return { label, href, src: FAITH_SECTOR_IMAGE, alt: "Seacoast Worship Center" };
    return { label, href };
  });
}

const SECTOR_PHOTOS = getSectorPhotos();

type SectorsWeServeProps = {
  /** Optional section id for anchor links (e.g. products page jump nav) */
  id?: string;
};

export default function SectorsWeServe({ id = "sectors-we-serve" }: SectorsWeServeProps) {
  return (
    <AnimateSection
      as="section"
      id={id}
      className="scroll-mt-24 border-b border-[var(--border)] bg-subtle px-4 py-16 sm:py-22"
      aria-label="Sectors we serve"
    >
      <div className="mx-auto max-w-5xl">
        <AnimateHeading as="h2" className="section-label text-center">
          Sectors We Serve
        </AnimateHeading>
        <div className="flex justify-center">
          <AnimateLine className="!mt-0.5 !block" />
        </div>
        <hr className="rule-design rule-design--thick rule-design--center mt-6 mb-10" aria-hidden />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {SECTOR_PHOTOS.map(({ label, href, src, alt }) => (
            <Link
              key={label}
              href={href}
              className="group block overflow-hidden rounded-lg border border-[var(--border)] bg-white shadow-sm transition hover:border-[var(--foreground)]/20 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/20 focus:ring-offset-2"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[var(--border)]">
                {src && alt ? (
                  <Image
                    src={src}
                    alt={alt}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[var(--border)]/80 px-4">
                    <span className="text-center text-xs font-semibold uppercase tracking-wider text-[var(--muted)] group-hover:text-[var(--accent)] sm:text-[11px]">
                      {label}
                    </span>
                  </div>
                )}
              </div>
              <p className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wider text-[var(--foreground)] transition group-hover:text-[var(--accent)] sm:text-[11px]">
                {label}
              </p>
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center">
          <Link href="/projects" className="text-sm font-medium text-[var(--accent)] hover:underline">
            View all projects →
          </Link>
        </p>
      </div>
    </AnimateSection>
  );
}
