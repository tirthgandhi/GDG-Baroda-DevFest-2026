import React from "react";
import { motion } from "motion/react";
import { Cpu, Terminal, Network, GitFork, CheckCircle2 } from "lucide-react";

export const Experience: React.FC = () => {
  const features = [
    {
      title: "Technical Deep Dives",
      tagline: "Architecture Over Buzzwords",
      desc: "Practical sessions covering modern engineering challenges: multi-modal AI agents, distributed cloud workflows, and declarative UI performance.",
      icon: Cpu,
      color: "#4285F4",
      highlights: ["Gemini 2.0 & Cloud Run", "Microservices & Kubernetes", "Modern Web & Mobile Patterns"],
      colSpan: "lg:col-span-6",
    },
    {
      title: "The Code Lounge",
      tagline: "Hands-on Builder Sandbox",
      desc: "An interactive space inside the venue to write code, test hypotheses, prototype real applications, and pair with Google Developer Experts.",
      icon: Terminal,
      color: "#34A853",
      highlights: ["Live API Sandboxes", "Mentor Code Reviews", "Interactive Demos"],
      colSpan: "lg:col-span-6",
    },
    {
      title: "Meaningful Networking",
      tagline: "Gujarat Tech Ecosystem",
      desc: "Connect with high-caliber engineers, founders, mentors, and open-source contributors without the noise of generic multi-track conferences.",
      icon: Network,
      color: "#FBBC04",
      highlights: ["Curated Hallway Discussions", "Speaker Q&A Corners", "Founders & Student Connect"],
      colSpan: "lg:col-span-6",
    },
    {
      title: "Real Engineering",
      tagline: "Production Battle Stories",
      desc: "Zero sponsored fluff. Honest explorations of production incidents, scalable system design, architecture trade-offs, and shipping lessons.",
      icon: GitFork,
      color: "#EA4335",
      highlights: ["Live Code Architecture", "Incident Post-Mortems", "Performance Profiling"],
      colSpan: "lg:col-span-6",
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4285F4] uppercase mb-3">
            <span>02. The DevFest Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 font-display leading-tight mb-4">
            Not another generic tech conference.
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg">
            We intentionally eliminated 5 parallel tracks, overlapping talks, and sales pitches. DevFest Baroda is built for real builders who value technical depth and tangible outcomes.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className={`${feat.colSpan} group bg-neutral-50/60 hover:bg-white rounded-2xl border border-neutral-200/90 hover:border-neutral-300 p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-md relative overflow-hidden`}
              >
                {/* Accent Top Border Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
                  style={{ backgroundColor: feat.color }}
                />

                <div className="flex items-start justify-between gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105"
                    style={{ backgroundColor: `${feat.color}15`, color: feat.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-medium text-neutral-400">
                    FEATURE 0{idx + 1}
                  </span>
                </div>

                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
                  {feat.tagline}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 font-display mb-3">
                  {feat.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                  {feat.desc}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-4 border-t border-neutral-200/60">
                  {feat.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: feat.color }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
