"use client"; 
import { FaBell } from "react-icons/fa";
import React from "react";

const Logout = () => {
  const handleLogout = () => {
    
    console.log("Logged out!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
    {/* Top Navbar */}
    <div className="bg-red-700 text-white py-2 text-center text-sm">
      Sign up to promote your livestock for meat sharing. <span className="font-bold text-yellow-500">Sign up now</span>
    </div>
    {/* Main Container */}
   
    <div  className="bg-white text-black p-4 flex justify-between items-center">
    <img
            src="/everything_meat_logo.png"
            alt="everythingmeat logo"
          />
          <button className=" bg-white-600 text-red-700 p-2 rounded-lg border border-red-700">Go to Dashboard</button>
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
                <h2 className="text-2xl font-bold mb-4">My Account</h2>
                <p className="text-gray-500 mb-6">Home / My account</p>
     </div>

     <div className="max-w-7xl mx-auto p-4 bg-white grid grid-cols-1 md:grid-cols-2 gap-2">
      {/* Left Sidebar (Account Section) */}
      <div className="bg-white rounded-lg w-full md:w-1/2">
        <ul className="space-y-2 py-4">
          <li className="bg-white px-4 py-2 cursor-pointer border border-black rounded-lg">
            Personal Information
          </li>
          <li className="bg-white px-4 py-2 cursor-pointer border border-black rounded-lg">
            My Product
          </li>
          <li className="bg-white px-4 py-2 cursor-pointer border border-black rounded-lg">
            Orders
          </li>
          <li className="bg-white px-4 py-2 cursor-pointer border border-black rounded-lg">
            Withdrawal History
          </li>
          <li className="bg-white px-4 py-2 cursor-pointer border border-black rounded-lg">
            Change Password
          </li>
          <li className="text-black px-4 bg-yellow-500 rounded-lg py-2 font-semibold">
            Log Out
          </li>
        </ul>
      </div>

      {/* Right Content (Log Out Section) */}
      <div className="bg-white rounded-lg p-4">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Log Out</h1>
          <p className="text-sm font-normal">Are you sure you want to log out?</p>
        </div>
        <div className="flex items-start justify-start py-2">
          <button
            onClick={handleLogout}
            className="bg-red-700 text-white p-2 w-1/4 rounded-md hover:bg-red-800 transition duration-200"
          >
            Yes, Log me out
          </button>
        </div>
      </div>
     </div> 
    </div>
    
  );
};

export default Logout;
