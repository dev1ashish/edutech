import { redirect } from "next/navigation";

export default function UpesPage() {
  redirect("/uttaranchal-university");
}

/* ─────────────────────────────────────────────────────────────────────────
   UPES landing page — temporarily disabled. Re-enable when needed by
   removing the redirect above and unwrapping the comment block.
   ────────────────────────────────────────────────────────────────────── */

/*
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ThemedLeadForm } from "@/components/college/ThemedLeadForm";
import "./upes.css";

export const metadata: Metadata = {
  title: "UPES Admissions 2026 — Applications Open for UG, PG & PhD",
  description:
    "Apply for UPES Dehradun 2026 admissions. 121+ programmes across 8 schools — Engineering, Computer Science, Business, Law, Health, Design, Media and Liberal Studies. Highest package ₹52 LPA.",
  alternates: { canonical: "/upes" },
};

const QUICK_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Admission Details", href: "#admission-details" },
  { label: "Eligibility & Fee", href: "#eligibility" },
  { label: "Scholarships", href: "#scholarships" },
  { label: "Student Outcomes", href: "#outcomes" },
  { label: "Apply Now", href: "#apply" },
];

const SCHOOLS = [
  { name: "School of Engineering", count: "32 programmes" },
  { name: "School of Computer Science", count: "18 programmes" },
  { name: "School of Business", count: "14 programmes" },
  { name: "School of Law", count: "9 programmes" },
  { name: "School of Health Sciences", count: "11 programmes" },
  { name: "School of Design", count: "8 programmes" },
  { name: "School of Modern Media", count: "7 programmes" },
  { name: "School of Liberal Studies", count: "12 programmes" },
];

const STATS = [
  { value: "19K+", label: "Students" },
  { value: "121+", label: "Programmes" },
  { value: "150+", label: "Specialisations" },
  { value: "1500+", label: "Faculty" },
];

const OUTCOMES = [
  {
    name: "Medha Mathur",
    line: "Placed at Bain & Company",
    note: "From Dental Surgery to Business Analytics — landing her dream consulting role.",
    photo: "/colleges/upes/student-2.jpg",
  },
  {
    name: "Abhishek Chamoli",
    line: "Multiple offers · CSE",
    note: "B.Tech Computer Science with offers from Microsoft, Amazon and Atlassian.",
    photo: "/colleges/upes/student-1.jpg",
  },
  {
    name: "Vidushi Joshi",
    line: "National Champion · 4× Gold",
    note: "Rifle shooter representing India while completing her undergraduate at UPES.",
    photo: "/colleges/upes/student-3.jpg",
  },
  {
    name: "Manik Garg",
    line: "₹1.3 Cr · Atlassian",
    note: "Senior Cyber Security Engineer at Atlassian — B.Tech (2016–20).",
    photo: "/colleges/upes/student-4.jpg",
  },
];

const PROGRAM_TABS = [
  {
    title: "Undergraduate",
    items: [
      "B.Tech Computer Science",
      "B.Tech AI/ML",
      "B.Tech Cyber Security",
      "B.Tech Petroleum Engineering",
      "BBA · BBA (Hons.)",
      "BA LLB · BBA LLB",
      "B.Des",
      "BA Liberal Studies",
    ],
  },
  {
    title: "Postgraduate",
    items: [
      "M.Tech AI / Cyber Security",
      "MBA (Core / Energy / Logistics)",
      "MBA Family Business",
      "LLM",
      "M.Des",
      "MA Public Policy",
    ],
  },
  {
    title: "Integrated & PhD",
    items: [
      "Integrated B.Tech – M.Tech",
      "Integrated BBA – MBA",
      "Integrated BA LLB",
      "PhD (full-time / part-time)",
    ],
  },
];

const FEE_ROWS = [
  { prog: "B.Tech (most specialisations)", fee: "₹3.85 – 4.95 L / year" },
  { prog: "B.Tech CSE / AI / Cyber", fee: "₹4.55 – 5.25 L / year" },
  { prog: "BBA · B.Com (Hons.)", fee: "₹3.40 – 4.10 L / year" },
  { prog: "BA LLB / BBA LLB", fee: "₹3.95 – 4.65 L / year" },
  { prog: "B.Des / B.Arch", fee: "₹4.10 – 4.85 L / year" },
  { prog: "MBA (2-year, full-time)", fee: "₹9.50 – 12.50 L total" },
];

const SCHOLARSHIPS = [
  {
    title: "Merit Scholarship",
    note: "Up to 100% tuition waiver based on 12th board / qualifying exam percentage.",
  },
  {
    title: "Sports & Performance",
    note: "Dedicated waivers for nationally-ranked athletes and cultural performers.",
  },
  {
    title: "Defence & Single Girl Child",
    note: "Special slabs for wards of defence personnel and single girl child applicants.",
  },
  {
    title: "UPESEAT Topper Award",
    note: "100% / 50% / 25% tuition waiver for top scorers in UPES Engineering Aptitude Test.",
  },
];

const FAQS = [
  {
    q: "What are the eligibility requirements for B.Tech at UPES?",
    a: "10+2 with Physics, Mathematics and English with at least 60% aggregate. Admission is via UPESEAT, JEE Main, SAT, or 12th board merit depending on the specialisation.",
  },
  {
    q: "How can I apply for UPES admissions 2026?",
    a: "Submit the application form on this page. An admission counsellor will call you with the next steps — entrance test scheduling, document checklist and fee deposit.",
  },
  {
    q: "Are there scholarships available?",
    a: "Yes. UPES offers merit, sports, single-girl-child and UPESEAT-topper scholarships. We map every slab you qualify for during counselling.",
  },
  {
    q: "What is the placement record at UPES?",
    a: "Highest package recorded ₹52 LPA in 2025 with 92% placement rate. 2,444 students placed across 800+ visiting recruiters including Amazon, Microsoft, Deloitte and ONGC.",
  },
];

export default function UpesPage() {
  return (
    <div className="upes-root">
      <header className="upes-header">
        <div className="upes-strip">
          <div className="upes-container flex items-center justify-between text-xs">
            <div className="hidden md:flex items-center gap-5 opacity-90">
              <Link href="#apply">Students</Link>
              <Link href="#apply">Parents</Link>
              <Link href="#contact">Contact</Link>
              <Link href="#about">About</Link>
            </div>
            <a href="#apply" className="upes-strip-cta">
              Applicant Login
            </a>
          </div>
        </div>
        <div className="upes-container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="upes-logo">
              <span className="upes-logo-mark" aria-hidden />
              UPES
            </span>
            <span className="upes-logo-tag">University of Tomorrow</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-[14px] font-semibold whitespace-nowrap">
            <a href="#admission-details">Academics</a>
            <a href="#admission-details" className="text-[#0b1f52]">
              Admissions
            </a>
            <a href="#outcomes">Outcomes</a>
            <a href="#outcomes">Placements</a>
            <a href="#scholarships">Scholarships</a>
          </nav>
          <a href="#apply" className="upes-apply-btn">
            Apply Now
          </a>
        </div>
      </header>

      <section className="upes-hero">
        <div className="upes-container relative">
          <p className="upes-breadcrumb">Home › Admissions</p>
          <div className="upes-hero-inner">
            <div className="upes-hero-copy">
              <p className="upes-hero-eyebrow">Admissions 2026 · Applications Open</p>
              <h1 className="upes-hero-title">
                Celebrating
                <br />
                <span className="upes-hero-accent">Success</span>
              </h1>
              <p className="upes-hero-sub">
                Highest package <strong>₹1.3 Cr</strong> · 800+ recruiters · 121
                programmes across 8 schools. Applications for UG, PG and PhD
                cohorts are now open.
              </p>
              <div className="upes-hero-cta">
                <a href="#apply" className="upes-btn-primary">
                  Apply Online
                </a>
                <a href="#admission-details" className="upes-btn-ghost">
                  View Programmes
                </a>
              </div>
            </div>
            <div className="upes-hero-card">
              <p className="upes-hero-card-eyebrow">Open Day 2026</p>
              <h3 className="upes-hero-card-title">Visit campus, meet faculty</h3>
              <p className="upes-hero-card-line">
                Walk through the labs, classrooms and hostels. Talk to
                programme directors. Saturdays in December–February.
              </p>
              <a href="#apply" className="upes-hero-card-cta">
                Register Now →
              </a>
            </div>
          </div>
        </div>
        <div className="upes-openday-strip">
          <div className="upes-container flex items-center justify-center gap-3 text-sm font-semibold">
            <span>OPEN DAY 2026</span>
            <span className="upes-dot" />
            <a href="#apply" className="text-[var(--upes-yellow)] underline">
              Register Now
            </a>
          </div>
        </div>
      </section>

      <section className="upes-pageheading">
        <div className="upes-container">
          <h2 className="upes-h1">Admissions</h2>
          <p className="upes-pageheading-sub">
            Let&apos;s get you ready for your career journey. Find out more
            about selection and eligibility criteria, application deadlines,
            important dates and admissions alerts.
          </p>
        </div>
      </section>

      <nav className="upes-jump">
        <div className="upes-container flex flex-wrap gap-x-8 gap-y-3">
          {QUICK_LINKS.map((q) => (
            <a key={q.href} href={q.href}>
              {q.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="overview" className="upes-section upes-section-white">
        <div className="upes-container grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2 className="upes-h2">Overview</h2>
            <p className="upes-body mt-5">
              At UPES, our focus is not just on educating students, but also on
              creating leaders of tomorrow. By opening doors to a world-class
              education, we empower our students to confidently shape their own
              futures across Engineering, Computer Science, Business, Law,
              Health Sciences, Design, Modern Media and Liberal Studies.
            </p>
            <p className="upes-body mt-4">
              UPES is a NAAC A-accredited and UGC-recognised university located
              in Dehradun, Uttarakhand. Established in 2003, it offers 121+
              industry-aligned programmes across 8 schools, with a 92%
              placement rate at flagship cohorts.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="upes-stats-card">
              {STATS.map((s) => (
                <div key={s.label} className="upes-stat">
                  <p className="upes-stat-value">{s.value}</p>
                  <p className="upes-stat-label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="admission-details" className="upes-section upes-section-gray">
        <div className="upes-container">
          <h2 className="upes-h2">Admission Details</h2>
          <p className="upes-body mt-4 max-w-3xl">
            Learn more about the varied courses offered under the
            Undergraduate, Postgraduate and Doctoral programs across our eight
            schools to find the one that matches your ambitions the best.
          </p>

          <div className="upes-program-grid">
            {PROGRAM_TABS.map((p) => (
              <article key={p.title} className="upes-program-card">
                <h3 className="upes-program-title">{p.title}</h3>
                <ul className="upes-program-list">
                  {p.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="upes-h3">8 Schools · One Campus</h3>
            <div className="upes-school-grid mt-6">
              {SCHOOLS.map((s) => (
                <div key={s.name} className="upes-school-card">
                  <p className="upes-school-name">{s.name}</p>
                  <p className="upes-school-count">{s.count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="eligibility" className="upes-section upes-section-white">
        <div className="upes-container grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <div className="upes-section-img">
              <Image
                src="/colleges/upes/lab.jpg"
                alt="Students at work in a UPES research lab"
                width={1200}
                height={800}
                className="upes-img-fill"
              />
            </div>
            <h2 className="upes-h2">Eligibility & Fee Structure</h2>
            <p className="upes-body mt-5">
              Eligibility, selection and fee components vary by programme. The
              indicative fee table below covers the most-applied undergraduate
              and postgraduate routes. A counsellor will share the full fee
              schedule, hostel and one-time charges based on your programme of
              choice.
            </p>
            <ul className="upes-bullets mt-6">
              <li>UPESEAT, JEE Main, CUET, SAT or 12th merit accepted</li>
              <li>Online application · entrance test · interview · offer</li>
              <li>Hostel and mess optional · accommodation guaranteed</li>
              <li>Lateral entry available for diploma holders</li>
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="upes-fee-card">
              <p className="upes-fee-title">Indicative Fee — 2026–27 intake</p>
              <table className="upes-fee-table">
                <thead>
                  <tr>
                    <th>Programme</th>
                    <th>Tuition Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {FEE_ROWS.map((r) => (
                    <tr key={r.prog}>
                      <td>{r.prog}</td>
                      <td>{r.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="upes-fee-foot">
                * Indicative ranges. Final fee depends on specialisation,
                campus and scholarship slab.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="scholarships" className="upes-section upes-section-gray">
        <div className="upes-container">
          <h2 className="upes-h2">Scholarships & Aid</h2>
          <p className="upes-body mt-4 max-w-3xl">
            UPES offers four broad scholarship categories. Most are
            performance-linked and continue for the full duration of the
            programme as long as the eligibility criteria are met.
          </p>
          <div className="upes-scholar-grid">
            {SCHOLARSHIPS.map((s) => (
              <div key={s.title} className="upes-scholar-card">
                <p className="upes-scholar-title">{s.title}</p>
                <p className="upes-scholar-note">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="outcomes" className="upes-section upes-section-white">
        <div className="upes-container">
          <h2 className="upes-h2">Student Outcomes</h2>
          <p className="upes-body mt-4 max-w-3xl">
            From global consulting offers to record packages and national
            sporting honours, our students go on to do remarkable things. A
            sample of recent stories.
          </p>
          <div className="upes-outcomes-grid">
            {OUTCOMES.map((o) => (
              <article key={o.name} className="upes-outcome-card">
                <div className="upes-outcome-photo">
                  <Image
                    src={o.photo}
                    alt=""
                    width={140}
                    height={140}
                    className="upes-outcome-img"
                  />
                </div>
                <h3 className="upes-outcome-name">{o.name}</h3>
                <p className="upes-outcome-line">{o.line}</p>
                <p className="upes-outcome-note">{o.note}</p>
              </article>
            ))}
          </div>
          <div className="upes-placement-meta">
            <div>
              <p className="upes-stat-value">₹52 L</p>
              <p className="upes-stat-label">Highest package · 2025</p>
            </div>
            <div>
              <p className="upes-stat-value">800+</p>
              <p className="upes-stat-label">Recruiters visited</p>
            </div>
            <div>
              <p className="upes-stat-value">2,444</p>
              <p className="upes-stat-label">Students placed in 2025</p>
            </div>
            <div>
              <p className="upes-stat-value">92%</p>
              <p className="upes-stat-label">Placement rate</p>
            </div>
          </div>
        </div>
      </section>

      <section id="apply" className="upes-section upes-section-apply">
        <div className="upes-container grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 text-white">
            <p className="upes-eyebrow-light">Application Form</p>
            <h2 className="upes-h2 upes-h2-light">
              Begin your UPES application
            </h2>
            <p className="upes-body-light mt-5">
              Tell us a few details and a senior admission counsellor will call
              you within the hour with the entrance test schedule, eligibility
              check and document checklist.
            </p>
            <ul className="upes-bullets-light mt-6">
              <li>121+ programmes · 8 schools · single online application</li>
              <li>Entrance: UPESEAT, JEE Main, CUET, SAT or 12th merit</li>
              <li>Scholarships up to 100% tuition waiver · merit & sports</li>
              <li>Hostel, mess and transport application included</li>
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="upes-form-card">
              <h3 className="upes-form-title">Apply for UPES Admission 2026</h3>
              <p className="upes-form-sub">
                Free counselling · No application fee at enquiry stage
              </p>
              <ThemedLeadForm
                university="UPES"
                programs={[
                  "B.Tech Computer Science",
                  "B.Tech AI/ML",
                  "B.Tech Cyber Security",
                  "B.Tech Petroleum",
                  "B.Tech (Other)",
                  "BBA / BBA (Hons.)",
                  "BA LLB / BBA LLB",
                  "B.Des",
                  "BA Liberal Studies",
                  "MBA",
                  "M.Tech",
                  "PhD",
                  "Not sure yet",
                ]}
                buttonLabel="Submit Application"
                successText="A senior UPES admission counsellor will reach out shortly with the entrance test schedule and document checklist."
                classes={{
                  form: "space-y-4",
                  field: "block",
                  label: "block text-xs font-semibold tracking-wider uppercase text-[#0b1f52] mb-1.5",
                  select:
                    "w-full px-3.5 py-2.5 border border-[#cbd5e1] rounded-md bg-white text-[15px] text-[#0b1f52] focus:outline-none focus:border-[#0b1f52] focus:ring-2 focus:ring-[#0b1f52]/15",
                  button:
                    "w-full bg-[#0b1f52] hover:bg-[#091840] text-white py-3 rounded-md font-bold tracking-wide uppercase text-sm transition-colors",
                  consent:
                    "flex gap-2.5 items-start text-xs text-[#445]",
                  error: "text-xs text-[#b91c1c] mt-1",
                  success:
                    "p-6 rounded-md bg-[#f0f4fa] border-l-4 border-[#0b1f52]",
                  successTitle:
                    "font-bold text-lg text-[#0b1f52] font-[family-name:'Saira_Condensed','Saira_SemiCondensed',sans-serif]",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="upes-section upes-section-white">
        <div className="upes-container">
          <h2 className="upes-h2">Frequently Asked Questions</h2>
          <div className="upes-faqs">
            {FAQS.map((f) => (
              <details key={f.q} className="upes-faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="upes-footer">
        <div className="upes-container">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <p className="upes-footer-logo">UPES</p>
              <p className="upes-footer-tag">University of Tomorrow</p>
              <p className="upes-footer-line mt-4">
                Energy Acres, Bidholi via Premnagar, Dehradun, Uttarakhand —
                248007
              </p>
            </div>
            <div>
              <p className="upes-footer-head">Admissions</p>
              <p className="upes-footer-line">
                Helpline · 1800 102 8737
                <br />
                Email · enrolments@upes.ac.in
              </p>
            </div>
            <div>
              <p className="upes-footer-head">Quick Links</p>
              <ul className="upes-footer-links">
                <li>
                  <a href="#admission-details">Admission Details</a>
                </li>
                <li>
                  <a href="#scholarships">Scholarships</a>
                </li>
                <li>
                  <a href="#outcomes">Placements</a>
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
          <div className="upes-footer-bar">
            <p>© {new Date().getFullYear()} UPES Admissions. All rights reserved.</p>
            <p className="opacity-70">
              An admission information page · NAAC A · UGC Recognised
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
*/
