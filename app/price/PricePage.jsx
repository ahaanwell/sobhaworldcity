"use client";
import dynamic from "next/dynamic";

const LeadModal = dynamic(() => import("@/components/LeadModal"), {
  ssr: false,
});
import PageHero from "@/components/PageHero";
import Image from "next/image";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";

function PricePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");

  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Price"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha World City Price
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
          <div className="space-y-6 text-gray-800 mt-5">
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 mt-4">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border p-3 text-left">Unit Type</th>
                    <th className="border p-3 text-left">Approx Size</th>
                    <th className="border p-3 text-left">Starting Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3">2 BHK</td>
                    <td className="border p-3">1150 - 1250 Sq. Ft</td>
                    <td className="border p-3">₹ 1.45 Cr* Onwards</td>
                  </tr>
                  <tr>
                    <td className="border p-3">3 BHK</td>
                    <td className="border p-3">1750 - 1950 Sq. Ft </td>
                    <td className="border p-3">
                      <button
                        className="cursor-pointer"
                        onClick={() => {
                          SetModelHeading("Download 3 BHK Price");
                          setIsModalOpen(true);
                        }}
                      >
                        Enquiry Open
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-3">4 BHK</td>
                    <td className="border p-3">2200 - 2450 Sq. Ft</td>
                    <td className="border p-3">
                      <button
                        className="cursor-pointer"
                        onClick={() => {
                          SetModelHeading("Download 3 BHK Price");
                          setIsModalOpen(true);
                        }}
                      >
                        Enquiry Open
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="space-y-5 text-base leading-rel-relaxed text-gray-800 mt-4">
    <h2 className="text-2xl font-semibold text-gray-900">
        
        Sobha World City Price – Updated Cost, Price List & Complete Guide
    </h2>
    <p>
         <a href="https://www.sobhaworldcity.com/price.html"><strong>Sobha World City Price</strong></a> reflects the perfect blend of luxury, space, and long-term value in one of Bangalore’s fastest-growing corridors. Developed by Sobha Limited, this grand township is designed to offer a premium lifestyle with top-tier amenities, green landscapes, and unmatched connectivity. Whether you are planning to buy a home for end use or investment, Sobha World City offers a wide range of apartment configurations at competitive pricing backed by Sobha’s trusted construction quality.
    </p>

    <h2 className="text-xl font-semibold text-gray-900">Sobha World City – Project Overview</h2>
    <img
        src={"/images/about-sobhaworldcity.webp"}
        alt="Sobha World City Overview"
        className="rounded-lg w-full"
    />
    <p>
        <a href="https://www.sobhaworldcity.com"><strong>Sobha World City</strong></a> is envisioned as an integrated township featuring residential clusters, commercial zones, recreational spaces, and modern community living. Spread across a vast land parcel, this project focuses on delivering an elevated lifestyle with thoughtfully designed homes and world-class facilities such as a clubhouse, swimming pool, sports courts, kids’ play area, and landscaped gardens.
    </p>

    <h3 className="text-xl font-semibold text-gray-900">Sobha World City Price – Latest Update</h3>
    <p>
        The Sobha World City price varies depending on the configuration, floor plan, view, and tower location. Sobha Limited is known for offering competitive pricing along with early-bird offers during launch and pre-launch phases. Homebuyers can benefit from flexible payment plans, bank loan options, and attractive launch benefits.
    </p>
    <p>
        With rising demand along Bangalore’s upcoming development hubs, Sobha World City offers one of the best price-value propositions among premium residential projects.
    </p>
</div>
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

export default PricePage;
