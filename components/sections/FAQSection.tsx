import { faqs } from "@/data/faqs";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqItem } from "@/components/ui/FaqItem";

const homeFaqs = faqs.slice(0, 8);

export function FAQSection() {
  const left = homeFaqs.filter((_, i) => i % 2 === 0);
  const right = homeFaqs.filter((_, i) => i % 2 === 1);

  return (
    <section className="bg-warm px-6 py-16 md:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <SectionHeading
            eyebrow="Got questions"
            title="Frequently Asked Questions"
            align="center"
            className="mx-auto"
          />
        </FadeInView>
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-14">
          <FadeInView className="space-y-0">
            {left.map((f) => (
              <FaqItem key={f.id} question={f.question} answer={f.answer} />
            ))}
          </FadeInView>
          <FadeInView className="space-y-0">
            {right.map((f) => (
              <FaqItem key={f.id} question={f.question} answer={f.answer} />
            ))}
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
