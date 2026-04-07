// app/sobha-upcoming-projects-in-whitefield/page.js

import SobhaUpcomingProjectWhiteFieldPage from "./SobhaUpcomingProjectWhiteFieldPage";

export const metadata = {
  title:
    "Sobha Upcoming Projects in Whitefield | Complete Guide for Homebuyers & Investors",

  description:
    "Explore Sobha upcoming projects in Whitefield and East Bangalore. Discover why Whitefield is a top real estate destination with strong connectivity, IT hubs, and future growth potential.",

  keywords: [
    "Sobha Upcoming Projects in Whitefield",
    "Sobha World City",
    "Sobha Projects East Bangalore",
    "Whitefield Real Estate",
    "Sobha Apartments Whitefield",
    "Sobha New Launch Bangalore",
    "Sobha Township Hoskote"
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/sobha-upcoming-projects-in-whitefield.html",
  },

  openGraph: {
    title:
      "Sobha Upcoming Projects in Whitefield | Complete Guide for Homebuyers & Investors",
    description:
      "A detailed guide on Sobha upcoming projects in Whitefield and East Bangalore including Sobha World City in Hoskote.",
    url:
      "https://www.sobhaworldcity.com/sobha-upcoming-projects-in-whitefield.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/sobha-upcoming-projects-in-whitefield.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobha Upcoming Projects in Whitefield",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha Upcoming Projects in Whitefield | Complete Guide for Homebuyers & Investors",
    description:
      "Discover Sobha upcoming projects in Whitefield and East Bangalore, including premium township developments.",
    images: [
      "https://www.sobhaworldcity.com/images/sobha-upcoming-projects-in-whitefield.jpeg",
    ],
  },
};

export default function Page() {
  return <SobhaUpcomingProjectWhiteFieldPage />;
}