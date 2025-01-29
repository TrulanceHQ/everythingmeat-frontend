import React from "react";
import TitleHeaders from "../components/TitleHeaders";
import TotalBuyersTable from "./TotalBuyersTable";
import FilterComponent from "../../components/FilterComponent";
import DefaultLeft from "../../components/DefaultLeft";

type Props = {
    clickId: (itemID: string) => void;
    handleSectionClick: (componentName: string) => void;
  };

const TotalBuyersDefault = ({ clickId, handleSectionClick }: Props) => {
  const handleProductIdClick = () => {};

  const handleProductNameClick = () => {};

  const handlePriceClick = () => {};
  const DropdownItems = [
    { label: "Product Id", onClick: handleProductIdClick },
    { label: "Product Name", onClick: handleProductNameClick },
    { label: "Price", onClick: handlePriceClick },
  ];
  return (
    <div className="flex flex-col space-y-4">
      {/* Tablet and Desktop  */}
      <div className=" flex-row justify-between hidden md:flex">
        <div>
          <TitleHeaders Title={"Total Buyers"} Text={"List of all buyers"} />
        </div>
        <div>
          <FilterComponent items={DropdownItems} />
        </div>
      </div>

      {/* Mobile  */}
      <div className="flex flex-col md:hidden justify-between space-y-4 mx-4">
        <div className="flex flex-row justify-between">
          <TitleHeaders Title={"Total Buyers"} Text={"List of all buyers"} />
          <DefaultLeft
            onSectionClick={handleSectionClick}
            activeComponent="totalBuyers"
          />
        </div>

        <FilterComponent items={DropdownItems} />
      </div>

      <div className="my-3 mx-4 md:mx-0">
      <TotalBuyersTable clickId={clickId}/>
      </div>
    </div>
  );
};

export default TotalBuyersDefault;
