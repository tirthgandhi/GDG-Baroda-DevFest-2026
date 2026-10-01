import React from "react";
import { motion } from "motion/react";
import { Code, Users, Rocket, Compass } from "lucide-react";

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Compass,
      title: "Learn",
      desc: "Architectural insights and deep technical explorations across AI, Cloud, and Mobile.",
      color: "text-[#4285F4]",
      border: "border-l-[#4285F4]",
    },
    {
      icon: Code,
      title: "Build",
      desc: "Stop merely consuming slides; write code, test hypotheses, and create in the Code Lounge.",
      color: "text-[#EA4335]",
      border: "border-l-[#EA4335]",
    },
    {
      icon: Users,
      title: "Connect",
      desc: "Form meaningful relationships with fellow engineers, tech leads, and founders across Gujarat.",
      color: "text-[#FBBC04]",
      border: "border-l-[#FBBC04]",
    },
    {
      icon: Rocket,
      title: "Ship",
      desc: "Turn prototypes into viable products, open-source projects, and scalable production systems.",
      color: "text-[#34A853]",
      border: "border-l-[#34A853]",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Core Manifesto */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4285F4] uppercase mb-3">
              <span>01. The DevFest Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 font-display leading-[1.08] mb-6">
              From passive attendees to active builders.
            </h2>

            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-8">
              Most conferences ask you to sit still in a dark auditorium taking notes you'll never read again.
              DevFest Baroda 2026 is designed from the ground up to reverse that paradigm.
            </p>

            {/* Core Action Statement */}
            <div className="p-6 rounded-2xl bg-[#FAFAFC] border border-neutral-200/80">
              <div className="flex items-center gap-3 text-lg sm:text-xl font-bold font-display text-neutral-900">
                <span className="text-[#4285F4]">Learn.</span>
                <span className="text-neutral-300">·</span>
                <span className="text-[#EA4335]">Build.</span>
                <span className="text-neutral-300">·</span>
                <span className="text-[#FBBC04]">Connect.</span>
                <span className="text-neutral-300">·</span>
                <span className="text-[#34A853]">Ship.</span>
              </div>
              <p className="text-xs text-neutral-500 mt-2 font-mono">
                The four core pillars shaping every session, workshop, and lounge track.
              </p>
            </div>
          </div>

          {/* Right Column: The 4 Builder Pillars */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`bg-white p-6 rounded-xl border border-neutral-200/90 shadow-2xs hover:shadow-sm transition-all duration-200 border-l-4 ${pillar.border}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-neutral-100/80 ${pillar.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 font-display">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Event Format Context Note */}
            <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#34A853]" />
                <span>Single-track format guarantees zero schedule conflict & zero FOMO</span>
              </div>
              <span className="font-mono text-neutral-400">Vadodara, Gujarat · 25 Oct 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
