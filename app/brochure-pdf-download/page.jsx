// app/brochure-pdf-download/page.js

import BrochurePdfDownloadPage from "./BrochurePdfDownload";

export const metadata = {
  title:
    "Sobha World City Brochure PDF Download | Location, Price, Amenities & Masterplan",

  description:
    "Download the Sobha World City Brochure PDF and explore detailed information about location, floor plans, prices, amenities, and master plan in Hoskote, East Bangalore.",

  keywords: [
    "Sobha World City brochure pdf download",
    "Sobha World City brochure",
    "Sobha World City price",
    "Sobha World City floor plan",
    "Sobha World City amenities",
    "Sobha World City masterplan",
    "Sobha World City location",
    "Sobha World City Hoskote",
    "Sobha World City review",
    "Sobha apartments Bangalore"
  ],

  authors: [{ name: "Sobha World City Info Guide" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/brochure-pdf-download.html",
  },

  openGraph: {
    title:
      "Sobha World City Brochure PDF Download | Full Details of Location, Price & Amenities",
    description:
      "Access the Sobha World City Brochure PDF to explore complete details including prices, floor plans, amenities, and investment benefits.",
    url: "https://www.sobhaworldcity.com/brochure-pdf-download.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/brochure-pdf-download.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobha World City Brochure PDF",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha World City Brochure PDF Download | Full Project Details",
    description:
      "Download brochure and explore location, floor plans, prices, and amenities of Sobha World City.",
    images: [
      "https://www.sobhaworldcity.com/images/brochure-pdf-download.jpeg",
    ],
  },

  // extra SEO (optional but fine)
  other: {
    rating: "General",
    coverage: "India",
    distribution: "Global",
  },
};

export default function Page() {
  return <BrochurePdfDownloadPage />;
}