export interface EventConfig {
  name: string;
  tagline: string;
  organizer: string;
  theme: string;
  date: string;
  displayDate: string;
  time: string;
  location: string;
  venue: string;
  venueStatus: string;
  capacity: number;
  format: string;
  ticketUrl: string;
  communityUrl: string;
  sponsorUrl: string;
  partnerUrl: string;
  email: string;
  socials: {
    linkedin: string;
    twitter: string;
    instagram: string;
    youtube: string;
  };
}

export const eventConfig: EventConfig = {
  name: "DevFest Baroda 2026",
  tagline: "GDG Baroda Presents",
  organizer: "GDG Baroda",
  theme: "From Attendees to Builders",
  date: "2026-10-25T09:00:00+05:30",
  displayDate: "25 October 2026",
  time: "9:00 AM – 6:00 PM IST",
  location: "Vadodara, Gujarat, India",
  venue: "To Be Announced",
  venueStatus: "Official venue announcement coming soon",
  capacity: 400,
  format: "Premium Single-Track Conference",
  ticketUrl: "https://konfhub.com/devfest-baroda-2026",
  communityUrl: "https://gdg.community.dev/gdg-baroda/",
  sponsorUrl: "mailto:gdgbaroda@gmail.com?subject=DevFest%20Baroda%202026%20Sponsorship%20Inquiry",
  partnerUrl: "mailto:gdgbaroda@gmail.com?subject=DevFest%20Baroda%202026%20Community%20Partnership",
  email: "gdgbaroda@gmail.com",
  socials: {
    linkedin: "https://www.linkedin.com/company/gdg-baroda",
    twitter: "https://twitter.com/gdgbaroda",
    instagram: "https://www.instagram.com/gdgbaroda",
    youtube: "https://www.youtube.com/@gdgbaroda",
  },
};
