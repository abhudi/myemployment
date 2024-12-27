import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";
import { featuresData } from "@/constant/homePage/oldHomePage2";

export default function Features() {
  return (
    <Container className="w-11/12 max-w-container">
      <FlexBox className="relative w-full">
        <img
          draggable={false}
          src="/assets/img/home/oldHome-2/features/bg.png"
          alt=""
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        />
        <FlexBox className="w-full flex-col items-center py-12 md:py-24 z-20">
          <Typography
            variant="h2"
            className="py-6 md:py-12 font-aeonik-bold text-3xl sm:text-4xl md:text-6xl text-blue400"
          >
            What can you do?
          </Typography>

          <FlexBox className="w-full justify-evenly flex-col md:flex-row gap-8 md:gap-0">
            {featuresData.map(({ icon, title, content, btnContent }, i) => (
              <FlexBox
                key={i}
                className="flex-col items-center text-center gap-2 md:gap-4"
              >
                <img
                  draggable={false}
                  src={icon}
                  alt=""
                  className="w-min my-2 md:my-4"
                />
                <Typography className="font-aeonik-bold text-blue400 text-xl sm:text-2xl max-w-44">
                  {title}
                </Typography>
                <Typography className="text-neutral-700 text-base lg:text-lg max-w-64 md:max-w-48 lg:max-w-64">
                  {content}
                </Typography>
                <Button
                  variant="contained"
                  className="py-2.5 rounded-card bg-blue150 min-w-40 shadow-none font-aeonik-medium text-base"
                >
                  {btnContent}
                </Button>
              </FlexBox>
            ))}
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </Container>
  );
}
