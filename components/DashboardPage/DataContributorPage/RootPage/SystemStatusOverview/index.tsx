import Typography from "@mui/material/Typography";

import FlexBox from "@/components/Common/FlexBox";

export default function SystemStatusOverview() {
  return (
    <FlexBox className="justify-between py-5 md:py-12 flex-col gap-5 md:gap-8 items-start">
      <Typography className="px-4 md:px-6 3xl:px-8 4xl:px-10 w-full xl:w-auto text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400">
        System Status Overview
      </Typography>

      <FlexBox className="w-full flex-col md:flex-row items-center md:items-stretch justify-center 2xl:justify-start gap-4 xl:gap-6 2xl:gap-10">
        <FlexBox className="w-72 sm:w-80 md:w-auto green-gradient items-center gap-4 2xl:gap-6 p-5 sm:p-7 2xl:p-10 rounded-3xl border-2 border-green200">
          <img
            draggable="false"
            src="/assets/img/dashboard/dataContributor/root/systemStatusOverview/icon1.png"
            alt=""
            className="w-12 md:w-16 3xl:w-auto"
          />
          <Typography className="text-blue400 font-aeonik-bold text-xl lg:text-2xl 3xl:text-3xl">
            Data <br />
            Retention Status
          </Typography>
        </FlexBox>

        <FlexBox className="w-72 sm:w-80 md:w-auto purple-gradient items-center gap-4 2xl:gap-6 p-5 sm:p-7 2xl:p-10 rounded-3xl border-2 border-purple100">
          <img
            draggable="false"
            src="/assets/img/dashboard/dataContributor/root/systemStatusOverview/icon2.png"
            alt=""
            className="w-12 md:w-16 3xl:w-auto"
          />
          <Typography className="text-blue400 font-aeonik-bold text-xl lg:text-2xl 3xl:text-3xl">
            Recent <br />
            Compliance alerts
          </Typography>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
