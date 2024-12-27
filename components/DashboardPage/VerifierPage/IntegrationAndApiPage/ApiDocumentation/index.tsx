"use client";

import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";

import FlexBox from "@/components/Common/FlexBox";

export default function ApiDocumentation() {
  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="w-full flex-col justify-between items-center 2xl:items-start">
        <Typography className="text-center 2xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-2 md:mb-6">
          API Documentation
        </Typography>

        <FlexBox className="w-full xl:w-2/5">
          <InputBase
            placeholder="Search all documents..."
            endAdornment={
              <IconButton className="w-10 h-10 mx-1 md:mx-2">
                <SearchIcon className="text-blue400 text-3xl" />
              </IconButton>
            }
            className="ps-4 w-full border border-neutral-300 text-black font-aeonik bg-white rounded-lg p-1.5"
          />
        </FlexBox>
      </FlexBox>

      <Typography className="w-full text-center 2xl:text-start text-base md:text-xl font-aeonik-bold text-blue400 mt-8 mb-4">
        Code Samples:
      </Typography>

      <FlexBox className="w-full flex-col xl:flex-row items-center xl:items-start gap-4 md:gap-8">
        <FlexBox className="min-w-[280px] sm:min-w-[380px] md:min-w-[420px] xl:min-w-min w-1/2 flex-col gap-2 p-6 bg-light475 rounded-lg border border-purple225">
          <Typography className="font-aeonik-bold text-blue400 text-base md:text-xl">
            Python:
          </Typography>
          <Typography className="text-neutral-700 text-sm sm:text-base 2xl:text-xl">
            Curabitur hendrerit dui scelerisque laoase irsdsdi osdfis itti osd
            aso iasie iaseoiroreet dictum.
          </Typography>
        </FlexBox>

        <FlexBox className="min-w-[280px] sm:min-w-[380px] md:min-w-[420px] xl:min-w-min w-1/2 flex-col gap-2 p-6 bg-light475 rounded-lg border border-purple225">
          <Typography className="font-aeonik-bold text-blue400 text-base md:text-xl">
            Java:
          </Typography>
          <Typography className="text-neutral-700 text-sm sm:text-base 2xl:text-xl">
            Curabitur hendrerit dui scelerisque laoase irsdsdi osdfis itti osd
            aso iasie iaseoiroreet dictum.
          </Typography>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
