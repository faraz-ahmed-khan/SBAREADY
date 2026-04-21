export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Eligibility" | "Programs" | "Process" | "GYBS";
}

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "What is SBA readiness?",
    answer:
      "SBA readiness is the disciplined practice of aligning documentation, eligibility narratives, and operational evidence before you engage formal application or certification pathways.",
    category: "General",
  },
  {
    id: "faq-2",
    question: "Who qualifies for the 8(a) program?",
    answer:
      "Eligibility centers on business size standards, unconditional control by disadvantaged owners, good character, and potential for success—each with specific documentation. Always validate against current federal rules before filing.",
    category: "Eligibility",
  },
  {
    id: "faq-3",
    question: "How long does SBA certification take?",
    answer:
      "Timelines vary by program, completeness of your file, and reviewer load. Incomplete documentation is the most common cause of delay—structured preparation reduces rework.",
    category: "Process",
  },
  {
    id: "faq-4",
    question: "What documents do I need?",
    answer:
      "Expect entity records, financial statements, tax returns, ownership and control artifacts, and program-specific attestations. Your checklist should mirror the program you pursue—not a generic internet list.",
    category: "Process",
  },
  {
    id: "faq-5",
    question: "Is this website affiliated with the SBA?",
    answer:
      "Misconi Network is an independent educational resource. It does not represent the federal government. Official guidance always comes from SBA.gov and authoritative federal sources.",
    category: "General",
  },
  {
    id: "faq-6",
    question: "How do I check my readiness score?",
    answer:
      "Use the external diagnostic hosted at Get Your Business Score (GYBS). It complements—not replaces—official eligibility determinations.",
    category: "GYBS",
  },
  {
    id: "faq-7",
    question: "What is GYBS?",
    answer:
      "GYBS (Get Your Business Score) is an external diagnostic tool referenced throughout this site for standardized readiness inputs. Misconi Network links out for this step by design.",
    category: "GYBS",
  },
  {
    id: "faq-8",
    question: "Can I apply directly through this site?",
    answer:
      "No. This platform is informational only. Applications are submitted through the appropriate federal systems and program channels after you meet program-specific requirements.",
    category: "Programs",
  },
  {
    id: "faq-9",
    question: "Do investors break small business status?",
    answer:
      "Affiliation and control determinations can be complex. The key is whether relationships materially impact independence, control, or size—document facts and seek qualified counsel when structures are non-trivial.",
    category: "Eligibility",
  },
  {
    id: "faq-10",
    question: "What does 'documentation tempo' mean?",
    answer:
      "A quarterly rhythm to refresh financials, verify registrations, and reconcile narratives—so application windows find you prepared rather than reactive.",
    category: "Process",
  },
];
