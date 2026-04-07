// app/Review/page.js

import ReviewPage from "./ReviewPage";

export const metadata = {
  title: "Sobha World City Review – Premium Reviewal Homes in East Bangalore (2025)",

  description:
    "Looking for Reviewal homes in East Bangalore? Sobha World City Review offers spacious 2, 3 & 4 BHK apartments with premium amenities, top connectivity & peaceful living in Hoskote.",

  keywords: [
    "Sobha World City Review",
    "Sobha Review Bangalore",
    "Sobha World City Reviewals",
    "Sobha Hoskote Review",
    "East Bangalore Reviewal homes",
    "luxury Review Bangalore",
    "Sobha apartments for Review"
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.sobhaworldcity.com/review.html",
  },

  openGraph: {
    title:
      "Sobha World City Review – Premium Reviewal Homes in East Bangalore",
    description:
      "Find modern Reviewal homes at Sobha World City. Spacious apartments, top amenities, safe community living & excellent connectivity in Hoskote.",
    url: "https://www.sobhaworldcity.com/review.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/review.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobha World City Review",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha World City Review – Premium Reviewal Homes in East Bangalore",
    description:
      "Looking for Reviewal homes in Sobha World City? Explore modern flats, amenities & location benefits in East Bangalore.",
    images: [
      "https://www.sobhaworldcity.com/images/review.jpeg",
    ],
  },
};

export default function Page() {
  return <ReviewPage />;
}