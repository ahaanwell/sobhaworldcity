/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { FaDownload, FaPhone } from "react-icons/fa";
import LeadModal from "./LeadModal";

const floorPlans = [
  {
    id: 1,
    label: "2 BHK Floor Plan",
    image: "./images/2bhk-large-floor-plan.png",
    alt: "2 BHK Floor Plan",
  },
  {
    id: 2,
    label: "3 BHK Floor Plan",
    image: "./images/3bhk-large-floor-plan.png",
    alt: "3 BHK Floor Plan",
  },
  {
    id: 3,
    label: "4 BHK Floor Plan",
    image: "./images/4bhk-large-floor-plan.png",
    alt: "4 BHK Floor Plan",
  },
];

export default function FloorPlanSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");
  return (
    <section
      id="floor-plan"
      aria-labelledby="floor-plan-heading"
      className="w-full bg-white pt-14 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">

        <h2
          id="floor-plan-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Floor Plan
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-label="Sattva Aangane floor plans"
        >
          {floorPlans.map((plan) => (
            <li
              key={plan.id}
              className="rounded-xl overflow-hidden border border-gray-200 shadow-sm cursor-pointer"
              onMouseEnter={() => setHoveredId(plan.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={plan.image}
                  alt={plan.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                <div
                  className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredId === plan.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <button
                  onClick={()=>{
                SetModelHeading(`Download ${plan.label}`)
                setIsModalOpen(true)
              }}
                    aria-label={`Enquire about ${plan.label}`}
                    className="flex cursor-pointer items-center gap-2 bg-transparent border-2 border-white text-white font-semibold text-lg px-5 py-2 rounded-sm hover:bg-white hover:text-gray-900 transition-colors duration-200"
                  >
                    <FaDownload />
                    Download Now
                  </button>
                </div>
              </div>

              <div className="bg-primary text-white text-center font-semibold text-base md:text-lg py-3 px-4">
                {plan.label}
              </div>
            </li>
          ))}
        </ul>


  <div className="space-y-10 pt-6 text-gray-800">
    <div className="space-y-4 text-gray-700 leading-relaxed">
        <p className="mb-4">
        <b>Sobha World City</b> offers a variety of thoughtfully designed floor plans tailored to meet the needs of modern families. Each unit is meticulously crafted to maximize natural light, ventilation, and space utilization. The layouts include well-planned bedrooms, spacious living areas, functional kitchens, premium bathrooms, and balconies that offer serene views of green landscapes. Depending on the residential cluster, the project may offer 1 BHK, 2 BHK, 3 BHK, and larger configurations, each designed with Sobha’s signature attention to detail. The floor plans cater to individuals, couples, and families seeking a refined and future-ready living experience.
      </p>
    </div>
  </div>


      </div>
      <LeadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} modelHeading={modelHeading} modelBtnLabel="Download" />
    </section>
  );
}