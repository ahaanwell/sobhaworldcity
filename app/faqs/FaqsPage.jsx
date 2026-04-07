/* eslint-disable react/no-unescaped-entities */
import PageHero from "@/components/PageHero";

function FaqsPage() {
    return(
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Faq"} />
        </div>
        <div className="space-y-6 max-w-5xl mx-auto py-10 text-gray-700">
        <h1 className="text-3xl font-bold text-gray-900">Sobha World City FAQs</h1>
            <img src="/images/faqs.jpeg" alt="Faqs" className="w-full mb-6"/>

            <h2 className="text-2xl font-semibold">What is Sobha World City?</h2>
            <p className="">
                Sobha World City is a large-scale integrated residential township developed by <a href="https://www.sobhaworldcity.com/sobha-limited.html"><b>Sobha Limited</b></a>, a brand
                known for luxury construction, in-house quality control, and timely delivery. The project is designed as
                a self-sufficient urban community offering homes, open spaces, lifestyle amenities, and future-ready
                infrastructure.
            </p>

            <h2 className="text-2xl font-semibold">Where is Sobha World City located?</h2>
            <p className="">
                The township is located in <a href="https://www.sobhaworldcity.com/blog/about-hostoke.html"><b>Hoskote</b></a>, East Bangalore, close to major highways and upcoming infrastructure
                corridors. This location offers smooth connectivity to Whitefield, KR Puram, ITPL, and other employment
                hubs, making it ideal for working professionals as well as long-term investors.
            </p>

            <h2 className="text-2xl font-semibold">What configurations are available in Sobha World City?</h2>
            <p className="">
                <strong>Sobha World City</strong> offers thoughtfully designed 1 BHK, 2 BHK, 3 BHK, and 4 BHK apartments. The homes are
                planned to maximize natural light, ventilation, and efficient space usage. Multiple floor plans are
                available, catering to both compact living and luxury preferences.
            </p>

            <h2 className="text-2xl font-semibold">How large is the Sobha World City township?</h2>
            <p className="">
                The project is part of a massive township development spread across hundreds of acres, with multiple
                phases planned. Phase 1 itself covers a substantial land parcel with high-rise towers, landscaped
                gardens, internal roads, and dedicated amenity zones, ensuring a balanced lifestyle.
            </p>

            <h2 className="text-2xl font-semibold">What amenities does Sobha World City offer?</h2>
            <p className="">Residents can enjoy 55+ modern amenities, including:</p>

            <ul className="list-disc ml-6 ">
                <li>Grand clubhouse</li>
                <li>Swimming pool & kids’ pool</li>
                <li>Fully equipped gymnasium</li>
                <li>Jogging & cycling tracks</li>
                <li>Children’s play areas</li>
                <li>Sports courts</li>
                <li>Landscaped parks</li>
                <li>24/7 security with CCTV</li>
            </ul>

            <p className="">
                These amenities are designed to promote wellness, recreation, and community living.
            </p>

            <h2 className="text-2xl font-semibold">What is the price range of Sobha World City apartments?</h2>
            <p className="">
                Apartment prices at <a href="https://www.sobhaworldcity.com/"><strong>Sobha World City</strong></a> are positioned in the premium segment, reflecting the brand value,
                location advantage, and township lifestyle. Pricing varies based on configuration, size, tower, and
                floor level. Flexible construction-linked and milestone-based payment plans are expected.
            </p>

            <h2 className="text-2xl font-semibold">Is Sobha World City RERA approved?</h2>
            <p className="">
                The project is in the process of receiving <a href="https://www.sobhaworldcity.com/blog/rera-status.html"><b>RERA approval</b></a>. Once registered, all details such as
                possession timelines, project specifications, and legal transparency will be officially available,
                ensuring buyer confidence.
            </p>

            <h2 className="text-2xl font-semibold">When is the possession date?</h2>
            <p className="">
                Possession timelines are planned in phases, with delivery expected several years from launch. Sobha
                Limited is known for structured execution, which adds reliability to long-term possession commitments.
            </p>

            <h2 className="text-2xl font-semibold">Why should you invest in Sobha World City?</h2>

            <ul className="list-disc ml-6">
                <li>Trusted Sobha brand</li>
                <li>Strategic East Bangalore location</li>
                <li>Integrated township concept</li>
                <li>Strong future appreciation potential</li>
                <li>Premium lifestyle amenities</li>
            </ul>

  </div>
      </main>
        
    )
};

export default FaqsPage;