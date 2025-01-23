import { FilterIcon } from "lucide-react";
import React from "react";
import { DropdownButton } from "./DropdownButton";

type DropdownItem = {
  label: string;
  onClick: () => void;
};

type Props = {
  items: DropdownItem[];
  className?: string;
};

const FilterComponent = ({ items, className = "" }: Props) => {
  return (
    <div
      className={`flex flex-row justify-between space-x-3 lg:space-x-4 space-y-2 lg:space-y-0 ${className}`}
    >
      <div className="flex flex-row lg:space-x-2 lg:justify-center items-center">
        <FilterIcon size={20} />
        <h3 className="font-normal text-xl">Filter</h3>
      </div>
      <DropdownButton items={items} />
    </div>
  );
};

export default FilterComponent;
