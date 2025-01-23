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
import { TotalSellersData } from "./TotalSellersData";
import { GoPencil } from "react-icons/go";

type Props = {
  clickId: (itemID: string) => void;
};

const TotalSellersTable = ({ clickId }: Props) => {
  const data = TotalSellersData;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="my-4">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="py-3  text-left">First Name</TableHead>
            <TableHead className="py-3 px-6 text-left">Last Name</TableHead>
            <TableHead className="py-3 px-6 text-left">Email</TableHead>
            <TableHead className="py-3 px-6 text-left">Stocks Sold</TableHead>
            <TableHead className="py-3 px-6 text-left">Registered</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((item, index) => (
            <TableRow
              key={index}
              className={`${!item.active ? "bg-gray-200" : ""}`}
            >
              <TableCell className="py-3 text-left whitespace-nowrap">
                {item.firstName}
              </TableCell>
              <TableCell className="py-3 px-6 text-left">
                {item.lastName}
              </TableCell>
              <TableCell className="py-3 px-6 text-left">
                {item.email}
              </TableCell>
              <TableCell className="py-3 px-6 text-left">
                {item.stocksSold}
              </TableCell>
              <TableCell className="py-3 px-6 text-left">
                {item.registered}
              </TableCell>
              <TableCell className="py-3 px-2 text-left">
                <div className="flex items-center space-x-2">
                  <div className="bg-[#CC0000] w-8 h-8 rounded-full flex items-center justify-center">
                    <GoPencil
                      className="text-white cursor-pointer"
                      onClick={() => clickId(item.id)}
                    />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination
        currentPage={currentPage}
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default TotalSellersTable;
