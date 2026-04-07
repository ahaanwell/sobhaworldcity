// app/is-it-a-good-time-to-buy-real-estate-in-bangalore/page.js

import GoodTimeToBuyPage from "./GoodTimeToBuyPage";

export const metadata = {
  title:
    "Is It a Good Time to Buy Real Estate in Bangalore? 2025 Market Insights",

  description:
    "Is now the right time to buy property in Bangalore? Explore market trends, East Bangalore growth, and why Sobha World City is a strong investment option.",

  keywords: [
    "buy real estate Bangalore",
    "Bangalore property market 2025",
    "East Bangalore real estate",
    "property investment Bangalore",
    "Sobha World City investment"
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/is-it-a-good-time-to-buy-real-estate-in-bangalore.html",
  },

  openGraph: {
    title:
      "Is It a Good Time to Buy Real Estate in Bangalore?",
    description:
      "Discover current market trends and investment opportunities in Bangalore real estate.",
    url:
      "https://www.sobhaworldcity.com/is-it-a-good-time-to-buy-real-estate-in-bangalore.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/bangalore-real-estate.png",
        width: 1200,
        height: 630,
        alt: "Bangalore Real Estate Investment",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Good Time to Buy Property in Bangalore?",
    description:
      "Explore Bangalore real estate trends and investment opportunities.",
    images: [
      "https://www.sobhaworldcity.com/images/bangalore-real-estate.png",
    ],
  },
};

export default function Page() {
  return <GoodTimeToBuyPage />;
}