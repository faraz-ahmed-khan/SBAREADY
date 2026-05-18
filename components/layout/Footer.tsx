import Link from "next/link";
import { GYBS_CTA_LABEL, GYBS_URL } from "@/lib/constants";

const quick = [
  { href: "/", label: "Home" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/learning", label: "Learning" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
];

const resources = [
  { href: "/resources#articles", label: "Articles" },
  { href: "/resources#guides", label: "Guides" },
  { href: "/resources#toolkits", label: "Toolkits" },
  { href: "/learning", label: "Learning Modules" },
  { href: "/resources#checklists", label: "Checklists" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="border-t border-gold/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
          <div>
            <p className="font-display text-xl">MISCONI NETWORK</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Educational platform for SBA readiness and business preparation.
            </p>
            <div className="mt-6 flex items-center gap-4 text-gold">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M6.94 6.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM5 8.75h3.88V20H5V8.75Zm7.38 0h3.72v1.54h.05c.52-.99 1.8-2.04 3.7-2.04 3.96 0 4.69 2.6 4.69 6v6.95h-3.88v-6.17c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.36 1.6-2.36 3.25V20h-3.88V8.75Z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="X (Twitter)"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M18.244 3.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 3.25H8.08l4.713 6.231 5.51-6.231zm-1.161 17.52h1.833L7.084 5.126H5.117l12.086 15.644z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                aria-label="Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M13.5 22v-8.25h2.75l.41-3.14H13.5V9.35c0-.9.25-1.51 1.55-1.51h1.65V5.04c-.8-.08-1.62-.12-2.44-.12-2.46 0-4.14 1.5-4.14 4.25v2.04H7v3.14h2.12V22h4.38z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="caption-label text-gold">Quick links</p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {quick.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-gold-underline hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="caption-label text-gold">Resources</p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-gold-underline hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="caption-label text-gold">Readiness check</p>
              <p className="mt-2 text-sm text-white/70">
                Use the external diagnostic to evaluate documentation posture before
                formal program steps.
              </p>
              <a
                href={GYBS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-gold link-gold-underline hover:text-white"
              >
                {GYBS_CTA_LABEL} →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between lg:px-10">
            <p>© 2025 Misconi Network. Part of the Misconi USA Ecosystem.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy" className="link-gold-underline hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="link-gold-underline hover:text-white">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
