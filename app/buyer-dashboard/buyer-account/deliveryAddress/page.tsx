"use client";
import React, {useState} from "react";
import {Button, Label, TextInput} from "flowbite-react";
import {PiPencilSimpleLine} from "react-icons/pi";
import {FaRegTrashCan} from "react-icons/fa6";
import {IoHome} from "react-icons/io5";
import {CiLocationOn} from "react-icons/ci";
import {CiGlobe} from "react-icons/ci";
import {FaRegEnvelope} from "react-icons/fa";
import {FaPhone} from "react-icons/fa6";
interface Address {
    id: number;
    HomeAddress: string;
    ClosetLandmark: string;
    State: string;
    emailAddress: string;
    PhoneNo: number;
    PhoneNoAlt: number;
}
const Page = () => {
    const DeliveryAddress: Address[] = [
        {
            id: 1,
            HomeAddress: "41 CMD Road, Magodo, Lagos",
            ClosetLandmark: "Secetariat Bridge",
            State: "Lagos",
            emailAddress: "buyer1@email.com",
            PhoneNo: +2348122923454,
            PhoneNoAlt: +2349072348723,
        },
        {
            id: 2,
            HomeAddress: "41 CMD Road, Magodo, Lagos",
            ClosetLandmark: "Secetariat Bridge",
            State: "Lagos",
            emailAddress: "buyer1@email.com",
            PhoneNo: +2348122923454,
            PhoneNoAlt: +2349072348723,
        },
    ];
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    return (
        <div className="mb-2 w-full lg:w-[800px] md:w-[400px] flex flex-col gap-2">
            {/* SHOW REGISTERED ADDRESS */}
            <div className="border border-customGray flex flex-col rounded-xl p-3 w-full">
                {DeliveryAddress.map((address, index) => (
                    <div key={address.id}>
                        <div className="flex flex-col justify-center md:flex-row md:justify-between py-2">
                            <div className="">
                                <h2 className="text-base font-medium">{address.HomeAddress}</h2>
                                <div className="flex flex-row gap-2 text-customGray">
                                    <p>
                                        <span className="text-sm font-bold">Landmark:</span> {address.ClosetLandmark}
                                    </p>
                                    <p>
                                        <span className="text-sm font-bold">State:</span> {address.State}
                                    </p>
                                </div>
                            </div>
                            {/* ICONS */}
                            <div className="flex flex-row gap-3 p-2">
                                <a className="text-black hover:cursor-pointer">
                                    <PiPencilSimpleLine />
                                    <span>Edit</span>
                                </a>
                                <a className="text-red-400 hover:cursor-pointer">
                                    <FaRegTrashCan /> <span>Delete</span>
                                </a>
                            </div>
                        </div>
                        {index !== DeliveryAddress.length - 1 ? <hr className="border border-customGray" /> : null}
                    </div>
                ))}
            </div>
            {/* ADD NEW ADDRESS */}
            <div className="flex flex-col justify-start text-left my-3">
                <h1 className="text-3xl font-bold">Add New Address</h1>
                <p className="text-sm font-normal">Please provide an accurate address.</p>
            </div>
            {/* ADDRESS FORM */}
            <form className="flex flex-col gap-3 justify-center w-full">
                {/* Home Address */}
                <div className="flex flex-col gap-2">
                    <Label htmlFor="HomeAddress">Home Address</Label>
                    <TextInput
                        placeholder="No 9, Tosin street Webcon."
                        required
                        id="HomeAddress"
                        icon={IoHome}
                        className="w-full"
                    />
                </div>
                {/* Closet Land Mark and State */}
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="flex flex-col gap-2 w-1/2">
                        <Label htmlFor="ClosetLandmark">Closest Landmark</Label>
                        <TextInput placeholder="Type here" id="ClosetLandmark" icon={CiLocationOn} />
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <Label htmlFor="State">State</Label>
                        <TextInput placeholder="Enter your state" icon={CiGlobe} />
                    </div>
                </div>
                {/* Email Address */}
                <div className="w-full flex flex-col gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <TextInput placeholder="Enter your email address" id="email" icon={FaRegEnvelope} />
                </div>
                {/* PHONE NUMBER AND ALT PHONE NUMBER */}
                <div className="flex flex-col lg:flex-row gap-3">
                    <div className="flex flex-col gap-2 w-1/2">
                        <Label htmlFor="PhoneNo">Phone Number</Label>
                        <TextInput placeholder="123456789" icon={FaPhone} required />
                    </div>
                    <div className="flex flex-col gap-2 w-1/2">
                        <Label htmlFor="PhoneNoAlt">
                            Phone Number<span className="font-light">(Optional)</span>{" "}
                        </Label>
                        <TextInput placeholder="123456789" icon={FaPhone} />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="flex flex-row gap-1 items-center">
                        <input
                            type="radio"
                            id="homeDelivery"
                            name="deliveryOption"
                            value="homeDelivery"
                            checked={selectedOption === "homeDelivery"}
                            onChange={() => setSelectedOption("homeDelivery")}
                            className="hidden"
                        />
                        <label
                            htmlFor="homeDelivery"
                            className={`cursor-pointer flex items-center gap-1 ${
                                selectedOption === "homeDelivery"
                                    ? "bg-customRed text-black font-medium"
                                    : "bg-white text-customGray font-normal"
                            } rounded-md p-2`}
                        >
                            <span
                                className={`w-4 h-4 border-2 border-gray-300 rounded-full ${
                                    selectedOption === "homeDelivery" ? "bg-customRed" : "bg-white"
                                }`}
                            ></span>
                            Home Delivery
                        </label>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <input
                            type="radio"
                            id="pickupCenter"
                            name="deliveryOption"
                            value="pickupCenter"
                            checked={selectedOption === "pickupCenter"}
                            onChange={() => setSelectedOption("pickupCenter")}
                            className="hidden"
                        />
                        <label
                            htmlFor="pickupCenter"
                            className={`cursor-pointer flex items-center gap-1 ${
                                selectedOption === "pickupCenter"
                                    ? "bg-customRed text-black font-medium"
                                    : "bg-white text-customGray font-normal"
                            } rounded-md p-2`}
                        >
                            <span
                                className={`w-4 h-4 border-2 border-gray-300 rounded-full ${
                                    selectedOption === "pickupCenter" ? "bg-customRed" : "bg-white"
                                }`}
                            ></span>
                            Pick up center
                        </label>
                    </div>
                </div>
                <div className="flex items-start justify-start">
                    <Button className="!bg-customRed p-1 w-1/2 mx-auto">Add Address</Button>
                </div>
            </form>
        </div>
    );
};

export default Page;
// To view this page go to: "http://localhost:3000/buyer-dashboard/buyer-account/deliveryAddress"
