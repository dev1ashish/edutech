import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ThemedLeadForm } from "@/components/college/ThemedLeadForm";
import "./dbuu.css";

export const metadata: Metadata = {
  title: "Dev Bhoomi University Admissions 2026 — DBUU CET Open",
  description:
    "Dev Bhoomi Uttarakhand University admissions 2026. 170+ programmes, DBUU-CET 2026 registrations open, scholarships up to ₹25 Cr, 1st ranked in Uttarakhand for Professional Education.",
  alternates: { canonical: "/dev-bhoomi" },
};

const STATS = [
  { value: "21+", label: "Years of Excellence", color: "red" },
  { value: "42 Acres", label: "Lush Green Campus", color: "navy" },
  { value: "170+", label: "Programmes", color: "purple" },
  { value: "10000+", label: "Students on Campus", color: "orange" },
];

const RANKINGS = [
  {
    rank: "1st",
    title: "Ranked",
    note: "In Uttarakhand (Professional Education) — Education World Rankings 2025–26",
  },
  {
    rank: "8th",
    title: "Ranked",
    note: "Outstanding Achievement in Professional Education — Education World Rankings",
  },
  {
    rank: "A+",
    title: "NAAC",
    note: "Accredited and recognised under UGC, AICTE, BCI, PCI and INC",
  },
  {
    rank: "₹25 Cr",
    title: "Scholarships",
    note: "Total scholarship pool disbursed across UG and PG cohorts since 2019",
  },
];

const WHY_DBUU = [
  "12 Schools",
  "800+ Expert Faculties & Staff",
  "State-of-the-Art Infrastructure",
  "Strong Industry Connections",
  "50+ National & International Collaborations",
  "Vibrant Campus Life",
  "Scholarships Worth ₹25 Crores",
  "DBUU-CET — Multiple Test Windows",
];

const SCHOOLS = [
  { school: "School of Engineering & Computing" },
  { school: "School of Pharmacy & Research" },
  { school: "School of Business" },
  { school: "School of Health Sciences" },
  { school: "School of Hospitality & Tourism" },
  { school: "School of Allied Health Sciences" },
  { school: "School of Agriculture" },
  { school: "School of Law" },
  { school: "School of Liberal Arts" },
  { school: "School of Education" },
  { school: "School of Media & Communication" },
  { school: "School of Sciences" },
];

const ACCREDITATIONS = ["UGC", "AICTE", "BCI", "PCI", "INC", "NCTE", "NAAC A+"];

const STEPS = [
  {
    n: "01",
    head: "Register for DBUU-CET",
    body: "Fill the application form, choose programme of interest and pay the registration fee online.",
  },
  {
    n: "02",
    head: "Appear for DBUU-CET",
    body: "90-minute online entrance test conducted in multiple windows. Selected programmes also accept JEE Main, NEET, MAT, CAT.",
  },
  {
    n: "03",
    head: "Counselling & Offer",
    body: "Counselling within 7 days of result. Provisional offer letter and scholarship slab issued at the same time.",
  },
  {
    n: "04",
    head: "Admission Confirmation",
    body: "Pay first-instalment fee online to confirm seat. Hostel allotment and orientation date follow.",
  },
];

const FAQS = [
  {
    q: "Is DBUU recognised by UGC?",
    a: "Yes. Dev Bhoomi Uttarakhand University is a UGC-recognised state private university with NAAC A+ accreditation and approvals from AICTE, PCI, BCI, INC and NCTE for relevant programmes.",
  },
  {
    q: "What is DBUU-CET?",
    a: "DBUU-CET is the university's common entrance test conducted in multiple windows through the year — making it especially friendly for late applicants. Online, 90 minutes, 75 questions.",
  },
  {
    q: "Are scholarships available?",
    a: "Yes. The university disburses scholarships worth ₹25 Cr+ each year, with merit, sports, defence-personnel-children, single-girl-child and economically-weaker-section slabs.",
  },
  {
    q: "What about placements?",
    a: "Highest package recorded ₹24 LPA with strong industry-aligned recruitment from Wipro, HCL, Tech Mahindra, Cognizant, Capgemini, Apollo, Hero MotoCorp and ICICI.",
  },
];

