import React, { useState } from "react";
import { motion } from "motion/react";
import { scheduleData, ScheduleItem } from "../data/schedule.ts";
import { Clock, Tag, Sparkles, Terminal, Coffee, Users, Layers } from "lucide-react";

export const Schedule: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  const filterOptions = [
    { id: "all", label: "Full Agenda" },
    { id: "technical", label: "Deep Dives" },
    { id: "hands-on", label: "Code Lounge" },
    { id: "keynote", label: "Keynotes" },
    { id: "community", label: "Community & Networking" },
  ];

  const filteredSchedule = scheduleData.filter((item) => {
    if (filter === "all") return true;
    if (filter === "technical") return item.category === "technical";
    if (filter === "hands-on") return item.category === "hands-on";
    if (filter === "keynote") return item.category === "keynote";
    if (filter === "community") return item.category === "community" || item.category === "break";
    return true;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "keynote":
        return { dot: "bg-[#4285F4]", text: "text-[#4285F4]", border: "border-l-[#4285F4]" };
      case "technical":
        return { dot: "bg-[#EA4335]", text: "text-[#EA4335]", border: "border-l-[#EA4335]" };
      case "hands-on":
        return { dot: "bg-[#34A853]", text: "text-[#34A853]", border: "border-l-[#34A853]" };
      case "break":
        return { dot: "bg-[#FBBC04]", text: "text-[#FBBC04]", border: "border-l-[#FBBC04]" };
      default:
        return { dot: "bg-neutral-400", text: "text-neutral-500", border: "border-l-neutral-300" };
    }
  };

  return (
    <section id="schedule" className="py-20 sm:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4285F4] uppercase mb-3">
            <span>05. The Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 font-display">
            One Track. Zero FOMO.
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-3">
            Never miss a talk while attending another. A single, high-caliber trajectory engineered so every attendee shares the same transformative learning experience.
          </p>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-neutral-100/90 rounded-xl inline-flex border border-neutral-200/80">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={`px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap ${
                  filter === opt.id
                    ? "bg-white text-neutral-900 shadow-xs"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-white/50"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-4">
          {filteredSchedule.map((item: ScheduleItem, idx: number) => {
            const styles = getCategoryColor(item.category);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className={`group bg-white rounded-xl border border-neutral-200/90 hover:border-neutral-300 p-5 sm:p-6 transition-all duration-200 hover:shadow-sm border-l-4 ${styles.border} ${
                  item.isSpecial ? "bg-radial-[at_10%_20%] from-blue-50/20 via-white to-white" : ""
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  {/* Time & Category Badge */}
                  <div className="sm:w-44 shrink-0">
                    <div className="flex items-center gap-2 text-neutral-900 font-mono font-bold text-sm sm:text-base">
                      <Clock className="w-4 h-4 text-neutral-400 shrink-0" />
                      <span>{item.time}</span>
                    </div>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${styles.dot}`} />
                      <span className={`text-xs font-mono font-medium ${styles.text}`}>
                        {item.tag || item.category}
                      </span>
                    </div>
                  </div>

                  {/* Talk / Activity Details */}
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 font-display group-hover:text-[#4285F4] transition-colors">
                      {item.title}
                    </h3>
                    {item.speakerName && (
                      <p className="text-xs sm:text-sm font-medium text-neutral-600 mt-1">
                        {item.speakerName}
                      </p>
                    )}
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Schedule Disclaimer Note */}
        <div className="mt-8 text-center text-xs text-neutral-500 font-mono bg-neutral-50 py-3 px-4 rounded-xl border border-neutral-200">
          Official agenda timings subject to minor adjustments before conference day · Vadodara Standard Time (IST)
        </div>
      </div>
    </section>
  );
};
