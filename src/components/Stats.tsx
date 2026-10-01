import React from "react";
import { motion } from "motion/react";
import { Users, Calendar, Layers, Cpu } from "lucide-react";

export const Stats: React.FC = () => {
  const stats = [
    {
      value: "400",
      label: "Builders & Engineers",
      subtext: "Capacity capped for high engagement",
      icon: Users,
      accent: "text-[#4285F4]",
      border: "border-t-[#4285F4]",
      bg: "bg-[#4285F4]/5",
    },
    {
      value: "1",
      label: "Focused Day",
      subtext: "High-density technical immersion",
      icon: Calendar,
      accent: "text-[#EA4335]",
      border: "border-t-[#EA4335]",
      bg: "bg-[#EA4335]/5",
    },
    {
      value: "Single",
      label: "Curated Track",
      subtext: "Zero concurrent session conflict",
      icon: Layers,
      accent: "text-[#FBBC04]",
      border: "border-t-[#FBBC04]",
      bg: "bg-[#FBBC04]/5",
    },
    {
      value: "8+",
      label: "Deep Technical Sessions",
      subtext: "Architecture, live demos & systems",
      icon: Cpu,
      accent: "text-[#34A853]",
      border: "border-t-[#34A853]",
      bg: "bg-[#34A853]/5",
    },
  ];

  return (
    <section className="py-14 bg-[#FAFAFC] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`bg-white rounded-xl border border-neutral-200 p-6 shadow-2xs hover:shadow-xs transition-all duration-200 border-t-4 ${stat.border}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-4xl sm:text-5xl font-extrabold font-display tabular-nums tracking-tight ${stat.accent}`}>
                    {stat.value}
                  </span>
                  <div className={`p-2 rounded-lg ${stat.bg} ${stat.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-neutral-900 font-display">
                  {stat.label}
                </h3>
                <p className="text-xs text-neutral-500 mt-1 font-sans">
                  {stat.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
