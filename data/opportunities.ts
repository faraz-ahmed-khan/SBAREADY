export interface OpportunityProcessStep {
  title: string;
  detail: string;
}

export interface Opportunity {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  /** CSS variable for lane accent, e.g. var(--lane-8a) */
  laneColor: string;
  resourceCount: number;
  requirements: string[];
  eligibility: string[];
  overview: string;
  process: OpportunityProcessStep[];
  relatedArticleSlugs: string[];
}

export const opportunities: Opportunity[] = [
  {
    id: "op-1",
    slug: "8a-business-development",
    name: "8(a) Business Development",
    description:
      "Nine-year business development program for small disadvantaged businesses meeting specific eligibility criteria and control standards.",
    category: "Development",
    laneColor: "var(--lane-8a)",
    resourceCount: 12,
    requirements: [
      "Unconditional control by qualifying disadvantaged individual(s)",
      "Good character and potential for success",
      "Personal net worth and asset tests as defined by program rules",
      "Business size standards adherence",
    ],
    eligibility: [
      "U.S. citizens or lawful permanent residents within defined ownership structures",
      "Demonstrated control over management and long-term strategy",
      "First-time participant constraints where applicable",
    ],
    overview: `
      <p>The 8(a) program is a structured pathway—not a shortcut. Readiness means your documentation, governance narrative, and operating reality tell the same story.</p>
      <p>Firms succeed when leadership treats compliance as operational rhythm: periodic refresh of financials, updates to ownership records, and disciplined documentation of major decisions.</p>
    `,
    process: [
      {
        title: "Confirm eligibility framework",
        detail: "Map ownership, control, and affiliation facts against current federal rules.",
      },
      {
        title: "Assemble a defensible package",
        detail: "Organize entity, financial, and narrative materials as a coherent file.",
      },
      {
        title: "Plan for review cycles",
        detail: "Expect questions—build time for clarification without panic.",
      },
      {
        title: "Keep readiness current",
        detail: "Post-award maintenance is as important as entry—treat it as part of strategy.",
      },
    ],
    relatedArticleSlugs: [
      "certification-readiness-overview",
      "documentation-requirements-that-scale",
      "legal-compliance-baseline",
    ],
  },
  {
    id: "op-2",
    slug: "hubzone-program",
    name: "HUBZone Program",
    description:
      "Historically underutilized business zone program linking principal office location, residency, and workforce composition.",
    category: "Geography",
    laneColor: "var(--lane-hubzone)",
    resourceCount: 11,
    requirements: [
      "Principal office located in a qualified HUBZone",
      "At least 35% of employees living in a HUBZone (per program specifics)",
      "Alignment with ownership and control standards",
    ],
    eligibility: [
      "Small business under applicable size standards",
      "U.S. citizenship requirements for employees counted toward residency targets",
    ],
    overview: `
      <p>HUBZone blends place-based economics with operational discipline. Readiness is visible in how you document location, staffing, and growth with clarity.</p>
    `,
    process: [
      { title: "Validate geography inputs", detail: "Confirm maps, leases, and office facts align." },
      { title: "Model staffing plans", detail: "Connect hiring strategy to residency expectations." },
      { title: "Maintain living records", detail: "Quarterly updates beat emergency reconstruction." },
    ],
    relatedArticleSlugs: ["hubzone-primer", "sam-gov-readiness", "documentation-requirements-that-scale"],
  },
  {
    id: "op-3",
    slug: "wosb-program",
    name: "Women-Owned Small Business (WOSB)",
    description:
      "Federal contracting program recognizing firms owned and controlled by women, with defined certification pathways.",
    category: "Socioeconomic",
    laneColor: "var(--lane-wosb)",
    resourceCount: 10,
    requirements: [
      "At least 51% ownership by women who are U.S. citizens",
      "Control of long-term decision making and day-to-day management",
      "Documentation supporting ownership and control",
    ],
    eligibility: [
      "Small business for the relevant NAICS",
      "Eligibility standards consistent with program rulemaking",
    ],
    overview: `
      <p>WOSB readiness benefits from crisp narratives on control and management. Evidence should map to how the firm actually operates.</p>
    `,
    process: [
      { title: "Document control clearly", detail: "Separate titles from real decision authority." },
      { title: "Align internal records", detail: "Contracts, banking, and governance should agree." },
      { title: "Plan updates proactively", detail: "Material events should trigger structured refresh—not scrambling." },
    ],
    relatedArticleSlugs: [
      "certification-readiness-overview",
      "legal-compliance-baseline",
      "documentation-requirements-that-scale",
    ],
  },
  {
    id: "op-4",
    slug: "sdvosb-program",
    name: "Service-Disabled Veteran-Owned (SDVOSB)",
    description:
      "Program for small businesses owned and controlled by service-disabled veterans with defined documentation standards.",
    category: "Socioeconomic",
    laneColor: "var(--lane-sdvosb)",
    resourceCount: 9,
    requirements: [
      "Ownership and control by qualifying service-disabled veterans",
      "Evidence of veteran status and control",
      "Operational management by qualified owners",
    ],
    eligibility: [
      "U.S. citizenship for owners counted toward eligibility",
      "Applicability of size standards to your contracts",
    ],
    overview: `
      <p>SDVOSB readiness centers on clearly evidenced control alongside veteran status documentation. Precision reduces unnecessary friction in review.</p>
    `,
    process: [
      { title: "Verify veteran documentation", detail: "Keep authoritative records accessible and current." },
      { title: "Evidence management authority", detail: "Show decision rights across governance and operations." },
      { title: "Prepare for audits calmly", detail: "Structured files beat last-minute searches." },
    ],
    relatedArticleSlugs: ["legal-compliance-baseline", "sam-gov-readiness", "certification-readiness-overview"],
  },
  {
    id: "op-5",
    slug: "sbir-program",
    name: "Small Business Innovation Research (SBIR)",
    description:
      "Competitive awards supporting R&D with phased milestones and structured proposal evaluation.",
    category: "Innovation",
    laneColor: "var(--lane-sbir)",
    resourceCount: 13,
    requirements: [
      "Fit to topic and agency mission",
      "Strong technical approach tied to measurable milestones",
      "Budget realism and internal consistency",
    ],
    eligibility: [
      "U.S. small business definitions for the program",
      "Principal investigator and work location parameters per solicitation",
    ],
    overview: `
      <p>SBIR proposals reward clarity under uncertainty. Readiness is demonstrated when teams connect ideas to delivery plans reviewers can evaluate.</p>
    `,
    process: [
      { title: "Translate topic into plan", detail: "Move from concepts to testable milestones." },
      { title: "Align team & facilities", detail: "Show where work occurs and who performs it." },
      { title: "Budget with reviewers in mind", detail: "Explain assumptions where numbers leap." },
    ],
    relatedArticleSlugs: ["documentation-requirements-that-scale", "past-performance-for-growing-firms", "working-capital-and-program-fit"],
  },
  {
    id: "op-6",
    slug: "sba-loans-and-financing",
    name: "SBA Loans & Financing",
    description:
      "Credit structures designed to expand access to capital for qualifying small businesses with documented repayment capacity.",
    category: "Capital",
    laneColor: "var(--lane-loans)",
    resourceCount: 14,
    requirements: [
      "Business and personal financial documentation",
      "Use of proceeds mapped to permitted categories",
      "Collateral and guaranty considerations where applicable",
    ],
    eligibility: [
      "Owner eligibility and character review",
      "Creditworthiness and ability to repay",
      "Industry and size analysis as applicable",
    ],
    overview: `
      <p>Loan readiness is credit storytelling grounded in numbers. Keep statements current and assumptions explicit—reviewers should see judgment, not hope.</p>
    `,
    process: [
      { title: "Normalize records", detail: "Reconcile statements before external review begins." },
      { title: "Clarify use of proceeds", detail: "Connect capital to measurable business outcomes." },
      { title: "Prepare for diligence calmly", detail: "Anticipate questions with annexes, not apologies." },
    ],
    relatedArticleSlugs: [
      "financial-statements-for-small-business-programs",
      "working-capital-and-program-fit",
      "documentation-requirements-that-scale",
    ],
  },
];

export function getOpportunityBySlug(slug: string) {
  return opportunities.find((o) => o.slug === slug);
}
