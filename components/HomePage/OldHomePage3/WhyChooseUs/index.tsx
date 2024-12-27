import Typography from "@mui/material/Typography";

import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";

export default function WhyChooseUs() {
  return (
    <FlexBox className="w-full bg-blue500">
      <Container className="w-11/12 max-w-container pt-5 sm:pt-10 md:pt-14 lg:pt-28 flex-col items-center text-center">
        <Typography className="text-xl md:text-2xl text-blue150 font-aeonik-bold py-4">
          Why Choose My Employments Verification
        </Typography>

        <Typography className="w-11/12 md:w-4/5 text-2xl sm:3xl md:text-4xl xl:text-5xl text-white font-aeonik-bold">
          MyEmployment specializes in employment and income verification and
          does not sell any data to 3rd parties.
        </Typography>

        <FlexBox className="flex-col lg:flex-row mb-10 md:mb-20 lg:mb-0 mt-5 sm:mt-10 md:mt-20 relative justify-center gap-4 sm:gap-8 lg:gap-0">
          <img
            draggable={false}
            src="/assets/img/home/oldHome-3/whyChooseUs/logo.png"
            alt=""
            className="hidden lg:block w-[440px] xl:w-[550px] 2xl:w-min"
          />

          <FlexBox className="flex-row-reverse lg:flex-row static lg:absolute -left-[260px] xl:-left-[275px] 2xl:-left-[310px] bottom-16 2xl:bottom-28 items-center gap-3 xl:gap-6">
            <FlexBox className="flex-col text-start lg:text-end">
              <Typography className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl text-blue150 font-aeonik-bold">
                Trust
              </Typography>
              <Typography className="text-sm sm:text-base 2xl:text-lg text-white">
                Build on a Foundation of
                <br />
                Confidentiality and Respect.
              </Typography>
            </FlexBox>
            <img
              draggable={false}
              src="/assets/img/home/oldHome-3/whyChooseUs/trust1.png"
              alt=""
              className="w-16 sm:w-20 xl:w-24 2xl:w-min"
            />
          </FlexBox>

          <FlexBox className="justify-end lg:justify-normal flex-row-reverse lg:flex-row static lg:absolute -left-[175px] xl:-left-[170px] top-6 2xl:top-14 items-center gap-3 xl:gap-6">
            <FlexBox className="flex-col text-start lg:text-end">
              <Typography className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl text-blue150 font-aeonik-bold">
                Integrity
              </Typography>
              <Typography className="text-sm sm:text-base 2xl:text-lg text-white">
                Ethical Practices at Every
                <br />
                Step of Verification.
              </Typography>
            </FlexBox>
            <img
              draggable={false}
              src="/assets/img/home/oldHome-3/whyChooseUs/integrity.png"
              alt=""
              className="w-16 sm:w-20 xl:w-24 2xl:w-min"
            />
          </FlexBox>

          <FlexBox className="static lg:absolute -right-[185px] xl:-right-[175px] top-6 2xl:top-14 items-center gap-3 xl:gap-6">
            <img
              draggable={false}
              src="/assets/img/home/oldHome-3/whyChooseUs/reliability.png"
              alt=""
              className="w-16 sm:w-20 xl:w-24 2xl:w-min"
            />
            <FlexBox className="flex-col text-start">
              <Typography className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl text-blue150 font-aeonik-bold">
                Reliability
              </Typography>
              <Typography className="text-sm sm:text-base 2xl:text-lg text-white">
                Accurate, Up-to-Date Data
                <br />
                You Can Depend On.
              </Typography>
            </FlexBox>
          </FlexBox>

          <FlexBox className="static lg:absolute -right-[250px] xl:-right-[270px] 2xl:-right-[305px] bottom-16 2xl:bottom-28 items-center gap-3 xl:gap-6">
            <img
              draggable={false}
              src="/assets/img/home/oldHome-3/whyChooseUs/trust2.png"
              alt=""
              className="w-16 sm:w-20 xl:w-24 2xl:w-min"
            />
            <FlexBox className="flex-col text-start">
              <Typography className="text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl text-blue150 font-aeonik-bold">
                Simplicity
              </Typography>
              <Typography className="text-sm sm:text-base 2xl:text-lg text-white">
                Effortless Verficaitions with
                <br />a User-Friendly Platform.
              </Typography>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </Container>
    </FlexBox>
  );
}
