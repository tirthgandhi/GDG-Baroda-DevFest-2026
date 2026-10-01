import React from "react";
import { eventConfig } from "../config/event.ts";
import { Linkedin, Twitter, Instagram, Youtube, Mail, Heart, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Speakers", href: "#speakers" },
    { label: "Schedule", href: "#schedule" },
    { label: "Tickets", href: "#tickets" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "FAQ", href: "#faq" },
  ];

  const communityLinks = [
    { label: "Google Developer Groups", href: "https://developers.google.com/community/gdg" },
    { label: "Community Guidelines", href: "https://developers.google.com/community-guidelines" },
    { label: "Code of Conduct", href: "https://confcodeofconduct.com" },
    { label: "Women Techmakers", href: "https://developers.google.com/womentechmakers" },
  ];

  return (
    <footer className="bg-neutral-950 text-neutral-400 pt-16 pb-12 border-t border-neutral-900 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800/80">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#4285F4]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA4335]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC04]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
              </div>
              <span className="text-lg font-bold text-white font-display">
                GDG Baroda
              </span>
            </div>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Google Developer Group Baroda brings together developers, architects, and open-source builders across Central Gujarat for deep technical education and collaboration.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={eventConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-[#4285F4] text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GDG Baroda on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={eventConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GDG Baroda on Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={eventConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-[#EA4335] text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GDG Baroda on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={eventConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 hover:bg-[#EA4335] text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GDG Baroda on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              DevFest 2026
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Community & Conduct */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Community
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {communityLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Back to Top */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={`mailto:${eventConfig.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#4285F4]" />
                <span className="truncate">{eventConfig.email}</span>
              </a>
              <p className="text-neutral-500 text-xs">
                Vadodara, Gujarat, India
              </p>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-mono transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-neutral-500">
          <p className="max-w-2xl leading-relaxed">
            GDG Baroda is an independent Google Developer Group. Activities and opinions expressed by the group should not be attributed to Google.
          </p>
          <div className="shrink-0 font-mono">
            © 2026 GDG Baroda. Built for Builders.
          </div>
        </div>
      </div>
    </footer>
  );
};
