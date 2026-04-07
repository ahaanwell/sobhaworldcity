// app/sobha-2-bhk-flats-in-bangalore/page.js

import Sobha2BhkFlatsPage from "./Sobha2BhkFlatsPage";

export const metadata = {
  title:
    "Sobha 2 BHK Flats in Bangalore – Modern Homes at Sobha World City",

  description:
    "Explore premium 2 BHK flats in Bangalore at Sobha World City with modern layouts, green surroundings, lifestyle amenities, and excellent connectivity in East Bangalore.",

  keywords: [
    "Sobha 2 BHK flats Bangalore",
    "2 BHK flats in Bangalore",
    "Sobha World City 2 BHK",
    "2 BHK apartments East Bangalore",
    "Sobha projects Bangalore",
    "Bangalore flats for sale 2 BHK"
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/sobha-2-bhk-flats-in-bangalore.html",
  },

  openGraph: {
    title:
      "Sobha 2 BHK Flats in Bangalore – Premium Township Living",
    description:
      "Discover modern 2 BHK apartments at Sobha World City with spacious layouts, greenery, and lifestyle amenities.",
    url:
      "https://www.sobhaworldcity.com/sobha-2-bhk-flats-in-bangalore.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/sobha-2-bhk-flats.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobha 2 BHK Flats in Bangalore",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha 2 BHK Flats in Bangalore",
    description:
      "Modern 2 BHK homes with top-class amenities and township living.",
    images: [
      "https://www.sobhaworldcity.com/images/sobha-2-bhk-flats.jpeg",
    ],
  },
};

export default function Page() {
  return <Sobha2BhkFlatsPage />;
}