import Typography from "@mui/material/Typography";

import FlexBox from "@/components/Common/FlexBox";

export default function ComplianceStatus() {
  return (
    <FlexBox className="flex-col items-center xl:items-start bg-white px-4 md:px-6 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full xl:w-3/5 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-6">
        Compliance Status
      </Typography>

      <FlexBox className="flex-col md:flex-row w-full items-center md:items-stretch justify-center xl:justify-between gap-4 2xl:gap-6 3xl:gap-10">
        <FlexBox className="flex-col w-11/12 sm:w-3/4 md:w-auto justify-between items-center text-center rounded-3xl px-6 xl:px-3 2xl:px-6 3xl:px-10 py-6 gap-2 border-2 border-slate-100 grey-gradient">
          <img
            src="/assets/img/dashboard/verifier/root/complianceStatus/icon1.png"
            alt=""
          />
          <Typography className="text-blue400 font-aeonik-bold text-xl md:text-2xl">
            Reminder
          </Typography>
          <Typography className="text-neutral-700 text-sm md:text-base 2xl:text-lg">
            Your Compliance expired on <br />
            <span className="font-aeonik-bold">15 December 2024</span>
          </Typography>
        </FlexBox>

        <FlexBox className="flex-col w-11/12 sm:w-3/4 md:w-auto justify-start items-center text-center rounded-3xl px-2 md:px-6 xl:px-3 2xl:px-6 3xl:px-10 py-6 xl:py-8 gap-4 border-2 border-slate-100 grey-gradient">
          <img
            src="/assets/img/dashboard/verifier/root/complianceStatus/icon2.png"
            alt=""
          />
          <Typography className="text-blue400 mt-2 font-aeonik-bold text-xl md:text-2xl">
            Quick Access to <br />
            Compliance Documents
          </Typography>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
