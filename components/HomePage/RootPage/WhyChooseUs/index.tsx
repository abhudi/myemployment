import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";
import { whyChooseUsData } from "@/constant/homePage/rootPage";

export default function WhyChooseUs() {
  return (
    <Container className="w-11/12 max-w-container">
      <FlexBox className="w-full pb-10 md:pb-20 flex-col items-center text-center">
        <Typography className="text-blue150 text-base sm:text-xl md:text-2xl font-aeonik-bold">
          Why Choose MyEmployment
        </Typography>

        <Typography className="text-blue400 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-aeonik-bold w-11/12 lg:w-4/5 pt-4">
          Redefining Employment Verification with Integrity and Trust
        </Typography>

        <FlexBox className="gap-6 sm:gap-4 md:gap-8 my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUsData.map(({ icon, title, content }, i) => (
            <FlexBox
              key={i}
              className="bg-light175 hover:bg-sky-200 transition-all ease-in-out duration-200 border-2 border-gray200 hover:border-sky-200 rounded-card p-4 flex-col items-center w-52 sm:w-48 xl:w-64 gap-2 text-center"
            >
              <img draggable={false} src={icon} alt="" className="w-min my-2" />
              <Typography className="text-2xl lg:text-3xl text-blue400 font-aeonik-bold">
                {title}
              </Typography>
              <Typography className="max-w-48 text-neutral-700 text-sm lg:text-base">
                {content}
              </Typography>
            </FlexBox>
          ))}
        </FlexBox>

        <Button
          variant="contained"
          className="rounded-card bg-blue400 min-w-24 shadow-none py-3 2xl:py-4 px-5 lg:px-10 2xl:px-14 font-aeonik-bold text-base lg:text-lg 2xl:text-xl"
        >
          Get Started Now
        </Button>
      </FlexBox>
    </Container>
  );
}
