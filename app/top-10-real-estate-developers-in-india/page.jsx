// app/top-10-real-estate-developers-in-india/page.js

import Top10realEstateDeveloper from "./Top10realEstateDeveloper";

export const metadata = {
  title:
    "Top 10 Real Estate Developers in India | Best Builders & Trusted Brands",

  description:
    "Explore the top real estate developers in India including Sobha Limited, DLF, Godrej Properties, and Prestige Group. Discover trusted builders and premium township projects.",

  keywords: [
    "top real estate developers India",
    "best builders in India",
    "Sobha Limited",
    "DLF Limited",
    "Godrej Properties",
    "Prestige Group",
    "Indian real estate companies",
  ],

  authors: [{ name: "Sobha World City" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.yourwebsite.com/top-10-real-estate-developers-in-india.html",
  },

  openGraph: {
    title:
      "Top 10 Real Estate Developers in India | Trusted Builders Guide",
    description:
      "Discover India's most trusted real estate developers and premium township projects.",
    url:
      "https://www.yourwebsite.com/top-10-real-estate-developers-in-india.html",
    type: "article",
    images: [
      {
        url: "https://www.yourwebsite.com/images/top-10-real-estate.png",
        width: 1200,
        height: 630,
        alt: "Top Real Estate Developers in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Top Builders in India – Sobha, DLF, Godrej & More",
    description:
      "Explore the most trusted real estate developers in India and their landmark projects.",
    images: [
      "https://www.yourwebsite.com/images/top-10-real-estate.png",
    ],
  },
};

export default function Page() {
  return <Top10realEstateDeveloper />;
}