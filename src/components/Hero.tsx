import React from "react";
import { motion } from "motion/react";
import { Calendar, MapPin, ArrowRight, Code2, Sparkles, Terminal } from "lucide-react";
import { eventConfig } from "../config/event.ts";

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-radial-[at_50%_20%] from-white via-[#FAFAFC] to-[#F1F3F9]">
      {/* Background Decorative Grid */}
      <div 
        className="absolute inset-0 opacity-[0.45] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Abstract Google Developer Geometric Shapes */}
      <div className="absolute top-20 left-8 sm:left-24 w-12 h-12 rounded-full border-2 border-[#4285F4]/30 pointer-events-none animate-pulse" />
      <div className="absolute top-44 right-12 sm:right-28 w-10 h-10 border-2 border-[#EA4335]/30 rotate-12 pointer-events-none" />
      <div className="absolute bottom-28 left-12 sm:left-32 w-14 h-3 bg-[#FBBC04]/40 rounded-full rotate-[-20deg] pointer-events-none" />
      <div className="absolute bottom-24 right-16 sm:right-36 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[24px] border-b-[#34A853]/30 pointer-events-none" />

      {/* Developer Code Symbols Watermarks - subtle */}
      <div className="absolute top-1/4 -left-6 sm:left-6 select-none pointer-events-none text-neutral-200/80 font-mono text-5xl sm:text-7xl font-bold opacity-30">
        &lt;/&gt;
      </div>
      <div className="absolute bottom-1/4 -right-4 sm:right-10 select-none pointer-events-none text-neutral-200/80 font-mono text-5xl sm:text-7xl font-bold opacity-30">
        &#123; &#125;
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* GDG Baroda Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200 shadow-xs mb-6 sm:mb-8"
        >
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#4285F4]" />
            <span className="w-2 h-2 rounded-full bg-[#EA4335]" />
            <span className="w-2 h-2 rounded-full bg-[#FBBC04]" />
            <span className="w-2 h-2 rounded-full bg-[#34A853]" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-700">
            {eventConfig.tagline}
          </span>
          <span className="text-neutral-300">|</span>
          <span className="text-xs font-mono text-[#4285F4] font-medium">DevFest 2026</span>
        </motion.div>

        {/* Main Event Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 sm:mb-6"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-extrabold tracking-tight font-display text-neutral-900 leading-[0.95]">
            DEVFEST
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] via-[#34A853] to-[#4285F4] my-1">
              BARODA
            </span>
            <span className="text-neutral-800">2026</span>
          </h1>
        </motion.div>

        {/* Theme Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-block">
            <p className="text-base sm:text-xl md:text-2xl font-semibold tracking-tight text-neutral-800 font-display">
              FROM ATTENDEES TO BUILDERS
            </p>
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#4285F4] to-transparent mt-1" />
          </div>
        </motion.div>

        {/* Event Key Metadata: Date & Location */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-medium text-neutral-700 mb-8 sm:mb-10"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 border border-neutral-200/80 shadow-2xs">
            <Calendar className="w-4 h-4 text-[#4285F4]" />
            <span className="font-semibold text-neutral-900">{eventConfig.displayDate}</span>
          </div>

          <span className="text-neutral-300 hidden sm:inline">·</span>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 border border-neutral-200/80 shadow-2xs">
            <MapPin className="w-4 h-4 text-[#EA4335]" />
            <span className="font-semibold text-neutral-900">{eventConfig.location}</span>
          </div>

          <span className="text-neutral-300 hidden sm:inline">·</span>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 border border-neutral-200/80 shadow-2xs font-mono text-xs text-neutral-600">
            <Terminal className="w-3.5 h-3.5 text-[#34A853]" />
            <span>Single-Track · 400 Builders</span>
          </div>
        </motion.div>

        {/* Narrative Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed mb-10 text-balance"
        >
          DevFest Baroda brings together developers, cloud architects, founders, and students for a high-density day of deep technical sessions, system architecture, and hands-on creation in the dedicated Code Lounge.
        </motion.p>

        {/* Primary and Secondary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
        >
          <a
            href="#tickets"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#tickets");
            }}
            className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#4285F4] hover:bg-[#3367D6] active:bg-[#2A56C6] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Get Tickets</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#about");
            }}
            className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-semibold text-neutral-800 bg-white hover:bg-neutral-50 active:bg-neutral-100 border border-neutral-200/90 rounded-xl shadow-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Code2 className="w-4 h-4 text-neutral-500" />
            <span>Explore DevFest</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
