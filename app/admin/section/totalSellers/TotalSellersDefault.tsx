import React from "react";
import TitleHeaders from "../components/TitleHeaders";
import TotalSellersTable from "./TotalSellersTable";

type Props = {
    clickId: (itemID: string) => void;
  };

const TotalSellersDefault = ({ clickId }: Props) => {
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
        Title={"Total Sellers"}
        Text={"List of all Sellers"}
        items={DropdownItems}
      />
      <div className="my-3">
        <TotalSellersTable clickId={clickId}/>
      </div>
    </div>
  );
};

export default TotalSellersDefault;
