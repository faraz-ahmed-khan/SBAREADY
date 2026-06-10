import Link from "next/link";
import type { Partner } from "@/data/partners";
import { Button } from "@/components/ui/Button";

export function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <article className="rounded-xl border border-warm bg-white p-6">
      <h3 className="font-display text-xl text-navy">{partner.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-text-light">
        {partner.shortDescription}
      </p>
      <div className="mt-6">
        <Link href={`/partner/${partner.slug}`}>
          <Button variant="primary" size="sm">
            View Partner
          </Button>
        </Link>
      </div>
    </article>
  );
}
