"use client";
import React from "react";
import visa_logo from "@/public/buyersImage/visa1.jpg";
import paystackpage from "@/public/buyersImage/paystack_img.jpg";
import Image from "next/image";
import WithdrawForm from "./WithdrawForm";

const Page = () => {
    const [fundWallet, setFundWallet] = React.useState<boolean>(false);
    const [withdraw, setWithdraw] = React.useState<boolean>(false);
    return (
        <div className="w-full flex flex-col items-center justify-start p-2">
            {/* FUND WALLET */}
            <div className="flex flex-col gap-4 items-center w-full">
                <div
                    className="border border-customGray w-1/2 flex flex-row justify-start gap-3 my-3 p-3 rounded-md hover: cursor-pointer"
                    onClick={() => setFundWallet(!fundWallet)}
                >
                    <Image src={visa_logo} alt="Visa_logo" width={41} height={32} className="" />
                    <span className="text-xl font-normal">Fund Wallet</span>
                </div>
                {fundWallet && <Image src={paystackpage} alt="Paystack_page" width={400} height={400} className="" />}
            </div>
            {/* WITHDRAW */}
            <div className="flex flex-col gap-4 items-center w-full">
                <div
                    className="border border-customGray w-1/2 flex flex-row justify-start gap-3 my-3 p-3 rounded-md hover:cursor-pointer"
                    onClick={() => setWithdraw(!withdraw)}
                >
                    <Image src={visa_logo} alt="Visa_logo" width={41} height={32} className="" />
                    <span className="text-xl font-normal">Withdraw</span>
                </div>
                {withdraw && <WithdrawForm />}
            </div>
        </div>
    );
};

export default Page;
