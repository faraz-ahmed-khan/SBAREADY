import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, getGuideBySlug } from "@/data/guides";
import { GYBS_CTA_LABEL, GYBS_URL } from "@/lib/constants";
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
  return Array.from(html.matchAll(/<h2>(.*?)<\/h2>/g)).map((m, idx) => {
    const title = m[1].replace(/<[^>]*>/g, "");
    return { id: `section-${idx + 1}`, title };
  });
}

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
  };
}

export default function GuidePage({ params }: Props) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const html = injectHeadingIds(guide.content);
  const toc = extractToc(guide.content);
  const related = guides.filter((g) => g.id !== guide.id).slice(0, 3);

  return (
    <div className="bg-warm/30">
      <section className="border-b border-warm bg-surface px-6 pb-10 pt-32 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: guide.title },
            ]}
          />
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.08em] text-gray-mid">
            <Badge variant="navy">Readiness guide</Badge>
            <span>{guide.steps} steps</span>
            <span>{guide.difficulty}</span>
          </div>
          <h1 className="mt-6 font-display text-[40px] font-bold leading-tight text-navy md:text-[48px]">
            {guide.title}
          </h1>
          <p className="mt-4 text-base text-text-light">{guide.description}</p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-10">
        <FadeInView className="max-w-[720px]">
          <article className="prose-editorial rounded-3xl border border-warm bg-surface p-8 md:p-12">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </article>
          <div className="mt-8 rounded-2xl border border-warm bg-navy px-8 py-8 text-white">
            <p className="eyebrow text-gold">Next step</p>
            <h2 className="mt-3 font-display text-2xl text-white">{GYBS_CTA_LABEL}</h2>
            <p className="mt-3 text-sm text-white/75">
              Evaluate documentation posture before formal program conversations.
            </p>
            <Button href={GYBS_URL} external variant="primary" className="mt-6">
              {GYBS_CTA_LABEL} →
            </Button>
          </div>
        </FadeInView>

        <aside className="lg:sticky lg:top-32 lg:self-start">
          <div className="rounded-2xl border border-warm bg-surface p-6">
            <p className="caption-label text-gold">In this guide</p>
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
            <p className="caption-label text-gold">More guides</p>
            <ul className="mt-4 space-y-3 text-sm text-text-light">
              {related.map((r) => (
                <li key={r.id}>
                  <Link
                    href={`/resources/guide/${r.slug}`}
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
