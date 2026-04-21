import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Opportunity } from "@/data/opportunities";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function OpportunityCard({
  opportunity,
  className,
}: {
  opportunity: Opportunity;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-warm bg-surface p-6 pt-7 shadow-sm transition-all duration-[350ms] ease-out hover:-translate-y-1.5 hover:shadow-xl",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-0.5 transition-colors duration-300 group-hover:bg-gold"
        style={{ backgroundColor: opportunity.laneColor }}
      />
      <div className="flex items-start justify-between gap-3">
        <Badge variant="navy">{opportunity.category}</Badge>
      </div>
      <h3 className="mt-4 font-display text-xl text-navy">{opportunity.name}</h3>
      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-text-light">
        {opportunity.description}
      </p>
      <div className="mt-4 inline-flex items-center rounded-full bg-gold/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-navy">
        {opportunity.resourceCount} Resources
      </div>
      <div className="mt-6">
        <Link
          href={`/opportunities/${opportunity.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-gold link-gold-underline"
        >
          Explore Program
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
