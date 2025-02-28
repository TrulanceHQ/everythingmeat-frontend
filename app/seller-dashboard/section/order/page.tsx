import React from "react";
import { FaAngleDown, FaBell, FaFilter } from "react-icons/fa";

const SellerOrderPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
       {/* Top Navbar */}
            <div className="bg-red-700 text-white py-2 text-center text-sm">
              Sign up to promote your livestock for meat sharing. <span className="font-bold text-yellow-500">Sign up now</span>
            </div>
            {/* Main Container */}
            <div className="bg-white text-black p-4 flex justify-between items-center">
              <img src="/everything_meat_logo.png" alt="everythingmeat logo" />
              <button className="bg-white-600 text-red-700 p-2 rounded-lg border border-red-700">Go to Dashboard</button>
              <div className="flex items-center space-x-6">
                <div>
                  <p className="text-s">Balance: </p>
                  <p className="font-bold text-xl text-red-700">₦150,000</p>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="/Group 26.png" alt="menu icon" className="w-8 h-8 " />
                  <FaBell className="w-6 h-6 text-red-700" />
                  <img src="/Ellipse 62.png" alt="User Avatar" className="w-8 h-8 rounded-full" />
                </div>
              </div>
            </div>

       {/* Account Section */}
       <div className="w-3/4 m-auto p-8 space-8 justify text-center bg-grey-700">
        <h2 className="text-2xl font-bold mb-4">My Account</h2>
        <p className="text-gray-500 mb-6">Home / My account</p>
      </div>
      
      <div classname="flex">
      <div className="max-w-7xl mx-auto p-6 bg-white ">
      <div className="flex gap-8 bg-white ">
        {/* Account Section (Left Sidebar) */}
        <div className="bg-white p-6 w-1/4 md:w-1/2">
          <ul className="space-y-2 py-4">
            <li className="bg-white px-4 py-2 cursor-pointer rounded-lg border border-black">Personal Information</li>
            <li className="bg-white px-4 py-2 cursor-pointer rounded-lg border border-black">My Product</li>
            <li className="text-black px-4 bg-yellow-500 rounded-lg py-2 font-semibold">Orders</li>
            <li className="bg-white px-4 py-2 cursor-pointer border border-black rounded-lg">Withdrawal History</li>
            <li className="bg-white px-4 py-2 cursor-pointer border border-black rounded-lg">Change Password</li>
            <li className="bg-white px-4 py-2 cursor-pointer border border-black rounded-lg">Log Out</li>
          </ul>
        </div>
    </div>

    <div>   
    <div className="flex justify-between items-center mb-4 pt-4">
        <div>
      <h3 className="text-lg font-bold">Order List</h3>
      <p>List of orders received</p>
      <hr className="border-t-4 border-red-700 w-1/2 my-4" />
      </div>
    
      <div className="flex items-center">
        <p className="flex items-center mr-4">
          <FaFilter className="w-4 h-4 mr-2" />
          Filter
        </p>
        <button className="px-4 py-2 border border-gray-300 text-gray-500 rounded-lg flex items-center">
          Name
          <FaAngleDown className="w-4 h-4 text-gray-500 ml-2" />
        </button>
      </div>
      </div>

      <table className="min-w-full border-collapse border border-gray-300 bg-white">
    <thead className="bg-white">
      <tr>
        {[
          'Product ID',
          'Product Name',
          'Gross Price',
          'Slot Taken',
          'Status',
        ].map((header, index) => (
          <th
            key={index}
            className="border border-gray-300 px-4 py-2 text-left bg-white"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody className="bg-white">
      {[
        {
          id: '12357DA',
          name: 'Live Goat',
          gross: '₦100,000',
          slot : 4,
          status: 'Delivered',
        },
        {
          id: '34791ZB',
          name: 'Frozen Chicken Laps',
          gross: '₦100,000',
          slot: 4,
          status: 'Pending',
        },
        {
            id: '81235HY',
            name: 'Frozen Full Chicken',
            gross: '-------',
            slot: 4,
            status: 'Cancel',
        },
        {
            id: '23768EQ',
            name: 'Frozen Chicken Wings',
            gross: '₦85,000',
            slot: 4,
            status: 'Delivered',
        },
        {
            id: '12357DA',
            name: 'Live Goat',
            gross: '₦100,000',
            slot: 4,
            status: 'Delivered',
        },
        {
            id: '34791ZB',
            name: 'Frozen Chicken Laps',
            gross: '₦100,000',
            slot: 4,
            status: 'Pending',
        },
        {
            id: '81235HY',
            name: 'Frozen Full Chicken',
            gross: '-------',
            slot: 4,
            status: 'Cancel',
        },
        {
            id: '23768EQ',
            name: 'Frozen Chicken Wings',
            gross: '₦85,000',
            slot: 4,
            status: 'Delivered',
        },
        {
            id: '12357DA',
            name: 'Live Goat',
            gross: '₦100,000',
            slot: 4,
            status: 'Delivered',
        },
        {
            id: '34791ZB',
            name: 'Frozen Chicken Laps',
            gross: '₦100,000',
            slot: 4,
            status: 'Pending',
        },

      ].map((product, index) => (
        <tr key={index} className="bg-white">
          <td className="border border-gray-300 px-4 py-6 text-sm">{product.id}</td>
          <td className="border border-gray-300 px-4 py-6 text-sm">{product.name}</td>
          <td className="border border-gray-300 px-4 py-6 text-sm">{product.gross}</td>
          <td className="border border-gray-300 px-4 py-6 text-sm">{product.slot}</td>
          <td
            className={`border border-gray-300 rounded-lg px-2 py-2 text-sm ${
              product.status === 'Delivered'
                ? 'text-green-600 bg-green-100 rounded-lg p-1'
                : product.status === 'Pending'
                ? 'text-yellow-600 bg-yellow-100 rounded-lg p-1'
                : 'text-red-600 bg-red-100 rounded-lg p-1'
            }`}
          >
            {product.status}
          </td>
        </tr>
      ))}
    </tbody>
  </table>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-4 space-x-2">
              <button className="px-3 py-1 rounded bg-gray-200">&lt;</button>
              <button className="px-3 py-1 rounded bg-red-600 text-white">1</button>
              <button className="px-3 py-1 rounded bg-gray-200">2</button>
              <button className="px-3 py-1 rounded bg-gray-200">3</button>
              <button className="px-3 py-1 rounded bg-gray-200">&gt;</button>
            </div>
        
        </div>
        </div>
    </div>
    </div>
    
  );
};

export default SellerOrderPage;
