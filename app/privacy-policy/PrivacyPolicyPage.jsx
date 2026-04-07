/* eslint-disable react/no-unescaped-entities */
import PageHero from "@/components/PageHero";

function PrivacyPolicyPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Privacy Policy"} />
        </div>

        <div className="max-w-5xl mx-auto py-10 text-gray-700 space-y-6">
          
          <h1 className="text-3xl font-bold text-gray-900">
            Privacy Policy
          </h1>

          <p>
            At sobhaworldcity.com, safeguarding your personal information is a top
            priority. This Privacy Policy explains how we collect, use, and
            protect the data you share with us while interacting with our
            website and services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            1. Information We Collect
          </h2>

          <p>
            <strong>Personal Details:</strong> When you fill out inquiry forms on
            our website, we may collect information such as your name, email
            address, and phone number.
          </p>

          <p>
            <strong>Usage Information:</strong> We may automatically gather
            certain details like your browser type, pages visited, time spent on
            the website, and device information to understand user behavior.
          </p>

          <p>
            <strong>Cookies:</strong> Our website uses cookies and similar
            tracking technologies to enhance user experience, analyze traffic,
            and personalize content.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            2. How We Use Your Information
          </h2>

          <p>
            We use the collected data for the following purposes:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              To provide accurate project details, pricing, brochures, and floor
              plans
            </li>
            <li>
              To connect you with authorized representatives for project
              assistance
            </li>
            <li>
              To share updates, offers, and promotional information via Call,
              SMS, Email, or WhatsApp
            </li>
          </ul>

          <p>
            <strong>Communication Consent:</strong> By submitting your contact
            information, you agree to be contacted by our team and associated
            partners, even if your number is registered under DND/NDNC services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            3. Data Security & Sharing
          </h2>

          <p>
            <strong>Data Protection:</strong> We implement appropriate technical
            and organizational measures to keep your data secure and prevent
            unauthorized access.
          </p>

          <p>
            <strong>Information Sharing:</strong> Your information may be shared
            only with the official developer (Sobha Limited) or trusted service
            providers strictly for fulfilling your request. We do not sell,
            rent, or trade your personal data to third-party marketers.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            4. Your Rights
          </h2>

          <p>You have full control over your personal data. You may:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to your information</li>
            <li>Ask for corrections or updates</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications anytime</li>
          </ul>

          <p>
            To exercise these rights, you can contact us through our official
            website.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            5. Contact Us
          </h2>

          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy, please visit:
          </p>

          <a
            href="https://www.sobhaworldcity.com/contact-us.html"
            target="_blank"
            className="text-blue-600 underline"
          >
            https://www.sobhaworldcity.com/contact-us.html
          </a>

          <p className="text-sm text-gray-500 pt-4">
            Last Updated: April 2026
          </p>

        </div>
      </main>
    </>
  );
}

export default PrivacyPolicyPage;