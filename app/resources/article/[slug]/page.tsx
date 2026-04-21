import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/data/articles";
import { GYBS_URL } from "@/lib/constants";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeInView } from "@/components/ui/FadeInView";

type Props = { params: { slug: string } };

function injectHeadingIds(html: string) {
  let i = 0;
  return html.replace(/<h2>/g, () => {
    i += 1;
    return `<h2 id="section-${i}" class="scroll-mt-28">`;
  });
}

function extractToc(html: string) {
  const items = Array.from(html.matchAll(/<h2>(.*?)<\/h2>/g)).map((m, idx) => {
    const title = m[1].replace(/<[^>]*>/g, "");
    return { id: `section-${idx + 1}`, title };
  });
  return items;
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const html = injectHeadingIds(article.content);
  const toc = extractToc(article.content);
  const related = articles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="bg-warm/30">
      <section className="border-b border-warm bg-surface px-6 pb-10 pt-32 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: article.title },
            ]}
          />
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.08em] text-gray-mid">
            <Badge variant="navy">{article.category}</Badge>
            <span>{article.readTime} min read</span>
            <span>{article.date}</span>
          </div>
          <h1 className="mt-6 font-display text-[40px] font-bold leading-tight text-navy md:text-[48px]">
            {article.title}
          </h1>
          {article.author ? (
            <p className="mt-4 text-sm text-text-light">By {article.author}</p>
          ) : null}
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <FadeInView className="max-w-[720px]">
          <article
            className="prose-editorial rounded-3xl border border-warm bg-surface p-8 md:p-12"
          >
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </article>
          <div className="mt-10 flex flex-wrap items-center gap-4 rounded-2xl border border-warm bg-surface px-6 py-5">
            <span className="font-semibold text-navy">Was this helpful?</span>
            <button
              type="button"
              className="rounded-full border border-warm px-4 py-1.5 text-sm text-text-light hover:border-gold"
            >
              Yes
            </button>
            <button
              type="button"
              className="rounded-full border border-warm px-4 py-1.5 text-sm text-text-light hover:border-gold"
            >
              No
            </button>
            <span className="text-sm text-gray-mid">
              Share:{" "}
              <a
                className="link-gold-underline text-gold"
                href={`mailto:?subject=${encodeURIComponent(article.title)}`}
              >
                Email
              </a>
            </span>
          </div>
          <div className="mt-8 rounded-2xl border border-warm bg-navy px-8 py-8 text-white">
            <p className="eyebrow text-gold">Next step</p>
            <h2 className="mt-3 font-display text-2xl text-white">
              Check readiness on GYBS
            </h2>
            <p className="mt-3 text-sm text-white/75">
              Align documentation posture before formal program conversations.
            </p>
            <Button href={GYBS_URL} external variant="primary" className="mt-6">
              Check readiness →
            </Button>
          </div>
        </FadeInView>

        <aside className="lg:sticky lg:top-32 lg:self-start">
          <div className="rounded-2xl border border-warm bg-surface p-6">
            <p className="caption-label text-gold">On this page</p>
            <ul className="mt-4 space-y-2 text-sm">
              {toc.map((t) => (
                <li key={t.id}>
                  <a className="link-gold-underline text-text-light" href={`#${t.id}`}>
                    {t.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 rounded-2xl border border-warm bg-surface p-6">
            <p className="caption-label text-gold">Related resources</p>
            <ul className="mt-4 space-y-3 text-sm text-text-light">
              {related.map((r) => (
                <li key={r.id}>
                  <Link
                    href={`/resources/article/${r.slug}`}
                    className="link-gold-underline text-navy hover:text-gold"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
