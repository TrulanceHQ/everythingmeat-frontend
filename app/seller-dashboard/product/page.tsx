"use client";

import { FaBell,FaFilter,FaAngleDown,FaPen,FaTrash, FaAngleLeft, FaAngleRight } from "react-icons/fa";


export default function MyAccount() {
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

 {/* Account Section */}
 
 <div className="max-w-7xl mx-auto p-6 bg-white ">
 <div className="flex gap-8 bg-white ">
          {/* Left Sidebar */}
          <div className="w-1/4 rounded-lg">
            <ul className="space-y-2 py-4">
              <li className="text-black px-4 bg-white  cursor-pointer  border border-black font rounded-lg py-2 "> Personal Information</li>
              <li className=" px-4 py-2 -semibold rounded-lg bg-yellow-500
              ">My Product</li>
              <li className="bg-white px-4 py-2 cursor-pointer border border-black rounded-lg">Orders</li>
              <li className="bg-white px-4 py-2 cursor-pointer border border-black rounded-lg">Withdrawal History</li>
              <li className="bg-white px-4 py-2 cursor-pointer border border-black rounded-lg">Change Password</li>
              <li className="bg-white px-4 py-2 cursor-pointer border border-black rounded-lg">Log Out</li>
            </ul>
        </div>
        
    <div>   
    <div className="flex justify-between items-center mb-4 pt-4">
        <div>
      <h3 className="text-lg font-bold">Product List</h3>
      <p>List of product upload so far</p>
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
    <div className="overflow-x-auto">
  <table className="min-w-full bg-white">
    <thead className="bg-gray-100">
      <tr>
        {[
          'Product ID',
          'Product Name',
          'Gross Price',
          'Net Price',
          'Total Slot',
          'Available Slot',
        ].map((header, index) => (
          <th
            key={index}
            className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b border-gray-300"
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
          net: '₦150,000',
          total: 4,
          available: 0,
        },
        {
          id: '12345AZ',
          name: 'Live Cow',
          gross: '₦300,000',
          net: '₦370,000',
          total: 4,
          available: 4,
        },
        {
          id: '23768EQ',
          name: 'Frozen Chicken Wings',
          gross: '₦70,000',
          net: '₦85,000',
          total: 5,
          available: 3,
        },
        {
          id: '67914XW',
          name: 'Live Goat',
          gross: '₦100,000',
          net: '₦150,000',
          total: 4,
          available: 1,
        },
        {
          id: '34791ZB',
          name: 'Frozen Chicken Laps',
          gross: '₦100,000',
          net: '-----------------',
          total: 0,
          available: 0,
        },
        {
          id: '41235FG',
          name: 'Live Goat',
          gross: '₦150,000',
          net: '₦170,000',
          total: 4,
          available: 1,
        },
        {
          id: '81235HY',
          name: 'Frozen Full Chicken',
          gross: '₦120,000',
          net: '₦150,000',
          total: 4,
          available: 0,
        },
      ].map((product, index) => (
        <tr
          key={index}
          className="bg-white border-b border-gray-300 hover:bg-gray-50"
        >
          <td className="px-4 py-2 text-sm text-gray-700">{product.id}</td>
          <td className="px-4 py-2 text-sm text-gray-700">{product.name}</td>
          <td className="px-4 py-2 text-sm text-gray-700">{product.gross}</td>
          <td className="px-4 py-2 text-sm text-gray-700">{product.net}</td>
          <td className="px-4 py-2 text-sm text-gray-700">{product.total}</td>
          <td className="px-4 py-2 text-sm text-gray-700">{product.available}</td>
             {/* Action icons */}
             <td className="px-4 py-2 text-sm text-gray-700 flex space-x-2">
            {/* Edit Icon */}
            <button className="text-white p-2 flex items-center w-7 h-7 border border-red-700 rounded-full bg-red-700 ">
              <FaPen className="w-3 h-3" />
            </button>
            
            {/* Delete Icon */}
            <button className="text-white p-2 flex items-center w-7 h-7 border border-red-700 rounded-full bg-red-700 ">
              <FaTrash className="w-3 h-3" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  </div>
</div>
<div className="flex justify-center mt-4 pt-6 ">
  <FaAngleLeft className="w-10 h-10  ml-2 cursor-pointer" aria-label="Previous page" />
  
  {/* Page number buttons */}
  <p className="p-3 text-lg text-white border border-red-700 rounded-full bg-red-700 w-10 h-10 flex items-center cursor-pointer">
    1
  </p>
  <p className="p-3 text-lg text-black cursor-pointer rounded-full  w-10 h-10 flex items-center hover:bg-gray-200">2</p>
  <p className="p-3 text-lg text-black cursor-pointer rounded-full  w-10 h-10 flex items-center hover:bg-gray-200">3</p>
  
  {/* Ellipsis */}
  <p className="p-3 rounded-full text-lg text-black  w-10 h-10 flex items-center">...</p>
  
  <p className="p-3 text-lg text-black rounded-full cursor-pointer  w-10 h-10 flex items-center hover:bg-gray-200">10</p>
  
  <FaAngleRight className=" ml-2 w-10 h-10 cursor-pointer" aria-label="Next page" />
</div>

</div>

</div>      
  );
}
