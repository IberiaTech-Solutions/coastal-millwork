import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import AwardCard from "@/components/AwardCard";
import NotableProjects from "@/components/NotableProjects";
import AnimateSection from "@/components/AnimateSection";
import AnimateLine from "@/components/AnimateLine";
import AnimateHeading from "@/components/AnimateHeading";
import ImageReveal from "@/components/ImageReveal";
import { NOTABLE_PROJECTS, PROJECTS_GALLERY } from "@/data/projects";
import SectorsWeServe from "@/components/SectorsWeServe";

const AWARDS = [
  { name: "Architectural Woodwork Institute Award of Excellence", image: "/images/home/AWI-Award.jpg" },
  { name: "Charleston International Airport", image: "/aiprot.png", fullWidthImage: true },
  { name: "Choate Construction – Subcontractor of the Quarter 2019", image: "/Choate.png", fullWidthImage: true },
  { name: "Design Solutions Magazine", image: "/megazine.png", objectPosition: "top" as const },
  { name: "Jerry Richardson Indoor Stadium", image: "/stadium.png" },
];

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



export default function Home() {
  return (
    <div>
      {/* Hero – oversized headline, metric, restrained background motion */}
      <Hero
        taglines={HERO_TAGLINES}
        images={HERO_IMAGES}
        subtitle="Summerville, SC"
        metric="800+ architectural projects · 20+ years · AWI-QCP Premium Certified"
        scrollToId="intro"
      />

      {/* Intro – mission callout + paragraph; 2026: callout block, more whitespace around quote */}
      <AnimateSection as="section" id="intro" className="scroll-mt-24 border-b border-[var(--border)] bg-intro px-4 py-36 sm:py-48">
        <div className="mx-auto max-w-4xl">
          <p className="mission-callout">
            Our primary mission is to &ldquo;provide the highest level of comprehensive, pre-project design integration and pro-active construction management in the production and installation of premium finished, architectural wood and interior specialty products.&rdquo;
          </p>
          <hr className="rule-design rule-design--thick mt-14 mb-14 sm:mt-16 sm:mb-16" aria-hidden />
          <p className="text-base font-normal leading-relaxed text-[var(--muted)] sm:text-lg sm:leading-loose">
            Located in Summerville, SC, but serving the Southeast, Coastal Millwork & Supply LLC is an award-winning, AWI QCP premium-certified, full-service, commercial interior architectural woodwork and adjacent finishes contractor and fabricator. We specialize in the design engineering, project management, fabrication, and installation of custom wood & laminate products, custom finishes, decorative metals and glass, polymers, and stone packages.
          </p>
          <p className="mt-12 sm:mt-14">
            <Link href="/about" className="text-sm font-medium text-[var(--accent)] hover:underline">
              Continue reading on our About Us page →
            </Link>
          </p>
        </div>
      </AnimateSection>

      {/* Process sections – equal heights, same image ratio, identical padding; hover scale + arrow nudge */}
      <section id="services" className="section-overlap-up scroll-mt-24 border-b border-[var(--border)] bg-[var(--bg-paper)] px-4 pb-20 pt-18 sm:pb-24 sm:pt-22">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center sm:mb-16">
            <AnimateHeading className="section-label">
              What we do
            </AnimateHeading>
            <div className="flex justify-center">
              <AnimateLine className="!mt-0.5 !block" />
            </div>
            <hr className="rule-design rule-design--thick rule-design--center mt-6" aria-hidden />
          </div>
          {/* 2026 architectural standard: number outside card, mobile stacked, tablet 2+1, desktop 3 side by side */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 xl:grid-cols-3 xl:gap-12">
            {FEATURED.map((item, index) => {
              const step = String(index + 1).padStart(2, "0");
              return (
                <AnimateSection key={item.title} as="div" className="flex flex-col">
                  <span className="process-step-number mb-2 text-4xl font-semibold tabular-nums tracking-tight text-[var(--muted)]/35 sm:mb-3 sm:text-5xl" aria-hidden>
                    {step}
                  </span>
                  <Link
                    href={item.href}
                    className="card-float capability-card group flex flex-1 flex-col overflow-hidden rounded-lg bg-white transition hover:bg-white"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--border)]">
                      <ImageReveal className="absolute inset-0 h-full w-full">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        />
                      </ImageReveal>
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <h2 className="text-xl font-semibold tracking-[-0.025em] text-[var(--foreground)] group-hover:underline sm:text-2xl">
                        {item.title}
                      </h2>
                      <p className="mt-3 flex-1 text-[var(--muted)] leading-relaxed sm:text-base">
                        {item.description}
                      </p>
                      <span className="capability-card-arrow mt-5 inline-block text-sm font-medium text-[var(--foreground)] group-hover:underline">
                        Learn more →
                      </span>
                    </div>
                  </Link>
                </AnimateSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* "Not being the concern" – hero moment: bigger type, more negative space, no clutter */}
      <AnimateSection as="section" className="border-b border-[var(--border)] bg-band px-4 py-48 sm:py-64">
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="manifesto-quote manifesto-quote--hero">
            We are committed to &ldquo;not being the concern&rdquo; for any General Contractor or Design Team, and our track record and reputation have come from that commitment.
          </blockquote>
        </div>
      </AnimateSection>

      <SectorsWeServe />

      {/* Awards – spacious, image-heavy; cooler alt tone */}
      <AnimateSection as="section" className="section-overlap-up border-b border-[var(--border)] bg-section-alt px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <AnimateHeading as="h2" className="section-label text-center">
            Awards & Recognition
          </AnimateHeading>
          <div className="flex justify-center">
            <AnimateLine className="!mt-0.5 !block" />
          </div>
          <hr className="rule-design rule-design--thick rule-design--center mt-6" aria-hidden />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-10 xl:grid-cols-5 xl:gap-8 awards-gallery">
            {AWARDS.map((award) => (
              <AwardCard
                key={award.name}
                name={award.name}
                image={award.image}
                fullWidthImage={award.fullWidthImage}
                objectPosition={award.objectPosition}
              />
            ))}
          </div>
        </div>
      </AnimateSection>

      <AnimateSection>
        <NotableProjects projects={NOTABLE_PROJECTS} />
      </AnimateSection>

      {/* Products – dense, text-heavy; subtle-alt 4% tone */}
      <AnimateSection as="section" className="border-b border-[var(--border)] bg-subtle-alt px-4 py-16 sm:py-22">
        <div className="mx-auto max-w-5xl">
          <AnimateHeading as="h2" className="section-label text-center">
            Products and Services
          </AnimateHeading>
          <div className="flex justify-center">
            <AnimateLine className="!mt-0.5 !block" />
          </div>
          <hr className="rule-design rule-design--thick rule-design--center mt-6 mb-10" aria-hidden />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Comprehensive architectural design and development",
              "Premium grade, factory transparent and opaque finishes",
              "Complete installation service for all product categories",
              "Custom architectural feature assemblies",
              "Trim and moldings (millwork)",
              "Plastic laminate and wood cabinetry",
              "Plastic laminate and wood countertops",
              "Sheet paneling and wood veneers",
            ].map((item) => (
              <li
                key={item}
                className="card-float flex items-start rounded-lg border border-[var(--border)] bg-white/90 px-4 py-3.5 text-sm font-medium text-[var(--foreground)] backdrop-blur-sm transition hover:border-[var(--foreground)]/20"
              >
                <span className="leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="rounded-full border-2 border-[var(--foreground)] bg-transparent px-6 py-2.5 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--foreground)] hover:text-white"
            >
              Products
            </Link>
            <Link
              href="/services"
              className="rounded-full border-2 border-[var(--foreground)] bg-transparent px-6 py-2.5 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--foreground)] hover:text-white"
            >
              Services
            </Link>
          </div>
        </div>
      </AnimateSection>

      {/* CTA – spacious, light (white); text anchor */}
      <AnimateSection as="section" className="bg-white px-4 py-32 sm:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <hr className="rule-design rule-design--thick rule-design--center mb-12" aria-hidden />
          <AnimateHeading as="h2" className="text-2xl font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-3xl">
            Design excellence. Proactive management. No surprises.
          </AnimateHeading>
          <p className="anchor-line mt-8 text-[var(--foreground)]">
            Largest architectural design engineering staff in the Southeast.
          </p>
          <p className="mt-3 text-[var(--muted)]">
            AWI-QCP Premium certified fabrication and installation.
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
      </AnimateSection>
    </div>
  );
}
