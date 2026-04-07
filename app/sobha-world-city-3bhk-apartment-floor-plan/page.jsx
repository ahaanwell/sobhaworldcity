// app/sobha-world-city-3bhk-apartment-floor-plan/page.js

import World3bhkApartmentFloorPlanPage from "./World3bhkApartmentFloorPlanPage";

export const metadata = {
  title:
    "Sobha World City 3 BHK Apartment Floor Plan | Layout, Sizes & Complete Guide",

  description:
    "Explore Sobha World City 3 BHK apartment floor plans with detailed layouts, sizes, room dimensions, ventilation, and smart design for modern living in East Bangalore.",

  keywords: [
    "Sobha World City 3 BHK floor plan",
    "Sobha World City floor plan",
    "Sobha 3 BHK layout",
    "Sobha apartment sizes",
    "3 BHK layout Bangalore",
    "Sobha World City East Bangalore"
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/sobha-world-city-3bhk-apartment-floor-plan.html",
  },

  openGraph: {
    title:
      "Sobha World City 3 BHK Apartment Floor Plan | Layout & Sizes",
    description:
      "Detailed guide to Sobha World City 3 BHK floor plans including layouts, dimensions, ventilation, and design features.",
    url:
      "https://www.sobhaworldcity.com/sobha-world-city-3bhk-apartment-floor-plan.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/3bhk-floor-plan.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobha World City 3 BHK Floor Plan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobha World City 3 BHK Apartment Floor Plan",
    description:
      "Explore spacious 3 BHK layouts with smart planning, ventilation, and modern design.",
    images: [
      "https://www.sobhaworldcity.com/images/3bhk-floor-plan.jpeg",
    ],
  },
};

export default function Page() {
  return <World3bhkApartmentFloorPlanPage />;
}