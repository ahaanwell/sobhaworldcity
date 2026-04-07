import SobhaWorldNearSchoolHoskotePage from "./WorldCityNearSchoolHoskotePage";

export const metadata = {
  metadataBase: new URL("https://www.sobhaworldcity.com"),

  title:
    "Sobha World City Near School Hoskote, Near IT Hubs – A Smart Choice for Your Family",

  description:
    "Explore Sobha World City near schools in Hoskote and IT hubs in East Bangalore. Discover a family-friendly township with excellent connectivity, modern homes, educational institutions, and lifestyle amenities.",

  keywords: [
    "Sobha World City",
    "Sobha World City Hoskote",
    "Sobha World City near school",
    "Sobha World City near IT hubs",
    "Sobha World City Bangalore",
    "Sobha World City homes",
    "Sobha World City apartments",
    "Sobha World City lifestyle",
  ],

  authors: [{ name: "Livexcellence" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/sobha-world-city-near-school-hoskote.html",
  },

  openGraph: {
    type: "website",
    url: "https://www.sobhaworldcity.com/sobha-world-city-near-school-hoskote.html",
    title:
      "Sobha World City Near School Hoskote, Near IT Hubs – A Smart Choice for Your Family",
    description:
      "Explore Sobha World City near schools in Hoskote and IT hubs in East Bangalore. A well-planned township offering modern homes, connectivity, and lifestyle amenities.",
    siteName: "Livexcellence",
    images: [
      {
        url: "/images/school-hoskote.jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha World City Near School Hoskote, Near IT Hubs – A Smart Choice for Your Family",
    description:
      "Explore Sobha World City near schools and IT hubs in East Bangalore. A perfect family-friendly township with modern living and strong connectivity.",
    images: ["/images/school-hoskote.jpeg"],
  },
};

export default function Page() {
  return <SobhaWorldNearSchoolHoskotePage />;
}