import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { resourceCategories } from "@/data/categories";
import { articles } from "@/data/articles";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FadeInView } from "@/components/ui/FadeInView";
import { ArticleCard } from "@/components/cards/ArticleCard";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return resourceCategories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cat = resourceCategories.find((c) => c.slug === params.slug);
  if (!cat) return {};
  return {
    title: `${cat.name} Resources`,
    description: cat.description,
  };
}

export default function CategoryPage({ params }: Props) {
  const cat = resourceCategories.find((c) => c.slug === params.slug);
  if (!cat) notFound();

  const items = articles.filter((a) => a.topic === cat.slug);

  return (
    <div className="bg-warm/30">
      <section className="border-b border-warm bg-surface px-6 pb-10 pt-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: cat.name },
            ]}
          />
          <h1 className="mt-8 font-display text-[40px] font-bold text-navy md:text-[48px]">
            {cat.name}
          </h1>
          <p className="mt-4 max-w-2xl text-text-light">{cat.description}</p>
          <Link
            href="/resources"
            className="mt-6 inline-flex text-sm font-semibold text-gold link-gold-underline"
          >
            ← All resources
          </Link>
        </div>
      </section>
      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((a) => (
            <FadeInView key={a.id}>
              <ArticleCard article={a} />
            </FadeInView>
          ))}
        </div>
      </section>
    </div>
  );
}
