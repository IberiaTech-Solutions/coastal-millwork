import Image from "next/image";

const HIGHLIGHTS = [
  "Largest Architectural Design Engineering Staff in the Southeast",
  "Focusing On Premium, High-Expectation Commercial Projects",
  "Specializing In Large-Scope Projects … Up to $20 Million in Contract Value",
  "Providing a Complete Scope of Wood, Laminates, Finishes, Decorative Metals & Glass, Polymers, and Stone Packages",
  "Complete Design, Development and Construction Integration Consulting",
  "Highly Proactive, Collaborative Driven, Project Design & Management Protocols",
  "AWI-QCP Premium Certified – All Fabrication and Installation QSIs",
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold text-[var(--foreground)]">Services</h1>

      {/* Design Assist, Design Build, and Design Consultation */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">
          Design Assist, Design Build, and Design Consultation
        </h2>
        <p className="mt-6 text-[var(--muted)] leading-relaxed">
          Coastal Millwork and Supply (CMS) offers a complete package of design consultations. Our five-man engineering team holds degrees in design and architecture, and combined with our experienced project management staff, we can help any owner, designer, and general contractor through design and development … and even concept. We offer advice in design function optimization and product longevity in combination to the desired aesthetics. This is critical in managing expectations, reducing process costs, and maximizing long-term value. This value-added benefit also helps provide accurate budgets for our scope of work early in the project.
        </p>
        <figure className="mt-8">
          <div className="aspect-video w-full overflow-hidden rounded-lg bg-[var(--border)]">
            <Image src="/images/services/working-at-desk_480x320.jpg" alt="Design engineer at work." width={480} height={320} className="h-full w-full object-cover" />
          </div>
          <figcaption className="mt-2 text-sm text-[var(--muted)]">
            Design engineer at work.
          </figcaption>
        </figure>
        <p className="mt-6 text-[var(--muted)] leading-relaxed">
          Even without design assist, CMS is very collaborative in these same areas through the shop drawing phase.
        </p>
      </section>

      {/* Value Engineering */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">Value Engineering</h2>
        <p className="mt-6 text-[var(--muted)] leading-relaxed">
          Meeting the needs of cost-conscious owners has become a very important benefit in today&apos;s economy. Using the same resources as in design consultation, CMS can work to find reliable, concept-similar options for any project.
        </p>
      </section>

      {/* Submittals */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">Submittals</h2>
        <p className="mt-6 text-[var(--muted)] leading-relaxed">
          No millwork contractor in our region spends as much time and resources on this stage of the project than CMS. We recognize that our final submittals become the road map for any project&apos;s success and the more proactive, collaborative, and detailed this function is, the higher the level of success the final project reaches.
        </p>
        <p className="mt-6 text-[var(--muted)] leading-relaxed">
          CMS has a strict submittal SOP and the process is highly managed. Our primary goal is identifying all obstacles and potential issues concerning not only our scope, but adjacent trade scopes, as well. Collaboration begins immediately. We provide a complete submittal package of all physical selections, shop drawings, and any hardware and equipment specifications in our scope.
        </p>
        <p className="mt-6 text-[var(--muted)] leading-relaxed">
          Additionally, our submittal software is an integral part of our production programming as one complete software package. There is no additional programming or translating to another equipment code. It is all written with the submittal package and any subsequent changes to it adjust automatically. This means you get exactly what is detailed in the shop submittals without any interaction at the production level. This also allows for a very fast production cycle for tight and compressed schedules.
        </p>
      </section>

      {/* Production */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">Production</h2>
        <p className="mt-6 text-[var(--muted)] leading-relaxed">
          State of the art, top-of-the-line production equipment partnered with a veteran plant staff is the backbone of our production. Combine that with our submittal/production software and you are ensured unsurpassed quality that always meets or exceeds AWI specifications. In fact, all casework products are constructed per AWI-Premium standards, regardless of contract grade.
        </p>
        <figure className="mt-8">
          <div className="aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg bg-[var(--border)]">
            <Image src="/images/services/exterior-store-fronts_360x480.jpg" alt="Exterior store fronts" width={360} height={480} className="h-full w-full object-cover" />
          </div>
          <figcaption className="mt-2 text-sm text-[var(--muted)]">
            Exterior store fronts
          </figcaption>
        </figure>
      </section>

      {/* Project Management */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">Project Management</h2>
        <p className="mt-6 text-[var(--muted)] leading-relaxed">
          Our project managers (PMs) are the conductors of the CMS orchestra, so to speak. Every project is assigned into a team managed by the project managers. The teams meet on each project individually once a week. The PMs are responsible for all submittal oversight, contractor collaborations/coordination, site condition management, safety SOP and compliance, and installation.
        </p>
      </section>

      {/* Installation */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">Installation</h2>
        <p className="mt-6 text-[var(--muted)] leading-relaxed">
          Often seen as the face of the company, our highly skilled, professional install teams are the best in the business. Highly integrated into the whole team model from the start of the project, our installation professionals know exactly how to complete any product design or dynamic. Well versed in AWI standards and always focused on safety, our teams work long hours and are dedicated to completing projects on time with minimal, if any, punch lists.
        </p>
        <p className="mt-6 text-[var(--muted)] leading-relaxed">
          As part of the team, our install crews are not required to &lsquo;figure things out in the field.&rsquo; They are consulted early in the development so that installation meets all the expectations.
        </p>
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
