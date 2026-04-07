// app/rent/page.js

import RentPage from "./RentPage";

export const metadata = {
  title:
    "Sobha World City Rent | A Smart Choice for Modern Living in East Bangalore",

  description:
    "Looking for premium rental homes in East Bangalore? Sobha World City Rent offers spacious 2, 3, and 4 BHK homes, top amenities, great connectivity, and a peaceful modern lifestyle in Hoskote.",

  keywords: [
    "Sobha World City Rent",
    "Sobha World City rentals",
    "Sobha Rent Bangalore",
    "Sobha apartments for rent",
    "Sobha World City Hoskote rent",
    "2 BHK rent Sobha World City",
    "3 BHK rent Sobha World City",
    "East Bangalore rental homes",
  ],

  authors: [{ name: "Sobha World City" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.sobhaworldcity.com/rent.html",
  },

  openGraph: {
    title:
      "Sobha World City Rent | A Smart Choice for Modern Living in East Bangalore",
    description:
      "Discover premium rental living at Sobha World City with spacious flats, lifestyle amenities, and excellent connectivity.",
    url: "https://www.sobhaworldcity.com/rent.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/rent.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobha World City Rent",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha World City Rent | A Smart Choice for Modern Living in East Bangalore",
    description:
      "Explore rental homes at Sobha World City with top-tier amenities and connectivity in East Bangalore.",
    images: [
      "https://www.sobhaworldcity.com/images/rent.jpeg",
    ],
  },
};

export default function Page() {
  return <RentPage />;
}