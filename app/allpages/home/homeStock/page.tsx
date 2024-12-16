"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaSearchPlus, FaSearchMinus } from "react-icons/fa";

const animals = [
  { id: 1, image: "/homeImages/livecow.jpg", name: "Goat 1", price: "₦35,000", slots: "2 out of 4" },
  { id: 2, image: "/homeImages/livegoat.png", name: "Goat 2", price: "₦35,000", slots: "2 out of 4" },
  { id: 3, image: "/homeImages/livecow2.jpg", name: "Cow 1", price: "₦35,000", slots: "2 out of 4" },
  { id: 4, image: "/homeImages/livefish.png", name: "Cow 2", price: "₦35,000", slots: "2 out of 4" },
  { id: 5, image: "/homeImages/liveram.png", name: "Sheep 1", price: "₦35,000", slots: "2 out of 4" },
  { id: 6, image: "/homeImages/livefish.png", name: "Sheep 2", price: "₦35,000", slots: "2 out of 4" },
];

const HomeStock = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300; // Adjust scroll distance
      if (direction === "left") current.scrollLeft -= scrollAmount;
      else current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="relative w-full bg-gray-50 py-8">
      <h2 className="text-center text-2xl font-bold mb-4">Most Popular Stocks</h2>
      <p className="text-center text-gray-600 mb-6">
        Discover our most sought-after live cattle breeds for meat sharing, carefully selected based on quality and flavor.
      </p>
      
      {/* Left Navigation Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-4 px-4 scrollbar-hide"
      >
        {animals.map((animal) => (
          <div
            key={animal.id}
            className="min-w-[280px] flex-shrink-0 bg-white rounded-lg shadow-md overflow-hidden relative"
          >
            {/* Image with Icons */}
            <div className="relative">
              <img
                src={animal.image}
                alt={animal.name}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button className="bg-white p-1 rounded-full shadow-md">
                  <FaSearchPlus size={16} className="text-gray-700" />
                </button>
                <button className="bg-white p-1 rounded-full shadow-md">
                  <FaSearchMinus size={16} className="text-gray-700" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">{animal.name}</h3>
              <p className="text-red-600 font-bold text-xl">{animal.price}</p>
              <p className="text-gray-600 text-sm mb-2">Available slot {animal.slots}</p>
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Navigation Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full z-10"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default HomeStock;
