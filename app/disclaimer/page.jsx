import DisclaimerPage from "./DisclaimerPage";

// ✅ SEO METADATA
export const metadata = {
  title: "Disclaimer | Sobha World City Hoskote Bangalore",
  description:
    "Read the disclaimer of Sobha World City to understand important information about project details, pricing, visuals, and legal limitations.",
  keywords: [
    "Sobha World City Disclaimer",
    "real estate disclaimer Bangalore",
    "Sobha project legal information",
    "property disclaimer Hoskote Bangalore",
  ],
  alternates: {
    canonical: "https://www.sobhaworldcity.com/disclaimer.html",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Disclaimer | Sobha World City",
    description:
      "Understand the legal disclaimer, project details, and important notices related to Sobha World City.",
    url: "https://www.sobhaworldcity.com/disclaimer.html",
    type: "website",
  },
};

function page() {
  return <DisclaimerPage />;
}

export default page;