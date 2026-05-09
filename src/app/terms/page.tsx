import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing your use of Edutech Solutions and our counselling services.",
};

export default function TermsPage() {
  return (
    <main className="flex-1">
      <article className="container-x py-20 md:py-28 max-w-3xl">
        <Link
          href="/"
          className="text-sm text-[color:var(--muted)] hover:text-[color:var(--forest-deep)]"
        >
          ← Back to home
        </Link>
        <h1 className="mt-6 font-display text-5xl text-[color:var(--forest-deep)] leading-tight">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-[color:var(--muted)]">
          Last updated · {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="prose prose-stone mt-10 leading-[1.75] text-[color:var(--ink-soft)] space-y-5">
          <p>
            By using {SITE.name} or submitting an enquiry through this site,
            you agree to the following terms.
          </p>

          <h2 className="font-display text-2xl text-[color:var(--forest-deep)] mt-10">
            Independent counselling partner
          </h2>
          <p>
            {SITE.name} is an independent admission counselling and
            career-guidance partner. Unless otherwise stated in writing, we
            are not owned by or affiliated with the universities listed on
            this site. We are compensated by the universities only when a
            candidate enrols, and never by the student.
          </p>

          <h2 className="font-display text-2xl text-[color:var(--forest-deep)] mt-10">
            Information accuracy
          </h2>
          <p>
            Programme details, fees, placement statistics and accreditations
            are aggregated from publicly available 2025 sources at the time of
            writing. Universities may change these without notice; please
            verify any decision-relevant fact directly with the institution.
          </p>

          <h2 className="font-display text-2xl text-[color:var(--forest-deep)] mt-10">
            No guarantees
          </h2>
          <p>
            We do not guarantee admission, scholarships, placements, salary
            outcomes or any other specific result. Outcomes vary by individual
            candidate and depend on the candidate&apos;s qualifications and
            the university&apos;s independent decisions.
          </p>

          <h2 className="font-display text-2xl text-[color:var(--forest-deep)] mt-10">
            Contact
          </h2>
          <p>
            Questions? Write to{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="underline underline-offset-2 decoration-[color:var(--gold)]"
            >
              {SITE.email}
            </a>
            .
          </p>
        </div>
      </article>
    </main>
  );
}
