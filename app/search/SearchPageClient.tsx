"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useSearch } from "@/hooks/useSearch";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function Highlight({ text, query }: { text: string; query: string }) {
  const q = query.trim();
  if (!q) return <>{text}</>;
  const parts = text.split(new RegExp(`(${escapeRegExp(q)})`, "ig"));
  return (
    <>
      {parts.map((part, idx) =>
        part.toLowerCase() === q.toLowerCase() ? (
          <mark
            key={`${idx}-${part}`}
            className="rounded bg-gold/25 px-0.5 text-inherit"
          >
            {part}
          </mark>
        ) : (
          <span key={`${idx}-${part}`}>{part}</span>
        ),
      )}
    </>
  );
}

export function SearchPageClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const param = searchParams.get("q") ?? "";
  const { query, setQuery, results } = useSearch(param);

  useEffect(() => {
    setQuery(param);
  }, [param, setQuery]);

  return (
    <div className="bg-warm/30 px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h1 className="font-display text-[40px] font-bold text-navy">Search</h1>
          <p className="mt-3 text-text-light">
            Live results across articles, guides, programs, modules, and checklists.
          </p>
          <label htmlFor="search-page-input" className="sr-only">
            Search query
          </label>
          <div className="mt-8 flex w-full items-center gap-3 rounded-full border border-warm bg-surface px-4 py-2.5 shadow-sm focus-within:ring-2 focus-within:ring-gold">
            <Search className="h-5 w-5 shrink-0 text-navy" aria-hidden />
            <input
              id="search-page-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const q = query.trim();
                  if (!q) return;
                  router.push(`/search?q=${encodeURIComponent(q)}`);
                }
                if (e.key === "Escape") setQuery("");
              }}
              placeholder="Type to filter…"
              className="w-full bg-transparent text-sm text-navy outline-none placeholder:text-gray-mid md:text-[15px]"
              autoComplete="off"
            />
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-mid" aria-live="polite">
          {results.length} results{" "}
          {query.trim() ? (
            <>
              for <span className="font-semibold text-navy">“{query}”</span>
            </>
          ) : (
            "— enter a term to see matches."
          )}
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {results.map((r) => (
            <Link
              key={r.id}
              href={r.href}
              className={cn(
                "rounded-2xl border border-warm bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold hover:shadow-lg",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <Badge variant="warm">{r.type}</Badge>
              </div>
              <p className="mt-3 font-display text-lg text-navy">
                <Highlight text={r.title} query={query} />
              </p>
              <p className="mt-2 line-clamp-3 text-sm text-text-light">{r.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
