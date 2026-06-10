import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PartnerCategory } from "@/data/partnerCategories";

export function CategoryLinkCard({ category }: { category: PartnerCategory }) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group flex items-start justify-between gap-4 rounded-xl border border-warm bg-white px-5 py-4 transition-colors hover:border-gold hover:bg-warm/30"
    >
      <span className="font-medium text-navy group-hover:text-gold">{category.name}</span>
      <ArrowRight
        className="mt-0.5 h-4 w-4 shrink-0 text-gold opacity-70 transition-opacity group-hover:opacity-100"
        aria-hidden
      />
    </Link>
  );
}
