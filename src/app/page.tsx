import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import AwardCard from "@/components/AwardCard";
import NotableProjects from "@/components/NotableProjects";
import AnimateSection from "@/components/AnimateSection";
import AnimateLine from "@/components/AnimateLine";
import AnimateHeading from "@/components/AnimateHeading";
import ImageReveal from "@/components/ImageReveal";
import { PROJECTS_GALLERY, SECTOR_LABELS } from "@/data/projects";

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

/** Only sectors that have at least one project in the gallery – aligned with /projects filter */
const SECTORS = SECTOR_LABELS.filter((s) => PROJECTS_GALLERY.some((p) => p.sector === s)).map((label) => ({ label, href: "/projects" }));

/** Contract value tier: 1 = >$1M (bold), 2 = >$3M (red), 3 = >$5M (orange), 4 = >$10M (green) */
const PROJECTS: { name: string; location: string; tier: 1 | 2 | 3 | 4 }[] = [
  { name: "The Manger Hotel", location: "Savannah, GA", tier: 1 },
  { name: "Charleston International Airport", location: "Charleston, SC", tier: 4 },
  { name: "The Cooper Waterfront Hotel", location: "Charleston, SC", tier: 2 },
  { name: "The Charleston Place Hotel", location: "Full Renovation", tier: 3 },
  { name: "The International African American Museum", location: "Charleston, SC", tier: 4 },
  { name: "Spartanburg County Judicial Center & Courthouse", location: "Spartanburg, SC", tier: 4 },
  { name: "Credit One Stadium", location: "Daniel Island, SC", tier: 4 },
  { name: "Long Island Rail Station", location: "New York, NY", tier: 4 },
  { name: "UCB Corporate Headquarters", location: "Greenville, SC", tier: 2 },
  { name: "Pee Dee Electric Coop Corporate Headquarters", location: "Florence, SC", tier: 1 },
  { name: "We Are Sharing Hope Corporate Center", location: "Charleston, SC", tier: 2 },
  { name: "Lexington Performing Arts Center", location: "Lexington, SC", tier: 3 },
  { name: "Columbia County Performing Arts Center", location: "Augusta, GA", tier: 3 },
  { name: "Palmetto Bluff River House & Event Center", location: "Bluffton, SC", tier: 3 },
  { name: "The Sweetgrass Inn at Wild Dunes", location: "Isle of Palms, SC", tier: 2 },
  { name: "Nelson Mullins Law Firm", location: "Charleston, SC", tier: 2 },
  { name: "Charleston International Airport West Gate Expansion", location: "Charleston, SC", tier: 3 },
  { name: "HCA Grandstrand MOB", location: "Myrtle Beach, SC", tier: 3 },
  { name: "Kiawah Night Heron Complex", location: "Kiawah Island, SC", tier: 2 },
  { name: "The Citadel – Capers Hall & Stevens Hall", location: "Charleston, SC", tier: 3 },
  { name: "Congaree Golf Club", location: "Ridgeland, SC", tier: 2 },
  { name: "Eaton Corporation US Headquarters", location: "Beachwood, Ohio", tier: 3 },
  { name: "Cougar Point Golf Clubhouse", location: "Kiawah, SC", tier: 2 },
  { name: "Cougar Point Convention Center", location: "Kiawah, SC", tier: 2 },
  { name: "Wofford Indoor Stadium", location: "Spartanburg, SC", tier: 3 },
  { name: "TTI Corporate HQ", location: "Greenville, SC", tier: 2 },
  { name: "Florence County Judicial Center & Courthouse", location: "Florence, SC", tier: 3 },
  { name: "Boeing Delivery Building, Executive Building and Training/Welcome Center", location: "North Charleston, SC", tier: 4 },
  { name: "Clemson School of Architecture – Lee Hall III", location: "Clemson, SC", tier: 3 },
  { name: "Marshwood Golf & Clubhouse", location: "Savannah, GA", tier: 2 },
  { name: "Moore Van Allen Law Firm", location: "Charleston, SC", tier: 2 },
  { name: "Volvo Production / Training Facilities & Executive Office Building", location: "Ridgeville, SC", tier: 4 },
  { name: "South Bay Assisted Living", location: "Mount Pleasant, SC", tier: 1 },
  { name: "Seacoast Worship Center (Main Campus)", location: "Mount Pleasant, SC", tier: 2 },
  { name: "Somerby Assisted Living", location: "Mount Pleasant, SC", tier: 1 },
  { name: "Clausen & Staubs Law Firm", location: "Daniel Island, SC", tier: 1 },
  { name: "USC Beaufort Hospitality & Executive Building", location: "Beaufort, SC", tier: 2 },
  { name: "Spring Island Clubhouse", location: "Okatie, SC", tier: 2 },
  { name: "Palmetto Bluff Montage Resort (Guest Rooms & Water Front Units)", location: "Bluffton, SC", tier: 4 },
  { name: "Palmetto Bluff River House", location: "Bluffton, SC", tier: 2 },
  { name: "Hyatt Grand (Main Street)", location: "Greenville, SC", tier: 2 },
  { name: "Sullivan's Island Town Hall", location: "Sullivans Island, SC", tier: 1 },
  { name: "Kiawah Town Hall & Municipal Center", location: "Kiawah, SC", tier: 1 },
  { name: "Bayshore Assisted Living", location: "Hilton Head, SC", tier: 1 },
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

      {/* Sectors – dense, text-heavy; subtle 2% tone (bg-subtle) */}
      <AnimateSection as="section" className="border-b border-[var(--border)] bg-subtle px-4 py-16 sm:py-22">
        <div className="mx-auto max-w-4xl">
          <AnimateHeading as="h2" className="section-label text-center">
            Sectors We Serve
          </AnimateHeading>
          <div className="flex justify-center">
            <AnimateLine className="!mt-0.5 !block" />
          </div>
          <hr className="rule-design rule-design--thick rule-design--center mt-6" aria-hidden />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {SECTORS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="sector-item group flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-left transition hover:border-[var(--foreground)]/40 hover:bg-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/20 focus:ring-offset-2"
              >
                <span className="sector-item-marker h-1 w-1 shrink-0 rounded-full bg-[var(--foreground)]/35" aria-hidden />
                <span className="text-sm font-semibold tracking-tight text-[var(--foreground)] group-hover:text-white">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </AnimateSection>

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
          <p className="mt-12 text-center">
            <Link href="/projects" className="text-sm font-medium text-[var(--accent)]/90 hover:text-[var(--accent)] hover:underline">
              Project gallery →
            </Link>
          </p>
        </div>
      </AnimateSection>

      <AnimateSection>
        <NotableProjects projects={PROJECTS} />
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
                className="card-float flex items-start gap-3 rounded-lg border border-[var(--border)] bg-white/90 px-4 py-3.5 text-sm font-medium text-[var(--foreground)] backdrop-blur-sm transition hover:border-[var(--foreground)]/20"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]/40" aria-hidden />
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
