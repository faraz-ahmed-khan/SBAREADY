import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-warm bg-surface px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-text-light">
        <p>
          Misconi USA is the Readiness Authority™. Misconi USA does not provide
          SBA services. {SITE_NAME} is an informational directory of SBA partner
          categories.
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-2">
          <Link href="/contact" className="font-medium text-navy link-gold-underline">
            Contact
          </Link>
          <span className="text-gray-mid" aria-hidden>
            •
          </span>
          <Link href="/terms" className="font-medium text-navy link-gold-underline">
            Terms & Policies
          </Link>
        </p>
      </div>
    </footer>
  );
}
