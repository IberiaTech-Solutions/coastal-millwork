import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  "custom interior architectural millwork and casework",
  "cabinetry",
  "decorative metals",
  "solid surface and stone countertops",
  "decorative specialty finishes",
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

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold text-[var(--foreground)]">About Us</h1>

      <p className="mt-8 text-[var(--foreground)] leading-relaxed">
        Coastal Millwork and Supply LLC (CMS) is an award-winning, AWI premium-certified, full-service, commercial interiors contractor. We provide in-house design consultation/engineering, fabrication, and the installation of:
      </p>
      <ul className="mt-4 list-disc space-y-1 pl-6 text-[var(--muted)] leading-relaxed">
        {SERVICES.map((item) => (
          <li key={item}>{item};</li>
        ))}
      </ul>

      <p className="mt-8 text-[var(--muted)] leading-relaxed">
        While we are very proud of the high-quality products we design, fabricate and install, our primary mission is to provide the highest level of proactive, coordinated project management found in the industry. Proactive management cannot be understated in our company&apos;s culture. We guarantee real success is found only in the management expertise and execution of any project.
      </p>

      <figure className="mt-10">
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-[var(--border)]">
          <Image src="/images/about/shop-interior-1_480x320.jpg" alt="Plant staff working the beam saw." width={480} height={320} className="h-full w-full object-cover" />
        </div>
        <figcaption className="mt-2 text-sm text-[var(--muted)]">
          Plant staff working the beam saw.
        </figcaption>
      </figure>

      <p className="mt-8 text-[var(--muted)] leading-relaxed">
        Serving only the commercial construction industry, we have successfully completed over 700 premium, high profile interior projects while partnered with some of the premier general contractors and design teams in South Carolina and the country, including in: New York, NY; Washington, DC; Dallas, Texas; San Diego, CA; and, Atlanta, GA.
      </p>

      <p className="mt-6 text-[var(--muted)] leading-relaxed">
        From the beginning, one of our company&apos;s primary objectives has been to develop the management procedures and design engineering expertise required to complete large, logistically difficult projects with complicated design concepts within contractor schedules. We have successfully completed projects up to $7 million with dozens between $1–$4 million dollars plus projects under our belt. We are constantly evaluating our performance based on our mission and growing our capabilities. All our experience is being utilized in developing better methods in project management going forward.
      </p>

      <p className="mt-6 text-[var(--muted)] leading-relaxed">
        CMS takes great pride in tackling the most complex project designs and has never failed on any project, regardless of size, environment or complexity. We have the human resources and mechanical capabilities to perform any task required. Offering expert guidance in means and methods to achieve any design intent by incorporating pragmatic experience and AWI standards so that any functional design can handle the wear and tear of its environment for decades.
      </p>

      <p className="mt-6 text-[var(--muted)] leading-relaxed">
        CMS maintains a long and successful history as an active participant and premium-certified member of the AWI-QCP program, is listed as the DuPont Corian specified and preferred commercial solid surface fabricator and installer for the state of South Carolina (per Dupont Corian specifications documents).
      </p>

      <figure className="mt-10">
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-[var(--border)]">
          <Image src="/images/about/shop-interior-2_480x320.jpg" alt="Beam saw and CNC on the fly." width={480} height={320} className="h-full w-full object-cover" />
        </div>
        <figcaption className="mt-2 text-sm text-[var(--muted)]">
          Beam saw and CNC on the fly.
        </figcaption>
      </figure>

      <p className="mt-8 text-[var(--muted)] leading-relaxed">
        CMS calls home a 40,000-square-foot, state-of-the-art facility. We regularly invest in new equipment to ensure we are utilizing the most optimal, precise, and advanced production methods as possible. We use the latest Microvellum software package, with AutoCAD overlay, for all submittal and manufacturing engineering. This premium software highly automates production with the highest degree of precision. This creates for a very fast, high-quality production line for custom standard products alike.
      </p>

      <p className="mt-6 text-[var(--muted)] leading-relaxed">
        Our shop submittals are extremely detailed relative to any competitors. We know that the shop submittals become the story for how the project flows, and we use them to uncover any red flags, obstacles, and expectation conflicts that are present in the project. They are designed to create a complete picture of our scope products and the adjacent components of an elevation.
      </p>

      <section className="mt-14 border-t border-[var(--border)] pt-12">
        <ul className="grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
          {HIGHLIGHTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <p className="mt-8">
        <Link href="/contact" className="font-medium text-[var(--accent)] hover:underline">
          Contact Us →
        </Link>
      </p>
    </div>
  );
}
