import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ThemedLeadForm } from "@/components/college/ThemedLeadForm";
import "./uu.css";

export const metadata: Metadata = {
  title: "Uttaranchal University Admissions 2026 — Apply Online",
  description:
    "Apply for Uttaranchal University Dehradun 2026–27. 100+ industry-centric programmes, ₹1.5 Cr highest international package, 1200+ recruiters, NAAC A+ accreditation, scholarships up to 65%.",
  alternates: { canonical: "/uttaranchal-university" },
};

const PLACEMENT_STATS = [
  { value: "1200+", label: "Recruiters" },
  { value: "1.5 CR", label: "International Package" },
  { value: "55 LPA", label: "Domestic Package" },
  { value: "25K+", label: "Glorious Alumni in Top Corporates" },
];

const RESEARCH_STATS = [
  { value: "6000+", label: "Paper Publications" },
  { value: "730+", label: "IPR / Patents" },
  { value: "160+", label: "IPR Grants" },
  { value: "45+", label: "International IPR" },
  { value: "05+", label: "Technology Transfers" },
  { value: "20+", label: "Start-Ups" },
];

const OFFERINGS = [
  "Conducive Learning Environment",
  "Excellent Standards of Teaching",
  "Highly Affordable Education",
  "Scholarships up to 65%",
  "Student Satisfaction",
  "Personalised Mentorship",
];

const PROGRAMS = {
  ug: [
    "B.Tech CSE / AI / Cyber Security",
    "B.Tech Civil / Mech / ECE",
    "BBA / BBA (Hons.)",
    "BA LLB / BBA LLB",
    "BCA / BCA AI",
    "B.Pharm",
    "B.Sc. Agriculture",
    "B.Sc. Nursing / BPT",
    "B.Sc. Hospitality",
    "B.Com (Hons.)",
    "BA Journalism / Mass Comm",
    "B.Des",
  ],
  pg: [
    "M.Tech CSE / Civil",
    "MBA (Mktg / HR / Fin / Analytics)",
    "MCA",
    "M.Pharm",
    "LLM",
    "M.Sc. Agri / Nursing / Maths",
    "MA Journalism",
    "MPT",
  ],
  phd: [
    "PhD Engineering",
    "PhD Management",
    "PhD Pharmacy",
    "PhD Law",
    "PhD Sciences & Humanities",
    "PhD Agriculture",
  ],
};

const RECRUITERS = [
  "Google",
  "Amazon",
  "Accenture",
  "Wipro",
  "Cognizant",
  "HCL",
  "TCS",
  "Tech Mahindra",
  "Capgemini",
  "Infosys",
  "Maruti Suzuki",
  "L&T",
];

const FAQS = [
  {
    q: "Is Uttaranchal University recognised by UGC?",
    a: "Yes. Uttaranchal University is a UGC-recognised state private university in Dehradun, Uttarakhand. NAAC A+ accredited and approved by AICTE, BCI, PCI, INC, COA and PCI for relevant programmes.",
  },
  {
    q: "What is the highest scholarship I can get?",
    a: "Early Bird Scholarships up to 65% are offered for top scorers in 12th board / qualifying exam. Sports, single-girl-child, defence, sibling and economically-weaker-section slabs are stacked above this where applicable.",
  },
  {
    q: "How does admission work?",
    a: "Submit the application form on this page → eligibility check call → entrance test or 12th merit shortlist → counselling → provisional offer → fee payment → seat confirmed. Most candidates wrap up in 7–10 days.",
  },
  {
    q: "What entrance exams are accepted?",
    a: "JEE Main, NEET (UG/PG), CUET, MAT, CAT, CLAT and qualifying-exam merit are accepted across the relevant programmes. Some programmes have university-specific written rounds.",
  },
];

