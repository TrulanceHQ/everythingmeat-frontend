import React from "react";
import FilterComponent from "../../components/FilterComponent";

type DropdownItem = {
  label: string;
  onClick: () => void;
};

type Props = {
  Title: string;
  Text: string;
  items: DropdownItem[];
};

const TitleHeaders = ({ Title, Text, items }: Props) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col space-y-1">
        <h3 className="font-bold text-2xl">{Title}</h3>
        <p className="font-normal text-sm">{Text}</p>
        <hr className="border-b-4 border-customRed w-10" />
      </div>
      <div>
        <FilterComponent items={items} />
      </div>
    </div>
  );
};

export default TitleHeaders;
