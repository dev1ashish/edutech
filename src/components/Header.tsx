import Link from "next/link";
import { SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-[color:var(--forest-deep)] text-[color:var(--ivory)] text-xs">
        <div className="container-x flex items-center justify-between py-2">
          <p className="hidden md:block opacity-80">
            Admissions are open across all 4 partner universities. Talk to a
            counsellor today — no fees.
          </p>
          <p className="md:hidden opacity-80">Admissions open · Free counselling</p>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
              className="hover:text-[color:var(--gold-soft)] transition-colors"
            >
              {SITE.phone}
            </a>
            <span className="opacity-30">|</span>
            <a
              href={`mailto:${SITE.email}`}
              className="hidden sm:inline hover:text-[color:var(--gold-soft)] transition-colors"
            >
              {SITE.email}
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[color:var(--ivory)]/90 backdrop-blur-md border-b border-[color:var(--rule-soft)]">
        <div className="container-x flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="relative inline-block w-11 h-11">
              <svg
                viewBox="0 0 44 44"
                className="w-full h-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="logo-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0f3d2e" />
                    <stop offset="100%" stopColor="#082420" />
                  </linearGradient>
                </defs>
                <circle
                  cx="22"
                  cy="22"
                  r="20"
                  fill="url(#logo-fill)"
                  stroke="#b8893a"
                  strokeWidth="0.8"
                />
                <text
                  x="22"
                  y="28"
                  textAnchor="middle"
                  fill="#f6efde"
                  fontFamily="var(--font-display, Fraunces, Georgia, serif)"
                  fontSize="18"
                  fontWeight="600"
                >
                  E
                </text>
                <path
                  d="M14 33 L30 33"
                  stroke="#b8893a"
                  strokeWidth="0.6"
                />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg text-[color:var(--forest-deep)] tracking-tight">
                {SITE.name}
              </span>
              <span className="block text-[10px] tracking-[0.32em] uppercase text-[color:var(--gold-deep)] font-semibold">
                Counselling · Placement · Career
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[color:var(--ink-soft)]">
            <a href="#partners" className="hover:text-[color:var(--forest)] transition-colors">
              Universities
            </a>
            <a href="#programs" className="hover:text-[color:var(--forest)] transition-colors">
              Programmes
            </a>
            <a href="#process" className="hover:text-[color:var(--forest)] transition-colors">
              How it works
            </a>
            <a href="#placements" className="hover:text-[color:var(--forest)] transition-colors">
              Placements
            </a>
            <a href="#faq" className="hover:text-[color:var(--forest)] transition-colors">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                "Hi, I'd like to talk to a counsellor about admissions."
              )}`}
              className="hidden sm:inline-flex btn-whatsapp text-sm py-2.5 px-4"
              data-event="whatsapp_click"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.5 0 .19 5.31.19 11.85c0 2.09.55 4.13 1.59 5.93L0 24l6.4-1.68a11.85 11.85 0 005.64 1.43h.01c6.54 0 11.85-5.31 11.85-11.85 0-3.17-1.23-6.15-3.48-8.42zM12.05 21.6h-.01a9.74 9.74 0 01-4.96-1.36l-.36-.21-3.8 1 1.02-3.7-.24-.38a9.74 9.74 0 01-1.5-5.2c0-5.41 4.4-9.81 9.83-9.81a9.7 9.7 0 016.93 2.87 9.72 9.72 0 012.87 6.94c0 5.42-4.41 9.85-9.78 9.85zm5.39-7.36c-.3-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.18-.24-.58-.49-.5-.66-.5l-.56-.01c-.2 0-.5.07-.77.37-.27.3-1.02 1-1.02 2.45s1.05 2.85 1.2 3.05c.15.2 2.07 3.16 5.02 4.43.7.3 1.25.49 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.74-.71 1.98-1.4.24-.69.24-1.28.17-1.4-.07-.13-.27-.2-.57-.35z" />
              </svg>
              WhatsApp
            </a>
            <a href="#counselling" className="btn-primary text-sm py-2.5 px-4">
              Free counselling
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
