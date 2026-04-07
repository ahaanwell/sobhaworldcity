import SobhaDreamAcresPage from "./SobhaDreamAcresPage";

export const metadata = {
  metadataBase: new URL("https://www.sobhaworldcity.com"),

  title:
    "Sobha Dream Acres in Balagere | Affordable Homes in East Bangalore",

  description:
    "Sobha Dream Acres in Balagere offers 1 BHK, 2 BHK and 1RK apartments with premium amenities, open green spaces and excellent connectivity in East Bangalore. Explore prices, location benefits and lifestyle features.",

  keywords: [
    "Sobha Dream Acres",
    "Sobha Dream Acres Balagere",
    "Sobha Dream Acres East Bangalore",
    "Sobha Dream Acres price",
    "Sobha Dream Acres location",
    "Sobha 1 BHK Balagere",
    "Sobha 2 BHK Balagere",
    "Sobha World City lifestyle",
  ],

  authors: [{ name: "Sobha Limited" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/sobha-dream-acres-in-balagere.html",
  },

  openGraph: {
    type: "article",
    url: "https://www.sobhaworldcity.com/sobha-dream-acres-in-balagere.html",
    title:
      "Sobha Dream Acres in Balagere – Affordable Homes with Premium Comfort in East Bangalore",
    description:
      "Discover Sobha Dream Acres in Balagere, East Bangalore. Premium yet affordable apartments with green spaces, modern amenities, excellent connectivity and strong future value.",
    siteName: "Sobha Real Estate Guide",
    images: [
      {
        url: "/images/sobha-dream-acres-in-balagere.jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha Dream Acres in Balagere | Affordable Homes in East Bangalore",
    description:
      "Looking for affordable premium homes in East Bangalore? Sobha Dream Acres in Balagere offers smart layouts, open spaces, amenities and great connectivity.",
    images: ["/images/sobha-dream-acres-in-balagere.jpeg"],
  },
};

export default function Page() {
  return <SobhaDreamAcresPage />;
}