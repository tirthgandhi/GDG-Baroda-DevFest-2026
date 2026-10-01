export type SponsorTier = "Title Sponsor" | "Platinum Sponsors" | "Gold Sponsors" | "Silver Sponsors";

export interface Sponsor {
  id: string;
  name: string;
  tier: SponsorTier;
  website: string;
  description?: string;
  isConfirmed: boolean;
}

export const sponsorsData: Sponsor[] = [
  {
    id: "sp-title-1",
    name: "Google for Developers",
    tier: "Title Sponsor",
    website: "https://developers.google.com",
    description: "Official Global Program Partner supporting Google Developer Groups worldwide",
    isConfirmed: true,
  },
  {
    id: "sp-plat-1",
    name: "Partner Announcing Soon",
    tier: "Platinum Sponsors",
    website: "#",
    description: "Cloud & AI Infrastructure Partner",
    isConfirmed: false,
  },
  {
    id: "sp-plat-2",
    name: "Partner Announcing Soon",
    tier: "Platinum Sponsors",
    website: "#",
    description: "Developer Platform & Enterprise Tools",
    isConfirmed: false,
  },
  {
    id: "sp-gold-1",
    name: "Partner Announcing Soon",
    tier: "Gold Sponsors",
    website: "#",
    description: "FinTech & Payments Enabler",
    isConfirmed: false,
  },
  {
    id: "sp-gold-2",
    name: "Partner Announcing Soon",
    tier: "Gold Sponsors",
    website: "#",
    description: "EdTech & Career Accelerator",
    isConfirmed: false,
  },
  {
    id: "sp-silver-1",
    name: "Partner Announcing Soon",
    tier: "Silver Sponsors",
    website: "#",
    description: "Regional Technology Innovation Partner",
    isConfirmed: false,
  },
  {
    id: "sp-silver-2",
    name: "Partner Announcing Soon",
    tier: "Silver Sponsors",
    website: "#",
    description: "Community Ecosystem Supporter",
    isConfirmed: false,
  },
];
