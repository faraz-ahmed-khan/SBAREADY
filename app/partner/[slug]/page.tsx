import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPartnerBySlug, partners } from "@/data/partners";
import { getPartnerCategoryBySlug } from "@/data/partnerCategories";
import { MISCONI_USA_URL } from "@/lib/constants";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return partners.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const partner = getPartnerBySlug(params.slug);
  if (!partner) return {};
  return {
    title: partner.name,
    description: partner.description,
  };
}

export default function PartnerPage({ params }: Props) {
  const partner = getPartnerBySlug(params.slug);
  if (!partner) notFound();

  const category = getPartnerCategoryBySlug(partner.categorySlug);

  return (
    <PageShell title={partner.name}>
      <p>{partner.description}</p>

      <section>
        <h2 className="font-display text-2xl font-semibold text-navy">Learn More</h2>
        <div className="section-divider" />
        <div className="mt-6">
          <Button href={MISCONI_USA_URL} external variant="primary" size="md">
            Learn More →
          </Button>
        </div>
      </section>

      {category ? (
        <p>
          <Link
            href={`/category/${category.slug}`}
            className="text-sm font-semibold text-gold link-gold-underline"
          >
            ← Back to {category.name}
          </Link>
        </p>
      ) : null}
    </PageShell>
  );
}
