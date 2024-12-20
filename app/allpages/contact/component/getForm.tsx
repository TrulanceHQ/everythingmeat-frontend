"use client";
import React from "react";
import { FaRegUserCircle, FaFacebook } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formFields = [
  { id: "name", label: "Full Name", placeholder: "Ade Peter", type: "text", icon: <FaRegUserCircle /> },
  { id: "email", label: "Email Address", placeholder: "yourmail@email.com", type: "email", icon: <IoMailOutline /> },
  { id: "subject", label: "Subject", placeholder: "Enter Subject", type: "text" },
  { id: "message", label: "Message", placeholder: "Enter Message", type: "textarea" },
];

const GetForm = () => {
  return (
    <div className="w-full md:px-20 px-5 py-12 grid lg:grid-cols-2 gap-8 items-start bg-white">
      {/* Left Section: Contact Form */}
      <div>
        <h2 className="md:text-3xl text-2xl font-bold mb-2">Get In Touch</h2>
        <p className="mb-2 text-sm">
          Send us a message and let&#x27;s make things happen together.
        </p>
        <div className="w-14 border-b-4 border-customRed"></div>

        <form className="space-y-4 mt-10">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-20">
            {formFields.slice(0, 2).map((field) => (
              <div key={field.id} className="relative">
                <label htmlFor={field.id} className="block text-sm font-medium mb-1">
                  {field.label}
                </label>
                <div className="relative">
                  {field.icon && (
                    <span className="absolute inset-y-0 left-5 flex items-center text-gray-400 text-xl">
                      {field.icon}
                    </span>
                  )}
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    className={`w-full xl:w-[320px] h-14 border-2 shadow-none rounded-xl ${field.icon ? "pl-12" : ""}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              {formFields[2].label}
            </label>
            <Input
              id="subject"
              type="text"
              placeholder={formFields[2].placeholder}
              className="w-full xl:w-[650] h-14 border-2 shadow-none rounded-xl"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              {formFields[3].label}
            </label>
            <Textarea
              id="message"
              placeholder={formFields[3].placeholder}
              className="w-full xl:w-[650] h-52 border-gray-300 border-2 shadow-none rounded-xl"
            />
          </div>

          <Button type="submit" className="bg-customRed text-white md:px-28 px-20 py-6 hover:bg-customRed">
            Send
          </Button>
        </form>
      </div>

      {/* Right Section: Contact Info */}
      <div className="bg-customRed text-white p-12 lg:mt-[118] lg:ml-10 xl:ml-40 rounded-xl md:w-96 w-full h-[490]">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-1">Address</h3>
            <p className="text-sm">41 CMD Read Magodo/ Secretariat, Lagos Nigeria.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">Contact</h3>
            <p className="text-sm">Phone: +234 809 846 8885</p>
            <p className="text-sm">Email: everythingmeatng@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">Working Time</h3>
            <p className="text-sm">Monday - Friday: 8:00 am - 5:00 pm</p>
            <p className="text-sm">Saturday - Sunday: 12:00 pm - 5:00 pm</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4 text-xl">
              <span className="bg-[#FFBA35] p-2 rounded-full text-black cursor-pointer"><FaFacebook /></span>
              <span className="bg-[#FFBA35] p-2 rounded-full text-black cursor-pointer"><AiFillInstagram /></span>
              <span className="bg-[#FFBA35] p-2 rounded-full text-black cursor-pointer"><IoLogoWhatsapp /></span>
              <span className="bg-[#FFBA35] p-2 rounded-full text-black cursor-pointer"><FaXTwitter /></span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetForm;
