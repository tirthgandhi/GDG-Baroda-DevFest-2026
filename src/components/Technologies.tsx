import React from "react";
import { technologiesData } from "../data/technologies.ts";
import { Code2, Sparkles, Layers, Box, Cpu } from "lucide-react";

export const Technologies: React.FC = () => {
  // Duplicate array to achieve seamless infinite marquee loop
  const marqueeItems = [...technologiesData, ...technologiesData];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4285F4] uppercase mb-2">
          <span>03. The Ecosystem</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 font-display">
          Technologies We Love &amp; Build With
        </h2>
        <p className="text-sm sm:text-base text-neutral-600 mt-2 max-w-2xl mx-auto">
          From frontier generative models to cloud infrastructure and cross-platform native runtimes.
        </p>
      </div>

      {/* Auto-moving horizontal marquee */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Subtle Edge Blur Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex gap-4 sm:gap-6 items-center">
          {marqueeItems.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="group shrink-0 w-64 sm:w-72 bg-[#FAFAFC] hover:bg-white rounded-xl border border-neutral-200/90 hover:border-neutral-300 p-4 sm:p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: tech.color }}
                  />
                  <h3 className="font-bold text-base text-neutral-900 font-display">
                    {tech.name}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-neutral-500 uppercase px-2 py-0.5 bg-white border border-neutral-200/70 rounded">
                  {tech.category}
                </span>
              </div>
              <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <span className="text-xs text-neutral-400 font-mono">
          Hover to pause · All sessions grounded in real-world production stacks
        </span>
      </div>
    </section>
  );
};
