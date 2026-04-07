import SobhaHabitechWhitefieldPage from "./SobhaHabitechWhitefieldPage";

export const metadata = {
  metadataBase: new URL("https://www.sobhaworldcity.com"),

  title:
    "Sobha Habitech Whitefield | Price, Location, Amenities & Investment Guide",

  description:
    "Sobha Habitech Whitefield is a ready-to-move luxury residential project in Ambedkar Nagar, Bengaluru offering 2BHK, 3BHK & 4BHK apartments with smart home features, premium amenities, excellent connectivity and strong investment potential.",

  keywords: [
    "Sobha Habitech Whitefield",
    "Sobha Habitech Price",
    "Sobha Habitech Location",
    "Sobha Habitech Amenities",
    "Sobha Habitech Investment",
    "Sobha Habitech Apartments",
    "Sobha Habitech Flats",
    "Sobha Habitech Real Estate",
    "Sobha Habitech Bangalore",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: "/sobha-habitech-whitefield.html",
  },

  openGraph: {
    type: "article",
    url: "https://www.sobhaworldcity.com/sobha-habitech-whitefield.html",
    title:
      "Sobha Habitech Whitefield – A Smarter Way to Live in Bengaluru",
    description:
      "Explore Sobha Habitech Whitefield, a ready-to-move luxury residential project in Ambedkar Nagar with smart home integration, premium amenities, excellent connectivity and strong investment value.",
    siteName: "Sobha World City",
    images: [
      {
        url: "/images/sobha-habitech-whitefield.jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha Habitech Whitefield | Smart Luxury Apartments in Bengaluru",
    description:
      "Sobha Habitech Whitefield offers ready-to-move 2BHK, 3BHK & 4BHK luxury apartments with smart home features, premium amenities and great connectivity in East Bengaluru.",
    images: ["/images/sobha-habitech-whitefield.jpeg"]
  },
};

export default function Page() {
  return <SobhaHabitechWhitefieldPage />;
}