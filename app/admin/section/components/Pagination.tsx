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

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const startPage = Math.max(1, currentPage - 1);
  const endPage = Math.min(startPage + 2, pageNumbers.length);
  const visiblePageNumbers = pageNumbers.slice(startPage - 1, endPage);

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handlePrevClick}
        className="mx-1 px-3 py-1 border rounded-full bg-white text-[#101010]"
        disabled={currentPage === 1}
      >
        <IoIosArrowBack />
      </button>
      {visiblePageNumbers.map((number) => (
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
      ))}
      <button
        onClick={handleNextClick}
        className="mx-1 px-3 py-1 border rounded-full bg-white text-[#101010]"
        disabled={currentPage === totalPages}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
