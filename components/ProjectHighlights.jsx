/* eslint-disable react/no-unescaped-entities */
"use client";
import {
  FaBuilding,
  FaRupeeSign,
  FaVectorSquare,
  FaDoorOpen,
  FaLayerGroup,
  FaCity,
  FaHelmetSafety,
  FaCertificate,
  FaCalendarDay,
} from "react-icons/fa6";
import { MdApartment } from "react-icons/md";

const highlights = [
  {
    icon: <FaBuilding className="text-3xl" />,
    label: "Project Type",
    value: "Apartment",
  },
  {
    icon: <FaRupeeSign className="text-3xl]" />,
    label: "Starting Price",
    value: "₹1.45 Cr* Onwards",
  },
  {
    icon: <MdApartment className="text-3xl" />,
    label: "Unit Type",
    value: "2, 3 & 4 BHK",
  },
  {
    icon: <FaVectorSquare className="text-3xl" />,
    label: "Unit Sizes",
    value: "1,150 to 2450 sq. ft",
  },
  {
    icon: <FaDoorOpen className="text-3xl" />,
    label: "Project Status",
    value: "Pre Launch",
  },
  {
    icon: <FaLayerGroup className="text-3xl" />,
    label: "Land Area",
    value: "48+ Acres",
  },
  {
    icon: <FaCity className="text-3xl" />,
    label: "Total Units",
    value: "5400+",
  },
  {
    icon: <FaBuilding className="text-3xl" />,
    label: "Total No. of Floors",
    value: "G + 54 Floors",
  },
  {
    icon: <FaBuilding className="text-3xl" />,
    label: "No Of Towers",
    value: "18",
  },
  {
    icon: <FaHelmetSafety className="text-3xl" />,
    label: "Builder",
    value: "Sobha Group",
  },
  {
    icon: <FaCertificate className="text-3xl" />,
    label: "Rera No",
    value: "Coming Soon",
  },
  {
    icon: <FaCalendarDay className="text-3xl" />,
    label: "Possession",
    value: "2030 onwards",
  },
];

export default function ProjectHighlights() {
  return (
    <section
      id="project-highlights"
      aria-labelledby="highlights-heading"
      className="w-full bg-white pt-8 px-4 md:px-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="highlights-heading"
          className="text-3xl font-semibold text-gray-900 text-center mb-5"
        >
          About Sobha World City
        </h2>
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          aria-label="Sobha World City project highlights"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl px-1 sm:px-5 py-3 sm:py-5 flex items-start gap-1 sm:gap-4 hover:shadow-sm transition-shadow duration-300"
            >
              <div
                aria-hidden="true"
                className="mt-1 flex-shrink-0 text-primary"
              >
                <span className="text-[#ca9b1f]">{item.icon}</span>
              </div>

              <div>
                <p className="text-sm text-gray-600 leading-tight mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-semibold text-gray-800 leading-snug">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl m-auto mt-8">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-semibold text-gray-900">
              Welcome to Sobha World City – Urban living meets timeless comfort
            </h2>

            <p >
              In <a href="https://en.wikipedia.org/wiki/Hoskote"><strong>Hoskote</strong></a>
              , Bangalore, <a href="https://www.sobhaworldcity.com/"><strong>Sobha World City</strong></a> is a great place to
              live because it offers beautiful design, large rooms, and a
              location that is easy to access. This project by Sobha Developers,
              spread over <strong>48 acres</strong> of prime land, transforms the way people
              live in today’s modern city lifestyle.
            </p>

            <p>
              The development features <strong>18 blocks</strong> with a total
              of <strong> 5,400 flats</strong>
              and thoughtfully planned layouts that include spacious{" "}
              <strong>2, 3, and 4 BHK homes</strong>. Each home is built with
              the uncompromised Sobha quality, exceptional attention to detail,
              and precision engineering the brand is known for.
            </p>

            <p>
              With scenic views, wide-open spaces, and a variety of premium
              amenities, Sobha World City blends daily convenience with a truly
              luxurious way of living—offering a perfect balance of comfort and
              elegance.
            </p>
          </div>
          <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Project Overview - A Perfect Balance of Space, Design and
              Lifestyle
            </h2>
            <p className="">
              <strong>
                <a href="https://www.sobhaworldcity.com/">Sobha World City</a>
              </strong>{" "}
              was created as a self-contained residential township that meets
              the diverse needs of contemporary families. Each tower is
              carefully designed to provide solitude, air flow and natural
              light. The project is designed so that living areas are connected
              to landscaped parks, recreation areas and luxurious lifestyle
              facilities. This makes the area both active and peaceful for the
              people who live there.
            </p>
          </div>

          <div className="mb-12 mt-5">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Quick Look at the Project
            </h2>

            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold text-gray-800 p-4 bg-gray-50 border-r border-gray-300">
                    Project Name
                  </td>
                  <td className="text-gray-700 p-4">Sobha World City</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold text-gray-800 p-4 bg-gray-50 border-r border-gray-300">
                    Total Land Area
                  </td>
                  <td className="text-gray-700 p-4">48 Acres</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold text-gray-800 p-4 bg-gray-50 border-r border-gray-300">
                    Total Towers
                  </td>
                  <td className="text-gray-700 p-4">18</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold text-gray-800 p-4 bg-gray-50 border-r border-gray-300">
                    Total Floors (per tower)
                  </td>
                  <td className="text-gray-700 p-4">Up to 45</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold text-gray-800 p-4 bg-gray-50 border-r border-gray-300">
                    Total Units
                  </td>
                  <td className="text-gray-700 p-4">5,400 Apartments</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold text-gray-800 p-4 bg-gray-50 border-r border-gray-300">
                    Unit Variants
                  </td>
                  <td className="text-gray-700 p-4">2 BHK, 3 BHK, 4 BHK</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold text-gray-800 p-4 bg-gray-50 border-r border-gray-300">
                    2 BHK Size Range
                  </td>
                  <td className="text-gray-700 p-4">1,150 – 1,250 sq. ft.</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold text-gray-800 p-4 bg-gray-50 border-r border-gray-300">
                    3 BHK Size Range
                  </td>
                  <td className="text-gray-700 p-4">1,750 – 1,950 sq. ft.</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold text-gray-800 p-4 bg-gray-50 border-r border-gray-300">
                    4 BHK Size Range
                  </td>
                  <td className="text-gray-700 p-4">2,200 – 2,450 sq.ft.</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="font-semibold text-gray-800 p-4 bg-gray-50 border-r border-gray-300">
                    Project Type
                  </td>
                  <td className="text-gray-700 p-4">
                    Premium Residential Apartments
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold text-gray-800 p-4 bg-gray-50 border-r border-gray-300">
                    Location
                  </td>
                  <td className="text-gray-700 p-4">Hoskote, Bangalore</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="">
            <p className="text-gray-700  leading-relaxed">
              The idea behind Sobha World City is to create a world-class place
              to live that offers a healthy lifestyle, with work, play and rest.
              Sobha's idea of making places that make life better can be seen in
              every part, from the architecture to the way the services are set
              up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
