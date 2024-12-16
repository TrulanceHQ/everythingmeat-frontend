"use client";

import { FC } from "react";

interface Section {
  title: string;
  content: string;
}

const aboutSections: Section[] = [
  {
    title: "What We Do:",
    content: `Everything Meat simplifies the process of obtaining top-quality meats through a convenient meat sharing system. We offer a wide selection of cuts, from succulent steaks to tender roasts, all available at your fingertips. With our user-friendly platform, selecting and booking your desired meats is quick and effortless. Plus, our secure payment gateway and reliable logistics ensure a seamless experience from start to finish.`,
  },
  {
    title: "How We Do It:",
    content: `Our commitment to excellence begins with our partnerships with reputable cattle farmers. By elevating their sales through our platform, we not only support local agriculture but also guarantee a direct supply of fresh, high-quality meats to our customers. Each animal is expertly processed according to strict quality standards, ensuring that every cut meets our rigorous criteria for taste, texture, and safety. Through fair and transparent sharing practices, we ensure that everyone receives their rightful share, fostering a sense of community and trust among participants.`,
  },
  {
    title: "The Benefits of Everything Meat:",
    content: `Choosing Everything Meat means enjoying numerous benefits:
    - Access to premium cuts of meat at affordable prices, making gourmet dining accessible to all.
    - Peace of mind knowing that every product is government-approved and backed by veterinary health certificates, ensuring the highest standards of quality and hygiene.
    - Convenience and reliability, with doorstep delivery and real-time package tracking for a stress-free experience.
    - Empowerment of cattle farmers by providing them with a profitable avenue to market their livestock, thereby supporting local agriculture and sustainable food systems.`,
  },
  {
    title: "The Impact of What We Do:",
    content: `At Everything Meat, we recognize the profound impact of our work on various stakeholders:
    - Consumers benefit from access to fresh, high-quality meats that enhance their culinary experiences and promote healthy living.
    - Cattle farmers experience increased profitability and market opportunities, leading to economic growth and stability in rural communities.
    - Our commitment to sustainability and ethical sourcing practices contributes to environmental conservation and animal welfare.
    - By fostering connections between producers and consumers, we promote transparency, trust, and collaboration within the food supply chain, ultimately strengthening communities and fostering a more resilient food system.`,
  },
];

const AboutQuestion: FC = () => {
  return (
    <div className="bg-white min-h-screen py-10 xl:px-20 px-6 md:px-10 space-y-10">
      {aboutSections.map(({ title, content }) => (
        <div key={title}>
          <h2 className="text-xl sm:text-2xl font-bold mb-3">{title}</h2>
          <div className="w-14 border-b-4 border-red-700 my-3"></div>
          <p className="font-medium whitespace-pre-line leading-relaxed">
            {content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutQuestion;

