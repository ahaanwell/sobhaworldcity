"use client";

import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import EMICalculator from "./EMICalculator";
import dynamic from "next/dynamic";

const LeadModal = dynamic(() => import("./LeadModal"), {
  ssr: false,
});

const priceData = [
  { type: "2 BHK", size: "1150 - 1250 Sq. Ft", price: "₹ 1.45 Cr* onwards" },
  { type: "3 BHK", size: "1750 - 1950 Sq. Ft", price: "Price On Request" },
  { type: "4 BHK", size: "2200 - 2450 Sq. Ft", price: "Price On Request" },
];

export default function PriceListSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");

  return (
    <section
      id="price-table"
      aria-labelledby="price-list-heading"
      className="w-full bg-white pt-14"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="price-list-heading"
          className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-2"
        >
          Configuration and Price
        </h2>

        <div className="w-full h-px bg-gray-200 mb-5" />

        <div className="flex flex-col lg:flex-row gap-0 ">
          <div className="flex-1 overflow-x-auto hidden md:block">
            <table
              className="w-full text-sm md:text-base"
              role="table"
              aria-label="Apartment types and pricing"
            >
              <thead>
                <tr className="border bg-primary text-white border-gray-200">
                  <th className="py-1 px-2 font-bold text-center w-1/4">
                    Unit Type
                  </th>
                  <th className="py-1 px-2 font-bold text-center w-1/3">
                    Size
                  </th>
                  <th className="py-1 px-2 font-bold text-center w-1/3">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-300 hover:bg-gray-50 transition"
                  >
                    <td className="py-2 px-2 text-center text-black">
                      {row.type}
                    </td>
                    <td className="py-2 px-2 text-center text-black">
                      {row.size}
                    </td>
                    <td className="py-2 px-2 text-center font-semibold text-primary">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden flex flex-col gap-5 px-2">
            {priceData.map((row, i) => (
              <div
                key={i}
                className="bg-gray-100 border border-gray-300 rounded-md p-6 text-center shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {row.type}
                </h3>

                <p className="text-sm text-gray-700 mb-2">{row.size}</p>

                <p className="text-lg font-bold text-black mb-4">{row.price}</p>

                <button
                  onClick={() => {
                    SetModelHeading(`${row.type} - Price Breakup`);
                    setIsModalOpen(true);
                  }}
                  className="w-full flex justify-center items-center gap-2 bg-primary text-white py-2 rounded-sm font-medium hover:opacity-90 transition"
                >
                  <FaDownload />
                  Download Now
                </button>
              </div>
            ))}
          </div>
          <div className="px-4 md:px-0">
            <img
              className="w-full"
              loading="lazy"
              src="/images/pricedetails.webp"
              alt="Price Details"
            />
            <button
              onClick={() => {
                SetModelHeading("Download Price List");
                setIsModalOpen(true);
              }}
              className="flex items-center justify-center text-center gap-2 px-3 py-3 bg-primary text-white w-full font-medium cursor-pointer"
            >
              <FaDownload />
              Complete Costing Details
            </button>
          </div>
        </div>
        <div className="pt-10">
          <div className="space-y-4 px-4 md:px-0 text-gray-700 leading-relaxed">
            <p>
              <a href="https://www.sobhaworldcity.com/price.html">
                <b>Sobha World City</b>
              </a>{" "}
              is expected to offer competitive pricing backed by the brand’s
              unmatched construction quality and township-scale infrastructure.
              The project is designed to deliver excellent value for homebuyers
              and investors looking for long-term appreciation in one of
              Bangalore’s fastest-growing corridors. Pricing will vary based on
              unit type, size, views, and residential cluster specifications.
              Early investors can benefit from attractive launch-price
              opportunities, making it a strong proposition for both end-users
              and investors. To receive the latest price sheet, cost breakup,
              and exclusive offers, prospective buyers can register their
              interest through the official enquiry channels.
            </p>
          </div>
          <EMICalculator />
        </div>
      </div>
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modelHeading={modelHeading}
        modelBtnLabel="Download"
      />
    </section>
  );
}
