import PrivacyPolicyPage from "./PrivacyPolicyPage";

export const metadata = {
  title: "Privacy Policy | Sobha World City Hoskote Bangalore",
  description:
    "Read the Privacy Policy of Sobha World City to understand how we collect, use, and protect your personal information when you interact with our website.",
  keywords: [
    "Privacy Policy Sobha World City",
    "Sobha World City data policy",
    "Sobha World City privacy",
    "Hoskote Bangalore real estate privacy policy",
  ],
  alternates: {
    canonical: "https://www.sobhaworldcity.com/privacy-policy.html",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | Sobha World City",
    description:
      "Learn how Sobha World City collects, uses, and protects your personal information.",
    url: "https://www.sobhaworldcity.com/privacy-policy.html",
    type: "website",
  },
};

function page() {
  return <PrivacyPolicyPage />;
}

export default page;