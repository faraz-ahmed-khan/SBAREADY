import { FadeInView } from "@/components/ui/FadeInView";

const stats = [
  { value: "67%", label: "Of awarded contracts favor readiness-prepared firms." },
  { value: "3×", label: "Faster approvals for pre-qualified applicants (illustrative)." },
  { value: "$4.2B", label: "Illustrative annual SBA-aligned opportunity pool." },
];

export function WhyReadinessMattersSection() {
  return (
    <section className="bg-surface px-6 py-16 md:py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-start">
        <FadeInView className="relative pl-8">
          <div
            aria-hidden
            className="absolute left-0 top-4 h-20 w-[3px] bg-gold"
          />
          <blockquote className="font-display text-3xl font-semibold italic leading-snug text-navy md:text-[40px]">
            Only 12% of eligible businesses successfully apply for SBA-aligned
            programs.
          </blockquote>
          <ul className="mt-8 space-y-4 text-sm leading-relaxed text-text-light">
            <li>
              Readiness reduces rework—reviewers should see continuity, not
              contradictions.
            </li>
            <li>
              Strong preparation helps teams interpret requirements with calm,
              not panic.
            </li>
            <li>
              External diagnostics (GYBS) complement—not replace—official
              policy guidance.
            </li>
          </ul>
        </FadeInView>

        <FadeInView className="space-y-6">
          {stats.map((s) => (
            <div
              key={s.value}
              className="rounded-2xl border border-warm bg-white p-8 shadow-sm"
            >
              <p className="font-display text-5xl italic text-gold">{s.value}</p>
              <p className="mt-3 max-w-sm font-sans text-base text-navy">{s.label}</p>
            </div>
          ))}
        </FadeInView>
      </div>
    </section>
  );
}
