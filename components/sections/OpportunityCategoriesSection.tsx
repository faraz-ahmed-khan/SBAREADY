import { opportunities } from "@/data/opportunities";
import { FadeInView } from "@/components/ui/FadeInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/StaggerContainer";
import { OpportunityCard } from "@/components/cards/OpportunityCard";

export function OpportunityCategoriesSection() {
  return (
    <section className="bg-surface px-6 py-16 md:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <FadeInView>
          <SectionHeading
            eyebrow="Explore programs"
            title="SBA Opportunity Categories"
            align="center"
            className="mx-auto"
          />
        </FadeInView>
        <StaggerContainer className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((o) => (
            <StaggerItem key={o.id}>
              <OpportunityCard opportunity={o} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
