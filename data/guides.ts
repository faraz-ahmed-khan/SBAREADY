import type { ResourceTopicSlug } from "@/data/categories";

export interface Guide {
  id: string;
  slug: string;
  title: string;
  description: string;
  steps: number;
  category: string;
  topic: ResourceTopicSlug;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
}

export const guides: Guide[] = [
  {
    id: "g-1",
    slug: "prepare-your-entity-package",
    title: "Prepare Your Entity Package",
    description:
      "A sequenced approach to organizing charter documents, minutes, and registrations.",
    steps: 7,
    category: "legal",
    topic: "legal",
    difficulty: "Beginner",
    tags: ["Legal", "Documentation"],
  },
  {
    id: "g-2",
    slug: "map-affiliation-before-you-apply",
    title: "Map Affiliation Before You Apply",
    description:
      "Build a relationship map so reviewers see clarity—not surprises.",
    steps: 6,
    category: "certifications",
    topic: "certifications",
    difficulty: "Intermediate",
    tags: ["8(a)", "Certifications", "SBA"],
  },
  {
    id: "g-3",
    slug: "financial-statements-that-hold-up",
    title: "Financial Statements That Hold Up",
    description:
      "Cross-check schedules so lenders and program offices read your file once—not twice.",
    steps: 9,
    category: "financial",
    topic: "financial",
    difficulty: "Intermediate",
    tags: ["Financial", "Loans"],
  },
  {
    id: "g-4",
    slug: "sbir-topic-to-outline",
    title: "SBIR: Topic to Outline",
    description:
      "Translate a topic into a defensible technical approach and budget skeleton.",
    steps: 8,
    category: "innovation",
    topic: "certifications",
    difficulty: "Advanced",
    tags: ["SBIR", "Innovation"],
  },
  {
    id: "g-5",
    slug: "sam-registration-hygiene",
    title: "SAM Registration Hygiene",
    description:
      "Routines to keep your entity record accurate before deadlines compress.",
    steps: 5,
    category: "documentation",
    topic: "documentation",
    difficulty: "Beginner",
    tags: ["SAM", "Documentation", "GovCon"],
  },
];
