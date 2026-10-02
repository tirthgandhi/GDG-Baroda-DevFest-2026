# DevFest Baroda 2026 - Official Event Website

<p align="center">
  <img src="https://img.shields.io/badge/GDG%20Baroda-DevFest%202026-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="GDG Baroda DevFest 2026" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.7+-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/License-Apache%202.0-green?style=for-the-badge" alt="Apache 2.0 License" />
</p>

## Overview

**DevFest Baroda 2026** is a modern, responsive, and production-ready event website for the annual developer conference organized by **Google Developer Group (GDG) Baroda**.

The event theme is **"From Attendees to Builders"**, focusing on practical learning, real engineering discussions, live coding, networking, and community-driven development.

The website provides all important event information in one place, including schedule, speakers, tickets, technologies, sponsors, community partners, venue details, FAQs, and previous DevFest highlights.

## Event Details

| Field | Details |
| --- | --- |
| Event Name | DevFest Baroda 2026 |
| Organizer | Google Developer Group Baroda |
| Theme | From Attendees to Builders |
| Date | Sunday, 25 October 2026 |
| Time | 09:00 AM - 06:00 PM IST |
| Location | Vadodara, Gujarat, India |
| Format | Single-track developer conference |
| Capacity | 400 builders |
| Venue | To be announced |
| License | Apache 2.0 |

## Key Features

- Professional landing page for DevFest Baroda 2026
- Responsive UI for desktop, tablet, and mobile devices
- Light and dark theme support
- Live event countdown timer
- Sticky navigation with scroll progress indicator
- Speaker showcase section
- Single-track event schedule
- Ticket pricing cards
- Technology ecosystem marquee
- Code Lounge section for hands-on builder experience
- Previous DevFest legacy and event gallery
- Sponsor and community partner sections
- Venue and travel information
- Accessible FAQ accordion
- SEO-friendly metadata and structured event data

## Tech Stack

| Layer | Technology | Purpose |
| --- | --- | --- |
| Frontend | React 19 | Component-based user interface |
| Language | TypeScript | Type-safe development |
| Build Tool | Vite | Fast development and optimized production build |
| Styling | Tailwind CSS 4 | Utility-first responsive styling |
| Animation | Motion | Smooth UI animations |
| Icons | Lucide React | Lightweight SVG icons |
| Fonts | Google Fonts | Space Grotesk, Plus Jakarta Sans, JetBrains Mono |

## Folder Structure

```text
/
├── .env.example
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
├── vite.config.ts
├── LICENSE
├── README.md
└── src/
    ├── assets/
    │   └── images/
    ├── components/
    │   ├── GDGLogo.tsx
    │   ├── ThemeToggle.tsx
    │   ├── Navbar.tsx
    │   ├── Hero.tsx
    │   ├── Countdown.tsx
    │   ├── About.tsx
    │   ├── Stats.tsx
    │   ├── Experience.tsx
    │   ├── CodeLounge.tsx
    │   ├── Technologies.tsx
    │   ├── Speakers.tsx
    │   ├── Schedule.tsx
    │   ├── Tickets.tsx
    │   ├── Legacy.tsx
    │   ├── Gallery.tsx
    │   ├── Sponsors.tsx
    │   ├── CommunityPartners.tsx
    │   ├── Venue.tsx
    │   ├── FAQ.tsx
    │   ├── FinalCTA.tsx
    │   └── Footer.tsx
    ├── config/
    │   └── event.ts
    ├── context/
    │   └── ThemeContext.tsx
    ├── data/
    │   ├── speakers.ts
    │   ├── schedule.ts
    │   ├── tickets.ts
    │   ├── technologies.ts
    │   ├── sponsors.ts
    │   ├── communityPartners.ts
    │   └── faq.ts
    ├── hooks/
    │   └── useCountdown.ts
    ├── App.tsx
    ├── main.tsx
    └── index.css
```

## Installation and Setup

### Prerequisites

Make sure the following tools are installed:

- Node.js v20 or higher
- npm v10 or higher
- Git

### Clone the Repository

```bash
git clone https://github.com/gdg-baroda/devfest-2026.git
cd devfest-2026
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file from the example file:

```bash
cp .env.example .env
```

Example variables:

```env
APP_URL=http://localhost:3000
GEMINI_API_KEY=your_gemini_api_key
```

### Start Development Server

```bash
npm run dev
```

The project will run locally at:

```text
http://localhost:3000
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Centralized Event Configuration

Most event information is managed from `src/config/event.ts`, so organizers can update event details without changing multiple components.

```ts
export const eventConfig = {
  name: "DevFest Baroda 2026",
  tagline: "GDG Baroda Presents",
  organizer: "GDG Baroda",
  theme: "From Attendees to Builders",
  date: "2026-10-25T09:00:00+05:30",
  displayDate: "25 October 2026",
  time: "9:00 AM - 6:00 PM IST",
  location: "Vadodara, Gujarat, India",
  venue: "To Be Announced",
  capacity: 400,
  ticketUrl: "https://konfhub.com/devfest-baroda-2026",
  communityUrl: "https://gdg.community.dev/gdg-baroda/",
  email: "gdgbaroda@gmail.com",
};
```

## Main Sections

| Section | Description |
| --- | --- |
| Hero | Main event introduction with title, theme, date, and call-to-action buttons |
| Countdown | Live countdown to the event date |
| About | Explains the DevFest theme and purpose |
| Experience | Highlights technical sessions, Code Lounge, and networking |
| Speakers | Displays speaker profiles and session details |
| Schedule | Shows the single-track agenda |
| Tickets | Displays available ticket tiers and pricing |
| Technologies | Shows key technologies like Gemini, Google Cloud, Firebase, Flutter, Android, and more |
| Sponsors | Displays sponsor tiers and partner information |
| Venue | Shows location and travel information |
| FAQ | Answers common attendee questions |

## Design System

The design system is inspired by Google Developer branding and focuses on clarity, consistency, and accessibility. The interface uses clean spacing, strong typography, responsive layouts, and carefully balanced color accents to create a professional event experience across all screen sizes.

The official Google color palette is used for highlights, call-to-action elements, section accents, progress indicators, and visual identity. This helps the website maintain a recognizable GDG-style look while keeping the overall layout modern and readable.

```css
--google-blue: #4285F4;
--google-red: #EA4335;
--google-yellow: #FBBC04;
--google-green: #34A853;
```

Key design principles:

- Clean and modern event-focused layout
- Consistent spacing, typography, and section structure
- Responsive design for mobile, tablet, and desktop screens
- Balanced use of Google brand colors
- High readability in both light and dark modes
- Smooth animations without affecting performance

## SEO and Metadata

The project includes SEO-friendly metadata inside `index.html` to improve search visibility, social sharing, and event discoverability. These metadata settings help the website appear properly when shared on platforms like LinkedIn, WhatsApp, Twitter/X, Discord, and other social channels.

- Page title
- Meta description for search engines
- OpenGraph tags for social media previews
- Twitter/X card metadata
- Schema.org Event structured data
- Font preconnect links
- Optimized event information for better indexing

## Contribution Guidelines

Contributions are welcome. Please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Test the project locally.
5. Create a pull request.

### Branch Naming

```text
feature/section-name
fix/issue-name
docs/update-readme
```

### Commit Message Examples

```text
feat: add speaker section
fix: improve mobile navbar
docs: update setup instructions
style: improve ticket card layout
```

## License

This project is licensed under the **Apache License 2.0**.

## Disclaimer

DevFest Baroda 2026 is a community-driven event organized by GDG Baroda. GDG Baroda is an independent group, and the opinions or content shared through this project do not necessarily represent Google.
