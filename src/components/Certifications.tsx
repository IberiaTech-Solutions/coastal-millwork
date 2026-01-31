import Image from "next/image";

export const CERTIFICATIONS = [
  {
    name: "Veteran Owned Business",
    src: "/VOB-logo_bw.png",
    href: null,
  },
  {
    name: "LEED – U.S. Green Building Council",
    src: "/LEED-logo_bw.png",
    href: "https://www.usgbc.org/leed",
  },
  {
    name: "AWI Quality Certification Program",
    src: "/QCP-logo_bw.png",
    href: "https://awiqcp.org/",
  },
  {
    name: "Architectural Woodwork Institute",
    src: "/AWI-logo_bw.png",
    href: "https://awinet.org/",
  },
] as const;

type CertificationsProps = {
  /** Section title (e.g. "Certifications & affiliations"). Omit to hide. */
  title?: string;
  /** Optional class for the section wrapper */
  className?: string;
};

export default function Certifications({ title = "Certifications & affiliations", className = "" }: CertificationsProps) {
  return (
    <section className={className}>
      {title && (
        <p className="section-label section-label-with-rule text-center">
          {title}
        </p>
      )}
      <div className={`flex flex-wrap items-start justify-center gap-8 sm:gap-12 lg:gap-16 ${title ? "mt-10" : ""}`}>
        {CERTIFICATIONS.map((cert) => {
          const content = (
            <span className="flex w-[140px] flex-col items-center gap-3 sm:w-[160px]">
              <span className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-sm transition hover:shadow-md sm:h-24 sm:w-24">
                <Image
                  src={cert.src}
                  alt={cert.name}
                  width={80}
                  height={80}
                  className="h-14 w-14 object-contain p-2 sm:h-16 sm:w-16"
                />
              </span>
              <span className="min-h-[2.5rem] w-full text-center text-xs leading-tight text-[var(--muted)] sm:min-h-[2.75rem] sm:text-[11px]">
                {cert.name}
              </span>
            </span>
          );
          if (cert.href) {
            return (
              <a
                key={cert.name}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/20 focus:ring-offset-2 focus:ring-offset-[var(--bg-paper)] rounded-xl"
                title={cert.name}
              >
                {content}
              </a>
            );
          }
          return (
            <span key={cert.name} className="rounded-xl" title={cert.name}>
              {content}
            </span>
          );
        })}
      </div>
    </section>
  );
}
