"use client";
import React from "react";
import paystackpage from "@/public/buyersImage/paystack_img.jpg";
import transaction_icon from "@/public/buyersImage/transference 1.png";
import atm_card from "@/public/buyersImage/atm-card 1.png";
import Image from "next/image";
import FundForm from "../funding-method/fundForm";

const Page = () => {
    const [fundWallet, setFundWallet] = React.useState<boolean>(false);
    const [withdraw, setWithdraw] = React.useState<boolean>(false);
    return (
        <div className="w-full flex flex-col items-center justify-start p-4">
            {/* ADD NEW ADDRESS */}
            <div className="flex flex-col justify-start text-left my-3 gap-2 p-3">
                <h1 className="text-3xl font-bold">Payment Method</h1>
                <p className="text-sm font-normal">
                    Our payment method is very-crucial for convenience,security and cost-effectiveness.
                </p>
            </div>
            {/* FUND WALLET */}
            <div className="flex flex-col gap-4 items-center w-full">
                <div
                    className="border border-customGray w-1/2 flex flex-row justify-start gap-3 my-3 p-3 rounded-md hover: cursor-pointer"
                    onClick={() => setFundWallet(!fundWallet)}
                >
                    <Image src={transaction_icon} alt="Visa_logo" width={32} height={32} className="" />
                    <span className="text-xl font-normal">Pay from wallet</span>
                </div>
                {fundWallet && <Image src={paystackpage} alt="Paystack_page" width={400} height={400} className="" />}
            </div>
            {/* WITHDRAW */}
            <div className="flex flex-col gap-4 items-center w-full">
                <div
                    className="border border-customGray w-1/2 flex flex-row justify-start gap-3 my-3 p-3 rounded-md hover:cursor-pointer"
                    onClick={() => setWithdraw(!withdraw)}
                >
                    <Image src={atm_card} alt="Visa_logo" width={41} height={32} className="" />
                    <span className="text-lg font-normal">Add New Debit or Credit Card</span>
                </div>
                <div className="h-fit">{withdraw && <FundForm />}</div>
            </div>
        </div>
    );
};

export default Page;
// To view this page go to: "http://localhost:3000/allpages/users/buyer/buyer-checkout/funding-method"
