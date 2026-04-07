import { Poppins, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BrochureWrapper from "@/components/BrochureWrapper";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import BlogSection from "@/components/BlogSection";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title:
    "Sobha World City | Hoskote Bangalore | Pre Launch Offer-Download Brochure",

  description:
    "Explore Sobha World City, a luxury township in Hoskote Bangalore offering 2, 3 & 4 BHK homes, premium amenities, and excellent connectivity to IT hubs and the airport.",

  keywords: [
    "Sobha World City",
    "Sobha World City Hoskote",
    "Sobha World City Bangalore",
  ],

  alternates: {
    canonical: "https://www.sobhaworldcity.com",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    title:
      "Sobha World City | Hoskote Bangalore | Pre Launch Offer-Download Brochure",
    description:
      "Explore Sobha World City, a luxury township in Hoskote Bangalore offering 2, 3 & 4 BHK homes.",
    url: "https://www.sobhaworldcity.com/",
    images: [
      {
        url: "https://www.sobhaworldcity.com/images/sobhaworldcity.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  icons: {
    icon: "/images/icons/favicon.ico",
    shortcut: "/images/icons/favicon.ico",
    apple: "/images/icons/favicon.ico",
  },

  verification: {
    google: "afq9r5RbLDXbA9YElRX07wa2m8wW5XQJf38bG_JRhRg",
  },
};


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${robotoMono.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <Header />
        <BrochureWrapper />

        {children}

        <BlogSection />
        <Footer />
        <MobileBottomBar />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Residence",
              name: "Sobha World City",
              description:
                "Sobha World City is a futuristic luxury township located in Hoskote, East Bangalore, offering modern amenities, green open spaces, spacious homes, and world-class infrastructure.",
              url: "https://www.sobhaworldcity.com",
              image: [
                "https://www.sobhaworldcity.com/images/sobhaworldcity.png",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Sarakariguttahalli, Opposite Hoskote Toll Plaza, Old Madras Road (NH 75)",
                addressLocality: "Hoskote",
                addressRegion: "Karnataka",
                postalCode: "560067",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "12.9900",
                longitude: "77.8200",
              },

              additionalProperty: [
                { "@type": "PropertyValue", name: "Project Type", value: "Mixed Development Commercial, Retail and Residential" },
                { "@type": "PropertyValue", name: "Project Status", value: "New Launch" },
                { "@type": "PropertyValue", name: "Total Land Area", value: "48 Acres" },
                { "@type": "PropertyValue", name: "Open Space", value: "65%" },
                { "@type": "PropertyValue", name: "Total Towers", value: "18" },
                { "@type": "PropertyValue", name: "Total Units", value: "5400" },
                { "@type": "PropertyValue", name: "Configurations", value: "2, 3 & 4 BHK" },
                { "@type": "PropertyValue", name: "Starting Price", value: "₹1.45 Cr Onwards" }
              ],

              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Clubhouse", value: true },
                { "@type": "LocationFeatureSpecification", name: "Swimming Pool", value: true },
                { "@type": "LocationFeatureSpecification", name: "Sports Facilities", value: true },
                { "@type": "LocationFeatureSpecification", name: "Landscape Gardens", value: true }
              ],

              developer: {
                "@type": "Organization",
                name: "Sobha Limited",
                url: "https://www.sobha.com",
              },

              offers: {
                "@type": "Offer",
                priceCurrency: "INR",
                availability: "https://schema.org/PreOrder",
                price: "On Request",
              },

              telephone: "+919876543210",
            }),
          }}
        />

      </body>
    </html>
  );
}