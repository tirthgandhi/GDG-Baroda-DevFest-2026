export interface CommunityPartner {
  id: string;
  name: string;
  type: string;
  location: string;
  website: string;
  isConfirmed: boolean;
}

export const communityPartnersData: CommunityPartner[] = [
  {
    id: "cp-1",
    name: "Women Techmakers Baroda",
    type: "Diversity & Inclusion Partner",
    location: "Vadodara, India",
    website: "https://developers.google.com/womentechmakers",
    isConfirmed: true,
  },
  {
    id: "cp-2",
    name: "Google Developer Groups Ahmedabad",
    type: "Regional Chapter Partner",
    location: "Ahmedabad, India",
    website: "https://gdg.community.dev",
    isConfirmed: true,
  },
  {
    id: "cp-3",
    name: "Google Developer Groups Surat",
    type: "Regional Chapter Partner",
    location: "Surat, India",
    website: "https://gdg.community.dev",
    isConfirmed: true,
  },
  {
    id: "cp-4",
    name: "GDG on Campus Vadodara",
    type: "Student Developer Chapter",
    location: "Vadodara Universities",
    website: "https://developers.google.com/community/gdsc",
    isConfirmed: true,
  },
  {
    id: "cp-5",
    name: "Gujarat Tech Communities",
    type: "Open Source Collective",
    location: "Gujarat, India",
    website: "#",
    isConfirmed: false,
  },
  {
    id: "cp-6",
    name: "Community Partner In Progress",
    type: "Developer Ecosystem",
    location: "Vadodara & Beyond",
    website: "#",
    isConfirmed: false,
  },
];
