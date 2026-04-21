import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for Misconi Network educational content.",
};

export default function TermsPage() {
  return (
    <div className="bg-warm/30 px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
        />
        <h1 className="mt-8 font-display text-[40px] font-bold text-navy">
          Terms of Use
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-text-light">
          Educational content is provided &quot;as is&quot; without warranties. This site does
          not provide legal, tax, or eligibility determinations. Official requirements
          appear on{" "}
          <a
            href="https://www.sba.gov"
            className="link-gold-underline text-gold"
            target="_blank"
            rel="noopener noreferrer"
          >
            SBA.gov
          </a>
          .
        </p>
        <Link href="/" className="mt-10 inline-flex text-sm font-semibold text-gold link-gold-underline">
          Return home →
        </Link>
      </div>
    </div>
  );
}
