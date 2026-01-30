import Image from "next/image";
import Link from "next/link";

/** Opening value statement (one line). */
const VALUE_STATEMENT = "Our mission: the highest level of proactive, coordinated project management in the industry.";

/** Key metrics for visual breakout. */
const METRICS = [
  { value: "700+", label: "Premium interior projects" },
  { value: "40,000", label: "Sq ft facility" },
  { value: "20+", label: "Years in business" },
  { value: "AWI-QCP", label: "Premium certified" },
];

/** Leadership teaser for About – links to full Team page. */
const LEADERSHIP = [
  { name: "Chris Wagner", title: "President / Owner", image: "/images/team/wagner-chris_135x180.jpg", bio: "Founding owner. Brings upper management experience from one of the largest publicly held companies to commercial construction." },
  { name: "Christian Datz", title: "Business Development Manager", image: "/images/team/placeholder-male_135x180.png", bio: "Citadel graduate. Over a decade in commercial woodworking; leads business development and estimation." },
  { name: "Joe Fonseca", title: "Director of Project Management", image: "/images/team/fonseca-joe_135x180.jpg", bio: "35+ years in architectural casework and metals. Major projects in mass transit and aviation; handles scope from $2M to $40M." },
];

const SERVICES = [
  "Architectural millwork",
  "Casework",
  "Cabinetry",
  "Decorative metals",
  "Stone & solid surface",
  "Specialty finishes",
];

