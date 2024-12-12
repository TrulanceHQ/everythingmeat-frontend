import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";



type Props = {
  cardLink: string;
  iconBGColor: string;
  iconLink: string;
  title: string;
  amount: string;
  rate: number;
  showNairaSymbol?: boolean;
};

const Card = ({
  cardLink,
  iconBGColor,
  iconLink,
  title,
  amount,
  rate,
  showNairaSymbol = true,
}: Props) => {
  return (
    <div>
      <Link href={cardLink}>
        <div className="bg-white w-full max-w-72 h-48 rounded-3xl px-4 py-8 sm:p-8">
          <div
            className={`${iconBGColor} rounded-full w-12 h-12 flex justify-center items-center`}
          >
            <Image src={iconLink} alt={"logo"} width={24} height={24}></Image>
          </div>
          <p className="py-4 font-normal text-base">{title}</p>
          <div className="flex flex-row justify-between">
            <h3 className="font-medium text-xl lg:text-2xl flex flex-row justify-center items-center">{showNairaSymbol && <TbCurrencyNaira />}{amount}</h3>
            <div className="font-normal text-base">
              {rate  && (
                <div className="bg-[#D9FFE9] text-[#007E33] rounded-3xl w-14 h-7 flex flex-row justify-center items-center">
                    <IoIosArrowRoundUp  className="text-2xl font-extrabold"/>
                  <p className="text-sm">{rate}</p>
                </div>
              )}
              {/* {rate < 5 && (
                <div className="bg-red-500">
                  <p>{rate}</p>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
