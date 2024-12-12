import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaUserCircle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";


const Navbar = () => {
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/allpages/about" },
    { label: "Stocks", path: "/stocks" },
    { label: "Contact Us", path: "/allpages/contact" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#" },
    { icon: IoLogoWhatsapp, href: "#" },
    { icon: RiInstagramFill, href: "#" },
    { icon: FaXTwitter, href: "#" },
  ];

  return (
    <header className="bg-red-700 text-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center lg:px-20 px-4 py-2 text-sm">
        <span>Call Us: +234 9012345578</span>
        <div>
          Sign up to promote your livestock for meat sharing.{" "}
          <Link href="#" className="text-yellow-300 underline font-bold">
            Sign up now
          </Link>
        </div>
        <div className="flex items-center space-x-3 text-lg">
          <span className="text-sm font-medium">Follow us:</span>
          {socialLinks.map(({ icon: Icon, href }, index) => (
            <Link key={index} href={href} className="hover:text-yellow-300">
              <Icon />
            </Link>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center lg:px-11 px-4 py-4">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/everything_meat_logo.png"
              alt="EverythingMeat Logo"
              width={150}
              height={150}
              className="object-contain h-auto w-auto"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-8 font-medium text-black">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className="focus:font-bold active:font-bold"
              >
                <Link href={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-red-700 hover:text-red-500">
              <HiOutlineShoppingBag size={30} />
            </Link>
            <Link href="#" className="text-red-700 hover:text-red-500">
              <FaUserCircle size={40} />
            </Link>
            <button className="hidden md:block bg-red-700 text-white py-2 px-4 rounded-md hover:bg-red-800 font-bold">
              Book Now
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
