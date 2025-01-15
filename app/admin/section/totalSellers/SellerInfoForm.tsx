import React from "react";
import { FiPhone } from "react-icons/fi";
import { IoMdContact } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { BiUserPin } from "react-icons/bi";

type SellerInfo = {
  firstName: string;
  lastName: string;
  email: string;
  stocksSold: number;
  registered: string;
  phoneNumber: string;
  optionalPhoneNumber?: string;
  userType: string;
  gender: string;
  active: boolean;
};

type Props = {
  sellerInfo: SellerInfo[];
};

const SellerInfoForm = ({ sellerInfo }: Props) => {
  return (
    <div className="my-8 w-full">
      {sellerInfo.map((info, index) => (
        <div key={index} className="mb-4 w-full">
          <div className="flex flex-col w-full space-y-6">
            <div className="flex space-x-4">
              {/* First Name */}
              <div className="w-1/2">
                <label
                  htmlFor={`firstName-${index}`}
                  className="block text-base font-medium text-[#101010] py-1"
                >
                  First Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoMdContact className="text-gray-400 w-6 h-6" />
                  </div>
                  <input
                    type="text"
                    name={`firstName-${index}`}
                    id={`firstName-${index}`}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-[#878787] focus:outline-none focus:ring-1 focus:ring-[#FFBA35] focus:border-[#FFBA35] sm:text-sm"
                    placeholder=""
                    value={info.firstName}
                    disabled
                  />
                </div>
              </div>
              {/* Last Name */}
              <div className="w-1/2">
                <label
                  htmlFor={`lastName-${index}`}
                  className="block text-base font-medium text-[#101010] py-1"
                >
                  Last Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoMdContact className="text-gray-400 w-6 h-6" />
                  </div>
                  <input
                    type="text"
                    name={`lastName-${index}`}
                    id={`lastName-${index}`}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-[#878787] focus:outline-none focus:ring-1 focus:ring-[#FFBA35] focus:border-[#FFBA35] sm:text-sm"
                    placeholder=""
                    value={info.lastName}
                    disabled
                  />
                </div>
              </div>
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor={`email-${index}`}
                className="block text-base font-medium text-[#101010] py-1"
              >
                Email Address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MdOutlineMail className="text-gray-400 w-6 h-6" />
                </div>
                <input
                  type="text"
                  name={`email-${index}`}
                  id={`email-${index}`}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-[#878787] focus:outline-none focus:ring-1 focus:ring-[#FFBA35] focus:border-[#FFBA35] sm:text-sm"
                  placeholder=""
                  value={info.email}
                  disabled
                />
              </div>
            </div>
            {/* Phone Number  */}
            <div className="flex space-x-4">
              {/* Phone Number */}
              <div className="w-1/2">
                <label
                  htmlFor={`phoneNumber-${index}`}
                  className="block text-base font-medium text-[#101010] py-1"
                >
                  Phone Number
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPhone className="text-gray-400 w-6 h-6" />
                  </div>
                  <input
                    type="text"
                    name={`phoneNumber-${index}`}
                    id={`phoneNumber-${index}`}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-[#878787] focus:outline-none focus:ring-1 focus:ring-[#FFBA35] focus:border-[#FFBA35] sm:text-sm"
                    placeholder=""
                    value={info.phoneNumber}
                    disabled
                  />
                </div>
              </div>
              {/* Phone Number (Optional) */}
              <div className="w-1/2">
                <label
                  htmlFor={`optionalPhoneNumber-${index}`}
                  className="block text-base font-medium text-[#101010] py-1"
                >
                  Phone Number (Optional)
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiPhone className="text-gray-400 w-6 h-6" />
                  </div>
                  <input
                    type="text"
                    name={`optionalPhoneNumber-${index}`}
                    id={`optionalPhoneNumber-${index}`}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-[#878787] focus:outline-none focus:ring-1 focus:ring-[#FFBA35] focus:border-[#FFBA35] sm:text-sm"
                    placeholder=""
                    value={info.optionalPhoneNumber}
                    disabled
                  />
                </div>
              </div>
            </div>
            {/* UserType and Gender  */}
            <div className="flex space-x-4">
              {/* User Type */}
              <div className="w-1/2">
                <label
                  htmlFor={`userType-${index}`}
                  className="block text-base font-medium text-[#101010] py-1"
                >
                  User Type
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BiUserPin className="text-gray-400 w-6 h-6" />
                  </div>
                  <input
                    type="text"
                    name={`userType-${index}`}
                    id={`userType-${index}`}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-[#878787] focus:outline-none focus:ring-1 focus:ring-[#FFBA35] focus:border-[#FFBA35] sm:text-sm"
                    placeholder=""
                    value={info.userType}
                    disabled
                  />
                </div>
              </div>
              {/* Gender */}
              <div className="w-1/2">
                <label
                  htmlFor={`gender-${index}`}
                  className="block text-base font-medium text-[#101010] py-1"
                >
                  Gender
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <BsPeople className="text-gray-400 w-6 h-6" />
                  </div>
                  <input
                    type="text"
                    name={`gender-${index}`}
                    id={`gender-${index}`}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-[#878787] focus:outline-none focus:ring-1 focus:ring-[#FFBA35] focus:border-[#FFBA35] sm:text-sm"
                    placeholder=""
                    value={info.gender}
                    disabled
                  />
                </div>
              </div>
            </div>
            {/* Stocks and Register */}
            <div className="flex space-x-4">
              {/* Stocks Sold */}
              <div className="w-1/2">
                <label
                  htmlFor={`stocksSold-${index}`}
                  className="block text-base font-medium text-[#101010] py-1"
                >
                  Stocks Sold
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoMdContact className="text-gray-400 w-6 h-6" />
                  </div> */}
                  <input
                    type="text"
                    name={`stocksSold-${index}`}
                    id={`stocksSold-${index}`}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-[#878787] focus:outline-none focus:ring-1 focus:ring-[#FFBA35] focus:border-[#FFBA35] sm:text-sm"
                    placeholder=""
                    value={info.stocksSold}
                    disabled
                  />
                </div>
              </div>
              {/* Registered */}
              <div className="w-1/2">
                <label
                  htmlFor={`registered-${index}`}
                  className="block text-base font-medium text-[#101010] py-1"
                >
                  Registered
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoMdContact className="text-gray-400 w-6 h-6" />
                  </div> */}
                  <input
                    type="text"
                    name={`registered-${index}`}
                    id={`registered-${index}`}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-[#878787] focus:outline-none focus:ring-1 focus:ring-[#FFBA35] focus:border-[#FFBA35] sm:text-sm"
                    placeholder=""
                    value={info.registered}
                    disabled
                  />
                </div>
              </div>
            </div>
            {/* Deactivate and Delete Buttons */}
            <div className="flex space-x-4">
              <button
                type="button"
                className={`w-1/3 py-2 px-4 border  text-sm font-medium rounded-md  bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  info.active
                    ? " text-customRed border-customRed hover:bg-red-300 hover:text-white hover:border-red-50 focus:ring-red-500"
                    : "text-green-600 border-green-600 hover:bg-green-300  hover:text-white focus:ring-green-500 hover:border-green-300"
                }`}
              >
                {info.active ? "Deactivate Account" : "Activate Account"}
              </button>
              <button
                type="button"
                className="w-1/3 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-customRed hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SellerInfoForm;
