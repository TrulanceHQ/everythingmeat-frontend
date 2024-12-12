import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import clsx from "clsx";

interface DashboardTableProps {
  DashboardTableData: {
    date: string;
    amount: string;
    account_number: string;
    bank_name: string;
    name: string;
    status: string;
  }[];
}

const DashboardTable: React.FC<DashboardTableProps> = ({
  DashboardTableData,
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-medium text-lg text-black px-10 py-4">
            Date
          </TableHead>
          <TableHead className="font-medium text-lg text-black px-10">
            Amount
          </TableHead>
          <TableHead className="font-medium text-lg text-black px-10">
            Account Number
          </TableHead>
          <TableHead className="font-medium text-lg text-black px-10">
            Bank Name
          </TableHead>
          <TableHead className="font-medium text-lg text-black px-10">
            Name
          </TableHead>
          <TableHead className="font-medium text-lg text-black px-10">
            Status
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {DashboardTableData.map((item, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium px-10 py-3">
              {item.date}
            </TableCell>
            <TableCell className="font-medium px-10">{item.amount}</TableCell>
            <TableCell className="font-medium px-10">
              {item.account_number}
            </TableCell>
            <TableCell className="font-medium px-10">
              {item.bank_name}
            </TableCell>
            <TableCell className="font-medium px-10">{item.name}</TableCell>
            <TableCell className="font-medium px-10">
              <div
                className={clsx("rounded-lg p-2 text-center", {
                  "bg-[#D9FFE9] text-[#007E33]": item.status === "Approved",
                  "bg-[#CC000033] text-[#CC0000]": item.status === "Declined",
                  "bg-[#55555533] text-[#555555]": item.status === "------",
                })}
              >
                {item.status}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DashboardTable;
