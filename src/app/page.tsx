import type { Metadata } from "next";
import { UUPageContent } from "@/components/college/UUPageContent";
import "./uttaranchal-university/uu.css";

export const metadata: Metadata = {
  title: "Uttaranchal University Admissions 2026 — Apply Online",
  description:
    "Apply for Uttaranchal University Dehradun 2026–27. 100+ industry-centric programmes, ₹1.5 Cr highest international package, 750+ recruiters, NAAC A+ accreditation, scholarships up to 65%.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <UUPageContent />;
}
