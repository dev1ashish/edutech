import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ThemedLeadForm } from "@/components/college/ThemedLeadForm";
import { UULeadPopup } from "@/components/college/UULeadPopup";
import { UUCountUp } from "@/components/college/UUCountUp";
import { UUHeroSlider } from "@/components/college/UUHeroSlider";
import { UUProgramFinder } from "@/components/college/UUProgramFinder";
import { UUStickyCTA } from "@/components/college/UUStickyCTA";
import "./uu.css";

export const metadata: Metadata = {
  title: "Uttaranchal University Admissions 2026 — Apply Online",
  description:
    "Apply for Uttaranchal University Dehradun 2026–27. 100+ industry-centric programmes, ₹1.5 Cr highest international package, 1200+ recruiters, NAAC A+ accreditation, scholarships up to 65%.",
  alternates: { canonical: "/uttaranchal-university" },
};

const TOP_COUNTERS = [
  { to: 13, suffix: "+", label: "Years of Educational Experience" },
  { to: 100, suffix: "+", label: "Multidisciplinary Programs" },
  { to: 1200, suffix: "+", label: "Companies Visited For Placement" },
  { to: 25, suffix: "K+", label: "Glorious Alumni" },
];

const AWARDS = [
  { mark: "NAAC", note: "Grade A+" },
  { mark: "UGC", note: "Recognised" },
  { mark: "AICTE", note: "Approved" },
  { mark: "BCI", note: "Bar Council" },
  { mark: "PCI", note: "Pharmacy Council" },
  { mark: "INC", note: "Nursing Council" },
  { mark: "ICAR", note: "Agriculture" },
  { mark: "AIU", note: "Member" },
  { mark: "QS", note: "I-Gauge Diamond" },
  { mark: "ARIIA", note: "Innovation Achiever" },
];

const WHY_CARDS = [
  {
    icon: (
      <path d="M3 21V9l9-6 9 6v12h-6v-7H9v7H3z" />
    ),
    title: "42-acre Living Campus",
    body: "Wooded grounds, dedicated boys & girls hostels, walkable distances — designed for focused life on campus.",
  },
  {
    icon: (
      <>
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </>
    ),
    title: "1,200+ Recruiters",
    body: "Long-running industry MoUs and an in-house placement cell with 92% reporting rate on the flagship batches.",
  },
  {
    icon: <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />,
    title: "Mentorship That Sticks",
    body: "One faculty mentor per student, the entire programme. Career-track reviews every quarter from year one.",
  },
  {
    icon: <path d="M3 12l2-2 4 4 8-8 4 4-12 12-6-6z" />,
    title: "Up to 65% Scholarship",
    body: "Early-Bird, merit, sports, single-girl-child and defence slabs that stack. We map every slab you qualify for.",
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2c2.5 3 4 6 4 10s-1.5 7-4 10c-2.5-3-4-6-4-10s1.5-7 4-10z" />
      </>
    ),
    title: "Global Immersion",
    body: "Semester-abroad and short immersions in the US, UK, Singapore, Australia, Germany and Dubai with active university partners.",
  },
  {
    icon: <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l7-3 7 3z" />,
    title: "100+ Programmes",
    body: "UG, PG and Doctoral programmes across Engineering, Management, Law, Pharmacy, Agriculture, Health, Liberal Arts and Design.",
  },
  {
    icon: (
      <>
        <path d="M12 6.253v13" />
        <path d="M12 6.253C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </>
    ),
    title: "Industry-Reviewed Curriculum",
    body: "Curriculum updated annually with industry experts. Live industry projects from second year. Capstone with a real client deliverable.",
  },
  {
    icon: (
      <>
        <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.965c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.785.57-1.84-.196-1.54-1.118l1.287-3.965a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
      </>
    ),
    title: "Sports & Cultural Life",
    body: "Football, cricket, basketball, badminton, athletics + 30+ student clubs. All-India University Football champions 2024.",
  },
];

