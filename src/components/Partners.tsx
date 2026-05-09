import { COLLEGES } from "@/lib/constants";
import { CollegeCrest } from "./CollegeCrest";

const variants: Array<"shield" | "hex" | "circle" | "diamond"> = [
  "shield",
  "hex",
  "circle",
  "diamond",
];

export function Partners() {
  return (
    <section id="partners" className="section">
      <div className="container-x py-20 md:py-28">
        <header className="max-w-3xl">
          <p className="eyebrow">Our partner universities</p>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-[1.02] text-[color:var(--forest-deep)]">
            Four campuses.{" "}
            <span className="font-italic-serif">One trusted bridge.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--ink-soft)]">
            Each of our partner institutions is independently accredited and
            individually verified. We help you choose between them — not at them.
          </p>
        </header>

        <div className="mt-14 grid lg:grid-cols-2 gap-7">
          {COLLEGES.map((c, i) => (
            <article
              key={c.slug}
              className="card-paper p-7 md:p-9 flex flex-col h-full"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="flex items-start gap-5">
                  <CollegeCrest
                    monogram={c.monogram}
                    size={88}
                    variant={variants[i]}
                  />
                  <div>
                    <p className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--gold-deep)] font-semibold">
                      {c.accreditation}
                    </p>
                    <h3 className="mt-2 font-display text-2xl md:text-3xl leading-tight text-[color:var(--forest-deep)]">
                      {c.name}
                    </h3>
                    <p className="mt-1 text-sm text-[color:var(--muted)]">
                      Est. {c.established} · {c.city}, {" "}
                      {c.programs} programmes
                      {c.schools ? ` · ${c.schools} schools` : ""}
                    </p>
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-2 text-sm text-[color:var(--ink-soft)]">
                {c.highlights.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-2 inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--gold)] flex-none" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid grid-cols-3 gap-4 py-5 border-y border-[color:var(--rule-soft)]">
                <div>
                  <p className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--muted)]">
                    Highest pkg.
                  </p>
                  <p className="font-display text-xl text-[color:var(--forest-deep)] mt-1">
                    {c.highestPackage}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--muted)]">
                    {c.placementRate ? "Placement" : "Programmes"}
                  </p>
                  <p className="font-display text-xl text-[color:var(--forest-deep)] mt-1">
                    {c.placementRate ?? `${c.programs}+`}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--muted)]">
                    Top recruiters
                  </p>
                  <p className="font-display text-xl text-[color:var(--forest-deep)] mt-1">
                    {c.topRecruiters.length}+
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--muted)] mb-2">
                  Flagship programmes
                </p>
                <div className="flex flex-wrap gap-2">
                  {c.flagshipPrograms.map((p) => (
                    <span key={p} className="tag">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 flex items-center justify-between gap-3">
                <a
                  href="#counselling"
                  className="text-sm font-semibold text-[color:var(--forest-deep)] hover:text-[color:var(--moss)] transition-colors inline-flex items-center gap-1"
                >
                  Counselling for {c.shortName}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[color:var(--muted)] hover:text-[color:var(--forest-deep)] transition-colors"
                >
                  Official site ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
