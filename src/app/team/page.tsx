import Image from "next/image";
import TeamMemberCard from "@/components/TeamMemberCard";

type RoleGroup = "Leadership" | "Operations" | "Engineering";

type TeamMember = {
  name: string;
  title: string;
  image: string;
  bio: string;
  blurb: string;
  certifications?: string;
  group: RoleGroup;
};

const TEAM: TeamMember[] = [
  { name: "Chris Wagner", title: "President / Owner / Business Development", image: "/images/team/wagner-chris_135x180.jpg", blurb: "Founding owner. Brings upper management experience from one of the largest publicly held companies to commercial construction.", bio: "Chris is the founding owner and President of CMS. After serving as an infantryman in the U.S. Army, he worked as a business manager in various capacities since graduating from the University of North Carolina at Wilmington. After spending a significant amount of time as a multi-state, multi-million-dollar, regional business unit manager for one of the largest publicly held companies in the world, he decided to bring his unique upper management skills and experience to the construction industry.", group: "Leadership" },
  { name: "Christian Datz", title: "Business Development Manager", image: "/images/team/placeholder-male_135x180.png", blurb: "Over a decade in commercial woodworking. Leads business development and estimation; skilled at scope and budget planning.", bio: "A graduate of The Citadel with a degree in Business Administration, Christian Datz began his commercial woodworking career right after graduation. Starting out as an estimator over a decade ago, Christian's attention to detail, combined now with an extensive knowledge of construction methods and procedures, have made him a valuable resource for General Contractors that want to truly plan costs, constructability, and production timelines. He knows how to navigate scope to resolve budget issues and is skilled at developing alternatives. Always straight forward and honest, Christian leads the business development department at CMS.", group: "Leadership" },
  { name: "Bonita Denney", title: "Financial Controller / Human Resources", image: "/images/team/denney-bonita_135x180.jpg", blurb: "35+ years in accounting; 16 years in construction as Financial Controller. Handles accounting, billing, and HR.", bio: "Bonita Denney comes from a strong accounting background with over 35 years of experience in the accounting field. The last 16 years have been in the Construction Industry as Financial Controller. Bonita handles all areas of our Accounting, from basic data entry through producing financial statements and working with outside CPAs to provide us with audited financial statements. She works with the General Contractors to stay on top of billing, collections, and licensing. In addition, Bonita handles the Human Resource side of the Company, including insuring payroll is handled timely. She is ready and willing to take on tasks to help in many areas.", group: "Leadership" },
  { name: "Kristin Ogren", title: "Sr. Project Administration / Procurement Director", image: "/images/team/ogren-kristin_135x180.jpg", blurb: "Nucleus of pre-construction: administration, estimating support, purchasing. Information hub for the whole company.", bio: "Kristin Ogren is the nucleus of Coastal Millwork and Supply's pre-construction team. Her responsibilities include project administration, estimating support, and purchasing. On top of handling all project change order requests, she is also our AWI & LEED compliance officer. Kristin is the information hub for the whole company and a highly organized professional. She graduated from the University of Florida with a Bachelors of Design degree (honors) and has earned multiple associate degrees. She has been in the casework industry for 15 years and is very familiar with all aspects of design and project administration.", certifications: "AWI & LEED compliance officer", group: "Operations" },
  { name: "Cricket", title: "Senior Project Coordinator", image: "/images/team/cricket-z_135x180.jpg", blurb: "Senior Project Coordinator at CMS.", bio: "", group: "Operations" },
  { name: "Ryan LaSalle", title: "Plant Manager", image: "/images/team/lasalle-ryan_135x180.jpg", blurb: "18 years in woodworking, half in management. Oversees shop and staff professionals; background in premium wood finishing.", bio: "Ryan LaSalle has been in the woodworking industry for 18 years with half of those years in management. As a carpenter, his specialty was custom woodworking and furniture with a strong background in premium wood finishing. Ryan has served for many years as a shop & customer manager for the internationally distinguished Houshco LLC. Ryan oversees a very professional group of woodworking and staff professionals at CMS.", group: "Operations" },
  { name: "Joe Fonseca", title: "Director of Project Management", image: "/images/team/fonseca-joe_135x180.jpg", blurb: "35+ years in architectural casework and metals. Major projects in mass transit and aviation; scope from $2M to $40M.", bio: "With over 35 years of experience managing the manufacturing and installation of architectural casework, wall panel systems, and ornamental metals, Joe Fonseca brings a huge amount of skill and knowledge to CMS. He spent the last 20 years completing major projects including mass transit and aviation markets in Las Vegas, New York, and Boston. Managing projects primarily ranging from two-million to 40-million dollars and advanced knowledge of all facets of construction has given CMS the management to handle any scope.", group: "Operations" },
  { name: "Ricky Sweaney", title: "Senior Project Manager", image: "/images/team/sweaney-ricky_135x180.jpg", blurb: "15+ years in millwork and casework. Pro-active problem solving from the front end through install.", bio: "Ricky Sweaney grew up in the woodworking industry and has been involved as a professional for over 15 years. Well versed in all aspects of interior millwork and casework, he has excelled at pro-active problem solving even before Coastal Millwork and Supply's install teams set foot on a project. Ricky's approach in identifying potential issues on the front end is instrumental in completing our projects successfully.", group: "Operations" },
  { name: "Jay Youngs", title: "Senior Architectural Engineer", image: "/images/team/youngs-jay_135x180.jpg", blurb: "Most senior design engineer and draftsman. Manages engineering department and submittal/production documents.", bio: "Jay Youngs is Coastal Millwork and Supply's most senior design engineer and draftsman. Years of working as an architectural draftsman has given him the ability to design fast and complete documents for both submittals and production. Jay manages our whole engineering department ensuring that all of our draftsman are meeting the required criteria and time schedule for our projects.", group: "Engineering" },
  { name: "Dave Comer", title: "Senior Architectural Engineer", image: "/images/team/comer-dave_135x180.jpg", blurb: "20+ years in commercial architectural woodwork; Clemson Architecture. Design engineering and project management.", bio: "Dave Comer is a Senior Project Manager/Engineer. With over 20 years of experience in the commercial architectural woodwork industry and five years in architectural field, Dave brings superior design skills, experience, and expertise to Coastal Millwork and Supply's project management team. A graduate of Clemson University with a degree in Architecture, Dave's experience in both design engineering and project management has helped establish us as one of the industry leaders in the Southeast.", group: "Engineering" },
  { name: "Max Roth", title: "Architectural Design Engineer", image: "/images/team/roth-max_135x180.jpg", blurb: "Third-generation design engineer; master woodworker. High-end residential and commercial; complex millwork design.", bio: "Max Roth is a third-generation architectural design engineer with over a decade of experience in high-end residential and commercial construction. Also trained as a master woodworker, Max brings a knowledge of complex architectural engineering, millwork design, and craftsmanship to each CMS client's project. It is very rare to have a solid, successful background in all three disciplines.", group: "Engineering" },
  { name: "Elisabeth Beaty", title: "Architectural Design Engineer", image: "/images/team/beaty-elisabeth_135x180.jpg", blurb: "10 years in construction and design. Residential showroom background; digital drawings and commercial construction.", bio: "Elisabeth grew up in construction as her father and brothers are all custom builders. She learned to read blueprints at a very young age. She has been a professional in the construction and design industry for 10 years. She spent most of her career in the residential market where she cultivated and managed a large remodeling showroom in north Atlanta. Elisabeth spent the past several years running her own small company specializing in digital drawings and renderings. She has seamlessly made the transition to commercial construction and has become a very strong member of our team.", group: "Engineering" },
];

