import Image from "next/image";
import Link from "next/link";
import ServiceRail from "@/components/ServiceRail";

export default function ServicesPage() {
  return (
    <div>
      {/* Page hero */}
      <section className="border-b border-[var(--border)] bg-intro px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label section-label-with-rule">Services</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-4xl">
            Design, development, submittals, production, and installation
          </h1>
          <p className="mt-4 text-[var(--muted)] text-base sm:text-lg">
            From design through install—one team, one scope.
          </p>
        </div>
      </section>

      {/* Service rail – heading scrolls away; nav links stick. Content sections as children so sticky parent extends down. */}
      <ServiceRail>
      {/* 01 Design & consultation */}
      <section id="design-consultation" className="scroll-mt-24 border-b border-[var(--border)] bg-subtle px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-10">
          <div className="service-group">
            <div className="service-section-header">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="step-marker" aria-hidden>01</span>
                <h2 className="section-label text-[var(--foreground)]/90">Design & consultation</h2>
              </div>
              <p className="mt-2 text-lg font-semibold tracking-tight text-[var(--foreground)]/90 sm:text-xl">
                Design Assist, Design Build, and Design Consultation
              </p>
            </div>
            <hr className="rule-design rule-design--thick" aria-hidden />
            <hr className="rule-hairline" aria-hidden />
          <p className="text-[var(--muted)] leading-relaxed">
            Coastal Millwork and Supply (CMS) offers a complete package of design consultations. Our five-man engineering team holds degrees in design and architecture, and combined with our experienced project management staff, we can help any owner, designer, and general contractor through design and development … and even concept. We offer advice in design function optimization and product longevity in combination to the desired aesthetics. This is critical in managing expectations, reducing process costs, and maximizing long-term value. This value-added benefit also helps provide accurate budgets for our scope of work early in the project.
          </p>
          <figure className="mt-10">
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-[var(--border)] shadow-sm">
              <Image src="/images/services/working-at-desk_480x320.jpg" alt="Design engineer at work." width={480} height={320} className="h-full w-full object-cover" />
            </div>
            <figcaption className="mt-3 text-sm text-[var(--muted)]">
              Design engineer at work.
            </figcaption>
          </figure>
          <p className="mt-8 text-[var(--muted)] leading-relaxed">
            Even without design assist, CMS is very collaborative in these same areas through the shop drawing phase.
          </p>
          </div>
        </div>
      </section>

      {/* 02 Value engineering */}
      <section id="value-engineering" className="scroll-mt-24 border-b border-[var(--border)] bg-white px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="service-group">
            <div className="service-section-header">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="step-marker" aria-hidden>02</span>
                <h2 className="section-label text-[var(--foreground)]/90">Value engineering</h2>
              </div>
            </div>
            <hr className="rule-design rule-design--thick" aria-hidden />
            <hr className="rule-hairline" aria-hidden />
            <p className="text-[var(--muted)] leading-relaxed">
              Meeting the needs of cost-conscious owners has become a very important benefit in today&apos;s economy. Using the same resources as in design consultation, CMS can work to find reliable, concept-similar options for any project.
            </p>
          </div>
        </div>
      </section>

      {/* 03 Submittals */}
      <section id="submittals" className="scroll-mt-24 border-b border-[var(--border)] bg-subtle px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="service-group">
            <div className="service-section-header">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="step-marker" aria-hidden>03</span>
                <h2 className="section-label text-[var(--foreground)]/90">Submittals</h2>
              </div>
            </div>
            <hr className="rule-design rule-design--thick" aria-hidden />
            <hr className="rule-hairline" aria-hidden />
          <p className="text-[var(--muted)] leading-relaxed">
            No millwork contractor in our region spends as much time and resources on this stage of the project than CMS. We recognize that our final submittals become the road map for any project&apos;s success and the more proactive, collaborative, and detailed this function is, the higher the level of success the final project reaches.
          </p>
          <p className="mt-6 text-[var(--muted)] leading-relaxed">
            CMS has a strict submittal SOP and the process is highly managed. Our primary goal is identifying all obstacles and potential issues concerning not only our scope, but adjacent trade scopes, as well. Collaboration begins immediately. We provide a complete submittal package of all physical selections, shop drawings, and any hardware and equipment specifications in our scope.
          </p>
          <p className="mt-6 text-[var(--muted)] leading-relaxed">
            Additionally, our submittal software is an integral part of our production programming as one complete software package. There is no additional programming or translating to another equipment code. It is all written with the submittal package and any subsequent changes to it adjust automatically. This means you get exactly what is detailed in the shop submittals without any interaction at the production level. This also allows for a very fast production cycle for tight and compressed schedules.
          </p>
          </div>
        </div>
      </section>

      {/* Anchor: pull quote */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <blockquote className="pull-quote text-left sm:text-center">
            Submittals become the road map. The more proactive and detailed this function is, the higher the success.
          </blockquote>
        </div>
      </section>

      {/* 04 Production */}
      <section id="production" className="scroll-mt-24 border-b border-[var(--border)] bg-subtle px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="service-group">
            <div className="service-section-header">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="step-marker" aria-hidden>04</span>
                <h2 className="section-label text-[var(--foreground)]/90">Production</h2>
              </div>
            </div>
            <hr className="rule-design rule-design--thick" aria-hidden />
            <hr className="rule-hairline" aria-hidden />
          <p className="text-[var(--muted)] leading-relaxed">
            State of the art, top-of-the-line production equipment partnered with a veteran plant staff is the backbone of our production. Combine that with our submittal/production software and you are ensured unsurpassed quality that always meets or exceeds AWI specifications. In fact, all casework products are constructed per AWI-Premium standards, regardless of contract grade.
          </p>
          <figure className="mt-10">
            <div className="aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg bg-[var(--border)] shadow-sm">
              <Image src="/images/services/exterior-store-fronts_360x480.jpg" alt="Exterior store fronts." width={360} height={480} className="h-full w-full object-cover" />
            </div>
            <figcaption className="mt-3 text-sm text-[var(--muted)]">
              Exterior store fronts.
            </figcaption>
          </figure>
          </div>
        </div>
      </section>

      {/* 05 Project management + 06 Installation */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-10">
          <div id="project-management" className="scroll-mt-24 service-group">
            <div className="service-section-header">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="step-marker" aria-hidden>05</span>
                <h2 className="section-label text-[var(--foreground)]/90">Project management</h2>
              </div>
            </div>
            <hr className="rule-design rule-design--thick" aria-hidden />
            <hr className="rule-hairline" aria-hidden />
            <p className="text-[var(--muted)] leading-relaxed">
              Our project managers (PMs) are the conductors of the CMS orchestra, so to speak. Every project is assigned into a team managed by the project managers. The teams meet on each project individually once a week. The PMs are responsible for all submittal oversight, contractor collaborations/coordination, site condition management, safety SOP and compliance, and installation.
            </p>
          </div>
          <hr className="rule-design rule-design--thick rule-design--center" aria-hidden />
          <div id="installation" className="scroll-mt-24 service-group">
            <div className="service-section-header">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="step-marker" aria-hidden>06</span>
                <h2 className="section-label text-[var(--foreground)]/90">Installation</h2>
              </div>
            </div>
            <hr className="rule-design rule-design--thick" aria-hidden />
            <hr className="rule-hairline" aria-hidden />
            <p className="text-[var(--muted)] leading-relaxed">
              Often seen as the face of the company, our highly skilled, professional install teams are the best in the business. Highly integrated into the whole team model from the start of the project, our installation professionals know exactly how to complete any product design or dynamic. Well versed in AWI standards and always focused on safety, our teams work long hours and are dedicated to completing projects on time with minimal, if any, punch lists.
            </p>
            <p className="mt-6 text-[var(--muted)] leading-relaxed">
              As part of the team, our install crews are not required to &lsquo;figure things out in the field.&rsquo; They are consulted early in the development so that installation meets all the expectations.
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
      </ServiceRail>
    </div>
  );
}
