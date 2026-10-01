import React, { useState } from "react";
import { motion } from "motion/react";
import { Terminal, Laptop, Sparkles, Check, Play, Copy, ArrowRight } from "lucide-react";

export const CodeLounge: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"terminal" | "agent" | "flutter">("terminal");
  const [copied, setCopied] = useState(false);

  const snippet = `// DevFest Baroda 2026: Code Lounge Sandbox
import { GoogleGenAI } from "@google/genai";

export async function buildWithDevFest(challengeId: string) {
  const ai = new GoogleGenAI();
  console.log("Connecting to Code Lounge cluster...");
  
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Prototype an event agent for Gujarat builders",
  });
  
  return { status: "SHIPPED", result: response.text };
}`;

  const copyCode = () => {
    navigator.clipboard?.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code-lounge" className="py-20 sm:py-28 bg-[#0B0B10] text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#4285F4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#34A853]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Value */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-[#34A853] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#34A853] animate-pulse" />
              <span>THE CODE LOUNGE EXPERIENCE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display text-white mb-6 leading-[1.08]">
              Don’t just watch. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] via-[#34A853] to-[#FBBC04]">
                Build.
              </span>
            </h2>

            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed mb-6">
              The Code Lounge is DevFest Baroda's signature builder zone. Step away from the stage anytime to test modern APIs, hack together prototypes, and get direct assistance from Google Developer Experts and senior architects.
            </p>

            <ul className="space-y-3.5 mb-8 text-sm text-neutral-300">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#34A853]/20 text-[#34A853] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Curated builder challenges with live API credits & sandboxes</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#4285F4]/20 text-[#4285F4] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>1-on-1 code reviews and system design guidance from mentors</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#FBBC04]/20 text-[#FBBC04] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Showcase your lounge creations during the evening community slot</span>
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#tickets"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-neutral-900 bg-white hover:bg-neutral-200 rounded-xl transition-all shadow-sm"
              >
                <span>Reserve Lounge Access</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs font-mono text-neutral-500">
                Included with all DevFest ticket tiers
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Developer UI / Terminal Simulation */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-800 bg-[#121218] shadow-2xl overflow-hidden font-mono">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#181822] border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EA4335]" />
                  <div className="w-3 h-3 rounded-full bg-[#FBBC04]" />
                  <div className="w-3 h-3 rounded-full bg-[#34A853]" />
                  <span className="text-xs text-neutral-400 ml-2 font-mono hidden sm:inline">
                    lounge-workstation ~ bash
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 text-xs">
                  <button
                    onClick={() => setActiveTab("terminal")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === "terminal" ? "bg-neutral-800 text-white font-semibold" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    Terminal
                  </button>
                  <button
                    onClick={() => setActiveTab("agent")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === "agent" ? "bg-neutral-800 text-white font-semibold" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    agent.ts
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 sm:p-6 text-xs sm:text-sm">
                {activeTab === "terminal" ? (
                  <div className="space-y-3 font-mono leading-relaxed">
                    <div className="text-neutral-400">
                      <span className="text-[#34A853]">gdg-baroda@devfest2026</span>
                      <span className="text-neutral-600">:</span>
                      <span className="text-[#4285F4]">~/code-lounge</span>
                      <span className="text-white">$</span> devfest --build --collaborative
                    </div>

                    <div className="text-neutral-400 pl-2 border-l border-neutral-800 space-y-1.5 py-1">
                      <div>&gt; initializing ideas with 400 Gujarat builders...</div>
                      <div>&gt; connecting live Gemini &amp; Google Cloud sandboxes...</div>
                      <div>&gt; pairing with Google Developer Experts...</div>
                      <div className="text-[#4285F4]">&gt; compiling prototypes: agentic AI, Flutter, Firebase...</div>
                    </div>

                    <div className="flex items-center gap-2 text-[#34A853] font-semibold pt-1">
                      <span className="w-4 h-4 rounded-full bg-[#34A853]/20 flex items-center justify-center text-xs">✓</span>
                      <span>build complete: ready to ship to production.</span>
                    </div>

                    <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between text-neutral-400 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-neutral-500">$</span>
                        <span>waiting for input</span>
                        <span className="w-2 h-4 bg-[#4285F4] inline-block animate-pulse" />
                      </div>
                      <span className="text-[11px] text-neutral-500">Node v22.14 · TS 5.7</span>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs text-neutral-500 font-mono">TypeScript / Gemini 2.5</span>
                      <button
                        onClick={copyCode}
                        className="flex items-center gap-1 text-xs text-neutral-400 hover:text-white bg-neutral-800/60 hover:bg-neutral-800 px-2 py-1 rounded transition-colors"
                      >
                        {copied ? <Check className="w-3 h-3 text-[#34A853]" /> : <Copy className="w-3 h-3" />}
                        <span>{copied ? "Copied" : "Copy"}</span>
                      </button>
                    </div>
                    <pre className="text-neutral-300 font-mono text-xs overflow-x-auto p-3 rounded-lg bg-[#0d0d13] leading-relaxed">
                      <code>{snippet}</code>
                    </pre>
                  </div>
                )}
              </div>

              {/* Photo Proof Spotlight Bar */}
              <div className="relative h-44 sm:h-52 w-full overflow-hidden border-t border-neutral-800">
                <img
                  src="/src/assets/images/devfest_code_lounge_1790833001985.jpg"
                  alt="DevFest Baroda interactive code lounge"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover brightness-75 hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B10] via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 text-xs font-mono text-neutral-300 bg-neutral-900/80 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-700">
                  DevFest Code Lounge · Real-time collaboration zone
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
