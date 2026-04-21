"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { articles } from "@/data/articles";
import { guides } from "@/data/guides";
import { toolkits } from "@/data/toolkits";
import { modules } from "@/data/modules";
import { checklists } from "@/data/checklists";
import { opportunities } from "@/data/opportunities";
import { cn } from "@/lib/utils";

function countMatches(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return 0;
  let n = 0;
  const hit = (s: string) => s.toLowerCase().includes(q);
  n += articles.filter(
    (a) => hit(a.title) || hit(a.excerpt) || a.tags.some(hit),
  ).length;
  n += guides.filter((g) => hit(g.title) || hit(g.description)).length;
  n += toolkits.filter((t) => hit(t.title) || hit(t.description)).length;
  n += modules.filter((m) => hit(m.title) || hit(m.summary)).length;
  n += checklists.filter((c) => hit(c.title) || hit(c.description)).length;
  n += opportunities.filter((o) => hit(o.name) || hit(o.description)).length;
  return n;
}

type Variant = "hero" | "header" | "page";

export function SearchBar({
  variant = "hero",
  className,
  placeholder = "Search articles, guides, programs...",
  defaultQuery = "",
}: {
  variant?: Variant;
  className?: string;
  placeholder?: string;
  defaultQuery?: string;
}) {
  const router = useRouter();
  const id = useId();
  const [value, setValue] = useState(defaultQuery);
  const [debounced, setDebounced] = useState(defaultQuery);
  const [activeIndex, setActiveIndex] = useState(-1);
  const previewRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const t = window.setTimeout(() => setDebounced(value), 300);
    return () => window.clearTimeout(t);
  }, [value]);

  const liveCount = useMemo(() => countMatches(debounced), [debounced]);

  const quickPreview = useMemo(() => {
    const q = debounced.trim().toLowerCase();
    if (q.length < 2) return [];
    const out: { title: string; href: string }[] = [];
    const pushHit = (title: string, hay: string, href: string) => {
      if (out.length >= 5) return;
      if (hay.toLowerCase().includes(q)) out.push({ title, href });
    };
    for (const a of articles) {
      pushHit(a.title, a.title + a.excerpt, `/resources/article/${a.slug}`);
    }
    for (const m of modules) {
      pushHit(m.title, m.title + m.summary, `/learning/${m.slug}`);
    }
    return out;
  }, [debounced]);

  const submit = useCallback(() => {
    const q = value.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
  }, [router, value]);

  useEffect(() => {
    const onGlobalKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setValue("");
    };
    window.addEventListener("keydown", onGlobalKey);
    return () => window.removeEventListener("keydown", onGlobalKey);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submit();
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      setValue("");
      setActiveIndex(-1);
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, quickPreview.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    }
  };

  useEffect(() => {
    if (activeIndex < 0) return;
    const el = previewRef.current?.querySelector<HTMLElement>(
      `[data-preview-index="${activeIndex}"]`,
    );
    el?.focus();
  }, [activeIndex]);

  const shell = cn(
    "flex w-full items-center gap-3 rounded-full border border-warm bg-surface px-4 py-2.5 shadow-sm shadow-navy/5 transition focus-within:ring-2 focus-within:ring-gold focus-within:ring-offset-2 focus-within:ring-offset-white",
    variant === "header" && "bg-white/10 border-white/20 text-white focus-within:ring-offset-navy",
    variant === "page" && "max-w-2xl",
    className,
  );

  return (
    <div className="w-full">
      <label htmlFor={id} className="sr-only">
        Site search
      </label>
      <div className={shell}>
        <Search
          className={cn(
            "h-5 w-5 shrink-0",
            variant === "header" ? "text-gold" : "text-navy",
          )}
          aria-hidden
        />
        <input
          id={id}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setActiveIndex(-1);
          }}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          className={cn(
            "w-full bg-transparent text-sm outline-none placeholder:text-gray-mid md:text-[15px]",
            variant === "header" && "text-white placeholder:text-white/60",
            variant !== "header" && "text-navy",
          )}
          autoComplete="off"
        />
        {debounced.trim() ? (
          <span
            className={cn(
              "hidden shrink-0 text-xs uppercase tracking-[0.08em] md:inline",
              variant === "header" ? "text-white/70" : "text-gray-mid",
            )}
            aria-live="polite"
          >
            {liveCount} results
          </span>
        ) : null}
      </div>

      {variant === "hero" && debounced.trim().length >= 2 ? (
        <div
          ref={previewRef}
          className="mt-3 rounded-2xl border border-warm bg-surface p-2 shadow-lg shadow-navy/5"
          role="listbox"
          aria-label="Quick preview results"
        >
          {quickPreview.length === 0 ? (
            <p className="px-3 py-2 text-sm text-text-light">
              No instant matches — press Enter to search everything.
            </p>
          ) : (
            quickPreview.map((item, idx) => (
              <button
                key={`${item.href}-${idx}`}
                type="button"
                data-preview-index={idx}
                className={cn(
                  "w-full rounded-xl px-3 py-2 text-left text-sm text-navy hover:bg-warm",
                  idx === activeIndex && "bg-warm",
                )}
                onClick={() => router.push(item.href)}
              >
                {item.title}
              </button>
            ))
          )}
        </div>
      ) : null}

      <p className="mt-2 hidden text-xs text-gray-mid md:block" aria-hidden>
        Press Enter to search. Press Esc to clear.
      </p>
    </div>
  );
}
