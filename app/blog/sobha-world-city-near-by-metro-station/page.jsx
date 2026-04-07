// app/blog/sobha-world-city-near-by-metro-station/page.js

import NearMetroStationPage from "./NearMetroStationPage";

export const metadata = {
  title:
    "Sobha World City Near Metro Station | Connectivity & Metro Access Guide 2025",

  description:
    "Discover Sobha World City metro connectivity near Hoskote. Explore nearest metro stations, travel time to Whitefield, ITPL, and future metro expansion plans in East Bangalore.",

  keywords: [
    "Sobha World City metro",
    "Sobha World City near metro station",
    "metro near Hoskote Bangalore",
    "Whitefield metro connectivity",
    "Bangalore metro expansion East",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/blog/sobha-world-city-near-by-metro-station.html",
  },

  openGraph: {
    title:
      "Sobha World City Near Metro Station – Connectivity Guide",
    description:
      "Check nearest metro stations, travel time, and upcoming metro developments near Sobha World City.",
    url:
      "https://www.sobhaworldcity.com/blog/sobha-world-city-near-by-metro-station.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/sobha-world-city-metro.png",
        width: 1200,
        height: 630,
        alt: "Sobha World City Metro Connectivity",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha World City Metro Connectivity",
    description:
      "Explore metro access and future connectivity near Hoskote.",
    images: [
      "https://www.sobhaworldcity.com/images/sobha-world-city-metro.png",
    ],
  },
};

export default function Page() {
  return <NearMetroStationPage />;
}