import React from "react";
import BackToDashboard from "../../components/BackToDashboard";
import DefaultLeft from "../../components/DefaultLeft";
import SectionHero from "../../components/SectionHero";
import TitleHeaders from "../components/TitleHeaders";
import ProductListTable from "./ProductListTable";
import FilterComponent from "../../components/FilterComponent";

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
    <div>
      <div>
        <SectionHero pageTitle={"My Account"} />
      </div>
      <div className="mx-4 md:mx-10">
        <BackToDashboard onClick={onClick} />
      </div>

      <div className="">
        <div className="flex flex-col md:flex-row justify-center md:justify-between mx-2 md:mx-10 md:space-x-8">
          <div className="hidden md:block md:w-[25%]">
            <DefaultLeft
              onSectionClick={handleSectionClick}
              activeComponent="myProduct"
            />
          </div>
          <div className="flex flex-col md:w-[72%] my-4 space-y-4">
            <div className="flex flex-row justify-between mx-4 md:mx-0">
              <div>
                <TitleHeaders
                  Title={"Product List"}
                  Text={"List of product upload so far."}
                />
              </div>
              <div className="hidden md:block">
                <FilterComponent items={DropdownItems} />
              </div>
              <div className="block md:hidden">
                <DefaultLeft
                  onSectionClick={handleSectionClick}
                  activeComponent="myProduct"
                />
              </div>
            </div>
            <div className="block md:hidden mx-4">
              <FilterComponent items={DropdownItems} />
            </div>
            <div className="my-3 md:mx-0 mx-4">
              <ProductListTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
