// app/blog/sobha-world-city-near-Shopping Mall/page.js

import NearByShoppingMallPage from "./NearByShoppingMallPage";

export const metadata = {
  title:
    "Sobha World City Near Shopping Mall – Shopping Mall Connectivity in Hoskote",

  description:
    "Explore Sobha World City near top Shopping Malls like MVJ Medical College, Vydehi Institute, and Columbia Asia. Ideal for families and safe living.",

  keywords: [
    "Sobha World City near Shopping Mall",
    "Shopping Malls near Sobha World City",
    "MVJ Medical College",
    "Vydehi Shopping Mall Whitefield",
    "Columbia Asia Shopping Mall",
    "Sobha World City healthcare",
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.sobhaworldcity.com/blog/sobha-world-city-and-its-nearby-shopping-mall.html",
  },

  openGraph: {
    title:
      "Sobha World City Near Shopping Mall",
    description:
      "Live close to top Shopping Malls in East Bangalore with excellent connectivity and safety.",
    url:
      "https://www.sobhaworldcity.com/blog/sobha-world-city-and-its-nearby-shopping-mall.html",
    type: "article",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/sobha-world-city-near-shopping-mall.png",
        width: 1200,
        height: 630,
        alt: "Sobha World City Near Shopping Mall",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sobha World City Near Shopping Mall",
    description:
      "Top shopping mall connectivity near Sobha World City township.",
    images: [
      "https://www.sobhaworldcity.com/images/sobha-world-city-near-shopping-mall.png",
    ],
  },
};

export default function Page() {
  return <NearByShoppingMallPage />;
}