const ROLE_LABELS: Record<RoleGroup, string> = {
  Leadership: "Leadership",
  Operations: "Operations & administration",
  Engineering: "Engineering & design",
};

export default function TeamPage() {
  return (
    <div>
      {/* Page hero */}
      <section className="border-b border-[var(--border)] bg-intro px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label section-label-with-rule">Our Team</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-4xl">
            The people behind Coastal Millwork & Supply
          </h1>
          <p className="mt-4 text-[var(--muted)] text-base sm:text-lg">
            The people behind the work.
          </p>
        </div>
      </section>

      {/* Team photo */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-20 sm:py-24">
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

      {/* Team – uniform grid of cards; categories same styling; Full bio collapsed, reveal on hover */}
      <section className="border-b border-[var(--border)] bg-subtle px-4 py-20 sm:py-28" aria-label="Team by role">
        <div className="mx-auto max-w-5xl">
          <h2 className="section-label text-center">Team</h2>
          <hr className="rule-design rule-design--thick rule-design--center mt-4" aria-hidden />
          {(["Leadership", "Operations", "Engineering"] as const).map((group) => {
            const members = TEAM.filter((p) => p.group === group);
            return (
              <div key={group} className="mt-14 first:mt-12">
                <h3 className="section-label text-[var(--foreground)]/80">
                  {ROLE_LABELS[group]}
                </h3>
                <hr className="rule-design rule-design--thick mt-2 mb-8" aria-hidden />
                <ul className="team-member-grid grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
                  {members.map((person) => (
                    <li key={person.name}>
                      <TeamMemberCard
                        name={person.name}
                        title={person.title}
                        image={person.image}
                        blurb={person.blurb}
                        bio={person.bio}
                        certifications={person.certifications}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* The Shop */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="section-label">The Shop</h2>
          <p className="mt-2 text-2xl font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-3xl">
            &ldquo;The Shop&rdquo;
          </p>
          <figure className="mt-8">
            <div className="aspect-video w-full max-w-2xl overflow-hidden rounded-lg bg-[var(--border)] shadow-sm">
              <Image src="/images/team/shop-the_135x180.jpg" alt="CMS employees working in the shop." width={540} height={360} className="h-full w-full object-cover" />
            </div>
            <figcaption className="mt-3 text-sm text-[var(--muted)]">
              CMS employees working in the shop.
            </figcaption>
          </figure>
          <p className="mt-8 text-[var(--muted)] leading-relaxed">
            Being a custom fabricator of high-quality millwork and casework under tight delivery schedules is extremely demanding on the manufacturing shop. It requires the best employees to make this happen and CMS has the best in the business. Our shop professionals are master artisans in multiple areas, disciplined professionals, problem solvers, and integral to our success. Our shop team leaders are always a part of our design process due to their construction knowledge and attention to the smallest details. The Shop is truly the backbone of CMS.
          </p>
        </div>
      </section>

    </div>
  );
}
