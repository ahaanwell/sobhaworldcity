import SobhaNeoPolisPage from "./SobhaNeoPolisPage";


export const metadata = {
  title: "Sobha Neopolis Panathur Road | Luxury 3 & 4 BHK Apartments in East Bangalore",
  description:
    "Sobha Neopolis is a premium 26-acre residential township on Panathur Road, East Bangalore offering luxury 3 & 4 BHK apartments, 78% open space, 35+ amenities, Greek-themed design & world-class clubhouses by Sobha Limited.",

  keywords: [
    "Sobha Neopolis",
    "Sobha Neopolis Panathur Road",
    "Sobha Neopolis Bangalore",
    "Luxury Apartments Panathur Road",
    "3 BHK Apartments East Bangalore",
    "4 BHK Flats Bangalore",
    "Sobha Projects Panathur Road",
    "Apartments near Marathahalli",
    "Flats near Bellandur",
    "Premium Apartments Whitefield",
    "BBMP A Khata Apartments Bangalore",
  ],

  authors: [{ name: "Sobha Neopolis" }],
  robots: "index, follow",

  alternates: {
    canonical: "https://www.sobhaworldcity.com/sobha-neopolis.html",
  },

  openGraph: {
    type: "website",
    url: "https://www.sobhaworldcity.com/sobha-neopolis.html",
    title: "Sobha Neopolis | Stylish Luxury Living on Panathur Road, Bangalore",
    description:
      "Explore Sobha Neopolis in East Bangalore – 26-acre Greek-themed luxury township with 3 & 4 BHK apartments, 35+ amenities, 78% open space and excellent connectivity to ORR, Whitefield & Bellandur.",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/sobha-neopolis.jpeg",
      },
    ],
    siteName: "Sobha Neopolis Bangalore",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobha Neopolis Panathur Road | Luxury Apartments in Bangalore",
    description:
      "Premium 3 & 4 BHK apartments by Sobha Limited in East Bangalore. Greek-themed design, 35+ amenities & prime location near Marathahalli & Whitefield.",
    images: ["https://www.sobhaworldcity.com/images/sobha-neopolis.jpeg"],
  },
};

function page(){
    return <SobhaNeoPolisPage/>
};

export default page;