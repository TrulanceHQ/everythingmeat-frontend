'use client'

import React, { useState } from "react";
import SectionHero from "../../components/SectionHero";
import BackToDashboard from "../../components/BackToDashboard";
import DefaultLeft from "../../components/DefaultLeft";
import TotalBuyersDefault from './TotalBuyersDefault';
import BuyerProfileDetailsPage from './BuyerProfileDetailsPage';

type Props = {
  onClick: () => void;
  handleSectionClick: (componentName: string) => void;
};

const TotalBuyers = ({ onClick, handleSectionClick }: Props) => {
  const [activeComponent, setActiveComponent] = useState<string>("Default");
  const [buyerId, setBuyerId] = useState<string | null>(null);

  const onBackClick = () => {
    setActiveComponent("Default");
  };

  const handleSelectedSeller = (clickedId: string) => {
    setBuyerId(clickedId);
    console.log(clickedId)
    setActiveComponent("userProfile");
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "Default":
        return <TotalBuyersDefault clickId={handleSelectedSeller} handleSectionClick={handleSectionClick} />;
      case "userProfile":
        return (
          <BuyerProfileDetailsPage onClick={onBackClick} buyerId={buyerId} />
        );
    }
  };

  return (
    <div className=" ">
      <div>
        <SectionHero pageTitle={"Total Buyers"} />
      </div>
      <div className="mx-4 md:mx-10">
        <BackToDashboard onClick={onClick} />
      </div>

      <div className="flex flex-col md:flex-row justify-center md:justify-between mx-2 md:mx-10 md:space-x-8">
        <div className="hidden md:block md:w-[25%]">
          <DefaultLeft
            onSectionClick={handleSectionClick}
            activeComponent="totalBuyers"
          />
        </div>
        <div className="flex flex-col md:w-[72%] my-4 space-y-4">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default TotalBuyers;
