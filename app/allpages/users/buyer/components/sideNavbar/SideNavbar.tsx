"use client";
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

const SideNavbar = () => {
    const pathname = usePathname();
    return (
        <div className="max-h-screen">
            {/* SIDEBAR MENU */}
            <div className="sticky md:w-60 lg:block hidden">
                <nav className="flex flex-col gap-1 items-center h-auto mb-2">
                    <Link
                        href="/allpages/users/buyer/buyer-account/personalInfo"
                        className={
                            pathname === "/allpages/users/buyer/buyer-account/personalInfo"
                                ? "sideNav-active-link"
                                : "sideNav-link"
                        }
                    >
                        Personal Info
                    </Link>
                    <Link
                        href="/allpages/users/buyer/buyer-account/myOrder"
                        className={
                            pathname === "/allpages/users/buyer/buyer-account/myOrder"
                                ? "sideNav-active-link"
                                : "sideNav-link"
                        }
                    >
                        My Order
                    </Link>
                    <Link
                        href="/allpages/users/buyer/buyer-account/deliveryAddress"
                        className={
                            pathname === "/allpages/users/buyer/buyer-account/deliveryAddress"
                                ? "sideNav-active-link"
                                : "sideNav-link"
                        }
                    >
                        Delivery Address
                    </Link>
                    <Link
                        href="/allpages/users/buyer/buyer-account/paymentMethod"
                        className={
                            pathname === "/allpages/users/buyer/buyer-account/paymentMethod"
                                ? "sideNav-active-link"
                                : "sideNav-link"
                        }
                    >
                        Payment Method
                    </Link>
                    <Link
                        href="/allpages/users/buyer/buyer-account/changePassword"
                        className={
                            pathname === "/allpages/users/buyer/buyer-account/changePassword"
                                ? "sideNav-active-link"
                                : "sideNav-link"
                        }
                    >
                        Change Password{" "}
                    </Link>
                    <Link
                        href="/allpages/users/buyer/buyer-account/logout"
                        className={
                            pathname === "/allpages/users/buyer/buyer-account/logout"
                                ? "sideNav-active-link"
                                : "sideNav-link"
                        }
                    >
                        Logout
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default SideNavbar;
