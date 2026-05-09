import { COLLEGES } from "@/lib/constants";
import { CollegeCrest } from "./CollegeCrest";

export function Hero() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-x pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="rise rise-1">
              <span className="rule-ornament">
                Estd. {new Date().getFullYear() - 6} · Dehradun, Uttarakhand
              </span>
            </div>

            <h1 className="rise rise-2 mt-6 font-display text-[clamp(2.6rem,6vw,5.25rem)] leading-[0.98] tracking-tight text-[color:var(--forest-deep)]">
              The right university
              <br />
              starts with{" "}
              <span className="font-italic-serif">the right counsel.</span>
            </h1>

            <p className="rise rise-3 mt-7 max-w-xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
              Free 1-on-1 admission counselling for Uttarakhand&apos;s most respected
              universities — <span className="swash-underline">UPES, Graphic Era,
              Uttaranchal University and Dev Bhoomi.</span> Placements verified up to
              ₹61.99 LPA across our partner campuses in 2025.
            </p>

            <div className="rise rise-4 mt-9 flex flex-wrap gap-3">
              <a href="#counselling" className="btn-primary">
                Get free counselling
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#partners" className="btn-secondary">
                See partner universities
              </a>
            </div>

            <div className="rise rise-5 mt-10 flex flex-wrap items-center gap-5 text-sm text-[color:var(--ink-soft)]">
              <div className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--gold)]" />
                12,000+ aspirants counselled
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--gold)]" />
                4 partner universities
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--gold)]" />
                92% placement rate
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative grid grid-cols-2 gap-5 max-w-md ml-auto">
              {COLLEGES.map((c, i) => (
                <div
                  key={c.slug}
                  className={`rise rise-${i + 2} card-paper p-5 flex flex-col items-start gap-3 ${
                    i % 2 === 1 ? "translate-y-6" : ""
                  }`}
                >
                  <CollegeCrest
                    monogram={c.monogram}
                    size={56}
                    variant={
                      ["shield", "hex", "circle", "diamond"][i] as
                        | "shield"
                        | "hex"
                        | "circle"
                        | "diamond"
                    }
                  />
                  <div>
                    <p className="font-display text-base leading-tight text-[color:var(--forest-deep)]">
                      {c.shortName}
                    </p>
                    <p className="text-[11px] tracking-[0.18em] uppercase text-[color:var(--muted)] mt-1">
                      Est. {c.established} · {c.city}
                    </p>
                  </div>
                  <div className="text-xs text-[color:var(--ink-soft)] mt-1">
                    Highest {c.highestPackage}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute -z-10 inset-0 -m-6 rounded-[40px] bg-gradient-to-br from-[color:var(--parchment)] to-transparent opacity-60" />
          </div>
        </div>
      </div>

      <div className="hairline" />
    </section>
  );
}
