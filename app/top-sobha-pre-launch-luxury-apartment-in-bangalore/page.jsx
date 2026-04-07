// app/top-sobha-pre-launch-luxury-apartment-in-bangalore/page.js

import TopSobhaPreLaunchPage from "./TopSobhaPreLaunchPage";

export const metadata = {
  title:
    "Top Sobha Pre-Launch Luxury Apartments in Bangalore 2025",

  description:
    "Explore Sobha pre-launch luxury apartments in Bangalore including World City, Neopolis, Madison Heights, Oakshire, and Crystal Meadows. Discover premium living and investment opportunities.",

  keywords: [
    "Sobha pre launch apartments Bangalore",
    "Sobha luxury apartments Bangalore",
    "Sobha upcoming projects Bangalore",
    "Sobha World City",
    "Sobha Neopolis",
    "Sobha Madison Heights",
    "Sobha Oakshire",
    "Sobha Crystal Meadows"
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/top-sobha-pre-launch-luxury-apartment-in-bangalore",
  },

  openGraph: {
    title:
      "Top Sobha Pre-Launch Luxury Apartments in Bangalore",
    description:
      "Discover premium pre-launch apartments by Sobha in Bangalore with modern design, prime locations, and strong investment potential.",
    url:
      "https://www.sobhaworldcity.com/top-sobha-pre-launch-luxury-apartment-in-bangalore",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/sobha-upcoming-hoskote.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobha Pre Launch Apartments Bangalore",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha Pre-Launch Luxury Apartments in Bangalore",
    description:
      "Premium Sobha upcoming projects with luxury features and high ROI potential.",
    images: [
      "https://www.sobhaworldcity.com/images/sobha-upcoming-hoskote.jpeg",
    ],
  },
};

export default function Page() {
  return <TopSobhaPreLaunchPage />;
}