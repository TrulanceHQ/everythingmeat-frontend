"use client";
import React from "react";
import { FaUser, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp, FaTimes } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formFields = [
  { id: "name", label: "Full Name", placeholder: "Ade Peter", type: "text", icon: <FaUser /> },
  { id: "email", label: "Email Address", placeholder: "yourmail@email.com", type: "email", icon: <FaEnvelope /> },
  { id: "subject", label: "Subject", placeholder: "Enter Subject", type: "text" },
  { id: "message", label: "Message", placeholder: "Enter Message", type: "textarea" },
];

const GetForm = () => {
  return (
    <div className="container px-6 py-12 grid lg:grid-cols-2 gap-8 items-start bg-white">
      {/* Left Section: Contact Form */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
        <p className="text-gray-600 mb-6">
          Send us a message and let&#x27;s make things happen together.
        </p>

        <form className="space-y-4">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {formFields.slice(0, 2).map((field) => (
              <div key={field.id} className="relative">
                <label htmlFor={field.id} className="block text-sm font-medium mb-1">
                  {field.label}
                </label>
                <div className="relative">
                  {field.icon && (
                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                      {field.icon}
                    </span>
                  )}
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    className={`w-full h-14 ${field.icon ? "pl-10" : ""}`}
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
              className="w-full h-14"
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
              className="w-full h-52"
            />
          </div>

          <Button type="submit" className="bg-red-700 hover:bg-red-800 text-white px-6 py-2">
            Send
          </Button>
        </form>
      </div>

      {/* Right Section: Contact Info */}
      <div className="bg-red-700 text-white p-6 rounded-md">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold mb-1">Address</h3>
            <p>41 CMD Read Magodo/ Secretariat, Lagos Nigeria.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1">Contact</h3>
            <p>Phone: +234 809 846 8885</p>
            <p>Email: everythingmeatng@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1">Working Time</h3>
            <p>Monday - Friday: 8:00 am - 5:00 pm</p>
            <p>Saturday - Sunday: 12:00 pm - 5:00 pm</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4 text-xl">
              <FaFacebook />
              <FaInstagram />
              <FaWhatsapp />
              <FaTimes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetForm;
