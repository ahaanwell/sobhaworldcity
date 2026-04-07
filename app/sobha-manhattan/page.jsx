import SobhaManhattanPage from "./SobhaManhattan";

export const metadata = {
  metadataBase: new URL("https://www.sobhaworldcity.com"),

  title:
    "Sobha Manhattan Towers Bangalore | Luxury 3 BHK Apartments on Hosur Road",

  description:
    "Sobha Manhattan Towers at Sobha Town Park offers premium New York-themed 3 BHK apartments in Yadavanahalli, Hosur Road, Bangalore. Explore luxury living with 80+ amenities, clubhouse, pool, gym, and excellent connectivity.",

  keywords: [
    "Sobha Manhattan Towers",
    "Sobha Manhattan Bangalore",
    "Sobha Town Park",
    "3 BHK apartments in Hosur Road",
    "Luxury apartments in Attibele",
    "Sobha Limited projects Bangalore",
    "Apartments in Yadavanahalli",
    "New York themed apartments Bangalore",
  ],

  authors: [{ name: "Sobha Limited" }],
  robots: "index, follow",

  alternates: {
    canonical: "https://www.sobhaworldcity.com/sobha-manhattan.html",
  },

  openGraph: {
    type: "article", // good choice for SEO 👍
    url: "https://www.sobhaworldcity.com/sobha-manhattan.html",
    title:
      "Sobha Manhattan – Premium Urban Living in Bangalore’s Growing Heart",
    description:
      "Discover Sobha Manhattan Towers at Sobha Town Park, offering luxury 3 BHK New York-style apartments in Yadavanahalli, Hosur Road, Bangalore with world-class amenities and seamless connectivity.",
    siteName: "Sobha World City",
    locale: "en_IN",
    images: [
      {
        url: "/images/sobha-manhattan.jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha Manhattan Towers Bangalore | Luxury 3 BHK Apartments",
    description:
      "Premium New York-themed 3 BHK apartments at Sobha Manhattan Towers in Sobha Town Park, Hosur Road, Bangalore with 80+ lifestyle amenities.",
    images: ["/images/sobha-manhattan.jpeg"],
  },
};

export default function Page() {
  return <SobhaManhattanPage />;
}