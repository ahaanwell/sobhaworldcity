
import ProjectStatusPage from "./ProjectStatusPage";

export const metadata = {
  title:
    "Sobha World City Project Status 2025 – Latest Updates & Development Progress",

  description:
    "Check the latest Sobha World City project status including launch updates, construction progress, approvals, amenities, and future development plans in Hoskote, Bangalore.",

  keywords: [
    "Sobha World City project status",
    "Sobha World City construction update",
    "Sobha World City launch updates",
    "Sobha township Bangalore",
    "Sobha World City progress",
    "Sobha Limited projects"
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/sobha-world-city-project-status.html",
  },

  openGraph: {
    title:
      "Sobha World City Project Status – Latest Updates & Progress",
    description:
      "Explore construction updates, launch timeline, approvals, and development progress of Sobha World City.",
    url:
      "https://www.sobhaworldcity.com/sobha-world-city-project-status.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/project-status.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobha World City Project Status",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha World City Project Status 2025",
    description:
      "Latest updates on Sobha World City construction progress and launch timeline.",
    images: [
      "https://www.sobhaworldcity.com/images/project-status.jpeg",
    ],
  },
};

export default function Page() {
  return <ProjectStatusPage />;
}