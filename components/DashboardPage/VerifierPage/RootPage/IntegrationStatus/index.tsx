import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";

export default function IntegrationStatus() {
  return (
    <FlexBox className="flex-col items-center bg-white px-6 3xl:px-7 4xl:px-10 py-5 md:py-10 w-full 2xl:w-1/4 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2">
        API Integration Status
      </Typography>
      <Typography className="texl-base 2xl:text-xl text-neutral-700 my-4">
        (for high-volume verifiers)
      </Typography>

      <FlexBox className="gap-4 flex-col w-11/12 sm:w-2/3 md:w-1/2 xl:w-full">
        <Button className="medium-blue-gradient py-2 text-base 3xl:text-lg rounded-xl font-aeonik-medium text-white hover:text-blue200 transition-all duration-700 ease-in-out">
          Check Current API <br />
          Health
        </Button>
        <Button className="medium-blue-gradient py-2 text-base 3xl:text-lg rounded-xl font-aeonik-medium text-white hover:text-blue200 transition-all duration-700 ease-in-out">
          Recent Usage <br />
          Satistics
        </Button>
      </FlexBox>
    </FlexBox>
  );
}
