export interface HomeFaq {
  id: string;
  question: string;
  answer: string;
}

export const homeFaqs: HomeFaq[] = [
  {
    id: "faq-1",
    question: "What is the SBA?",
    answer:
      "The U.S. Small Business Administration (SBA) is a federal agency that supports small businesses through counseling, training, and access to capital programs delivered in partnership with local organizations.",
  },
  {
    id: "faq-2",
    question: "What types of support do SBA partners provide?",
    answer:
      "SBA partners may provide advising, training, mentoring, financing guidance, export counseling, and connections to government contracting or local program resources—depending on the partner category.",
  },
  {
    id: "faq-3",
    question: "Do SBA partners charge for services?",
    answer:
      "Many counseling and mentoring services through SBA-aligned partners are free or low-cost. Loan and financing partners apply their own terms. Always confirm costs directly with the partner you contact.",
  },
  {
    id: "faq-4",
    question: "Are SBA partners government offices?",
    answer:
      "Not always. Some partners are nonprofit centers, lenders, or volunteer networks. SBA District Offices are local federal offices. Each category page explains the type of organization involved.",
  },
  {
    id: "faq-5",
    question: "How do I choose the right SBA partner?",
    answer:
      "Start with the partner category that matches your need—training, mentoring, capital, contracting, or export support. Review the category description, then explore partners listed on that category page.",
  },
];
