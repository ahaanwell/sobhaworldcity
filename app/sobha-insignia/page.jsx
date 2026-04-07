import SobhaInsigniaPage from "./SobhaInsigniaPage";

export const metadata = {
  metadataBase: new URL("https://www.sobhaworldcity.com"),

  title: "Sobha Insignia – Premium Homes in Bellandur East Bengaluru",

  description:
    "Sobha Insignia is a premium residential project in Bellandur, East Bengaluru offering luxury 3, 3.5 & 4 BHK homes with world-class amenities, prime location, and trusted Sobha quality.",

  keywords: [
    "Sobha Insignia",
    "Sobha Insignia Bellandur",
    "Luxury apartments in East Bengaluru",
    "Sobha Group projects",
    "Premium homes Bangalore",
    "Sobha Insignia review",
  ],

  authors: [{ name: "Sobha World City" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/sobha-insignia.html",
  },

  openGraph: {
    type: "article",
    url: "https://www.sobhaworldcity.com/sobha-insignia.html",
    title:
      "Sobha Insignia – Premium Homes Crafted for Refined Urban Living",
    description:
      "Explore Sobha Insignia, a low-density luxury residential project in Bellandur, East Bengaluru by Sobha Group. Premium homes with elegant design and lifestyle amenities.",
    siteName: "Sobha World City",
    images: [
      {
        url: "/images/sobha-insignia.jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobha Insignia – Premium Homes in East Bengaluru",
    description:
      "Luxury 3, 3.5 & 4 BHK residences by Sobha Group in Bellandur. Prime location, refined living, and long-term value.",
    images: ["/images/sobha-insignia.jpeg"],
  },
};

export default function Page() {
  return <SobhaInsigniaPage />;
}