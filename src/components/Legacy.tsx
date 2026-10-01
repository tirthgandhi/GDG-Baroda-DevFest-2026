import React from "react";
import { motion } from "motion/react";
import { History, Award, Users, HeartHandshake } from "lucide-react";

export const Legacy: React.FC = () => {
  const editions = [
    { year: "2025", attendees: "450+", highlight: "AI & Cloud Scale", city: "Vadodara" },
    { year: "2024", attendees: "300+", highlight: "Modern Web & Mobile", city: "Vadodara" },
    { year: "2022", attendees: "250+", highlight: "Post-Pandemic In-Person Return", city: "Vadodara" },
    { year: "2019", attendees: "650+", highlight: "Mega Community DevFest", city: "Vadodara" },
    { year: "2018", attendees: "400+", highlight: "Inaugural Flagship Conference", city: "Vadodara" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4285F4] uppercase mb-3">
              <span>07. Community Legacy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 font-display leading-tight mb-6">
              Built by the community, for the community.
            </h2>
            <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mb-6">
              For over eight years, GDG Baroda has been the focal point of open technical discourse, student mentorship, and engineering culture in Central Gujarat.
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed mb-8">
              DevFest isn't organized by a commercial event agency. It is curated entirely by practicing developers, student volunteers, and community organizers who care deeply about technological growth in Vadodara.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-neutral-600 bg-neutral-50 p-4 rounded-xl border border-neutral-200">
              <div className="w-8 h-8 rounded-lg bg-[#4285F4]/10 text-[#4285F4] flex items-center justify-center shrink-0">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <span>2,000+ engineers impacted across Gujarat since 2018</span>
            </div>
          </div>

          {/* Right Editions Timeline & Visual */}
          <div className="lg:col-span-7">
            {/* Visual Image Banner */}
            <div className="relative h-60 sm:h-72 rounded-2xl overflow-hidden border border-neutral-200/80 shadow-md mb-8 group">
              <img
                src="/src/assets/images/devfest_stage_keynote_1790832988575.jpg"
                alt="Previous DevFest Baroda conference stage"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-xs font-mono text-[#FBBC04] uppercase tracking-wider block mb-1">
                  Community Archive
                </span>
                <p className="text-base sm:text-lg font-bold font-display">
                  DevFest Baroda: Packed auditoriums, deep technical engagement
                </p>
              </div>
            </div>

            {/* Historical Editions Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {editions.map((ed, idx) => (
                <motion.div
                  key={ed.year}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-neutral-50 hover:bg-white rounded-xl border border-neutral-200/80 p-3.5 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-2xs"
                >
                  <span className="text-xs font-mono font-bold text-[#4285F4] block">
                    {ed.year}
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold text-neutral-900 font-display block mt-1">
                    {ed.attendees}
                  </span>
                  <span className="text-[10px] text-neutral-500 block leading-tight mt-1 line-clamp-1">
                    {ed.highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
