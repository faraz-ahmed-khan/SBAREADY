import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { modules } from "@/data/modules";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FadeInView } from "@/components/ui/FadeInView";
import { ModuleCard } from "@/components/cards/ModuleCard";

export const metadata: Metadata = {
  title: "Learning Modules",
  description:
    "Sequential modules on readiness, documentation, and program alignment.",
};

const path = modules.slice(0, 5);

export default function LearningPage() {
  return (
    <div className="bg-warm/30">
      <section className="relative flex min-h-[40vh] flex-col justify-end bg-navy px-6 pb-12 pt-36 text-white lg:px-10">
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Learning" }]}
            className="text-white/70"
          />
          <h1 className="mt-6 max-w-3xl font-display text-[40px] font-bold leading-tight md:text-[48px]">
            Learning Modules
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
            Progressive lessons—built for teams who prefer continuity over cramming.
          </p>
        </div>
      </section>

      <section className="border-b border-warm bg-surface px-6 py-14 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <FadeInView>
            <p className="eyebrow text-gold">Learning path</p>
            <h2 className="mt-3 font-display text-3xl text-navy">
              Suggested sequence
            </h2>
            <div className="section-divider" />
          </FadeInView>
          <div className="mt-10 hidden gap-4 overflow-x-auto pb-4 lg:flex lg:items-stretch">
            {path.map((m, idx) => (
              <div key={m.id} className="flex min-w-[280px] flex-1 items-center gap-4">
                <ModuleCard module={m} />
                {idx < path.length - 1 ? (
                  <ArrowRight className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                ) : null}
              </div>
            ))}
          </div>
          <div className="mt-10 space-y-6 lg:hidden">
            {path.map((m) => (
              <ModuleCard key={m.id} module={m} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <FadeInView>
            <h2 className="font-display text-3xl text-navy">All modules</h2>
            <div className="section-divider" />
          </FadeInView>
          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {modules.map((m) => (
              <FadeInView key={m.id}>
                <ModuleCard module={m} />
              </FadeInView>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/resources#modules"
              className="inline-flex text-sm font-semibold text-gold link-gold-underline"
            >
              View modules in Resources →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
