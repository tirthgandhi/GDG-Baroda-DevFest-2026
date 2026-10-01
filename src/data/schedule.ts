export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  category: "keynote" | "technical" | "break" | "hands-on" | "community";
  speakerName?: string;
  description: string;
  tag?: string;
  isSpecial?: boolean;
}

export const scheduleData: ScheduleItem[] = [
  {
    id: "sch-1",
    time: "09:00 - 10:00",
    title: "Registration, Welcome Kit & Morning Networking",
    category: "community",
    speakerName: "GDG Baroda Organizing Team",
    description: "Check in, grab your exclusive DevFest 2026 swag kit, enjoy artisan morning coffee, and connect with fellow developers.",
    tag: "Check-in & Networking",
  },
  {
    id: "sch-2",
    time: "10:00 - 10:30",
    title: "Opening Ceremony: From Attendees to Builders",
    category: "keynote",
    speakerName: "Community Leads & Organizers",
    description: "Kickoff keynote unveiling the DevFest 2026 vision, community milestones, Gujarat tech ecosystem updates, and day overview.",
    tag: "Opening Keynote",
    isSpecial: true,
  },
  {
    id: "sch-3",
    time: "10:30 - 11:15",
    title: "Keynote Session: Next-Gen AI & System Architecture",
    category: "technical",
    speakerName: "Google Developer Expert",
    description: "Deep technical session exploring generative AI, multimodal agents, and architecting production applications with Gemini models.",
    tag: "Generative AI",
  },
  {
    id: "sch-4",
    time: "11:15 - 12:00",
    title: "Engineering Deep Dive: Modern Cloud & Distributed Systems",
    category: "technical",
    speakerName: "Staff Cloud Architect",
    description: "Practical architectures, serverless scalability, low-latency APIs, and resilience patterns on Google Cloud Platform.",
    tag: "Cloud Architecture",
  },
  {
    id: "sch-5",
    time: "12:00 - 13:00",
    title: "Technical Session: Multi-Platform Engineering (Android & Flutter)",
    category: "technical",
    speakerName: "Principal Mobile Architect",
    description: "Building production-grade multi-platform applications, declarative UI performance, state synchronization, and native modules.",
    tag: "Mobile & Web",
  },
  {
    id: "sch-6",
    time: "13:00 - 14:00",
    title: "Curated Lunch, Partner Expo & Hallway Track",
    category: "break",
    description: "Buffet lunch, visit interactive sponsor demo booths, exchange ideas with engineers and founders across Gujarat.",
    tag: "Lunch & Networking",
  },
  {
    id: "sch-7",
    time: "14:00 - 15:00",
    title: "Developer Session: High-Performance Web & Full-Stack Tooling",
    category: "technical",
    speakerName: "Principal Web Engineer",
    description: "Modern JavaScript runtimes, edge computing, frontend optimization, and zero-bundle server patterns.",
    tag: "Web Engineering",
  },
  {
    id: "sch-8",
    time: "15:00 - 16:00",
    title: "The Code Lounge: Live Hands-on Builder Experience",
    category: "hands-on",
    speakerName: "Mentors & Ecosystem Engineers",
    description: "Interactive builder session in the dedicated Code Lounge. Experiment with APIs, pair on real prototypes, and get live mentor feedback.",
    tag: "Code Lounge Feature",
    isSpecial: true,
  },
  {
    id: "sch-9",
    time: "16:00 - 17:00",
    title: "Technical Session: Cloud-Native DevOps & Kubernetes at Scale",
    category: "technical",
    speakerName: "Lead Infrastructure Engineer",
    description: "Lessons from shipping large-scale workloads: continuous delivery, observability, container security, and cost efficiency.",
    tag: "DevOps & Infrastructure",
  },
  {
    id: "sch-10",
    time: "17:00 - 17:30",
    title: "Community Open Mic, Panel & Ecosystem Recognition",
    category: "community",
    speakerName: "Community Partners & Builders",
    description: "Showcase builder prototypes developed in the Code Lounge, recognize active contributors, and community spotlight.",
    tag: "Community",
  },
  {
    id: "sch-11",
    time: "17:30 - 18:00",
    title: "Closing Note, Swag Distribution & Group Photo",
    category: "keynote",
    speakerName: "GDG Baroda Organizing Team",
    description: "Wrap-up, thank you to partners and volunteers, commemorative group photo, and post-event community mixer.",
    tag: "Closing Ceremony",
  },
];
