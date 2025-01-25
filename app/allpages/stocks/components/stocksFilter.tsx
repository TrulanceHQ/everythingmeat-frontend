"use client";

import { useState } from "react";
import { Range } from "react-range";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { FaSortDown, FaSortUp } from "react-icons/fa6";

interface StocksFilterProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const StocksFilter: React.FC<StocksFilterProps> = ({ priceRange, setPriceRange, selectedCategory, setSelectedCategory }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isPriceRangeOpen, setIsPriceRangeOpen] = useState(false);

  return (
    <div className="w-full lg:w-1/4 md:p-5">
      <h2 className="text-lg md:text-2xl font-semibold mb-4">
        Filter Options
      </h2>
      {/* Category and Price Range */}
      {/* Tablet & Mobile */}
      <div className="mb-6 lg:hidden flex flex-row md:space-x-6 space-x-2">
        <DropdownMenu open={isCategoryOpen} onOpenChange={setIsCategoryOpen}>
          <DropdownMenuTrigger className="w-full md:w-40 text-center border-2 border-customRed py-1 rounded-full flex flex-row justify-center space-x-2">
            <p className="text-sm md:text-base font-medium">Category</p>
            <span>{isCategoryOpen ? <FaSortUp className="text-sm md:text-base" /> : <FaSortDown className="text-sm md:text-base" />}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full">
            {[
              "All",
              "Cow",
              "Goat",
              "Ram",
              "Chicken",
              "Turkey",
              "Pig",
              "Fish",
            ].map((category) => (
              <DropdownMenuItem key={category} onSelect={() => setSelectedCategory(category)}>
                <div className="flex items-center">
                  <Checkbox
                    id={category}
                    checked={selectedCategory === category}
                    onCheckedChange={() => setSelectedCategory(category)}
                    className={`mr-2 rounded-md border-2 h-5 w-5 cursor-pointer ${
                      selectedCategory === category ? "bg-customRed" : ""
                    }`}
                  />
                  <label htmlFor={category} className="text-sm">
                    {category}
                  </label>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu open={isPriceRangeOpen} onOpenChange={setIsPriceRangeOpen}>
          <DropdownMenuTrigger className="w-full md:w-40 text-center border-2 border-customRed py-1 rounded-full flex flex-row justify-center space-x-2">
            <p className="text-sm md:text-base font-medium">Price Range (₦)</p>
            <span>{isPriceRangeOpen ? <FaSortUp className="text-sm md:text-base" /> : <FaSortDown className="text-sm md:text-base" />}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full p-5">
            <div className="flex text-xs md:text-base mt-2 mb-5">
              <p className="space-x-2 font-medium">
                <span>₦{priceRange[0].toLocaleString()}</span>
                <span>-</span>
                <span>₦{priceRange[1].toLocaleString()}</span>
              </p>
            </div>
            <Range
              step={1500}
              min={15000}
              max={100000}
              values={priceRange}
              onChange={(values) => setPriceRange(values as [number, number])}
              renderTrack={({ props, children }) => {
                const values = priceRange;
                return (
                  <div
                    {...props}
                    className="h-2 rounded-full xl:w-52 lg:w-44 w-full"
                    style={{
                      ...props.style,
                      background: `linear-gradient(to right, #9CA3AF ${
                        ((values[0] - 15000) / (100000 - 15000)) * 100
                      }%, #AF0202 ${
                        ((values[0] - 15000) / (100000 - 15000)) * 100
                      }%, #AF0202 ${
                        ((values[1] - 15000) / (100000 - 15000)) * 100
                      }%, #9CA3AF ${
                        ((values[1] - 15000) / (100000 - 15000)) * 100
                      }%)`,
                    }}
                  >
                    {children}
                  </div>
                );
              }}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  className="w-4 h-4 bg-customRed rounded-full shadow"
                />
              )}
            />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {/* Desktop */}
      <div className="mb-6 hidden lg:block">
        <p className="text-sm md:text-lg font-medium mb-5">Category</p>
        <div className="space-y-4">
          {[
            "All",
            "Cow",
            "Goat",
            "Ram",
            "Chicken",
            "Turkey",
            "Pig",
            "Fish",
          ].map((category) => (
            <div key={category} className="flex items-center">
              <Checkbox
                id={category}
                checked={selectedCategory === category}
                onCheckedChange={() => setSelectedCategory(category)}
                className={`mr-2 rounded-md border-2 h-5 w-5 cursor-pointer ${
                  selectedCategory === category ? "bg-customRed" : ""
                }`}
              />
              <label htmlFor={category} className="text-sm">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-6 hidden lg:block">
        <p className="text-sm md:text-lg font-medium mb-2">
          Price Range (₦)
        </p>
        <div className="flex text-xs md:text-base mt-2 mb-5">
          <p className="space-x-2 font-medium">
            <span>₦{priceRange[0].toLocaleString()}</span>
            <span>-</span>
            <span>₦{priceRange[1].toLocaleString()}</span>
          </p>
        </div>
        <Range
          step={1500}
          min={15000}
          max={100000}
          values={priceRange}
          onChange={(values) => setPriceRange(values as [number, number])}
          renderTrack={({ props, children }) => {
            const values = priceRange;
            return (
              <div
                {...props}
                className="h-2 rounded-full xl:w-52 lg:w-44"
                style={{
                  ...props.style,
                  background: `linear-gradient(to right, #9CA3AF ${
                    ((values[0] - 15000) / (100000 - 15000)) * 100
                  }%, #AF0202 ${
                    ((values[0] - 15000) / (100000 - 15000)) * 100
                  }%, #AF0202 ${
                    ((values[1] - 15000) / (100000 - 15000)) * 100
                  }%, #9CA3AF ${
                    ((values[1] - 15000) / (100000 - 15000)) * 100
                  }%)`,
                }}
              >
                {children}
              </div>
            );
          }}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="w-4 h-4 bg-customRed rounded-full shadow"
            />
          )}
        />
      </div>
    </div>
  );
};

export default StocksFilter;
