"use client";

import { Theme, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import { PieChart } from "@mui/x-charts/PieChart";

import FlexBox from "@/components/Common/FlexBox";

export default function VerificationRequestSummary() {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("moblg"),
  );

  return (
    <FlexBox className="flex-col justify-start items-center bg-white px-1 md:px-4 3xl:px-7 4xl:px-10 py-5 md:py-10 w-auto 2xl:w-1/3 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="w-full text-center 3xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-6">
        Verification Request Summary
      </Typography>

      <FlexBox className="w-auto min-w-[270px] sm:min-w-[350px] items-center justify-center pink-gradient border-2 border-pink250 rounded-xl py-6">
        <PieChart
          height={isMobile ? 300 : 240}
          series={[
            {
              data: [
                { id: 0, value: 30, label: "Not added", color: "#fff" },
                { id: 1, value: 12, label: "Pending", color: "#ecc44d" },
                { id: 2, value: 9, label: "Fail", color: "#c13a4c" },
                { id: 3, value: 18, label: "Pass", color: "#009933" },
              ],
              highlightScope: { fade: "global", highlight: "item" },
              faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
              innerRadius: isMobile ? 50 : 30,
              arcLabel: (params) => params.label ?? "",
            },
          ]}
          {...pieParams}
        />
      </FlexBox>
    </FlexBox>
  );
}

const pieParams = {
  margin: { right: 0 },
  slotProps: { legend: { hidden: true } },
};
