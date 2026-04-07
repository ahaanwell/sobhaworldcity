// app/blog/project-plan/page.js

import ProjectPlanPage from "./ProjectPlanPage";

export const metadata = {
  title:
    "Sobha World City Project Plan | Master Layout, Amenities & Township Overview 2025",

  description:
    "Explore Sobha World City project plan in Hoskote, Bangalore. Discover master layout, apartment types, amenities, connectivity, and investment benefits.",

  keywords: [
    "Sobha World City project plan",
    "Sobha World City layout",
    "Sobha World City master plan",
    "Sobha township Bangalore",
    "Sobha Hoskote project details",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/blog/project-plan.html",
  },

  openGraph: {
    title:
      "Sobha World City Project Plan – Full Township Overview",
    description:
      "Detailed guide on master plan, amenities, layout, and lifestyle.",
    url:
      "https://www.sobhaworldcity.com/blog/project-plan.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/sobha-world-city-master-plan.png",
        width: 1200,
        height: 630,
        alt: "Sobha World City Master Plan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha World City Project Plan",
    description:
      "Check layout, amenities, and township features.",
    images: [
      "https://www.sobhaworldcity.com/images/sobha-world-city-master-plan.png",
    ],
  },
};

export default function Page() {
  return <ProjectPlanPage />;
}