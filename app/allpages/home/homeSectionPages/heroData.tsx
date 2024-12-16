// import { Carousel } from "flowbite-react";
import { PiArrowUpRightBold } from "react-icons/pi";

const animals = [
  { name: "Goat", stocks: "104+", image: "/homeImages/goat.jpg" },
  { name: "Cow", stocks: "104+", image: "/homeImages/cow.jpg" },
  { name: "Ram", stocks: "104+", image: "/homeImages/ram.jpg" },
  { name: "Chicken", stocks: "104+", image: "/homeImages/chicken.jpg" },
  { name: "Turkey", stocks: "104+", image: "/homeImages/turkey.jpg" },
  { name: "Pig", stocks: "104+", image: "/homeImages/pig.jpg" },
  { name: "Fish", stocks: "104+", image: "/homeImages/fish.jpg" },
];

const HeroData = () => {
  return (
    <div className="container mx-auto flex flex-row space-x-6 overflow-x-scroll scrollbar-hide scrollable w-full overflow-hidden">
      {animals.map((animal, index) => (
        <div
          key={index}
          className="flex-shrink-0 bg-white rounded-3xl overflow-hidden md:w-96 text-sm md:text-base lg:text-lg"
        >
          {/* Animal Image */}
          <img
            src={animal.image}
            alt={animal.name}
            className="md:w-full w-60 lg:h-80 md:h-60 h-52 object-cover md:rounded-[50px] rounded-3xl px-4 py-4"
          />
          {/* Card Content */}
          <div className="p-4 flex items-center justify-between space-x-4">
            <div>
              <h2 className="md:text-2xl text-lg font-bold">{animal.name}</h2>
              <p className="md:text-base font-normal">{animal.stocks} Stocks</p>
            </div>
            <button className="bg-red-700 text-white lg:p-5 p-3 rounded-full">
              <PiArrowUpRightBold className="lg:text-3xl md:text-2xl text-lg" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroData;
