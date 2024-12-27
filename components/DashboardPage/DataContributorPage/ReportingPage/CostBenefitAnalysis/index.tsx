import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";
import FormControl from "@/components/Common/FormControl";

export default function CostBenefitAnalysis() {
  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center 2xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
        Cost Benefit Analysis
      </Typography>

      <FlexBox className="w-full flex-col md:flex-row items-center md:items-start gap-6">
        <FlexBox className="w-full md:w-3/5 flex-col items-center md:items-start">
          <Typography className="text-blue400 text-xl font-aeonik-bold my-4 text-center md:text-start">
            ROI Calculations <br />
            Based on Platform Usage
          </Typography>

          <FlexBox className="gap-0 sm:gap-4 flex-col sm:flex-row">
            <FormControl
              className="mb-0 sm:mb-4 text-start w-full md:w-2/5"
              placeholder="Add Income"
              labelStyle="text-base font-aeonik-bold py-1 px-3 text-gray-700"
              inputStyle="p-1 bg-light50 rounded-lg"
            />

            <FormControl
              className="mb-4 text-start w-full md:w-2/5"
              placeholder="Add Data"
              labelStyle="text-base font-aeonik-bold py-1 px-3 text-gray-700"
              inputStyle="p-1 bg-light50 rounded-lg"
            />
          </FlexBox>

          <Button className=" medium-blue-gradient px-6 py-3 text-base 3xl:text-lg rounded-lg font-bold text-white hover:text-blue200 transition-all duration-700 ease-in-out leading-none">
            Calculate Now
          </Button>
        </FlexBox>

        <FlexBox className="min-w-[280px] sm:min-w-[330px] md:min-w-min w-1/2 md:w-2/5 flex-col justify-center items-center border-2 border-pink50 rounded-2xl px-6">
          <Typography className="text-gray500 text-6xl md:text-7xl font-aeonik-bold mt-4 mb-0 sm:mb-4 text-center md:text-start">
            100
          </Typography>
          <Typography className="text-blue400 text-xl 3xl:text-2xl font-aeonik-bold my-2 text-center">
            Your Projections for Future Savings
          </Typography>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
