import React from "react";
import { motion } from "motion/react";
import { eventConfig } from "../config/event.ts";
import { ArrowRight, Users, Sparkles, Terminal } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0B0B10] text-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#4285F4]/15 via-[#34A853]/10 to-[#EA4335]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Google-Colored Geometric Accents */}
      <div className="absolute top-12 left-12 w-3 h-3 rounded-full bg-[#4285F4] animate-ping" />
      <div className="absolute bottom-16 right-16 w-3 h-3 rounded-full bg-[#34A853] animate-pulse" />
      <div className="absolute top-24 right-24 w-4 h-4 border border-[#EA4335] rotate-45" />
      <div className="absolute bottom-20 left-20 w-8 h-1 bg-[#FBBC04] rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-[#FBBC04] mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DEVFEST BARODA 2026 · 400 BUILDERS</span>
          </div>

          {/* Bold Headline */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-display text-white mb-6 uppercase leading-tight">
            Ready to Build?
          </h2>

          {/* Supporting Statement */}
          <p className="max-w-2xl mx-auto text-base sm:text-xl text-neutral-300 leading-relaxed mb-10 text-balance">
            Join developers, engineers, founders, and students from across Gujarat for a day of high-density learning, technical depth, and real-world creation.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#tickets"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-bold bg-[#4285F4] hover:bg-[#3367D6] text-white transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>GET TICKETS</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={eventConfig.communityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-bold bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Users className="w-4 h-4 text-neutral-400" />
              <span>JOIN THE COMMUNITY</span>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 text-xs font-mono text-neutral-500">
            <span>25 October 2026</span>
            <span>·</span>
            <span>Vadodara, Gujarat</span>
            <span>·</span>
            <span>Single-Track Format</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
