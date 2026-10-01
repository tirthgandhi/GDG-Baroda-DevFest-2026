import React from "react";
import { motion } from "motion/react";
import { sponsorsData, SponsorTier } from "../data/sponsors.ts";
import { eventConfig } from "../config/event.ts";
import { ArrowUpRight, Award, Shield, Sparkles } from "lucide-react";

export const Sponsors: React.FC = () => {
  const tiers: { name: SponsorTier; label: string; badgeColor: string; gridCols: string }[] = [
    {
      name: "Title Sponsor",
      label: "Global Program Partner",
      badgeColor: "text-[#4285F4] bg-[#4285F4]/10 border-[#4285F4]/30",
      gridCols: "grid-cols-1 max-w-xl mx-auto",
    },
    {
      name: "Platinum Sponsors",
      label: "Platinum Tier",
      badgeColor: "text-neutral-800 bg-neutral-100 border-neutral-300",
      gridCols: "grid-cols-1 sm:grid-cols-2",
    },
    {
      name: "Gold Sponsors",
      label: "Gold Tier",
      badgeColor: "text-[#FBBC04] bg-[#FBBC04]/10 border-[#FBBC04]/30",
      gridCols: "grid-cols-1 sm:grid-cols-2",
    },
    {
      name: "Silver Sponsors",
      label: "Silver Tier",
      badgeColor: "text-neutral-600 bg-neutral-100 border-neutral-200",
      gridCols: "grid-cols-1 sm:grid-cols-2",
    },
  ];

  return (
    <section id="sponsors" className="py-20 sm:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4285F4] uppercase mb-3">
            <span>09. Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 font-display">
            Powered By Our Partners
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-3">
            Organizations committed to advancing developer innovation, talent empowerment, and community growth in Gujarat.
          </p>
        </div>

        {/* Tiers Loop */}
        <div className="space-y-12 sm:space-y-16">
          {tiers.map((tier) => {
            const tierSponsors = sponsorsData.filter((s) => s.tier === tier.name);
            if (tierSponsors.length === 0) return null;

            return (
              <div key={tier.name} className="text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-semibold uppercase tracking-wider mb-6 shadow-2xs">
                  <span>{tier.name}</span>
                </div>

                <div className={`grid gap-4 sm:gap-6 ${tier.gridCols}`}>
                  {tierSponsors.map((sponsor) => (
                    <div
                      key={sponsor.id}
                      className={`group bg-neutral-50/70 hover:bg-white rounded-2xl border transition-all duration-200 p-6 sm:p-8 flex flex-col items-center justify-center text-center ${
                        sponsor.isConfirmed
                          ? "border-neutral-300 hover:border-[#4285F4]/60 hover:shadow-md"
                          : "border-dashed border-neutral-300/80 hover:border-neutral-400"
                      }`}
                    >
                      {sponsor.isConfirmed ? (
                        <>
                          <div className="flex items-center gap-1.5 mb-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC04]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display">
                            {sponsor.name}
                          </h3>
                          {sponsor.description && (
                            <p className="text-xs sm:text-sm text-neutral-500 mt-2 max-w-md">
                              {sponsor.description}
                            </p>
                          )}
                          <a
                            href={sponsor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#4285F4] hover:text-[#3367D6]"
                          >
                            <span>Visit Official Site</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </>
                      ) : (
                        <div className="py-2">
                          <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-1">
                            {tier.name}
                          </span>
                          <h4 className="text-base sm:text-lg font-bold text-neutral-600 font-display">
                            {sponsor.name}
                          </h4>
                          <p className="text-xs text-neutral-400 mt-1">
                            {sponsor.description}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Become a Sponsor Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-neutral-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#FBBC04] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sponsorship Deck Available</span>
            </div>
            <h3 className="text-2xl font-bold font-display text-white">
              Connect your brand with 400+ tech builders
            </h3>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              Showcase developer platforms, recruit top engineering talent, and demonstrate ecosystem leadership at Gujarat's largest DevFest.
            </p>
          </div>
          <a
            href={eventConfig.sponsorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl text-sm font-semibold bg-[#4285F4] hover:bg-[#3367D6] text-white transition-all shadow-md shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Become a Sponsor</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
