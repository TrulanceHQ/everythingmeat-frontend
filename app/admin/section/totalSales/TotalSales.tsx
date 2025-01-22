import React from "react";
import SectionHero from "../../components/SectionHero";
import BackToDashboard from "../../components/BackToDashboard";
import DefaultLeft from "../../components/DefaultLeft";
import TitleHeaders from "../components/TitleHeaders";
import TotalSalesTable from "./TotalSalesTable";
import FilterComponent from "../../components/FilterComponent";

type Props = {
  onClick: () => void;
  handleSectionClick: (componentName: string) => void;
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
    <div>
      <div>
        <SectionHero pageTitle={"Total Sales"} />
      </div>
      <div className="mx-4 md:mx-10">
        <BackToDashboard onClick={onClick} />
      </div>

      <div className="flex flex-row justify-center md:justify-between mx-2 md:mx-10 md:space-x-8">
        <div className="hidden md:block md:w-[25%]">
          <DefaultLeft
            onSectionClick={handleSectionClick}
            activeComponent="totalSales"
          />
        </div>
        <div className="flex flex-col md:w-[72%] my-4 space-y-4">
          <div className="flex flex-row justify-between">
            <div>
              <TitleHeaders Title={"Total Sales"} Text={"List of all sales"} />
            </div>
            <div className="hidden md:block">
              <FilterComponent items={DropdownItems} />
            </div>
            <div className="block md:hidden">
              <DefaultLeft
                onSectionClick={handleSectionClick}
                activeComponent="totalSales"
              />
            </div>
          </div>
          <div className="block md:hidden">
            <FilterComponent items={DropdownItems} />
          </div>
          <div className="my-3">
            <TotalSalesTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalSales;
