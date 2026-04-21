import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { getOpportunityBySlug, opportunities } from "@/data/opportunities";
import { getArticleBySlug } from "@/data/articles";
import { GYBS_URL } from "@/lib/constants";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeInView } from "@/components/ui/FadeInView";
import { ArticleCard } from "@/components/cards/ArticleCard";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return opportunities.map((o) => ({ slug: o.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const program = getOpportunityBySlug(params.slug);
  if (!program) return {};
  return {
    title: program.name,
    description: program.description,
  };
}

export default function OpportunityDetailPage({ params }: Props) {
  const program = getOpportunityBySlug(params.slug);
  if (!program) notFound();

  const relatedArticles = program.relatedArticleSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <div className="bg-warm/40">
      <section className="border-b border-warm bg-surface px-6 pb-10 pt-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Opportunities", href: "/opportunities" },
              { label: program.name },
            ]}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Badge variant="navy">{program.category}</Badge>
            <span
              className="inline-flex items-center gap-2 rounded-full border border-warm bg-surface px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-navy"
            >
              <span
                className="h-2 w-6 rounded-full"
                style={{ backgroundColor: program.laneColor }}
              />
              Program lane
            </span>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-[40px] font-bold leading-tight text-navy md:text-[52px]">
            {program.name}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-text-light">
            {program.description}
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.7fr_1fr] lg:px-10 lg:py-20">
        <div className="space-y-14">
          <FadeInView>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Overview
            </h2>
            <div className="section-divider" />
            <div
              className="prose-editorial mt-6 space-y-4"
              dangerouslySetInnerHTML={{ __html: program.overview }}
            />
          </FadeInView>

          <FadeInView>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Key requirements
            </h2>
            <div className="section-divider" />
            <ul className="mt-6 space-y-3">
              {program.requirements.map((r) => (
                <li
                  key={r}
                  className="flex gap-3 rounded-xl border border-warm bg-surface px-4 py-3 text-sm text-text-light"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </FadeInView>

          <FadeInView>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Eligibility criteria
            </h2>
            <div className="section-divider" />
            <ul className="mt-6 space-y-3">
              {program.eligibility.map((e) => (
                <li
                  key={e}
                  className="flex gap-3 text-sm leading-relaxed text-text-light"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </FadeInView>

          <FadeInView>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Typical process
            </h2>
            <div className="section-divider" />
            <ol className="mt-6 space-y-6">
              {program.process.map((step, idx) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-warm bg-surface p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                    Step {idx + 1}
                  </p>
                  <p className="mt-3 font-sans text-lg font-semibold text-navy">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm text-text-light">{step.detail}</p>
                </li>
              ))}
            </ol>
          </FadeInView>

          <FadeInView>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Related articles
            </h2>
            <div className="section-divider" />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {relatedArticles.map((a) =>
                a ? <ArticleCard key={a.id} article={a} /> : null,
              )}
            </div>
          </FadeInView>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <FadeInView className="rounded-2xl border border-warm bg-surface p-8 shadow-lg shadow-navy/5">
            <div className="border-l-[3px] border-gold pl-5">
              <h2 className="font-display text-xl font-semibold text-navy">
                Check your readiness for this program
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-light">
                Run the external diagnostic to organize inputs and identify gaps
                before formal steps.
              </p>
              <Button href={GYBS_URL} external variant="primary" size="md" className="mt-6 w-full">
                Check Readiness →
              </Button>
              <div className="mt-8 space-y-3 border-t border-warm pt-6 text-sm text-text-light">
                <p className="font-semibold text-navy">Related on Misconi Network</p>
                <Link href="/resources" className="block link-gold-underline text-gold">
                  Browse resources →
                </Link>
                <Link href="/learning" className="block link-gold-underline text-gold">
                  Learning modules →
                </Link>
              </div>
            </div>
          </FadeInView>
        </aside>
      </div>
    </div>
  );
}
