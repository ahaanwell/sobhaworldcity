// app/sobha-world-city-offers/page.js

import OffersPage from "./OffersPage";

export const metadata = {
  title:
    "Sobha World City Offers – Best Deals & Exclusive Benefits | East Bangalore Township",

  description:
    "Discover the latest Sobha World City offers in Hoskote, East Bangalore. Get exclusive deals on 2, 3 & 4 BHK homes with premium amenities, green spaces, and excellent connectivity.",

  keywords: [
    "Sobha World City offers",
    "Sobha World City Bangalore",
    "Sobha Township Hoskote",
    "Sobha East Bangalore",
    "Sobha World City deals",
    "Sobha apartments Bangalore offers"
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/sobha-world-city-offers.html",
  },

  openGraph: {
    title:
      "Sobha World City Offers – Best Deals in East Bangalore",
    description:
      "Explore exclusive offers on Sobha World City apartments with modern amenities and township living benefits.",
    url:
      "https://www.sobhaworldcity.com/sobha-world-city-offers.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/sobha-world-city-offers.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobha World City Offers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobha World City Offers – Premium Township Living",
    description:
      "Check latest deals, benefits, and offers on Sobha World City homes in East Bangalore.",
    images: [
      "https://www.sobhaworldcity.com/images/sobha-world-city-offers.jpeg",
    ],
  },
};

export default function Page() {
  return <OffersPage />;
}