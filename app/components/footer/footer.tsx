import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

const Footer = (  ) => {
  const socialLinks = [
    { icon: FaFacebookF, href: "#" },
    { icon: IoLogoWhatsapp, href: "#" },
    { icon: RiInstagramFill, href: "#" },
    { icon: FaXTwitter, href: "#" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/allpages/about" },
    { label: "Career", href: "/career" },
    { label: "Admin", href: "/admin" },
    { label: "Meat Sharing", href: "/meatsharing" },
  ];

  const helpLinks = [
    { label: "FAQs", href: "/faqs" },
    { label: "Privacy Policies", href: "/privacypolicies" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Help & Support", href: "/support" },
  ];

  return (
    <footer className="bg-red-700 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo & Description */}
        <div>
          <Image
            src="/logo.png"
            alt="EverythingMeat Logo"
            width={180}
            height={180}
            className="object-cover mb-4 bg-white"
          />
          <p className="text-sm">
            Connect with local farmers for high-quality, ethically sourced meat.
            Support your community while enjoying fresh cuts. Together, let’s
            create a sustainable and transparent meat-sharing experience.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Company</h3>
          <ul className="space-y-4 text-sm">
            {companyLinks.map(({ label, href }, index) => (
              <li key={index}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h3 className="font-bold text-lg mb-3">Help</h3>
          <ul className="space-y-4 text-sm">
            {helpLinks.map(({ label, href }, index) => (
              <li key={index}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg mb-3">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-2">
              <HiOutlineLocationMarker size={20} className="mt-1" />
              <span>41 CMD Road, Magodo, Lagos Nigeria.</span>
            </li>
            <li className="flex items-center space-x-2">
              <IoMailOutline size={20} />
              <span>everythingmeatng@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FiPhone size={20} />
              <span>+234 809 846 8885</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="mt-10 pt-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col">
          {/* Social Media Icons */}
          <div className="flex items-center justify-start space-x-4 lg:mb-0 mb-4">
            {socialLinks.map(({ icon: Icon, href }, index) => (
              <Link key={index} href={href} className="hover:text-yellow-300">
                <Icon size={24} />
              </Link>
            ))}
          </div>

          {/* Border below social media icons */}
          <div className="border-2 border-white w-[1040px] lg:ms-52 mt-[-15px]"></div>

          {/* Copyright */}
          <p className="text-sm text-right mt-4">
            &copy; 2024 EverythingMeat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
