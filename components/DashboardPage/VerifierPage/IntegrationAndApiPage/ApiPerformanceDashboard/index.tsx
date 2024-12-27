"use client";

import { Theme, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import { BarChart, LineChart } from "@mui/x-charts";

import FlexBox from "@/components/Common/FlexBox";

const reportingData = [9000, 3000, 2000, 2000];
const xLabels = ["Jul 2024", "Aug 2024", "Sep 2024", "Oct 2024"];

const ApiPerformanceLineChart = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("moblg"),
  );
  return (
    <LineChart
      width={220}
      height={200}
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

const ApiPerformanceBarChart = () => {
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
          "& .MuiChartsAxis-bottom": {
            display: "none !important",
          },
        }}
        series={[
          { id: 1, data: [40, 40], color: "#68a1d4" },
          { id: 2, data: [15, 15], color: "#bebebe" },
        ]}
        width={220}
        height={200}
        borderRadius={8}
      />
    </FlexBox>
  );
};

export default function ApiPerformanceDashboard() {
  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full 3xl:w-1/2 items-center 32xl:items-start rounded-2xl border border-slate-200 shadow-card">
      <Typography className="w-full text-center 3xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
        API Performance Dashboard
      </Typography>

      <Typography className="text-blue400 text-xl font-aeonik-medium my-4 text-center">
        Real-Time Metrics
      </Typography>

      <FlexBox className="flex-col lg:flex-row gap-4 sm:gap-8">
        <FlexBox className="flex-col">
          <FlexBox className="flex-col items-center bg-light450 border-2 border-pink50 rounded-2xl p-0 sm:p-2">
            <ApiPerformanceLineChart />
          </FlexBox>

          <Typography className="text-dark text-base my-4 text-center">
            Response Times
          </Typography>
        </FlexBox>

        <FlexBox className="flex-col">
          <FlexBox className="flex-col items-center bg-green125 border-2 border-green200 rounded-2xl p-0 sm:p-2">
            <ApiPerformanceBarChart />
          </FlexBox>

          <Typography className="text-dark text-base my-4 text-center">
            Usage Statistics
          </Typography>
        </FlexBox>
      </FlexBox>

      <Typography className="text-blue400 text-xl font-aeonik-medium my-4 text-center">
        Rate Limit
      </Typography>

      <FlexBox className="w-11/12 sm:w-4/5 md:w-2/3 3xl:w-full p-6 bg-light475 rounded-lg border border-purple225">
        <Typography className="text-neutral-700 text-base">
          Rate limit information will be here Donec mollis vehicula nulla eu
          porta. Vestibuluma sapien.....
        </Typography>
      </FlexBox>
    </FlexBox>
  );
}
