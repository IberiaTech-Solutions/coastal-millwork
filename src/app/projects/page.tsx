import ProjectsGallery from "@/components/ProjectsGallery";
import { PROJECTS_GALLERY } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div>
      {/* Hero: editorial, tight */}
      <section className="border-b border-[var(--border)] bg-intro px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label section-label-with-rule">Projects</p>
          <h1 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-3xl">
            Notable and current work
          </h1>
          <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
            Stadiums, judicial centers, airports, hospitality—across the Southeast and beyond.
          </p>
        </div>
      </section>

      {/* Gallery: more cards per row, architectural grid */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-paper)] px-4 py-12 sm:py-16">
        <ProjectsGallery projects={PROJECTS_GALLERY} />
      </section>
    </div>
  );
}
