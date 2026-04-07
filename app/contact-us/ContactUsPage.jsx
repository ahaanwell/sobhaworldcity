/* eslint-disable react/no-unescaped-entities */
import LeadModal from "@/components/LeadModal";
import PageHero from "@/components/PageHero";

function ContactUsPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Contact Us"} />
        </div>
        <div className="max-w-5xl mx-auto py-10 text-gray-700 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Sobha World City Contact Us</h1>

    <p>
        At <a href="https://www.sobhaworldcity.com/"><strong>sobhaworldcity.com</strong></a>, we are committed to offering seamless support and transparent guidance 
        to help you make an informed real estate decision. Whether you need project details, pricing, floor plans, 
        or want to schedule a site visit, our team is here to assist you with prompt and professional service.
    </p>

    <p>
        Choosing a home or investment is a major step, and our experts ensure you receive clear answers, honest 
        information, and personalized recommendations based on your requirements.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900">Why Reach Out?</h2>

    <ul className="list-disc pl-6 space-y-2">
        <li>Get complete project insights and brochures</li>
        <li>Request pricing, unit availability, and payment plans</li>
        <li>Book an on-site visit with guided assistance</li>
        <li>Understand floor plans, layout options, and amenities</li>
        <li>Clarify approvals, RERA status, and documentation</li>
        <li>Receive expert guidance for investment decisions</li>
    </ul>

    <h2 className="text-2xl font-semibold text-gray-900 mt-8">Get in Touch</h2>

    <p>
        Fill out the form below and our team will contact you shortly with all the information you need.
    </p>

     <div className="mt-6 flex justify-center items-center">
        <div className="bg-gray-100 p-6 rounded-xl shadow-md w-full max-w-2xl">
        <form className="space-y-4">

            <div>
                <label className="block font-medium mb-1">Full Name</label>
                <input type="text" placeholder="Enter your name" 
                    className="w-full bg-white border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"/>
            </div>

            <div>
                <label className="block font-medium mb-1">Phone Number</label>
                <input type="text" placeholder="Enter your phone number"
                    className="w-full bg-white border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"/>
            </div>

            <div>
                <label className="block font-medium mb-1">Email Address</label>
                <input type="email" placeholder="Enter your email"
                    className="w-full bg-white border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"/>
            </div>

            <div>
                <label className="block font-medium mb-1">Message</label>
                <textarea rows="4" placeholder="Write your message"
                    className="w-full bg-white border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-500 focus:outline-none"></textarea>
            </div>

            <button className="bg-primary cursor-pointer w-full  shadow-[0_4px_10px_rgba(0,0,0,0.25)] rounded-md px-6 py-2 text-white rounded-lg m-auto">
                Submit Now
            </button>

        </form>
    </div>
     </div>
        </div>
      </main>
    </>
  );
}

export default ContactUsPage;
