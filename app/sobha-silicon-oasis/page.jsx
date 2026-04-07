import SobhaSiliconOasisPage from "./SobhaSiliconOasisPage";

export const metadata = {
  metadataBase: new URL("https://www.sobhaworldcity.com"),

  title:
    "Sobha Silicon Oasis | Luxury Apartments in Hosa Road, Electronic City Bangalore",

  description:
    "Sobha Silicon Oasis offers premium luxury apartments on Hosa Road, Electronic City, Bangalore. Explore spacious homes with modern amenities, clubhouse, swimming pool, landscaped gardens & 24/7 security by SOBHA Limited.",

  keywords: [
    "Sobha Silicon Oasis",
    "Sobha Silicon Oasis Bangalore",
    "Sobha Apartments Hosa Road",
    "Sobha Electronic City",
    "Luxury Apartments in Electronic City",
    "Apartments near Hosa Road",
    "SOBHA Limited Projects Bangalore",
    "2 BHK 3 BHK Apartments Electronic City",
    "Flats for sale in South Bangalore",
  ],

  authors: [{ name: "Sobha Silicon Oasis" }],
  robots: "index, follow",

  alternates: {
    canonical: "/sobha-silicon-oasis.html",
  },

  openGraph: {
    type: "website",
    url: "https://www.sobhaworldcity.com/sobha-silicon-oasis.html",
    title:
      "Sobha Silicon Oasis | Premium Apartments in Electronic City, Bangalore",
    description:
      "Discover Sobha Silicon Oasis on Hosa Road, Electronic City. Luxury apartments with world-class amenities, excellent connectivity, and superior construction by SOBHA Limited.",
    siteName: "Sobha Silicon Oasis Bangalore",
    images: [
      {
        url: "/images/sobha-silicon-oasis.jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobha Silicon Oasis | Luxury Living in Electronic City",
    description:
      "Premium apartments in Hosa Road, Electronic City by SOBHA Limited. Spacious homes, clubhouse, swimming pool & modern amenities.",
    images: ["/images/sobha-silicon-oasis.jpeg"],
  },
};

export default function Page() {
  return <SobhaSiliconOasisPage />;
}