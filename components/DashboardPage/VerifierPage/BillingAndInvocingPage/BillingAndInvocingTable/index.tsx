"use client";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import clsx from "clsx";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

import CustomCheckBox from "@/components/Common/CustomCheckBox";
import { billingAndInvocingTableData } from "@/constant/dashboardPage";

export default function BillingAndInvocingTable() {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <Box
      ref={ref}
      {...events}
      className="max-h-[380px] w-full overflow-x-auto relative scrollbar-hide"
    >
      <Box className="min-w-[740px]">
        <TableContainer component={Paper} className="shadow-none w-full">
          <Table className="w-full">
            <TableHead>
              <TableRow className="bg-slate-100">
                <TableCell className="border-none rounded-l-xl">
                  <CustomCheckBox />
                </TableCell>
                <TableCell className="font-aeonik-bold text-blue400 text-lg border-none">
                  Invoices
                </TableCell>
                <TableCell className="font-aeonik-bold text-blue400 text-lg border-none">
                  Created Date
                </TableCell>
                <TableCell className="font-aeonik-bold text-blue400 text-lg border-none">
                  Amout
                </TableCell>
                <TableCell className="font-aeonik-bold text-blue400 text-lg border-none">
                  Plan
                </TableCell>
                <TableCell className="font-aeonik-bold text-blue400 text-lg border-none rounded-r-xl">
                  Status
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {billingAndInvocingTableData.map((row, i) => (
                <TableRow
                  key={i}
                  className={clsx(
                    i % 2 !== 0 ? "bg-slate-100" : "",
                    "border-none",
                  )}
                >
                  <TableCell className="border-none rounded-l-xl">
                    <CustomCheckBox />
                  </TableCell>
                  <TableCell className="border-none">{row.id}</TableCell>
                  <TableCell className="border-none">
                    {row.createdDate}
                  </TableCell>
                  <TableCell className="border-none">{row.amount}</TableCell>
                  <TableCell className="border-none">{row.plan}</TableCell>
                  <TableCell className="border-none rounded-r-xl">
                    <Chip
                      label={row.status}
                      className={clsx(
                        "rounded-lg w-28 h-9 text-white capitalize",
                        row.status === "success" && "bg-green-700",
                        row.status === "pending" && "bg-yellow-500",
                        row.status === "failed" && "bg-red-600",
                      )}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
