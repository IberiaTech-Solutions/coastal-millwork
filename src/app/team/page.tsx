import Image from "next/image";

const TEAM = [
  { name: "Chris Wagner", title: "President / Owner / Business Development", image: "/images/team/wagner-chris_135x180.jpg", bio: "Chris is the founding owner and President of CMS. After serving as an infantryman in the U.S. Army, he worked as a business manager in various capacities since graduating from the University of North Carolina at Wilmington. After spending a significant amount of time as a multi-state, multi-million-dollar, regional business unit manager for one of the largest publicly held companies in the world, he decided to bring his unique upper management skills and experience to the construction industry." },
  { name: "Christian Datz", title: "Business Development Manager", image: "/images/team/placeholder-male_135x180.png", bio: "A graduate of The Citadel with a degree in Business Administration, Christian Datz began his commercial woodworking career right after graduation. Starting out as an estimator over a decade ago, Christian's attention to detail, combined now with an extensive knowledge of construction methods and procedures, have made him a valuable resource for General Contractors that want to truly plan costs, constructability, and production timelines. He knows how to navigate scope to resolve budget issues and is skilled at developing alternatives. Always straight forward and honest, Christian leads the business development department at CMS." },
  { name: "Bonita Denney", title: "Financial Controller / Human Resources", image: "/images/team/denney-bonita_135x180.jpg", bio: "Bonita Denney comes from a strong accounting background with over 35 years of experience in the accounting field. The last 16 years have been in the Construction Industry as Financial Controller. Bonita handles all areas of our Accounting, from basic data entry through producing financial statements and working with outside CPAs to provide us with audited financial statements. She works with the General Contractors to stay on top of billing, collections, and licensing. In addition, Bonita handles the Human Resource side of the Company, including insuring payroll is handled timely. She is ready and willing to take on tasks to help in many areas." },
  { name: "Kristin Ogren", title: "Sr. Project Administration / Procurement Director", image: "/images/team/ogren-kristin_135x180.jpg", bio: "Kristin Ogren is the nucleus of Coastal Millwork and Supply's pre-construction team. Her responsibilities include project administration, estimating support, and purchasing. On top of handling all project change order requests, she is also our AWI & LEED compliance officer. Kristin is the information hub for the whole company and a highly organized professional. She graduated from the University of Florida with a Bachelors of Design degree (honors) and has earned multiple associate degrees. She has been in the casework industry for 15 years and is very familiar with all aspects of design and project administration." },
  { name: "Cricket", title: "Senior Project Coordinator", image: "/images/team/cricket-z_135x180.jpg", bio: "" },
  { name: "Ryan LaSalle", title: "Plant Manager", image: "/images/team/lasalle-ryan_135x180.jpg", bio: "Ryan LaSalle has been in the woodworking industry for 18 years with half of those years in management. As a carpenter, his specialty was custom woodworking and furniture with a strong background in premium wood finishing. Ryan has served for many years as a shop & customer manager for the internationally distinguished Houshco LLC. Ryan oversees a very professional group of woodworking and staff professionals at CMS." },
  { name: "Joe Fonseca", title: "Director of Project Management", image: "/images/team/fonseca-joe_135x180.jpg", bio: "With over 35 years of experience managing the manufacturing and installation of architectural casework, wall panel systems, and ornamental metals, Joe Fonseca brings a huge amount of skill and knowledge to CMS. He spent the last 20 years completing major projects including mass transit and aviation markets in Las Vegas, New York, and Boston. Managing projects primarily ranging from two-million to 40-million dollars and advanced knowledge of all facets of construction has given CMS the management to handle any scope." },
  { name: "Ricky Sweaney", title: "Senior Project Manager", image: "/images/team/sweaney-ricky_135x180.jpg", bio: "Ricky Sweaney grew up in the woodworking industry and has been involved as a professional for over 15 years. Well versed in all aspects of interior millwork and casework, he has excelled at pro-active problem solving even before Coastal Millwork and Supply's install teams set foot on a project. Ricky's approach in identifying potential issues on the front end is instrumental in completing our projects successfully." },
  { name: "Jay Youngs", title: "Senior Architectural Engineer", image: "/images/team/youngs-jay_135x180.jpg", bio: "Jay Youngs is Coastal Millwork and Supply's most senior design engineer and draftsman. Years of working as an architectural draftsman has given him the ability to design fast and complete documents for both submittals and production. Jay manages our whole engineering department ensuring that all of our draftsman are meeting the required criteria and time schedule for our projects." },
  { name: "Dave Comer", title: "Senior Architectural Engineer", image: "/images/team/comer-dave_135x180.jpg", bio: "Dave Comer is a Senior Project Manager/Engineer. With over 20 years of experience in the commercial architectural woodwork industry and five years in architectural field, Dave brings superior design skills, experience, and expertise to Coastal Millwork and Supply's project management team. A graduate of Clemson University with a degree in Architecture, Dave's experience in both design engineering and project management has helped establish us as one of the industry leaders in the Southeast." },
  { name: "Max Roth", title: "Architectural Design Engineer", image: "/images/team/roth-max_135x180.jpg", bio: "Max Roth is a third-generation architectural design engineer with over a decade of experience in high-end residential and commercial construction. Also trained as a master woodworker, Max brings a knowledge of complex architectural engineering, millwork design, and craftsmanship to each CMS client's project. It is very rare to have a solid, successful background in all three disciplines." },
  { name: "Elisabeth Beaty", title: "Architectural Design Engineer", image: "/images/team/beaty-elisabeth_135x180.jpg", bio: "Elisabeth grew up in construction as her father and brothers are all custom builders. She learned to read blueprints at a very young age. She has been a professional in the construction and design industry for 10 years. She spent most of her career in the residential market where she cultivated and managed a large remodeling showroom in north Atlanta. Elisabeth spent the past several years running her own small company specializing in digital drawings and renderings. She has seamlessly made the transition to commercial construction and has become a very strong member of our team." },
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

export default function TeamPage() {
  return (
    <div>
      {/* Page hero */}
      <section className="border-b border-[var(--border)] bg-intro px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label section-label-with-rule">Our Team</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-4xl">
            The people behind Coastal Millwork & Supply
          </h1>
        </div>
      </section>

      {/* Team photo */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <figure>
            <div className="aspect-[2/1] w-full overflow-hidden rounded-lg bg-[var(--border)] shadow-sm">
              <Image src="/images/team/team-photo.png" alt="Group photo of CMS Team." width={800} height={400} className="h-full w-full object-cover" />
            </div>
            <figcaption className="mt-3 text-sm text-[var(--muted)]">
              Group photo of CMS Team.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Team grid */}
      <section className="border-b border-[var(--border)] bg-section-alt px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="section-label section-label-with-rule text-center">Leadership & staff</h2>
          <div className="mt-10 flex flex-col gap-12">
            {TEAM.map((person) => (
              <article key={person.name} className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                <div className="shrink-0 sm:w-40">
                  <div className="aspect-[3/4] w-full max-w-[10rem] overflow-hidden rounded-lg bg-[var(--border)] shadow-sm">
                    <Image src={person.image} alt={person.name} width={135} height={180} className="h-full w-full object-cover object-top" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-[var(--foreground)]">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--accent)]">
                    {person.title}
                  </p>
                  {person.bio && (
                    <p className="mt-4 text-[var(--muted)] leading-relaxed">
                      {person.bio}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Shop */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="section-label">The Shop</h2>
          <p className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-3xl">
            &ldquo;The Shop&rdquo;
          </p>
          <figure className="mt-8">
            <div className="aspect-video w-full max-w-2xl overflow-hidden rounded-lg bg-[var(--border)] shadow-sm">
              <Image src="/images/team/shop-the_135x180.jpg" alt="CMS employees working in the shop" width={540} height={360} className="h-full w-full object-cover" />
            </div>
            <figcaption className="mt-3 text-sm text-[var(--muted)]">
              CMS employees working in the shop
            </figcaption>
          </figure>
          <p className="mt-8 text-[var(--muted)] leading-relaxed">
            Being a custom fabricator of high-quality millwork and casework under tight delivery schedules is extremely demanding on the manufacturing shop. It requires the best employees to make this happen and CMS has the best in the business. Our shop professionals are master artisans in multiple areas, disciplined professionals, problem solvers, and integral to our success. Our shop team leaders are always a part of our design process due to their construction knowledge and attention to the smallest details. The Shop is truly the backbone of CMS.
          </p>
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
    </div>
  );
}
