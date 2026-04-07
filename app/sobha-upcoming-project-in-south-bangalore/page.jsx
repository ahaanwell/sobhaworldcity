// app/sobha-upcoming-project-in-south-bangalore/page.js

import SobhaUpcomingProjectSouthPage from "./SobhaUpcomingProjectSouthPage";

export const metadata = {
  title:
    "Sobha Upcoming Projects in South Bangalore | New Launch Projects 2025",

  description:
    "Explore Sobha upcoming projects in South Bangalore including Sobha Magnus and Sobha Townpark. Compare locations, features, and investment potential with Sobha World City.",

  keywords: [
    "Sobha upcoming project South Bangalore",
    "Sobha Magnus",
    "Sobha Townpark",
    "Sobha projects Bangalore",
    "South Bangalore real estate",
    "Sobha World City investment"
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/sobha-upcoming-project-in-south-bangalore.html",
  },

  openGraph: {
    title:
      "Sobha Upcoming Projects in South Bangalore | 2025 Guide",
    description:
      "Discover Sobha Magnus, Sobha Townpark, and compare them with Sobha World City for better investment decisions.",
    url:
      "https://www.sobhaworldcity.com/sobha-upcoming-project-in-south-bangalore.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/upcoming-project-in-south-bangalore.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobha Projects South Bangalore",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha Upcoming Projects in South Bangalore | Latest Projects",
    description:
      "Explore Sobha Magnus, Sobha Townpark, and compare with Sobha World City.",
    images: [
      "https://www.sobhaworldcity.com/images/upcoming-project-in-south-bangalore.jpeg",
    ],
  },
};

export default function Page() {
  return <SobhaUpcomingProjectSouthPage />;
}