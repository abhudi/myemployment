import Typography from "@mui/material/Typography";

import FlexBox from "@/components/Common/FlexBox";

export default function ApiMetricsSummary() {
  return (
    <FlexBox className="flex-col gap-6 justify-start items-center bg-white px-1 md:px-4 3xl:px-7 4xl:px-10 py-5 md:py-10 w-full 2xl:w-1/3 rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="min-w-[270px] sm:min-w-[340px] w-1/3 2xl:w-full items-center border-2 border-blue25 rounded-xl px-4 sm:px-6 3xl:px-8 py-6 gap-2">
        <Typography className="text-blue400 text-xl sm:text-2xl 3xl:text-3xl font-aeonik-bold mt-1 min-w-14 sm:min-w-16 3xl:min-w-20">
          25
        </Typography>

        <Typography className="text-blue400 text-base sm:text-xl">
          Daily Request Limits
        </Typography>
      </FlexBox>

      <FlexBox className="min-w-[270px] sm:min-w-[340px] w-1/3 2xl:w-full items-center border-2 border-blue25 rounded-xl px-4 sm:px-6 3xl:px-8 py-6 gap-2">
        <Typography className="text-blue400 text-xl sm:text-2xl 3xl:text-3xl font-aeonik-bold mt-1 min-w-14 sm:min-w-16 3xl:min-w-20">
          70
        </Typography>

        <Typography className="text-blue400 text-base sm:text-xl">
          Current Rate Limiting
        </Typography>
      </FlexBox>

      <FlexBox className="min-w-[270px] sm:min-w-[340px] w-1/3 2xl:w-full items-center border-2 border-blue25 rounded-xl px-4 sm:px-6 3xl:px-8 py-6 gap-2">
        <Typography className="text-blue400 text-xl sm:text-2xl 3xl:text-3xl font-aeonik-bold mt-1 min-w-14 sm:min-w-16 3xl:min-w-20">
          20%
        </Typography>

        <Typography className="text-blue400 text-base sm:text-xl">
          Error Response Rates
        </Typography>
      </FlexBox>
    </FlexBox>
  );
}
