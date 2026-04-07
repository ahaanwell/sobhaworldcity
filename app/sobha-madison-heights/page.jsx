import SobhaMadisonHeightsPage from "./SobhaMadisonHeightsPage";

export const metadata = {
  metadataBase: new URL("https://www.sobhaworldcity.com"),

  title:
    "Sobha Madison Heights Electronic City Bangalore | Price, Amenities & Possession 2030",

  description:
    "Sobha Madison Heights in Electronic City, Bangalore South is a premium residential project by Sobha. Explore amenities, floor plans, 1120 units, 7 towers, metro connectivity and possession by December 2030.",

  keywords: [
    "Sobha Madison Heights",
    "Sobha Madison Heights Electronic City",
    "Sobha Madison Heights Bangalore",
    "Apartments in Electronic City",
    "Flats in Bangalore South",
    "Sobha Projects Bangalore",
    "Electronic City real estate",
    "Bangalore upcoming projects 2030",
  ],

  authors: [{ name: "Sobha Madison Heights" }],
  robots: "index, follow",

  alternates: {
    canonical: "/sobha-madison-heights.html",
  },

  openGraph: {
    type: "article",
    url: "https://www.sobhaworldcity.com/sobha-madison-heights.html",
    title:
      "Sobha Madison Heights in Electronic City, Bangalore – Project Details & Amenities",
    description:
      "Discover Sobha Madison Heights in Electronic City, Bangalore South. 9.12 acres, 1120 units, 7 towers, strong metro connectivity and premium lifestyle amenities. Possession by December 2030.",
    siteName: "Sobha World City",
    locale: "en_IN",
    images: [
      {
        url: "/images/sobha-madison-heights.jpeg",
        alt: "Sobha Madison Heights Electronic City Bangalore",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha Madison Heights Electronic City Bangalore | Premium Apartments",
    description:
      "Explore Sobha Madison Heights Bangalore South – 1120 units, 7 towers, metro extension connectivity, hospitals, schools and strong infrastructure.",
    images: ["/images/sobha-madison-heights.jpeg"],
  },
};

export default function Page() {
  return <SobhaMadisonHeightsPage />;
}