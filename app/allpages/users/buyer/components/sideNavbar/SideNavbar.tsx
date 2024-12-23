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
                        href="/allpages/users/buyer/personalInfo"
                        className={
                            pathname === "/allpages/users/buyer/personalInfo" ? "sideNav-active-link" : "sideNav-link"
                        }
                    >
                        Personal Info
                    </Link>
                    <Link
                        href="/allpages/users/buyer/myOrder"
                        className={
                            pathname === "/allpages/users/buyer/myOrder" ? "sideNav-active-link" : "sideNav-link"
                        }
                    >
                        My Order
                    </Link>
                    <Link
                        href="/allpages/users/buyer/deliveryAddress"
                        className={
                            pathname === "/allpages/users/buyer/deliveryAddress"
                                ? "sideNav-active-link"
                                : "sideNav-link"
                        }
                    >
                        Delivery Address
                    </Link>
                    <Link
                        href="/allpages/users/buyer/paymentMethod"
                        className={
                            pathname === "/allpages/users/buyer/paymentMethod" ? "sideNav-active-link" : "sideNav-link"
                        }
                    >
                        Payment Method
                    </Link>
                    <Link
                        href="/allpages/users/buyer/changePassword"
                        className={
                            pathname === "/allpages/users/buyer/changePassword" ? "sideNav-active-link" : "sideNav-link"
                        }
                    >
                        Change Password{" "}
                    </Link>
                    <Link
                        href="/allpages/users/buyer/logout"
                        className={pathname === "/allpages/users/buyer/logout" ? "sideNav-active-link" : "sideNav-link"}
                    >
                        Logout
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default SideNavbar;
