"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/layout/MobileNav";

const links = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms & Policies" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-warm bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
          <Link
            href="/"
            className="font-display text-lg font-semibold text-navy md:text-xl"
          >
            {SITE_NAME}
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {links.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "text-sm font-medium text-navy transition-colors",
                    active ? "text-gold" : "hover:text-gold",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="rounded-full p-2 text-navy md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
