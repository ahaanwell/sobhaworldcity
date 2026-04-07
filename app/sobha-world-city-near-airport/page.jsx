// app/sobha-world-city-near-airport/page.js

import NearAirportPage from "./NearAirportPage";

export const metadata = {
  title:
    "Sobha World City Near Airport – Premium Homes Near Bangalore Airport",

  description:
    "Discover Sobha World City near Bangalore Airport offering spacious homes, modern amenities, and excellent connectivity. Ideal for families and long-term real estate investment.",

  keywords: [
    "Sobha World City near airport",
    "Sobha World City Bangalore",
    "Sobha near airport property",
    "Bangalore airport residential projects",
    "Sobha township Hoskote",
    "Sobha projects Bangalore"
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/sobha-world-city-near-airport.html",
  },

  openGraph: {
    title:
      "Sobha World City Near Airport – Premium Township Living",
    description:
      "Explore premium apartments near Bangalore Airport with top amenities, green spaces, and strong investment potential.",
    url:
      "https://www.sobhaworldcity.com/sobha-world-city-near-airport.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/sobha-world-city-near-airport.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobha World City Near Airport",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha World City Near Airport – Bangalore",
    description:
      "Premium homes near Bangalore Airport with great connectivity and investment value.",
    images: [
      "https://www.sobhaworldcity.com/images/sobha-world-city-near-airport.jpeg",
    ],
  },
};

export default function Page() {
  return <NearAirportPage />;
}