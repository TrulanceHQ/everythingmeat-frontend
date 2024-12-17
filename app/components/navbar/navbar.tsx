"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar, Button } from "flowbite-react";
import { FaFacebookF, FaUserCircle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const AppNavbar = () => {
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
    <header className="bg-customRed text-white">
      {/* Top Bar */}
      <div className="hidden md:flex justify-between items-center lg:px-6 py-2 lg:text-sm text-xs px-4">
        <span>Call Us: +234 9012345578</span>
        <div>
          Sign up to promote your livestock for meat sharing.{" "}
          <Link href="#" className="text-yellow-300 font-bold">
            Sign up now
          </Link>
        </div>
        <div className="flex items-center space-x-3 text-lg">
          <span className="text-sm font-medium">Follow us:</span>
          {socialLinks.map(({ icon: Icon, href }, index) => (
            <Link key={index} href={href}>
              <Icon />
            </Link>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <Navbar fluid className="bg-white">
        {/* Logo */}
        <Navbar.Brand href="/">
          <Image
            src="/everything_meat_logo.png"
            alt="EverythingMeat Logo"
            width={180}
            height={50}
            className="object-contain"
          />
        </Navbar.Brand>

        {/* Hamburger Menu */}
        <Navbar.Toggle />

        {/* Navigation Links and Icon and Button */}
        <Navbar.Collapse className="text-center">
          {navLinks.map(({ label, path }, index) => (
            <Navbar.Link
              key={index}
              href={path}
              active={false}
              className="font-normal lg:mx-5"
            >
              {label}
            </Navbar.Link>
          ))}
          <div className="flex justify-center items-center mt-4 md:hidden space-x-20">
            <Link href="#" className="text-customRed">
              <HiOutlineShoppingBag size={30} />
            </Link>
            <Button className="bg-customRed text-white">Book Now</Button>
            <Link href="#" className="text-customRed">
              <FaUserCircle size={40} />
            </Link>
          </div>
        </Navbar.Collapse>

        {/* Right Section for Desktop */}
        <div className="hidden md:flex items-center space-x-4">
        <Link href="#" className="text-customRed">
              <HiOutlineShoppingBag size={30} />
            </Link>
            <Link href="#" className="text-customRed">
              <FaUserCircle size={40} />
            </Link>
          <Button className="bg-customRed text-white">Book Now</Button>
        </div>
      </Navbar>
    </header>
  );
};

export default AppNavbar;
