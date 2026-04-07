"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
    {
        id: 1,
        question: "1. Where is Sobha World City located?",
        answer: "Sobha World City is situated in Hoskote, Bangalore, a rapidly developing area in East Bangalore."
    },
    {
        id: 2,
        question: "2. What kind of apartments are available?",
        answer: "The property consists of 2, 3, and 4 BHK apartments ranging from 1,150 to 2,450 sq. ft."
    },
    {
        id: 3,
        question: "3. How many towers and floors does the project have?",
        answer: "Sobha World City comprises 18 skyscrapers, each with 45 stories."
    },
    {
        id: 4,
        question: "4. What is the project's overall land area?",
        answer: "The project spans 48 acres of well-planned residential development."
    },
    {
        id: 5,
        question: "5. Is Sobha World City a worthy investment?",
        answer: "Yes, the project is a good investment because of its location, brand reputation, and growth potential."
    }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="w-full bg-white py-14 px-4 border-t border-gray-100"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="faq-heading"
          className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-3"
        >
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-500 text-sm md:text-base mb-10">
          Everything you need to know about Sattav Aaranya, Bellandur, Bangalore.
        </p>

        <div className="space-y-3" role="list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                role="listitem"
                className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? "border-blue-300 shadow-sm" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center cursor-pointer justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className={`text-sm md:text-base font-semibold leading-snug ${isOpen ? "text-primary" : "text-gray-800"}`}>
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-primary flex-shrink-0 text-sm transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="px-5 pb-5 text-sm md:text-base text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}