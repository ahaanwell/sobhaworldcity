// app/sobha-upcoming-projects-in-varthur/page.js

import SobhaUpcomingProjectVarthurPage from "./SobhaUpcomingProjectVarthurPage";

export const metadata = {
  title:
    "Sobha Upcoming Projects in Varthur | Price, Location & Investment Guide",

  description:
    "Explore Sobha upcoming projects in Varthur and East Bangalore. Learn about connectivity, amenities, investment potential, and why Sobha is a trusted real estate brand.",

  keywords: [
    "Sobha Upcoming Projects in Varthur",
    "Sobha World City",
    "Sobha East Bangalore",
    "Sobha Hoskote",
    "Sobha Township Projects",
    "Bangalore Real Estate",
    "Varthur Projects",
    "Sobha Limited"
  ],

  authors: [{ name: "Sobha World City Review Team" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/sobha-upcoming-projects-in-varthur.html",
  },

  openGraph: {
    title:
      "Sobha Upcoming Projects in Varthur | Sobha World City",
    description:
      "Discover Sobha upcoming projects in Varthur and explore premium residential developments in East Bangalore.",
    url:
      "https://www.sobhaworldcity.com/sobha-upcoming-projects-in-varthur.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/sobha-upcoming-projects-in-varthur.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobha Upcoming Projects in Varthur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha Upcoming Projects in Varthur | Investment & Location Guide",
    description:
      "Explore Sobha projects in Varthur with strong connectivity, amenities, and future growth potential.",
    images: [
      "https://www.sobhaworldcity.com/images/sobha-upcoming-projects-in-varthur.jpeg",
    ],
  },
};

export default function Page() {
  return <SobhaUpcomingProjectVarthurPage />;
}