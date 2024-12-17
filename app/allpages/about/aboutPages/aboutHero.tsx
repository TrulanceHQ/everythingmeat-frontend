"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoChevronBack } from "react-icons/io5";
import { Button } from "@/components/ui/button";

// Statistics Data
const stats = [
  { value: "1+", label: "Years" },
  { value: "270+", label: "Customers" },
  { value: "160+", label: "Farmers" },
  { value: "1043+", label: "Successful Sharing" },
  { value: "97%", label: "Satisfaction" },
];

const AboutHero = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-100 pt-5 min-h-screen">
      {/* Back Button */}
      <Button
      onClick={() => router.push("/")}
      className="relative md:top-5 lg:left-10 left-4 bg-customRed hover:bg-customRed text-white md:p-5 py-3 px-4 rounded-md flex items-center gap-2 font-bold md:text-base text-sm"
    >
      <IoChevronBack size={18} /> Back
    </Button>

      {/* Title Section */}
      <div className="text-center mt-5 mb-20">
        <h1 className="md:text-3xl text-2xl font-bold text-black mb-3">About Us</h1>
        <p className="md:text-lg text-base">Home / About us</p>
      </div>

      {/* Dot Frame */}
      {/* Top */}
      <div className="absolute">
        <Image
          src="/dotframe.png"
          alt="Dot Frame"
          width={126}
          height={106}
          className="object-cover relative xl:-top-[284] xl:left-[795] xl:w-[126] md:w-[112] w-[100] -top-[279] lg:left-[635] md:left-[480] left-[273]"
        />
      </div>
      {/* Bottom */}
      <div className="absolute">
        <Image
          src="/dotframe.png"
          alt="Dot Frame"
          width={126}
          height={106}
          className="object-cover relative  xl:-top-16 xl:left-[428] xl:w-[126] md:w-[112] w-[100] md:-top-[55] lg:left-[280] md:left-[160] -top-[34] left-[36]"
        />
      </div>

      {/* Welcome Section */}
      <div className="bg-white px-5 py-10 md:px-10 items-center flex flex-col">
      {/* Title Section */}
      <div className="space-y-2 xl:space-x-10">
        <h1 className="text-2xl font-bold xl:ml-10">
          Welcome to Everything Meat
        </h1>
        <div className="w-16 border-b-4 border-customRed"></div>
        <p className="font-medium xl:pr-8">
          At Everything Meat, we’re very passionate about transforming the very
          essence of how you procure and relish top-tier meats. With our
          pioneering approach, we’ve crafted a dynamic platform that
          effortlessly links aficionados like you with a curated selection of
          prime cuts sourced straight from our network of esteemed farmers.
          From farm to table, we uphold the pillars of freshness, transparency,
          and unwavering satisfaction, ensuring that every interaction with us
          is a culinary delight. Join us in this gastronomic adventure and
          experience the epitome of meat excellence. Reach out today, and let’s
          embark on this savory journey together!
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-8 sm:mt-12">
        <Image
          src="/aboutImages/aboutmeat.jpg"
          alt="Fresh Meats"
          width={1200}
          height={600}
          className="object-cover lg:h-[570]"
        />
      </div>

      {/* Stats Section */}
      <div className="mt-12 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-amber-400 py-5 rounded-xl lg:px-4 md:px-0 w-full max-w-5xl px-5">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex flex-col items-center ${
              index < stats.length - 1 ? "border-gray-400 md:border-r md:h-14 md:border-b-0 border-b " : ""
            }`}
          >
            <p className="text-xl lg:text-xl md:text-lg font-bold">{stat.value}</p>
            <p className="text-base md:text-sm lg:text-base md:mb-0 mb-2">{stat.label}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
    </div>
  );
};

export default AboutHero;
