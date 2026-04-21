import type { ResourceTopicSlug } from "@/data/categories";

export interface Toolkit {
  id: string;
  slug: string;
  title: string;
  description: string;
  fileType: "PDF" | "DOCX" | "XLSX";
  fileSize: string;
  category: string;
  topic: ResourceTopicSlug;
  tags?: string[];
}

export const toolkits: Toolkit[] = [
  {
    id: "tk-1",
    slug: "documentation-index-template",
    title: "Documentation Index Template",
    description:
      "A table-of-contents pattern for evidence bundles across programs.",
    fileType: "XLSX",
    fileSize: "180 KB",
    category: "documentation",
    topic: "documentation",
    tags: ["Documentation", "SBA"],
  },
  {
    id: "tk-2",
    slug: "readiness-brief-one-pager",
    title: "Readiness Brief (One Page)",
    description:
      "Executive summary structure for internal alignment before external submissions.",
    fileType: "DOCX",
    fileSize: "92 KB",
    category: "foundations",
    topic: "documentation",
    tags: ["Foundations"],
  },
  {
    id: "tk-3",
    slug: "evaluation-criteria-highlighter",
    title: "Evaluation Criteria Highlighter",
    description:
      "Mark up solicitations systematically to reduce missed attachments.",
    fileType: "PDF",
    fileSize: "1.1 MB",
    category: "govcon",
    topic: "documentation",
    tags: ["GovCon", "Documentation"],
  },
  {
    id: "tk-4",
    slug: "financial-attachments-checklist",
    title: "Financial Attachments Checklist",
    description:
      "Printable annex list used by firms before formal underwriting conversations.",
    fileType: "PDF",
    fileSize: "640 KB",
    category: "financial",
    topic: "financial",
    tags: ["Financial", "Loans"],
  },
];
