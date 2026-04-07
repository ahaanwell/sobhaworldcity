// app/blog/about-location/page.js

import AboutLocationPage from "./AboutLocationPage";

export const metadata = {
  title:
    "Sobha World City Location Benefits & Connectivity Guide 2025",

  description:
    "Explore Sobha World City in Hoskote, East Bangalore. Discover connectivity, nearby IT hubs, schools, hospitals, malls, and lifestyle advantages.",

  keywords: [
    "Sobha World City location",
    "Sobha World City connectivity",
    "Sobha World City Hoskote",
    "Sobha World City East Bangalore",
    "Sobha World City nearby infrastructure",
    "Sobha World City advantages",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/blog/about-location.html",
  },

  openGraph: {
    title:
      "Sobha World City – Location & Connectivity Guide",
    description:
      "Detailed guide on connectivity, schools, hospitals, IT hubs, and lifestyle benefits.",
    url:
      "https://www.sobhaworldcity.com/blog/about-location.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/about-location.png",
        width: 1200,
        height: 630,
        alt: "Sobha World City Location",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha World City Location Benefits",
    description:
      "Check connectivity, infrastructure, and lifestyle advantages in East Bangalore.",
    images: [
      "https://www.sobhaworldcity.com/images/about-location.png",
    ],
  },
};

export default function Page() {
  return <AboutLocationPage />;
}