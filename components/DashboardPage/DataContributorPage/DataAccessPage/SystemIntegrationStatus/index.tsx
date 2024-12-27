"use client";

import Typography from "@mui/material/Typography";

import FlexBox from "@/components/Common/FlexBox";

export default function SystemIntegrationStatus() {
  return (
    <FlexBox className="flex-col justify-start items-center bg-white px-1 md:px-4 3xl:px-7 4xl:px-10 py-5 md:py-10 w-auto 3xl:w-2/5 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="w-full text-center 3xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-6">
        System Integration Status
      </Typography>

      <FlexBox className="w-2/5 min-w-[285px] md:min-w-[400px] 3xl:w-full flex-col gap-4 3xl:gap-8 mt-2 3xl:mt-8 mb-4 3xl:mb-0">
        <FlexBox className="items-center gap-2 md:gap-4 pink-gradient border-2 border-pink300 rounded-2xl px-3 3xl:px-6 py-6">
          <img
            draggable={false}
            src="/assets/img/dashboard/dataContributor/dataAccess/green.png"
            alt=""
            className="w-12 4xl:w-auto h-12 4xl:h-auto"
          />
          <Typography className="text-base md:text-xl 4xl:text-2xl font-aeonik-bold text-blue400">
            Current connection status to HR/payroll systems
          </Typography>
        </FlexBox>

        <FlexBox className="items-center gap-2 md:gap-4 light-purple-gradient border-2 border-purple300 rounded-2xl px-3 3xl:px-6 py-6">
          <img
            draggable={false}
            src="/assets/img/dashboard/dataContributor/dataAccess/success.png"
            alt=""
            className="w-12 4xl:w-auto h-auto"
          />
          <Typography className="text-base md:text-xl 4xl:text-2xl font-aeonik-bold text-blue400">
            Last Successful Data Pull timestamp
          </Typography>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
