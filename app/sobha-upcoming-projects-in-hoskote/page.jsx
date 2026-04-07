// app/sobha-upcoming-projects-in-hoskote/page.js

import UpcomingProjectHoskotePage from "./UpcomingProjectHoskotePage";

export const metadata = {
  title:
    "Sobha Upcoming Projects in Hoskote – World City, La Casa, Galera & More",

  description:
    "Explore Sobha upcoming projects in Hoskote including Sobha World City, La Casa, Galera, and premium villas & apartments in East Bangalore. Ideal for modern living and investment.",

  keywords: [
    "Sobha upcoming projects Hoskote",
    "Sobha World City",
    "Sobha La Casa",
    "Sobha Galera",
    "Sobha Hoskote projects",
    "upcoming projects East Bangalore",
    "Sobha projects Bangalore"
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/sobha-upcoming-projects-in-hoskote.html",
  },

  openGraph: {
    title:
      "Sobha Upcoming Projects in Hoskote – Premium Developments",
    description:
      "Discover Sobha World City, La Casa, Galera and other upcoming residential projects in Hoskote, Bangalore.",
    url:
      "https://www.sobhaworldcity.com/sobha-upcoming-projects-in-hoskote.html",
    type: "website",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/sobha-upcoming-hoskote.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobha Upcoming Projects in Hoskote",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha Upcoming Projects in Hoskote",
    description:
      "Explore luxury villas, row houses, and apartments by Sobha in Hoskote.",
    images: [
      "https://www.sobhaworldcity.com/images/sobha-upcoming-hoskote.jpeg",
    ],
  },
};

export default function Page() {
  return <UpcomingProjectHoskotePage />;
}