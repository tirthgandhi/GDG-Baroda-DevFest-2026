import React from "react";
import { communityPartnersData } from "../data/communityPartners.ts";
import { eventConfig } from "../config/event.ts";
import { Users2, ArrowUpRight, Network } from "lucide-react";

export const CommunityPartners: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFC] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4285F4] uppercase mb-3">
            <Network className="w-3.5 h-3.5" />
            <span>10. Ecosystem Synergy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 font-display">
            Built With The Community
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-3">
            Collaborating with leading regional chapters, Women Techmakers, and university developer clubs to unify tech builders across Gujarat.
          </p>
        </div>

        {/* Partner Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {communityPartnersData.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-xl border border-neutral-200/90 hover:border-neutral-300 p-5 sm:p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-neutral-500 uppercase px-2 py-0.5 bg-neutral-100 rounded">
                    {partner.type}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    {partner.location}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
                  {partner.name}
                </h3>
              </div>

              {partner.website && partner.website !== "#" && (
                <div className="mt-4 pt-3 border-t border-neutral-100">
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#4285F4] hover:text-[#3367D6]"
                  >
                    <span>Community Page</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Partner CTA */}
        <div className="mt-12 text-center">
          <a
            href={eventConfig.partnerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-neutral-800 bg-white hover:bg-neutral-50 border border-neutral-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
          >
            <Users2 className="w-4 h-4 text-[#4285F4]" />
            <span>Become a Community Partner</span>
          </a>
        </div>
      </div>
    </section>
  );
};
