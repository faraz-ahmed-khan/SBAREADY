"use client";

import { useMemo, useState } from "react";
import { faqs, type FAQ } from "@/data/faqs";
import { FaqItem } from "@/components/ui/FaqItem";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

const tabs: FAQ["category"][] = [
  "General",
  "Eligibility",
  "Programs",
  "Process",
  "GYBS",
];

function includes(h: string, q: string) {
  return h.toLowerCase().includes(q.toLowerCase());
}

export function FaqPageClient() {
  const [tab, setTab] = useState<FAQ["category"] | "All">("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return faqs.filter((f) => {
      const tabOk = tab === "All" || f.category === tab;
      const qOk =
        !q.trim() ||
        includes(f.question, q) ||
        includes(f.answer, q);
      return tabOk && qOk;
    });
  }, [q, tab]);

  return (
    <div>
      <section className="bg-navy px-6 pb-12 pt-32 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            inverted
            items={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
          />
          <h1 className="mt-6 font-display text-[40px] font-bold leading-tight text-white md:text-[48px]">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Calm answers on readiness, programs, and how GYBS fits into preparation.
          </p>
        </div>
      </section>

      <section className="border-b border-warm bg-surface px-6 py-10 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <label htmlFor="faq-filter" className="sr-only">
            Search questions
          </label>
          <input
            id="faq-filter"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search questions..."
            className="w-full rounded-full border border-warm bg-white px-5 py-3 text-sm text-navy outline-none focus-visible:ring-2 focus-visible:ring-gold"
          />
        </div>
      </section>

      <section className="border-b border-warm bg-white px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setTab("All")}
            className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] ${
              tab === "All"
                ? "bg-navy text-gold"
                : "bg-warm text-navy hover:bg-warm/80"
            }`}
          >
            All
          </button>
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] ${
                tab === t
                  ? "bg-navy text-gold"
                  : "bg-warm text-navy hover:bg-warm/80"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-warm/40 px-6 py-14 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-14">
          <div className="space-y-0">
            {filtered
              .filter((_, i) => i % 2 === 0)
              .map((f) => (
                <FaqItem key={f.id} question={f.question} answer={f.answer} />
              ))}
          </div>
          <div className="space-y-0">
            {filtered
              .filter((_, i) => i % 2 === 1)
              .map((f) => (
                <FaqItem key={f.id} question={f.question} answer={f.answer} />
              ))}
          </div>
        </div>
        {filtered.length === 0 ? (
          <p className="mx-auto mt-10 max-w-2xl text-center text-text-light">
            No FAQs match that filter yet—try another category or shorter terms.
          </p>
        ) : null}
      </section>
    </div>
  );
}
