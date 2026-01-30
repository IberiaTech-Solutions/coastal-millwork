import Image from "next/image";
import Link from "next/link";

/** Product categories grouped for structure and scanability. */
const PRODUCT_GROUPS: { label: string; items: string[] }[] = [
  {
    label: "Finishes & specialty",
    items: [
      "Premium Grade, Factory Transparent and Opaque Finishes",
      "Specialty Veneer Lay-Ups",
      "Specialty Resin and Acrylic Products",
    ],
  },
  {
    label: "Casework & millwork",
    items: [
      "Installation of All Material Types",
      "Trim and Moldings (Millwork)",
      "Plastic Laminate and Wood Cabinetry",
      "Plastic Laminate and Wood Countertops",
      "Sheet Paneling and Wood Veneers",
      "Shelving",
    ],
  },
  {
    label: "Solid surface & stone",
    items: [
      "Polymer (Corian) Countertops, Cladding, and Furniture – including radius and spiral designs; Certified and Specified by DuPont",
      "Natural and Manufactured Stone Countertops, Sinks and Cladding",
    ],
  },
  {
    label: "Custom assemblies & millwork",
    items: [
      "Custom 'Furniture' and Feature Assemblies",
      "Wall Panel Assemblies (All Types)",
      "Rail and Stile Doors / Store Fronts Door Frames and Assemblies",
      "Treads, Risers, Railings and Balusters",
      "Mantels, Surrounds and Columns",
    ],
  },
  {
    label: "Metals & glazing",
    items: [
      "Integrated Custom Glass and Glazing",
      "Decorative Metals and Stainless Steel",
    ],
  },
];