export default function DevBhoomiPage() {
  return (
    <div className="dbuu-root">
      <header className="dbuu-header">
        <div className="dbuu-strip">
          <div className="dbuu-container flex items-center justify-between text-xs">
            <p className="hidden md:block">
              DBUU CET-2026 · Apply Now · Multiple test windows
            </p>
            <div className="flex items-center gap-4 text-[#cdd6e8]">
              <a href="#apply">Career</a>
              <a href="#apply">Alumni</a>
              <a href="#apply">Login</a>
            </div>
          </div>
        </div>
        <div className="dbuu-helpline">
          <div className="dbuu-container flex items-center justify-between gap-5 py-3">
            <Link href="/" className="flex items-center gap-3">
              <span className="dbuu-logo-mark" aria-hidden>
                <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden>
                  <defs>
                    <linearGradient id="dbuu-flag" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c1272d" />
                      <stop offset="100%" stopColor="#0c274a" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M20 2 L36 8 L36 22 C36 30 28 36 20 38 C12 36 4 30 4 22 L4 8 Z"
                    fill="url(#dbuu-flag)"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <text
                    x="20"
                    y="24"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="10"
                    fontWeight="800"
                  >
                    DBUU
                  </text>
                </svg>
              </span>
              <span className="dbuu-logo-text">
                <span className="block dbuu-logo-name">
                  Dev Bhoomi Uttarakhand University
                </span>
                <span className="block dbuu-logo-tag">
                  The Best University in Dehradun
                </span>
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-4">
              <div className="dbuu-helpline-card">
                <span className="dbuu-helpline-label">For Admission</span>
                <a href="tel:18001034049" className="dbuu-helpline-num">
                  1800 103 4049
                </a>
              </div>
              <a href="#apply" className="dbuu-helpline-cta">
                Admissions Open · 2026–27
              </a>
            </div>
          </div>
        </div>
        <nav className="dbuu-nav">
          <div className="dbuu-container flex flex-wrap gap-x-7 gap-y-2 py-3 text-sm font-semibold">
            <a href="#about">Home</a>
            <a href="#about">About</a>
            <a href="#schools">Schools</a>
            <a href="#programmes">Programmes</a>
            <a href="#apply" className="dbuu-nav-active">
              Admissions
            </a>
            <a href="#process">Academics</a>
            <a href="#placements">Placements</a>
            <a href="#campus">Life@DBUU</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <section className="dbuu-hero">
        <div className="dbuu-hero-bg" aria-hidden>
          <Image
            src="/colleges/dbuu/hero.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="dbuu-container">
          <div className="dbuu-hero-grid">
            <div className="dbuu-hero-copy">
              <p className="dbuu-hero-eyebrow">DBUU-CET 2026 · Apply Now</p>
              <h1 className="dbuu-hero-title">
                The <span className="dbuu-hero-red">Best University</span>
                <br />
                in Dehradun, Uttarakhand
              </h1>
              <p className="dbuu-hero-sub">
                170+ programmes · 12 schools · 42-acre campus · NAAC A+ ·
                Scholarships worth ₹25 Cr disbursed every year. Admissions open
                for the 2026–27 academic session.
              </p>
              <div className="dbuu-hero-cta">
                <a href="#apply" className="dbuu-btn-red">
                  Apply Now →
                </a>
                <a href="#programmes" className="dbuu-btn-outline">
                  View Programmes
                </a>
              </div>
            </div>
            <div className="dbuu-hero-tiles">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className={`dbuu-tile dbuu-tile-${s.color}`}
                >
                  <p className="dbuu-tile-value">{s.value}</p>
                  <p className="dbuu-tile-label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="dbuu-section dbuu-section-cream" id="about">
        <div className="dbuu-container">
          <p className="dbuu-eyebrow">Dev Bhoomi Uttarakhand University</p>
          <h2 className="dbuu-h2">
            Recognised. Ranked. Reaching new milestones.
          </h2>
          <div className="dbuu-rankings">
            {RANKINGS.map((r) => (
              <article key={r.note} className="dbuu-ranking">
                <p className="dbuu-ranking-rank">{r.rank}</p>
                <p className="dbuu-ranking-title">{r.title}</p>
                <p className="dbuu-ranking-note">{r.note}</p>
              </article>
            ))}
          </div>
          <div className="dbuu-accred">
            <p className="dbuu-accred-head">Accreditations & Recognitions</p>
            <div className="dbuu-accred-row">
              {ACCREDITATIONS.map((a) => (
                <span key={a} className="dbuu-accred-pill">
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="dbuu-section">
        <div className="dbuu-container">
          <div className="dbuu-side-grid">
            <div className="dbuu-side-img">
              <Image
                src="/colleges/dbuu/students.jpg"
                alt="DBUU students walking on campus"
                width={1400}
                height={1000}
                className="dbuu-img-fill"
              />
            </div>
            <div>
              <p className="dbuu-eyebrow">Why DBUU</p>
              <h2 className="dbuu-h2">
                Who Needs Magic Carpets When You Can Fly with Education
              </h2>
              <p className="dbuu-body mt-4">
                A 42-acre campus, 800+ expert faculty, scholarships worth
                ₹25 Cr disbursed every year, and a curriculum reviewed
                annually with industry partners. Eight reasons students pick
                DBUU year after year.
              </p>
            </div>
          </div>
          <div className="dbuu-why-grid">
            {WHY_DBUU.map((w, i) => (
              <div key={w} className="dbuu-why-card">
                <span className="dbuu-why-num">{String(i + 1).padStart(2, "0")}</span>
                <p>{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="schools" className="dbuu-section dbuu-section-cream">
        <div className="dbuu-container">
          <p className="dbuu-eyebrow">12 Schools · One Campus</p>
          <h2 className="dbuu-h2">Schools at DBUU</h2>
          <div className="dbuu-schools-grid">
            {SCHOOLS.map((s) => (
              <div key={s.school} className="dbuu-school-card">
                {s.school}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programmes" className="dbuu-section">
        <div className="dbuu-container">
          <p className="dbuu-eyebrow">Programmes Offered</p>
          <h2 className="dbuu-h2">170+ Programmes Across UG, PG & Doctoral</h2>
          <div className="dbuu-program-tabs">
            <article>
              <h3 className="dbuu-program-head">Undergraduate</h3>
              <ul>
                <li>B.Tech CSE / AI / Cyber</li>
                <li>B.Pharm</li>
                <li>BBA / B.Com (Hons.)</li>
                <li>BA LLB / BBA LLB</li>
                <li>BCA / BCA AI</li>
                <li>B.Sc. Nursing / Agri / Hospitality</li>
                <li>BPT / BMLT / B.Optom</li>
                <li>BHMCT</li>
              </ul>
            </article>
            <article>
              <h3 className="dbuu-program-head">Postgraduate</h3>
              <ul>
                <li>M.Tech (CSE / Civil)</li>
                <li>M.Pharm</li>
                <li>MBA (HR / Mktg / Fin / Analytics)</li>
                <li>MCA</li>
                <li>LLM</li>
                <li>M.Sc. Agri / Nursing</li>
                <li>MA Eng / Eco / Pol Sc</li>
                <li>MPT</li>
              </ul>
            </article>
            <article>
              <h3 className="dbuu-program-head">Doctoral & Diploma</h3>
              <ul>
                <li>PhD across all schools</li>
                <li>Pharm.D</li>
                <li>Polytechnic Diploma</li>
                <li>Lateral entry — B.Tech / BCA / B.Pharm</li>
                <li>Bridge programmes for working professionals</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="process" className="dbuu-section dbuu-section-navy">
        <div className="dbuu-container">
          <p className="dbuu-eyebrow dbuu-eyebrow-light">Admission Process</p>
          <h2 className="dbuu-h2 dbuu-h2-light">
            Four steps from interest to your seat at DBUU
          </h2>
          <div className="dbuu-steps">
            {STEPS.map((s) => (
              <div key={s.n} className="dbuu-step">
                <span className="dbuu-step-n">{s.n}</span>
                <h3>{s.head}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="placements" className="dbuu-section dbuu-section-cream">
        <div className="dbuu-container">
          <p className="dbuu-eyebrow">Placements at DBUU</p>
          <h2 className="dbuu-h2">From classroom to corporate</h2>
          <p className="dbuu-body mt-4 max-w-3xl">
            Highest package recorded ₹24 LPA with consistent industry-aligned
            recruitment from Wipro, HCL, Tech Mahindra, Cognizant, Capgemini,
            Apollo, Hero MotoCorp, ICICI and Axis Bank. Our placement cell
            organises pre-placement training and live industry projects from
            the second year onwards.
          </p>
          <div className="dbuu-place-stats">
            <div>
              <p className="dbuu-place-stat">₹24 L</p>
              <p>Highest Package</p>
            </div>
            <div>
              <p className="dbuu-place-stat">300+</p>
              <p>Recruiters</p>
            </div>
            <div>
              <p className="dbuu-place-stat">90%</p>
              <p>Placement Eligible Branches</p>
            </div>
            <div>
              <p className="dbuu-place-stat">50+</p>
              <p>Industry MoUs</p>
            </div>
          </div>
          <div className="dbuu-recruiters">
            {[
              "Wipro",
              "HCL",
              "Tech Mahindra",
              "Cognizant",
              "Capgemini",
              "Apollo",
              "Hero MotoCorp",
              "ICICI",
              "Axis Bank",
              "Berger Paints",
              "Maruti Suzuki",
              "Tata",
            ].map((r) => (
              <span key={r}>{r}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="dbuu-section dbuu-section-form">
        <div className="dbuu-container grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="dbuu-eyebrow">Apply Now</p>
            <h2 className="dbuu-h2">Begin your DBUU 2026 application</h2>
            <p className="dbuu-body mt-5">
              The form on the right reaches the admissions team directly. A
              counsellor will call within 24 hours with eligibility, DBUU-CET
              schedule, fee schedule and scholarship slab.
            </p>
            <div className="dbuu-contact-card">
              <p className="dbuu-contact-head">Admission Helpline</p>
              <p className="dbuu-contact-num">1800 103 4049</p>
              <p className="dbuu-contact-head mt-4">Email</p>
              <p>admissions@dbuu.ac.in</p>
              <p className="dbuu-contact-head mt-4">Campus</p>
              <p>
                Navgaon, Manduwala, Chakrata Road, Dehradun, Uttarakhand –
                248007
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="dbuu-form-card">
              <p className="dbuu-form-eyebrow">DBUU-CET 2026 Application</p>
              <h3 className="dbuu-form-title">
                Apply for Dev Bhoomi University Admission
              </h3>
              <ThemedLeadForm
                university="Dev Bhoomi"
                programs={[
                  "B.Tech CSE / AI / Cyber",
                  "B.Pharm / Pharm.D",
                  "BBA / B.Com",
                  "BA LLB / BBA LLB",
                  "BCA / MCA",
                  "B.Sc. Nursing / Agri",
                  "BHMCT / Hospitality",
                  "MBA",
                  "M.Tech / M.Pharm",
                  "PhD",
                  "Other",
                ]}
                buttonLabel="APPLY NOW"
                successText="A senior DBUU admissions counsellor will reach out within 24 hours with the DBUU-CET schedule, fee plan and scholarship slab."
                classes={{
                  form: "space-y-4",
                  field: "block",
                  label:
                    "block text-xs font-bold uppercase tracking-wider text-[#0c274a] mb-1.5",
                  select:
                    "w-full px-3.5 py-2.5 border border-[#cbd5e1] rounded-md bg-white text-[15px] text-[#0c274a] focus:outline-none focus:border-[#c1272d] focus:ring-2 focus:ring-[#c1272d]/15",
                  button:
                    "w-full bg-[#c1272d] hover:bg-[#a01f24] text-white py-3.5 rounded-md font-bold uppercase tracking-wide text-sm transition-colors shadow-md",
                  consent:
                    "flex gap-2.5 items-start text-xs text-[#444]",
                  error: "text-xs text-[#b91c1c] mt-1",
                  success:
                    "p-6 rounded-md bg-[#f7e9ea] border-l-4 border-[#c1272d]",
                  successTitle: "font-bold text-lg text-[#0c274a]",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="dbuu-section">
        <div className="dbuu-container">
          <p className="dbuu-eyebrow">Frequently Asked</p>
          <h2 className="dbuu-h2">Frequently Asked Questions</h2>
          <div className="dbuu-faqs">
            {FAQS.map((f) => (
              <details key={f.q} className="dbuu-faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="dbuu-footer">
        <div className="dbuu-container">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="dbuu-footer-name">Dev Bhoomi Uttarakhand University</p>
              <p className="dbuu-footer-tag">
                The Best University in Dehradun · NAAC A+
              </p>
              <p className="dbuu-footer-line mt-4">
                Navgaon, Manduwala, Chakrata Road,
                <br />
                Dehradun, Uttarakhand – 248007
              </p>
            </div>
            <div className="md:col-span-3">
              <p className="dbuu-footer-head">Admissions</p>
              <p className="dbuu-footer-line">
                Helpline · 1800 103 4049
                <br />
                Email · admissions@dbuu.ac.in
              </p>
            </div>
            <div className="md:col-span-4">
              <p className="dbuu-footer-head">Quick Links</p>
              <ul>
                <li>
                  <a href="#schools">Schools</a>
                </li>
                <li>
                  <a href="#programmes">Programmes</a>
                </li>
                <li>
                  <a href="#process">Admission Process</a>
                </li>
                <li>
                  <a href="#apply">Apply Now</a>
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
          <div className="dbuu-footer-bar">
            <p>© {new Date().getFullYear()} Dev Bhoomi Uttarakhand University Admissions.</p>
            <p>UGC · AICTE · BCI · PCI · INC · NAAC A+</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
