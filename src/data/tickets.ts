export interface TicketTier {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  status: "available" | "sold-out" | "coming-soon";
  isPopular?: boolean;
  isPatron?: boolean;
  features: string[];
  ctaLabel?: string;
}

export const ticketsData: TicketTier[] = [
  {
    id: "regular",
    name: "Regular Ticket",
    subtitle: "The full single-track DevFest conference day experience",
    price: "₹599",
    originalPrice: "₹899",
    badge: "Most Popular",
    status: "available",
    isPopular: true,
    features: [
      "Full single-track conference access",
      "Access to all 8+ technical deep-dive talks",
      "Dedicated Code Lounge interactive builder entry",
      "Exclusive DevFest Baroda 2026 swag kit",
      "Gourmet breakfast, lunch & artisan coffee breaks",
      "Expo floor, sponsor booths & demo kiosks",
      "Full-day curated networking with 400+ developers",
      "Official digital badge & participation certificate",
    ],
  },
  {
    id: "late-bloomers",
    name: "Late Bloomers",
    subtitle: "Late registration tier once standard phase concludes",
    price: "₹799",
    originalPrice: "₹1,099",
    status: "available",
    isPopular: false,
    features: [
      "Full single-track conference access",
      "Access to all technical sessions & keynotes",
      "Code Lounge builder area participation",
      "DevFest 2026 official swag pack",
      "Complete catering (breakfast, lunch, tea & coffee)",
      "Sponsor showcase & recruitment networking",
      "Community mixer & evening group session",
    ],
  },
  {
    id: "community-patron",
    name: "Community Patron",
    subtitle: "Support open community initiatives with VIP perks",
    price: "₹5,000",
    badge: "Exclusive VIP",
    status: "available",
    isPatron: true,
    features: [
      "VIP Priority Check-in lane (zero queue)",
      "Prime front-row reserved auditorium seating",
      "Invitation to exclusive private Speaker & Organizer Dinner",
      "Premium DevFest Patron hoodie & collector swag pack",
      "Special acknowledgment in DevFest opening remarks",
      "All standard conference access & gourmet catering",
      "Direct support for student & diversity scholarship tickets",
    ],
  },
];
