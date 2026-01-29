import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import AwardCard from "@/components/AwardCard";
import NotableProjects from "@/components/NotableProjects";

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
      {/* Hero – rotating taglines + background images */}
      <Hero
        taglines={HERO_TAGLINES}
        images={HERO_IMAGES}
        subtitle="AWI-QCP Premium Certified · Summerville, SC"
        scrollToId="intro"
      />

      {/* Intro – company overview and mission (from old site) */}
      <section id="intro" className="scroll-mt-24 border-b border-[var(--border)] bg-intro px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-lg font-medium text-[var(--foreground)] leading-relaxed sm:text-xl sm:leading-loose">
            Located in Summerville, SC, but serving the Southeast, Coastal Millwork & Supply LLC is an award-winning, AWI QCP premium-certified, full-service, commercial interior architectural woodwork and adjacent finishes contractor and fabricator. We specialize in the design engineering, project management, fabrication, and installation of custom wood & laminate products, custom finishes, decorative metals and glass, polymers, and stone packages.
          </p>
          <p className="mt-8 text-lg font-medium text-[var(--foreground)] leading-relaxed sm:text-xl sm:leading-loose">
            Our primary mission is to &ldquo;provide the highest level of comprehensive, pre-project design integration and pro-active construction management in the production and installation of premium finished, architectural wood and interior specialty products.&rdquo;
          </p>
          <p className="mt-10">
            <Link href="/about" className="text-sm font-medium text-[var(--accent)] hover:underline">
              Continue reading on our About Us page →
            </Link>
          </p>
        </div>
      </section>

      {/* Featured – 3 cards like LS3P Architecture | Interiors | Planning */}
      <section id="services" className="scroll-mt-24 border-b border-[var(--border)] bg-white">
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
              <h2 className="mt-6 text-xl font-semibold tracking-[-0.025em] text-[var(--foreground)] group-hover:underline">
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
      <section className="border-b border-[var(--border)] bg-quote px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="text-2xl font-medium leading-relaxed text-[var(--foreground)] sm:text-3xl">
            We are committed to &ldquo;not being the concern&rdquo; for any General Contractor or Design Team—and our track record and reputation have come from that commitment.
          </blockquote>
          <p className="mt-8 text-sm text-[var(--muted)]">
            From medical upfits to projects with multimillion-dollar scope values.
          </p>
          <p className="mt-6">
            <Link href="/about" className="text-sm font-medium text-[var(--accent)] hover:underline">
              Continue reading on our About Us page →
            </Link>
          </p>
        </div>
      </section>

      {/* Sectors – grid of buttons */}
      <section className="border-b border-[var(--border)] bg-stripes px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="section-label section-label-with-rule text-center">
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

      {/* Awards & Recognition */}
      <section className="border-b border-[var(--border)] bg-section-alt px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="section-label section-label-with-rule text-center">
            Awards & Recognition
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-6">
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
          <p className="mt-10 text-center">
            <Link href="/projects" className="text-sm font-medium text-[var(--accent)] hover:underline">
              Project gallery →
            </Link>
          </p>
        </div>
      </section>

      <NotableProjects projects={PROJECTS} />

      {/* Products and Services – modern grid */}
      <section className="border-b border-[var(--border)] bg-stripes px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="section-label section-label-with-rule text-center">
            Products and Services
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
                className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-white/80 px-4 py-3.5 text-sm font-medium text-[var(--foreground)] shadow-sm backdrop-blur-sm transition hover:border-[var(--foreground)]/20 hover:shadow"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]/40" aria-hidden />
                <span className="leading-snug">{item}</span>
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
      </section>

      {/* Bottom CTA – About + Contact */}
      <section className="bg-white px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-3xl">
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
