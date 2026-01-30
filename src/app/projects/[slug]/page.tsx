import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projectImageUrl } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const { PROJECTS_GALLERY } = await import("@/data/projects");
  return PROJECTS_GALLERY.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return { title: `${project.title} | Coastal Millwork & Supply` };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div>
      {/* Back + title */}
      <section className="border-b border-[var(--border)] bg-intro px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded"
          >
            ← Return to Projects Gallery
          </Link>
          <h1 className="mt-6 text-3xl font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-4xl">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Key details */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl">
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.contractValue && (
              <div>
                <dt className="section-label">Contract Value</dt>
                <dd className="mt-1.5 text-lg font-semibold text-[var(--foreground)]">{project.contractValue}</dd>
              </div>
            )}
            <div>
              <dt className="section-label">Location</dt>
              <dd className="mt-1.5 text-[var(--foreground)]">{project.location}</dd>
            </div>
            {project.generalContractor && (
              <div>
                <dt className="section-label">General Contractor</dt>
                <dd className="mt-1.5 text-[var(--foreground)]">{project.generalContractor}</dd>
              </div>
            )}
            {project.architect && (
              <div>
                <dt className="section-label">Architect</dt>
                <dd className="mt-1.5 text-[var(--foreground)]">{project.architect}</dd>
              </div>
            )}
            {project.courtroomDesigner && (
              <div>
                <dt className="section-label">Courtroom Designer</dt>
                <dd className="mt-1.5 text-[var(--foreground)]">{project.courtroomDesigner}</dd>
              </div>
            )}
            {project.cmsEngineer && (
              <div>
                <dt className="section-label">CMS Architectural Design Engineer</dt>
                <dd className="mt-1.5 text-[var(--foreground)]">{project.cmsEngineer}</dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      {/* Summary of products */}
      {project.summary.length > 0 && (
        <section className="border-b border-[var(--border)] bg-section-alt px-4 py-12 sm:py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="section-label section-label-with-rule">Summary of Products Engineered, Fabricated, and Installed</h2>
            <ul className="mt-8 space-y-3">
              {project.summary.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--foreground)] leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]/50" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Image gallery */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="section-label section-label-with-rule">Gallery</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.images.map((filename) => {
              const src = projectImageUrl(project, filename);
              return (
                <div key={filename} className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--border)] shadow-sm">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={src}
                      alt={`${project.title} – image`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA back to gallery */}
      <section className="bg-white px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--foreground)] bg-transparent px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--foreground)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
          >
            ← All projects
          </Link>
        </div>
      </section>
    </div>
  );
}
