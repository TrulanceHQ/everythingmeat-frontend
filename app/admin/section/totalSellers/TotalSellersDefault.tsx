import React from "react";
import TitleHeaders from "../components/TitleHeaders";
import TotalSellersTable from "./TotalSellersTable";
import FilterComponent from "../../components/FilterComponent";
import DefaultLeft from "../../components/DefaultLeft";

type Props = {
  clickId: (itemID: string) => void;
  handleSectionClick: (componentName: string) => void;
};

const TotalSellersDefault = ({ clickId, handleSectionClick }: Props) => {
  const handleProductIdClick = () => {};

  const handleProductNameClick = () => {};

  const handlePriceClick = () => {};
  const DropdownItems = [
    { label: "Product Id", onClick: handleProductIdClick },
    { label: "Product Name", onClick: handleProductNameClick },
    { label: "Price", onClick: handlePriceClick },
  ];
  return (
    <div className="flex flex-col my-4 space-y-4">
      {/* Tablet and Desktop  */}
      <div className=" flex-row justify-between hidden md:flex">
        <div>
          <TitleHeaders Title={"Total Sellers"} Text={"List of all sellers"} />
        </div>
        <div>
          <FilterComponent items={DropdownItems} />
        </div>
      </div>

      {/* Mobile  */}
      <div className="flex flex-col md:hidden">
        <div className="flex flex-row justify-between">
          <TitleHeaders Title={"Total Sellers"} Text={"List of all sellers"} />
          <DefaultLeft
            onSectionClick={handleSectionClick}
            activeComponent="totalSellers"
          />
        </div>

        <FilterComponent items={DropdownItems} />
      </div>

      <div className="my-3">
        <TotalSellersTable clickId={clickId} />
      </div>
    </div>
  );
};

export default TotalSellersDefault;
