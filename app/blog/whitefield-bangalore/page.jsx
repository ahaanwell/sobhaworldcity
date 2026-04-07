// app/blog/whitefield-bangalore/page.js

import WhitefieldBangalorePage from "./WhitefieldBangalorePage";

export const metadata = {
  title:
    "Whitefield Bangalore – Connectivity, IT Hubs, Lifestyle & Real Estate Growth",

  description:
    "Explore Whitefield, Bangalore – a top IT hub with metro connectivity, premium lifestyle, and strong real estate growth. Discover investment potential near Sobha World City.",

  keywords: [
    "Whitefield Bangalore",
    "Whitefield IT hub",
    "Whitefield connectivity",
    "Whitefield real estate",
    "Whitefield metro",
    "property investment Whitefield",
  ],

  authors: [{ name: "Sobha World City" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/blog/whitefield-bangalore.html",
  },

  openGraph: {
    title:
      "Whitefield Bangalore – IT Hub & Real Estate Growth",
    description:
      "Discover why Whitefield is one of Bangalore’s top IT and residential destinations.",
    url:
      "https://www.sobhaworldcity.com/blog/whitefield-bangalore.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/whitefield-bangalore.png",
        width: 1200,
        height: 630,
        alt: "Whitefield Bangalore",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Whitefield Bangalore – Location & Investment Guide",
    description:
      "Explore connectivity, IT hubs, and real estate growth in Whitefield.",
    images: [
      "https://www.sobhaworldcity.com/images/whitefield-bangalore.png",
    ],
  },
};

export default function Page() {
  return <WhitefieldBangalorePage />;
}