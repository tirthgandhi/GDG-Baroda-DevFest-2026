import React from "react";
import { Navbar } from "./components/Navbar.tsx";
import { Hero } from "./components/Hero.tsx";
import { Countdown } from "./components/Countdown.tsx";
import { About } from "./components/About.tsx";
import { Stats } from "./components/Stats.tsx";
import { Experience } from "./components/Experience.tsx";
import { CodeLounge } from "./components/CodeLounge.tsx";
import { Technologies } from "./components/Technologies.tsx";
import { Speakers } from "./components/Speakers.tsx";
import { Schedule } from "./components/Schedule.tsx";
import { Tickets } from "./components/Tickets.tsx";
import { Legacy } from "./components/Legacy.tsx";
import { Gallery } from "./components/Gallery.tsx";
import { Sponsors } from "./components/Sponsors.tsx";
import { CommunityPartners } from "./components/CommunityPartners.tsx";
import { Venue } from "./components/Venue.tsx";
import { FAQ } from "./components/FAQ.tsx";
import { FinalCTA } from "./components/FinalCTA.tsx";
import { Footer } from "./components/Footer.tsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFC] text-neutral-900 selection:bg-[#4285F4]/15 selection:text-[#4285F4]">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Live Event Countdown */}
        <Countdown />

        {/* About Section: Philosophy & Pillars */}
        <About />

        {/* Statistics & Key Figures */}
        <Stats />

        {/* Why DevFest Experience */}
        <Experience />

        {/* Code Lounge Builder Feature (Dark Section) */}
        <CodeLounge />

        {/* Ecosystem Technologies Marquee */}
        <Technologies />

        {/* Dynamic Speakers Lineup */}
        <Speakers />

        {/* Single-Track Timeline Schedule */}
        <Schedule />

        {/* Registration & Ticket Packages */}
        <Tickets />

        {/* Community Legacy & Historical Editions */}
        <Legacy />

        {/* Photo Gallery & Conference Moments */}
        <Gallery />

        {/* Sponsor Partners & Tiers */}
        <Sponsors />

        {/* Community Partners */}
        <CommunityPartners />

        {/* Venue & Location Overview */}
        <Venue />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Final Conversion Call to Action */}
        <FinalCTA />
      </main>

      {/* Conference Footer */}
      <Footer />
    </div>
  );
}
