"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";
import NormalSwitchButton from "@/components/Common/NormalSwitchButton";

export default function ActiveConsents() {
  const [checked, setChecked] = useState(false);

  return (
    <FlexBox className="flex-col justify-start items-center xl:items-start bg-white px-2 md:px-4 3xl:px-7 4xl:px-10 py-5 md:py-10 w-auto xl:w-full rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="w-full flex-col items-center xl:items-start gap-4 md:gap-10">
        <Typography className="gap-8 flex items-center text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue150 my-2">
          Your Active Consents
          <img
            draggable={false}
            src="/assets/img/dashboard/consumer/consentManagement/active.png"
            alt=""
            className="hidden md:block w-7 h-7 mb-1"
          />
        </Typography>

        <FlexBox className="w-full flex-col md:flex-row items-center md:items-start text-center md:text-start gap-4 justify-evenly xl:justify-between">
          <FlexBox className="flex-col gap-1">
            <Typography className="font-aeonik-bold text-base 2xl:text-xl text-blue400">
              Data Shared
            </Typography>
            <Typography className="text-base 2xl:text-xl text-neutral-700">
              Jonathan Fox
            </Typography>
          </FlexBox>

          <FlexBox className="flex-col gap-1">
            <Typography className="font-aeonik-bold text-base 2xl:text-xl text-blue400">
              Employment Dates
            </Typography>
            <Typography className="text-base 2xl:text-xl text-neutral-700">
              20 January 2022
            </Typography>
          </FlexBox>

          <FlexBox className="flex-col gap-1">
            <Typography className="font-aeonik-bold text-base 2xl:text-xl text-blue400">
              Salary
            </Typography>
            <Typography className="text-base 2xl:text-xl text-neutral-700">
              $2,000 USD
            </Typography>
          </FlexBox>
        </FlexBox>

        <FlexBox className="flex-col gap-1 text-center md:text-start">
          <Typography className="font-aeonik-bold text-base 2xl:text-xl text-blue400">
            With Whom
          </Typography>
          <Typography className="text-base 2xl:text-xl text-neutral-700">
            Name of the Recipient
          </Typography>
        </FlexBox>

        <FlexBox className="gap-4 md:gap-6 flex-col md:flex-row">
          <FlexBox className="items-center rounded-3xl bg-light75 border border-purple50 p-1 pe-4">
            <NormalSwitchButton
              checked={checked}
              setChecked={setChecked}
              labelStyle="green-switch-label w-7"
              transition="translate-x-[42px]"
            />
            <Typography className="text-lg text-blue400">Revoke</Typography>
          </FlexBox>

          <Button className="text-lg px-8 py-2 rounded-3xl text-blue400 bg-sky-100 border border-sky-200">
            Modify
          </Button>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
