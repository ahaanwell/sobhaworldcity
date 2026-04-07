import AboutUsPage from "./AboutUsPage";

export const metadata = {
  title: "About Sobha World City | Premium Township in Bangalore | Sobha Limited",
  description:
    "Discover Sobha World City, a visionary mixed-use township by Sobha Limited in Bangalore. Learn about its world-class planning, premium residences, lifestyle amenities, green spaces, and future-ready urban living.",
  
  keywords: [
    "Sobha World City",
    "Sobha World City About Us",
    "Sobha Limited About Us",
    "Sobha project contact",
  ],

  authors: [{ name: "Sobha World City Info Team" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.sobhaworldcity.com/about-us.html",
  },
};

function page(){
    return <AboutUsPage/>
};

export default page;