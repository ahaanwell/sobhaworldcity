// app/sobha-world-city-completed-projects-east-bangalore/page.js

import CompletedProjectsPage from "./CompletedProjectsPage";

export const metadata = {
  title:
    "Sobha World City Completed Projects in East Bangalore | Full Guide 2025",

  description:
    "Explore Sobha completed projects in East Bangalore and understand why Sobha World City is a promising township. Learn about quality, delivery timelines, and investment value.",

  keywords: [
    "Sobha completed projects Bangalore",
    "Sobha projects East Bangalore",
    "Sobha World City review",
    "Sobha Dream Acres",
    "Sobha Lake Garden",
    "Sobha Chrysanthemum",
    "Sobha City Mykonos",
    "Sobha township Bangalore"
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/sobha-world-city-completed-projects-east-bangalore.html",
  },

  openGraph: {
    title:
      "Sobha Completed Projects in East Bangalore | Quality & Trust Guide",
    description:
      "Discover Sobha’s completed residential projects and how they reflect quality, timely delivery, and long-term value.",
    url:
      "https://www.sobhaworldcity.com/sobha-world-city-completed-projects-east-bangalore.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/sobha-world-city-completed-projects.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobha Completed Projects East Bangalore",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha Completed Projects in East Bangalore | Full Guide 2025",
    description:
      "Explore Sobha’s past projects and why Sobha World City is a strong investment choice.",
    images: [
      "https://www.sobhaworldcity.com/images/sobha-world-city-completed-projects.jpeg",
    ],
  },
};

export default function Page() {
  return <CompletedProjectsPage />;
}