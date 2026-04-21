"use client";

import { useMemo, useState } from "react";
import { articles } from "@/data/articles";
import { guides } from "@/data/guides";
import { toolkits } from "@/data/toolkits";
import { modules } from "@/data/modules";
import { checklists } from "@/data/checklists";
import { opportunities } from "@/data/opportunities";

export type SearchResultType =
  | "Article"
  | "Guide"
  | "Toolkit"
  | "Module"
  | "Checklist"
  | "Program";

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  href: string;
  excerpt: string;
}

function includes(hay: string, needle: string) {
  return hay.toLowerCase().includes(needle.toLowerCase());
}

export function useSearch(initialQuery = "") {
  const [query, setQuery] = useState(initialQuery);

  const results: SearchResult[] = useMemo(() => {
    const q = query.trim();
    if (!q) return [];

    const out: SearchResult[] = [];

    for (const a of articles) {
      if (
        includes(a.title, q) ||
        includes(a.excerpt, q) ||
        a.tags.some((t) => includes(t, q))
      ) {
        out.push({
          id: `article:${a.id}`,
          type: "Article",
          title: a.title,
          excerpt: a.excerpt,
          href: `/resources/article/${a.slug}`,
        });
      }
    }
    for (const g of guides) {
      if (includes(g.title, q) || includes(g.description, q)) {
        out.push({
          id: `guide:${g.id}`,
          type: "Guide",
          title: g.title,
          excerpt: g.description,
          href: `/resources?type=guides&focus=${g.slug}`,
        });
      }
    }
    for (const t of toolkits) {
      if (includes(t.title, q) || includes(t.description, q)) {
        out.push({
          id: `toolkit:${t.id}`,
          type: "Toolkit",
          title: t.title,
          excerpt: t.description,
          href: `/resources?type=toolkits&focus=${t.slug}`,
        });
      }
    }
    for (const m of modules) {
      if (includes(m.title, q) || includes(m.summary, q)) {
        out.push({
          id: `module:${m.id}`,
          type: "Module",
          title: m.title,
          excerpt: m.summary,
          href: `/learning/${m.slug}`,
        });
      }
    }
    for (const c of checklists) {
      if (includes(c.title, q) || includes(c.description, q)) {
        out.push({
          id: `checklist:${c.id}`,
          type: "Checklist",
          title: c.title,
          excerpt: c.description,
          href: `/resources?type=checklists&focus=${c.slug}`,
        });
      }
    }
    for (const o of opportunities) {
      if (includes(o.name, q) || includes(o.description, q)) {
        out.push({
          id: `program:${o.id}`,
          type: "Program",
          title: o.name,
          excerpt: o.description,
          href: `/opportunities/${o.slug}`,
        });
      }
    }

    return out;
  }, [query]);

  return { query, setQuery, results };
}
