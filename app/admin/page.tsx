import React from "react";
import Nav from "./components/Nav";
import Head from "./components/Head";
import Image from "next/image";
import { CardData } from "./data/cardData";
import Card from "./cardSection/Card";
import DashboardTable from "./components/DashboardTable";
import { DashboardTableData } from "./data/dashboardTableData";
import { FilterIcon } from "lucide-react";
// type Props = {}

const page = () => {
  return (
    <div className="relative">
      <div className="z-40 relative">
        <Nav />
      </div>
      <div className=" bg-customGray py-12 px-16">
        <Image
          src={"/dotframe.png"}
          alt={""}
          width={90}
          height={70}
          className="absolute right-[500] top-[30] hidden lg:block"
        ></Image>

        <Head imageSource="/admin_profile.png" />

        <div className="relative">
          <Image
            src={"/dotframe.png"}
            alt={""}
            width={90}
            height={70}
            className="absolute left-[400] top-[-40] hidden lg:block"
          ></Image>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 justify-between z-40 relative">
            {CardData.map((a, index) => (
              <Card
                key={index}
                cardLink={a.cardLink}
                iconBGColor={a.iconBGColor}
                iconLink={a.iconLink}
                title={a.title}
                amount={a.amount}
                rate={a.rate}
                showNairaSymbol={a.showNairaSymbol}
              />
            ))}
          </div>
        </div>

        <div className="bg-white my-10 rounded-2xl">
          <div className="px-10 py-5 flex flex-row justify-between">
            <h3 className="font-bold text-2xl">Payment Request</h3>
            <div className="flex flex-row space-x-2 justify-center items-center">
              <FilterIcon size={20} />
              <h3 className="font-normal text-xl">Filter</h3>
            </div>
          </div>
          <DashboardTable DashboardTableData={DashboardTableData} />
        </div>
      </div>
    </div>
  );
};

export default page;
