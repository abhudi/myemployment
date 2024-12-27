"use client";

import { Theme, useMediaQuery } from "@mui/material";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

import FlexBox from "@/components/Common/FlexBox";
import { dataContributorValidationSummaryData } from "@/constant/dashboardPage";
import truncateText from "@/utils/truncateText";

const ValidationTable = () => {
  const isDesktop = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("desktop"),
  );

  return (
    <FlexBox className="flex-col my-2 max-h-[168px] overflow-y-auto">
      {dataContributorValidationSummaryData.map(
        ({ title, description, status, date }, i) => (
          <FlexBox
            key={i}
            className="cursor-pointer justify-between items-center rounded-xl p-3 hover:bg-slate-100 transition-all duration-300 ease-in-out"
          >
            <FlexBox className="items-start sm:items-center gap-3 lg:gap-4">
              <Typography className="text-blue400 font-aeonik-bold text-base">
                {date}
              </Typography>
              <FlexBox className="gap-1 flex-col md:flex-row">
                <Typography className="text-neutral-700 text-base font-aeonik-medium font-bold">
                  {isDesktop
                    ? truncateText(title, 15)
                    : truncateText(title, 10)}
                </Typography>
                <Typography className="hidden sm:block text-neutral-700 text-base">
                  {isDesktop
                    ? truncateText(description, 41)
                    : truncateText(description, 20)}
                </Typography>
              </FlexBox>
            </FlexBox>
            <Chip
              label={status}
              className={`capitalize rounded-lg text-xs md:text-sm w-[84px] md:w-24 h-8 text-white ${status == "successful" ? "bg-green-800" : "bg-red-600"}`}
            />
          </FlexBox>
        ),
      )}
    </FlexBox>
  );
};

export default function ValidationSummary() {
  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-auto xl:w-2/3 rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="w-full justify-between items-center flex-col md:flex-row">
        <Typography className="w-full text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-2 md:mb-6">
          Data Validation Summary
        </Typography>
      </FlexBox>

      <ValidationTable />
    </FlexBox>
  );
}