const ACCREDITATIONS = [
  { tag: "NAAC", label: "Grade A+" },
  { tag: "UGC", label: "Recognised under Section 2(f)" },
  { tag: "AICTE", label: "Approved Programmes" },
  { tag: "BCI", label: "Bar Council of India" },
  { tag: "PCI", label: "Pharmacy Council of India" },
  { tag: "INC", label: "Indian Nursing Council" },
  { tag: "ICAR", label: "Agriculture Accreditation" },
  { tag: "NCTE", label: "Teacher Education" },
  { tag: "COA", label: "Council of Architecture" },
  { tag: "AIU", label: "Association of Indian Universities" },
  { tag: "QS", label: "I-Gauge Diamond Rating" },
  { tag: "ARIIA", label: "Innovation Achiever" },
];

const TOP_FACULTY = [
  {
    name: "Prof. Aarav Mehrotra",
    field: "AI & Machine Learning",
    note: "200+ citations on adversarial robustness; named in the world's top 2% scientists list (Stanford / Elsevier, 2024).",
    photo: "/colleges/uu/faculty-1.jpg",
  },
  {
    name: "Dr. Neeti Sharma",
    field: "Pharmaceutical Sciences",
    note: "Lead investigator on three DST-funded projects on targeted drug delivery; 6 patents in the last four years.",
    photo: "/colleges/uu/faculty-2.jpg",
  },
  {
    name: "Prof. Rohit Bisht",
    field: "Cyber Security",
    note: "DRDO and MeitY consultant; head of UU's Centre of Excellence in Cyber Security. 90+ peer-reviewed papers.",
    photo: "/colleges/uu/faculty-3.jpg",
  },
  {
    name: "Dr. Sneha Verma",
    field: "Agricultural Biotechnology",
    note: "ICAR Young Scientist Award 2023; leads the Bioinformatics CoE established with the State Science & Technology Council.",
    photo: "/colleges/uu/faculty-4.jpg",
  },
];

const ABOUT_PARAGRAPHS = [
  "Uttaranchal University was established in 2013 in Dehradun, the capital of Uttarakhand, with one premise — bring world-class education within reach of every student in the region and beyond. A decade later, we host more than 12,000 students from 28 Indian states and 14 countries across 100+ industry-centric programmes.",
  "The 42-acre Premnagar campus has grown into a self-contained learning city — twelve schools, twenty laboratories, two libraries, three auditoriums, separate hostels for boys and girls, a 400-metre athletics track and dedicated centres of excellence in AI, Cyber Security, Bioinformatics and Pharmaceutical Sciences.",
  "Curriculum here is reviewed annually with industry experts; live industry projects begin in the second year; capstones are graded by real clients. By the time our students reach final-year placements, their CVs already reflect work that recruiters care about — which is why a thousand-plus recruiters return to UU year after year.",
];

const PLACEMENT_STATS = [
  { value: "1200+", label: "Recruiters" },
  { value: "1.5 CR", label: "International Package" },
  { value: "55 LPA", label: "Domestic Package" },
  { value: "25K+", label: "Glorious Alumni in Top Corporates" },
];

const INFRASTRUCTURE = [
  {
    title: "Central Library",
    note: "Two-floor library with 1.2 lakh+ titles, e-journals and quiet zones.",
    img: "/colleges/uu/infra-library.jpg",
  },
  {
    title: "Smart Classrooms",
    note: "Studio-style classrooms with collaborative seating and digital boards.",
    img: "/colleges/uu/infra-classroom.jpg",
  },
  {
    title: "Computing Labs",
    note: "High-spec workstations across AI, Cyber, Cloud and Data Engineering labs.",
    img: "/colleges/uu/infra-lab2.jpg",
  },
  {
    title: "On-Campus Hostels",
    note: "Separate boys and girls hostels with mess, gym, laundry and 24×7 medical.",
    img: "/colleges/uu/infra-hostel.jpg",
  },
  {
    title: "1,500-seater Auditorium",
    note: "Centre stage for convocations, industry summits and cultural events.",
    img: "/colleges/uu/infra-audi.jpg",
  },
  {
    title: "Sports & Wellness",
    note: "Football, cricket, basketball, badminton courts and a 400m athletics track.",
    img: "/colleges/uu/infra-sports.jpg",
  },
];

