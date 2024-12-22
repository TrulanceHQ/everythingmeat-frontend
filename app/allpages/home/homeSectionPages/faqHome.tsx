import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Everything Meat ensure the quality and freshness of its products?",
    answer: "We source meat from trusted suppliers and maintain strict quality control at every stage.",
  },
  {
    question: "What types of meats are available on Everything Meat?",
    answer: "We offer a wide range of meats, including chicken, beef, pork, lamb, and more.",
  },
  {
    question: "How does Everything Meat ensure fairness in its meat sharing system?",
    answer: "We prioritize equitable distribution by working closely with suppliers and local communities.",
  },
  {
    question: "How does Everything Meat support local agriculture and sustainable food systems?",
    answer: "By partnering with local farmers and adopting eco-friendly practices.",
  },
  {
    question: "Is doorstep delivery available, and how does it work?",
    answer: "Yes, we offer doorstep delivery. Simply place an order, and our team ensures timely delivery.",
  },
];

export default function FaqHome() {
  return (
    <div className="px-4 py-8 md:py-12 lg:py-16 bg-white text-center">
      {/* Text Header */}
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Frequently Asked Questions</h1>
      <p className="text-sm md:text-base text-gray-600 mt-2">
        Browse our FAQs for answers about our products and services. Need more help? Contact our customer support team for assistance.
      </p>
      {/* Accordion */}
      <div className="w-full mx-auto mt-8">
        <Accordion type="single" collapsible className="w-full max-w-2xl mx-60">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="w-full xl:w-[50rem]">
              <AccordionTrigger className="text-left text-lg font-medium text-gray-800 px-8 py-5 rounded-2xl mb-5 border-[1px] border-gray-400 focus-within:bg-customRed">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 px-4 py-2 border-[1px] mb-5 -mt-2 focus:bg-customRed focus:text-white">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
