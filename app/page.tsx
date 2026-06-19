import { partnerCategories } from "@/data/partnerCategories";
import { homeFaqs } from "@/data/homeFaqs";
import { GYBS_URL, QUIZ_CTA_LABEL } from "@/lib/constants";
import { SiteBanner } from "@/components/layout/SiteBanner";
import { CategoryLinkCard } from "@/components/cards/CategoryLinkCard";
import { FaqItem } from "@/components/ui/FaqItem";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      <SiteBanner />
      <div className="px-6 py-12 md:py-16 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-navy">SBA Partner Categories</h1>
          <p className="mt-8 text-base leading-relaxed text-text-light">
            SBAReady.org helps small businesses identify the SBA partner categories
            that support their development and prepare their business for
            opportunities. Each category represents a type of organization that
            provides advising, training, financing guidance, or specialized
            assistance.
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-light">
            Select a category to learn what it does and how it supports small
            business development.
          </p>

          <section className="mt-14">
            <p className="eyebrow">About Misconi USA</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">
              Misconi USA — The Readiness Authority™
            </h2>
            <div className="section-divider" />
            <p className="mt-6 text-base leading-relaxed text-text-light">
              Misconi USA is the nation&apos;s Readiness Authority™, focused
              exclusively on preparing businesses, suppliers, and institutions to
              become structurally ready for opportunities. Misconi USA does not
              provide SBA services. SBAReady.org simply helps small businesses
              understand which SBA partner categories may support their
              development.
            </p>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
              SBA Partner Category Directory
            </h2>
            <div className="section-divider" />
            <ul className="mt-8 space-y-3">
              {partnerCategories.map((category) => (
                <li key={category.id}>
                  <CategoryLinkCard category={category} />
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14">
            <p className="eyebrow">Readiness & SBA Support</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">
              Why Readiness Matters for SBA Support
            </h2>
            <div className="section-divider" />
            <p className="mt-6 text-base leading-relaxed text-text-light">
              SBA partners provide advising, training, and assistance that help
              businesses move toward stability and growth. To benefit fully from
              SBA programs, businesses often need basic documentation, financial
              records, and operational clarity.
            </p>
            <p className="mt-4 font-medium text-navy">
              Readiness helps SBA partners:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-text-light">
              <li>Understand your business more quickly</li>
              <li>Provide more accurate guidance</li>
              <li>Identify the right support resources</li>
              <li>Connect you to appropriate SBA pathways</li>
            </ul>
            <p className="mt-6 text-base leading-relaxed text-text-light">
              SBAReady.org supports small business development by helping
              entrepreneurs identify the SBA partner categories that support
              their development and prepare their business for opportunities.
            </p>
            <p className="mt-4 text-sm text-text-light">
              Readiness is governed by Misconi USA. SBA services are provided by
              SBA-aligned partners. SBAReady.org is an informational directory
              only.
            </p>
          </section>

          <section className="mt-14">
            <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
              SBA Questions & Answers
            </h2>
            <div className="section-divider" />
            <div className="mt-6">
              {homeFaqs.map((faq) => (
                <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-2xl border border-warm bg-white p-8">
            <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
              SBA Readiness Quiz
            </h2>
            <div className="section-divider" />
            <p className="mt-6 text-base leading-relaxed text-text-light">
              A short quiz to help users understand basic SBA concepts.
            </p>
            <div className="mt-8">
              <Button href={GYBS_URL} external variant="primary" size="lg">
                {QUIZ_CTA_LABEL} →
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
