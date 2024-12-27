import Typography from "@mui/material/Typography";

import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";
import { promisesData } from "@/constant/homePage/oldHomePage1";

export default function Promises() {
  return (
    <Container className="w-11/12 max-w-container">
      <FlexBox className="w-full justify-evenly items-center flex-col lg:flex-row">
        <FlexBox className="flex-col items-center lg:items-start min-w-auto lg:min-w-[597px] w-11/12 lg:w-2/5">
          <Typography className="text-center lg:text-start text-4xl sm:text-5xl 3xl:text-6xl font-aeonik-bold text-blue400">
            Our Promises
          </Typography>
          <FlexBox className="flex-col justify-center gap-4 md:gap-8 my-4 md:my-8">
            {promisesData.map((content, i) => (
              <FlexBox
                key={i}
                className="items-center gap-2 md:gap-4 ps-4 md:ps-6 py-3 md:py-4 rounded-xl promise-gradient"
              >
                <img
                  draggable={false}
                  src="/assets/img/home/oldHome-1/promises/tick.png"
                  alt=""
                  className="w-5 md:w-auto"
                />
                <Typography className="text-base md:text-xl lg:text-2xl text-neutral-700 mt-1">
                  {content}
                </Typography>
              </FlexBox>
            ))}
          </FlexBox>
        </FlexBox>
        <img
          draggable={false}
          src="/assets/img/home/oldHome-1/promises/image.png"
          alt=""
          className="w-11/12 sm:w-2/3 lg:w-1/3 2xl:w-auto"
        />
      </FlexBox>
    </Container>
  );
}
