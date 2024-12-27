import Typography from "@mui/material/Typography";

import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";
import { solutionsData } from "@/constant/homePage/whoWeArePage";

export default function Solutions() {
  return (
    <Container className="w-11/12 max-w-container my-10 md:my-20">
      <FlexBox className="w-full justify-evenly items-center flex-col lg:flex-row">
        <FlexBox className="flex-col items-center lg:items-start min-w-auto lg:min-w-[700px] w-11/12 lg:w-2/5">
          <Typography className="text-center lg:text-start text-4xl sm:text-5xl 3xl:text-6xl font-aeonik-bold text-blue400 mb-4">
            MyEmployment&apos;s Solutions
          </Typography>

          <Typography className="text-center lg:text-start text-base sm:text-xl xl:text-2xl font-aeonik-bold text-blue200">
            MyEmployment offers a comprehensive platform for ethical and secure
            employment verification. The company&apos;s platform:
          </Typography>

          <FlexBox className="flex-col justify-center gap-4 md:gap-8 my-4 md:my-8">
            {solutionsData.map((content, i) => (
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
                <Typography className="text-base lg:text-xl text-neutral-700 mt-1">
                  {content}
                </Typography>
              </FlexBox>
            ))}
          </FlexBox>

          <Typography className="text-center lg:text-start text-base sm:text-xl xl:text-2xl font-aeonik-bold text-neutral-700 my-2">
            The MyEmployment platform aims to be a trusted resource for
            organizations that need verifications while providing transparency
            and control to consumers regarding their personal information.
          </Typography>
        </FlexBox>
        <img
          draggable={false}
          src="/assets/img/home/whoWeAre/solutions/image.jpg"
          alt=""
          className="w-11/12 sm:w-2/3 lg:w-1/3 2xl:w-auto"
        />
      </FlexBox>
    </Container>
  );
}