/** Visual samples: image + short caption for materials/finishes feel. */
const VISUAL_SAMPLES = [
  { src: "/images/products/executive-work-space_480x305.jpg", alt: "Executive work space.", caption: "Custom millwork & finishes" },
  { src: "/images/products/wells-fargo-wealth-mgmt_480x320.jpg", alt: "Wells Fargo wealth management.", caption: "Premium casework" },
  { src: "/images/products/pine-lakes-country-club_480x443.jpg", alt: "Pine Lakes Country Club.", caption: "Solid surface & millwork" },
  { src: "/images/products/beaufort-city-hall_480x360.jpg", alt: "Beaufort City Hall.", caption: "Integrated materials" },
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
          <nav className="mb-10 flex flex-wrap items-center gap-3 text-sm" aria-label="Jump to section">
            <span className="font-medium text-[var(--muted)]">Jump to:</span>
            <a href="#typical-product-categories" className="rounded-full border-2 border-[var(--foreground)]/40 bg-transparent px-4 py-2 font-semibold text-[var(--accent)] transition hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white">
              Typical Product Categories
            </a>
            <a href="#typical-construction-genres" className="rounded-full border-2 border-[var(--foreground)]/40 bg-transparent px-4 py-2 font-semibold text-[var(--accent)] transition hover:border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white">
              Typical Construction Genres
            </a>
          </nav>
          <p className="text-lg leading-relaxed text-[var(--foreground)] sm:text-xl">
            Coastal Millwork and Supply (CMS) offers the design, manufacture, and installation of virtually any type of interior finish product. Being in the &lsquo;custom&rsquo; genre, we are usually involved in developing new types of finished products with varying material types. No one in our industry has the resources to accomplish this quite like the CMS staff.
          </p>
          <blockquote className="pull-quote mt-10 sm:mt-12">
            From decorative metals to radius polymers to AWI Premium, high-end shop finishing, CMS can provide products with any type of integrated finishes based on the AWI standards of custom architectural millwork.
          </blockquote>
          <hr className="rule-design rule-design--thick mt-8 mb-8" aria-hidden />
          <p className="text-[var(--muted)] leading-relaxed">
            We offer a full line of solid-surface designs and capabilities by utilizing our full-size polymer oven.
          </p>
          <figure className="mt-10">
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-[var(--border)] shadow-sm">
              <Image src="/images/products/executive-work-space_480x305.jpg" alt="Executive work space." width={480} height={305} className="h-full w-full object-cover" />
            </div>
            <figcaption className="mt-3 text-sm text-[var(--muted)]">
              Executive work space.
            </figcaption>
          </figure>
          <p className="mt-8 text-[var(--muted)] leading-relaxed">
            CMS does not offer a &lsquo;product line&rsquo; of cabinetry. With a mission focused on project management, CMS is a custom manufacturer starting with product design engineering through site installation and all points in between. Over the years, we have branched into integrating specialty finishes by incorporating metal work, glazing, acrylics, polymers, and other specialty products, into our design and manufacturing experience.
          </p>
          <p className="mt-8 text-[var(--foreground)] font-semibold">Of importance to note, CMS is:</p>
          <ul className="mt-3 space-y-2 text-[var(--muted)] leading-relaxed">
            {[
              "A member and participant in good standing of the AWI-QCP program and an AWI premium-certified millwork contractor; and",
              "A distinctly specified fabricator and installer for commercial Corian contracting in the state of South Carolina per DuPont Corian specifications.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]/40" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Visual samples – materials & finishes */}
      <section className="border-b border-[var(--border)] bg-section-alt px-4 py-14 sm:py-18">
        <div className="mx-auto max-w-5xl">
          <h2 className="section-label text-center">Materials & finishes</h2>
          <p className="mt-2 text-center text-sm text-[var(--muted)]">
            Sample work across custom millwork, casework, and integrated materials
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VISUAL_SAMPLES.map(({ src, alt, caption }) => (
              <figure key={src} className="group overflow-hidden rounded-lg border border-[var(--border)] bg-white shadow-sm transition hover:border-[var(--foreground)]/20 hover:shadow-md">
                <div className="aspect-[4/3] overflow-hidden bg-[var(--border)]">
                  <Image src={src} alt={alt} width={480} height={360} className="h-full w-full object-cover transition group-hover:scale-[1.02]" />
                </div>
                <figcaption className="px-3 py-2.5 text-xs font-medium text-[var(--muted)]">
                  {caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Product Categories – grouped, cards with hover */}
      <section id="typical-product-categories" className="scroll-mt-24 border-b border-[var(--border)] bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="section-label section-label-with-rule text-center">Typical Product Categories</h2>
          <nav className="mt-8 flex flex-wrap justify-center gap-2 text-xs" aria-label="Jump to category">
            {PRODUCT_GROUPS.map(({ label }) => (
              <a
                key={label}
                href={`#product-${label.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-")}`}
                className="rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 font-medium text-[var(--muted)] transition hover:border-[var(--foreground)]/40 hover:text-[var(--foreground)]"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-12 space-y-14">
            {PRODUCT_GROUPS.map(({ label, items }) => (
              <div key={label} id={`product-${label.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-")}`} className="scroll-mt-24">
                <h3 className="section-label text-[var(--foreground)]/90">{label}</h3>
                <hr className="rule-design rule-design--thick mt-2 mb-6" aria-hidden />
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
                  {items.map((item) => (
                    <li key={item}>
                      <div className="card-float flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3.5 text-sm font-medium text-[var(--foreground)] transition">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]/40" aria-hidden />
                        <span className="leading-snug">{item}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Construction Genres – cards with hover */}
      <section id="typical-construction-genres" className="scroll-mt-24 border-b border-[var(--border)] bg-section-alt px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="section-label section-label-with-rule text-center">Typical Construction Genres</h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {CONSTRUCTION_GENRES.map((item) => (
              <li key={item}>
                <div className="card-float flex items-start gap-3 rounded-lg border border-[var(--border)] bg-white/90 px-4 py-3.5 text-sm font-medium text-[var(--foreground)] transition backdrop-blur-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]/40" aria-hidden />
                  <span className="leading-snug">{item}</span>
                </div>
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
