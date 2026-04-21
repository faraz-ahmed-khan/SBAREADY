import type { ResourceTopicSlug } from "@/data/categories";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** Topic lane for filters / readiness mapping */
  topic: ResourceTopicSlug;
  readTime: number;
  date: string;
  content: string;
  tags: string[];
  featured: boolean;
  author?: string;
}

export const articles: Article[] = [
  {
    id: "a-1",
    slug: "financial-statements-for-small-business-programs",
    title: "Financial Statements for Small Business Programs",
    excerpt:
      "What reviewers expect to see—and how to keep your package coherent quarter to quarter.",
    category: "Financial",
    topic: "financial",
    readTime: 6,
    date: "2025-11-02",
    featured: true,
    tags: ["Financial", "SBA", "Documentation"],
    author: "Misconi Network Editorial",
    content: `
      <p>Financial readiness is not about perfection; it is about coherence. When reviewers compare statements, tax returns, and narrative explanations, inconsistencies—not modest margins—raise questions.</p>
      <h2>Start with the review lens</h2>
      <p>Assume your materials will be read by someone seeing your firm for the first time. The quickest win is alignment: entity name, EIN, and banking references should match across documents without footnotes.</p>
      <blockquote>Clarity is persuasive. Confusion invites rework.</blockquote>
      <h2>The quarterly rhythm</h2>
      <p>Most small businesses benefit from a simple rhythm: refresh internal statements monthly, formalize YTD quarterly, and reconcile tax posture before major submission windows.</p>
      <div class="callout-tip"><strong>Tip:</strong> Keep a one-page assumptions list beside projections—reviewers gravitate to reasoned judgment.</div>
      <h2>What to avoid</h2>
      <p>Last-minute PDF swaps, unexplained adjustments, and mismatched periods are common failure modes. If something changed, narrate it succinctly in a cover note.</p>
      <div class="callout-note"><strong>Note:</strong> This article is educational only and does not provide legal or accounting advice.</div>
    `,
  },
  {
    id: "a-2",
    slug: "working-capital-and-program-fit",
    title: "Working Capital and Program Fit",
    excerpt:
      "Separate liquidity signals from strategic fit when evaluating SBA-aligned options.",
    category: "Financial",
    topic: "financial",
    readTime: 5,
    date: "2025-10-18",
    featured: true,
    tags: ["Financial", "Loans"],
    content: `
      <p>Working capital conversations often collapse strategy into a single ratio. For readiness, separate liquidity (near-term) from structural capacity (the next 12–24 months).</p>
      <h2>Liquidity signals</h2>
      <p>Reviewers look for believable runway: payables tempo, receivable concentration, and realistic cash buffers under mild stress.</p>
      <h2>Program fit</h2>
      <p>Each pathway emphasizes different proof. Map evidence to requirements early—don’t retrofit your story at submission time.</p>
    `,
  },
  {
    id: "a-3",
    slug: "legal-compliance-baseline",
    title: "Legal & Compliance Baseline",
    excerpt:
      "Entity posture, standing, and the quiet work that prevents avoidable delays.",
    category: "Legal",
    topic: "legal",
    readTime: 7,
    date: "2025-09-30",
    featured: false,
    tags: ["Legal", "Documentation"],
    content: `
      <p>A strong compliance baseline reduces noise during eligibility conversations. The objective is not ornate legal prose—it is defensible simplicity.</p>
      <h2>Entity documents</h2>
      <p>Keep charter documents current, and align operating agreements with how decisions are actually made. Drift here amplifies reviewer questions.</p>
      <h2>Standing & registrations</h2>
      <p>State standing, licensing, and federal registrations should read as a single story about where you operate and who controls the enterprise.</p>
    `,
  },
  {
    id: "a-4",
    slug: "sam-gov-readiness",
    title: "SAM.gov Readiness",
    excerpt:
      "Why accuracy in your entity record can matter as much as narrative polish.",
    category: "Documentation",
    topic: "documentation",
    readTime: 5,
    date: "2025-09-12",
    featured: false,
    tags: ["SAM", "GovCon", "Documentation"],
    content: `
      <p>SAM.gov is often treated as administrative. In practice, it is a front door: inaccuracies propagate and compound across interactions.</p>
      <h2>Names, addresses, representations</h2>
      <p>Schedule a monthly spot-check: legal name, physical address, and representations should match internal records you would submit under pressure.</p>
      <h2>Controls</h2>
      <p>Assign ownership of updates. Mysterious edits the week of a deadline are a preventable risk.</p>
    `,
  },
  {
    id: "a-5",
    slug: "certification-readiness-overview",
    title: "Certification Readiness: A Measured Overview",
    excerpt:
      "How to compare programs without collapsing them into a single checklist.",
    category: "Certifications",
    topic: "certifications",
    readTime: 8,
    date: "2025-08-27",
    featured: true,
    tags: ["Certifications", "8(a)", "WOSB"],
    content: `
      <p>Programs differ in purpose, evidence, and review posture. Readiness means learning the distinctions—not memorizing slogans.</p>
      <h2>Ownership and control</h2>
      <p>Each program encodes control differently. Build a plain-English map of decision rights, roles, and economic exposure before drafting attestations.</p>
      <h2>Operational presence</h2>
      <p>Where work happens—and who performs it—can matter as much as spreadsheets. Document reality with respectful specificity.</p>
    `,
  },
  {
    id: "a-6",
    slug: "hubzone-primer",
    title: "HUBZone Primer for Employers",
    excerpt:
      "Principles for residency, principal office considerations, and workforce planning—at a steady altitude.",
    category: "Programs",
    topic: "certifications",
    readTime: 6,
    date: "2025-08-05",
    featured: false,
    tags: ["HUBZone", "Programs"],
    content: `
      <p>HUBZone integrates geography, staffing, and growth planning. Readiness tracks both static eligibility signals and how you operate month to month.</p>
      <h2>Documentation that travels</h2>
      <p>Keep maps, payroll narratives, and lease evidence co-located in your evidence index so updates are incremental rather than heroic.</p>
    `,
  },
  {
    id: "a-7",
    slug: "documentation-requirements-that-scale",
    title: "Documentation Requirements That Scale",
    excerpt:
      "Build once, reuse often: an editorial approach to evidence management.",
    category: "Documentation",
    topic: "documentation",
    readTime: 6,
    date: "2025-07-22",
    featured: false,
    tags: ["Documentation", "SBA"],
    content: `
      <p>Documentation scales when it is indexed, versioned, and narrated with intent. Treat your bundle like a publication, not a filing cabinet.</p>
      <h2>Version discipline</h2>
      <p>Dates, filenames, and change logs sound bureaucratic until a deadline arrives—then they become oxygen.</p>
    `,
  },
  {
    id: "a-8",
    slug: "past-performance-for-growing-firms",
    title: "Past Performance for Growing Firms",
    excerpt:
      "Turn episodic wins into durable proof through lightweight rituals.",
    category: "Past Performance",
    topic: "past-performance",
    readTime: 5,
    date: "2025-07-08",
    featured: false,
    tags: ["Past Performance", "GovCon"],
    content: `
      <p>Past performance is cumulative reputation. Growing firms benefit from capture systems: after-action notes, metrics that mattered, and references that can speak to scope.</p>
      <h2>What to record</h2>
      <p>Capture constraints overcome, delivery tempo, and client outcomes reviewers can verify—not adjectives you cannot support.</p>
    `,
  },
];

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
