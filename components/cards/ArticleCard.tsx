import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "@/data/articles";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function ArticleCard({
  article,
  className,
}: {
  article: Article;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-warm bg-surface p-6 shadow-sm shadow-navy/5 transition-all duration-[350ms] ease-out hover:-translate-y-1.5 hover:border-gold hover:shadow-xl hover:shadow-navy/10",
        className,
      )}
    >
      <Badge variant="navy" className="self-start">
        {article.category}
      </Badge>
      <h3 className="mt-4 font-display text-xl text-navy">{article.title}</h3>
      <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-text-light">
        {article.excerpt}
      </p>
      <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.08em] text-gray-mid">
        <span>{article.readTime} min read</span>
        <Link
          href={`/resources/article/${article.slug}`}
          className="inline-flex items-center gap-1 font-semibold text-gold link-gold-underline"
        >
          Read Article <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
