import type { Metadata } from "next";
import { FaqPageClient } from "@/app/faq/FaqPageClient";

export const metadata: Metadata = {
  title: "FAQ | SBA Readiness Questions",
  description:
    "Answers on eligibility, documentation, program fit, and how GYBS fits into your preparation.",
};

export default function FaqPage() {
  return <FaqPageClient />;
}
