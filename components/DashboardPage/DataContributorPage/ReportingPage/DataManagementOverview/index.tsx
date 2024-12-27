"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import FlexBox from "@/components/Common/FlexBox";

export default function DataManagementOverview() {
  const [stored, setStored] = useState(25);
  const [free, setFree] = useState(10);

  const storedPercentage: string = `${Math.round((stored / (stored + free)) * 100)}%`;

  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full 2xl:w-1/3 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center 3xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
        Data Management Overview
      </Typography>

      <FlexBox className="w-full flex-col items-center 2xl:items-start gap-6 sm:gap-10">
        <FlexBox className="min-w-[280px] sm:min-w-[320px] md:min-w-min w-1/2 2xl:w-full flex-col gap-3 sm:gap-6 items-center 2xl:items-start border-2 border-purple275 rounded-2xl p-6">
          <Typography className="text-blue400 text-xl font-aeonik-bold text-center 3xl:text-start">
            File Accessed and deleted <br />
            <span className="text-blue225">(SaaS Model)</span>
          </Typography>

          <FlexBox className="w-full items-center 3xl:items-start flex-col 3xl:flex-row gap-3 sm:gap-6 3xl:gap-0">
            <FlexBox className="flex-col text-center 3xl:text-start w-full 3xl:w-1/2">
              <Typography className="text-blue225 text-3xl sm:text-[40px] font-aeonik-bold leading-none">
                500
              </Typography>
              <Typography className="text-neutral-500 text-base">
                Files Accessed
              </Typography>
            </FlexBox>

            <FlexBox className="flex-col text-center 3xl:text-start w-full 3xl:w-1/2">
              <Typography className="text-blue225 text-3xl sm:text-[40px] font-aeonik-bold leading-none">
                300
              </Typography>
              <Typography className="text-neutral-500 text-base">
                Data Updated
              </Typography>
            </FlexBox>
          </FlexBox>

          <FlexBox className="flex-col w-full text-center 3xl:text-start">
            <Typography className="text-blue225 text-3xl sm:text-[40px] font-aeonik-bold leading-none">
              30 Days
            </Typography>
            <Typography className="text-neutral-500 text-base">
              Deleted Overtime
            </Typography>
          </FlexBox>
        </FlexBox>

        <FlexBox className="min-w-[280px] sm:min-w-[320px] md:min-w-min w-1/2 2xl:w-full flex-col gap-6 items-center 2xl:items-start border-2 border-purple275 rounded-2xl p-6">
          <Typography className="text-blue400 text-xl font-aeonik-bold text-center 3xl:text-start">
            Total data Stored and Updated <br />
            <span className="text-blue225">(Traditional Model)</span>
          </Typography>

          <FlexBox className="w-full flex-col gap-2">
            <FlexBox className="w-full h-10 sm:h-12 md:h-14 rounded-xl bg-pink25 border-2 border-purple75">
              <Box
                className="store-gradient rounded-l-xl h-full"
                style={{ width: storedPercentage }}
              ></Box>
            </FlexBox>

            <FlexBox className="w-full justify-between">
              <Typography className="text-purple500 text-sm sm:text-base font-aeonik-bold leading-none">
                {stored} GB Stored
              </Typography>
              <Typography className="text-neutral-500 text-sm sm:text-base leading-none">
                {free} GB Free
              </Typography>
            </FlexBox>
          </FlexBox>

          <FlexBox className="flex-col w-full text-center 3xl:text-start">
            <Typography className="text-dark text-2xl 3xl:text-3xl font-aeonik-bold leading-none">
              2.5 GB Updated
            </Typography>
            <Typography className="text-neutral-500 text-base">
              Updated Files
            </Typography>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
