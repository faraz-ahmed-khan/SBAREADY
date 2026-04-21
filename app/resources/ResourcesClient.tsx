"use client";

import type { ReactNode } from "react";
import { useMemo, useState, useTransition } from "react";
import { articles } from "@/data/articles";
import { guides } from "@/data/guides";
import { toolkits } from "@/data/toolkits";
import { modules } from "@/data/modules";
import { checklists } from "@/data/checklists";
import {
  resourceCategories,
  resourceTags,
  type ResourceTopicSlug,
} from "@/data/categories";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { GuideCard } from "@/components/cards/GuideCard";
import { ToolkitCard } from "@/components/cards/ToolkitCard";
import { ModuleCard } from "@/components/cards/ModuleCard";
import { ChecklistCard } from "@/components/cards/ChecklistCard";
import { FadeInView } from "@/components/ui/FadeInView";
import { SearchBar } from "@/components/ui/SearchBar";
import { cn } from "@/lib/utils";

type Kind = "all" | "articles" | "guides" | "toolkits" | "modules" | "checklists";

const kinds: { id: Kind; label: string }[] = [
  { id: "all", label: "All" },
  { id: "articles", label: "Articles" },
  { id: "guides", label: "Guides" },
  { id: "toolkits", label: "Toolkits" },
  { id: "modules", label: "Modules" },
  { id: "checklists", label: "Checklists" },
];

const PAGE_SIZE = 6;

function SkeletonGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="h-52 rounded-2xl border border-warm bg-surface p-6"
        >
          <div className="skeleton-shimmer h-4 w-24 rounded-full" />
          <div className="mt-6 skeleton-shimmer h-8 w-3/4 rounded" />
          <div className="mt-4 space-y-2">
            <div className="skeleton-shimmer h-3 w-full rounded" />
            <div className="skeleton-shimmer h-3 w-5/6 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

function matchesTopic(
  rowTopic: ResourceTopicSlug,
  filterTopic: ResourceTopicSlug | "all",
) {
  return filterTopic === "all" || rowTopic === filterTopic;
}

function matchesTags(active: string[], tags: string[]) {
  if (active.length === 0) return true;
  return active.some((t) => tags.includes(t));
}

