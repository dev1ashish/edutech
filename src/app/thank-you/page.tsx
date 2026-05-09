import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank you · We'll call you shortly",
  description:
    "Your counselling request has been received. A senior counsellor will reach out shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="flex-1 flex items-center">
      <div className="container-x py-24 md:py-32 max-w-3xl">
        <span className="rule-ornament">Thank you</span>
        <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.02] text-[color:var(--forest-deep)]">
          A counsellor will{" "}
          <span className="font-italic-serif">call you shortly.</span>
        </h1>
        <p className="mt-7 text-lg text-[color:var(--ink-soft)] leading-relaxed">
          We&apos;ve received your details. Expect a call from our Dehradun
          office within the hour during business hours, or first thing tomorrow
          morning. Until then, you can chat with us on WhatsApp.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
              "Hi, I just submitted the counselling form."
            )}`}
            className="btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open WhatsApp now
          </a>
          <Link href="/" className="btn-secondary">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
