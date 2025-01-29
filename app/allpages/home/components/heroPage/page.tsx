"use client";

import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import HeroData from "./components/heroData";
import Image from "next/image";

const HeroPage = () => {
  const handleScrollLeft = () => {
    document
      .querySelector(".scrollable")
      ?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    document
      .querySelector(".scrollable")
      ?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="flex flex-col lg:flex-row items-center bg-customGray py-12 px-6 lg:px-16">
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 md:space-y-5 space-y-4 text-sm md:text-base lg:text-lg">
        {/* Arrow Icon */}
        <div className="relative">
          <div className="lg:ps-[270px] md:ps-[470px] ps-[250px] mb-[-10px] relative">
            <Image
              src="/homeImages/arrowclick.png"
              alt="Arrow Logo"
              width={24}
              height={24}
              className="md:w-8 md:h-8 w-6 h-6"
            />
          </div>
          {/* Logo and Tagline */}
          <div className="inline-flex items-center bg-white md:px-5 md:py-4 px-3 py-2 rounded-full">
            <Image
              src="/homeImages/logomeat.png"
              alt="Meat Sharing Logo"
              width={24}
              height={24}
              className="md:w-6 md:h-6 w-4 h-4"
            />
            <span className="ml-2 text-sm font-medium">
              Best Meat Sharing Platform in Town
            </span>
          </div>
        </div>
        {/* Heading */}
        <h1 className="md:text-5xl text-3xl lg:pe-40 lg:leading-snug lg:px-0 md:px-32">
          Embrace The Joy Of <span className="font-bold">Meat Sharing</span>
        </h1>
        {/* Paragraph */}
        <p className="md:text-base lg:pe-36">
          Book your slot to participate in the exciting tradition of communal
          meat sharing, where you can connect with local farmers, select your
          preferred cuts, and enjoy the freshest meat.
        </p>
        {/* Book Now Button */}
        <Button className="md:p-6 px-5 py-3 bg-customRed hover:bg-white text-white hover:text-customRed border-2 border-customRed duration-200 text-base font-semibold rounded-lg">
          Book Now
        </Button>
        {/* User Section */}
        <div className="flex flex-wrap items-center space-x-2 justify-center lg:justify-start">
          <div className="flex -space-x-6 mt-8">
            {[
              "/homeImages/user1.jpg",
              "/homeImages/user2.jpg",
              "/homeImages/user3.jpg",
            ].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`User ${index + 1}`}
                width={80}
                height={80}
                className="md:w-20 md:h-20 w-14 h-14 rounded-full border-2 border-white"
              />
            ))}
            <div className="md:w-20 md:h-20 w-14 h-14 flex items-center justify-center rounded-full border-2 border-white bg-[#FFBA35]">
              <FaPlus className="text-black md:text-3xl text-xl" />
            </div>
          </div>
          <div className="md:text-base font-medium text-center mt-8">
            <span className="font-bold text-xl">70K+</span> <br /> Trusted User
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 relative mt-5 lg:mt-0 w-full">
        {/* Hero Carousel */}
        <HeroData />

        {/* Navigation Buttons */}
        <div className="flex lg:justify-start space-x-4 sm:space-x-6 mt-6 lg:ps-11 justify-center">
          <button
            className="bg-customRed text-white md:p-5 p-3 rounded-full hover:bg-[#FFBA35] hover:text-black duration-200"
            onClick={handleScrollLeft}
          >
            <FaArrowLeft />
          </button>
          <button
            className="bg-customRed text-white md:p-5 p-3 rounded-full hover:bg-[#FFBA35] hover:text-black duration-200"
            onClick={handleScrollRight}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
