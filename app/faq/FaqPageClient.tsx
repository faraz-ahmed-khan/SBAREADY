import { faqs } from "@/data/faqs";
import { FaqItem } from "@/components/ui/FaqItem";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function FaqPageClient() {
  const left = faqs.filter((_, i) => i % 2 === 0);
  const right = faqs.filter((_, i) => i % 2 === 1);

  return (
    <div>
      <section className="bg-navy px-6 pb-12 pt-32 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            inverted
            items={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
          />
          <h1 className="mt-6 font-display text-[40px] font-bold leading-tight text-white md:text-[48px]">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Calm answers on readiness, programs, and how Get Your Business Score
            fits into preparation.
          </p>
        </div>
      </section>

      <section className="bg-warm/40 px-6 py-14 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-14">
          <div className="space-y-0">
            {left.map((f) => (
              <FaqItem key={f.id} question={f.question} answer={f.answer} />
            ))}
          </div>
          <div className="space-y-0">
            {right.map((f) => (
              <FaqItem key={f.id} question={f.question} answer={f.answer} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
