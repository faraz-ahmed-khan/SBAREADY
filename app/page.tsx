import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FeaturedResourcesSection } from "@/components/sections/FeaturedResourcesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowSBAReadinessWorksSection } from "@/components/sections/HowSBAReadinessWorksSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { OpportunityCategoriesSection } from "@/components/sections/OpportunityCategoriesSection";
import { ReadinessTopicsSection } from "@/components/sections/ReadinessTopicsSection";
import { WhyReadinessMattersSection } from "@/components/sections/WhyReadinessMattersSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OpportunityCategoriesSection />
      <ReadinessTopicsSection />
      <HowSBAReadinessWorksSection />
      <FeaturedResourcesSection />
      <WhyReadinessMattersSection />
      <FAQSection />
      <FinalCTASection />
      <NewsletterSection />
    </>
  );
}
