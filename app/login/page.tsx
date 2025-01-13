import Link from "next/link";
import React from "react";
import LoginForm from "./components/LoginForm";
import Image from "next/image";

// type Props = {}

const page = () => {
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

        <div className=" border border-t-4 border-x-0 border-b-0 border-customRed bg-white w-[20rem] lg:w-[35rem] flex flex-col p-10 mx-4 sm:mx-0 z-40 relative">
          <div>
            <h3 className="font-bold text-xl sm:text-2xl pb-2">Sign In</h3>
            <p className="font-normal text-sm sm:text-base">
              New to Everything Meat?{" "}
              <Link href={"/signup"}>
                <span className="text-customRed font-semibold hover:text-neutral-900/90">
                  Sign Up for free
                </span>
              </Link>
            </p>
            <hr className="w-[4rem] mt-2 h-1 bg-customRed border-none" />
          </div>
          <div className="py-4">
            <LoginForm />
          </div>
        </div>

        <Image
          src={"/dotframe.png"}
          alt={""}
          width={100}
          height={80}
          className="absolute left-[-50] bottom-[150] hidden lg:block"
        ></Image>
      </div>
    </div>
  );
};

export default page;
