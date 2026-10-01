import React from "react";
import { eventConfig } from "../config/event.ts";
import { MapPin, Navigation, Compass, Calendar, Building, Sparkles } from "lucide-react";

export const Venue: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Details */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4285F4] uppercase mb-3">
              <Navigation className="w-3.5 h-3.5" />
              <span>11. The Destination</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 font-display mb-6">
              See You In Vadodara
            </h2>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
              Vadodara is known as the cultural capital of Gujarat and a rapidly ascending technology hub. DevFest 2026 will be hosted in a premier conference auditorium in the city.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#EA4335] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                    City &amp; Region
                  </div>
                  <div className="text-base font-bold text-neutral-900 font-display">
                    {eventConfig.location}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-start gap-3">
                <Building className="w-5 h-5 text-[#4285F4] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                    Official Venue
                  </div>
                  <div className="text-base font-bold text-neutral-900 font-display flex items-center gap-2">
                    <span>{eventConfig.venue}</span>
                    <span className="text-xs font-normal text-neutral-500 font-sans">
                      (To Be Announced)
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    {eventConfig.venueStatus}. All ticket holders will receive driving directions and parking details via email.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80 flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#34A853] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                    Date &amp; Time
                  </div>
                  <div className="text-base font-bold text-neutral-900 font-display">
                    {eventConfig.displayDate} · {eventConfig.time}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stylized Interactive Map Simulation */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-neutral-900 text-white p-6 sm:p-10 overflow-hidden border border-neutral-800 shadow-xl min-h-[380px] sm:min-h-[440px] flex flex-col justify-between">
              {/* Abstract Map Roads / Grid Lines */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `
                    radial-gradient(circle at 50% 50%, rgba(66, 133, 244, 0.3) 0%, transparent 60%),
                    linear-gradient(45deg, #1f2937 25%, transparent 25%),
                    linear-gradient(-45deg, #1f2937 25%, transparent 25%)
                  `,
                  backgroundSize: "60px 60px",
                }}
              />

              {/* Decorative Coordinates & Map Pins */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335] animate-ping" />
                  <span className="font-mono text-xs text-neutral-400">
                    22.3072° N, 73.1812° E · Vadodara
                  </span>
                </div>
                <span className="text-xs font-mono text-[#4285F4] bg-neutral-800/80 px-2.5 py-1 rounded border border-neutral-700">
                  Gujarat, India
                </span>
              </div>

              {/* Center Map Radar Pin */}
              <div className="relative z-10 my-auto py-10 flex flex-col items-center justify-center text-center">
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full bg-[#4285F4]/20 border border-[#4285F4]/40 flex items-center justify-center animate-pulse">
                    <div className="w-12 h-12 rounded-full bg-[#EA4335] text-white flex items-center justify-center shadow-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                  Vadodara Convention Center
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-sm font-sans">
                  Venue contract being finalized. Selected for seamless highway &amp; rail access, builder power drops, and high-speed fiber internet.
                </p>
              </div>

              {/* Footer Travel Signals */}
              <div className="relative z-10 grid grid-cols-3 gap-2 pt-4 border-t border-neutral-800 text-center text-xs">
                <div>
                  <div className="font-bold text-white">Vadodara Airport (BDQ)</div>
                  <div className="text-[10px] text-neutral-500 font-mono">15-20 mins away</div>
                </div>
                <div>
                  <div className="font-bold text-white">Vadodara Junction (BRC)</div>
                  <div className="text-[10px] text-neutral-500 font-mono">Major Western hub</div>
                </div>
                <div>
                  <div className="font-bold text-white">Expressway Connect</div>
                  <div className="text-[10px] text-neutral-500 font-mono">Direct from Ahmedabad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
