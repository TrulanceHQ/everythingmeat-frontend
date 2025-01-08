"use client";
import christmas_goat from "@/public/buyersImage/christmas_goat.png";
import {Button} from "flowbite-react";
import Image from "next/image";
export function Page() {
    const cardContent = [
        {
            title: "Booking ID",
            value: "#2356712",
        },
        {
            title: "Payment Method",
            value: "Bank Transfer",
        },
        {
            title: "Product Id",
            value: "12573FG",
        },
        {
            title: "Delivery Date",
            value: "27th May, 2024",
        },
    ];
    return (
        <div className="flex flex-col m-6 p-4">
            {/* HEADER */}
            <div className="flex flex-col justify-start text-left my-8 p-3">
                <h1 className="text-3xl font-bold">Booking Completed</h1>
                <p className="text-sm font-normal">Thank you, your booking has been completed.</p>
            </div>
            {/* CARD HEADER */}
            <div className="flex flex-row w-full bg-customOrange justify-around rounded-xl gap-5 mb-5">
                {cardContent.map((content, index) => (
                    <div key={index} className="flex flex-col p-3">
                        <p className="text-[#606060] text-sm font-normal text-left">{content.title}</p>
                        <h2 className="text-black text-2xl font-medium">{content.value}</h2>
                    </div>
                ))}
                {/* DOWNLOAD RECEIPT */}
                <div className="py-3">
                    <Button className="bg-customRed text-white w-auto mt-2 hover:!bg-gray-100 hover:!text-customRed hover:border-customRed">
                        Download Receipt{" "}
                    </Button>
                </div>
            </div>

            {/* CARD BODY */}
            <div className=" border border-[#afafaf] rounded-lg flex flex-col items-center p-5 w-full gap-3">
                <div className="flex justify-start text-left border border-b-[rgb(175,175,175)] border-l-0 border-r-0  border-t-0 w-full p-3">
                    <span className="text-xl font-medium">Booking Details</span>
                </div>
                {/* 1ST ROW */}
                <div className="flex flex-row justify-between w-full p-2">
                    <div>
                        <span className="font-medium text-base text-customGray">Product</span>
                    </div>
                    <div>
                        <span className="font-medium text-base text-customGray">Sub-total</span>
                    </div>
                </div>
                {/* 2ND ROW */}
                <div className="flex flex-row justify-between items-center w-full py-3 border border-b-[rgb(175,175,175)] border-l-0 border-r-0  border-t-0">
                    <div className="flex flex-row justify-start">
                        <Image src={christmas_goat} alt="christmas goat" height={100} width={100} />
                        <div className="flex flex-col justify-center gap-2 p-3">
                            <h1 className="text-2xl font-medium">Christmas Goat</h1>
                            <p className="text-[#606060] text-sm"> Slot 3</p>
                        </div>
                    </div>
                    <p className="text-[20px] font-medium">&#8358; 35,000</p>
                </div>
                {/* 3RD ROW */}
                <div className="flex flex-row justify-between w-full p-2">
                    <div>
                        <span className="font-medium text-base text-customGray">Delivery</span>
                    </div>
                    <div>
                        <span className="font-medium text-base text-black">&#8358; 20,000</span>
                    </div>
                </div>
                <div className="flex flex-row justify-between w-full p-2">
                    <div>
                        <span className="font-medium text-base text-customGray">TAX</span>
                    </div>
                    <div>
                        <span className="font-medium text-base text-black">&#8358; 2,100</span>
                    </div>
                </div>
                <div className="flex flex-row justify-between w-full p-2  border border-b-[rgb(175,175,175)] border-l-0 border-r-0  border-t-0">
                    <div>
                        <span className="font-medium text-base text-customGray">Coupon</span>
                    </div>
                    <div>
                        <span className="font-medium text-base text-black">-&#8358; 0,000</span>
                    </div>
                </div>
                <div className="flex flex-row justify-between w-full p-2">
                    <div>
                        <span className="font-bold text-base text-customGray">Total</span>
                    </div>
                    <div>
                        <span className="font-bold text-base text-black">&#8358; 0,000</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Page;
// To view this page go to: "http://localhost:3000/allpages/users/buyer/booking-complete"
