/* eslint-disable react/no-unescaped-entities */
import PageHero from "@/components/PageHero";

function DisclaimerPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Disclaimer"} />
        </div>

        <div className="max-w-5xl mx-auto py-10 text-gray-700 space-y-6">

          <h1 className="text-3xl font-bold text-gray-900">
            Disclaimer
          </h1>

          <p>
            This website is operated by authorized channel partners to showcase
            property-related information for general awareness. While we make
            every effort to keep the content accurate and updated, details such
            as pricing, availability, configurations, and specifications are
            subject to change at any time without prior notice.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            1. Images & Project Visuals
          </h2>

          <p>
            All images, layouts, floor plans, and 3D renderings displayed on this
            website are purely indicative and meant for illustrative purposes
            only. These visuals may differ from the final delivered product.
            Actual features, designs, and specifications will be as outlined in
            the official agreement between the buyer and the developer.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            2. No Offer or Legal Commitment
          </h2>

          <p>
            The content presented on this website does not constitute a formal
            offer, invitation, or legal contract of any kind. Visiting or using
            this website does not establish any binding relationship between the
            user and the developer. We strongly advise users to independently
            verify all project details with the official developer and consult
            legal or financial experts before making any purchase decisions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            3. Limitation of Responsibility
          </h2>

          <p>
            We shall not be held responsible for any direct or indirect losses,
            damages, or consequences resulting from reliance on the information
            available on this website. Users are solely responsible for their
            investment decisions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            4. Intellectual Property & Branding
          </h2>

          <p>
            All brand names, project titles, logos, and trademarks mentioned on
            this website (including those related to Sobha Limited and Sobha
            World City) belong to their respective owners. Their usage here is
            strictly for identification and informational purposes only.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            5. Get in Touch
          </h2>

          <p>
            For the most accurate and latest updates regarding the project,
            pricing, and availability, we recommend contacting us directly
            through the official contact options available on this <a href="https://www.sobhaworldcity.com/contact-us.html" className="text-blue-600 hover:text-blue-800">website</a>.
          </p>

          <p className="text-sm text-gray-500 pt-4">
            Last Updated: April 2026
          </p>

        </div>
      </main>
    </>
  );
}

export default DisclaimerPage;