// app/blog/about-hoskote/page.js

import AboutHoskotePage from "./AboutHoskotePage";

export const metadata = {
  title:
    "Hoskote Bangalore Real Estate Growth 2025 | Investment, Connectivity & Future Development",

  description:
    "Discover why Hoskote in East Bangalore is emerging as a real estate hotspot. Explore connectivity, infrastructure, property trends, and investment potential in 2025.",

  keywords: [
    "Hoskote real estate",
    "Hoskote Bangalore property",
    "East Bangalore investment",
    "Hoskote growth 2025",
    "Bangalore suburban development",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/blog/about-hostoke.html",
  },

  openGraph: {
    title:
      "Hoskote – Bangalore’s Next Real Estate Hotspot",
    description:
      "Explore connectivity, infrastructure, and investment potential in Hoskote.",
    url:
      "https://www.sobhaworldcity.com/blog/about-hostoke.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/hoskote-growth.png",
        width: 1200,
        height: 630,
        alt: "Hoskote Bangalore Real Estate Growth",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Hoskote Real Estate Growth 2025",
    description:
      "Why Hoskote is becoming a top investment destination in Bangalore.",
    images: [
      "https://www.sobhaworldcity.com/images/hoskote-growth.png",
    ],
  },
};

export default function Page() {
  return <AboutHoskotePage />;
}