export default function UttaranchalPage() {
  return (
    <div className="uu-root">
      <header className="uu-header">
        <div className="uu-container flex items-center justify-between gap-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="uu-logo-mark" aria-hidden>
              <svg viewBox="0 0 50 50" width="50" height="50">
                <path
                  d="M10 8 C10 18 14 28 25 38 C36 28 40 18 40 8 Z"
                  fill="#1762ae"
                />
                <path
                  d="M10 14 C10 24 14 34 25 44 C36 34 40 24 40 14 Z"
                  fill="#60b238"
                />
              </svg>
            </span>
            <span className="uu-logo-text">
              <span className="block uu-logo-name">UTTARANCHAL</span>
              <span className="block uu-logo-name uu-logo-name-2">UNIVERSITY</span>
              <span className="block uu-logo-tag">DEHRADUN</span>
            </span>
            <span className="uu-naac" aria-hidden>
              <span>NAAC</span>
              <span className="uu-naac-grade">
                A<sup>+</sup>
              </span>
              <span className="uu-naac-line">GRADE</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7 text-[15px] font-semibold text-[#222]">
            <a href="#about">Home</a>
            <a href="#placements">Placement</a>
            <a href="#programmes">Programs Offered</a>
            <a href="#campus">Campus Life</a>
          </nav>
          <a href="tel:18002124201" className="uu-contact">
            <span className="uu-contact-icon" aria-hidden>
              ☎
            </span>
            <span>
              <span className="block">1800 212 4201</span>
              <span className="block">1800 212 4221</span>
            </span>
          </a>
        </div>
      </header>

      <section className="uu-hero">
        <div className="uu-hero-bg" aria-hidden>
          <Image
            src="/colleges/uu/hero.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover", objectPosition: "left center" }}
          />
        </div>
        <div className="uu-container">
          <div className="uu-hero-grid">
            <div className="uu-hero-copy">
              <h1 className="uu-hero-title">
                Uttaranchal
                <br />
                University{" "}
                <span className="uu-hero-mark">Dehradun</span>
              </h1>
              <p className="uu-hero-subtitle">Early Bird</p>
              <p className="uu-hero-headline">
                Scholarship
                <br />
                <span className="uu-hero-headline-num">upto 65%</span>
              </p>
              <p className="uu-hero-banner">
                Apply by 31 May 2026 to lock the highest scholarship slab
              </p>
            </div>
            <div className="uu-form-card">
              <h3 className="uu-form-title">Apply Now for 2026-27 Session</h3>
              <ThemedLeadForm
                university="Uttaranchal University"
                programs={[
                  "B.Tech CSE / AI / Cyber",
                  "B.Tech Civil / Mech / ECE",
                  "BBA / MBA",
                  "BA LLB / BBA LLB",
                  "BCA / MCA",
                  "B.Pharm / M.Pharm",
                  "B.Sc. Agri / Nursing",
                  "BHMCT / Hospitality",
                  "BA Journalism",
                  "B.Des",
                  "PhD",
                  "Other",
                ]}
                buttonLabel="Submit Enquiry"
                successText="A senior Uttaranchal University admissions counsellor will reach out shortly with your eligibility, scholarship slab and document checklist."
                classes={{
                  form: "space-y-4",
                  field: "block",
                  label:
                    "block text-[13px] font-semibold text-[#444] mb-1.5",
                  select:
                    "w-full px-3.5 py-2.5 border border-[#d4d4d4] rounded-md bg-white text-[15px] text-[#222] focus:outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/15",
                  button:
                    "w-full bg-[#4f46e5] hover:bg-[#3b35b5] text-white py-3 rounded-md font-semibold text-[15px] tracking-wide transition-colors",
                  consent:
                    "flex gap-2.5 items-start text-[12px] text-[#666] leading-snug",
                  error: "text-xs text-[#b91c1c] mt-1",
                  success:
                    "p-6 rounded-md bg-[#fef3eb] border-l-4 border-[#f47b20]",
                  successTitle: "font-bold text-lg text-[#222]",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="uu-section uu-section-pattern" id="about">
        <div className="uu-container">
          <p className="uu-eyebrow">After UU What Comes Next?</p>
          <h2 className="uu-h2">
            STEP INTO A PROMISING TOMORROW:
            <br />
            <span className="uu-italic">
              WITH EXCEPTIONAL GLOBAL OPPORTUNITIES
            </span>
          </h2>
          <div className="uu-stats-grid">
            {PLACEMENT_STATS.map((s) => (
              <div key={s.label} className="uu-stat">
                <p className="uu-stat-value">{s.value}</p>
                <p className="uu-stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="placements" className="uu-section uu-section-dark">
        <div className="uu-container">
          <p className="uu-eyebrow uu-eyebrow-light">Placements at UU</p>
          <h2 className="uu-h2 uu-h2-light">
            UNLOCK THE SECRET OF
            <br />
            <span className="uu-italic">GETTING HIRED WITH THE BEST!</span>
          </h2>
          <div className="uu-recruiters">
            {RECRUITERS.map((r) => (
              <span key={r} className="uu-recruiter-pill">
                {r}
              </span>
            ))}
          </div>
          <div className="uu-place-call">
            <a href="#enquiry" className="uu-btn-orange">
              Talk to a Placement Advisor →
            </a>
          </div>
        </div>
      </section>

      <section className="uu-section uu-section-soft">
        <div className="uu-container">
          <div className="uu-banner">
            <Image
              src="/colleges/uu/campus.jpg"
              alt="Campus walkway at Uttaranchal University"
              width={2000}
              height={700}
              className="uu-img-fill"
            />
            <div className="uu-banner-overlay">
              <p className="uu-banner-eyebrow">42-acre Premnagar Campus</p>
              <h3>One of the largest residential university campuses in Dehradun</h3>
            </div>
          </div>
          <p className="uu-eyebrow">Education that connects</p>
          <h2 className="uu-h2">
            JOIN THE GLOBAL CLASSROOM:
            <br />
            <span className="uu-italic">
              WHERE EDUCATION MEETS DIVERSE INDUSTRIES!
            </span>
          </h2>
          <div className="uu-offer-grid">
            {OFFERINGS.map((o) => (
              <div key={o} className="uu-offer-card">
                <span className="uu-offer-mark" aria-hidden />
                <p>{o}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programmes" className="uu-section">
        <div className="uu-container">
          <p className="uu-eyebrow">100+ Industry-centric Programmes</p>
          <h2 className="uu-h2">
            HERE ARE OUR
            <br />
            <span className="uu-italic">
              100+ INDUSTRY-CENTRIC PROGRAMS:
            </span>
            <br />
            TO CHOOSE YOUR PATH TO EXCELLENCE!
          </h2>
          <div className="uu-program-tabs">
            <article>
              <h3>Undergraduate</h3>
              <ul>
                {PROGRAMS.ug.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
            <article>
              <h3>Postgraduate</h3>
              <ul>
                {PROGRAMS.pg.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
            <article>
              <h3>Ph.D</h3>
              <ul>
                {PROGRAMS.phd.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="uu-section uu-section-soft">
        <div className="uu-container">
          <p className="uu-eyebrow">Discover the &apos;U&apos;nique Offerings</p>
          <h2 className="uu-h2">
            DISCOVER THE &apos;U&apos;NIQUE OFFERINGS:
            <br />
            <span className="uu-italic">CARVE YOUR PATH TO SUCCESS!</span>
          </h2>
          <div className="uu-feature-grid">
            <article className="uu-feature">
              <h3>Industry-Aligned Curriculum</h3>
              <p>
                Curriculum reviewed annually with industry experts. Live
                industry projects from second year. Capstone with a real
                client deliverable.
              </p>
            </article>
            <article className="uu-feature">
              <h3>International Exposure</h3>
              <p>
                Semester-abroad and short-immersion options across the US, UK,
                Singapore, Australia, Germany and Dubai with active university
                partners.
              </p>
            </article>
            <article className="uu-feature">
              <h3>Mentorship that Sticks</h3>
              <p>
                Personalised academic + career mentorship from day one. One
                mentor, the entire programme. Career-track conversations
                quarterly.
              </p>
            </article>
            <article className="uu-feature">
              <h3>Scholarship up to 65%</h3>
              <p>
                Early-Bird Scholarship up to 65% on tuition fee for 12th /
                qualifying exam toppers. Sports, single-girl-child, defence
                slabs stack above this.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="uu-section uu-section-dark">
        <div className="uu-container">
          <p className="uu-eyebrow uu-eyebrow-light">Research at UU</p>
          <h2 className="uu-h2 uu-h2-light">
            REVOLUTIONIZING THROUGH
            <br />
            <span className="uu-italic">RESEARCH & INNOVATION AT UU!</span>
          </h2>
          <div className="uu-research-grid">
            {RESEARCH_STATS.map((r) => (
              <div key={r.label} className="uu-research-tile">
                <p className="uu-research-val">{r.value}</p>
                <p className="uu-research-label">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry" className="uu-section uu-section-soft">
        <div className="uu-container">
          <p className="uu-eyebrow">Apply Now</p>
          <h2 className="uu-h2">
            FROM ASPIRATION TO REALITY:
            <br />
            <span className="uu-italic">JOIN OUR UNIVERSITY!</span>
          </h2>
          <p className="uu-body mt-5 max-w-3xl">
            Application takes under two minutes. The form is reviewed by the
            admissions team within 24 hours and you&apos;ll receive a call back
            with next steps — eligibility, scholarship slab, fee schedule and
            document checklist.
          </p>
          <div className="uu-cta-row">
            <a href="#apply" className="uu-btn-orange">
              Begin Application
            </a>
            <a href="tel:18002124201" className="uu-btn-outline">
              Call 1800 212 4201
            </a>
          </div>
        </div>
      </section>

      <section className="uu-section">
        <div className="uu-container">
          <p className="uu-eyebrow">FAQs</p>
          <h2 className="uu-h2">Frequently asked questions</h2>
          <div className="uu-faqs">
            {FAQS.map((f) => (
              <details key={f.q} className="uu-faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="uu-footer">
        <div className="uu-container">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="uu-footer-name">UTTARANCHAL UNIVERSITY</p>
              <p className="uu-footer-tag">DEHRADUN · NAAC A+</p>
              <p className="uu-footer-line mt-4">
                Premnagar, Dehradun, Uttarakhand – 248007
              </p>
            </div>
            <div className="md:col-span-3">
              <p className="uu-footer-head">Admissions</p>
              <p className="uu-footer-line">
                1800 212 4201 / 4221
                <br />
                admissions@uttaranchaluniversity.ac.in
              </p>
            </div>
            <div className="md:col-span-4">
              <p className="uu-footer-head">Quick Links</p>
              <ul>
                <li>
                  <a href="#programmes">Programmes</a>
                </li>
                <li>
                  <a href="#placements">Placement</a>
                </li>
                <li>
                  <a href="#enquiry">Apply Now</a>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="uu-footer-bar">
            <p>© {new Date().getFullYear()} Uttaranchal University Admissions.</p>
            <p>NAAC A+ · UGC · AICTE · BCI · PCI · INC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
