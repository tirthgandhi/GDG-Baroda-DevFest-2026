import React from "react";
import { motion } from "motion/react";
import { ticketsData, TicketTier } from "../data/tickets.ts";
import { eventConfig } from "../config/event.ts";
import { Check, ArrowRight, ShieldCheck, Sparkles, Tag, Users } from "lucide-react";

export const Tickets: React.FC = () => {
  return (
    <section id="tickets" className="py-20 sm:py-28 bg-[#FAFAFC] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4285F4] uppercase mb-3">
            <span>06. Registration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 font-display">
            Choose Your DevFest Experience
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-3">
            Strict capacity of 400 attendees to guarantee quality networking, comfortable seating, and hands-on Code Lounge interaction.
          </p>
        </div>

        {/* Tickets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {ticketsData.map((ticket: TicketTier, idx: number) => {
            const isSoldOut = ticket.status === "sold-out";
            return (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className={`relative rounded-2xl bg-white border flex flex-col justify-between transition-all duration-300 ${
                  ticket.isPopular
                    ? "border-[#4285F4] shadow-lg ring-2 ring-[#4285F4]/20 md:-translate-y-2"
                    : ticket.isPatron
                    ? "border-neutral-900 shadow-md bg-linear-to-b from-white to-neutral-50/50"
                    : "border-neutral-200/90 shadow-2xs hover:shadow-md hover:border-neutral-300"
                }`}
              >
                {/* Popular or VIP Ribbon */}
                {ticket.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white shadow-xs ${
                      ticket.isPopular ? "bg-[#4285F4]" : "bg-neutral-900"
                    }`}
                  >
                    {ticket.badge}
                  </div>
                )}

                <div className="p-7 sm:p-8 flex-1">
                  {/* Category Title & Subtitle */}
                  <h3 className="text-xl font-bold text-neutral-900 font-display">
                    {ticket.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1 min-h-[32px]">
                    {ticket.subtitle}
                  </p>

                  {/* Price */}
                  <div className="mt-5 pb-6 border-b border-neutral-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-extrabold text-neutral-900 font-mono tracking-tight">
                        {ticket.price}
                      </span>
                      {ticket.originalPrice && (
                        <span className="text-sm font-mono text-neutral-400 line-through">
                          {ticket.originalPrice}
                        </span>
                      )}
                      <span className="text-xs text-neutral-500">/ attendee</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      Includes full conference entry + catering
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-mono">
                      What's Included:
                    </div>
                    {ticket.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            ticket.isPopular ? "text-[#4285F4]" : ticket.isPatron ? "text-neutral-900" : "text-[#34A853]"
                          }`}
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-7 sm:p-8 pt-0">
                  {isSoldOut ? (
                    <button
                      disabled
                      className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold bg-neutral-100 text-neutral-400 cursor-not-allowed text-center uppercase tracking-wider"
                    >
                      Sold Out
                    </button>
                  ) : (
                    <a
                      href={eventConfig.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow ${
                        ticket.isPopular
                          ? "bg-[#4285F4] hover:bg-[#3367D6] text-white"
                          : ticket.isPatron
                          ? "bg-neutral-900 hover:bg-neutral-800 text-white"
                          : "bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-300/80"
                      }`}
                    >
                      <span>Get Ticket</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                  <p className="text-[11px] text-center text-neutral-400 mt-2 font-mono">
                    Secured via official ticketing platform
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Student & Diversity Note */}
        <div className="mt-12 bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#34A853]/10 text-[#34A853] flex items-center justify-center shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-neutral-900 font-display">
                Student &amp; Diversity Community Access
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                Are you a student or active open-source contributor seeking financial support? Subsidized tickets are made possible by our Community Patrons.
              </p>
            </div>
          </div>
          <a
            href={`mailto:${eventConfig.email}?subject=DevFest%20Baroda%202026%20Scholarship%20Inquiry`}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-neutral-800 bg-neutral-50 hover:bg-neutral-100 border border-neutral-300 transition-colors whitespace-nowrap cursor-pointer"
          >
            Apply for Scholarship
          </a>
        </div>
      </div>
    </section>
  );
};
