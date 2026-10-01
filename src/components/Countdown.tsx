import React from "react";
import { useCountdown } from "../hooks/useCountdown.ts";
import { eventConfig } from "../config/event.ts";
import { Clock, Sparkles } from "lucide-react";

export const Countdown: React.FC = () => {
  const { days, hours, minutes, seconds, isPassed } = useCountdown(eventConfig.date);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  const timeUnits = [
    { label: "DAYS", value: formatNumber(days), color: "border-t-[#4285F4]" },
    { label: "HOURS", value: formatNumber(hours), color: "border-t-[#EA4335]" },
    { label: "MINUTES", value: formatNumber(minutes), color: "border-t-[#FBBC04]" },
    { label: "SECONDS", value: formatNumber(seconds), color: "border-t-[#34A853]" },
  ];

  return (
    <section className="relative -mt-6 z-20 max-w-4xl mx-auto px-4 sm:px-6">
      <div className="bg-white/95 backdrop-blur-xl border border-neutral-200/90 rounded-2xl shadow-xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#4285F4]/10 text-[#4285F4] flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-tight text-neutral-900 uppercase">
                Event Countdown
              </h2>
              <p className="text-xs text-neutral-500">
                Doors open 25 October 2026 · 09:00 AM IST
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-500">
            <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
            <span>Vadodara, Gujarat</span>
          </div>
        </div>

        {isPassed ? (
          <div className="text-center py-6">
            <p className="text-2xl sm:text-3xl font-extrabold text-neutral-900 font-display flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-[#FBBC04]" />
              DevFest Baroda 2026 is here!
            </p>
            <p className="text-sm text-neutral-600 mt-2">
              Welcome all builders to the single-track conference experience.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className={`bg-neutral-50/70 border border-neutral-200/70 rounded-xl p-4 sm:p-5 text-center transition-transform hover:-translate-y-0.5 border-t-3 ${unit.color}`}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 font-mono tabular-nums tracking-tight">
                  {unit.value}
                </div>
                <div className="text-[11px] sm:text-xs font-bold tracking-wider text-neutral-500 uppercase mt-1">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
