import type { ResourceTopicSlug } from "@/data/categories";

export interface LearningLesson {
  id: string;
  title: string;
}

export interface Module {
  id: string;
  slug: string;
  title: string;
  summary: string;
  lessons: LearningLesson[];
  category: string;
  topic: ResourceTopicSlug;
  tags: string[];
  estimatedMinutes: number;
  content?: string;
}

export const modules: Module[] = [
  {
    id: "mod-1",
    slug: "foundations-of-sba-readiness",
    title: "Foundations of SBA Readiness",
    summary:
      "Learn how eligibility, affiliation, and documentation interact across programs.",
    lessons: [
      { id: "l1", title: "How SBA programs fit together" },
      { id: "l2", title: "Affiliation basics for small business" },
      { id: "l3", title: "Documentation tempo that scales" },
    ],
    category: "foundations",
    topic: "documentation",
    tags: ["SBA", "Foundations"],
    estimatedMinutes: 45,
    content: `
      <p>This module builds a shared vocabulary for program comparisons—without replacing official guidance.</p>
      <h2>Why readiness is a system</h2>
      <p>Readiness is less about a single form and more about repeatable evidence you can update quarterly.</p>
      <h2>What you will practice</h2>
      <ul>
        <li>Mapping questions to documents</li>
        <li>Separating facts from strategy decisions</li>
        <li>Keeping ownership stories consistent across filings</li>
      </ul>
    `,
  },
  {
    id: "mod-2",
    slug: "reading-solicitations",
    title: "Reading Solicitations & Notices",
    summary:
      "A structured walkthrough of evaluation criteria, attachments, and deadlines.",
    lessons: [
      { id: "l4", title: "Dissecting the evaluation section" },
      { id: "l5", title: "Attachments & compliance matrices" },
      { id: "l6", title: "Team rituals for deadline risk" },
    ],
    category: "govcon",
    topic: "past-performance",
    tags: ["GovCon", "Documentation"],
    estimatedMinutes: 50,
  },
  {
    id: "mod-3",
    slug: "financial-hygiene",
    title: "Financial Hygiene for Review",
    summary:
      "Normalize margins, schedules, and explanations before formal review windows.",
    lessons: [
      { id: "l7", title: "Quality of earnings mindset" },
      { id: "l8", title: "Working capital narrative" },
      { id: "l9", title: "Common reconciliation gaps" },
    ],
    category: "financial",
    topic: "financial",
    tags: ["Financial", "Loans"],
    estimatedMinutes: 40,
  },
  {
    id: "mod-4",
    slug: "certification-story",
    title: "Telling a Consistent Certification Story",
    summary:
      "Align your narrative across ownership, control, and operational presence.",
    lessons: [
      { id: "l10", title: "Control vs. ownership" },
      { id: "l11", title: "Operational presence signals" },
      { id: "l12", title: "Document trails that persuade reviewers" },
    ],
    category: "certifications",
    topic: "certifications",
    tags: ["Certifications", "WOSB", "8(a)"],
    estimatedMinutes: 55,
  },
  {
    id: "mod-5",
    slug: "sbir-roadmap",
    title: "SBIR: From Topic to Submission",
    summary:
      "Phase-aware planning, teaming, and submission discipline for innovation programs.",
    lessons: [
      { id: "l13", title: "Topic fit & risk framing" },
      { id: "l14", title: "Budget realism for reviewers" },
      { id: "l15", title: "Submission QA pass" },
    ],
    category: "innovation",
    topic: "certifications",
    tags: ["SBIR", "Innovation"],
    estimatedMinutes: 60,
  },
  {
    id: "mod-6",
    slug: "past-performance-basics",
    title: "Past Performance Basics",
    summary:
      "What strong references look like—and how to organize proof over time.",
    lessons: [
      { id: "l16", title: "Relevance vs. recency" },
      { id: "l17", title: "Metrics reviewers trust" },
      { id: "l18", title: "Building a reference library" },
    ],
    category: "past-performance",
    topic: "past-performance",
    tags: ["Past Performance", "GovCon"],
    estimatedMinutes: 38,
  },
];

export function getModuleBySlug(slug: string) {
  return modules.find((m) => m.slug === slug);
}
