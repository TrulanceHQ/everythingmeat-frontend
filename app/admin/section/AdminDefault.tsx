import React from "react";
import Head from "../components/Head";
import Image from "next/image";
import Card from "../components/Card";
import DashboardTable from "../components/DashboardTable";
import { DashboardTableData } from "../data/dashboardTableData";
import { CardData } from "../data/cardData";
import FilterComponent from "../components/FilterComponent";

type Props = {
  handleCardClick: (cardLink: string) => void;
};

const AdminDefault = ({ handleCardClick }: Props) => {
  const handleNameClick = () => {};

  const handleBankNameClick = () => {};

  const handleStatusClick = () => {};

  const handleDateClick = () => {};

  const DropdownItems = [
    { label: "Name", onClick: handleNameClick },
    { label: "Bank Name", onClick: handleBankNameClick },
    { label: "Status", onClick: handleStatusClick },
    { label: "Date", onClick: handleDateClick },
  ];

  return (
    <div className="relative">
      <div className=" bg-customGray py-12 px-16">
        {/* <Image
          src={"/dotframe.png"}
          alt={""}
          width={90}
          height={70}
          className="absolute right-[500] top-[-30] hidden lg:block"
        ></Image> */}

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
                onCardClick={handleCardClick}
              />
            ))}
          </div>
        </div>

        <div className="bg-white my-10 rounded-2xl">
          <div className="px-10 py-5 flex flex-col lg:flex-row justify-between">
            <h3 className="font-bold py-2 text-2xl">Payment Request</h3>
            <FilterComponent items={DropdownItems} />
          </div>
          <DashboardTable DashboardTableData={DashboardTableData} />
        </div>
      </div>
    </div>
  );
};

export default AdminDefault;
