import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";
import { commitmentsData } from "@/constant/homePage/rootPage";

export default function Commitments() {
  return (
    <FlexBox className="w-full">
      <Container className="w-11/12 max-w-container">
        <FlexBox className="w-full flex-col xl:flex-row text-white justify-center items-center my-10 md:my-20 gap-10 md:gap-20">
          <img
            draggable={false}
            src="/assets/img/home/root/commitments/image.png"
            className="w-11/12 md:w-4/5 xl:w-1/2 3xl:w-min"
            alt=""
          />

          <FlexBox className="text-black flex-col w-11/12 md:w-2/3 xl:w-2/5 3xl:w-1/3 items-center xl:items-start">
            <Typography className="text-xl sm:2xl md:text-4xl xl:text-4xl font-aeonik-medium text-center xl:text-start">
              Our Commitment to You
            </Typography>

            <Typography className="text-base md:text-xl text-center xl:text-start text-neutral-600 py-2">
              Protecting Privacy, Ensuring Accuracy, and Streamlining
              Verification for All. Our platform is built to simplify the
              process while safeguarding sensitive information, empowering you
              to make informed decisiions with confidence.
            </Typography>

            <Typography className="text-xl md:text-2xl font-aeonik-bold text-neutral-600 pt-2">
              Our Commitments:
            </Typography>

            <FlexBox className="flex-col items-center xl:items-start gap-4 my-4 w-full sm:w-11/12 md:w-10/12">
              {commitmentsData.map((content, i) => (
                <FlexBox
                  className="items-center gap-2 md:gap-4 w-[310px] sm:w-96"
                  key={i}
                >
                  <CheckCircleIcon />
                  <Typography className="text-sm sm:text-base font-aeonik-light">
                    {content}
                  </Typography>
                </FlexBox>
              ))}
            </FlexBox>

            <Button
              variant="contained"
              className="rounded-card bg-blue150 min-w-24 shadow-none py-3 ps-2 sm:ps-3 lg:ps-5 pe-2 sm:pe-6 lg:pe-10 gap-0 sm:gap-1 lg:gap-4 font-bold text-sm sm:text-base lg:text-lg 2xl:text-xl text-start normal-case -ms-4 my-2"
              startIcon={
                <img
                  draggable={false}
                  src="/assets/img/home/common/btn-logo.png"
                  alt=""
                  className="hidden sm:block"
                />
              }
            >
              Keep Your Data Secure
            </Button>
          </FlexBox>
        </FlexBox>
      </Container>
    </FlexBox>
  );
}
