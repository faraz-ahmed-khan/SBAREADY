import type { ResourceTopicSlug } from "@/data/categories";

export interface Checklist {
  id: string;
  slug: string;
  title: string;
  description: string;
  itemCount: number;
  previewItems: string[];
  category: string;
  topic: ResourceTopicSlug;
  tags: string[];
}

export const checklists: Checklist[] = [
  {
    id: "cl-1",
    slug: "certification-readiness-checklist",
    title: "Certification Readiness Checklist",
    description:
      "Cross-program checklist for Sam.gov, entity verification, and supporting records.",
    itemCount: 18,
    previewItems: [
      "Active SAM registration with matching legal name",
      "Organizing documents aligned to ownership narrative",
      "Tax returns and financial statements (last 3 years)",
    ],
    category: "documentation",
    topic: "documentation",
    tags: ["SBA", "Documentation", "Certifications"],
  },
  {
    id: "cl-2",
    slug: "financial-records-pack",
    title: "Financial Records Pack",
    description:
      "What to gather before lenders or program offices review your firm.",
    itemCount: 12,
    previewItems: [
      "Balance sheet and income statement (YTD)",
      "Cash flow projections with assumptions",
      "Debt schedule and existing obligations",
    ],
    category: "financial",
    topic: "financial",
    tags: ["Loans", "Financial", "SBA"],
  },
  {
    id: "cl-3",
    slug: "legal-entity-audit",
    title: "Legal Entity Audit",
    description:
      "A practical sweep of entity documents for small business programs.",
    itemCount: 14,
    previewItems: [
      "Articles / operating agreement current within 12 months",
      "EIN confirmation and state good standing",
      "Cap table clarity for control and affiliation questions",
    ],
    category: "legal",
    topic: "legal",
    tags: ["Legal", "8(a)", "GovCon"],
  },
  {
    id: "cl-4",
    slug: "proposal-submission",
    title: "Proposal Submission Prep",
    description:
      "Checklist tuned to SBIR/STTR and similar structured solicitations.",
    itemCount: 16,
    previewItems: [
      "Solicitation read map with due dates and volumes",
      "Key personnel & facilities verification",
      "Cost narrative and budget alignment",
    ],
    category: "documentation",
    topic: "documentation",
    tags: ["SBIR", "GovCon", "Documentation"],
  },
];
