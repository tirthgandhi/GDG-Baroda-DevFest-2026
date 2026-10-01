import React, { useState } from "react";
import { faqData, FAQItem } from "../data/faq.ts";
import { ChevronDown, HelpCircle, Mail } from "lucide-react";
import { eventConfig } from "../config/event.ts";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAFAFC] border-b border-neutral-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4285F4] uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>12. Clarifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-3">
            Everything you need to know about DevFest Baroda 2026, tickets, Code Lounge, and logistics.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {faqData.map((item: FAQItem) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-neutral-200/90 overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50/50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-neutral-900 font-display">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#4285F4]/10 text-[#4285F4]" : "text-neutral-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed border-t border-neutral-100"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Help Box */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-neutral-200 shadow-2xs">
          <p className="text-sm font-semibold text-neutral-800">
            Have a question not addressed here?
          </p>
          <p className="text-xs text-neutral-500 mt-1">
            Our organizing team is happy to help you with accommodations, group passes, or logistics.
          </p>
          <a
            href={`mailto:${eventConfig.email}`}
            className="mt-4 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#4285F4] hover:text-[#3367D6]"
          >
            <Mail className="w-4 h-4" />
            <span>Write to {eventConfig.email}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
