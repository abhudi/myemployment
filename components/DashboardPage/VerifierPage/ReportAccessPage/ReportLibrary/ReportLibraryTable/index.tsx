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
import FlexBox from "@/components/Common/FlexBox";
import { requestTrackingData } from "@/constant/dashboardPage";
import truncateText from "@/utils/truncateText";

export default function ReportLibraryTable() {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <Box
      ref={ref}
      {...events}
      className="max-h-[380px] overflow-x-auto relative scrollbar-hide"
    >
      <Box className="min-w-[1024px]">
        <TableContainer component={Paper} className="shadow-none w-full">
          <Table className="w-full">
            <TableHead>
              <TableRow className="bg-slate-100">
                <TableCell className="border-none rounded-l-xl">
                  <CustomCheckBox />
                </TableCell>
                <TableCell className="font-aeonik-bold text-blue400 text-lg border-none">
                  Date
                </TableCell>
                <TableCell className="font-aeonik-bold text-blue400 text-lg border-none">
                  Employee Info
                </TableCell>
                <TableCell className="font-aeonik-bold text-blue400 text-lg border-none">
                  Status
                </TableCell>
                <TableCell className="font-aeonik-bold text-blue400 text-lg border-none">
                  Requestor
                </TableCell>
                <TableCell className="font-aeonik-bold text-blue400 text-lg border-none rounded-r-xl">
                  Download
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {requestTrackingData.map((row, i) => (
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
                  <TableCell className="border-none">{row.date}</TableCell>
                  <TableCell className="border-none">
                    {truncateText(row.requester, 22)}
                  </TableCell>
                  <TableCell className="border-none">
                    <Chip
                      label={row.status}
                      className={clsx(
                        "rounded-lg w-28 h-9 text-white capitalize",
                        row.status === "approved" && "bg-green-700",
                        row.status === "pending" && "bg-yellow-500",
                        row.status === "rejected" && "bg-red-600",
                      )}
                    />
                  </TableCell>
                  <TableCell className="border-none">
                    {truncateText(row.content, 37)}
                  </TableCell>
                  <TableCell className="border-none rounded-r-xl">
                    <FlexBox className="gap-2">
                      <img
                        src="/assets/img/dashboard/common/csv.png"
                        alt="CSV"
                        className="w-6 h-6"
                      />
                      <img
                        src="/assets/img/dashboard/common/pdf.png"
                        alt="PDF"
                        className="w-6 h-6"
                      />
                    </FlexBox>
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
