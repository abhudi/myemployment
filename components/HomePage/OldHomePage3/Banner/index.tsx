import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";

export default function Banner() {
  return (
    <FlexBox className="relative" id="oldHome3-banner">
      <img
        draggable={false}
        src="/assets/img/home/oldHome-3/banner/bg.png"
        alt=""
        className="hidden xl:block"
      />
      <img
        draggable={false}
        src="/assets/img/home/oldHome-3/banner/image.png"
        alt=""
        className="w-52 2xl:w-min hidden md:block absolute right-16 lg:right-28 -bottom-20 lg:-bottom-24"
      />

      <FlexBox className="relative xl:absolute pb-[350px] md:pb-[450px] xl:pb-0 left-1/2 -translate-x-1/2 top-0 pt-20">
        <FlexBox className="flex-col items-center">
          <Typography className="text-center text-blue400 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-aeonik-bold mx-2 md:mx-0">
            is Your Data Being Resold
            <br />
            to 3rd Parties
          </Typography>

          <Typography className="text-neutral-700 text-xl py-6 text-center mx-4 sm:mx-8 md:mx-0">
            Is Your Data Contributor Allowing Your Data to Be Sold to Third
            Parties and Marketers?
          </Typography>

          <InputBase
            placeholder="check here...."
            endAdornment={
              <Button
                variant="contained"
                className="h-11 rounded-card bg-blue150 min-w-20 xl:min-w-28 shadow-none font-aeonik text-sm xl:text-base"
              >
                Search
              </Button>
            }
            className="w-3/4 text-black font-aeonik bg-white rounded-3xl ps-8 p-1 shadow-xl"
          />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
