"use client";

import { Accordion } from "flowbite-react";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const faqs = [
  {
    question: "How does Everything Meat ensure the quality and freshness of its products?",
    answer: "We maintain strict quality standards by partnering with reputable cattle farmers and adhering to rigorous processing guidelines. Each cut undergoes careful inspection to ensure freshness, taste, and safety. Additionally, our products are backed by government-approved veterinary health certificates, providing consumers with peace of mind.",
  },
  {
    question: "What types of meats are available on Everything Meat?",
    answer: "loremFAQs are stored in an array for easy maintenance and scalability.",
  },
  {
    question: "How does Everything Meat ensure fairness in its meat sharing system?",
    answer: "FAQs are stored in an array for easy maintenance and scalability.",
  },
  {
    question: "How does Everything Meat support local agriculture and sustainable food systems?",
    answer: "FAQs are stored in an array for easy maintenance and scalability.",
  },
  {
    question: "Is doorstep delivery available, and how does it work?",
    answer: "FAQs are stored in an array for easy maintenance and scalability.",
  },
];

export default function QuestionHome() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Frequently Asked Questions</h2>
      <p className="text-center text-gray-600 mb-8">
        Browse our FAQs for answers about our products and services. Need more help? Contact our customer support team for assistance.
      </p>

      {/* Accordion */}
      <Accordion collapseAll>
        {faqs.map((faq, index) => (
          <Accordion.Panel key={index}>
            <Accordion.Title
              className={`text-lg font-bold ${openIndex === index ? "bg-red-700 text-white" : "bg-white text-black"}`}
              onClick={() => handleToggle(index)}
            >
              <div className="flex justify-between items-center w-full">
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FiMinus size={20} className="text-white" />
                ) : (
                  <FiPlus size={20} className="text-black" />
                )}
              </div>
            </Accordion.Title>
            {faq.answer && openIndex === index && (
              <Accordion.Content>
                <p className="text-gray-700">{faq.answer}</p>
              </Accordion.Content>
            )}
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
}
