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
  content: string;
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
    content: `
      <p>Your entity package is the foundation reviewers see first. The goal is a coherent bundle—not a folder of unrelated PDFs.</p>
      <h2>Step 1: Inventory governing documents</h2>
      <p>Gather articles or organization, operating agreements, bylaws, and amendments. Confirm names and EIN match across filings.</p>
      <h2>Step 2: Organize ownership records</h2>
      <p>Cap table or membership ledger, stock certificates or units, and any transfer restrictions should be current and dated.</p>
      <h2>Step 3: Collect meeting minutes</h2>
      <p>Include annual meetings and major decisions for the past three years. Gaps invite questions—note intentional pauses briefly.</p>
      <h2>Step 4: Verify state registrations</h2>
      <p>Confirm good standing in your state of formation and any foreign qualifications where you operate.</p>
      <h2>Step 5: Index the package</h2>
      <p>Create a one-page table of contents with dates. Reviewers should orient in under a minute.</p>
      <div class="callout-note"><strong>Note:</strong> This guide is educational only and does not provide legal advice.</div>
    `,
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
    content: `
      <p>Affiliation rules affect size standards and eligibility. Mapping relationships early prevents rework during review.</p>
      <h2>Step 1: List owners and officers</h2>
      <p>Document direct ownership percentages and voting control for each principal.</p>
      <h2>Step 2: Identify common management</h2>
      <p>Note shared officers, directors, or managers across related entities.</p>
      <h2>Step 3: Trace family relationships</h2>
      <p>Include spouses and immediate family ties that may create affiliation under program rules.</p>
      <h2>Step 4: Review contractual ties</h2>
      <p>Subcontracts, leases, and financing arrangements can signal affiliation—capture them on your map.</p>
      <h2>Step 5: Prepare a narrative summary</h2>
      <p>One page explaining structure and why entities are—or are not—affiliated under applicable standards.</p>
    `,
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
    content: `
      <p>Financial packages fail more often on inconsistency than on weak performance. Alignment across statements is the readiness win.</p>
      <h2>Step 1: Reconcile entity names</h2>
      <p>Match legal name, DBA, and EIN on every page of tax returns and internal statements.</p>
      <h2>Step 2: Align periods</h2>
      <p>Use consistent fiscal year ends. Flag any stub periods or restatements in a cover note.</p>
      <h2>Step 3: Tie schedules to summaries</h2>
      <p>Balance sheet lines should foot to supporting schedules without manual overrides.</p>
      <h2>Step 4: Document assumptions</h2>
      <p>Keep a short assumptions list for projections—reviewers respect reasoned judgment.</p>
      <h2>Step 5: Quality-check before submission</h2>
      <p>Have someone unfamiliar with your firm read the package once for clarity.</p>
    `,
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
    content: `
      <p>SBIR proposals reward clarity of innovation and feasibility—not volume. Start from the topic, then build outward.</p>
      <h2>Step 1: Parse the topic statement</h2>
      <p>Highlight required outcomes, constraints, and evaluation criteria in the solicitation.</p>
      <h2>Step 2: Define the technical gap</h2>
      <p>State the problem, current approaches, and your differentiated approach in plain language.</p>
      <h2>Step 3: Outline phase work</h2>
      <p>Map Phase I objectives to measurable milestones reviewers can verify.</p>
      <h2>Step 4: Sketch the budget skeleton</h2>
      <p>Align labor categories, indirect rates, and materials to the technical plan—not the reverse.</p>
      <h2>Step 5: Peer review the outline</h2>
      <p>Have a technical colleague challenge feasibility before you draft full narrative sections.</p>
    `,
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
    content: `
      <p>SAM.gov is the front door for federal contracting visibility. Stale records create friction during eligibility checks.</p>
      <h2>Step 1: Confirm registration status</h2>
      <p>Verify active registration and renewal dates well before expiration windows.</p>
      <h2>Step 2: Update points of contact</h2>
      <p>Ensure POC email and phone match who actually responds to government inquiries.</p>
      <h2>Step 3: Review NAICS and size</h2>
      <p>Align primary and secondary NAICS codes with your current work mix.</p>
      <h2>Step 4: Refresh representations</h2>
      <p>Revisit certifications and representations after material business changes.</p>
      <h2>Step 5: Calendar quarterly checks</h2>
      <p>A fifteen-minute quarterly review prevents last-minute scrambles.</p>
    `,
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((g) => g.slug === slug);
}
