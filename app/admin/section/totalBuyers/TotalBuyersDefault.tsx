import React from "react";
import TitleHeaders from "../components/TitleHeaders";
import TotalBuyersTable from "./TotalBuyersTable";

type Props = {
    clickId: (itemID: string) => void;
  };

const TotalBuyersDefault = ({ clickId }: Props) => {
  const handleProductIdClick = () => {};

  const handleProductNameClick = () => {};

  const handlePriceClick = () => {};
  const DropdownItems = [
    { label: "Product Id", onClick: handleProductIdClick },
    { label: "Product Name", onClick: handleProductNameClick },
    { label: "Price", onClick: handlePriceClick },
  ];
  return (
    <div className="flex flex-col w-[72%] my-4">
      <TitleHeaders
        Title={"Total Buyers"}
        Text={"List of all Buyers"}
        items={DropdownItems}
      />
      <div className="my-3">
        <TotalBuyersTable clickId={clickId}/>
      </div>
    </div>
  );
};

export default TotalBuyersDefault;
