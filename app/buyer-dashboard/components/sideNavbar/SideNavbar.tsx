"use client";
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const SideNavbar = () => {
    const pathname = usePathname();
    return (
        <div className="max-h-screen">
            {/* SIDEBAR MENU */}
            <div className="sticky w-full md:w-60 lg:block">
                <nav className="flex flex-col justify-center gap-1 items-center h-auto mb-2">
                    <Link
                        href="/buyer-dashboard/buyer-account/personalInfo"
                        className={
                            pathname === "/buyer-dashboard/buyer-account/personalInfo"
                                ? "sideNav-active-link"
                                : "sideNav-link"
                        }
                    >
                        <div className="flex flex-row items-center justify-center gap-1">
                            <p className="block">Personal Info</p>
                        </div>
                    </Link>
                    <Link
                        href="/buyer-dashboard/buyer-account/myOrder"
                        className={
                            pathname === "/buyer-dashboard/buyer-account/myOrder"
                                ? "sideNav-active-link"
                                : "sideNav-link"
                        }
                    >
                        <div className="flex flex-row items-center justify-center gap-1">
                            <p className="lg:block">My Order</p>
                        </div>
                    </Link>
                    <Link
                        href="/buyer-dashboard/buyer-account/deliveryAddress"
                        className={
                            pathname === "/buyer-dashboard/buyer-account/deliveryAddress"
                                ? "sideNav-active-link"
                                : "sideNav-link"
                        }
                    >
                        <div className="flex flex-row items-center justify-center gap-1">
                            <p className="block">Delivery Address</p>
                        </div>
                    </Link>
                    <Link
                        href="/buyer-dashboard/buyer-account/paymentMethod"
                        className={
                            pathname === "/buyer-dashboard/buyer-account/paymentMethod"
                                ? "sideNav-active-link"
                                : "sideNav-link"
                        }
                    >
                        <div className="flex flex-row items-center justify-center gap-1">
                            <p className="block">Payment Method</p>
                        </div>
                    </Link>
                    <Link
                        href="/buyer-dashboard/buyer-account/changePassword"
                        className={
                            pathname === "/buyer-dashboard/buyer-account/changePassword"
                                ? "sideNav-active-link"
                                : "sideNav-link"
                        }
                    >
                        <div className="flex flex-row items-center justify-center gap-1">
                            <p className="block">Change Password</p>
                        </div>
                    </Link>
                    <Link
                        href="/buyer-dashboard/buyer-account/logout"
                        className={
                            pathname === "/buyer-dashboard/buyer-account/logout"
                                ? "sideNav-active-link"
                                : "sideNav-link"
                        }
                    >
                        <div className="flex flex-row items-center justify-center gap-1">
                            <p className="block">Logout</p>
                        </div>
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default SideNavbar;
