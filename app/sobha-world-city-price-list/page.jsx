// app/sobha-world-city-price-list/page.js

import SobhaWorldCityPriceListPage from "./SobhaWorldCityPriceListPage";

export const metadata = {
  title:
    "Sobha World City Price List 2025 – Updated Cost, Apartment Sizes & Full Guide",

  description:
    "Explore the latest Sobha World City price list for 2, 3, and 4 BHK apartments in Hoskote, East Bangalore. Get updated pricing, sizes, and investment insights.",

  keywords: [
    "Sobha World City Price List",
    "Sobha World City Prices",
    "Sobha World City Cost",
    "Sobha Hoskote Prices",
    "Sobha World City 2 BHK Price",
    "Sobha World City 3 BHK Price",
    "Sobha World City 4 BHK Price",
    "Sobha Hoskote Apartment Cost",
    "Sobha World City Bangalore Price"
  ],

  authors: [{ name: "Sobha World City Reviews" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/sobha-world-city-price-list.html",
  },

  openGraph: {
    title:
      "Sobha World City Price List 2025 – Full Price Guide & Apartment Details",
    description:
      "A complete guide to Sobha World City prices, configurations, and value factors including 2, 3, and 4 BHK details.",
    url:
      "https://www.sobhaworldcity.com/sobha-world-city-price-list.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/price-list.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobha World City Price List 2025",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha World City Price List 2025 – Updated Cost & Sizes",
    description:
      "Check latest prices for 2, 3, and 4 BHK apartments in Sobha World City, East Bangalore.",
    images: [
      "https://www.sobhaworldcity.com/images/price-list.jpeg",
    ],
  },
};

export default function Page() {
  return <SobhaWorldCityPriceListPage />;
}