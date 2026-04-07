"use client";
import dynamic from "next/dynamic";

const LeadModal = dynamic(() => import("@/components/LeadModal"), {
  ssr: false,
});
import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";

function MasterPlanPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");

  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Master Plan"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha World City Master Plan
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
          <div className="mt-5">
            <img
        src={"/images/master-plan.webp"}
        alt="Sobha World City Master Plan"
        className="rounded-lg w-full"
    />
          </div>
          <div className="bg-white py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-6 text-gray-700 leading-relaxed">

        <h2 className="text-2xl font-bold text-gray-900">
          Sobha World City Phase 1 Master Plan – Complete Overview
        </h2>

        <p>
          The <a href="https://www.sobhaworldcity.com/"><b>Sobha World City Phase 1</b></a> Master Plan spans approximately 48 acres within a vast 300-acre township located in <a href="https://maps.app.goo.gl/FqstpLAoDEDwv7MRA" rel="noopener noreferrer">Hoskote, East Bangalore</a>. Positioned along a rapidly developing corridor, this premium residential project is thoughtfully designed to offer a balance of luxury, open green spaces, and seamless connectivity.
        </p>

        <p>
          Developed by <a href="https://www.sobha.com/" target="_blank" rel="noopener noreferrer"><b>Sobha Limited</b></a>, the project is planned as a large-scale urban community featuring 18 high-rise residential towers with a configuration of 3 basements + ground + 54 floors. With over 5,400 premium apartments, the development focuses on modern living standards, supported by expansive landscapes, wide internal roads, and a centrally located grand clubhouse. Nearly 65% of the total land area is dedicated to open and green spaces, creating a refreshing and sustainable environment.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          Master Plan Layout and Design
        </h3>

        <p>
          The master plan provides a detailed visual representation of the entire township, highlighting tower positioning, entry and exit points, internal road networks, landscaped zones, and amenity areas. It helps buyers clearly understand how the entire development is structured from end to end.
        </p>

        <ul className="list-disc pl-5 space-y-1">
          <li>Strategic tower placement and orientation</li>
          <li>Dedicated children’s play areas</li>
          <li>Outdoor sports facilities</li>
          <li>Clubhouse and party spaces</li>
          <li>Landscaped gardens and parks</li>
          <li>Jogging tracks and walking paths</li>
          <li>Organized parking zones</li>
          <li>Clearly defined entry and exit gates</li>
        </ul>

        <p>
          The layout is carefully designed to maximize natural light and ventilation, ensuring a comfortable indoor living experience while reducing heat and improving airflow.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          Tower Configuration and Planning
        </h3>

        <p>
          The project consists of <b>18 high-rise towers</b>, each rising up to <b>54 floors</b> above ground level. Every tower is designed to ensure efficient space utilization, safety, and comfort. Apartment layouts focus on practical living, offering well-planned bedrooms, adequate storage space, and easy movement within the home.
        </p>

        <p>
          The development promotes a lifestyle centered around openness, greenery, and natural ventilation. The arrangement of towers ensures that residents enjoy unobstructed views of landscaped areas, parks, and the surrounding cityscape.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          Apartment Types and Sizes
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Unit Type</th>
                <th className="p-2 border">Size Range</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-2 border">2 BHK</td><td className="p-2 border">1150 – 1250 sq ft</td></tr>
              <tr><td className="p-2 border">3 BHK</td><td className="p-2 border">1750 – 1950 sq ft</td></tr>
              <tr><td className="p-2 border">4 BHK</td><td className="p-2 border">2200 – 2450 sq ft</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
          Open Spaces and Green Living
        </h3>

        <p>
          Around 65% of the total area is reserved for open spaces, ensuring a healthy and peaceful living environment. The green space ratio of 4:1 enhances the overall appeal, making it one of the more eco-conscious developments in East Bangalore.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          Importance of the Master Plan for Buyers
        </h3>

        <p>
          The master plan helps buyers understand tower locations, access to amenities, and the availability of open spaces. A well-designed layout ensures better airflow, organized infrastructure, safety, and a pleasant living environment.
        </p>

        <p>
          The tower arrangement—with taller buildings along the edges and comparatively shorter ones inside—helps maintain open views and allows fresh air to circulate freely throughout the community.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          Clubhouse and Lifestyle Amenities
        </h3>

        <ul className="list-disc pl-5 space-y-1">
          <li>Swimming pool and kids’ pool</li>
          <li>Gym and fitness zones</li>
          <li>Spa and massage rooms</li>
          <li>Salon and wellness areas</li>
          <li>Mini theatre and gaming zone</li>
          <li>Reading lounge and library</li>
          <li>Café and food court</li>
          <li>Party hall and banquet space</li>
          <li>Rooftop party deck</li>
          <li>Kids’ play area and art room</li>
          <li>Virtual gaming and entertainment zones</li>
          <li>ATM and convenience store</li>
          <li>24/7 security with CCTV surveillance</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900">
          Sports and Recreation Facilities
        </h3>

        <ul className="list-disc pl-5 space-y-1">
          <li>Table tennis and snooker</li>
          <li>Chess and carrom</li>
          <li>Air hockey and dart games</li>
          <li>Gaming arcade and simulation games</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900">
          Township Infrastructure and Road Network
        </h3>

        <p>
          The township features a well-planned internal road system ensuring smooth connectivity across all sections. A grand entrance with an architectural gateway enhances the overall appeal.
        </p>

        <p>
          The development also includes a vehicle-free podium design, allowing residents to safely access outdoor amenities without traffic interference.
        </p>

        <p>
          Security features include controlled entry and exit points, CCTV monitoring, and video door phone systems. Eco-friendly initiatives such as rainwater harvesting and sewage treatment systems are also part of the project.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          Project Overview
        </h3>

        <ul className="list-disc pl-5 space-y-1">
          <li>Project Type: Township / Apartments</li>
          <li>Location: Hoskote, East Bangalore</li>
          <li>Developer: Sobha Limited</li>
          <li>Status: Pre-launch</li>
          <li>Total Area (Phase 1): 48 acres</li>
          <li>Total Township Area: 300 acres</li>
          <li>Towers: 18</li>
          <li>Structure: 3B + G + 54 Floors</li>
          <li>Total Units: 5400+ Apartments</li>
          <li>RERA Status: Awaiting Approval</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900">
          Master Plan PDF and Download
        </h3>

        <p>
          A detailed master plan PDF will be made available after the official launch. Buyers will be able to download the complete layout including tower placement and visual representation of the township.
        </p>

        <h3 className="text-xl font-semibold text-gray-900">
          Final Thoughts
        </h3>

        <p>
          Sobha World City is designed as a premium township that combines modern infrastructure with green living. With thoughtful planning, spacious layouts, and extensive amenities, it sets a new benchmark for residential development in East Bangalore.
        </p>

      </div>
    </div>
        </div>

        <div></div>
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

export default MasterPlanPage;
