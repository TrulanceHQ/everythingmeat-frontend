"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { IoChevronBack } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import stocks from "./stocks";
import StocksCard from "./stocksCard";
import StocksFilter from "./stocksFilter";

const StockSection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryFromQuery = searchParams.get("category");

  const [priceRange, setPriceRange] = useState<[number, number]>([15000, 100000]);
  const [selectedCategory, setSelectedCategory] = useState(categoryFromQuery || "All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Handle filtering
  const filteredStocks = stocks.filter(
    (stock) =>
      stock.price >= priceRange[0] &&
      stock.price <= priceRange[1] &&
      (selectedCategory === "All" || stock.category === selectedCategory)
  );

  const handleClearFilters = () => {
    setPriceRange([15000, 100000]);
    setSelectedCategory("All");
  };

  const handleRemoveCategory = () => setSelectedCategory("All");
  const handleRemovePriceRange = () => setPriceRange([15000, 100000]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedStocks = filteredStocks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-customGray pt-5 min-h-screen relative">
      {/* Back Button */}
      <Button
        onClick={() => router.push("/allpages/about")}
        className="relative md:top-5 lg:left-10 left-4 bg-customRed hover:bg-white text-white hover:text-customRed border-2 border-customRed duration-200 md:p-5 py-3 px-4 rounded-lg flex items-center gap-2 font-bold md:text-base text-sm"
      >
        <IoChevronBack size={18} /> Back
      </Button>

      {/* Title Section */}
      <div className="text-center mt-5 mb-20">
        <h1 className="md:text-3xl text-2xl font-bold text-black mb-3">
          Stocks
        </h1>
        <p className="md:text-lg text-base">Home / Stocks</p>
      </div>

      {/* Dot Frame */}
      {/* Top */}
      <div className="absolute z-10 hidden md:block">
        <Image
          src="/dotframe.png"
          alt="Dot Frame"
          width={126}
          height={106}
          className="object-cover relative xl:-top-[275] xl:left-[850] xl:w-[126] w-[112] -top-[272] lg:left-[635] md:left-[480]"
        />
      </div>
      {/* Bottom */}
      <div className="absolute hidden md:block">
        <Image
          src="/dotframe.png"
          alt="Dot Frame"
          width={126}
          height={106}
          className="object-cover relative xl:-top-16 xl:left-[428] xl:w-[126] w-[112] -top-[58] lg:left-[280] left-[160] z-45"
        />
      </div>

      <div className="flex flex-col lg:flex-row bg-white px-5 py-10 md:px-10 relative">
        {/* Filter Section */}
        <StocksFilter
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Stock Cards Section */}
        <StocksCard
          paginatedStocks={paginatedStocks}
          filteredStocks={filteredStocks}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          handlePageChange={handlePageChange}
          handleRemoveCategory={handleRemoveCategory}
          handleRemovePriceRange={handleRemovePriceRange}
          handleClearFilters={handleClearFilters}
          selectedCategory={selectedCategory}
          priceRange={priceRange}
        />
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default StockSection;
