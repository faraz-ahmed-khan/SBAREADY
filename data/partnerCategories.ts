export interface PartnerCategory {
  id: string;
  slug: string;
  name: string;
  description: string;
}

export const partnerCategories: PartnerCategory[] = [
  {
    id: "cat-sbdc",
    slug: "small-business-development-centers",
    name: "Small Business Development Centers (SBDCs)",
    description:
      "Provide advising, training, and technical assistance to help small businesses start, grow, and strengthen operations.",
  },
  {
    id: "cat-wbc",
    slug: "womens-business-centers",
    name: "Women's Business Centers (WBCs)",
    description:
      "Offer training and business support services designed to help women entrepreneurs start and expand their businesses.",
  },
  {
    id: "cat-vboc",
    slug: "veteran-business-outreach-centers",
    name: "Veteran Business Outreach Centers (VBOCs)",
    description:
      "Support veterans, service members, and military spouses with business training, counseling, and entrepreneurial development.",
  },
  {
    id: "cat-score",
    slug: "score-mentors",
    name: "SCORE Mentors",
    description:
      "Provide free, confidential mentoring and business education through a national network of volunteer business advisors.",
  },
  {
    id: "cat-microlender",
    slug: "sba-microlenders",
    name: "SBA Microlenders",
    description:
      "Offer small loans and business support services to help early-stage and underserved businesses access capital.",
  },
  {
    id: "cat-7a",
    slug: "sba-7a-lenders",
    name: "SBA 7(a) Lenders",
    description:
      "Provide SBA-backed loans that support working capital, equipment purchases, and general business financing needs.",
  },
  {
    id: "cat-504",
    slug: "sba-504-lenders",
    name: "SBA 504 Lenders",
    description:
      "Offer long-term, fixed-rate financing for major fixed assets such as real estate and equipment.",
  },
  {
    id: "cat-community-advantage",
    slug: "community-advantage-lenders",
    name: "Community Advantage Lenders",
    description:
      "Provide mission-focused lending to underserved small businesses through SBA-backed financing programs.",
  },
  {
    id: "cat-cdc",
    slug: "certified-development-companies",
    name: "Certified Development Companies (CDCs)",
    description:
      "Nonprofit organizations that deliver SBA 504 loans to support business expansion and job creation.",
  },
  {
    id: "cat-apex",
    slug: "apex-accelerators",
    name: "APEX Accelerators",
    description:
      "Help businesses understand and pursue government contracting opportunities through training and technical assistance.",
  },
  {
    id: "cat-useac",
    slug: "export-assistance-centers",
    name: "Export Assistance Centers (USEACs)",
    description:
      "Provide export counseling, market guidance, and support for businesses seeking to enter or expand in global markets.",
  },
  {
    id: "cat-district",
    slug: "sba-district-offices",
    name: "SBA District Offices",
    description:
      "Local SBA offices that offer guidance, program information, and connections to SBA-aligned resources.",
  },
];

export function getPartnerCategoryBySlug(slug: string) {
  return partnerCategories.find((c) => c.slug === slug);
}
