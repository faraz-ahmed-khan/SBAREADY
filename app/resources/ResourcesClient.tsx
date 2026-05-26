import { articles } from "@/data/articles";
import { guides } from "@/data/guides";
import { toolkits } from "@/data/toolkits";
import { modules } from "@/data/modules";
import { checklists } from "@/data/checklists";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { GuideCard } from "@/components/cards/GuideCard";
import { ToolkitCard } from "@/components/cards/ToolkitCard";
import { ModuleCard } from "@/components/cards/ModuleCard";
import { ChecklistCard } from "@/components/cards/ChecklistCard";
import { FadeInView } from "@/components/ui/FadeInView";

function ResourceSection({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-warm px-6 py-16 last:border-b-0 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <h2 className="font-display text-3xl text-navy">{title}</h2>
          <p className="mt-3 max-w-2xl text-text-light">{description}</p>
          <div className="section-divider" />
        </FadeInView>
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">{children}</div>
      </div>
    </section>
  );
}

export function ResourcesClient() {
  return (
    <div className="bg-warm/40">
      <ResourceSection
        id="articles"
        title="Articles"
        description="Educational articles on documentation, eligibility, and program alignment."
      >
        {articles.map((a) => (
          <FadeInView key={a.id}>
            <ArticleCard article={a} />
          </FadeInView>
        ))}
      </ResourceSection>

      <ResourceSection
        id="guides"
        title="Readiness Guides"
        description="Step-by-step guides to prepare documentation and understand requirements."
      >
        {guides.map((g) => (
          <FadeInView key={g.id}>
            <GuideCard guide={g} />
          </FadeInView>
        ))}
      </ResourceSection>

      <ResourceSection
        id="toolkits"
        title="Toolkits"
        description="Reference materials and templates for organizing your readiness work."
      >
        {toolkits.map((t) => (
          <FadeInView key={t.id}>
            <ToolkitCard toolkit={t} />
          </FadeInView>
        ))}
      </ResourceSection>

      <ResourceSection
        id="modules"
        title="Learning Modules"
        description="Sequential lessons on readiness topics—visit Learning for the suggested path."
      >
        {modules.map((m) => (
          <FadeInView key={m.id}>
            <ModuleCard module={m} />
          </FadeInView>
        ))}
      </ResourceSection>

      <ResourceSection
        id="checklists"
        title="Checklists"
        description="Practical checklists to verify documentation before formal program steps."
      >
        {checklists.map((c) => (
          <FadeInView key={c.id}>
            <ChecklistCard checklist={c} />
          </FadeInView>
        ))}
      </ResourceSection>
    </div>
  );
}
