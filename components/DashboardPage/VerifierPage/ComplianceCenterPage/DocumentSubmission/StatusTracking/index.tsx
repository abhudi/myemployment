"use client";

import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import clsx from "clsx";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";
import { statusTrackingData } from "@/constant/dashboardPage";
import truncateText from "@/utils/truncateText";

export default function StatusTracking() {
  return (
    <FlexBox className="flex-col items-center 2xl:items-start w-full">
      <FlexBox className="gap-3 max-w-[500px] flex-col w-full md:w-3/4 2xl:w-full items-center max-h-[330px] overflow-y-auto px-1">
        {statusTrackingData.map(({ status, title, date }, i) => (
          <FlexBox
            key={i}
            className={clsx(
              "flex-col w-full border-2 rounded-lg p-2 gap-2 relative",
              status === "submitted"
                ? "bg-slate200 border-gray300"
                : status === "approved"
                  ? "bg-green100 border-green300"
                  : "bg-pink100 border-pink200",
            )}
          >
            <FlexBox className="w-full gap-2 items-center">
              <Chip
                className={clsx(
                  "py-2 w-32 sm:w-44 h-9 capitalize font-bold text-white rounded-lg text-xs sm:text-sm",
                  status === "submitted"
                    ? "bg-blue200"
                    : status === "approved"
                      ? "bg-green-800"
                      : "bg-red-700",
                )}
                label={status}
              />
              <FlexBox className="w-full gap-0 sm:gap-2 flex-col sm:flex-row justify-between mt-1">
                <Typography className="text-neutral-700 font-aeonik-bold text-xs sm:text-sm 3xl:text-base">
                  {truncateText(title, 13)}
                </Typography>
                <Typography className="capitalize text-dark text-aeonik-bold text-sm 3xl:text-base">
                  {date}
                </Typography>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        ))}
      </FlexBox>

      <Button className="mt-4 text-blue200 mb-4 md:mb-2 normal-case rounded-xl px-6 py-2 text-base 3xl:text-lg border border-solid border-purple300 leading-none">
        Load More
      </Button>
    </FlexBox>
  );
}
