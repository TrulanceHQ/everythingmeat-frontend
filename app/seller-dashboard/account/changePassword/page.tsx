"use client"
import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash, FaBell } from 'react-icons/fa';
import { TbLockPassword } from 'react-icons/tb';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    repeatPassword: '',
  });
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    repeatPassword: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = (field: string) => {
    setShowPassword({
      ...showPassword,
      [field]: !showPassword[field]
       });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
      
      <div className="max-w-7xl mx-auto p-4 bg-white grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Account Section (Left Sidebar) */}
        <div className="bg-white rounded-lg p-6 w-full md:w-1/2">
          <ul className="space-y-2 py-4">
            <li className="bg-white px-4 py-2 cursor-pointer rounded-lg border border-black">Personal Information</li>
            <li className="bg-white px-4 py-2 cursor-pointer rounded-lg border border-black">My Product</li>
            <li className="bg-white px-4 py-2 cursor-pointer border border-black rounded-lg">Orders</li>
            <li className="bg-white px-4 py-2 cursor-pointer border border-black rounded-lg">Withdrawal History</li>
            <li className="text-black px-4 bg-yellow-500 rounded-lg py-2 font-semibold">Change Password</li>
            <li className="bg-white px-4 py-2 cursor-pointer border border-black rounded-lg">Log Out</li>
          </ul>
        </div>

        {/* Change Password Section (Right Content) */}
        <div className="bg-white rounded-lg p-3">
          <div className="flex flex-col justify-start items-start mb-4">
            <h1 className="text-2xl font-bold">Change Password</h1>
            <p className="text-sm font-normal">Please provide the information below to change your password.</p>
            <hr className="border-t-4 border-red-700 w-1/4 my-4 mx-auto ml-8" />
          </div>
          <form onSubmit={handleSubmit}>
            {/* Old Password */}
            <div className="mb-4">
              <label htmlFor="old_password" className="block text-sm font-medium mb-2">
                Old Password <span className="text-red-700">*</span>
              </label>
              <div className="relative">
                <input
                  id="old_password"
                  name="oldPassword"
                  type={showPassword.oldPassword ? 'text' : 'password'}
                  placeholder="Enter Password"
                  required
                  value={formData.oldPassword}
                  onChange={handleInputChange}
                  className="w-3/4 border border-gray-300 rounded-md px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-500"
                />
                <TbLockPassword className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('oldPassword')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword.oldPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div className="mb-4">
              <label htmlFor="new_password" className="block text-sm font-medium mb-2">
                New Password <span className="text-red-700">*</span>
              </label>
              <div className="relative">
                <input
                  id="new_password"
                  name="newPassword"
                  type={showPassword.newPassword ? 'text' : 'password'}
                  placeholder="Enter Password"
                  required
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  className="w-3/4 border border-gray-300 rounded-md px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-500"
                />
                <TbLockPassword className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('newPassword')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword.newPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
            </div>

            {/* Repeat Password */}
            <div className="mb-4">
              <label htmlFor="repeat_password" className="block text-sm font-medium mb-2">
                Repeat Password <span className="text-red-700">*</span>
              </label>
              <div className="relative">
                <input
                  id="repeat_password"
                  name="repeatPassword"
                  type={showPassword.repeatPassword ? 'text' : 'password'}
                  placeholder="Enter Password"
                  required
                  value={formData.repeatPassword}
                  onChange={handleInputChange}
                  className="w-3/4 border border-gray-300 rounded-md px-4 py-2 pr-10 focus:ring-2 focus:ring-blue-500"
                />
                <TbLockPassword className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility('repeatPassword')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword.repeatPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-start justify-start py-2">
              <button
                type="submit"
                className="bg-red-700 text-white p-2 w-1/4 rounded-md hover:bg-red-700 transition"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;