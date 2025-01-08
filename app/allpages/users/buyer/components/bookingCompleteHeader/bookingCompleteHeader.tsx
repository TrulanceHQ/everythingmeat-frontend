import React from "react";
import dotframe from "@/public/dotframe.png";
import {IoChevronBack} from "react-icons/io5";
import Image from "next/image";
import {Button} from "flowbite-react";

const BookingHeader = () => {
    return (
        <div className="bg-gray-100 flex flex-col justify-center items-center h-36">
            <div className="py-2 absolute top-[55px] left-2 m-3 md:top-36">
                <Button className="!bg-customRed p-1 w-auto flex !flex-row !items-center">
                    {" "}
                    <IoChevronBack />
                    <span className="hidden md:block">Back</span>
                </Button>
            </div>
            <Image src={dotframe} alt="dot-frame" width={70} className="relative top-4 left-52 hidden lg:block" />
            <h3 className="absoulte font-bold text-4xl">My Account</h3>
            <p className="font-normal text-x">Home / Booking Complete</p>
            <Image src={dotframe} alt="dot-frame" width={70} className="relative -left-60 bottom-4 hidden lg:block" />
        </div>
    );
};

export default BookingHeader;
