import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/constants";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SBAReady.org for general questions.",
};

export default function ContactPage() {
  return (
    <PageShell title="Contact SBAReady.org">
      <p>For general questions about SBAReady.org, email:</p>
      <p className="mt-2">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-lg font-semibold text-gold link-gold-underline"
        >
          {CONTACT_EMAIL}
        </a>
      </p>
      <p className="mt-6 text-sm">
        SBAReady.org does not provide SBA services, readiness evaluation, or
        application support.
      </p>
      <p className="mt-8">
        <Link href="/" className="text-sm font-semibold text-gold link-gold-underline">
          ← Return home
        </Link>
      </p>
    </PageShell>
  );
}
