import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Guide } from "@/data/guides";
import { cn } from "@/lib/utils";

export function GuideCard({
  guide,
  className,
}: {
  guide: Guide;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-warm border-l-4 border-l-gold bg-surface p-6 shadow-sm transition-all duration-[350ms] ease-out hover:-translate-y-1.5 hover:border-gold hover:shadow-xl",
        className,
      )}
    >
      <p className="caption-label text-gold">Step-by-step guide</p>
      <h3 className="mt-3 font-display text-xl text-navy">{guide.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm text-text-light">
        {guide.description}
      </p>
      <p className="mt-4 text-xs uppercase tracking-[0.08em] text-gray-mid">
        {guide.steps} steps · {guide.difficulty}
      </p>
      <div className="mt-6">
        <Link
          href={`/resources?type=guides&focus=${guide.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-gold link-gold-underline"
        >
          Open Guide <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
