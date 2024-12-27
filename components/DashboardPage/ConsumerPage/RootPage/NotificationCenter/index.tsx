"use client";

import { Theme, useMediaQuery } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";
import { notificationData } from "@/constant/dashboardPage";
import truncateText from "@/utils/truncateText";

const NotificationTable = () => {
  const isDesktop = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("desktop"),
  );

  const isTablet = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("tablet"),
  );

  return (
    <FlexBox className="flex-col my-2">
      {notificationData.map(({ type, title, content, date }, i) => (
        <FlexBox
          key={i}
          className={`border ${i === notificationData.length - 1 ? "border-b" : "border-b-0"} ${
            i === 0 && "shadow-table"
          } justify-between items-center border-neutral-200 rounded-xl p-3 pe-4 lg:pe-6`}
        >
          <FlexBox className="items-center gap-2 lg:gap-4">
            <Checkbox
              color={i === 0 ? "primary" : "secondary"}
              className="w-6 md:w-auto"
            />
            <FlexBox className="items-start sm:items-center gap-2 lg:gap-4 flex-col sm:flex-row">
              <Chip
                label={type}
                className={`rounded-lg h-7 text-white ${i === 0 ? "bg-blue400" : "bg-zinc-500"}`}
              />
              <FlexBox className="gap-1 flex-col md:flex-row">
                <Typography className="text-neutral-700 text-base font-aeonik-medium font-bold">
                  {isDesktop
                    ? truncateText(title, 37)
                    : truncateText(title, 20)}
                  {isTablet ? " -" : ""}
                </Typography>
                <Typography className="hidden sm:block text-neutral-700 text-base">
                  {isDesktop
                    ? truncateText(content, 60)
                    : truncateText(content, 25)}
                </Typography>
              </FlexBox>
            </FlexBox>
          </FlexBox>
          <Typography className="text-blue400 font-aeonik-bold text-base">
            {date}
          </Typography>
        </FlexBox>
      ))}
    </FlexBox>
  );
};

export default function NotificationCenter() {
  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="w-full justify-between items-center flex-col md:flex-row">
        <Typography className="flex gap-2 items-center text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-2 md:mb-6">
          <img
            draggable="false"
            src="/assets/img/dashboard/consumer/root/notificationCenter/alert.png"
            alt=""
            className="mb-2 hidden md:block"
          />
          Notification Center
        </Typography>

        <Button className="text-base text-neutral-700 mb-4 md:mb-2 normal-case rounded-lg px-6 py-2 border border-solid border-purple300">
          View all Notifications
        </Button>
      </FlexBox>

      <NotificationTable />
    </FlexBox>
  );
}
