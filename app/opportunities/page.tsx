import type { Metadata } from "next";
import { opportunities } from "@/data/opportunities";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FadeInView } from "@/components/ui/FadeInView";
import { OpportunityCard } from "@/components/cards/OpportunityCard";

export const metadata: Metadata = {
  title: "SBA Opportunity Programs",
  description:
    "Explore SBA-aligned program categories—from socioeconomic certifications to innovation and capital pathways.",
};

export default function OpportunitiesPage() {
  return (
    <div>
      <section className="relative flex min-h-[50vh] flex-col justify-end bg-navy px-6 pb-16 pt-36 text-white lg:px-10">
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <div className="h-full w-full bg-noise-pattern" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Opportunities" }]}
            className="text-white/70"
          />
          <h1 className="mt-6 max-w-3xl font-display text-[40px] font-bold leading-tight md:text-[52px]">
            SBA Opportunity Programs
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
            Structured education—not a substitute for official filing. Select a program to
            review requirements and readiness expectations.
          </p>
        </div>
      </section>

      <section className="bg-surface px-6 py-16 md:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
          {opportunities.map((o) => (
            <FadeInView key={o.id}>
              <OpportunityCard opportunity={o} />
            </FadeInView>
          ))}
        </div>
      </section>
    </div>
  );
}
