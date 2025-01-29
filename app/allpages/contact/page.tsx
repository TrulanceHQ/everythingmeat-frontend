import React from "react";
import Image from "next/image";
import GetForm from "./components/getForm";

const ContactPage = () => {
  return (
    <div className="bg-customGray pt-2 min-h-screen relative">
      {/* Title Section */}
      <div className="text-center mt-20 mb-20">
        <h1 className="md:text-3xl text-2xl font-bold text-black mb-3">
          Contact
        </h1>
        <p className="md:text-lg text-base">Home / Contact</p>
      </div>
      {/* Dot Frame */}
      {/* Top */}
      <div className="absolute z-10 hidden md:block">
        <Image
          src="/dotframe.png"
          alt="Dot Frame"
          width={126}
          height={106}
          className="object-cover relative xl:-top-[285] xl:left-[850] xl:w-[126] w-[112] -top-[280] lg:left-[635] md:left-[480]"
        />
      </div>
      {/* Bottom */}
      <div className="absolute z-10 hidden md:block">
        <Image
          src="/dotframe.png"
          alt="Dot Frame"
          width={126}
          height={106}
          className="object-cover relative  xl:-top-16 xl:left-[428] xl:w-[126] w-[112] -top-[58] lg:left-[280] left-[160]"
        />
      </div>
      {/* Component */}
      <GetForm />
      <div className="h-20"></div>
    </div>
  );
};

export default ContactPage;
