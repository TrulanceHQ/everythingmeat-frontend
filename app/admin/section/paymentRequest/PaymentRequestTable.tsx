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
import { paymentRequestData } from "./PaymentRequestData";
  
  
  const PaymentRequestTable = () => {
    const data = paymentRequestData;
  
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
  
    const getStatusClass = (status : string) => {
      switch (status) {
        case "Approved":
          return "bg-[#D9FFE9] text-[#007E33]";
        case "------------":
          return "bg-[#555555]/20 text-[#555555]";
        case "Declined":
          return "bg-[#CC0000]/20 text-[#CC0000]";
        default:
          return "";
      }
    };
  
    return (
      <div className="my-2">
        <Table>
          <TableHeader>
            <TableRow className="min-w-full">
              <TableHead className="py-3  text-left">Date</TableHead>
              <TableHead className="py-3 px-6 text-left">Amount</TableHead>
              <TableHead className="py-3 px-6 text-left">Account Number</TableHead>
              <TableHead className="py-3 px-6 text-left">Bank Name</TableHead>
              <TableHead className="py-3 px-6 text-left">Name</TableHead>
              <TableHead className="py-3 px-6 text-left">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="py-3 text-left whitespace-nowrap">
                  {item.date}
                </TableCell>
                <TableCell className="py-3 px-6 text-left">{item.amount}</TableCell>
                <TableCell className="py-3 px-6 text-left">{item.accountNumber}</TableCell>
                <TableCell className="py-3 px-6 text-left">{item.bankName}</TableCell>
                <TableCell className="py-3 px-6 text-left">{item.name}</TableCell>
                <TableCell >
                  <div className={`p-1 text-center rounded-full ${getStatusClass(item.status)}`}>
                  {item.status}
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
  
  export default PaymentRequestTable;
  