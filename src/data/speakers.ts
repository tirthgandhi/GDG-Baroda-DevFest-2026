export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  topic?: string;
  sessionTitle: string;
  track?: string;
  avatarUrl?: string;
  isAnnounced: boolean;
  socials?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export const speakersData: Speaker[] = [
  {
    id: "spk-1",
    name: "Keynote Speaker",
    role: "Google Developer Expert",
    company: "Engineering Leadership",
    sessionTitle: "Keynote: From Code Consumers to System Builders",
    topic: "Generative AI & Modern Architecture",
    isAnnounced: false,
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "spk-2",
    name: "Speaker Announcing Soon",
    role: "Staff Cloud Architect",
    company: "Google Cloud Platform",
    sessionTitle: "Designing Resilient Multi-Region Cloud Workloads",
    topic: "Cloud Architecture",
    isAnnounced: false,
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "spk-3",
    name: "Speaker Announcing Soon",
    role: "AI Research Engineer",
    company: "Gemini & Deep Learning",
    sessionTitle: "Building Agentic Applications with Gemini 2.0 & Cloud Run",
    topic: "Generative AI",
    isAnnounced: false,
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "spk-4",
    name: "Speaker Announcing Soon",
    role: "Principal Mobile Architect",
    company: "Android & Flutter Ecosystem",
    sessionTitle: "Modern Android & Flutter: Clean Architecture in Production",
    topic: "Mobile Engineering",
    isAnnounced: false,
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "spk-5",
    name: "Speaker Announcing Soon",
    role: "Principal Web Engineer",
    company: "Modern Web Platform",
    sessionTitle: "High-Performance Web: Beyond Hydration and Next-Gen Runtimes",
    topic: "Modern Web",
    isAnnounced: false,
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "spk-6",
    name: "Speaker Announcing Soon",
    role: "Lead Systems Engineer",
    company: "Kubernetes & Infrastructure",
    sessionTitle: "Zero-Downtime Microservices & Developer Platform Engineering",
    topic: "System Design",
    isAnnounced: false,
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
];
