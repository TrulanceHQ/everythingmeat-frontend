"use client";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useRef } from "react";
import Image from "next/image";

const stocks = [
  {
    id: "12573FG",
    title: "Live Goat",
    price: 35000,
    slotsOut: "13",
    slotsAvailable: "25",
    image: "/homeImages/livegoat.png",
  },
  {
    id: "12574FG",
    title: "Live Cow",
    price: 35000,
    slotsOut: "6",
    slotsAvailable: "12",
    image: "/homeImages/livecow.jpg",
  },
  {
    id: "12575FG",
    title: "Live Ram",
    price: 35000,
    slotsOut: "4",
    slotsAvailable: "7",
    image: "/homeImages/liveram.png",
  },
  {
    id: "12576FG",
    title: "Live Cow",
    price: 35000,
    slotsOut: "5",
    slotsAvailable: "8",
    image: "/homeImages/livecow2.jpg",
  },
  {
    id: "12577FG",
    title: "Live Fish",
    price: 35000,
    slotsOut: "50",
    slotsAvailable: "130",
    image: "/homeImages/livefish.jpg",
  },
];

const HomeStock = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="px-4 sm:px-10 md:px-20 py-10 sm:py-20 bg-customGray">
      {/* Text Header Start*/}
      <div className="text-center">
        <h2 className="md:text-3xl text-2xl font-bold mb-2">Most Popular Stocks</h2>
        <p className="mb-2 px-4 sm:px-10 xl:px-96 lg:px-40">
          Discover our most sought-after live cattle breeds for meat sharing, carefully selected based on quality and flavor.
        </p>
        <div className="w-14 border-b-4 border-customRed mx-auto"></div>
      </div>
      {/* Text Header End*/}

      {/* Carousel Start*/}
      <div className="relative">
        <button onClick={scrollLeft} className="absolute transform -translate-y-1/2 xl:left-0 md:-left-10 left-0 top-1/2 bg-white px-1 py-4 md:flex hidden hover:bg-customRed hover:text-white duration-700">
          <FiChevronLeft size={24} />
        </button>
        <div ref={carouselRef} className="container mx-auto flex flex-row space-x-8 sm:overflow-x-hidden overflow-x-scroll scrollbar-hide scrollable xl:w-[1100px] w-full overflow-hidden mt-5">
          {stocks.map((stock) => (
            <Card key={stock.id} className="flex-shrink-0 w-full max-w-[300px] sm:max-w-[350px] max-h-[620px] mx-auto hover:shadow-2xl border-none duration-500">
              <CardHeader>
                <div className="relative">
                  <Image
                    src={stock.image}
                    alt={stock.title}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-full h-60 sm:h-80"
                  />
                  <div className="absolute top-5 right-2 flex flex-col space-y-2">
                    <button className="bg-white px-2 py-2 rounded-full">
                      <MdOutlineZoomOutMap size={20} className="text-gray-700" />
                    </button>
                    <button className="bg-white px-2 py-2 rounded-full">
                      <HiOutlineShoppingBag size={20} className="text-gray-700" />
                    </button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-gray-500">Product ID: {stock.id}</p>
                <CardTitle className="md:text-2xl text-xl font-semibold">{stock.title}</CardTitle>
                <p className="text-customRed font-bold md:text-xl text-lg">₦{stock.price.toLocaleString()}<span className="text-black text-xs font-normal"> /per slot</span></p>
                <div className="w-full border-b-2 border-gray-300 my-3"></div>
                <p className="text-sm">Available slot <span className="text-customRed font-bold">{stock.slotsOut}</span> out of <span className="font-bold">{stock.slotsAvailable}</span></p>
              </CardContent>
              <CardFooter>
                <Button className="bg-customRed hover:bg-white text-white hover:text-customRed border-2 border-customRed duration-200 rounded-lg duration-200 md:py-6 md:px-4 py-4 px-2 w-full">
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
          {/* Final Card */}
          <Card className="flex-shrink-0 w-full max-w-[300px] sm:max-w-[350px] max-h-[620px] mx-auto bg-customRed hover:shadow-2xl border-none duration-700">
            <CardContent className="flex items-center justify-center h-full">
              <Button className="bg-white text-customRed py-6 px-4 rounded-lg w-full hover:bg-white">
                See More
              </Button>
            </CardContent>
          </Card>
        </div>
        <button onClick={scrollRight} className="absolute xl:right-0 md:-right-10 right-0 top-1/2 transform -translate-y-1/2 bg-white px-1 py-4 md:flex hidden hover:bg-customRed hover:text-white duration-700">
          <FiChevronRight size={24} />
        </button>
      </div>
      {/* Carousel End*/}
    </section>
  );
};

export default HomeStock;
