"use client";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

export default function HeroSection() {

  const openModal = (type = "") => {
    console.log("Open Modal:", type);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative hidden lg:flex w-full h-[92vh] items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.2), rgba(0,0,0,0.85)), url('/images/sobhaworldcity.png')",
        }}
      >
        <div className="w-[90%] mx-auto flex justify-between items-center gap-10">

          {/* LEFT CONTENT */}
          <div className="backdrop-blur-md bg-white/20 border border-white/30 shadow-xl rounded-xl p-6 max-w-[500px]">

            {/* SEO Main Heading */}
            <h1 className="text-4xl font-bold text-white drop-shadow-lg text-center">
              Sobha World City
            </h1>

            <p className="text-center text-lg text-gray-200 mt-1">
              Premium Township at Hoskote, Bangalore <br /> by Sobha Group
            </p>

            {/* HIGHLIGHTS */}
            <div className="mt-6 space-y-3">
              <p className="bg-primary text-white text-center py-2 rounded-full font-semibold">
                Total Units: 5,400
              </p>
              <p className="bg-primary text-white text-center py-2 rounded-full font-semibold">
                Total Land Area: 48 Acres
              </p>
            </div>

            {/* DETAILS */}
            <div className="mt-6 text-center space-y-2">
              <h2 className="text-xl font-semibold text-white">
                2, 3 & 4 BHK Luxury Homes
              </h2>

              <p className="text-2xl font-bold text-white">
                ₹ 1.45 Cr* Onwards
              </p>

              <button
                onClick={() => openModal()}
                className="mt-3 bg-primary transition px-6 py-2 text-white rounded-md shadow-lg"
              >
                Enquire Now
              </button>

              <p className="text-sm text-gray-200 mt-2">
                RERA No: Coming Soon
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="backdrop-blur-md bg-white/20 border border-white/30 shadow-xl rounded-xl">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col w-[350px] p-6 gap-4"
            >
              <h3 className="text-center text-2xl font-semibold text-white">
                Book Site Visit
              </h3>

              <input
                required
                className="p-2 rounded bg-white outline-none"
                type="text"
                placeholder="Your Name"
              />

              <div className="flex">
                <select className="p-2 rounded-l bg-white outline-none">
                  <option>+91</option>
                  <option>+971</option>
                  <option>+44</option>
                </select>

                <input
                  required
                  className="p-2 w-full rounded-r bg-white outline-none"
                  type="text"
                  placeholder="Mobile Number"
                />
              </div>

              <input
                required
                className="p-2 rounded bg-white outline-none"
                type="email"
                placeholder="Email Address"
              />

              <button
                type="submit"
                className="bg-primary hover:bg-yellow-600 transition text-white py-2 rounded-md shadow-md"
              >
                Submit
              </button>

              <p className="text-xs text-gray-200">
                By submitting, you agree to be contacted via call, WhatsApp, or email.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ================= MOBILE HERO ================= */}
      <section className="lg:hidden bg-white">

        <Image
          src="/images/sobhaworldcity.png"
          alt="Sobha World City Hoskote Bangalore Township"
          width={800}
          height={500}
          className="w-full h-auto"
          priority
        />

        <div className="text-center bg-primary text-white py-1 font-semibold">
          Booking Open
        </div>

        <div className="p-3 text-center">
          <h1 className="text-2xl font-bold">
            Sobha World City
          </h1>

          <p className="text-gray-600">
            Hoskote, Bangalore | Sobha Group
          </p>
        </div>

        <div className="px-3 space-y-2">
          <p className="bg-primary text-white text-center py-1 rounded">
            2, 3 & 4 BHK Homes
          </p>

          <p className="bg-primary text-white text-center py-1 rounded">
            Total Units: 5,400
          </p>

          <p className="bg-primary text-white text-center py-1 rounded">
            Land Area: 48 Acres
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 my-4">
          <button
            onClick={() => openModal("Brochure")}
            className="bg-primary px-8 py-2 text-white rounded shadow-md font-semibold"
          >
            <FaDownload className="inline mr-2" />
            Download Brochure
          </button>

          <button
            onClick={() => openModal("Cost Sheet")}
            className="bg-primary px-6 py-2 text-white rounded shadow-md font-semibold"
          >
            <FaDownload className="inline mr-2" />
            Download Cost Sheet
          </button>
        </div>

        <div className="text-center mb-4">
          <p className="text-xl font-bold">
            ₹ 1.45 Cr* Onwards
          </p>

          <button
            onClick={() => openModal()}
            className="mt-2 bg-primary px-5 py-2 text-white rounded shadow-md"
          >
            Enquire Now
          </button>
        </div>
      </section>
    </>
  );
}