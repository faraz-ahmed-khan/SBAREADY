import Link from "next/link";
import { GYBS_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { FadeInView } from "@/components/ui/FadeInView";

export function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-navy px-6 py-20 text-white md:py-28 lg:px-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden
      >
        <svg className="h-full w-full" role="img">
          <defs>
            <pattern
              id="cta-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path d="M48 0H0V48" fill="none" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <FadeInView>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold md:text-xs">
            Ready to move forward?
          </p>
          <h2 className="mt-4 font-display text-[36px] font-semibold leading-tight text-white md:text-[44px]">
            Check Your Business Readiness Today
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75">
            Use our official diagnostic tool to evaluate your SBA program
            eligibility and documentation posture.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={GYBS_URL} external variant="primary" size="lg">
              Check Your Readiness →
            </Button>
            <Link
              href="/resources"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white px-8 py-3 text-base font-medium text-white transition-colors duration-300 ease-editorial hover:bg-white hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Explore Resources
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
