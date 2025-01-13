import React, { useState } from "react";
import SectionHero from "../../components/SectionHero";
import BackToDashboard from "../../components/BackToDashboard";
import DefaultLeft from "../../components/DefaultLeft";
import TotalSellersDefault from "./TotalSellersDefault";
import SellerProfileDetailsPage from "./SellerProfileDetailsPage";

type Props = {
  onClick: () => void;
  handleSectionClick: (componentName: string) => void;
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
        return <TotalSellersDefault clickId={handleSelectedSeller} />;
      case "userProfile":
        return (
          <SellerProfileDetailsPage onClick={onBackClick} sellerId={sellerId} />
        );
    }
  };

  return (
    <div className="">
      <div>
        <SectionHero pageTitle={"Total Sellers"} />
      </div>
      <div className="mx-10">
        <BackToDashboard onClick={onClick} />
      </div>
      <div className="flex flex-row justify-between mx-10">
        <DefaultLeft
          onSectionClick={handleSectionClick}
          activeComponent="totalSellers"
        />
        {renderComponent()}
      </div>
    </div>
  );
};

export default TotalSellers;
