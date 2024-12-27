import Typography from "@mui/material/Typography";

import FlexBox from "@/components/Common/FlexBox";

export default function DocumentationAccess() {
  return (
    <FlexBox className="flex-col mt-6 2xl:mt-20 bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full 2xl:w-2/3 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center 2xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
        Documentation Access
      </Typography>

      <FlexBox className="w-full mt-4 md:mt-8 flex-col justify-start items-center 2xl:items-start gap-4 sm:gap-6">
        <Typography className="min-w-[280px] sm:min-w-[350px] md:min-w-[450px] w-1/2 2xl:w-auto items-center text-center pink-gradient border-2 border-pink250 px-3 sm:px-5 md:px-10 py-6 sm:py-8 rounded-3xl text-blue400 text-lg sm:text-xl md:text-2xl mt-1">
          View API Documentation
        </Typography>

        <Typography className="min-w-[280px] sm:min-w-[350px] md:min-w-[450px] w-1/2 2xl:w-auto items-center text-center bg-green125 border-2 border-green150 px-3 sm:px-5 md:px-10 py-6 sm:py-8 rounded-3xl text-blue400 text-lg sm:text-xl md:text-2xl mt-1">
          Interative API Testing Console
        </Typography>
      </FlexBox>
    </FlexBox>
  );
}
