import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";

import FlexBox from "@/components/Common/FlexBox";

export default function DataStorage() {
  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-auto 2xl:w-2/3 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center 3xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
        Data Storage
      </Typography>

      <FlexBox className="w-full mt-8 flex-col 2xl:flex-row justify-start items-center 3xl:items-stretch gap-6">
        <FlexBox className="min-w-[270px] sm:min-w-[300px] w-2/3 3xl:w-auto flex-col items-center text-center pink-gradient border-2 border-pink250 px-6 3xl:px-10 py-2 md:py-4 3xl:py-6 rounded-2xl">
          <Typography className="text-5xl md:text-6xl 4xl:text-7xl font-aeonik-bold text-blue175 py-2 md:py-4 mt-1 md:mt-3">
            235
          </Typography>
          <Typography className="font-aeonik-bold text-blue400 text-base md:text-xl 4xl:text-2xl">
            Consumer Filed Stores <br />
            (Traditional Model)
          </Typography>
        </FlexBox>

        <FlexBox className="min-w-[270px] sm:min-w-[300px] w-2/3 3xl:w-auto flex-col items-center text-center purple-gradient border-2 border-purple200 px-6 3xl:px-10 py-2 md:py-4 3xl:py-6 rounded-2xl">
          <FlexBox className="items-center py-2 md:py-4">
            <Typography className="text-5xl md:text-6xl 4xl:text-7xl font-aeonik-bold text-blue175 pe-4 border-r-2 border-r-white pt-3">
              180
            </Typography>

            <Typography className="flex text-5xl md:text-6xl 4xl:text-7xl font-aeonik-bold items-center text-gray500 pt-3 ps-4 border-l-2 border-l-purple250">
              <DeleteIcon className="text-4xl md:text-5xl 4xl:text-6xl -mt-3" />
              100
            </Typography>
          </FlexBox>

          <Typography className="font-aeonik-bold text-blue400 text-base md:text-xl 4xl:text-2xl">
            Files accessed and deleted <br />
            (Saas Model)
          </Typography>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
