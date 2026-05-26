import { readinessTopics, getArticlesForTopic } from "@/data/readinessTopics";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/cards/ArticleCard";

export function ReadinessTopicsSection() {
  return (
    <section className="bg-warm px-6 py-16 md:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <SectionHeading
            eyebrow="What you need to know"
            title="Readiness Topics"
            align="left"
          />
        </FadeInView>
        <div className="mt-14 space-y-16">
          {readinessTopics.map((topic) => {
            const cards = getArticlesForTopic(topic.id);
            return (
              <FadeInView key={topic.id}>
                <h3 className="font-display text-2xl text-navy">{topic.label}</h3>
                <div className="section-divider" />
                <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {cards.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