export function ResourcesClient({
  initialType,
  initialTopic,
}: {
  initialType?: string;
  initialTopic?: string;
}) {
  const [kind, setKind] = useState<Kind>(() => {
    const k = initialType as Kind | undefined;
    return kinds.some((x) => x.id === k) ? (k as Kind) : "all";
  });
  const [topicFilter, setTopicFilter] = useState<ResourceTopicSlug | "all">(
    () => {
      const t = initialTopic as ResourceTopicSlug | undefined;
      if (!t) return "all";
      return resourceCategories.some((c) => c.slug === t) ? t : "all";
    },
  );
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [pending, startTransition] = useTransition();
  const [showSkeleton, setShowSkeleton] = useState(false);

  const filtered: ReactNode[] = useMemo(() => {
    const union: ReactNode[] = [];

    if (kind === "all" || kind === "articles") {
      for (const a of articles) {
        if (!matchesTopic(a.topic, topicFilter)) continue;
        if (!matchesTags(activeTags, a.tags)) continue;
        union.push(<ArticleCard key={`a-${a.id}`} article={a} />);
      }
    }
    if (kind === "all" || kind === "guides") {
      for (const g of guides) {
        if (!matchesTopic(g.topic, topicFilter)) continue;
        if (!matchesTags(activeTags, g.tags)) continue;
        union.push(<GuideCard key={`g-${g.id}`} guide={g} />);
      }
    }
    if (kind === "all" || kind === "toolkits") {
      for (const t of toolkits) {
        if (!matchesTopic(t.topic, topicFilter)) continue;
        if (!matchesTags(activeTags, t.tags ?? [])) continue;
        union.push(<ToolkitCard key={`t-${t.id}`} toolkit={t} />);
      }
    }
    if (kind === "all" || kind === "modules") {
      for (const m of modules) {
        if (!matchesTopic(m.topic, topicFilter)) continue;
        if (!matchesTags(activeTags, m.tags)) continue;
        union.push(<ModuleCard key={`m-${m.id}`} module={m} />);
      }
    }
    if (kind === "all" || kind === "checklists") {
      for (const c of checklists) {
        if (!matchesTopic(c.topic, topicFilter)) continue;
        if (!matchesTags(activeTags, c.tags)) continue;
        union.push(<ChecklistCard key={`c-${c.id}`} checklist={c} />);
      }
    }

    return union;
  }, [activeTags, kind, topicFilter]);

  const visible = useMemo(() => {
    return filtered.slice(0, page * PAGE_SIZE);
  }, [filtered, page]);

  const resetFilters = () => {
    startTransition(() => {
      setShowSkeleton(true);
      setKind("all");
      setTopicFilter("all");
      setActiveTags([]);
      setPage(1);
      window.setTimeout(() => setShowSkeleton(false), 220);
    });
  };

  const toggleTag = (tag: string) => {
    startTransition(() => {
      setShowSkeleton(true);
      setActiveTags((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
      );
      setPage(1);
      window.setTimeout(() => setShowSkeleton(false), 220);
    });
  };

  return (
    <>
      <section className="border-b border-warm bg-surface px-6 pb-12 pt-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SearchBar variant="page" className="max-w-2xl" />
        </div>
      </section>

      <div className="sticky top-20 z-30 border-b border-warm bg-surface/95 px-6 py-4 backdrop-blur lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <span className="mr-2 self-center text-xs font-semibold uppercase tracking-[0.08em] text-gray-mid">
              Type
            </span>
            {kinds.map((k) => {
              const active = k.id === kind;
              return (
                <button
                  key={k.id}
                  type="button"
                  onClick={() => {
                    startTransition(() => {
                      setShowSkeleton(true);
                      setKind(k.id);
                      setPage(1);
                      window.setTimeout(() => setShowSkeleton(false), 200);
                    });
                  }}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em]",
                    active
                      ? "bg-navy text-gold"
                      : "bg-warm text-navy hover:bg-warm/80",
                  )}
                >
                  {k.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="mr-2 self-center text-xs font-semibold uppercase tracking-[0.08em] text-gray-mid">
              Topic
            </span>
            <button
              type="button"
              onClick={() =>
                startTransition(() => {
                  setTopicFilter("all");
                  setPage(1);
                })
              }
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em]",
                topicFilter === "all"
                  ? "bg-navy text-gold"
                  : "bg-warm text-navy hover:bg-warm/80",
              )}
            >
              All
            </button>
            {resourceCategories.map((c) => {
              const active = topicFilter === c.slug;
              return (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => {
                    startTransition(() => {
                      setTopicFilter(c.slug as ResourceTopicSlug);
                      setPage(1);
                    });
                  }}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em]",
                    active
                      ? "bg-navy text-gold"
                      : "bg-warm text-navy hover:bg-warm/80",
                  )}
                >
                  {c.name}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="mr-2 self-center text-xs font-semibold uppercase tracking-[0.08em] text-gray-mid">
              Tags
            </span>
            {resourceTags.map((tag) => {
              const active = activeTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={cn(
                    "rounded-full border border-warm px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em]",
                    active
                      ? "border-gold bg-gold/20 text-navy"
                      : "bg-surface text-text-light hover:border-gold/60",
                  )}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <section className="bg-warm/40 px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {showSkeleton || pending ? (
            <SkeletonGrid />
          ) : filtered.length === 0 ? (
            <FadeInView className="rounded-3xl border border-dashed border-navy/20 bg-surface px-10 py-16 text-center">
              <h2 className="font-display text-2xl text-navy">No matches yet</h2>
              <p className="mt-3 text-text-light">
                Relax a filter or broaden your topic to see more materials.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-6 inline-flex rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white hover:bg-navy-deep"
              >
                Reset filters
              </button>
            </FadeInView>
          ) : (
            <>
              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {visible}
              </div>
              {filtered.length > visible.length ? (
                <div className="mt-12 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setPage((p) => p + 1)}
                    className="rounded-full border border-navy bg-surface px-8 py-3 text-sm font-semibold text-navy hover:bg-warm"
                  >
                    Load more
                  </button>
                </div>
              ) : null}
            </>
          )}
        </div>
      </section>
    </>
  );
}
