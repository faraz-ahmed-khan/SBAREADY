import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Module } from "@/data/modules";
import { cn } from "@/lib/utils";

export function ModuleCard({
  module,
  className,
}: {
  module: Module;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-2xl border border-warm bg-surface p-6 shadow-sm transition-all duration-[350ms] ease-out hover:-translate-y-1.5 hover:border-gold hover:shadow-xl",
        className,
      )}
    >
      <div className="flex gap-1" aria-hidden>
        {module.lessons.map((l, i) => (
          <span
            key={l.id}
            className={cn(
              "h-2 w-2 rounded-full border border-navy/30",
              i === 0 ? "bg-gold" : "bg-transparent",
            )}
          />
        ))}
      </div>
      <h3 className="mt-4 font-display text-xl text-navy">{module.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm text-text-light">{module.summary}</p>
      <p className="mt-4 text-xs uppercase tracking-[0.08em] text-gray-mid">
        {module.lessons.length} lessons · {module.estimatedMinutes} min
      </p>
      <div className="mt-6">
        <Link
          href={`/learning/${module.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-gold link-gold-underline"
        >
          Start Module <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
