"use client";

import { Theme, useMediaQuery } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import Button from "@/components/Common/Button";
import CustomSelectIcon from "@/components/Common/CustomSelectIcon";
import FlexBox from "@/components/Common/FlexBox";
import { dataCorrectionLogsData } from "@/constant/dashboardPage";
import truncateText from "@/utils/truncateText";

const AccessLogsTable = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("mobsm"),
  );

  return (
    <FlexBox className="flex-col my-2 max-h-[380px] overflow-y-auto gap-4 items-center md:items-start">
      {dataCorrectionLogsData.map(({ date, title, content }, i) => (
        <FlexBox
          key={i}
          className="w-[245px] sm:w-[280px] md:w-[98%] cursor-pointer flex-col md:flex-row gap-3 md:gap-6 justify-between items-center rounded-xl ps-2 pe-2 md:pe-5 py-2 bg-slate75 hover:bg-slate-100 transition-all duration-300 ease-in-out"
        >
          <Button className="text-white min-w-44 faq-blue-gradient font-bold px-6 py-4 rounded-lg leading-none">
            {title}
          </Button>

          <FlexBox className="w-full flex-col md:flex-row justify-between items-center gap-1 md:*gap-3 lg:gap-8">
            <Typography className="text-neutral-700 text-base">
              {isMobile ? truncateText(content, 22) : truncateText(content, 15)}
            </Typography>

            <Typography className="text-blue400 font-aeonik-bold text-base">
              {date}
            </Typography>
          </FlexBox>
        </FlexBox>
      ))}
    </FlexBox>
  );
};

export default function DataCorrentionLogs() {
  const [filter, setFilter] = useState("last 30 days");
  const [selectFilterOpen, setSelectFilterOpen] = useState(false);

  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-auto 2xl:w-2/3 rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="w-full items-center flex-col xl:flex-row justify-center 3xl:justify-between gap-6 mb-6">
        <Typography className="text-center 3xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
          Data Correction Logs
        </Typography>

        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value as string)}
          onOpen={() => setSelectFilterOpen(true)}
          onClose={() => setSelectFilterOpen(false)}
          IconComponent={(props) => (
            <CustomSelectIcon open={selectFilterOpen} {...props} />
          )}
          renderValue={() => (
            <FlexBox className="gap-2 items-center">
              <Typography className="">Time Period:</Typography>
              <Typography className="text-blue400 font-bold">
                {filter}
              </Typography>
            </FlexBox>
          )}
          className="w-auto h-[52px] text-neutral-700 px-3 2xl:px-4 text-lg rounded-card border-none"
          sx={{
            "& .MuiInputBase-input.MuiOutlinedInput-input": {
              paddingX: "8px",
            },
          }}
        >
          <MenuItem value="last 30 days">last 30 days</MenuItem>
        </Select>
      </FlexBox>

      <AccessLogsTable />
    </FlexBox>
  );
}
