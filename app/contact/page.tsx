import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/app/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach the Misconi Network team—education inquiries only.",
};

export default function ContactPage() {
  return (
    <div className="bg-warm/30">
      <section className="border-b border-warm bg-surface px-6 pb-10 pt-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          />
          <h1 className="mt-8 font-display text-[40px] font-bold text-navy md:text-[48px]">
            Contact
          </h1>
          <p className="mt-4 max-w-2xl text-text-light">
            Educational inquiries and partnership notes—we respond during business
            hours. This inbox does not process applications or readiness scoring.
          </p>
        </div>
      </section>

      <section className="px-6 py-14 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="border-l-[3px] border-gold pl-6">
              <h2 className="font-display text-2xl text-navy">Direct line</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-light">
                Misconi Network is informational. For scoring and diagnostic flows,
                use GYBS from the header call-to-action.
              </p>
              <a
                href="mailto:contact@misconinetwork.com"
                className="mt-6 inline-flex text-sm font-semibold text-gold link-gold-underline"
              >
                contact@misconinetwork.com
              </a>
              <p className="mt-6 text-sm text-text-light">
                Hours: Monday–Friday, 9am–5pm ET (illustrative).
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
