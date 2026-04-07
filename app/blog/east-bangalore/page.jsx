// app/blog/east-bangalore/page.js

import EastBangalorePage from "./EastBangalorePage";

export const metadata = {
  title:
    "East Bangalore Real Estate Growth 2025 | Investment, IT Hubs & Connectivity Guide",

  description:
    "Explore East Bangalore real estate growth in 2025. Discover IT hubs, Whitefield connectivity, infrastructure, lifestyle, and why it's a top investment destination.",

  keywords: [
    "East Bangalore real estate",
    "Whitefield property",
    "KR Puram investment",
    "Bangalore IT hubs real estate",
    "East Bangalore growth 2025",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/blog/east-bangalore.html",
  },

  openGraph: {
    title:
      "East Bangalore – Real Estate Growth & Investment Guide",
    description:
      "Discover IT hubs, connectivity, and property trends in East Bangalore.",
    url:
      "https://www.sobhaworldcity.com/blog/east-bangalore.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/east-bangalore.png",
        width: 1200,
        height: 630,
        alt: "East Bangalore Real Estate Growth",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "East Bangalore Real Estate Growth",
    description:
      "Why East Bangalore is a top property investment destination.",
    images: [
      "https://www.sobhaworldcity.com/images/east-bangalore.png",
    ],
  },
};

export default function Page() {
  return <EastBangalorePage />;
}