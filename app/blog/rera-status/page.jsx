// app/blog/rera-status/page.js

import ReraStatusPage from "./ReraStatusPage";

export const metadata = {
  title:
    "Sobha World City RERA Status | Approval, Registration & Legal Details 2025",

  description:
    "Check Sobha World City RERA status, registration details, approvals, and legal compliance. Understand buyer safety, transparency, and project authenticity in Bangalore.",

  keywords: [
    "Sobha World City RERA",
    "Sobha World City RERA status",
    "Sobha Hoskote RERA approval",
    "RERA approved projects Bangalore",
    "Sobha project legal status",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/blog/rera-status.html",
  },

  openGraph: {
    title:
      "Sobha World City RERA Status – Legal & Approval Guide",
    description:
      "Complete guide on RERA approval, buyer safety, and project compliance.",
    url:
      "https://www.sobhaworldcity.com/blog/rera-status.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/sobha-world-city-rera.png",
        width: 1200,
        height: 630,
        alt: "Sobha World City RERA Status",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha World City RERA Status",
    description:
      "Check approvals, registration, and legal details of the project.",
    images: [
      "https://www.sobhaworldcity.com/images/sobha-world-city-rera.png",
    ],
  },
};

export default function Page() {
  return <ReraStatusPage />;
}