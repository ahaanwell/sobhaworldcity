// app/life/page.js

import LifePage from "./LifePage";

export const metadata = {
  title: "Sobha World City Life – Comfort, Connectivity & Modern Living in East Bangalore",
  description:
    "Explore Sobha World City Life in Hoskote, East Bangalore — a modern township offering spacious apartments, premium amenities, great connectivity, and a thriving community lifestyle.",
  
  keywords: [
    "Sobha World City Life",
    "Sobha World City Bangalore",
    "Sobha World City Hoskote",
    "Sobha Limited Projects",
    "East Bangalore Real Estate",
    "Sobha Township Review",
    "Sobha World City Apartments",
    "Bangalore Modern Living",
    "Sobha World City Amenities",
    "Sobha World City Connectivity"
  ],

  authors: [{ name: "Sobha World City Info Team" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.sobhaworldcity.com/life.html",
  },

  openGraph: {
    title: "Sobha World City Life – The Perfect Blend of Comfort & Modern Living",
    description:
      "Discover Sobha World City Life — luxurious homes, premium amenities, excellent connectivity, and a modern lifestyle in East Bangalore.",
    url: "https://www.sobhaworldcity.com/life.html",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobha World City Life – Modern Living in East Bangalore",
    description:
      "A complete overview of Sobha World City Life — spacious homes, world-class amenities, smart location, and community living.",
  },
};

export default function Page() {
  return <LifePage />;
}