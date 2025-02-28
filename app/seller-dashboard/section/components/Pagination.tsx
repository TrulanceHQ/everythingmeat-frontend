import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Props = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number) => void;
};

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: Props) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    if (totalPages <= 4) {
      // If total pages is 4 or less, show all pages without ellipsis
      return Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`mx-1 px-3 py-1 border rounded-full ${
            currentPage === number
              ? "bg-customRed text-white"
              : "bg-white text-[#101010]"
          }`}
        >
          {number}
        </button>
      ));
    }

    let pagesToShow = [];

    if (currentPage <= 2) {
      // Show first 3 pages + ellipsis + last page
      pagesToShow = [1, 2, 3, "ellipsis", totalPages];
    } else if (currentPage >= totalPages - 1) {
      // Show first page + ellipsis + last 3 pages
      pagesToShow = [1, "ellipsis", totalPages - 2, totalPages - 1, totalPages];
    } else {
      // Show first page + current page and its neighbors + ellipsis + last page
      pagesToShow = [
        1,
        "ellipsis",
        currentPage,
        "ellipsis",
        totalPages,
      ];
    }

    return pagesToShow.map((item, index) => {
      if (item === "ellipsis") {
        return (
          <span
            key={`ellipsis-${index}`}
            className="mx-1 px-3 py-1 text-[#101010]"
          >
            ...
          </span>
        );
      }

      return (
        <button
          key={item}
          onClick={() => onPageChange(item as number)}
          className={`mx-1 px-3 py-1 border rounded-full ${
            currentPage === item
              ? "bg-customRed text-white"
              : "bg-white text-[#101010]"
          }`}
        >
          {item}
        </button>
      );
    });
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handlePrevClick}
        className="mx-1 px-3 py-1 border rounded-full bg-white text-[#101010] disabled:opacity-50"
        disabled={currentPage === 1}
      >
        <IoIosArrowBack />
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNextClick}
        className="mx-1 px-3 py-1 border rounded-full bg-white text-[#101010] disabled:opacity-50"
        disabled={currentPage === totalPages}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;  