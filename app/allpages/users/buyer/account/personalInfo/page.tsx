"use client";
import Image from "next/image";
import React, {useState} from "react";
import {Label, TextInput, Select} from "flowbite-react";
import {FaRegCircleUser} from "react-icons/fa6";
import {HiOutlineMail} from "react-icons/hi";
import {CiPhone} from "react-icons/ci";
import {BiUserPin} from "react-icons/bi";
import {FiUsers} from "react-icons/fi";
import profile_img from "@/public/buyersImage/profile_img.jpeg";
import profile_icon from "@/public/buyersImage/profile_icon.jpg";
import {Button} from "@/components/ui/button";

const Page = () => {
    const [image, setImage] = useState<File | null>(null);
    const fileInputRef = React.createRef<HTMLInputElement>();
    const handleImageClick = () => {
        fileInputRef.current?.click();
    };
    return (
        <div className="mb-2 w-full lg:w-[930px]">
            <form className="p-2 flex flex-col gap-2">
                {/* PROFILE IMG */}
                <div className="mb-2">
                    <Image
                        src={image ? URL.createObjectURL(image) : profile_img}
                        alt="profile Img"
                        className="rounded-full w-28 h-28 object-cover"
                        onClick={handleImageClick}
                        width={112}
                        height={112}
                    />
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={(e) => setImage((e.target as HTMLInputElement).files?.[0] || null)}
                        hidden
                        className="hover:cursor-pointer"
                    />
                    <Image
                        src={profile_icon}
                        alt="Profile Icon"
                        className="z-10 relative bottom-12 rounded-full left-24"
                        onClick={handleImageClick}
                    />
                </div>
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
                {/* EMAIL */}
                <div className="w-full py-1">
                    <div className="mb-1 block">
                        <Label htmlFor="email" value="Email Address" />
                    </div>
                    <TextInput
                        id="email"
                        type="email"
                        rightIcon={HiOutlineMail}
                        placeholder="youremail@mail.com"
                        required
                    />
                </div>
                {/* PHONE NUMBER AND ALT PHONE  */}
                <div className="flex flex-col lg:flex-row  lg:justify-between justify-center items-center px-2 py-10 gap-2 w-full">
                    {/* PHONE NUMBER */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="Phone_no" value="Phone Number" />
                        </div>
                        <TextInput id="Phone_no" type="text" icon={CiPhone} placeholder="123456789" required />
                    </div>
                    {/* Alt phone */}
                    <div className="w-full lg:w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="Phone_no_alt" value="Phone Number (optional)" />
                        </div>
                        <TextInput id="Phone_no_alt" type="text" icon={CiPhone} placeholder="123456789" />
                    </div>
                </div>
                {/* USER TYPE AND GENDER */}
                <div className="flex flex-col lg:flex-row justify-between px-2 py-10 gap-2 w-full">
                    {/* User type */}
                    <div className="w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="User_type" value="User Type" />
                        </div>
                        <Select id="User_type" required icon={BiUserPin}>
                            <option>Buyer</option>
                            <option>Seller</option>
                        </Select>
                    </div>
                    {/* Gender */}
                    <div className="w-1/2">
                        <div className="mb-2 block">
                            <Label htmlFor="Gender" value="Gender" />
                        </div>
                        <Select id="User_type" required icon={FiUsers}>
                            <option>Male</option>
                            <option>Female</option>
                        </Select>
                    </div>
                </div>
                {/* Submit Button */}
                <Button className="bg-red-700 text-white rounded-md flex items-start w-64 p-3 gap-2">Submit</Button>
            </form>
        </div>
    );
};
export default Page;
