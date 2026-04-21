import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { Checklist } from "@/data/checklists";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function ChecklistCard({
  checklist,
  className,
}: {
  checklist: Checklist;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border border-warm bg-surface p-6 shadow-sm transition-all duration-[350ms] ease-out hover:-translate-y-1.5 hover:border-gold hover:shadow-xl",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl text-navy">{checklist.title}</h3>
        <Badge variant="warm">{checklist.itemCount} items</Badge>
      </div>
      <ul className="mt-4 space-y-3">
        {checklist.previewItems.slice(0, 3).map((line) => (
          <li key={line} className="flex gap-3 text-sm text-text-light">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <span>{line}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link
          href={`/resources?type=checklists&focus=${checklist.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-gold link-gold-underline"
        >
          View Checklist <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
