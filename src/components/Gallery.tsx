import React from "react";
import { motion } from "motion/react";
import { Camera, Sparkles } from "lucide-react";

export const Gallery: React.FC = () => {
  const photos = [
    {
      url: "/src/assets/images/devfest_stage_keynote_1790832988575.jpg",
      title: "Keynote & Architectural Deep Dives",
      caption: "Main auditorium stage filled with engineers and builders",
      span: "lg:col-span-8",
    },
    {
      url: "/src/assets/images/devfest_workshop_hands_on_1790833027657.jpg",
      title: "Hands-on Technical Workshops",
      caption: "Direct code mentorship and live architecture reviews",
      span: "lg:col-span-4",
    },
    {
      url: "/src/assets/images/devfest_networking_hall_1790833014632.jpg",
      title: "Hallway Track & Networking",
      caption: "Spontaneous discussions with tech founders and peers",
      span: "lg:col-span-4",
    },
    {
      url: "/src/assets/images/devfest_code_lounge_1790833001985.jpg",
      title: "The Code Lounge Builder Zone",
      caption: "Live prototyping, APIs, and collaborative coding",
      span: "lg:col-span-8",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFC] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#4285F4] uppercase mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>08. The DevFest Atmosphere</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 font-display">
            Moments from the Community
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-3">
            A glimpse into the energy, collaboration, and learning that defines DevFest Baroda.
          </p>
        </div>

        {/* Responsive Photo Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {photos.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className={`${item.span} relative group h-72 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-neutral-200/80 shadow-2xs hover:shadow-lg transition-all duration-300`}
            >
              <img
                src={item.url}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity group-hover:opacity-95" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs font-mono text-[#FBBC04] uppercase tracking-wider block mb-1">
                  DevFest Experience
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-display">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-lg line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
