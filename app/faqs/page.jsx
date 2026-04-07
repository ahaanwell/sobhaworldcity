// app/faqs/page.js

import FaqsPage from "./FaqsPage";

export const metadata = {
  title:
    "Sobha World City FAQs – Location, Amenities, Pricing, RERA & Investment Guide",

  description:
    "Complete FAQ guide on Sobha World City in Hoskote, East Bangalore. Learn about location, configurations, township size, amenities, pricing, RERA status, possession timeline, and investment benefits.",

  keywords: [
    "Sobha World City",
    "Sobha World City FAQ",
    "Sobha World City Hoskote",
    "Sobha Township Bangalore",
    "Sobha Projects East Bangalore",
    "Sobha Apartments Bangalore",
    "Sobha World City amenities",
    "Sobha World City price",
    "Sobha World City location",
    "Sobha World City investment"
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.sobhaworldcity.com/faqs.html",
  },

  openGraph: {
    title:
      "Sobha World City FAQs – Location, Amenities, Pricing, RERA & More",
    description:
      "A detailed FAQ guide about Sobha World City, covering location, configurations, project size, amenities, pricing, RERA approval, and investment potential.",
    url: "https://www.sobhaworldcity.com/faqs.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/faqs.jpeg",
        width: 1200,
        height: 630,
        alt: "Sobha World City FAQs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobha World City FAQs – Everything You Need to Know",
    description:
      "Know all details about Sobha World City: location advantage, configurations, township size, amenities, pricing, RERA updates, and investment reasons.",
    images: [
      "https://www.sobhaworldcity.com/images/faqs.jpeg",
    ],
  },
};

export default function Page() {
  return <FaqsPage />;
}