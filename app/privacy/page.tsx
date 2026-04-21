import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy practices for Misconi Network.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-warm/30 px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        />
        <h1 className="mt-8 font-display text-[40px] font-bold text-navy">
          Privacy Policy
        </h1>
        <p className="mt-6 text-sm leading-relaxed text-text-light">
          Misconi Network is an educational site. This placeholder outlines the intent to
          minimize data collection—finalize with qualified counsel before publication.
        </p>
        <ul className="mt-6 list-disc space-y-3 pl-6 text-sm text-text-light">
          <li>We do not operate accounts or scoring logic on this domain.</li>
          <li>Newsletter emails are processed through a future provider integration.</li>
          <li>Contact submissions are handled via email stubs until integrated.</li>
        </ul>
        <Link href="/" className="mt-10 inline-flex text-sm font-semibold text-gold link-gold-underline">
          Return home →
        </Link>
      </div>
    </div>
  );
}
