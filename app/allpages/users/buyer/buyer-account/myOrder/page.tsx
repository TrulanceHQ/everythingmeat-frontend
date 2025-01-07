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
        <div className=" w-full lg:w-[930px] flex flex-col">
            {/* CARD HEADER */}
            <div className="bg-customOrange hidden lg:flex flex-row justify-around rounded-t-3xl gap-3">
                {cardContent.map((content, index) => (
                    <div key={index} className="flex flex-col p-3">
                        <p className="text-[#606060] text-sm font-normal text-left">{content.title}</p>
                        <h2 className="text-black text-2xl font-medium">{content.value}</h2>
                    </div>
                ))}
            </div>
            {/* CARD BODY */}
            <div className=" border border-t-0 rounded-b-3xl flex flex-col lg:flex-row justify-center items-center lg:justify-between p-5">
                <div className="flex flex-row">
                    <Image src={christmas_goat} alt="christmas goat" height={100} width={100} />
                    <div className="flex flex-col justify-center gap-2 p-3">
                        <h1 className="text-2xl font-medium">Christmas Goat</h1>
                        <p className="text-[#606060] text-sm"> Slot 3</p>
                    </div>
                </div>
                <p className="text-[20px] font-medium">&#8358; 35,000</p>
            </div>
            <div className="mt-5 py-3">
                <input type="checkbox" className="h-5 w-5 checked:bg-customRed py-2" />{" "}
                <span>Your order has been accepted.</span>
                <Button className="bg-customRed text-white w-1/4 mt-2 hover:!bg-gray-100 hover:!text-customRed hover:border-customRed">
                    Download Receipt{" "}
                </Button>
            </div>
        </div>
    );
}
export default Page;
// To view this page go to: "http://localhost:3000/allpages/users/buyer/buyer-account/myOrder"