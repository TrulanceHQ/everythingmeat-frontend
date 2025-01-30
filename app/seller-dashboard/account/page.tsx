"use client";

import { FaRegUserCircle, FaUserFriends,FaAngleLeft, FaEnvelope, FaPhone,FaBell } from "react-icons/fa";
import { FiUser, FiEdit3 } from "react-icons/fi";

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navbar */}
      <div className="bg-red-700 text-white py-2 text-center text-sm">
        Sign up to promote your livestock for meat sharing. <span className="font-bold">Sign up now</span>
      </div>
      {/* Main Container */}
     
      <div  className="bg-white text-black p-4 flex justify-between items-center">
      <img
              src="/everything_meat_logo.png"
              alt="everythingmeat logo"
            />
        <div className="flex items-center space-x-6">
          <div>
          <p className='text-s'>Balance: </p>
          <p className="font-bold text-xl text-red-700">₦150,000</p>
          </div>
          <div className="flex items-center space-x-2">
          <img
              src="/Group 26.png"
              alt="menu icon"
              className="w-8 h-8 "
            />
          <FaBell className="w-6 h-6 text-red-700" />
          
            <img
              src="/Ellipse 62.png"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="w-3/4 m-auto p-8 space-8 justify text-center bg-grey-700">
      <button className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
      <FaAngleLeft className="w-4 h-4 mr-2" />
                    Back
                  </button>
            <h2 className="text-2xl font-bold mb-4">My Account</h2>
            <p className="text-gray-500 mb-6">Home / My account</p>
        </div>

      {/* Account Section */}
      <div className="max-w-7xl mx-auto p-6 bg-white ">
        <div className="flex gap-8 bg-white">
          {/* Left Sidebar */}
          <div className="w-1/4 rounded-lg">
            <ul className="space-y-2 py-4">
              <li className="text-black px-4 bg-yellow-500 rounded-lg py-2 font-semibold">Personal Information</li>
              <li className="bg-white px-4 py-2 cursor-pointer rounded-lg border border-black
              ">My Product</li>
              <li className="bg-white px-4 py-2 cursor-pointer border border-black rounded-lg">Orders</li>
              <li className="bg-white px-4 py-2 cursor-pointer border border-black rounded-lg">Withdrawal History</li>
              <li className="bg-white px-4 py-2 cursor-pointer border border-black rounded-lg">Change Password</li>
              <li className="bg-white px-4 py-2 cursor-pointer border border-black rounded-lg">Log Out</li>
            </ul>
          </div>

        
          <div>
            <div className="relative w-24 h-24 mb-6">
            <img
              src="/Ellipse 62.png"
              alt="User Avatar"
              className="w-24 h-24 rounded-full"
            />
             <button className="absolute bottom-0 right-0 bg-red-600 text-white p-2 rounded-full">
                <FiEdit3 size={14} />
              </button>
            </div>

            <form className="space-y-6 bg-white p-6">
  <div className="grid grid-cols-2 gap-4">
    {/* First Name */}
    <div>
      <label className="block text-sm font-medium mb-1">
        First Name <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center border rounded-lg px-3 py-2">
        <FaRegUserCircle className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Ade"
          className="w-full focus:outline-none"
        />
      </div>
    </div>
    
    {/* Last Name */}
    <div>
      <label className="block text-sm font-medium mb-1">
        Last Name <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center border rounded-lg px-3 py-2">
        <FaRegUserCircle className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Love"
          className="w-full focus:outline-none"
        />
      </div>
    </div>

    {/* Email Address */}
    <div className="col-span-2">
      <label className="block text-sm font-medium mb-1">
        Email Address <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center border rounded-lg px-3 py-2">
        <FaEnvelope className="text-gray-400 mr-2" />
        <input
          type="email"
          placeholder="youremail@mail.com"
          className="w-full focus:outline-none"
        />
      </div>
    </div>

    {/* Phone Number */}
    <div>
      <label className="block text-sm font-medium mb-1">
        Phone Number <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center border rounded-lg px-3 py-2">
        <FaPhone className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="1234567890"
          className="w-full focus:outline-none"
        />
      </div>
    </div>

    {/* Optional Phone Number */}
    <div>
      <label className="block text-sm font-medium mb-1">
        Phone Number (Optional)
      </label>
      <div className="flex items-center border rounded-lg px-3 py-2">
        <FaPhone className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="1234567890"
          className="w-full focus:outline-none"
        />
      </div>
    </div>

    {/* User Type */}
    <div>
      <label className="block text-sm font-medium mb-1">
        User Type <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center border rounded-lg px-3 py-2">
        <FiUser className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Seller"
          className="w-full focus:outline-none"
        />
      </div>
    </div>

    {/* Gender */}
    <div>
      <label className="block text-sm font-medium mb-1">
        Gender <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center border rounded-lg px-3 py-2">
        <FaUserFriends className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Male"
          className="w-full focus:outline-none"
        />
      </div>
    </div>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="bg-red-600 text-white py-2 px-8 rounded-md hover:bg-red-700"
  >
    Update Now
  </button>
</form>

          </div>
          </div>
        
      </div>
    </div>
  );
}
