"use client";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import FlexBox from "@/components/Common/FlexBox";
import SwitchButtonWithLabel from "@/components/Common/SwitchButtonWithLabel";
import NormalSwitchButton from "@/components/Common/NormalSwitchButton";

export default function DataSharingPreferences() {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [schedule, setSchedule] = useState(6);
  const [checked3, setChecked3] = useState(false);

  return (
    <FlexBox className="flex-col justify-start items-center xl:items-start bg-white px-2 md:px-4 3xl:px-7 4xl:px-10 py-5 md:py-10 w-auto xl:w-full rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="w-full flex-col items-center xl:items-start gap-4 md:gap-10">
        <Typography className="gap-8 flex items-center text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue275 my-2">
          Global Data Sharing Preferences
        </Typography>

        <FlexBox className="w-3/4 xl:w-full flex-col md:flex-row items-center md:items-start text-center md:text-start gap-4 justify-between">
          <FlexBox className="flex-col gap-1">
            <Typography className="font-aeonik-bold text-base 2xl:text-xl text-neutral-700">
              Global Data Sharing Setting
            </Typography>
            <Typography className="text-base 2xl:text-xl text-neutral-700">
              An active lock means no data will be shared. 
            </Typography>
          </FlexBox>

          <FlexBox className="gap-4 md:gap-6 flex-col md:flex-row">
          <FlexBox className="items-center rounded-3xl bg-light75 border border-purple50 p-1 pe-4">
            <NormalSwitchButton
              checked={checked2}
              setChecked={setChecked2}
              labelStyle="green-switch-label w-7"
              transition="translate-x-[42px]"
            />
            <Typography className="text-lg text-blue400">Locked</Typography>
          </FlexBox>
          </FlexBox>
        </FlexBox>

        <FlexBox className="w-3/4 xl:w-full flex-col md:flex-row items-center md:items-start text-center md:text-start gap-4 justify-between">
          <FlexBox className="flex-col gap-1">
            <Typography className="font-aeonik-bold text-base 2xl:text-xl text-neutral-700">
              Employment History -
            </Typography>
            <Typography className="text-base 2xl:text-xl text-neutral-700">
              Automatically share with Verified Data Contributors
            </Typography>
          </FlexBox>

          <FlexBox className="gap-4 md:gap-6 flex-col md:flex-row">
            <SwitchButtonWithLabel
              checked={checked}
              setChecked={setChecked}
              labelStyle="violet-switch-label"
              labelFirst="On"
              labelSecond="Off"

            />
          </FlexBox>
        </FlexBox>

        <FlexBox className="w-3/4 xl:w-full flex-col md:flex-row items-center text-center md:text-start gap-4 justify-between">
          <FlexBox className="flex-col gap-1">
            <Typography className="font-aeonik-bold text-base 2xl:text-xl text-neutral-700">
            Custom Data Sharing Settings
            </Typography>
            <Typography className="text-base 2xl:text-xl text-neutral-700">
            Apply my custom data sharing settings.
            </Typography>
          </FlexBox>
          <FlexBox className="gap-4 md:gap-6 flex-col md:flex-row">
            <SwitchButtonWithLabel
              checked={checked3}
              setChecked={setChecked3}
              labelStyle="violet-switch-label"
              labelFirst="On"
              labelSecond="Off"

            />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
