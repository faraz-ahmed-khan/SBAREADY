import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/constants";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Terms & Policies",
  description: "Terms of use, privacy, disclaimer, and accessibility for SBAReady.org.",
};

export default function TermsPage() {
  return (
    <PageShell title="Terms & Policies">
      <section>
        <h2 className="font-display text-2xl font-semibold text-navy">Terms of Use</h2>
        <div className="section-divider" />
        <p className="mt-4">
          SBAReady.org provides informational content about SBA partner categories
          for educational purposes only. Content is provided &quot;as is&quot; without
          warranties. This site does not provide legal, tax, eligibility, or
          application determinations.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold text-navy">Privacy Notice</h2>
        <div className="section-divider" />
        <p className="mt-4">
          SBAReady.org is an informational directory. We do not operate user
          accounts or collect information through forms on this site. If you
          contact us by email, we use your message only to respond to your
          inquiry.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold text-navy">Disclaimer</h2>
        <div className="section-divider" />
        <p className="mt-4">
          SBAReady.org is an informational directory. It is not affiliated with
          the U.S. Small Business Administration. Misconi USA does not provide
          SBA services. Official program requirements and determinations come
          from the SBA and authorized partners.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold text-navy">
          Accessibility Statement
        </h2>
        <div className="section-divider" />
        <p className="mt-4">
          We aim to make SBAReady.org accessible to all users. If you encounter
          accessibility barriers, please contact us at{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-gold link-gold-underline"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          and we will work to address your concern.
        </p>
      </section>

      <p className="mt-8">
        <Link href="/" className="text-sm font-semibold text-gold link-gold-underline">
          ← Return home
        </Link>
      </p>
    </PageShell>
  );
}
