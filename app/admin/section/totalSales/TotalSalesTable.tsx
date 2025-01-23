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
import Pagination from "../components/Pagination";

const TotalSalesTable = () => {
  const data = TotalSalesData;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="my-4">
      <div className="overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="py-3 px-6 text-left">Product ID</TableHead>
              <TableHead className="py-3 px-6 text-left">Product Name</TableHead>
              <TableHead className="py-3 px-6 text-left">Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="py-3 px-6 text-left whitespace-nowrap">
                  {item.productId}
                </TableCell>
                <TableCell className="py-3 px-6 text-left">{item.productName}</TableCell>
                <TableCell className="py-3 px-6 text-left">{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default TotalSalesTable;