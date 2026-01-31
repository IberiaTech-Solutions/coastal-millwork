import Image from "next/image";
import Link from "next/link";
import SectorsWeServe from "@/components/SectorsWeServe";

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

/** Visual samples: image + short caption for materials/finishes feel. (Executive work space is shown once in the lead section above.) */
const VISUAL_SAMPLES = [
  { src: "/images/products/wells-fargo-wealth-mgmt_480x320.jpg", alt: "Wells Fargo wealth management.", caption: "Premium casework" },
  { src: "/images/products/pine-lakes-country-club_480x443.jpg", alt: "Pine Lakes Country Club.", caption: "Solid surface & millwork" },
  { src: "/images/products/beaufort-city-hall_480x360.jpg", alt: "Beaufort City Hall.", caption: "Integrated materials" },
];

export default function ProductsPage() {
  return (
    <div>
      {/* Page hero */}
      <section className="border-b border-[var(--border)] bg-intro px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label section-label-with-rule">Products</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-4xl">
            Custom design, manufacture, and installation of interior finish products
          </h1>
          <p className="mt-4 text-[var(--muted)] text-base sm:text-lg">
            From concept to install one scope, one team.
          </p>
        </div>
      </section>

      {/* Lead + image */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <nav className="products-jump-nav mb-10" aria-label="Jump to section">
            <a href="#typical-product-categories">Typical Product Categories</a>
            <a href="#sectors-we-serve">Sectors we serve</a>
          </nav>

          {/* Zone A — Overview (constrained, breathing room below) */}
          <div className="products-lead-overview">
            <p className="text-lg leading-relaxed text-[var(--foreground)] sm:text-xl mt-0 mb-0">
              Coastal Millwork and Supply (CMS) offers the design, manufacture, and installation of virtually any type of interior finish product. Being in the &lsquo;custom&rsquo; genre, we are usually involved in developing new types of finished products with varying material types. No one in our industry has the resources to accomplish this quite like the CMS staff.
            </p>
          </div>

          {/* Zone B — Capability statement (pull quote: larger, left rule) */}
          <blockquote className="products-capability-quote mt-0">
            From decorative metals to radius polymers to AWI Premium, high-end shop finishing, CMS can provide products with any type of integrated finishes based on the AWI standards of custom architectural millwork.
          </blockquote>

          {/* Zone C — Clarification (narrower line length, smaller, explanatory) */}
          <div className="products-clarification space-y-6">
            <p className="mt-0">
              We offer a full line of solid-surface designs and capabilities by utilizing our full-size polymer oven.
            </p>
            <figure className="mt-8 mb-8">
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-[var(--border)] shadow-sm">
                <Image src="/images/products/executive-work-space_480x305.jpg" alt="Executive work space." width={480} height={305} className="h-full w-full object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-[var(--muted)]">
                Executive work space.
              </figcaption>
            </figure>
            <p className="mt-0">
              CMS does not offer a &lsquo;product line&rsquo; of cabinetry. With a mission focused on project management, CMS is a custom manufacturer starting with product design engineering through site installation and all points in between. Over the years, we have branched into integrating specialty finishes by incorporating metal work, glazing, acrylics, polymers, and other specialty products, into our design and manufacturing experience.
            </p>
          </div>
          <div className="products-certifications mt-10">
            <p className="section-label mt-0 mb-3" aria-label="Certifications">
              Certifications
            </p>
            <p className="products-certifications-statement mt-0 text-[var(--muted)] leading-relaxed">
              A member and participant in good standing of the AWI-QCP program and an AWI premium-certified millwork contractor.
            </p>
            <p className="products-certifications-statement mt-3 text-[var(--muted)] leading-relaxed">
              A distinctly specified fabricator and installer for commercial Corian contracting in the state of South Carolina per DuPont Corian specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Materials & finishes – gallery as museum wall (equal ratios, caption band) */}
      <section className="border-b border-[var(--border)] bg-subtle px-4 py-20 sm:py-24" aria-label="Materials and finishes gallery">
        <div className="mx-auto max-w-4xl">
          <p className="section-label text-center mt-0">Materials & finishes</p>
          <p className="mt-2 text-center text-sm text-[var(--muted)] max-w-md mx-auto">
            Sample work across custom millwork, casework, and integrated materials
          </p>
          <div className="materials-gallery mt-12">
            {VISUAL_SAMPLES.map(({ src, alt, caption }) => (
              <figure key={src}>
                <div className="materials-gallery-img">
                  <Image src={src} alt={alt} width={480} height={360} sizes="(min-width: 640px) 50vw, 50vw" className="h-full w-full object-cover object-center" />
                </div>
                <figcaption className="materials-gallery-caption">
                  {caption}
                </figcaption>
              </figure>
            ))}
          </div>
          <hr className="rule-design rule-design--thick rule-design--center mt-16" aria-hidden />
        </div>
      </section>

      {/* Typical Product Categories – sticky tabs on desktop, aligned list bullets */}
      <section id="typical-product-categories" className="scroll-mt-24 border-b border-[var(--border)] bg-white px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl lg:flex lg:gap-12">
          <aside className="product-category-nav mb-10 lg:mb-0 lg:w-56 lg:shrink-0 lg:pt-2">
            <p className="section-label section-label-with-rule text-center lg:text-left">Categories</p>
            <h2 className="mt-4 text-center text-2xl font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-3xl lg:text-left">
              Typical product categories
            </h2>
            <nav className="product-category-tabs mt-8 flex flex-wrap justify-center gap-2 lg:mt-10 lg:justify-start lg:flex-col lg:gap-1.5" aria-label="Jump to category">
              {PRODUCT_GROUPS.map(({ label }) => (
                <a
                  key={label}
                  href={`#product-${label.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-")}`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </aside>
          <div className="product-categories-stack lg:min-w-0 lg:flex-1">
            {PRODUCT_GROUPS.map(({ label, items }) => (
              <div
                key={label}
                id={`product-${label.toLowerCase().replace(/\s+&\s+/g, "-").replace(/\s+/g, "-")}`}
                className="scroll-mt-24 product-group"
              >
                <h3 className="product-group-title">{label}</h3>
                <hr className="rule-hairline" aria-hidden />
                <ul className="product-category-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" role="list">
                  {items.map((item) => (
                    <li key={item} className="product-category-item">
                      <div className="product-category-tile">
                        {item}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectorsWeServe id="sectors-we-serve" />

      {/* CTA */}
      <section className="bg-white px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Link href="/services" className="inline-flex items-center rounded-full border-2 border-[var(--foreground)] bg-transparent px-6 py-2.5 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--foreground)] hover:text-white">
            Services →
          </Link>
        </div>
      </section>
    </div>
  );
}
