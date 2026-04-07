"use client";
import LeadModal from "@/components/LeadModal";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";

function SiteFloorPlanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");

  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Site Floor Plan"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha World City Site Floor Plan
          </h1>
          <div className="flex justify-center items-center gap-6 mt-3">
            <button
              onClick={() => {
                SetModelHeading("Download Broucher");
                setIsModalOpen(true);
              }}
              className="border border-yellow-500 px-5 py-2 text-lg rounded cursor-pointer flex justify-center items-center gap-2 text-primary font-medium"
            >
              <span className="text-yellow-500">
                <FaDownload />
              </span>{" "}
              Broucher
            </button>
            <button
              onClick={() => {
                SetModelHeading("Download Cost Sheet");
                setIsModalOpen(true);
              }}
              className="border border-yellow-500 px-5 py-2 text-lg rounded cursor-pointer flex justify-center items-center gap-2 text-primary font-medium"
            >
              <span className="text-yellow-500">
                <IoPricetagsOutline />
              </span>{" "}
              Cost Sheet
            </button>
          </div>
          <div className=" py-4">
            <div className="space-y-5 text-base leading-rel-relaxed text-gray-800">
    <img 
    className="w-full"
    src="./images/sitefloorplan.jpeg" 
    alt=""/>
    <p>
        The <a href="https://www.sobhaworldcity.com/sitefloorplan.html"><strong>Sobha World City Site & Floor Plan</strong></a> is thoughtfully designed to offer a harmonious blend of comfort, functionality, and premium living. Every aspect of the master plan reflects Sobha’s signature attention to detail—from spacious towers positioned for maximum ventilation to beautifully landscaped open areas that enhance everyday living. The floor plans at <a href="https://www.sobhaworldcity.com/"><strong>Sobha World City</strong></a> are intelligently crafted to maximize space utility, natural light, and privacy, catering to modern homebuyers’ lifestyle needs. Whether you choose a 2, 3, or 4 BHK layout, each unit is planned with well-defined spaces, seamless flow, and contemporary design standards. With its expansive site layout, strategically placed amenities, and optimized apartment configurations, Sobha World City sets a new benchmark in luxury township planning.
    </p>
    <h2 className="text-2xl font-semibold text-gray-900">1. Master Site Plan Overview</h2>
    <p>The Sobha World City site plan highlights an expansive township layout designed to deliver a premium community lifestyle. The master plan includes:</p>
    <ul className="list-disc pl-6 space-y-1">
        <li>Well-defined residential zones</li>
        <li>Wide internal roads and pedestrian-friendly pathways</li>
        <li>Lush landscaped gardens and open green spaces</li>
        <li>A central clubhouse zone with recreational amenities</li>
        <li>Designated areas for sports, leisure, and social activities</li>
        <li>Ample parking spaces for residents and visitors</li>
    </ul>
    <p>The township has been structured to ensure a peaceful environment with an optimum balance of built-up and open spaces.</p>

    <h2 className="text-2xl font-semibold text-gray-900">2. Thoughtfully Planned Tower Placement</h2>
    <p>The towers in Sobha World City are positioned to ensure:</p>
    <ul className="list-disc pl-6 space-y-1">
        <li>Maximum natural light</li>
        <li>Cross-ventilation in all units</li>
        <li>Minimal noise impact</li>
        <li>Unobstructed views of green landscapes</li>
        <li>Privacy and safety across the community</li>
    </ul>
    <p>This smart placement enhances the living experience while maintaining an aesthetically appealing urban design.</p>

    <h2 className="text-2xl font-semibold text-gray-900">3. Apartment Floor Plan Options</h2>
    <p>Sobha World City offers a variety of floor plan configurations to suit diverse family sizes and lifestyle requirements. Available Unit Configurations:</p>
    <ul className="list-disc pl-6 space-y-1">
        <li>2 BHK Apartments – Ideal for small families seeking comfort and functionality</li>
        <li>3 BHK Apartments – Spacious layouts for growing families</li>
        <li>3 BHK Premium Units – Enhanced space, luxury, and privacy</li>
        <li>4 BHK Residences – Exclusive units designed for large families</li>
    </ul>
    <p>Each floor plan is designed with practical space utilization and modern design principles.</p>

    <h2 className="text-2xl font-semibold text-gray-900">4. Key Features of Sobha World City Floor Plans</h2>
    <ul className="list-none space-y-1">
        <li>✔ Smart Space Utilization</li>
    </ul>
    <p>Each layout ensures efficient use of every square foot with well-segmented living, dining, kitchen, and bedroom spaces.</p>
    <ul className="list-none space-y-1">
        <li>✔ Modern Interior Design</li>
    </ul>
    <p>Wide balconies, large windows, and smart room placement make every unit feel spacious and airy.</p>
    <ul className="list-none space-y-1">
        <li>✔ High Privacy Levels</li>
    </ul>
    <p>Bedrooms are thoughtfully positioned to ensure privacy from common areas.</p>
    <ul className="list-none space-y-1">
        <li>✔ Well-Planned Kitchens</li>
    </ul>
    <p>Modular-friendly kitchen layouts with ample storage and utility space.</p>
    <ul className="list-none space-y-1">
        <li>✔ Vastu-Friendly Options</li>
    </ul>
    <p>Several units are aligned to support Vastu principles for harmonious living.</p>

    <h2 className="text-2xl font-semibold text-gray-900">5. Floor Plan Highlights by Configuration</h2>

    <h3 className="font-semibold text-xl">2 BHK Units</h3>
    <img 
    className="w-fit md:w-1/2"
    src="./images/2bhk-large-floor-plan.png" 
    alt=""/>
    <ul className="list-disc pl-6 space-y-1">
        <li>Balanced room distribution</li>
        <li>Spacious living area</li>
        <li>Ideal for nuclear families</li>
    </ul>

    <h3 className="font-semibold text-xl">3 BHK Units</h3>
    <img 
    className="w-fit md:w-1/2"
    src="./images/3bhk-large-floor-plan.png" 
    alt=""/>
    <ul className="list-disc pl-6 space-y-1">
        <li>Generous living & dining spaces</li>
        <li>Separate utility area</li>
        <li>Ideal for larger families seeking comfort and flexibility</li>
    </ul>

    <h3 className="font-semibold text-xl">Premium 3 BHK</h3>
    <ul className="list-disc pl-6 space-y-1">
        <li>Larger balconies</li>
        <li>Additional room space</li>
        <li>Superior privacy and ventilation</li>
    </ul>

    <h3 className="font-semibold text-xl">4 BHK Units</h3>
    <img 
    className="w-fit md:w-1/2"
    src="./images/4bhk-large-floor-plan.png" 
    alt=""/>
    <ul className="list-disc pl-6 space-y-1">
        <li>Expansive living spaces</li>
        <li>Multiple balconies</li>
        <li>Premium corner placements</li>
        <li>Perfect for luxury living enthusiasts</li>
    </ul>

    <h2 className="text-2xl font-semibold text-gray-900">6. Amenities Positioned Within the Site Plan</h2>
    <p>The site plan strategically integrates premium amenities, including:</p>
    <ul className="list-disc pl-6 space-y-1">
        <li>Clubhouse and fitness center</li>
        <li>Swimming pool</li>
        <li>Indoor & outdoor sports courts</li>
        <li>Kids’ play areas</li>
        <li>Senior citizen zones</li>
        <li>Walking and jogging tracks</li>
        <li>Landscaped gardens and relaxation corners</li>
    </ul>
    <p>All amenities are positioned to ensure accessibility, safety, and minimal disturbance to residential areas.</p>

    <h2 className="text-2xl font-semibold text-gray-900">7. Why Sobha World City Site & Floor Plan Is Exceptional</h2>
    <ul className="list-disc pl-6 space-y-1">
        <li>Designed by experts with global planning standards</li>
        <li>Ensures spacious, harmonious community living</li>
        <li>Supports excellent ventilation and natural light in every home</li>
        <li>Offers versatile layouts for all budget segments</li>
        <li>Features a well-balanced mix of constructed and open spaces</li>
        <li>Provides functional, practical, and luxury-centric home designs</li>
    </ul>
</div>

        </div>
        </div>
        
        <div>
    </div>
      </main>
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modelHeading={modelHeading}
        modelBtnLabel="Download"
      />
    </>
  );
}

export default SiteFloorPlanPage;
