import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useState } from "react";
import { TotalSalesData } from "./TotalSalesData";



const TotalSalesTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const data = TotalSalesData;

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="my-4">
      <Table>
        <TableHeader>
          <TableRow className="flex justify-between">
            <TableHead>Product ID</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((item, index) => (
            <TableRow key={index} className="flex justify-between">
              <TableCell className="font-normal text-base">{item.productId}</TableCell>
              <TableCell>{item.productName}</TableCell>
              <TableCell>{item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-center mt-4">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handleClick(number)}
            className={`mx-1 px-3 py-1 border rounded-full ${
              currentPage === number
                ? "bg-customRed text-white"
                : "bg-white text-[#101010]"
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TotalSalesTable;
