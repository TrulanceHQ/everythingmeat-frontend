import Link from "next/link";
import Image from "next/image";
import { Footer as FlowbiteFooter } from "flowbite-react";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
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

  const contactDetails = [
    {
      icon: HiOutlineLocationMarker,
      text: "41 CMD Road, Magodo, Lagos Nigeria.",
    },
    {
      icon: IoMailOutline,
      text: "everythingmeatng@gmail.com",
    },
    {
      icon: FiPhone,
      text: "+234 809 846 8885",
    },
  ];

  return (
    <FlowbiteFooter container className="bg-red-700 text-white rounded-none">
      <div className="py-10">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 lg:items-start items-center">
          {/* Logo & Description */}
          <div>
            <Image
              src="/footer_logo.png"
              alt="EverythingMeat Logo"
              width={180}
              height={180}
              className="object-cover mb-4"
            />
            <p className="text-sm">
              Connect with local farmers for high-quality, ethically sourced
              meat. Support your community while enjoying fresh cuts. Together,
              let’s create a sustainable and transparent meat-sharing
              experience.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <FlowbiteFooter.Title title="Company" className="text-lg font-bold mb-3 text-white" />
            <ul className="space-y-4 text-sm">
              {companyLinks.map(({ label, href }, index) => (
                <li key={index}>
                  <Link href={href} className="hover:text-yellow-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <FlowbiteFooter.Title title="Help" className="text-lg font-bold mb-3 text-white" />
            <ul className="space-y-4 text-sm">
              {helpLinks.map(({ label, href }, index) => (
                <li key={index}>
                  <Link href={href} className="hover:text-yellow-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <FlowbiteFooter.Title title="Contact Us" className="text-lg font-bold mb-3 text-white" />
            <ul className="space-y-2 text-sm">
              {contactDetails.map(({ icon: Icon, text }, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon size={20} className="mt-1" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-10 pt-4">
          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-start items-center space-x-4 mb-4">
            {socialLinks.map(({ icon: Icon, href }, index) => (
              <Link
                key={index}
                href={href}
                className="hover:text-yellow-300"
              >
                <Icon size={24} />
              </Link>
            ))}
          </div>

          {/* Border below social media icons */}
          <div className="border-2 border-white max-w-6xl lg:ms-40 lg:mt-[-30px]"></div>

          {/* Copyright */}
          <p className="text-sm text-center lg:text-right mt-4">
            &copy; 2024 EverythingMeat. All rights reserved.
          </p>
        </div>
      </div>
    </FlowbiteFooter>
  );
};

export default Footer;
