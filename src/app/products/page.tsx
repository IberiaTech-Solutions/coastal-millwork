import Image from "next/image";

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
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold text-[var(--foreground)]">Products</h1>

      {/* Page menu */}
      <nav className="mt-8 flex flex-wrap gap-4 text-sm" aria-label="Page menu">
        <a href="#typical-product-categories" className="font-medium text-[var(--accent)] hover:underline">
          Typical Product Categories
        </a>
        <a href="#typical-construction-genres" className="font-medium text-[var(--accent)] hover:underline">
          Typical Construction Genres
        </a>
      </nav>

      <p className="mt-10 text-[var(--foreground)] leading-relaxed">
        Coastal Millwork and Supply (CMS) offers the design, manufacture, and installation of virtually any type of interior finish product. Being in the &lsquo;custom&rsquo; genre, we are usually involved in developing new types of finished products with varying material types. No one in our industry has the resources to accomplish this quite like the CMS staff. From decorative metals to radius polymers to AWI Premium, high-end shop finishing, CMS can provide products with any type of integrated finishes based on the AWI standards of custom architectural millwork.
      </p>
      <p className="mt-6 text-[var(--muted)] leading-relaxed">
        We offer a full line of solid-surface designs and capabilities by utilizing our full-size polymer oven.
      </p>

      <figure className="mt-10">
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-[var(--border)]">
          <Image src="/images/products/executive-work-space_480x305.jpg" alt="Executive work space" width={480} height={305} className="h-full w-full object-cover" />
        </div>
        <figcaption className="mt-2 text-sm text-[var(--muted)]">
          Executive work space
        </figcaption>
      </figure>

      <p className="mt-8 text-[var(--muted)] leading-relaxed">
        CMS does not offer a &lsquo;product line&rsquo; of cabinetry. With a mission focused on project management, CMS is a custom manufacturer starting with product design engineering through site installation and all points in between. Over the years, we have branched into integrating specialty finishes by incorporating metal work, glazing, acrylics, polymers, and other specialty products, into our design and manufacturing experience.
      </p>

      <p className="mt-6 text-[var(--foreground)] font-medium">Of importance to note, CMS is:</p>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-[var(--muted)] leading-relaxed">
        <li>a member and participant in good standing of the AWI-QCP program and an AWI premium-certified millwork contractor; and,</li>
        <li>a distinctly specified fabricator and installer for commercial Corian contracting in the state of South Carolina per DuPont Corian specifications.</li>
      </ul>

      {/* Typical Product Categories */}
      <section id="typical-product-categories" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">Typical Product Categories</h2>
        <figure className="mt-6">
          <div className="aspect-video w-full rounded-lg bg-[var(--border)] flex items-center justify-center text-sm text-[var(--muted)]">
            Pine Lakes Country Club
          </div>
          <figcaption className="mt-2 text-sm text-[var(--muted)]">
            Pine Lakes Country Club
          </figcaption>
        </figure>
        <ul className="mt-6 list-disc space-y-2 pl-6 text-[var(--muted)] leading-relaxed">
          {PRODUCT_CATEGORIES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Typical Construction Genres */}
      <section id="typical-construction-genres" className="mt-14 scroll-mt-24">
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">Typical Construction Genres</h2>
        <figure className="mt-6">
          <div className="aspect-video w-full rounded-lg bg-[var(--border)] flex items-center justify-center text-sm text-[var(--muted)]">
            Beaufort City Hall
          </div>
          <figcaption className="mt-2 text-sm text-[var(--muted)]">
            Beaufort City Hall
          </figcaption>
        </figure>
        <ul className="mt-6 list-disc space-y-2 pl-6 text-[var(--muted)] leading-relaxed">
          {CONSTRUCTION_GENRES.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-14 border-t border-[var(--border)] pt-12">
        <ul className="grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
          {HIGHLIGHTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
