"use client";

import { Theme, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import { BarChart, LineChart } from "@mui/x-charts";

import FlexBox from "@/components/Common/FlexBox";

const reportingData = [9000, 3000, 2000, 2000];
const xLabels = ["Jul 2024", "Aug 2024", "Sep 2024", "Oct 2024"];

const TimeLaborLineChart = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("moblg"),
  );
  return (
    <LineChart
      width={isMobile ? 300 : 285}
      height={isMobile ? 200 : 175}
      series={[
        {
          data: reportingData,
          label: "Time",
          color: "#498dcb",
          showMark: false,
        },
      ]}
      xAxis={[
        {
          scaleType: "point",
          data: xLabels,
          disableTicks: true,
          stroke: "#1c2a59",
        },
      ]}
      yAxis={[
        {
          disableTicks: true,
        },
      ]}
      sx={{
        "& .MuiChartsAxis-line": {
          strokeWidth: "2 !important",
        },
        "& .MuiChartsAxis-tickContainer": {
          display: "none !important",
        },
      }}
    />
  );
};

const TimeLaborBarChart = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("moblg"),
  );
  return (
    <FlexBox>
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: ["Data Upload", "File Verification"],
            disableLine: true,
            disableTicks: true,
          },
        ]}
        yAxis={[
          {
            disableLine: true,
            disableTicks: true,
          },
        ]}
        sx={{
          "& .MuiChartsAxis-left": {
            display: "none !important",
          },
        }}
        series={[
          { id: 1, data: [40, 40], color: "#68a1d4" },
          { id: 2, data: [15, 15], color: "#bebebe" },
        ]}
        width={isMobile ? 300 : 285}
        height={isMobile ? 200 : 175}
        borderRadius={8}
        barLabel="value"
      />
    </FlexBox>
  );
};

export default function TimeLaborSavingsReport() {
  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full items-center 2xl:items-start rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center 3xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
        Time and Labor Savings Report
      </Typography>

      <FlexBox className="flex-col lg:flex-row gap-4 sm:gap-8">
        <FlexBox className="flex-col">
          <Typography className="text-blue400 text-xl font-aeonik-medium my-4 text-center lg:text-start">
            Time and Labor Savings Report
          </Typography>

          <FlexBox className="flex-col items-center bg-light450 border-2 border-pink50 rounded-2xl p-0 sm:p-2">
            <TimeLaborLineChart />
          </FlexBox>
        </FlexBox>

        <FlexBox className="flex-col">
          <Typography className="text-blue400 text-xl font-aeonik-medium my-4 text-center lg:text-start">
            Automation vs. Manually
          </Typography>

          <FlexBox className="flex-col items-center bg-green125 border-2 border-green200 rounded-2xl p-0 sm:p-2">
            <TimeLaborBarChart />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
