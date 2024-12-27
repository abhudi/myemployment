import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";

export default function BillingOverview() {
  return (
    <FlexBox className="flex-col items-center xl:items-start bg-white px-4 md:px-6 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full xl:w-2/5 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-6">
        Billing Overview
      </Typography>

      <FlexBox className="flex-col items-center justify-center w-full gap-4 2xl:gap-6">
        <Typography className="text-black font-aeonik-bold text-xl md:text-2xl">
          Current credit balance <br />
        </Typography>
        <Typography className="text-4xl text-blue200">$250.04</Typography>
        <FlexBox className="gap-4 flex-col 2xl:flex-row">
          <Button className="text-base text-neutral-700 normal-case bg-white rounded-lg px-4 py-2 border border-solid border-green500">
            View Invoice
          </Button>
          <Button className="text-base text-neutral-700 normal-case bg-white rounded-lg px-4 py-2 border border-solid border-green500">
            View Detailed Billing
          </Button>
        </FlexBox>
        <Button className="medium-blue-gradient py-3 px-8 text-base 3xl:text-lg rounded-xl font-aeonik-medium text-white hover:text-blue200 transition-all duration-700 ease-in-out">
          Add Credit
        </Button>
      </FlexBox>
    </FlexBox>
  );
}
