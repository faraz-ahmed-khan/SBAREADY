import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getPartnerCategoryBySlug,
  partnerCategories,
} from "@/data/partnerCategories";
import { getPartnersByCategorySlug } from "@/data/partners";
import { PageShell } from "@/components/layout/PageShell";
import { PartnerCard } from "@/components/cards/PartnerCard";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return partnerCategories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const category = getPartnerCategoryBySlug(params.slug);
  if (!category) return {};
  return {
    title: category.name,
    description: category.description,
  };
}

export default function CategoryPage({ params }: Props) {
  const category = getPartnerCategoryBySlug(params.slug);
  if (!category) notFound();

  const categoryPartners = getPartnersByCategorySlug(category.slug);

  return (
    <PageShell title={category.name} wide>
      <p>{category.description}</p>

      <section>
        <h2 className="font-display text-2xl font-semibold text-navy">Partner List</h2>
        <div className="section-divider" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {categoryPartners.map((partner) => (
            <PartnerCard key={partner.id} partner={partner} />
          ))}
        </div>
      </section>

      <p>
        <Link href="/" className="text-sm font-semibold text-gold link-gold-underline">
          ← Back to all categories
        </Link>
      </p>
    </PageShell>
  );
}
