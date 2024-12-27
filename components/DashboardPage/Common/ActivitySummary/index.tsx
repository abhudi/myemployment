import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";

export default function ActivitySummary({ style }: { style?: string }) {
  return (
    <FlexBox
      className={`flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 ${style ? style : "w-auto 2xl:w-3/4"} rounded-2xl border border-slate-200 shadow-card`}
    >
      <Typography className="text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-6">
        Activity Summary Widget
      </Typography>

      <FlexBox className="flex-col md:flex-row items-center md:items-stretch gap-6 3xl:gap-10">
        <FlexBox className="flex-col justify-between items-start rounded-3xl blue-gradient px-6 3xl:px-10 py-8 w-11/12 sm:w-3/4 md:w-1/2 gap-4 border border-purple300">
          <Typography className="text-blue250 font-aeonik-bold text-2xl 2xl:text-3xl max-w-2/3">
            Recent Data Access Requests
          </Typography>
          <FlexBox className="flex-col gap-4">
            <img
              draggable="false"
              src="/assets/img/dashboard/consumer/root/activitySummary/requests.png"
              alt=""
              className="w-min"
            />
            <Button className="text-base text-neutral-700 normal-case bg-light100 rounded-lg px-4 py-2 border border-solid border-purple300">
              View all Requests
            </Button>
          </FlexBox>
        </FlexBox>

        <FlexBox className="flex-col justify-between items-start rounded-3xl red-gradient px-6 3xl:px-10 py-8 w-11/12 sm:w-3/4 md:w-1/2 gap-4 border border-red200">
          <FlexBox className="flex-col">
            <Typography className="text-red400 font-aeonik-bold text-2xl 2xl:text-3xl max-w-2/3">
              Pending approvals
            </Typography>
            <Typography className="text-neutral-700 text-base">
              Lorem ipsum dolors sit ament quick words...
            </Typography>
          </FlexBox>

          <FlexBox className="flex-col gap-4">
            <img
              draggable="false"
              src="/assets/img/dashboard/consumer/root/activitySummary/pending.png"
              alt=""
              className="w-min"
            />
            <Button className="text-base text-neutral-700 normal-case bg-red100 rounded-lg px-4 py-2 border border-solid border-red200">
              View all Requests
            </Button>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
