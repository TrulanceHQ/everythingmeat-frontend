"use client";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How does Everything Meat ensure the quality and freshness of its products?",
    answer: "We maintain strict quality standards by partnering with reputable cattle farmers and adhering to rigorous processing guidelines. Each cut undergoes careful inspection to ensure freshness, taste, and safety. Additionally, our products are backed by government-approved veterinary health certificates, providing consumers with peace of mind.",
  },
  {
    question: "What types of meats are available on Everything Meat?",
    answer: "We offer a diverse range of meats, including succulent steaks, tender roasts, and other premium cuts. Our selection caters to various culinary preferences and includes options for every taste and occasion.",
  },
  {
    question: "How does Everything Meat ensure fairness in its meat sharing system?",
    answer: "Our meat sharing system operates on principles of fairness and transparency. Through clear sharing practices, we ensure that each participant receives their rightful share of premium meats, fostering a sense of community and trust among users.",
  },
  {
    question: "How does Everything Meat support local agriculture and sustainable food systems?",
    answer: "By partnering with local farmers, we empower them with a profitable avenue to market their livestock. This not only boosts economic opportunities in rural communities but also promotes sustainable farming practices. Additionally, our commitment to ethical sourcing and transparent sharing practices contributes to environmental conservation and animal welfare.",
  },
  {
    question: "Is doorstep delivery available, and how does it work?",
    answer: "Yes, we offer doorstep delivery for added convenience. Once an order is placed, our reliable logistics team ensures timely delivery to the specified address. Customers can also track their packages in real-time, providing them with peace of mind throughout the delivery process.",
  },
];

export default function FaqHome() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="px-4 py-8 md:py-12 lg:py-16 bg-white text-center">
      {/* Text Header */}
      <h1 className="text-2xl md:text-3xl font-semibold">Frequently Asked Questions</h1>
      <p className="text-sm md:text-base mt-2 xl:px-[370px] lg:px-52 md:px-20 px-8">
        Browse our FAQs for answers about our products and services. Need more help? Contact our customer support team for assistance.
      </p>
      <div className="w-14 border-b-4 border-customRed mx-auto mt-2"></div>
      {/* Accordion */}
      <div className="w-full mx-auto mt-12">
        <Accordion type="single" collapsible className="w-full max-w-2xl xl:mx-48 mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="w-full border-0 xl:w-[60rem]">
              <AccordionTrigger
                onClick={() => handleToggle(index)}
                className={`text-start text-base md:text-lg font-bold px-8 py-5 rounded-2xl border-[1px] border-gray-400 ${
                  expandedIndex === index ? "bg-customRed text-white border-b-0 rounded-b-none" : "mb-5 hover:bg-customGray"
                } flex justify-between items-center`}
              >
                {faq.question}
                <span className={`transition-transform duration-300 text-xs ${expandedIndex === index ? "rotate-180" : ""}`}>
                  {expandedIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </AccordionTrigger>
              {expandedIndex === index && (
                <AccordionContent
                  className={`px-8 border-[1px] mb-5 -mt-1 ${
                    expandedIndex === index ? "bg-customRed text-white rounded-b-2xl text-start text-sm md:text-base" : "text-black"
                  }`}
                >
                  {faq.answer}
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
