import ProjectsGallery from "@/components/ProjectsGallery";
import { PROJECTS_GALLERY } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div>
      {/* Hero: editorial, more white space */}
      <section className="border-b border-[var(--border)] bg-intro px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">Projects</p>
          <hr className="rule-design rule-design--thick rule-design--center my-6" aria-hidden />
          <h1 className="text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)] sm:text-3xl">
            Notable and current work
          </h1>
          <p className="mt-6 text-sm text-[var(--muted)] leading-relaxed">
            Stadiums, judicial centers, airports, hospitality—across the Southeast and beyond.
          </p>
        </div>
      </section>

      {/* Gallery: museum-like, more white space */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-paper)] px-4 py-16 sm:py-24">
        <ProjectsGallery projects={PROJECTS_GALLERY} />
      </section>
    </div>
  );
}
