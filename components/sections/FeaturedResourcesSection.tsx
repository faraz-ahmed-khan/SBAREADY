"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState, useTransition } from "react";
import { articles } from "@/data/articles";
import { guides } from "@/data/guides";
import { toolkits } from "@/data/toolkits";
import { modules } from "@/data/modules";
import { checklists } from "@/data/checklists";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { GuideCard } from "@/components/cards/GuideCard";
import { ToolkitCard } from "@/components/cards/ToolkitCard";
import { ModuleCard } from "@/components/cards/ModuleCard";
import { ChecklistCard } from "@/components/cards/ChecklistCard";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "articles", label: "Articles" },
  { id: "guides", label: "Guides" },
  { id: "toolkits", label: "Toolkits" },
  { id: "modules", label: "Modules" },
  { id: "checklists", label: "Checklists" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function SkeletonGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="h-56 rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="skeleton-shimmer h-4 w-24 rounded-full" />
          <div className="mt-6 skeleton-shimmer h-7 w-2/3 rounded" />
          <div className="mt-4 space-y-2">
            <div className="skeleton-shimmer h-3 w-full rounded" />
            <div className="skeleton-shimmer h-3 w-5/6 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

function TabContent({ tab }: { tab: TabId }) {
  if (tab === "articles") {
    return (
      <>
        {articles
          .filter((a) => a.featured)
          .slice(0, 3)
          .map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
      </>
    );
  }
  if (tab === "guides") {
    return (
      <>
        {guides.slice(0, 3).map((g) => (
          <GuideCard key={g.id} guide={g} />
        ))}
      </>
    );
  }
  if (tab === "toolkits") {
    return (
      <>
        {toolkits.slice(0, 3).map((t) => (
          <ToolkitCard key={t.id} toolkit={t} />
        ))}
      </>
    );
  }
  if (tab === "modules") {
    return (
      <>
        {modules.slice(0, 3).map((m) => (
          <ModuleCard key={m.id} module={m} />
        ))}
      </>
    );
  }
  return (
    <>
      {checklists.slice(0, 3).map((c) => (
        <ChecklistCard key={c.id} checklist={c} />
      ))}
    </>
  );
}

export function FeaturedResourcesSection() {
  const [tab, setTab] = useState<TabId>("articles");
  const [pending, startTransition] = useTransition();
  const [showSkeleton, setShowSkeleton] = useState(false);

  const memoTab = useMemo(() => tab, [tab]);

  return (
    <section className="bg-navy px-6 py-16 text-white md:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <SectionHeading
            eyebrow="Featured"
            title="Resources & Learning Materials"
            align="center"
            className="mx-auto"
            inverse
          />
        </FadeInView>

        <FadeInView className="mt-10 flex flex-wrap justify-center gap-4">
          {tabs.map((t) => {
            const active = t.id === memoTab;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  startTransition(() => {
                    setShowSkeleton(true);
                    setTab(t.id);
                    window.setTimeout(() => setShowSkeleton(false), 250);
                  });
                }}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition-colors",
                  active
                    ? "border-b-2 border-gold text-gold"
                    : "text-white/70 hover:text-white",
                )}
              >
                {t.label}
              </button>
            );
          })}
        </FadeInView>

        <div className="mt-14">
          {showSkeleton || pending ? (
            <SkeletonGrid />
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={memoTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
              >
                <TabContent tab={memoTab} />
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}
