"use client";

import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import Button from "@/components/Common/Button";
import CustomSelectIcon from "@/components/Common/CustomSelectIcon";
import FlexBox from "@/components/Common/FlexBox";
import FormControl from "@/components/Common/FormControl";

import ReportLibraryTable from "./ReportLibraryTable";

export default function ReportLibrary() {
  const [filter, setFilter] = useState("Date Range");
  const [selectOpen, setSelectOpen] = useState(false);

  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="w-full justify-between items-center md:items-start flex-col">
        <Typography className="flex items-center text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-2 md:mb-6">
          Report Library
        </Typography>

        <FlexBox className="w-full mb-6 items-center justify-between flex-col xl:flex-row gap-4">
          <FlexBox className="w-full xl:w-2/5">
            <InputBase
              placeholder="Search all completed verifications..."
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

      <ReportLibraryTable />

      <FlexBox className="w-full flex-col xl:flex-row items-center xl:items-start justify-end my-8">
        {/* <FlexBox className="w-full flex-col items-center xl:items-start">
          <Typography className="w-full text-center xl:text-start text-base md:text-xl font-aeonik-bold text-dark mb-4">
            API Data Access (for integrated verifiers)
          </Typography>

          <FormControl
            multiline
            rows={4}
            className="mb-4 text-start w-11/12 md:w-3/4"
            outlinedInputStyle="h-20"
            inputStyle="p-1 bg-light50 rounded-lg"
          />
        </FlexBox> */}

        <Button className="min-w-52 medium-blue-gradient px-8 py-3 text-base 3xl:text-lg rounded-lg font-bold text-white hover:text-blue200 transition-all duration-700 ease-in-out leading-none">
          Batch Download
        </Button>
      </FlexBox>
    </FlexBox>
  );
}
