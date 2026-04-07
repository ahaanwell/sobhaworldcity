/* eslint-disable react/no-unescaped-entities */
import LeadModal from "@/components/LeadModal";
import PageHero from "@/components/PageHero";

function AboutUsPage() {
  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"About Us"} />
        </div>
        <div className="max-w-5xl mx-auto py-10 text-gray-700 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">About Sobha World City</h1>
          <img src="/images/sobha-worldcity.jpg" alt="Sobha World City" className="w-full mb-6"/>
    <p>
        <a href="https://www.sobhaworldcity.com"><strong>Sobha World City</strong></a> is a visionary township crafted to shape the future of urban living in Bangalore. 
        Developed by <strong>Sobha Limited</strong>, one of India’s most trusted names in real estate, this landmark project 
        brings together world-class design, intelligent planning, and unmatched construction quality to deliver a lifestyle 
        that feels both modern and meaningful.
    </p>

    <p>
        Spread across vast, thoughtfully curated acres, Sobha World City is designed as an  <strong>integrated mixed-use township</strong> that blends residential living, commercial conveniences, leisure spaces, 
        and expansive green zones—creating a self-sustained community where everything you need is within reach.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900">A New Way of Living</h2>

    <p>
        Sobha World City represents a future-ready way of life. From wide internal roads and landscaped pathways to lifestyle 
        amenities and eco-friendly features, every element is planned to enhance comfort, safety, and overall wellbeing. 
        The project offers a seamless balance of luxury and nature, ensuring residents enjoy an elevated living experience 
        every day.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900">Township Highlights</h2>

    <ul className="list-disc pl-6 space-y-2">
        <li><strong>Master-Planned Township:</strong> Thoughtfully zoned residential and commercial spaces for a seamless, walkable lifestyle.</li>
        <li><strong>Premium Residences:</strong> Modern, well-ventilated homes designed to maximize natural light and comfort.</li>
        <li><strong>Lifestyle Amenities:</strong> Clubhouses, swimming pools, sports facilities, parks, jogging trails, and dedicated leisure zones.</li>
        <li><strong>Green Living:</strong> Abundant greenery, tree-lined avenues, and sustainable design principles for a refreshing environment.</li>
        <li><strong>Daily Conveniences:</strong> Retail spaces, work zones, and essentials designed to reduce commute time and increase livability.</li>
        <li><strong>Unmatched Sobha Quality:</strong> Precision engineering, superior materials, and world-class craftsmanship.</li>
    </ul>

    <h2 className="text-2xl font-semibold text-gray-900">Location Advantage</h2>

    <p>
        Located in one of Bangalore’s rapidly developing growth corridors, Sobha World City offers excellent connectivity 
        to major IT hubs, schools, healthcare centers, and lifestyle destinations. Its strategic position ensures 
        long-term appreciation and convenience for residents.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900">A Township Designed for the Future</h2>

    <p>
        Sobha World City is more than a residential project—it's a complete destination supporting work, leisure, wellness, 
        and community living. With future-ready infrastructure and world-class amenities, it is designed to provide 
        long-term growth and an enhanced lifestyle for every resident.
    </p>

    <h2 className="text-2xl font-semibold text-gray-900">Why Choose Sobha World City?</h2>

    <ul className="list-disc pl-6 space-y-2">
        <li>A township by India’s most reputed real estate developer</li>
        <li>Future-ready planning and infrastructure</li>
        <li>World-class amenities for all age groups</li>
        <li>Exceptional construction quality designed for longevity</li>
        <li>Sustainable, green, and lifestyle-enriched environment</li>
        <li>Strong investment and appreciation potential</li>
    </ul>

    <h2 className="text-2xl font-semibold text-gray-900">Our Commitment</h2>

    <p>
        At Sobha World City, the commitment is to create a community where families can thrive—surrounded by comfort, 
        convenience, and natural beauty. Every space is designed with purpose, every detail crafted with care, and 
        every feature reflects the excellence Sobha Limited is known for.
    </p>

    <p>
        Sobha World City isn’t just a place to live—it’s a space to grow, connect, and experience a life of true sophistication.
    </p>
        </div>
      </main>
    </>
  );
}

export default AboutUsPage;
