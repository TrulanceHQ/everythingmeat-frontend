import React, { useState } from "react";

import TotalSellersDefault from "./TotalSellersDefault";
import SellerProfileDetailsPage from "./SellerProfileDetailsPage";
import SectionHero from "../../components/SectionHero";
import BackToDashboard from "../../components/BackToDashboard";
import DefaultLeft from "../../components/DefaultLeft";


type Props = {
  onClick: () => void;
  handleSectionClick: (section: string) => void;
};

const TotalSellers = ({ onClick, handleSectionClick }: Props) => {
  const [activeComponent, setActiveComponent] = useState<string>("Default");
  const [sellerId, setSellerId] = useState<string | null>(null);

  const onBackClick = () => {
    setActiveComponent("Default");
  };

  const handleSelectedSeller = (clickedId: string) => {
    setSellerId(clickedId);
    setActiveComponent("userProfile");
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "Default":
        return <TotalSellersDefault clickId={handleSelectedSeller} handleSectionClick={handleSectionClick} />;
      case "userProfile":
        return (
          <SellerProfileDetailsPage onClick={onBackClick} sellerId={sellerId} />
        );
      default:
        return null;
    }
  };

  return (
    <div className=" ">
      <div>
        <SectionHero pageTitle={"Total Sellers"} />
      </div>
      <div className="mx-4 md:mx-10">
        <BackToDashboard onClick={onClick} />
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between mx-2 md:mx-10 md:space-x-8">
        <div className="hidden md:block md:w-[25%]">
          <DefaultLeft
            onSectionClick={handleSectionClick}
            activeComponent="totalSellers"
          />
        </div>
        <div className="flex flex-col md:w-[72%] my-4 space-y-4">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default TotalSellers;