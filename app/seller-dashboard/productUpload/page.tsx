
"use client";

import React, { useState } from "react";
import { FaBell, FaAngleLeft, FaRegUserCircle } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { TbFileUpload } from "react-icons/tb";
import { CiGlobe } from "react-icons/ci";


const ProductUpload = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productSize: "",
    slaughterDate: "",
    location: "",
    price: "",
    sharingSlot: "",
    agreeTerms: false,
    agreeHealth: false,
    agreePricing: false,
  });

  const [showMap, setShowMap] = useState(false);
  const [image, setImage] = useState(null);

  const handleInputChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (e: { target: { files: any[]; }; }) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleIconClick = () => setShowMap(true);
  const closeModal = () => setShowMap(false);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top Navbar */}
      <div className="bg-red-700 flex text-white py-2 text-center text-sm">
        <p>Call Us: +234 9012345578</p>
        <p>Welcome back, our dear customer</p>
      </div>

      {/* Main Container */}
      <div className="bg-white text-black p-4 flex justify-between items-center">
        <img src="/everything_meat_logo.png" alt="everythingmeat logo" />
        <div className="flex items-center space-x-6">
          <div>
            <p className="text-sm">Balance:</p>
            <p className="font-bold text-xl text-red-700">₦150,000</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src="/Group 26.png" alt="menu icon" className="w-8 h-8" />
            <FaBell className="w-6 h-6 text-red-700" />
            <img src="/Ellipse 62.png" alt="User Avatar" className="w-8 h-8 rounded-full" />
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="text-center">
        <button className="flex items-center px-4 py-2 mt-3 ml-6 bg-red-700 text-white rounded-lg hover:bg-red-700">
          <FaAngleLeft className="w-4 h-4 mr-2" />
          Back
        </button>
        <h2 className="text-2xl font-bold mt-4 pb-3">Product Upload</h2>
        <p>Dashboard / Product Upload</p>
      </div>

      {/* Product Form */}
      <main className="mx-auto bg-white shadow-md rounded mt-6 p-6">
        <h2 className="text-4xl font-bold mb-2">Product Details</h2>
        <p className="text-gray-500 mb-4">Please provide accurate details of the product.</p>
        <hr className="border-t-4 border-red-700 w-1/4 my-4 mx-auto ml-8" />

        <form>
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block font-semibold mb-1">Product Name</label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <FiBox className="text-gray-500 w-5 h-5 mr-2" />
                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  placeholder="Live Chicken"
                  className="flex-1 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1">Product Size</label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <RiCheckboxMultipleBlankLine className="w-5 h-5 text-gray-700 mr-2" />
                <input
                  type="text"
                  name="productSize"
                  value={formData.productSize}
                  onChange={handleInputChange}
                  placeholder="1235g"
                  className="flex-1 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Upload Health Certificate */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">
              Health Satisfaction 
              <span className="text-gray-500 text-sm">
                (Upload Veterinary Health Certificate)
              </span>
            </label>
            <button className="flex items-center justify-center bg-gray-200 px-4 py-2 rounded">
              Upload
              <TbFileUpload className="w-4 h-4 text-gray-700 mr-2" />
            </button>
          </div>

          {/* Date & Location */}
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block font-semibold mb-1">Slaughter & Process Date</label>
              <input
                type="date"
                name="slaughterDate"
                value={formData.slaughterDate}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Location</label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                <CiGlobe className="w-8 h-8 text-gray-700 cursor-pointer mr-2" onClick={handleIconClick} />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Agege Lagos"
                  className="flex-1 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Map Modal */}
          {showMap && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg w-full max-w-3xl">
                <h2 className="text-lg font-bold mb-4">Select Location</h2>
                <iframe
                  src="https://www.google.com/maps/embed..."
                  width="100%"
                  height="400"
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
                <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          )}
          
          {/* Price */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Product Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="₦000,000"
              className=" border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Other Cost</h2>
            <p>Slaughtering and Processing Cost : ₦10,000</p>
            <p>Delivery Cost  (Within Lagos): ₦15,000</p>
            <p>Commission (10%): ₦10,000</p>
            <p className="mt-3">Total Price: <span className="font-semibold">₦270,000</span></p>
          </div>

          {/* Sharing Slot */}
          <div className="mb-4 flex">
            <div className="flex items-center p-4 mr-8 rounded px-3 py-2">
              <FaRegUserCircle className="text-gray-500 w-5 h-5" />
              <input
                type="text"
                name="sharingSlot"
                value={formData.sharingSlot}
                onChange={handleInputChange}
                placeholder="10"
                className="pl-10 border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Sharing Price: <span className="font-bold text-lg text-black">₦50,000</span>
            </p>
          </div>

          {/* Agreement Checkboxes */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">Agreements</label>
            <div>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  name="agreeHealth"
                  checked={formData.agreeHealth}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Can you ascertain that the products are healthy for consumption?
              </label>
              <label className="flex items-center mb-2">
                <input
                  type="checkbox"
                  name="agreePricing"
                  checked={formData.agreePricing}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Do you agree with our Price Sharing Process?
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                Do you agree with our terms and conditions?
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button className="flex items-center justify-center px-4 bg-red-600 text-white py-2 rounded">
            Upload
            <TbFileUpload className="w-4 h-4 text-white-700 mr-2" />
          </button>
        </form>
      </main>

      {/* Image Upload Section */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Upload Photo</label>
        <div className="flex items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg">
          {!image ? (
            <div className="flex flex-col items-center justify-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v8m4-4H8"
                />
              </svg>
              <p>Click to upload</p>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <img
                src={image}
                alt="Uploaded"
                className="object-cover w-full h-full rounded-lg"
              />
              <button
                type="button"
                onClick={() => setImage(null)}
                className="absolute top-2 right-2 bg-white text-gray-700 p-1 rounded-full shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mt-2 hidden"
          id="file-input"
        />
        <label
          htmlFor="file-input"
          className="mt-2 inline-block text-blue-500 cursor-pointer"
        >
          Choose a file
        </label>
      </div>
    </div>
  );
};

export default ProductUpload;
