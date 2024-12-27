import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";
import FormControl from "@/components/Common/FormControl";

export default function ApiAccessManagement() {
  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center 2xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
        API Access Management
      </Typography>

      <FlexBox className="w-full flex-col items-center 2xl:items-start">
        <Typography className="text-blue400 text-base md:text-xl font-aeonik-bold mt-4 text-center md:text-start">
          API key generation and revocation tools
        </Typography>

        <FlexBox className="w-full flex-col 2xl:flex-row items-center 2xl:items-start gap-4">
          <FormControl
            className="text-start w-auto min-w-[280px] sm:min-w-[320px] md:min-w-[380px] md:w-1/2"
            placeholder="Api key genration text here..."
            labelStyle="text-sm sm:text-base font-aeonik-bold py-1 px-3 text-gray-700"
            inputStyle="p-1 rounded-lg"
            endAdornment={
              <IconButton>
                <ContentCopyIcon className="text-blue200 text-base sm:text-xl" />
              </IconButton>
            }
          />

          <Button className="mt-1 medium-blue-gradient px-6 py-3 text-base 3xl:text-lg rounded-lg font-bold text-white hover:text-blue200 transition-all duration-700 ease-in-out leading-none">
            Monitor your API
          </Button>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
