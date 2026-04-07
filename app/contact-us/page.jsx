import ContactUsPage from "./ContactUsPage";


export const metadata = {
  title: "Contact Us | Sobha World City Bangalore | Enquire, Book Site Visit & Get Details",
  description:
    "Get in touch with the Sobha World City team for pricing, floor plans, brochures, and site visit bookings. Send your enquiry and receive quick assistance for this premium township in Bangalore.",
  
  keywords: [
    "Sobha World City contact",
    "Sobha World City enquiry",
    "Sobha World City contact number",
    "Sobha project contact",
  ],

  authors: [{ name: "Sobha World City Info Team" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.sobhaworldcity.com/contact-us.html",
  },
};

function page(){
    return <ContactUsPage/>
};

export default page;