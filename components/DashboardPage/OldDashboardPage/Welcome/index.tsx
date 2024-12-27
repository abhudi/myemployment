"use client";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import { useProfile } from "@/api/requests/auth/me";
import FlexBox from "@/components/Common/FlexBox";

export default function Welcome() {
  const { data: me } = useProfile();

  return (
    <FlexBox className="gap-6 2xl:gap-12 w-full flex-col xl:flex-row">
      <FlexBox
        className="w-full xl:w-1/2 2xl:w-2/3 justify-center items-center rounded-2xl"
        id="dashboard-welcome"
      >
        <Typography className="text-white font-bold text-4xl md:text-5xl 2xl:text-6xl py-20 2xl:py-0">
          Welcome{" "}
          {me ? (
            me.first_name
          ) : (
            <CircularProgress size={32} className="text-white" />
          )}
        </Typography>
      </FlexBox>

      <FlexBox className="bg-white px-5 py-6 rounded-2xl w-full xl:w-1/2 2xl:w-1/3 flex-col gap-8 justify-center items-center min-h-[241px]">
        {me ? (
          <>
            <FlexBox className="w-full items-center justify-center sm:justify-start gap-5 sm:gap-8">
              <img
                draggable={false}
                src="/assets/img/dashboard/avatar.png"
                alt=""
                className="w-20 sm:w-min"
              />
              <FlexBox className="flex-col">
                <Typography className="text-blue400 font-bold text-2xl">
                  {me.first_name + " " + me.last_name}
                </Typography>
                <Typography className="capitalize text-base text-neutral-700">
                  {me.role}
                </Typography>
              </FlexBox>
            </FlexBox>

            <FlexBox className="w-full justify-around gap-2 flex-col sm:flex-row">
              <FlexBox className="flex-col items-center sm:items-start">
                <Typography className="text-sm 4xl:text-lg text-neutral-700">
                  Job Title
                </Typography>
                <Typography className="text-sm 4xl:text-lg w-max text-blue400 font-bold">
                  {me.job_title}
                </Typography>
              </FlexBox>

              <Box className="bg-slate-200 hidden sm:block w-[2px]"></Box>

              <FlexBox className="flex-col items-center sm:items-start">
                <Typography className="text-sm 4xl:text-lg text-neutral-700">
                  Employment Date
                </Typography>
                <Typography className="text-sm 4xl:text-lg w-max text-blue400 font-bold">
                  July 2018 - Present
                </Typography>
              </FlexBox>
            </FlexBox>
          </>
        ) : (
          <FlexBox>
            <CircularProgress size={35} className="text-blue400" />
          </FlexBox>
        )}
      </FlexBox>
    </FlexBox>
  );
}
