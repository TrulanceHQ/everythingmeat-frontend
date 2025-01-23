import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useState } from "react";
import Pagination from "../components/Pagination";
import { productListData } from "./ProductListData";

const ProductListTable = () => {
  const data = productListData;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-[#D9FFE9] text-[#007E33]";
      case "Pending":
        return "bg-[#FF880033]/20 text-[#FF8800]";
      case "Cancel":
        return "bg-[#CC0000]/20 text-[#CC0000]";
      default:
        return "";
    }
  };

  return (
    <div className="my-2">
      <div className="overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow className="min-w-full">
              <TableHead className="py-3  text-left">Product ID</TableHead>
              <TableHead className="py-3 px-6 text-left">
                Product Name
              </TableHead>
              <TableHead className="py-3 px-6 text-left">Gross Price</TableHead>
              <TableHead className="py-3 px-6 text-left">Net Price</TableHead>
              <TableHead className="py-3 px-6 text-left">Total Slot</TableHead>
              <TableHead className="py-3 px-6 text-left">
                Available Slot
              </TableHead>
              <TableHead className="py-3 px-6 text-left">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="py-3 text-left whitespace-nowrap">
                  {item.productId}
                </TableCell>
                <TableCell className="py-3 px-6 text-left">
                  {item.productName}
                </TableCell>
                <TableCell className="py-3 px-6 text-left">
                  {item.grossPrice}
                </TableCell>
                <TableCell className="py-3 px-6 text-left">
                  {item.netPrice}
                </TableCell>
                <TableCell className="py-3 px-6 text-center">
                  {item.totalSlot}
                </TableCell>
                <TableCell className="py-3 px-6 text-center">
                  {item.availableSlot}
                </TableCell>
                <TableCell>
                  <div
                    className={`p-1 text-center rounded-full ${getStatusClass(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </div>
                </TableCell>
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

export default ProductListTable;
