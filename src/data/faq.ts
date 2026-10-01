export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What is DevFest Baroda?",
    answer: "DevFest Baroda is the flagship annual developer conference organized by Google Developer Group (GDG) Baroda. It brings together over 400 developers, architects, startup builders, and tech enthusiasts for a day of high-impact technical sessions, hands-on architectural deep dives, and community building.",
  },
  {
    id: "faq-2",
    question: "Who should attend DevFest Baroda 2026?",
    answer: "DevFest is designed for software engineers, tech leads, cloud architects, mobile & web developers, students, founders, and curious technologists. Whether you are actively shipping production systems or starting your journey into Generative AI and modern web platforms, DevFest has actionable sessions for you.",
  },
  {
    id: "faq-3",
    question: "When and where is DevFest Baroda 2026 taking place?",
    answer: "DevFest Baroda 2026 will take place on Sunday, 25 October 2026 from 9:00 AM to 6:00 PM IST in Vadodara, Gujarat, India. The exact auditorium/convention venue will be announced soon to all registered attendees.",
  },
  {
    id: "faq-4",
    question: "What is the 'Code Lounge' experience?",
    answer: "The Code Lounge is an interactive, builder-first space inside DevFest Baroda. Instead of solely sitting through slide decks, attendees can pair up, experiment with Google Cloud, Gemini APIs, Flutter, and Firebase, prototype real solutions, and receive 1-on-1 guidance from experienced mentors.",
  },
  {
    id: "faq-5",
    question: "Is the event beginner-friendly?",
    answer: "Yes! While many sessions provide deep architectural and engineering insights, we maintain an inclusive learning environment. The Code Lounge and networking tracks provide ample opportunity for beginners and students to connect directly with senior developers and GDEs.",
  },
  {
    id: "faq-6",
    question: "What should I bring to DevFest?",
    answer: "Bring your laptop and charger if you plan to participate in the hands-on Code Lounge activities or follow live coding sessions. Don't forget a valid government ID or student ID matching your ticket registration.",
  },
  {
    id: "faq-7",
    question: "Will food and refreshments be provided?",
    answer: "Yes, absolutely! All valid ticket holders receive artisan morning tea/coffee with breakfast, a curated full-course buffet lunch, and afternoon refreshments throughout the conference.",
  },
  {
    id: "faq-8",
    question: "How can my company become a sponsor?",
    answer: "We welcome partners who want to support Gujarat's vibrant developer ecosystem! We offer Title, Platinum, Gold, and Silver sponsorship tiers with booth space, speaking opportunities, and recruiting access. Contact us at gdgbaroda@gmail.com with the subject 'DevFest Baroda 2026 Sponsorship Inquiry'.",
  },
  {
    id: "faq-9",
    question: "How can my developer community become a partner?",
    answer: "We actively collaborate with student clubs, open source organizations, and regional tech groups. Community partners receive ticket discounts for their members and co-branding visibility. Reach out via email at gdgbaroda@gmail.com.",
  },
  {
    id: "faq-10",
    question: "How can I contact the GDG Baroda team?",
    answer: "You can write to us directly at gdgbaroda@gmail.com or connect through our social media channels on LinkedIn (@gdg-baroda) and X/Twitter (@gdgbaroda).",
  },
];
