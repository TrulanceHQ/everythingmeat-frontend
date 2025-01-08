import React from "react";
import SectionHero from "../../components/SectionHero";
import BackToDashboard from "../../components/BackToDashboard";
import DefaultLeft from "../../components/DefaultLeft";
import TitleHeaders from "../components/TitleHeaders";
import TotalSalesTable from "./TotalSalesTable";


type Props = { 
  onClick: () => void; 
  handleSectionClick: (componentName: string) => void  
};

const TotalSales = ({ onClick, handleSectionClick }: Props) => {
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
        <SectionHero pageTitle={"Total Sales"} />
      </div>
      <div className="mx-10">
        <BackToDashboard onClick={onClick} />
      </div>
      <div className="flex flex-row justify-between mx-10">
        <DefaultLeft onSectionClick={handleSectionClick} activeComponent="totalSales"/>
        <div className="flex flex-col w-[72%] my-4">
          <TitleHeaders Title={"Total Sales"} Text={"List of all sales"} items={DropdownItems} />
          <div className="my-3">
            <TotalSalesTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalSales;
