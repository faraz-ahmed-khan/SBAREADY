"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { readinessTopics, getArticlesForTopic } from "@/data/readinessTopics";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { cn } from "@/lib/utils";

export function ReadinessTopicsSection() {
  const ordered = readinessTopics;
  const [active, setActive] = useState(ordered[0]?.id ?? "financial");

  const cards = useMemo(() => getArticlesForTopic(active), [active]);

  return (
    <section className="bg-warm px-6 py-16 md:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <SectionHeading
            eyebrow="What you need to know"
            title="Readiness Topics"
            align="left"
          />
        </FadeInView>
        <div className="mt-14 grid gap-12 lg:grid-cols-[0.95fr_1.25fr] lg:items-start">
          <FadeInView className="space-y-3">
            {ordered.map((topic) => {
              const on = topic.id === active;
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setActive(topic.id)}
                  className={cn(
                    "w-full rounded-full px-5 py-3 text-left text-sm font-semibold transition-colors",
                    on
                      ? "bg-navy text-gold shadow-lg shadow-navy/15"
                      : "bg-surface text-text-light hover:text-navy",
                  )}
                >
                  {topic.label}
                </button>
              );
            })}
          </FadeInView>

          <div className="min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
              >
                {cards.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
