import React from "react";
import SectionHero from "../../components/SectionHero";
import BackToDashboard from "../../components/BackToDashboard";
import DefaultLeft from "../../components/DefaultLeft";
import TitleHeaders from "../components/TitleHeaders";
import TotalCommissionsTable from "./TotalCommissionsTable";



type Props = { 
  onClick: () => void; 
  handleSectionClick: (componentName: string) => void  
};

const TotalCommission = ({ onClick, handleSectionClick }: Props) => {
  const handleProductIdClick = () => {};

  const handleProductNameClick = () => {};

  const handlePriceClick = () => {};


  const DropdownItems = [
    { label: "Product Id", onClick: handleProductIdClick },
    { label: "Product Name", onClick: handleProductNameClick },
    { label: "Price", onClick: handlePriceClick },
  ];
  return (
    <div className="">
      <div>
        <SectionHero pageTitle={"Total Commissions"} />
      </div>
      <div className="mx-10">
        <BackToDashboard onClick={onClick} />
      </div>
      <div className="flex flex-row justify-between mx-10">
        <DefaultLeft onSectionClick={handleSectionClick} activeComponent="totalCommission"/>
        <div className="flex flex-col w-[72%] my-4">
          <TitleHeaders Title={"Total Commissions"} Text={"List of all commissions"} items={DropdownItems} />
          <div className="my-3">
            <TotalCommissionsTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCommission;

