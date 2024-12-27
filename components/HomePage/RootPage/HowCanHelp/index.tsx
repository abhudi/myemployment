import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";
import { howCanHelpData } from "@/constant/homePage/rootPage";

export default function HowCanHelp() {
  return (
    <Container className="w-11/12 max-w-container">
      <FlexBox className="w-full">
        <FlexBox className="w-full flex-col items-center pb-12 md:pb-24">
          <Typography
            variant="h2"
            className="pt-6 md:pt-12 font-aeonik-bold text-center xl:text-start text-2xl sm:text-4xl md:text-6xl text-black"
          >
            How We Can Help You
          </Typography>
          <Typography
            variant="h2"
            className="pb-2 sm:pb-6 md:pb-12 font-aeonik-bold text-center xl:text-start text-xl sm:text-2xl md:text-3xl text-blue400"
          >
            Employment Verification Made Simple & Secure
          </Typography>

          <FlexBox className="w-full mt-2 sm:mt-8 md:mt-16 justify-evenly flex-col xl:flex-row gap-12 xl:gap-8">
            {howCanHelpData.map(
              ({ img, icon, title, content, btnContent }, i) => (
                <FlexBox
                  key={i}
                  className="flex-col items-center text-center gap-2 md:gap-4"
                >
                  <FlexBox className="relative group">
                    <img
                      draggable={false}
                      src={img}
                      alt=""
                      className="w-min rounded-t-xl"
                    />
                    <img
                      draggable={false}
                      src={icon}
                      alt=""
                      className="absolute group-hover:scale-110 transition-all duration-500 ease-in-out shadow-xl left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-16 bg-white p-4 rounded-full"
                    />
                  </FlexBox>

                  <Typography className="font-aeonik-bold text-blue400 text-xl sm:text-2xl mt-16">
                    {title}
                  </Typography>

                  <Typography className="text-neutral-700 text-base lg:text-lg w-11/12 sm:w-2/3 xl:w-64 lg:w-80 h-auto lg:h-[120px]">
                    {content}
                  </Typography>

                  <Button
                    variant="outlined"
                    className="py-2.5 border-2 border-blue400 bg-white hover:bg-blue400 text-blue400 hover:text-white rounded-2xl min-w-44 shadow-none font-aeonik-medium text-base mt-2 xl:mt-8"
                  >
                    {btnContent}
                  </Button>
                </FlexBox>
              ),
            )}
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Container>
  );
}
