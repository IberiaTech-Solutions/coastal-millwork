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
  "Custom interior architectural millwork and casework",
  "Cabinetry",
  "Decorative metals",
  "Solid surface and stone countertops",
  "Decorative specialty finishes",
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

      {/* Key numbers – 2% tone (bg-subtle); dense */}
      <section className="border-b border-[var(--border)] bg-subtle px-4 py-12 sm:py-14">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            {METRICS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
                  {value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[var(--muted)] sm:text-sm sm:normal-case sm:tracking-normal">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead + what we provide */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-[var(--foreground)] sm:text-xl">
            Coastal Millwork and Supply LLC (CMS) is an award-winning, AWI premium-certified, full-service, commercial interiors contractor. We provide in-house design consultation/engineering, fabrication, and the installation of:
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {SERVICES.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[var(--muted)] leading-relaxed">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]/40" aria-hidden />
                {item};
              </li>
            ))}
          </ul>
          <blockquote className="pull-quote mt-12 sm:mt-14">
            Our primary mission is to provide the highest level of proactive, coordinated project management found in the industry.
          </blockquote>
          <hr className="rule-design rule-design--thick mt-8 mb-8" aria-hidden />
          <p className="text-[var(--muted)] leading-relaxed">
            Proactive management cannot be understated in our company&apos;s culture. We guarantee real success is found only in the management expertise and execution of any project. We are very proud of the high-quality products we design, fabricate and install—and that starts with how we manage every job.
          </p>
        </div>
      </section>

      {/* Leadership – compact teaser (not full bios like Team); link to Team */}
      <section className="border-b border-[var(--border)] bg-subtle px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="section-label text-center">Leadership</h2>
          <hr className="rule-design rule-design--thick rule-design--center mt-4" aria-hidden />
          <p className="mt-6 text-center text-sm text-[var(--muted)]">
            Who leads CMS—bios and the full team on our Team page.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-x-12 gap-y-8 sm:gap-x-16">
            {LEADERSHIP.map((person) => (
              <div key={person.name} className="flex flex-col items-center text-center">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-[var(--border)] ring-2 ring-[var(--border)] ring-offset-2 ring-offset-[var(--background)]">
                  <Image src={person.image} alt={person.name} width={80} height={80} className="h-full w-full object-cover object-top" />
                </div>
                <p className="mt-3 text-sm font-semibold tracking-tight text-[var(--foreground)]">
                  {person.name}
                </p>
                <p className="mt-0.5 text-xs text-[var(--muted)]">
                  {person.title}
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

      {/* Figure 1 */}
      <section className="border-b border-[var(--border)] bg-section-alt px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
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
          <p className="mt-6 text-[var(--muted)] leading-relaxed">
            From the beginning, one of our company&apos;s primary objectives has been to develop the management procedures and design engineering expertise required to complete large, logistically difficult projects with complicated design concepts within contractor schedules. We have successfully completed projects up to $7 million with dozens between $1–$4 million dollars plus projects under our belt.
          </p>
          <p className="mt-6 text-[var(--muted)] leading-relaxed">
            We are constantly evaluating our performance based on our mission and growing our capabilities. All our experience is being utilized in developing better methods in project management going forward.
          </p>
        </div>
      </section>

      {/* Capabilities + figure 2 */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[var(--muted)] leading-relaxed">
            CMS takes great pride in tackling the most complex project designs and has never failed on any project, regardless of size, environment or complexity. We have the human resources and mechanical capabilities to perform any task required. Offering expert guidance in means and methods to achieve any design intent by incorporating pragmatic experience and AWI standards so that any functional design can handle the wear and tear of its environment for decades.
          </p>
          <p className="mt-6 text-[var(--muted)] leading-relaxed">
            CMS maintains a long and successful history as an active participant and premium-certified member of the AWI-QCP program, is listed as the DuPont Corian specified and preferred commercial solid surface fabricator and installer for the state of South Carolina (per Dupont Corian specifications documents).
          </p>
          <figure className="mt-10">
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-[var(--border)] shadow-sm">
              <Image src="/images/about/shop-interior-2_480x320.jpg" alt="Beam saw and CNC on the fly." width={480} height={320} className="h-full w-full object-cover" />
            </div>
            <figcaption className="mt-3 text-sm text-[var(--muted)]">
              Beam saw and CNC on the fly.
            </figcaption>
          </figure>
          <p className="mt-8 text-[var(--muted)] leading-relaxed">
            CMS calls home a 40,000-square-foot, state-of-the-art facility. We regularly invest in new equipment to ensure we are utilizing the most optimal, precise, and advanced production methods as possible. We use the latest Microvellum software package, with AutoCAD overlay, for all submittal and manufacturing engineering. This premium software highly automates production with the highest degree of precision. This creates for a very fast, high-quality production line for custom standard products alike.
          </p>
          <p className="mt-6 text-[var(--muted)] leading-relaxed">
            Our shop submittals are extremely detailed relative to any competitors. We know that the shop submittals become the story for how the project flows, and we use them to uncover any red flags, obstacles, and expectation conflicts that are present in the project. They are designed to create a complete picture of our scope products and the adjacent components of an elevation.
          </p>
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
