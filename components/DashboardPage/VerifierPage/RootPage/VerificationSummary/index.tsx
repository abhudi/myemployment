import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";

export default function VerificationSummary() {
  return (
    <FlexBox className="flex-col items-center xl:items-start bg-white px-4 md:px-6 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full 2xl:w-3/4 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-6">
        Verification Request Summary
      </Typography>

      <FlexBox className="flex-col w-full md:flex-row items-center md:items-stretch gap-4 2xl:gap-6 3xl:gap-10 mb-6">
        <FlexBox className="flex-col justify-between items-center md:items-start rounded-3xl px-6 xl:px-3 2xl:px-6 3xl:px-10 py-6 xl:py-8 w-11/12 sm:w-3/4 md:w-1/3 gap-4 border-2 border-green300 bg-green100">
          <Typography className="text-green500 text-center md:text-start font-aeonik-bold text-2xl 2xl:text-3xl w-2/3">
            Approved Verification
          </Typography>
          <Button className="my-2 min-w-36 text-base text-neutral-700 normal-case bg-white rounded-lg px-3 py-2 border border-solid border-green500">
            View Approved
          </Button>
        </FlexBox>

        <FlexBox className="flex-col justify-between items-center md:items-start rounded-3xl px-6 xl:px-3 2xl:px-6 3xl:px-10 py-6 xl:py-8 w-11/12 sm:w-3/4 md:w-1/3 gap-4 border-2 border-yellow200 bg-yellow100">
          <Typography className="text-yellow300 text-center md:text-start font-aeonik-bold text-2xl 2xl:text-3xl w-2/3">
            Pending Verification
          </Typography>
          <Button className="my-2 min-w-36 text-base text-neutral-700 normal-case bg-white rounded-lg px-3 py-2 border border-solid border-yellow300">
            View Pending
          </Button>
        </FlexBox>

        <FlexBox className="flex-col justify-between items-center md:items-start rounded-3xl px-6 xl:px-3 2xl:px-6 3xl:px-10 py-6 xl:py-8 w-11/12 sm:w-3/4 md:w-1/3 gap-4 border-2 border-pink200 bg-pink100">
          <Typography className="text-red500 text-center md:text-start font-aeonik-bold text-2xl 2xl:text-3xl w-2/3">
            Denied Verification
          </Typography>
          <Button className="my-2 min-w-36 text-base text-neutral-700 normal-case bg-white rounded-lg px-3 py-2 border border-solid border-red500">
            View Denied
          </Button>
        </FlexBox>
      </FlexBox>

      <Button className="medium-blue-gradient py-4 px-6 md:px-12 text-base 3xl:text-lg rounded-xl font-aeonik-medium text-white hover:text-blue200 transition-all duration-700 ease-in-out">
        Create New Request
      </Button>
    </FlexBox>
  );
}
