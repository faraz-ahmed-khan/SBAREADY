import { articles } from "./articles";

export interface ReadinessTopic {
  id: string;
  label: string;
  articleSlugs: string[];
}

export const readinessTopics: ReadinessTopic[] = [
  {
    id: "financial",
    label: "Financial Readiness",
    articleSlugs: [
      "financial-statements-for-small-business-programs",
      "working-capital-and-program-fit",
    ],
  },
  {
    id: "legal",
    label: "Legal & Compliance",
    articleSlugs: ["legal-compliance-baseline", "sam-gov-readiness"],
  },
  {
    id: "certifications",
    label: "Certifications",
    articleSlugs: ["certification-readiness-overview", "hubzone-primer"],
  },
  {
    id: "documentation",
    label: "Documentation Requirements",
    articleSlugs: [
      "documentation-requirements-that-scale",
      "financial-statements-for-small-business-programs",
    ],
  },
  {
    id: "business-structure",
    label: "Business Structure",
    articleSlugs: ["legal-compliance-baseline", "certification-readiness-overview"],
  },
  {
    id: "past-performance",
    label: "Past Performance",
    articleSlugs: ["past-performance-for-growing-firms"],
  },
];

export function getArticlesForTopic(topicId: string) {
  const topic = readinessTopics.find((t) => t.id === topicId);
  if (!topic) return articles.slice(0, 3);
  const set = new Set(topic.articleSlugs);
  const matched = articles.filter((a) => set.has(a.slug));
  if (matched.length >= 3) return matched.slice(0, 3);
  const rest = articles.filter((a) => !set.has(a.slug));
  return [...matched, ...rest].slice(0, 3);
}
