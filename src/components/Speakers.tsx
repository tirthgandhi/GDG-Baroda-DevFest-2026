import React from "react";
import { motion } from "motion/react";
import { speakersData, Speaker } from "../data/speakers.ts";
import { User, Sparkles, Linkedin, Twitter, Globe, Mic } from "lucide-react";
import { eventConfig } from "../config/event.ts";

export const Speakers: React.FC = () => {
  return (
    <section id="speakers" className="py-20 sm:py-28 bg-[#FAFAFC] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4285F4] uppercase mb-3">
              <span>04. The Lineup</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 font-display">
              Meet the Builders
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg mt-3">
              Industry practitioners, Google Developer Experts, and engineering leads sharing architectural realities.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 bg-white px-3.5 py-2 rounded-lg border border-neutral-200 shadow-2xs shrink-0 self-start md:self-end">
            <Sparkles className="w-3.5 h-3.5 text-[#FBBC04]" />
            <span>Curated single-track lineup · Announces weekly</span>
          </div>
        </div>

        {/* Dynamic Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {speakersData.map((speaker: Speaker, idx: number) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group bg-white rounded-2xl border border-neutral-200/90 hover:border-neutral-300 shadow-2xs hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between hover:-translate-y-1 relative"
            >
              <div>
                {/* Avatar Placeholder / Visual Card */}
                <div className="relative w-full aspect-square rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center overflow-hidden mb-5 border border-neutral-200/60">
                  {speaker.avatarUrl ? (
                    <img
                      src={speaker.avatarUrl}
                      alt={speaker.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-16 h-16 rounded-full bg-white shadow-xs flex items-center justify-center text-neutral-400 group-hover:text-[#4285F4] transition-colors mb-3">
                        <User className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-mono text-neutral-500 font-medium">
                        {speaker.isAnnounced ? speaker.name : "Speaker Announcing Soon"}
                      </span>
                      <span className="text-[11px] text-neutral-400 mt-1">
                        DevFest Baroda 2026
                      </span>
                    </div>
                  )}

                  {/* Corner Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono text-neutral-600 border border-neutral-200 shadow-2xs flex items-center gap-1.5">
                    <Mic className="w-3 h-3 text-[#4285F4]" />
                    <span>{speaker.topic || "Deep Dive"}</span>
                  </div>
                </div>

                {/* Speaker Identity */}
                <h3 className="text-lg font-bold text-neutral-900 font-display">
                  {speaker.name}
                </h3>
                <div className="text-xs font-medium text-neutral-500 mt-0.5 flex items-center gap-1.5">
                  <span>{speaker.role}</span>
                  <span className="text-neutral-300">·</span>
                  <span className="text-neutral-700 font-medium">{speaker.company}</span>
                </div>

                {/* Session Title */}
                <div className="mt-4 pt-3 border-t border-neutral-100">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                    Session
                  </span>
                  <p className="text-sm font-semibold text-neutral-800 leading-snug">
                    {speaker.sessionTitle}
                  </p>
                </div>
              </div>

              {/* Social Links Footer */}
              <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-neutral-400 text-xs">
                <span className="text-[11px] font-mono text-neutral-400">
                  Single-Track Stage
                </span>
                <div className="flex items-center gap-2">
                  {speaker.socials?.linkedin && (
                    <a
                      href={speaker.socials.linkedin}
                      className="p-1.5 text-neutral-400 hover:text-[#4285F4] transition-colors"
                      aria-label="Speaker LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {speaker.socials?.twitter && (
                    <a
                      href={speaker.socials.twitter}
                      className="p-1.5 text-neutral-400 hover:text-neutral-900 transition-colors"
                      aria-label="Speaker Twitter / X"
                    >
                      <Twitter className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call for Speakers CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-neutral-900 font-display">
              Want to share real engineering insights at DevFest?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Our call for speakers prioritizes practical architecture, production failures, and actionable code tutorials.
            </p>
          </div>
          <a
            href={eventConfig.email ? `mailto:${eventConfig.email}?subject=DevFest%20Baroda%202026%20Speaker%20Proposal` : "#"}
            className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 transition-all shrink-0 cursor-pointer"
          >
            Submit Speaker Proposal
          </a>
        </div>
      </div>
    </section>
  );
};
