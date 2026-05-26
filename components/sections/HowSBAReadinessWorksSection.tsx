"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GYBS_CTA_LABEL, GYBS_URL } from "@/lib/constants";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Understand Requirements",
    copy: "Translate program language into a document map your firm can maintain.",
  },
  {
    title: "Assess Your Business",
    copy: "Align financials, control, and operations so the story matches the file.",
  },
  {
    title: "Prepare Documentation",
    copy: "Build an indexed bundle you can refresh quarterly—not only on deadlines.",
  },
  {
    title: "Complete Readiness Check",
    copy: "Use GYBS for standardized inputs before you pursue formal pathways.",
    gybs: true,
  },
  {
    title: "Move Forward with Confidence",
    copy: "Enter conversations with clarity—and fewer surprises under review.",
  },
];

const stagger = 0.15;

function StepNumber({ n, highlight }: { n: number; highlight?: boolean }) {
  return (
    <div
      className={
        highlight
          ? "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-navy font-display text-xl font-semibold text-gold shadow-[0_0_0_4px_rgba(227,194,122,0.2)]"
          : "flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-navy font-display text-xl font-semibold text-gold shadow-md shadow-navy/10"
      }
      aria-hidden
    >
      {n}
    </div>
  );
}

/** Vertical stack: explicit grid so badges never overlap copy. */
function ProcessVertical() {
  return (
    <div className="relative lg:hidden">
      {/* Continuous rail — line sits in the gutter between badge column and copy */}
      <div
        className="pointer-events-none absolute left-6 top-16 bottom-16 w-px bg-warm/90"
        aria-hidden
      />
      <ol className="relative space-y-0">
        {steps.map((s, idx) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              delay: idx * stagger,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid grid-cols-[3rem_1fr] gap-x-6 pb-16 last:pb-0 sm:grid-cols-[3.25rem_1fr] sm:gap-x-8 md:gap-x-10"
          >
            <div className="flex justify-center pt-1">
              <StepNumber n={idx + 1} highlight={s.gybs} />
            </div>

            <div className="min-w-0 space-y-4 pt-0.5">
              <h3 className="font-display text-[22px] font-semibold leading-snug text-navy sm:text-[24px]">
                {s.title}
              </h3>

              {s.gybs ? (
                <div className="rounded-2xl border border-gold/35 bg-gradient-to-br from-gold/[0.07] to-transparent p-6 shadow-sm shadow-navy/[0.04] ring-1 ring-gold/10">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    Do this on GYBS
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-text-light">
                    {s.copy}
                  </p>
                  <a
                    href={GYBS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold bg-navy px-5 py-2.5 font-sans text-sm font-semibold text-gold transition-colors duration-300 hover:bg-gold hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
                  >
                    {GYBS_CTA_LABEL}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
              ) : (
                <p className="max-w-prose text-base leading-[1.7] text-text-light">
                  {s.copy}
                </p>
              )}
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

/** Desktop: five columns with breathing room and Playfair titles */
function ProcessHorizontal() {
  return (
    <div className="relative mt-20 hidden lg:block">
      <div className="absolute left-[8%] right-[8%] top-[22px] h-px border-t border-dashed border-gold/35" />

      <div className="grid grid-cols-5 gap-x-6 xl:gap-x-10">
        {steps.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              delay: idx * stagger,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center text-center"
          >
            <StepNumber n={idx + 1} highlight={s.gybs} />

            {s.gybs ? (
              <p className="mt-6 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                Do this on GYBS
              </p>
            ) : (
              <div className="mt-6 h-5" aria-hidden />
            )}

            <h3 className="mt-4 min-h-[3.5rem] font-display text-lg font-semibold leading-snug text-navy xl:text-xl">
              {s.title}
            </h3>

            {s.gybs ? (
              <div className="mt-4 w-full rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/[0.06] to-transparent p-5 text-left shadow-sm ring-1 ring-gold/10">
                <p className="text-sm leading-relaxed text-text-light">{s.copy}</p>
                <a
                  href={GYBS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold link-gold-underline"
                >
                  {GYBS_CTA_LABEL}
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>
              </div>
            ) : (
              <p className="mt-4 text-sm leading-relaxed text-text-light">{s.copy}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function HowSBAReadinessWorksSection() {
  return (
    <section className="bg-surface px-6 py-20 md:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <SectionHeading eyebrow="The process" title="How SBA Readiness Works" />
        </FadeInView>

        <ProcessVertical />
        <ProcessHorizontal />
      </div>
    </section>
  );
}
