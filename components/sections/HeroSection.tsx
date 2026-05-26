"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { GYBS_CTA_LABEL, GYBS_URL } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

const headline =
  "Understand SBA Opportunities Through Readiness".split(" ");

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-navy px-6 pb-16 pt-28 text-center text-white">
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(227,194,122,0.06),transparent_65%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease }}
      />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
        aria-hidden
      >
        <defs>
          <pattern
            id="hero-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M48 0H0V48"
              fill="none"
              stroke="white"
              strokeWidth="0.6"
            />
            <path
              d="M0 0 L48 48"
              fill="none"
              stroke="white"
              strokeWidth="0.4"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>
      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.65, ease }}
          className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold md:text-xs"
        >
          MISCONI NETWORK — SBA EDUCATION PLATFORM
        </motion.p>
        <h1 className="mt-6 font-display text-[40px] font-bold leading-[1.05] text-white md:text-[56px] lg:text-[64px]">
          {headline.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="inline-block [margin-right:0.2em]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + i * 0.05,
                duration: 0.65,
                ease,
              }}
            >
              {word}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.65, ease }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          Learn requirements, understand eligibility, and prepare your business
          for government contracting.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.65, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/opportunities" variant="primary" size="lg">
            Explore Opportunities
          </Button>
          <Button href={GYBS_URL} external variant="outline" size="lg">
            {GYBS_CTA_LABEL}
          </Button>
          <Button href="/learning" variant="ghost" size="lg" className="text-white">
            Start Learning →
          </Button>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
