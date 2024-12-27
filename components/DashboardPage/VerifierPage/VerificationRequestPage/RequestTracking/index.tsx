"use client";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import Button from "@/components/Common/Button";
import CustomSelectIcon from "@/components/Common/CustomSelectIcon";
import FlexBox from "@/components/Common/FlexBox";

import RequestTrackingTable from "./RequestTrackingTable";

export default function RequestingTracking() {
  const [filter, setFilter] = useState("Newest First");
  const [selectOpen, setSelectOpen] = useState(false);
  const [collapse, setCollapse] = useState(true);

  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="w-full justify-between items-center md:items-start flex-col">
        <Typography className="flex items-center text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-2 md:mb-6">
          Request Tracking
        </Typography>

        <FlexBox className="w-full mb-6 items-center justify-end">
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
            <MenuItem value="Newest First">Newest First</MenuItem>
            <MenuItem value="Newest End">Newest End</MenuItem>
          </Select>
        </FlexBox>
      </FlexBox>

      <RequestTrackingTable collapse={collapse} />

      <Button
        onClick={() => setCollapse(!collapse)}
        className="my-2 text-blue400 font-aeonik-bold text-base md:text-xl underline"
      >
        View All
      </Button>
    </FlexBox>
  );
}
