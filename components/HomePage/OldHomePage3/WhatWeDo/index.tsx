import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";
import { whatWeDoData } from "@/constant/homePage/oldHomePage3";

export default function WhatWeDo() {
  return (
    <Container className="w-11/12 max-w-container my-5 sm:my-10 xl:my-20 flex-col items-center text-center">
      <Typography className="text-xl md:text-2xl text-blue150 font-aeonik-bold py-4">
        What we do
      </Typography>

      <Typography className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-4/5 xl:w-1/2 text-blue400 font-aeonik-bold">
        Application Use Cases for MyEmployment App
      </Typography>

      <FlexBox className="flex-col lg:flex-row items-center w-full justify-between 2xl:justify-evenly my-5 xl:my-10 gap-5 sm:gap-10 xl:gap-20 2xl:gap-8">
        {whatWeDoData.map(({ image, title, content }, i) => (
          <FlexBox
            key={i}
            className="flex-col rounded-card justify-between bg-slate-200 flex-1 text-start relative max-w-card group hover:bg-blue400 transition-all duration-300 ease-out"
          >
            <FlexBox className="absolute top-8 2xl:top-16 left-8 2xl:left-10">
              <FlexBox className="flex-col items-start gap-2 2xl:gap-4">
                <Typography className="text-blue400 text-2xl sm:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-aeonik-bold w-11/12 2xl:w-4/5 group-hover:text-white transition-all duration-300 ease-out text">
                  {title}
                </Typography>
                <Typography className="text-sm sm:text-lg lg:text-sm xl:text-base 2xl:text-lg text-neutral-700 w-11/12 2xl:w-4/5 group-hover:text-white transition-all duration-300 ease-out">
                  {content}
                </Typography>
                <Button
                  variant="outlined"
                  className="h-11 px-6 rounded-3xl shadow-none font-aeonik-bold text-sm xl:text-base border-2 border-blue150 text-blue150 group-hover:bg-blue150 group-hover:text-white transition-all duration-300 ease-out"
                >
                  Learn More
                </Button>
              </FlexBox>
            </FlexBox>

            <img
              draggable={false}
              src={image}
              alt=""
              className="w-min rounded-b-card"
            />
          </FlexBox>
        ))}
      </FlexBox>
    </Container>
  );
}
