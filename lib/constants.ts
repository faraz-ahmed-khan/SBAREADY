/** External readiness tool — all eligibility CTAs point here. */
const DEFAULT_GYBS_URL = "https://getyourbusinessscore.com";
const DEFAULT_GYBS_CTA_LABEL = "Get Your Business Score";

/** Must be NEXT_PUBLIC_* — used in client components (header, hero, mobile nav). */
export const GYBS_URL =
  process.env.NEXT_PUBLIC_GYBS_URL?.trim() || DEFAULT_GYBS_URL;

export const GYBS_CTA_LABEL =
  process.env.NEXT_PUBLIC_GYBS_CTA_LABEL?.trim() || DEFAULT_GYBS_CTA_LABEL;
