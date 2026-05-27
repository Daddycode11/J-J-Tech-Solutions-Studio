"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "How much does a website cost?",
    answer: "Our basic websites start at ₱3,500+. Pricing depends on features, design, and system complexity.",
  },
  {
    question: "How long does it take to build?",
    answer: "Simple websites take 3–5 days. Advanced systems (POS, booking, dashboard) take 7–14 days.",
  },
  {
    question: "Do I own the website after delivery?",
    answer: "Yes. 100% ownership is given to the client after full payment. No hidden control.",
  },
  {
    question: "Can I request changes later?",
    answer: "Yes. We offer support and upgrade options depending on your package.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative section container py-24 overflow-hidden"
    >
      {/* Background glow (match hero style) */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-brand-amber/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow [animation-delay:2s]" />

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
          Frequently Asked{" "}
          <span className="text-gradient-blue">Questions</span>
        </h2>

        <p className="text-brand-muted mt-4 max-w-xl mx-auto">
          Everything you need to know before starting your project with us.
        </p>
      </div>

      {/* FAQ List */}
      <div className="relative z-10 max-w-2xl mx-auto space-y-4">
        {FAQS.map((item, index) => {
          const isOpen = index === openIndex;

          return (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-white font-medium">
                  {item.question}
                </span>

                <span className="text-brand-blue text-xl">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {isOpen && (
                <div className="px-5 pb-4 text-brand-muted text-sm leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom CTA hint */}
      <div className="text-center mt-12 relative z-10">
        <p className="text-brand-muted text-sm">
          Still have questions?{" "}
          <a href="#contact" className="text-brand-blue hover:underline">
            Contact us →
          </a>
        </p>
      </div>
    </section>
  );
}