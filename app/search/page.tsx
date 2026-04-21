import type { Metadata } from "next";
import { Suspense } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SearchPageClient } from "@/app/search/SearchPageClient";

export const metadata: Metadata = {
  title: "Search",
  description: "Search Misconi Network educational content.",
};

export default function SearchPage() {
  return (
    <div>
      <section className="border-b border-warm bg-surface px-6 pb-6 pt-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Search" }]}
          />
        </div>
      </section>
      <Suspense fallback={<div className="px-6 py-20 text-center text-text-light">Loading…</div>}>
        <SearchPageClient />
      </Suspense>
    </div>
  );
}
