import React from "react";
import BackToDashboard from "../../components/BackToDashboard";
import DefaultLeft from "../../components/DefaultLeft";
import SectionHero from "../../components/SectionHero";
import TitleHeaders from "../components/TitleHeaders";
import ProductListTable from "./ProductListTable";


type Props = {
  onClick: () => void;
  handleSectionClick: (componentName: string) => void;
};

const MyProduct = ({ onClick, handleSectionClick }: Props) => {
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
        <SectionHero pageTitle={"My Account"} />
      </div>
      <div className="mx-10">
        <BackToDashboard onClick={onClick} />
      </div>
      <div className="flex flex-row justify-between mx-10">
        <DefaultLeft
          onSectionClick={handleSectionClick}
          activeComponent="myProduct"
        />
        <div className="flex flex-col w-[72%] my-4">
        <TitleHeaders Title={"Product List"} Text={"List of product upload so far."} items={DropdownItems} />
        <ProductListTable />
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
