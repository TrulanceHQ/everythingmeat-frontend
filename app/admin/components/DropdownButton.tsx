"use client";

import { Dropdown } from "flowbite-react";
import { ChevronDown } from "lucide-react";

type DropdownItem = {
  label: string;
  onClick: () => void;
};

type Props = {
  items: DropdownItem[];
};

export function DropdownButton({ items }: Props) {
  return (
    <Dropdown
      renderTrigger={() => (
        <button className="border border-[#AFAFAF] rounded-[10px] hover:bg-gray-200 text-base text-[#AFAFAF] font-medium py-0 px-4 space-x-10 inline-flex items-center w-[10rem]">
          <span>Name</span>
          <ChevronDown className="ml-2 h-8 w-8" />
        </button>
      )}
    >
      {items.map((item, index) => (
        <Dropdown.Item key={index} onClick={item.onClick}>
          {item.label}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
}