// app/blog/sobha-world-city-investment/page.js

import SobhaWorldCityInvestmentPage from "./SobhaWorldCityInvestmentPage";

export const metadata = {
  title:
    "Sobha World City Investment | Price, ROI & Future Growth in Bangalore",

  description:
    "Discover why Sobha World City is a smart investment in Bangalore. Explore ROI, appreciation potential, rental income, and location advantages.",

  keywords: [
    "Sobha World City investment",
    "Sobha World City ROI",
    "Bangalore real estate investment",
    "property investment Bangalore",
    "Sobha World City appreciation",
  ],

  authors: [{ name: "Sobha World City" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/blog/sobha-world-city-investment.html",
  },

  openGraph: {
    title:
      "Sobha World City Investment – Smart Real Estate Choice",
    description:
      "Explore investment benefits, rental income, and long-term growth potential.",
    url:
      "https://www.sobhaworldcity.com/blog/sobha-world-city-investment.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/sobha-world-city-investment.png",
        width: 1200,
        height: 630,
        alt: "Sobha World City Investment",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha World City Investment Guide",
    description:
      "Check ROI, rental yield, and investment benefits in Bangalore.",
    images: [
      "https://www.sobhaworldcity.com/images/sobha-world-city-investment.png",
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
  return <SobhaWorldCityInvestmentPage />;
}