import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";

export default function CredentialingDashboard() {
  return (
    <FlexBox className="flex-col gap-4 md:gap-8 bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full items-center 2xl:items-start rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center 3xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
        Credentialing Dashboard
      </Typography>

      <FlexBox className="w-full flex-col md:flex-row items-center md:items-start justify-center 2xl:justify-start gap-6 3xl:gap-8">
        <FlexBox className="flex-col text-center justify-center items-center rounded-3xl py-6 xl:py-8 min-w-[280px] 3xl:min-w-[300px] max-w-[350px] w-1/2 2xl:w-1/3 border-2 border-green300 bg-green100">
          <Chip
            label="Active"
            className="rounded-lg w-28 h-10 pt-1 text-white capitalize text-lg font-aeonik-bold bg-green-800"
          />
          <Typography className="text-green450 text-center font-aeonik-bold text-2xl w-full mt-4 mb-2">
            Current Credential
          </Typography>

          <Typography className="text-neutral-700 text-center text-base w-full">
            Expired on: 25 December, 2024
          </Typography>
        </FlexBox>

        <FlexBox className="flex-col text-center justify-center items-center rounded-3xl py-6 xl:py-8 min-w-[280px] 3xl:min-w-[300px] max-w-[350px] w-1/2 2xl:w-1/3 border-2 border-pink200 bg-pink100">
          <Chip
            label="Expired"
            className="rounded-lg w-28 h-10 pt-1 text-white capitalize text-lg font-aeonik-bold bg-red-700"
          />
          <Typography className="text-red500  text-center font-aeonik-bold text-2xl w-full mt-4 mb-2">
            Past Credential
          </Typography>

          <Typography className="text-neutral-700 text-center text-base w-full">
            Expired on: 20 December, 2024
          </Typography>
        </FlexBox>
      </FlexBox>

      <FlexBox className="gap-3 md:gap-6 flex-col md:flex-row mt-2">
        <Button className="faq-blue-gradient px-8 py-4 text-base 3xl:text-lg rounded-lg font-bold text-white transition-all duration-700 ease-in-out leading-none">
          Update Credentials
        </Button>

        <Button className="bg-gray300 px-8 py-4 text-base 3xl:text-lg rounded-lg font-bold text-blue200 transition-all duration-700 ease-in-out leading-none">
          Re-Credentials
        </Button>
      </FlexBox>
    </FlexBox>
  );
}
