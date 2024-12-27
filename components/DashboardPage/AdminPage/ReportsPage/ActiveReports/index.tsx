"use client";

import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import CustomSelectIcon from "@/components/Common/CustomSelectIcon";
import FlexBox from "@/components/Common/FlexBox";

import ActiveReportsTable from "./ActiveReportsTable";

export default function ActiveReports() {
  const [filter, setFilter] = useState("Date Range");
  const [selectOpen, setSelectOpen] = useState(false);

  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="w-full justify-between items-center md:items-start flex-col">
        <Typography className="flex items-center text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-2 md:mb-6">
          Active Reports
        </Typography>

        <FlexBox className="w-full mb-6 items-center justify-between flex-col xl:flex-row gap-4">
          <FlexBox className="w-full xl:w-2/5">
            <InputBase
              placeholder="Search all active reports..."
              endAdornment={
                <IconButton className="w-10 h-10 mx-1 md:mx-2">
                  <SearchIcon className="text-blue400 text-3xl" />
                </IconButton>
              }
              className="ps-4 w-full border border-neutral-300 text-black font-aeonik bg-white rounded-lg p-1.5"
            />
          </FlexBox>

          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value as string)}
            onOpen={() => setSelectOpen(true)}
            onClose={() => setSelectOpen(false)}
            IconComponent={(props) => (
              <CustomSelectIcon open={selectOpen} {...props} />
            )}
            renderValue={() => (
              <FlexBox className="gap-2 items-center">
                <Typography className="font-aeonik-bold">Filter by:</Typography>
                <Typography className="">{filter}</Typography>
              </FlexBox>
            )}
            className="w-full xl:w-auto text-neutral-700 px-3 2xl:px-4 text-lg rounded-lg border-none"
          >
            <MenuItem value="Date Range">Date Range</MenuItem>
          </Select>
        </FlexBox>
      </FlexBox>

      <ActiveReportsTable />
    </FlexBox>
  );
}
