import Image from "next/image";
import React from "react";
import OTPVerification from "./OTPVerification";

type Props = {
    onSubmit: (otp: string) => void;
}

const OTPPage = ({onSubmit} : Props) => {
  return (
    <div className="bg-[#F2F2F2] h-screen flex flex-col justify-center items-center">
      <div className="relative">
        <Image
          src={"/dotframe.png"}
          alt={""}
          width={100}
          height={80}
          className="absolute right-[-50] top-[50] hidden lg:block"
        ></Image>

        <div className=" border border-t-4 border-x-0 border-b-0 border-customRed bg-white w-[20rem] lg:w-[30rem] flex flex-col p-10 mx-4 sm:mx-0 z-40 relative">
          <div>
            <h3 className="font-bold text-xl sm:text-2xl pb-2">Verification</h3>
            <p className="font-normal text-sm sm:text-base">
              Please enter the code sent to your E-mail
            </p>
            <hr className="w-[4rem] mt-2 h-1 bg-customRed border-none" />
          </div>
          <div className="py-4">
            <OTPVerification onSubmit={onSubmit}/>
          </div>
        </div>

        <Image
          src={"/dotframe.png"}
          alt={""}
          width={100}
          height={80}
          className="absolute left-[-50] bottom-[100] hidden lg:block"
        ></Image>
      </div>
    </div>
  );
};

export default OTPPage;
