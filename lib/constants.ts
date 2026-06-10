const DEFAULT_GYBS_URL = "https://getyourbusinessscore.com";
const DEFAULT_MISCONI_USA_URL = "https://misconiusainc.com";
const DEFAULT_CONTACT_EMAIL = "info@sbaready.org";

export const SITE_NAME = "SBAReady.org";

export const GYBS_URL =
  process.env.NEXT_PUBLIC_GYBS_URL?.trim() || DEFAULT_GYBS_URL;

export const MISCONI_USA_URL =
  process.env.NEXT_PUBLIC_MISCONI_USA_URL?.trim() || DEFAULT_MISCONI_USA_URL;

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || DEFAULT_CONTACT_EMAIL;

export const QUIZ_CTA_LABEL = "Take the SBA Readiness Quiz";
