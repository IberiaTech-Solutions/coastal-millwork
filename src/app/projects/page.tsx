import ProjectsGallery from "@/components/ProjectsGallery";
import { PROJECTS_GALLERY } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div>
      {/* Page hero – same height and styling as About, Team, Products, Services */}
      <section className="border-b border-[var(--border)] bg-intro px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label section-label-with-rule">Projects</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-4xl">
            Notable and current work
          </h1>
          <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
            Stadiums, judicial centers, airports, hospitality—across the Southeast and beyond.
          </p>
        </div>
      </section>

      {/* Gallery: curated, not cataloged – more whitespace */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-paper)] px-4 py-24 sm:py-32">
        <ProjectsGallery projects={PROJECTS_GALLERY} />
      </section>
    </div>
  );
}
