"use client";

import Typography from "@mui/material/Typography";
import { useState } from "react";

import FlexBox from "@/components/Common/FlexBox";
import SwitchButton from "@/components/Common/SwitchButton";

export default function DataModelSwitch({ style }: { style?: string }) {
  const [checked, setChecked] = useState(false);

  return (
    <FlexBox
      className={`bg-white justify-between px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-12 ${style ? style : "w-auto 2xl:w-3/4"} rounded-2xl border border-slate-200 shadow-card flex-col 2xl:flex-row gap-4 2xl:gap-0 items-center 2xl:items-start`}
    >
      <Typography className="text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400">
        Choose Your Data Model
      </Typography>

      <FlexBox className="items-center">
        <Typography
          className={`${!checked ? "font-bold text-blue350" : "text-neutral-700"} max-w-20 md:max-w-full font-aeonik-medium text-base 2xl:text-xl`}
        >
          Sass
        </Typography>
        <SwitchButton checked={checked} setChecked={setChecked} />
        <Typography
          className={`${checked ? "font-bold text-blue350" : "text-neutral-700"} text-center max-w-20 md:max-w-full font-aeonik-medium text-base 2xl:text-xl`}
        >
          Traditional Database
        </Typography>
      </FlexBox>
    </FlexBox>
  );
}
