import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";

export default function DataAccessRequest() {
  return (
    <FlexBox className="flex-col justify-start items-center bg-white px-2 md:px-4 3xl:px-7 4xl:px-10 py-5 md:py-10 w-auto xl:w-full rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="flex-col items-center xl:items-start">
        <Typography className="w-full text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
          Data Access Request
        </Typography>

        <Typography className="w-full text-base text-center xl:text-start text-neutral-700 mb-6">
          Click here to request access to your complete employment record
        </Typography>

        <Button className="medium-blue-gradient pt-2 xl:pt-4 pb-1.5 xl:pb-3 ps-2 xl:ps-4 pe-4 xl:pe-6 text-base 3xl:text-lg rounded-xl font-aeonik-medium text-white hover:text-blue200 transition-all duration-700 ease-in-out leading-none gap-2">
          <AddIcon className="text-3xl xl:text-4xl mb-1" />
          New Data Request
        </Button>
      </FlexBox>
    </FlexBox>
  );
}
