import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ResourcesClient } from "@/app/resources/ResourcesClient";

export const metadata: Metadata = {
  title: "Resources & Learning Materials",
  description:
    "Educational articles, readiness guides, toolkits, modules, and checklists for SBA preparation.",
};

export default function ResourcesPage() {
  return (
    <div>
      <section className="relative flex min-h-[40vh] flex-col justify-end bg-navy px-6 pb-12 pt-36 text-white lg:px-10">
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Resources" }]}
            className="text-white/70"
          />
          <h1 className="mt-6 max-w-3xl font-display text-[40px] font-bold leading-tight md:text-[48px]">
            Resources & Learning Materials
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
            Curated education on documentation, eligibility, and program alignment—browse
            by section below.
          </p>
        </div>
      </section>

      <ResourcesClient />
    </div>
  );
}
