import Typography from "@mui/material/Typography";

import FlexBox from "@/components/Common/FlexBox";

export default function SandboxEnvironment() {
  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full 3xl:w-1/2 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center 3xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-6">
        Sandbox Environment
      </Typography>

      <FlexBox className="flex-col md:flex-row justify-center 3xl:justify-start items-center md:items-stretch gap-4 3xl:gap-10 mb-2">
        <FlexBox className="min-w-[260px] flex-col justify-between items-center text-center rounded-3xl green-gradient px-4 py-8 w-11/12 sm:w-1/3 3xl:w-1/2 gap-4 border border-green200">
          <img
            draggable="false"
            src="/assets/img/dashboard/verifier/integrationAndAPI/api.png"
            alt=""
            className="w-min"
          />
          <Typography className="text-blue400 font-aeonik-bold text-2xl max-w-2/3">
            Test Credentials Management
          </Typography>
        </FlexBox>

        <FlexBox className="min-w-[260px] flex-col justify-start items-center text-center rounded-3xl purple-gradient px-4 py-8 w-11/12 sm:w-1/3 3xl:w-1/2 gap-4 border border-purple100">
          <img
            draggable="false"
            src="/assets/img/dashboard/verifier/integrationAndAPI/data.png"
            alt=""
            className="w-min"
          />
          <Typography className="text-blue400 font-aeonik-bold text-2xl max-w-2/3">
            Simulated Data for Testing
          </Typography>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
