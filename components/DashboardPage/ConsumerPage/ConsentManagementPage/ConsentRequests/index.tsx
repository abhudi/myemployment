import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";

export default function ConsentRequests() {
  return (
    <FlexBox className="flex-col justify-start items-center xl:items-start bg-white px-2 md:px-4 3xl:px-7 4xl:px-10 py-5 md:py-10 w-auto xl:w-full rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="w-full flex-col items-center xl:items-start gap-6">
        <FlexBox className="flex-col">
          <Typography className="text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-yellow300 my-2">
            Pending Consent Requests
          </Typography>

          <Typography className="text-base 2xl:text-xl 3xl:text-lg text-center md:text-start text-neutral-700">
            Here are some following Pending Consent Requests click to expand
          </Typography>
        </FlexBox>

        <FlexBox className="w-11/12 md:w-4/5 xl:w-full gap-4 flex-col items-start py-4 px-6 bg-yellow100 border border-yellow300 border-opacity-35 rounded-xl">
          <FlexBox className="gap-5 items-center">
            <img
              draggable={false}
              src="/assets/img/dashboard/consumer/consentManagement/pending.png"
              alt=""
            />
            <FlexBox className="gap-2 flex-col md:flex-row">
              <Typography className="text-base 2xl:text-xl text-neutral-700 font-bold">
                Title Short
              </Typography>
              <Typography className="text-base 2xl:text-xl text-neutral-700">
                Description of Pending Request
              </Typography>
            </FlexBox>
          </FlexBox>

          <FlexBox className="w-full justify-between flex-col md:flex-row gap-4 text-center md:text-start">
            <FlexBox className="flex-col gap-1">
              <Typography className="font-aeonik-bold text-base 2xl:text-xl text-blue400">
                Data requeted
              </Typography>
              <Typography className="text-base 2xl:text-xl text-neutral-700">
                15 Aug 2024
              </Typography>
            </FlexBox>

            <FlexBox className="flex-col gap-1">
              <Typography className="font-aeonik-bold text-base 2xl:text-xl text-blue400">
                Who is requesting the data
              </Typography>
              <Typography className="text-base 2xl:text-xl text-neutral-700">
                The Owner of the Company
              </Typography>
            </FlexBox>
          </FlexBox>

          <FlexBox className="w-full flex-col gap-1 text-center md:text-start">
            <Typography className="font-aeonik-bold text-base 2xl:text-xl text-blue400">
              Purpose for the request
            </Typography>
            <Typography className="text-base 2xl:text-xl text-neutral-700">
              Background Check
            </Typography>
          </FlexBox>
        </FlexBox>

        <FlexBox className="gap-2">
          <Button className="text-lg px-8 py-2 rounded-3xl font-bold text-white bg-green-500">
            Approve
          </Button>

          <Button className="text-lg px-8 py-2 rounded-3xl font-bold text-red-500 bg-red-100 border border-solid border-red-500">
            Deny
          </Button>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
