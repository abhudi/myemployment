import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";

export default function DataContributorSearch() {
  return (
    <Container className="w-11/12 max-w-container mb-10 md:mb-20">
      <FlexBox className="w-full flex-col relative h-full items-center rounded-t-card rounded-bl-card bg-blue400 md:bg-white pt-8 md:pt-0 z-20">
        <img
          draggable={false}
          src="/assets/img/home/oldHome-1/dataContributorSearch/bg.png"
          alt=""
          className="hidden md:block"
        />

        <FlexBox className="flex-col w-full items-center text-white flex md:absolute top-10 lg:top-20 left-1/2 -translate-x-0 md:-translate-x-1/2 gap-5 2xl:gap-8">
          <Typography className="text-center w-11/12 lg:w-4/5 text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl font-aeonik-bold">
            Is your Data Contributor allowing your information to be sold? Enter
            your Data Contributor here
          </Typography>
          <InputBase
            placeholder="check here...."
            endAdornment={
              <Button
                variant="contained"
                className="h-10 md:h-11 rounded-card bg-blue150 min-w-20 xl:min-w-28 shadow-none font-aeonik text-sm xl:text-base"
              >
                Search
              </Button>
            }
            className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-1/3 text-black font-aeonik bg-white rounded-3xl ps-4 md:ps-8 p-1 shadow-xl"
          />
        </FlexBox>

        <img
          draggable={false}
          src="/assets/img/home/oldHome-1/dataContributorSearch/bg-mobile.png"
          alt=""
          className="block md:hidden"
        />
      </FlexBox>
    </Container>
  );
}
