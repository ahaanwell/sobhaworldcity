// app/2-bhk-apartment-floor-plan-in-sobha-world-city/page.js

import Bhk2FloorPlanPage from "./Bhk2FloorPlanPage";

export const metadata = {
  title:
    "2 BHK Apartment Floor Plan in Sobha World City – Layout & Design Guide",

  description:
    "Explore the 2 BHK apartment floor plan in Sobha World City with smart layouts, vastu-friendly design, spacious rooms, and modern lifestyle amenities in East Bangalore.",

  keywords: [
    "2 BHK floor plan Sobha World City",
    "Sobha World City 2 BHK layout",
    "2 BHK apartment design Bangalore",
    "2 BHK flats near Whitefield",
    "Sobha World City floor plan",
    "2 BHK apartment layout Bangalore"
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/2-bhk-apartment-floor-plan-in-sobha-world-city",
  },

  openGraph: {
    title:
      "2 BHK Apartment Floor Plan in Sobha World City",
    description:
      "Detailed layout, design, and vastu-friendly features of 2 BHK apartments in Sobha World City.",
    url:
      "https://www.sobhaworldcity.com/2-bhk-apartment-floor-plan-in-sobha-world-city",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/sobha-2-bhk-flats.jpeg",
        width: 1200,
        height: 630,
        alt: "2 BHK Floor Plan Sobha World City",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "2 BHK Floor Plan – Sobha World City",
    description:
      "Smart 2 BHK apartment layouts with modern design and vastu principles.",
    images: [
      "https://www.sobhaworldcity.com/images/sobha-2-bhk-flats.jpeg",
    ],
  },
};

export default function Page() {
  return <Bhk2FloorPlanPage />;
}