export default function AboutPage() {
  return (
    <div>
      {/* Page hero + value statement */}
      <section className="border-b border-[var(--border)] bg-intro px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label section-label-with-rule">About Us</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-4xl">
            Award-winning, AWI premium-certified, full-service commercial interiors contractor
          </h1>
          <p className="mt-5 text-base font-medium leading-relaxed text-[var(--foreground)]/90 sm:text-lg">
            {VALUE_STATEMENT}
          </p>
        </div>
      </section>

      {/* Key numbers – 4-column data grid, identical typography, hairline dividers */}
      <section className="border-b border-[var(--border)] bg-subtle px-4 py-12 sm:py-14">
        <div className="mx-auto max-w-4xl">
          <div className="metrics-grid">
            {METRICS.map(({ value, label }) => (
              <div key={label} className="metrics-cell">
                <p className="metrics-value">{value}</p>
                <p className="metrics-label">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 structure: Layer 1 identity · Layer 2 capability rail · Layer 3 mission · Layer 4 philosophy */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-20 sm:py-24" aria-label="Who we are and what we do">
        <div className="mx-auto max-w-2xl">
          {/* Layer 1 — Identity statement (context, not hero) */}
          <p className="about-identity">
            Coastal Millwork and Supply LLC (CMS) is an award-winning, AWI premium-certified, full-service, commercial interiors contractor. We provide in-house design consultation/engineering, fabrication, and the installation of:
          </p>

          {/* Layer 2 — Quiet architectural pills (labels, not UI; no hover, no color fill) */}
          <div className="capability-pills mt-6" role="list">
            {SERVICES.map((item) => (
              <span key={item} className="capability-pill" role="listitem">
                {item}
              </span>
            ))}
          </div>

          {/* Layer 3 — Mission (manifesto, isolated, large type) */}
          <blockquote className="about-mission" cite="">
            Our primary mission is to provide the highest level of proactive, coordinated project management found in the industry.
          </blockquote>

          {/* Layer 4 — Supporting philosophy (reflective, softer) */}
          <p className="about-philosophy">
            Proactive management cannot be understated in our company&apos;s culture. We guarantee real success is found only in the management expertise and execution of any project. We are very proud of the high-quality products we design, fabricate and install—and that starts with how we manage every job.
          </p>
        </div>
      </section>

      {/* Leadership – consistent portrait ratio + crop; one-line descriptors, light bio weight */}
      <section className="border-b border-[var(--border)] bg-subtle px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="section-label text-center">Leadership</h2>
          <hr className="rule-design rule-design--thick rule-design--center mt-4" aria-hidden />
          <p className="mt-6 text-center text-sm text-[var(--muted)]">
            Who leads CMS—bios and the full team on our Team page.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            {LEADERSHIP.map((person) => (
              <div key={person.name} className="flex flex-col items-center text-center">
                <div className="about-leadership-portrait">
                  <Image src={person.image} alt={person.name} width={120} height={160} className="h-full w-full object-cover object-top" />
                </div>
                <p className="mt-4 text-sm font-semibold tracking-tight text-[var(--foreground)]">
                  {person.name}
                </p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">
                  {person.title}
                </p>
                <p className="mt-2 text-xs font-normal leading-relaxed text-[var(--muted)]/90">
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center">
            <Link href="/team" className="text-sm font-medium text-[var(--accent)] hover:underline">
              Meet the full team →
            </Link>
          </p>
        </div>
      </section>

      {/* Figure 1 – constrained width, content breaks, blockquote */}
      <section className="border-b border-[var(--border)] bg-section-alt px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <figure>
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-[var(--border)] shadow-sm">
              <Image src="/images/about/shop-interior-1_480x320.jpg" alt="Plant staff working the beam saw." width={480} height={320} className="h-full w-full object-cover" />
            </div>
            <figcaption className="mt-3 text-sm text-[var(--muted)]">
              Plant staff working the beam saw.
            </figcaption>
          </figure>
          <p className="mt-8 text-[var(--muted)] leading-relaxed">
            Serving only the commercial construction industry, we have successfully completed over 700 premium, high profile interior projects while partnered with some of the premier general contractors and design teams in South Carolina and the country, including in: New York, NY; Washington, DC; Dallas, Texas; San Diego, CA; and, Atlanta, GA.
          </p>
          <div className="about-prose-block mt-8">
            <p className="mt-0">
              From the beginning, one of our company&apos;s primary objectives has been to develop the management procedures and design engineering expertise required to complete large, logistically difficult projects with complicated design concepts within contractor schedules. We have successfully completed projects up to $7 million with dozens between $1–$4 million dollars plus projects under our belt.
            </p>
            <hr className="rule-hairline mt-10 mb-10" aria-hidden />
            <blockquote className="about-callout mt-0">
              We are constantly evaluating our performance based on our mission and growing our capabilities.
            </blockquote>
            <p className="mt-6">
              All our experience is being utilized in developing better methods in project management going forward.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities + figure 2 – constrained width, content breaks, blockquote */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <p className="text-[var(--muted)] leading-relaxed">
            CMS takes great pride in tackling the most complex project designs and has never failed on any project, regardless of size, environment or complexity. We have the human resources and mechanical capabilities to perform any task required. Offering expert guidance in means and methods to achieve any design intent by incorporating pragmatic experience and AWI standards so that any functional design can handle the wear and tear of its environment for decades.
          </p>
          <p className="mt-6 text-[var(--muted)] leading-relaxed">
            CMS maintains a long and successful history as an active participant and premium-certified member of the AWI-QCP program, is listed as the DuPont Corian specified and preferred commercial solid surface fabricator and installer for the state of South Carolina (per Dupont Corian specifications documents).
          </p>
          <hr className="rule-hairline mt-10 mb-10" aria-hidden />
          <figure className="mt-10">
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-[var(--border)] shadow-sm">
              <Image src="/images/about/shop-interior-2_480x320.jpg" alt="Beam saw and CNC on the fly." width={480} height={320} className="h-full w-full object-cover" />
            </div>
            <figcaption className="mt-3 text-sm text-[var(--muted)]">
              Beam saw and CNC on the fly.
            </figcaption>
          </figure>
          <div className="about-prose-block mt-8">
            <p className="mt-0">
              CMS calls home a 40,000-square-foot, state-of-the-art facility. We regularly invest in new equipment to ensure we are utilizing the most optimal, precise, and advanced production methods as possible. We use the latest Microvellum software package, with AutoCAD overlay, for all submittal and manufacturing engineering. This premium software highly automates production with the highest degree of precision. This creates for a very fast, high-quality production line for custom standard products alike.
            </p>
            <hr className="rule-hairline mt-10 mb-10" aria-hidden />
            <blockquote className="about-callout mt-0">
              Our shop submittals become the story for how the project flows—we use them to uncover red flags, obstacles, and expectation conflicts.
            </blockquote>
            <p className="mt-6">
              They are designed to create a complete picture of our scope products and the adjacent components of an elevation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Link href="/contact" className="inline-flex items-center rounded-full border-2 border-[var(--foreground)] bg-transparent px-6 py-2.5 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--foreground)] hover:text-white">
            Contact Us →
          </Link>
        </div>
      </section>
    </div>
  );
}
