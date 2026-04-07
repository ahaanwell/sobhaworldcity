// app/blog/sobha-world-city-near-hospital/page.js

import NearHospitalPage from "./NearHospitalPage";

export const metadata = {
  title:
    "Sobha World City Near Hospital – Healthcare Connectivity in Hoskote",

  description:
    "Explore Sobha World City near top hospitals like MVJ Medical College, Vydehi Institute, and Columbia Asia. Ideal for families and safe living.",

  keywords: [
    "Sobha World City near hospital",
    "hospitals near Sobha World City",
    "MVJ Medical College",
    "Vydehi Hospital Whitefield",
    "Columbia Asia Hospital",
    "Sobha World City healthcare",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/blog/sobha-world-city-near-hospital.html",
  },

  openGraph: {
    title:
      "Sobha World City Near Hospital – Best Healthcare Access",
    description:
      "Live close to top hospitals in East Bangalore with excellent connectivity and safety.",
    url:
      "https://www.sobhaworldcity.com/blog/sobha-world-city-near-hospital.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/sobha-world-city-near-hospital.png",
        width: 1200,
        height: 630,
        alt: "Sobha World City Near Hospital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha World City Near Hospital",
    description:
      "Top healthcare connectivity near Sobha World City township.",
    images: [
      "https://www.sobhaworldcity.com/images/sobha-world-city-near-hospital.png",
    ],
  },
};

export default function Page() {
  return <NearHospitalPage />;
}