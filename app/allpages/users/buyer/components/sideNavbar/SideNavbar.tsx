"use client";
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {BsPersonFill} from "react-icons/bs";
import {FiPackage} from "react-icons/fi";
import {FaAddressCard} from "react-icons/fa6";
import {MdPayment} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";
import {RiLogoutCircleRLine} from "react-icons/ri";

const SideNavbar = () => {
    const pathname = usePathname();
    return (
        <div className="max-h-screen">
            {/* SIDEBAR MENU */}
            <div className="sticky md:w-60 lg:block">
                <nav className="flex flex-row lg:flex-col gap-1 items-center h-auto mb-2">
                    <Link
                        href="/allpages/users/buyer/buyer-account/personalInfo"
                        className={
                            pathname === "/allpages/users/buyer/buyer-account/personalInfo"
                                ? "sideNav-active-link"
                                : "sideNav-link"
                        }
                    >
                        <div className="flex flex-row items-center justify-center gap-1">
                            <BsPersonFill />
                            <p className="hidden lg:block">Personal Info</p>
                        </div>
                    </Link>
                    <Link
                        href="/allpages/users/buyer/buyer-account/myOrder"
                        className={
                            pathname === "/allpages/users/buyer/buyer-account/myOrder"
                                ? "sideNav-active-link"
                                : "sideNav-link"
                        }
                    >
                        <div className="flex flex-row items-center justify-center gap-1">
                            <FiPackage />
                            <p className="hidden lg:block">My Order</p>
                        </div>
                    </Link>
                    <Link
                        href="/allpages/users/buyer/buyer-account/deliveryAddress"
                        className={
                            pathname === "/allpages/users/buyer/buyer-account/deliveryAddress"
                                ? "sideNav-active-link"
                                : "sideNav-link"
                        }
                    >
                        <div className="flex flex-row items-center justify-center gap-1">
                            <FaAddressCard />
                            <p className="hidden lg:block">Delivery Address</p>
                        </div>
                    </Link>
                    <Link
                        href="/allpages/users/buyer/buyer-account/paymentMethod"
                        className={
                            pathname === "/allpages/users/buyer/buyer-account/paymentMethod"
                                ? "sideNav-active-link"
                                : "sideNav-link"
                        }
                    >
                        <div className="flex flex-row items-center justify-center gap-1">
                            <MdPayment />
                            <p className="hidden lg:block">Payment Method</p>
                        </div>
                    </Link>
                    <Link
                        href="/allpages/users/buyer/buyer-account/changePassword"
                        className={
                            pathname === "/allpages/users/buyer/buyer-account/changePassword"
                                ? "sideNav-active-link"
                                : "sideNav-link"
                        }
                    >
                        <div className="flex flex-row items-center justify-center gap-1">
                            <RiLockPasswordFill />
                            <p className="hidden lg:block">Change Password</p>
                        </div>
                    </Link>
                    <Link
                        href="/allpages/users/buyer/buyer-account/logout"
                        className={
                            pathname === "/allpages/users/buyer/buyer-account/logout"
                                ? "sideNav-active-link"
                                : "sideNav-link"
                        }
                    >
                        <div className="flex flex-row items-center justify-center gap-1">
                            <RiLogoutCircleRLine />
                            <p className="hidden lg:block">Logout</p>
                        </div>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default SideNavbar;
