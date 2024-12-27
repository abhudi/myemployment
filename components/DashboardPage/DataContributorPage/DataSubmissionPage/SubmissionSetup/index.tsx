"use client";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import CustomSelectIcon from "@/components/Common/CustomSelectIcon";
import FlexBox from "@/components/Common/FlexBox";

export default function SubmissionSetup() {
  const [schedule, setSchedule] = useState("weekly");
  const [selectOpen, setSelectOpen] = useState(false);

  return (
    <FlexBox className="flex-col justify-start items-center bg-white px-2 md:px-4 3xl:px-7 4xl:px-10 py-5 md:py-10 w-auto xl:w-1/3 rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="flex-col">
        <Typography className="w-full text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
          Recurring Submission Setup
        </Typography>

        <Typography className="w-full text-base text-center xl:text-start text-neutral-700 mb-6">
          Schedule configuration for automated data Submissions
        </Typography>
      </FlexBox>

      <FlexBox className="gap-4 flex-col w-11/12 sm:w-3/4 md:w-1/2 xl:w-full">
        <Select
          value={schedule}
          onChange={(e) => setSchedule(e.target.value as string)}
          onOpen={() => setSelectOpen(true)}
          onClose={() => setSelectOpen(false)}
          IconComponent={(props) => (
            <CustomSelectIcon
              open={selectOpen}
              {...props}
              color="text-blue400"
            />
          )}
          className="text-blue400 px-3 2xl:px-4 py-1 bg-light200 text-base md:text-xl font-aeonik-bold"
        >
          <MenuItem value="weekly">Schedule Weekly</MenuItem>
          <MenuItem value="monthly">Schedule Monthly</MenuItem>
        </Select>
      </FlexBox>
    </FlexBox>
  );
}
