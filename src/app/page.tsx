import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";

const HERO_TAGLINES = [
  "Award-Winning, Full-Service, Commercial Architectural Interiors Contractor",
  "Largest Architectural Design Engineering Staff in the Southeast",
  "Focusing On Premium, High-Expectation Commercial Projects",
  "Specializing In Large-Scope Projects; Up to $20 Million in Contract Value",
  "Providing a complete scope of wood, laminates, finishes, decorative metals & glass, polymers, and stone packages",
  "Complete Design, Development and Construction Integration Consulting",
  "Highly Proactive, Collaborative Driven, Project Design & Management Protocols",
  "AWI-QCP Premium Certified – All Fabrication and Installation QSIs",
];

const HERO_IMAGES = [
  "/images/home/credit-one-stadium-09.jpg",
  "/images/home/jerry-richardson-indoor-stadium-01.jpg",
  "/images/home/lexington-performing-arts-center-10.jpg",
  "/images/home/Spartanburg-County-Judicial-Center-05.jpg",
  "/images/home/ruths-chris-02.jpg",
  "/images/home/rock-tenn-corp-office-02.jpg",
  "/images/home/cougar-point-01.jpg",
];

const FEATURED = [
  {
    title: "Design & Engineering",
    description: "Pre-project design integration, shop drawings, and proactive coordination with design teams and trades.",
    href: "/services",
    image: "/images/home/01-360x270.jpg",
    alt: "Design engineer at work",
  },
  {
    title: "Fabrication",
    description: "Premium-grade millwork, casework, and specialty finishes in our 40,000 sq ft facility. AWI-QCP Premium certified.",
    href: "/products",
    image: "/images/home/02-360x240.jpg",
    alt: "Beam saw and CNC",
  },
  {
    title: "Installation",
    description: "Professional install teams integrated from project start. On time, minimal punch lists, no surprises in the field.",
    href: "/services",
    image: "/images/home/03-360x240.jpg",
    alt: "Installation",
  },
];

const SECTORS = [
  { label: "Hospitality & Resorts", href: "/projects" },
  { label: "Healthcare", href: "/projects" },
  { label: "Aviation & Transportation", href: "/projects" },
  { label: "Higher Education", href: "/projects" },
  { label: "Civic & Government", href: "/projects" },
  { label: "Workplace & Corporate", href: "/projects" },
  { label: "Senior Living", href: "/projects" },
  { label: "Faith & Worship", href: "/projects" },
  { label: "Event & Convention", href: "/projects" },
];

const PROJECTS_PREVIEW: { name: string; location: string }[] = [
  { name: "The Manger Hotel", location: "Savannah, GA" },
  { name: "Charleston International Airport", location: "Charleston, SC" },
  { name: "The Charleston Place Hotel", location: "Full Renovation" },
  { name: "The International African American Museum", location: "Charleston, SC" },
  { name: "Palmetto Bluff Montage Resort", location: "Bluffton, SC" },
  { name: "Volvo Production & Training Facilities", location: "Ridgeville, SC" },
];

export default function Home() {
  return (
    <div>
      {/* Hero – rotating taglines + background images */}
      <Hero
        taglines={HERO_TAGLINES}
        images={HERO_IMAGES}
        subtitle="AWI-QCP Premium Certified · Summerville, SC"
      />

      {/* Featured – 3 cards like LS3P Architecture | Interiors | Planning */}
      <section id="featured" className="scroll-mt-0 border-b border-[var(--border)] bg-white">
        <div className="mx-auto grid max-w-6xl gap-px bg-[var(--border)] lg:grid-cols-3">
          {FEATURED.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group bg-[var(--background)] p-8 transition hover:bg-white lg:p-10"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[var(--border)]">
                <Image src={item.image} alt={item.alt} width={360} height={270} className="h-full w-full object-cover" />
              </div>
              <h2 className="mt-6 text-xl font-semibold tracking-tight text-[var(--foreground)] group-hover:underline">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {item.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-[var(--foreground)] group-hover:underline">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Quote / mission – LS3P-style pull quote */}
      <section className="border-b border-[var(--border)] bg-[var(--background)] px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="text-2xl font-medium leading-relaxed text-[var(--foreground)] sm:text-3xl">
            We are committed to &ldquo;not being the concern&rdquo; for any General Contractor or Design Team—and our track record and reputation have come from that commitment.
          </blockquote>
          <p className="mt-8 text-sm text-[var(--muted)]">
            From medical upfits to projects with multimillion-dollar scope values.
          </p>
        </div>
      </section>

      {/* Sectors – grid of buttons like LS3P */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            Sectors We Serve
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {SECTORS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="rounded-full border border-[var(--border)] bg-[var(--background)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects preview + CTA */}
      <section className="border-b border-[var(--border)] bg-[var(--background)] px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
                Notable Projects
              </h2>
              <p className="mt-3 max-w-xl text-sm text-[var(--muted)]">
                Over 800 architectural projects in 20 years. Airports, hotels, healthcare, higher ed, civic, and corporate.
              </p>
            </div>
            <Link
              href="/projects"
              className="shrink-0 rounded-full border-2 border-[var(--foreground)] bg-transparent px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--foreground)] hover:text-white"
            >
              View Projects
            </Link>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS_PREVIEW.map(({ name, location }) => (
              <li key={name} className="border-b border-[var(--border)] pb-4">
                <span className="font-medium text-[var(--foreground)]">{name}</span>
                <span className="text-[var(--muted)]"> — {location}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bottom CTA – About + Contact */}
      <section className="bg-white px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            Design excellence. Proactive management. No surprises.
          </h2>
          <p className="mt-6 text-[var(--muted)]">
            Largest architectural design engineering staff in the Southeast. AWI-QCP Premium certified fabrication and installation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              className="rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)]"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--foreground)]"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
