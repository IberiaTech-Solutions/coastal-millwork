import Image from "next/image";
import Link from "next/link";

const PRODUCT_CATEGORIES = [
  "Premium Grade, Factory Transparent and Opaque Finishes",
  "Installation of All Material Types",
  "Trim and Moldings (Millwork)",
  "Plastic Laminate and Wood Cabinetry",
  "Plastic Laminate and Wood Countertops",
  "Sheet Paneling and Wood Veneers",
  "Polymer (Corian) Countertops, Cladding, and Furniture – including radius and spiral designs; Certified and Specified by DuPont",
  "Natural and Manufactured Stone Countertops, Sinks and Cladding",
  "Custom 'Furniture' and Feature Assemblies",
  "Wall Panel Assemblies (All Types)",
  "Rail and Stile Doors / Store Fronts Door Frames and Assemblies",
  "Treads, Risers, Railings and Balusters",
  "Shelving",
  "Specialty Veneer Lay-Ups",
  "Mantels, Surrounds and Columns",
  "Specialty Resin and Acrylic Products",
  "Integrated Custom Glass and Glazing",
  "Decorative Metals and Stainless Steel",
];

const CONSTRUCTION_GENRES = [
  "Interior Office Up-Fits",
  "Hospitals",
  "Medical Office Buildings",
  "Assisted Living / Long-Term Care",
  "Lodging and Resorts",
  "Airports",
  "Educational Institutions",
  "Government Facilities and Complexes",
  "Churches / Worship Centers",
  "Event Centers",
  "High Scale Restaurants",
  "Country Clubs and Amenity Centers",
  "Banks / Financial Institutions",
];

const HIGHLIGHTS = [
  "Largest Architectural Design Engineering Staff in the Southeast",
  "Focusing On Premium, High-Expectation Commercial Projects",
  "Specializing In Large-Scope Projects … Up to $20 Million in Contract Value",
  "Providing a Complete Scope of Wood, Laminates, Finishes, Decorative Metals & Glass, Polymers, and Stone Packages",
  "Complete Design, Development and Construction Integration Consulting",
  "Highly Proactive, Collaborative Driven, Project Design & Management Protocols",
  "AWI-QCP Premium Certified – All Fabrication and Installation QSIs",
];

export default function ProductsPage() {
  return (
    <div>
      {/* Page hero */}
      <section className="border-b border-[var(--border)] bg-intro px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label section-label-with-rule">Products</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-4xl">
            Custom design, manufacture, and installation of interior finish products
          </h1>
        </div>
      </section>

      {/* Lead + image */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <nav className="mb-10 flex flex-wrap gap-4 text-sm" aria-label="Page menu">
            <a href="#typical-product-categories" className="font-medium text-[var(--accent)] hover:underline">
              Typical Product Categories
            </a>
            <a href="#typical-construction-genres" className="font-medium text-[var(--accent)] hover:underline">
              Typical Construction Genres
            </a>
          </nav>
          <p className="text-lg leading-relaxed text-[var(--foreground)] sm:text-xl">
            Coastal Millwork and Supply (CMS) offers the design, manufacture, and installation of virtually any type of interior finish product. Being in the &lsquo;custom&rsquo; genre, we are usually involved in developing new types of finished products with varying material types. No one in our industry has the resources to accomplish this quite like the CMS staff. From decorative metals to radius polymers to AWI Premium, high-end shop finishing, CMS can provide products with any type of integrated finishes based on the AWI standards of custom architectural millwork.
          </p>
          <p className="mt-6 text-[var(--muted)] leading-relaxed">
            We offer a full line of solid-surface designs and capabilities by utilizing our full-size polymer oven.
          </p>
          <figure className="mt-10">
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-[var(--border)] shadow-sm">
              <Image src="/images/products/executive-work-space_480x305.jpg" alt="Executive work space" width={480} height={305} className="h-full w-full object-cover" />
            </div>
            <figcaption className="mt-3 text-sm text-[var(--muted)]">
              executive work space
            </figcaption>
          </figure>
          <p className="mt-8 text-[var(--muted)] leading-relaxed">
            CMS does not offer a &lsquo;product line&rsquo; of cabinetry. With a mission focused on project management, CMS is a custom manufacturer starting with product design engineering through site installation and all points in between. Over the years, we have branched into integrating specialty finishes by incorporating metal work, glazing, acrylics, polymers, and other specialty products, into our design and manufacturing experience.
          </p>
          <p className="mt-8 text-[var(--foreground)] font-semibold">Of importance to note, CMS is:</p>
          <ul className="mt-3 space-y-2 text-[var(--muted)] leading-relaxed">
            {[
              "a member and participant in good standing of the AWI-QCP program and an AWI premium-certified millwork contractor; and,",
              "a distinctly specified fabricator and installer for commercial Corian contracting in the state of South Carolina per DuPont Corian specifications.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]/40" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Typical Product Categories */}
      <section id="typical-product-categories" className="scroll-mt-24 border-b border-[var(--border)] bg-section-alt px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="section-label section-label-with-rule text-center">Typical Product Categories</h2>
          <p className="mt-10 text-center text-sm font-medium text-[var(--muted)]">Pine Lakes Country Club</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-white/80 px-4 py-3.5 text-sm font-medium text-[var(--foreground)] shadow-sm backdrop-blur-sm"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]/40" aria-hidden />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Typical Construction Genres */}
      <section id="typical-construction-genres" className="scroll-mt-24 border-b border-[var(--border)] bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="section-label section-label-with-rule text-center">Typical Construction Genres</h2>
          <p className="mt-10 text-center text-sm font-medium text-[var(--muted)]">Beaufort City Hall</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CONSTRUCTION_GENRES.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-sm font-medium text-[var(--foreground)] shadow-sm"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]/40" aria-hidden />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-b border-[var(--border)] bg-stripes px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="section-label section-label-with-rule text-center">Highlights</h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-white/80 px-4 py-3.5 text-sm font-medium text-[var(--foreground)] shadow-sm backdrop-blur-sm"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]/40" aria-hidden />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link href="/services" className="inline-flex items-center rounded-full border-2 border-[var(--foreground)] bg-transparent px-6 py-2.5 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--foreground)] hover:text-white">
            Services →
          </Link>
        </div>
      </section>
    </div>
  );
}
