export interface Partner {
  id: string;
  slug: string;
  categorySlug: string;
  name: string;
  shortDescription: string;
  description: string;
}

export const partners: Partner[] = [
  {
    id: "p-sbdc",
    slug: "sbdc-partner",
    categorySlug: "small-business-development-centers",
    name: "SBDC Partner",
    shortDescription:
      "Provides advising and training to help small businesses improve operations, strengthen planning, and support growth.",
    description:
      "Provides advising and training to help small businesses improve operations, strengthen planning, and support growth.",
  },
  {
    id: "p-wbc",
    slug: "wbc-partner",
    categorySlug: "womens-business-centers",
    name: "WBC Partner",
    shortDescription:
      "Offers business training and support services tailored to women entrepreneurs.",
    description:
      "Offers business training and support services tailored to women entrepreneurs.",
  },
  {
    id: "p-vboc",
    slug: "vboc-partner",
    categorySlug: "veteran-business-outreach-centers",
    name: "VBOC Partner",
    shortDescription:
      "Delivers entrepreneurial training and counseling for veterans, service members, and military spouses.",
    description:
      "Delivers entrepreneurial training and counseling for veterans, service members, and military spouses.",
  },
  {
    id: "p-score",
    slug: "score-partner",
    categorySlug: "score-mentors",
    name: "SCORE Partner",
    shortDescription:
      "Provides free mentoring and business education through volunteer business advisors.",
    description:
      "Provides free mentoring and business education through volunteer business advisors.",
  },
  {
    id: "p-microlender",
    slug: "microlender-partner",
    categorySlug: "sba-microlenders",
    name: "Microlender Partner",
    shortDescription:
      "Offers small-dollar loans and business support services to early-stage and underserved businesses.",
    description:
      "Offers small-dollar loans and business support services to early-stage and underserved businesses.",
  },
  {
    id: "p-7a",
    slug: "7a-lender-partner",
    categorySlug: "sba-7a-lenders",
    name: "7(a) Lender Partner",
    shortDescription:
      "Provides SBA-backed financing for working capital, equipment, and general business needs.",
    description:
      "Provides SBA-backed financing for working capital, equipment, and general business needs.",
  },
  {
    id: "p-504",
    slug: "504-lender-partner",
    categorySlug: "sba-504-lenders",
    name: "504 Lender Partner",
    shortDescription:
      "Offers long-term, fixed-rate financing for major fixed assets.",
    description:
      "Offers long-term, fixed-rate financing for major fixed assets.",
  },
  {
    id: "p-community-advantage",
    slug: "community-advantage-partner",
    categorySlug: "community-advantage-lenders",
    name: "Community Advantage Partner",
    shortDescription:
      "Provides mission-focused SBA-backed loans to underserved small businesses.",
    description:
      "Provides mission-focused SBA-backed loans to underserved small businesses.",
  },
  {
    id: "p-cdc",
    slug: "cdc-partner",
    categorySlug: "certified-development-companies",
    name: "CDC Partner",
    shortDescription:
      "Delivers SBA 504 loans to support business expansion and job creation.",
    description:
      "Delivers SBA 504 loans to support business expansion and job creation.",
  },
  {
    id: "p-apex",
    slug: "apex-partner",
    categorySlug: "apex-accelerators",
    name: "APEX Partner",
    shortDescription:
      "Provides training and guidance to help businesses pursue government contracting.",
    description:
      "Provides training and guidance to help businesses pursue government contracting.",
  },
  {
    id: "p-useac",
    slug: "useac-partner",
    categorySlug: "export-assistance-centers",
    name: "USEAC Partner",
    shortDescription:
      "Offers export counseling and market guidance for global market entry.",
    description:
      "Offers export counseling and market guidance for global market entry.",
  },
  {
    id: "p-district",
    slug: "sba-district-office-partner",
    categorySlug: "sba-district-offices",
    name: "SBA District Office Partner",
    shortDescription:
      "Provides local SBA program information and connections to SBA-aligned resources.",
    description:
      "Provides local SBA program information and connections to SBA-aligned resources.",
  },
];

export function getPartnerBySlug(slug: string) {
  return partners.find((p) => p.slug === slug);
}

export function getPartnersByCategorySlug(categorySlug: string) {
  return partners.filter((p) => p.categorySlug === categorySlug);
}
