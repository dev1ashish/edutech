import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import "../uttaranchal-university/uu.css";

export const metadata: Metadata = {
  title: "Thank you · We'll call you shortly",
  description:
    "Your counselling request has been received. A senior counsellor will reach out shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="uu-root uu2-root min-h-screen flex flex-col">
      {/* Header — Replicated exactly from UU landing page */}
      <header className="uu2-header">
        <div className="uu2-header-inner flex justify-center py-6">
          <Link href="/uttaranchal-university" className="uu2-brand">
            <Image
              src="/colleges/uu/UU-Logo-Naac-Nirf.png"
              alt="Uttaranchal University · NAAC Grade A+"
              width={599}
              height={176}
              className="uu2-brand-img h-14 md:h-20 w-auto"
              priority
            />
          </Link>
        </div>
      </header>

      {/* Main Content — Styled with UU landing page aesthetics */}
      <main className="flex-1 flex items-center justify-center py-20 bg-[#f8f9fc]">
        <div className="max-w-4xl text-center px-6">
          <div className="uu2-form-eyebrow mb-6">
            Submission Received
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl leading-tight text-[#1c2660] font-extrabold tracking-tight">
            You&apos;ve made the first move. <br />
            <span className="text-[#f47b20] italic">Now, let&apos;s make it count.</span>
          </h1>

          <p className="mt-8 text-xl text-[#4b5563] leading-relaxed max-w-2xl mx-auto font-medium">
            We&apos;ve received your details. One of our senior admission counsellors 
            will reach out to you <strong>very soon</strong> to discuss your eligibility, 
            scholarship slabs, and the next steps for Uttaranchal University.
          </p>

        </div>
      </main>

      {/* Footer — Replicated from UU landing page */}
      <footer className="uu-footer">
        <div className="uu-container">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5 text-left">
              <p className="uu-footer-name">UTTARANCHAL UNIVERSITY</p>
              <p className="uu-footer-tag">DEHRADUN · NAAC A+</p>
              <p className="uu-footer-line mt-4">
                Premnagar, Dehradun, Uttarakhand – 248007
              </p>
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
