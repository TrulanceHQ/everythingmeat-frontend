"use client";
import React, {useState} from "react";
import {Button, Label, TextInput} from "flowbite-react";
import {FaRegCircleUser} from "react-icons/fa6";
import {IoHome} from "react-icons/io5";
import {CiLocationOn} from "react-icons/ci";
import {CiGlobe} from "react-icons/ci";
import {FaRegEnvelope} from "react-icons/fa";
import {FaPhone} from "react-icons/fa6";

const Page = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    return (
        <div className="w-[300px] lg:max-w-[900px] lg:min-w-[700px] md:w-[550px] flex flex-col gap-2 md:m-8 p-3 m-auto">
            {/* DELIVERY ADDRESS DETAILS */}
            <div className="flex flex-col justify-center md:justify-start text-left my-3">
                <h1 className="text-xl md:text-3xl font-bold">Delivery Details</h1>
                <p className="text-sm font-normal">
                    Please provide an accurate delivery details to ensure prompt and secure reciept of your booking.
                </p>
            </div>
            {/* ADDRESS FORM */}
            <form className="flex flex-col gap-3 justify-center w-full">
                {/* FIRST & LAST NAME */}
                <div className="flex flex-col lg:flex-row lg:justify-between justify-center items-center  px-2 py-10 gap-2 w-full">
                    {/* FIRST NAME */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="First_name" value="First Name" />
                        </div>
                        <TextInput id="First_name" type="text" icon={FaRegCircleUser} placeholder="Ade" required />
                    </div>
                    {/* LAST NAME */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="Last_name" value="Last Name" />
                        </div>
                        <TextInput id="Last_name" type="text" icon={FaRegCircleUser} placeholder="Love" required />
                    </div>
                </div>
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
                {/* Email Address */}
                <div className="w-full flex flex-col gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <TextInput placeholder="Enter your email address" id="email" icon={FaRegEnvelope} />
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
// To view this page go to: "http://localhost:3000/buyer-dashboard/delivery-details"
