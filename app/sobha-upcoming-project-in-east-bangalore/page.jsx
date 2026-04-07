// app/sobha-upcoming-project-in-east-bangalore/page.js

import SobhaUpcomingProjectEastBangalorePage from "./SobhaUpcomingProjectEastBangalorePage";

export const metadata = {
  title:
    "Sobha Upcoming Projects in East Bangalore | New Launches & Township Developments",

  description:
    "Discover Sobha upcoming projects in East Bangalore including Sobha World City, Sobha Neopolis, Sobha Sentosa, and Sobha Insignia. Explore locations, features, and investment benefits.",

  keywords: [
    "Sobha upcoming project in East Bangalore",
    "Sobha World City",
    "Sobha Hoskote Township",
    "Sobha Neopolis Panathur Road",
    "Sobha Sentosa East Bangalore",
    "Sobha Insignia Bellandur",
    "Sobha new launch Bangalore",
    "Sobha apartments East Bangalore",
    "Sobha Realty Bangalore"
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/sobha-upcoming-project-in-east-bangalore.html",
  },

  openGraph: {
    title:
      "Sobha Upcoming Projects in East Bangalore | New Launch & Township Developments",
    description:
      "Explore Sobha’s upcoming residential projects in East Bangalore including Sobha World City, Sobha Neopolis, and more.",
    url:
      "https://www.sobhaworldcity.com/sobha-upcoming-project-in-east-bangalore.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/upcoming-projects-east-bangalore.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobha Upcoming Projects in East Bangalore",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobha Upcoming Projects in East Bangalore",
    description:
      "Explore Sobha’s latest residential projects in East Bangalore with connectivity, layouts, and amenities.",
    images: [
      "https://www.sobhaworldcity.com/images/upcoming-projects-east-bangalore.jpeg",
    ],
  },
};

export default function Page() {
  return <SobhaUpcomingProjectEastBangalorePage />;
}