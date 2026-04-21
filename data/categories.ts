export type ResourceTopicSlug =
  | "financial"
  | "legal"
  | "certifications"
  | "documentation"
  | "business-structure"
  | "past-performance";

export interface Category {
  slug: ResourceTopicSlug | string;
  name: string;
  description: string;
}

export const resourceCategories: Category[] = [
  {
    slug: "financial",
    name: "Financial",
    description: "Statements, capitalization, and credit readiness.",
  },
  {
    slug: "legal",
    name: "Legal & Compliance",
    description: "Entities, registrations, and regulatory alignment.",
  },
  {
    slug: "certifications",
    name: "Certifications",
    description: "Socioeconomic programs and certification pathways.",
  },
  {
    slug: "documentation",
    name: "Documentation",
    description: "Forms, schedules, and submission-ready records.",
  },
  {
    slug: "business-structure",
    name: "Business Structure",
    description: "Governance, ownership, and organizational readiness.",
  },
  {
    slug: "past-performance",
    name: "Past Performance",
    description: "Proof of capability references and CPARS readiness.",
  },
];

export const resourceTags = [
  "SBA",
  "8(a)",
  "HUBZone",
  "WOSB",
  "SDVOSB",
  "SBIR",
  "Loans",
  "GovCon",
  "SAM",
  "Documentation",
] as const;

export type ResourceTag = (typeof resourceTags)[number];
