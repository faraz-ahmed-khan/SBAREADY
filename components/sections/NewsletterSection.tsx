import { FadeInView } from "@/components/ui/FadeInView";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function NewsletterSection() {
  return (
    <section className="border-t border-warm bg-surface px-6 py-16 md:py-20 lg:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <FadeInView className="max-w-xl">
          <SectionHeading
            eyebrow="Stay current"
            title="Quarterly readiness notes"
            align="left"
          />
          <p className="mt-4 text-sm leading-relaxed text-text-light">
            Short briefs when we publish major guides—no funnels, no noise. Newsletter
            email only.
          </p>
        </FadeInView>
        <FadeInView className="w-full max-w-md">
          <NewsletterForm />
        </FadeInView>
      </div>
    </section>
  );
}
