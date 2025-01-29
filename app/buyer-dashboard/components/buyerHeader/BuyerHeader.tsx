import React from "react";
import dotframe from "@/public/dotframe.png";
import Image from "next/image";

const BuyerHeader = () => {
    return (
        <div className="bg-gray-100 flex flex-col justify-center items-center h-36">
            <Image src={dotframe} alt="dot-frame" width={70} className="relative top-4 left-52 hidden lg:block" />
            <h3 className="absoulte font-bold text-4xl">My Account</h3>
            <p className="font-normal text-x">Home / My Account</p>
            <Image src={dotframe} alt="dot-frame" width={70} className="relative -left-60 bottom-4 hidden lg:block" />
        </div>
    );
};

export default BuyerHeader;
