"use client";
import {Button} from "flowbite-react";
import Link from "next/link";

export function Page() {
    return (
        <>
            <div className="flex flex-col justify-center items-center m-6 p-4">
                <div className="w-full flex flex-col text-center">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">Welcome back, Buyer</h1>
                    <p className="text-sm font-normal">Click on Go to Cart to continue from where you stopped.</p>
                </div>
                {/* BUTTON GROUP */}
                <div className="p-1 m-2 flex flex-col md:flex-row justify-center gap-3">
                    {/* GO TO CART */}
                    <Button className="bg-customRed text-white w-auto mt-2 hover:!bg-gray-100 hover:!text-customRed hover:border-customRed">
                        <Link href="/buyer-dashboard/booking-cart">Go to Cart </Link>
                    </Button>
                    {/* GO TO PERONAL INFO */}
                    <Button className="bg-customRed text-white w-auto mt-2 hover:!bg-gray-100 hover:!text-customRed hover:border-customRed">
                        <Link href="/buyer-dashboard/buyer-account/personalInfo">Profile</Link>
                    </Button>
                </div>
            </div>
        </>
    );
}
export default Page;
// To view this page go to: "http://localhost:3000/buyer-dashboard"