const ACHIEVEMENTS = [
  {
    title: "Times Engineering Ranking",
    note: "Ranked among India's top 100 engineering institutions, three years in a row.",
    img: "/colleges/uu/ach-1.jpg",
  },
  {
    title: "Outlook ICARE Survey",
    note: "Top 10 in North India for Law and Pharmacy in the 2025 Outlook Rankings.",
    img: "/colleges/uu/ach-2.jpg",
  },
  {
    title: "AIU Convention Host",
    note: "Hosted the AIU North Zone Vice-Chancellors' Meet in 2024.",
    img: "/colleges/uu/ach-3.jpg",
  },
  {
    title: "Convocation 2025",
    note: "3,800+ degrees conferred · 412 PhDs across nine disciplines.",
    img: "/colleges/uu/ach-4.jpg",
  },
  {
    title: "Career Conclave",
    note: "200+ recruiters on campus · two-day placement drive · 1,100 offers in 48 hours.",
    img: "/colleges/uu/ach-5.jpg",
  },
  {
    title: "Sports Excellence",
    note: "All-India University Football champions 2024 · 11 athletes in national camps.",
    img: "/colleges/uu/ach-6.jpg",
  },
];

const TESTIMONIALS = [
  {
    name: "Deepa Pandey",
    program: "B.Tech CSE · Class of 2025",
    photo: "/colleges/uu/test-1.jpg",
    quote:
      "The campus, the mentors and the placement support — everything felt designed around how I wanted to grow. I joined a product team straight out of college.",
  },
  {
    name: "Ankita Sharma",
    program: "BBA · Class of 2024",
    photo: "/colleges/uu/test-2.jpg",
    quote:
      "From day one we did live projects with industry. By final year my CV was already full of real work — that made the placement interview easy.",
  },
  {
    name: "Siddhartha Kumar",
    program: "B.Pharm · Class of 2024",
    photo: "/colleges/uu/test-3.jpg",
    quote:
      "Research opportunities here are real, not paper. I co-authored a paper in my third year. The labs and faculty access changed my career.",
  },
  {
    name: "Ayush Thapa",
    program: "BA LLB · Class of 2025",
    photo: "/colleges/uu/test-4.jpg",
    quote:
      "Moot court culture is strong. We argued in 14 inter-university moots and won three. That trial-by-fire prep is why corporate firms picked us up.",
  },
  {
    name: "Gulnaaz Khan",
    program: "MBA · Class of 2024",
    photo: "/colleges/uu/test-5.jpg",
    quote:
      "Mentorship and global immersion were game-changing. My semester at the Singapore partner campus opened doors I didn't know existed.",
  },
];

const PARTNERS = [
  { name: "Google", short: "Goo" },
  { name: "Amazon", short: "Amz" },
  { name: "Accenture", short: "Acn" },
  { name: "Wipro", short: "Wip" },
  { name: "Cognizant", short: "Cog" },
  { name: "HCL", short: "HCL" },
  { name: "TCS", short: "TCS" },
  { name: "Tech Mahindra", short: "TMa" },
  { name: "Capgemini", short: "Cap" },
  { name: "Infosys", short: "Inf" },
  { name: "Maruti Suzuki", short: "Mar" },
  { name: "L&T", short: "L&T" },
  { name: "Bajaj", short: "Baj" },
  { name: "Apollo", short: "Apo" },
  { name: "ICICI", short: "ICI" },
  { name: "PwC", short: "PwC" },
];

const RESEARCH_STATS = [
  { to: 6000, suffix: "+", label: "Research Publications" },
  { to: 730, suffix: "+", label: "IPR Published (Patents · Copyrights · Designs · Trademarks)" },
  { to: 410, suffix: "+", label: "Book Chapters" },
  { to: 85, suffix: "+", label: "Student Patents" },
  { to: 160, suffix: "+", label: "IPR Grants" },
  { to: 12, suffix: "+", label: "International Projects" },
];

