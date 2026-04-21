"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { GYBS_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { SearchBar } from "@/components/ui/SearchBar";
import { MobileNav } from "@/components/layout/MobileNav";

const links = [
  { href: "/", label: "Home" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/learning", label: "Learning" },
  { href: "/resources", label: "Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  useScrollPosition(60);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm shadow-navy/10 transition-[background,box-shadow] duration-300 ease-out"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 lg:px-10">
          <Link href="/" className="group flex items-center" aria-label="Home">
            <Image
              src="/sba-ready-logo.png"
              alt="SBA Ready logo"
              width={52}
              height={52}
              className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/40"
              priority
            />
          </Link>

          <nav
            className="hidden items-center gap-6 md:flex lg:gap-8"
            aria-label="Primary"
          >
            {links.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "font-sans text-[13px] font-medium text-navy transition-colors lg:text-sm",
                    active
                      ? "border-b-2 border-gold pb-1 text-gold"
                      : "link-gold-underline pb-1",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-expanded={searchOpen}
              aria-controls="header-search"
              className={cn(
                "rounded-full p-2 transition-colors focus-visible:outline-none",
                "text-navy hover:bg-warm",
              )}
              onClick={() => setSearchOpen((s) => !s)}
            >
              <Search className="h-5 w-5" />
            </button>
            <Button
              href={GYBS_URL}
              external
              variant="outline"
              size="sm"
              className="hidden lg:inline-flex border-gold text-gold"
            >
              Check Readiness →
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              className="rounded-full p-2 text-navy"
              onClick={() => setSearchOpen((s) => !s)}
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="rounded-full p-2 text-navy"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div
          id="header-search"
          className={cn(
            "border-t border-warm bg-white transition-all duration-300 ease-out",
            searchOpen
              ? "max-h-40 opacity-100"
              : "pointer-events-none max-h-0 overflow-hidden opacity-0",
          )}
        >
          <div className="mx-auto max-w-3xl px-6 py-4 lg:px-10">
            <SearchBar variant="page" className="w-full max-w-none" />
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
