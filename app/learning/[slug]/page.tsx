import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getModuleBySlug, modules } from "@/data/modules";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { FadeInView } from "@/components/ui/FadeInView";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const mod = getModuleBySlug(params.slug);
  if (!mod) return {};
  return {
    title: mod.title,
    description: mod.summary,
  };
}

export default function LearningDetailPage({ params }: Props) {
  const mod = getModuleBySlug(params.slug);
  if (!mod) notFound();

  return (
    <div className="bg-warm/30">
      <section className="border-b border-warm bg-surface px-6 pb-10 pt-32 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Learning", href: "/learning" },
              { label: mod.title },
            ]}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Badge variant="navy">{mod.category}</Badge>
            <span className="text-xs uppercase tracking-[0.08em] text-gray-mid">
              {mod.estimatedMinutes} minutes
            </span>
          </div>
          <h1 className="mt-6 font-display text-[40px] font-bold leading-tight text-navy md:text-[48px]">
            {mod.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-text-light">{mod.summary}</p>
        </div>
      </section>

      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-10">
        <FadeInView>
          {mod.content ? (
            <div
              className="prose-editorial rounded-3xl border border-warm bg-surface p-8 md:p-12"
              dangerouslySetInnerHTML={{ __html: mod.content }}
            />
          ) : (
            <div className="rounded-3xl border border-warm bg-surface p-10">
              <p className="text-text-light">
                Full lesson content is being expanded. Use the outline as a
                syllabus—then pair it with related articles and guides.
              </p>
            </div>
          )}
        </FadeInView>
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <div className="rounded-2xl border border-warm bg-surface p-6">
            <p className="caption-label text-gold">Lessons</p>
            <ol className="mt-4 space-y-3 text-sm text-text-light">
              {mod.lessons.map((lesson, idx) => (
                <li key={lesson.id} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-semibold text-gold">
                    {idx + 1}
                  </span>
                  <span className="text-navy">{lesson.title}</span>
                </li>
              ))}
            </ol>
            <Link
              href="/resources"
              className="mt-6 inline-flex text-sm font-semibold text-gold link-gold-underline"
            >
              Explore related resources →
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