const INTELLECTUAL_ASSETS = [
  { to: 6000, suffix: "+", label: "Research Publications" },
  { to: 730, suffix: "+", label: "IPR Filed" },
  { to: 160, suffix: "+", label: "IPR Granted" },
  { to: 45, suffix: "+", label: "International IPR" },
  { to: 5, suffix: "+", label: "Technology Transfers" },
  { to: 20, suffix: "+", label: "Start-Ups Incubated" },
  { to: 90, suffix: "+", label: "Research Projects (Completed + Ongoing)" },
  { to: 410, suffix: "+", label: "Book Chapters Authored" },
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
      <UULeadPopup />
      <header className="uu-header">
        <div className="uu-container flex items-center justify-between gap-6 py-4">
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/colleges/uu/image.png"
              alt="Uttaranchal University · NAAC Grade A+"
              width={599}
              height={176}
              className="uu-logo-img"
              priority
            />
            <span className="uu-logo-text">
              <span className="block uu-logo-name">UTTARANCHAL</span>
              <span className="block uu-logo-name uu-logo-name-2">UNIVERSITY</span>
              <span className="block uu-logo-tag">DEHRADUN</span>
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

      <section className="uu-hero-wrap" id="hero">
        <UUHeroSlider />
        <div className="uu-hero-form-overlay">
          <div className="uu-form-card uu-hero-form-card">
            <p className="uu-form-eyebrow">Apply Now · Limited Seats</p>
            <h3 className="uu-form-title">2026–27 Admissions Form</h3>
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
                form: "space-y-3.5",
                field: "block",
                label:
                  "block text-[12px] font-semibold text-[#444] mb-1",
                select:
                  "w-full px-3 py-2 border border-[#d4d4d4] rounded-md bg-white text-[14px] text-[#222] focus:outline-none focus:border-[#4f46e5] focus:ring-2 focus:ring-[#4f46e5]/15",
                button:
                  "w-full bg-[#4f46e5] hover:bg-[#3b35b5] text-white py-2.5 rounded-md font-semibold text-[14px] tracking-wide transition-colors",
                consent:
                  "flex gap-2 items-start text-[11px] text-[#666] leading-snug",
                error: "text-[11px] text-[#b91c1c] mt-0.5",
                success:
                  "p-5 rounded-md bg-[#fef3eb] border-l-4 border-[#f47b20]",
                successTitle: "font-bold text-base text-[#222]",
              }}
            />
          </div>
        </div>
      </section>

      <section className="uu-section uu-section-counters" id="counters">
        <div className="uu-container">
          <div className="uu-counters-grid">
            {TOP_COUNTERS.map((c) => (
              <div key={c.label} className="uu-counter">
                <p className="uu-counter-val">
                  <UUCountUp to={c.to} suffix={c.suffix} />
                </p>
                <p className="uu-counter-label">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="uu-section uu-section-awards" id="awards">
        <div className="uu-container">
          <p className="uu-eyebrow">Approvals · Accreditation · Memberships · Rankings</p>
          <h2 className="uu-h2">
            RECOGNISED BY EVERY BODY
            <br />
            <span className="uu-italic">THAT MATTERS IN INDIAN HIGHER ED</span>
          </h2>
          <div className="uu-awards-grid">
            {AWARDS.map((a) => (
              <div key={a.mark} className="uu-award">
                <span className="uu-award-mark">{a.mark}</span>
                <span className="uu-award-note">{a.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="uu-section uu-section-soft" id="about-uu">
        <div className="uu-container uu-about-grid">
          <div className="uu-about-img">
            <Image
              src="/colleges/uu/about-side.jpg"
              alt="UU campus aerial view"
              width={1400}
              height={1000}
              className="uu-img-fill"
            />
          </div>
          <div className="uu-about-copy">
            <p className="uu-eyebrow">Uttaranchal University Dehradun</p>
            <h2 className="uu-h2">
              FOR THE EXCELLENCE
              <br />
              <span className="uu-italic">WITHIN &lsquo;U&rsquo;</span>
            </h2>
            {ABOUT_PARAGRAPHS.map((p, i) => (
              <p key={i} className="uu-body mt-5">
                {p}
              </p>
            ))}
            <div className="uu-cta-row" style={{ marginTop: "2rem" }}>
              <a href="#apply" className="uu-btn-orange">
                Begin Application
              </a>
              <a href="#programmes" className="uu-btn-outline">
                Browse Programmes
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="uu-section" id="why">
        <div className="uu-container">
          <p className="uu-eyebrow">Why Uttaranchal University?</p>
          <h2 className="uu-h2">
            EIGHT REASONS STUDENTS PICK UU
            <br />
            <span className="uu-italic">AND STICK AROUND</span>
          </h2>
          <div className="uu-why-icons">
            {WHY_CARDS.map((w) => (
              <article key={w.title} className="uu-why-icon-card">
                <span className="uu-why-icon" aria-hidden>
                  <svg
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {w.icon}
                  </svg>
                </span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
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
          <p className="uu-eyebrow">Find a Programme</p>
          <h2 className="uu-h2">
            100+ INDUSTRY-CENTRIC PROGRAMMES
            <br />
            <span className="uu-italic">FILTER. COMPARE. APPLY.</span>
          </h2>
          <p className="uu-body mt-4 max-w-3xl">
            Filter by level and stream, or search the catalogue directly. Each
            programme card shows duration and seat intake. Click apply to start
            the form pre-filled for that programme.
          </p>
          <UUProgramFinder />
        </div>
      </section>

      <section id="programmes-legacy" className="uu-section uu-section-soft" style={{ display: "none" }}>
        <div className="uu-container">
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

      <section id="infrastructure" className="uu-section">
        <div className="uu-container">
          <p className="uu-eyebrow">World-class Infrastructure</p>
          <h2 className="uu-h2">
            BUILT FOR FOCUSED LEARNING:
            <br />
            <span className="uu-italic">A 42-ACRE LIVING CAMPUS</span>
          </h2>
          <div className="uu-infra-grid">
            {INFRASTRUCTURE.map((i) => (
              <article key={i.title} className="uu-infra-card">
                <div className="uu-infra-img">
                  <Image
                    src={i.img}
                    alt={i.title}
                    width={900}
                    height={600}
                    className="uu-img-fill"
                  />
                </div>
                <div className="uu-infra-body">
                  <h3>{i.title}</h3>
                  <p>{i.note}</p>
                </div>
              </article>
            ))}
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

      <section id="achievements" className="uu-section">
        <div className="uu-container">
          <p className="uu-eyebrow">Outstanding Achievements</p>
          <h2 className="uu-h2">
            ACHIEVEMENTS THAT SET US APART:
            <br />
            <span className="uu-italic">RECOGNISED · RANKED · CELEBRATED</span>
          </h2>
          <div className="uu-ach-grid">
            {ACHIEVEMENTS.map((a) => (
              <article key={a.title} className="uu-ach-card">
                <div className="uu-ach-img">
                  <Image
                    src={a.img}
                    alt={a.title}
                    width={900}
                    height={700}
                    className="uu-img-fill"
                  />
                  <div className="uu-ach-overlay">
                    <h3>{a.title}</h3>
                    <p>{a.note}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="uu-section uu-section-banner">
        <div className="uu-banner-full">
          <Image
            src="/colleges/uu/pro-training.jpg"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
          <div className="uu-banner-full-overlay">
            <div className="uu-container">
              <p className="uu-eyebrow uu-eyebrow-light">Industry-Top</p>
              <h2 className="uu-h2 uu-h2-light">
                BE IN DEMAND WITH OUR
                <br />
                <span className="uu-italic">PROFESSIONAL TRAINING</span>
              </h2>
              <p className="uu-body-light mt-5">
                Pre-placement training from semester three. Aptitude, group
                discussions, coding interviews, mock placement rounds and
                industry mentorship — built into the timetable, not bolted on.
              </p>
              <div className="uu-cta-row">
                <a href="#apply" className="uu-btn-orange">
                  Begin Application
                </a>
                <a href="#placements" className="uu-btn-outline-light">
                  See Placement Record
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="intellectual" className="uu-section uu-section-dark">
        <div className="uu-container">
          <p className="uu-eyebrow uu-eyebrow-light">Our Intellectual Assets</p>
          <h2 className="uu-h2 uu-h2-light">
            RESEARCH THAT REACHES
            <br />
            <span className="uu-italic">BEYOND THE CLASSROOM</span>
          </h2>
          <p className="uu-body-light mt-5">
            Centres of Excellence in AI, Cyber Security, Bioinformatics and
            Pharmaceutical Sciences run real research programmes that students
            join from year two. Every metric below is what our faculty and
            students have contributed since 2017.
          </p>
          <div className="uu-research-grid">
            {INTELLECTUAL_ASSETS.map((r) => (
              <div key={r.label} className="uu-research-tile">
                <p className="uu-research-val">
                  <UUCountUp to={r.to} suffix={r.suffix} />
                </p>
                <p className="uu-research-label">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="top-scientists" className="uu-section">
        <div className="uu-container">
          <div className="uu-top2-grid">
            <div className="uu-top2-copy">
              <p className="uu-eyebrow">World&apos;s Top 2% Scientists</p>
              <h2 className="uu-h2">
                FOUR UU FACULTY MEMBERS
                <br />
                <span className="uu-italic">IN THE GLOBAL TOP 2%</span>
              </h2>
              <p className="uu-body mt-5">
                The Stanford / Elsevier &lsquo;World&apos;s Top 2% Scientists&rsquo;
                list ranks researchers globally by citation impact across 22
                scientific fields. Four of our faculty members appear in the
                latest edition — across AI, Pharmacy, Cyber Security and
                Agricultural Biotech.
              </p>
              <ul className="uu-top2-points mt-6">
                <li>9 active Centres of Excellence</li>
                <li>200+ active research projects, ₹42 Cr+ external funding</li>
                <li>Memorandums with 50+ international universities</li>
                <li>Open faculty office hours from year one</li>
              </ul>
            </div>
            <div className="uu-top2-cards">
              {TOP_FACULTY.map((f) => (
                <article key={f.name} className="uu-top2-card">
                  <div className="uu-top2-photo">
                    <Image
                      src={f.photo}
                      alt={f.name}
                      width={400}
                      height={400}
                      className="uu-img-fill"
                    />
                  </div>
                  <h3>{f.name}</h3>
                  <p className="uu-top2-field">{f.field}</p>
                  <p className="uu-top2-note">{f.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="accreditation" className="uu-section uu-section-soft">
        <div className="uu-container">
          <p className="uu-eyebrow">Accreditation · Approvals · Memberships</p>
          <h2 className="uu-h2">
            CERTIFICATIONS THAT MEAN
            <br />
            <span className="uu-italic">REAL ACADEMIC STANDING</span>
          </h2>
          <div className="uu-accred-wall">
            {ACCREDITATIONS.map((a) => (
              <div key={a.tag} className="uu-accred-cell">
                <span className="uu-accred-tag">{a.tag}</span>
                <span className="uu-accred-label">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="uu-section">
        <div className="uu-container">
          <p className="uu-eyebrow">Student Voices</p>
          <h2 className="uu-h2">
            WHAT OUR STUDENTS
            <br />
            <span className="uu-italic">HAVE TO SAY</span>
          </h2>
          <div className="uu-test-grid">
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="uu-test-card">
                <div className="uu-test-photo">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={300}
                    height={300}
                    className="uu-img-fill"
                  />
                </div>
                <p className="uu-test-quote">&ldquo;{t.quote}&rdquo;</p>
                <p className="uu-test-name">{t.name}</p>
                <p className="uu-test-program">{t.program}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="uu-section uu-section-soft">
        <div className="uu-container">
          <p className="uu-eyebrow">Industry Partners</p>
          <h2 className="uu-h2">
            CAREERS BUILT WITH
            <br />
            <span className="uu-italic">INDIA&apos;S LEADING EMPLOYERS</span>
          </h2>
          <div className="uu-partners-grid">
            {PARTNERS.map((p) => (
              <div key={p.name} className="uu-partner">
                <span className="uu-partner-mark" aria-hidden>
                  {p.short}
                </span>
                <p className="uu-partner-name">{p.name}</p>
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
      <UUStickyCTA />
    </div>
  );
}
