/* eslint-disable react/no-unescaped-entities */
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

function LocationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelHeading, SetModelHeading] = useState("");

  const MAP_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31091.814875024134!2d77.79682104999999!3d13.068936599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0578b64bda1b%3A0x1724b6485a5f2f88!2sHoskote%2C%20Karnataka%20562114!5e0!3m2!1sen!2sin!4v1775377809839!5m2!1sen!2sin";

  return (
    <>
      <main className="w-full bg-white px-4 md:px-0">
        <div>
          <PageHero title={"Location"} />
        </div>
        <div className="max-w-5xl mx-auto py-10">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Sobha World City Location
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
          <div className="mt-6">
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm mb-8">
              <div className="w-full h-[380px] md:h-[460px]">
                <iframe
                  src={MAP_EMBED_URL}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sattva Aangane location map — Bellandur, Bangalore"
                  aria-label="Google Maps showing Sattva Aangane location in Bellandur, Bangalore"
                />
              </div>

              <Link
                href="https://maps.app.goo.gl/Eoijt8RcFfXcMQHR9"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Know more about Sattva Aangane location in Bellandur Bangalore"
                className="block w-full bg-primary hover:bg-blue-800 text-white text-center font-semibold text-lg py-4 transition-colors duration-200"
              >
                Know More About Location
              </Link>
            </div>

            <div className="text-gray-800 flex justify-between mt-4">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Project Address</h2>

                <p className="leading-7">
                  <strong>Sobha World City</strong>
                  <br />
                  Sarakariguttahalli Village, Hoskote, Bengaluru Rural District,
                  East Bangalore, Karnataka-562114.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Landmark and Map Details
                </h3>

                <div className="space-y-2">
                  <p>
                    <strong>Landmark:</strong> Opposite Hoskote Toll Plaza
                  </p>
                  <p>
                    <strong>Coordinates:</strong> 13.0669° N, 77.7983° E
                  </p>
                  <p>
                    <strong>Google Plus Code:</strong> 3Q4F+V9, Bengaluru,
                    Karnataka 562114
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-6 text-gray-700">
              <p>
                The <a href="https://www.sobhaworldcity.com/">  <strong> Sobha World City</strong> </a>
                location stands out as one of the most strategically chosen
                addresses in Bangalore, offering excellent connectivity, rapid
                infrastructure growth, and superior lifestyle convenience.
                Situated in one of the city’s well-planned growth corridors,
                Sobha World City provides seamless access to major IT hubs,
                educational institutions, business zones, and essential urban
                conveniences. Its prime location ensures that residents enjoy a
                perfect balance of peaceful living and city comfort. With close
                proximity to major highways, metro connectivity, and upcoming
                infrastructure developments, the Sobha World City location makes
                it a future-ready investment destination. Whether you're a
                working professional, a family, or an investor, this location
                offers unmatched accessibility, strong appreciation potential,
                and exceptional livability.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900">
                Sobha World City Hoskote, Bangalore Location Highlights
              </h2>

              <img
        src={"/images/location-connectivity.jpeg"}
        alt="Sobha World City Location Highlights"
        className="rounded-lg w-full"
    />

              <h3 className="text-xl font-semibold text-gray-900">
                1. Prime Address
              </h3>
              <p>
                Sobha World City is located in one of Bangalore’s rapidly
                developing suburban zones, chosen strategically for its
                connectivity, clean surroundings, and long-term growth
                potential. The area is emerging as a premium residential hub
                with increasing commercial activity and infrastructural
                upgrades.
              </p>

              <h3 className="text-xl font-semibold text-gray-900">
                2. Excellent Connectivity
              </h3>
              <p>
                The location of Sobha World City ensures easy access to the
                city’s most important corridors:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Close connectivity to major IT parks and tech hubs</li>
                <li>Direct access to outer ring roads and highways</li>
                <li>
                  Smooth travel to MG Road, Koramangala, Electronic City, and
                  Whitefield
                </li>
                <li>
                  Well-linked through BMTC routes, road networks, and upcoming
                  metro lines
                </li>
              </ul>
              <p>
                This seamless connectivity makes daily commuting convenient and
                time-efficient.
              </p>

              <h3 className="text-xl font-semibold text-gray-900">
                3. Nearby Landmarks
              </h3>
              <p>
                Sobha World City is surrounded by well-developed social and
                lifestyle infrastructure. Key landmarks near the project
                include:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Reputed schools and colleges</li>
                <li>Multi-specialty hospitals and clinics</li>
                <li>Well-known shopping centers and supermarkets</li>
                <li>
                  Family-friendly restaurants, cafes, and entertainment zones
                </li>
                <li>Upcoming commercial and business districts</li>
                <li>Lush green parks and recreational spaces</li>
              </ul>
              <p>
                Everything you need for a comfortable lifestyle is just minutes
                away.
              </p>

              <h3 className="text-xl font-semibold text-gray-900">
                4. Social Infrastructure Around Sobha World City
              </h3>
              <p>
                The locality is rich in established and upcoming amenities such
                as:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>International schools for quality education</li>
                <li>Hospitals providing advanced healthcare support</li>
                <li>Retail outlets and shopping malls for everyday needs</li>
                <li>Banks, ATMs, and essential services</li>
                <li>Well-maintained roads and infrastructure</li>
              </ul>
              <p>
                This blend of facilities makes it a preferred destination for
                homebuyers.
              </p>

              <h3 className="text-xl font-semibold text-gray-900">
                5. Proximity to IT & Business Hubs
              </h3>
              <p>
                One of the biggest advantages of{" "}
                <a href="https://www.sobhaworldcity.com/location.html">
                  <strong>Sobha World City’s location</strong>
                </a>{" "}
                is its close proximity to Bangalore’s leading IT destinations,
                ensuring job accessibility and high rental demand. Major tech
                parks, multinational companies, and growing business zones are
                just a short drive away, making the project ideal for
                professionals and investors.
              </p>

              <h3 className="text-xl font-semibold text-gray-900">
                6. Upcoming Infrastructure Development
              </h3>
              <p>
                The location is witnessing rapid growth with several planned
                developments such as:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>New metro line extensions</li>
                <li>Wider road networks</li>
                <li>Improved public transport routes</li>
                <li>Growth in commercial spaces and tech clusters</li>
              </ul>
              <p>
                These upcoming developments are expected to boost property
                appreciation and enhance future connectivity.
              </p>

              <h3 className="text-xl font-semibold text-gray-900">
                7. Nature-Friendly Surroundings
              </h3>
              <p>
                Despite being well-connected, the area around Sobha World City
                maintains a peaceful and green environment. The locality has:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Open landscapes</li>
                <li>Clean surroundings</li>
                <li>Pleasant residential atmosphere</li>
              </ul>
              <p>
                It is perfect for families seeking a calm yet convenient
                lifestyle.
              </p>

              <h3 className="text-xl font-semibold text-gray-900">
                8. Why the Sobha World City Location Is Ideal for Homebuyers
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Perfect balance of connectivity and tranquility</li>
                <li>High growth corridor with strong appreciation prospects</li>
                <li>Easy access to daily essentials and lifestyle amenities</li>
                <li>
                  Close to tech hubs, making it suitable for professionals
                </li>
                <li>Supported by robust social and physical infrastructure</li>
              </ul>
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

export default LocationPage;
