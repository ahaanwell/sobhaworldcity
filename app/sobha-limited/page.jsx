// app/sobha-limited/page.js

import SobhaLimitedPage from "./SobhaLimitedPage";

export const metadata = {
  title:
    "Sobha Limited: History, Growth, Projects & Sobha World City Hoskote",

  description:
    "Sobha Limited is one of India’s most trusted real estate developers known for quality and engineering excellence. Explore its history, projects, and Sobha World City in East Bangalore.",

  keywords: [
    "Sobha Limited",
    "Sobha Developers",
    "Sobha World City",
    "Sobha World City Hoskote",
    "Sobha Projects Bangalore",
    "Sobha Real Estate",
    "Sobha Upcoming Projects",
    "Sobha History",
    "Sobha Builder Bangalore",
    "Sobha township"
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/sobha-limited.html",
  },

  openGraph: {
    title:
      "Sobha Limited: Journey, Expansion & Sobha World City in Hoskote",
    description:
      "Discover the legacy of Sobha Limited and explore details about the upcoming Sobha World City in East Bangalore.",
    url:
      "https://www.sobhaworldcity.com/sobha-limited.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/sobha-limited.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobha Limited Projects",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha Limited: History & Sobha World City Overview",
    description:
      "Learn about Sobha Limited’s quality-driven journey and projects in Bangalore.",
    images: [
      "https://www.sobhaworldcity.com/images/sobha-limited.jpeg",
    ],
  },
};

export default function Page() {
  return <SobhaLimitedPage />;
}