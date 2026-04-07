// app/blog/sobha-world-city-connectivity/page.js

import SobhaWorldCityConnectivityPage from "./SobhaWorldCityConnectivityPage";

export const metadata = {
  title:
    "Sobha World City Connectivity | Road, Metro & IT Hub Access in Bangalore",

  description:
    "Explore Sobha World City connectivity including major roads, metro access, IT hubs, airport distance, and infrastructure growth in Bangalore.",

  keywords: [
    "Sobha World City connectivity",
    "Sobha World City location",
    "Sobha World City metro",
    "Sobha World City IT hubs",
    "Sobha World City airport connectivity",
  ],

  authors: [{ name: "Sobha World City" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/blog/sobha-world-city-connectivity.html",
  },

  openGraph: {
    title:
      "Sobha World City Connectivity – Road, Metro & IT Hub Access",
    description:
      "Detailed guide covering roads, metro, IT hubs, airport access, and infrastructure.",
    url:
      "https://www.sobhaworldcity.com/blog/sobha-world-city-connectivity.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/sobha-world-city-connectivity.png",
        width: 1200,
        height: 630,
        alt: "Sobha World City Connectivity",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha World City Connectivity Guide",
    description:
      "Check road, metro, airport, and IT hub connectivity.",
    images: [
      "https://www.sobhaworldcity.com/images/sobha-world-city-connectivity.png",
    ],
  },

  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Hoskote, Bangalore",
    "geo.position": "13.0700;77.8000",
    ICBM: "13.0700,77.8000",
  },
};

export default function Page() {
  return <SobhaWorldCityConnectivityPage />;
}