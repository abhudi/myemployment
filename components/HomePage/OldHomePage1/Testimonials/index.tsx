import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";

export default function Testimonials() {
  return (
    <FlexBox className="w-full bg-gray100 relative" id="testimonials">
      <img
        draggable={false}
        src="/assets/img/home/oldHome-1/testimonials/logo.png"
        alt=""
        className="absolute left-0 bottom-0"
      />
      <Container className="w-11/12 max-w-container pt-14 md:pt-28 pb-20 md:pb-44">
        <FlexBox className="w-full justify-evenly flex-col lg:flex-row gap-20 lg:gap-0">
          <FlexBox className="relative justify-center">
            <img
              draggable={false}
              src="/assets/img/home/oldHome-1/testimonials/dataContributor.png"
              alt=""
              className="w-11/12 sm:w-4/5 md:w-2/3 lg:w-4/5 2xl:w-auto"
            />
            <FlexBox className="w-4/5 sm:w-3/5 md:w-2/5 lg:w-3/5 2xl:w-4/5 bg-white p-0.5 absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 rounded-card">
              <Button
                variant="contained"
                className="w-full rounded-card bg-blue400 shadow-none py-3 lg:py-4 px-5 lg:px-10 2xl:px-14 font-aeonik-bold text-base lg:text-lg 2xl:text-xl !normal-case"
              >
                Are you an Data Contributor?
              </Button>
            </FlexBox>
          </FlexBox>

          <FlexBox className="relative justify-center">
            <img
              draggable={false}
              src="/assets/img/home/oldHome-1/testimonials/consumer.png"
              alt=""
              className="w-11/12 sm:w-4/5 md:w-2/3 lg:w-4/5 2xl:w-auto"
            />
            <FlexBox className="w-4/5 sm:w-3/5 md:w-2/5 lg:w-3/5 2xl:w-4/5 bg-white p-0.5 absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 rounded-card">
              <Button
                variant="contained"
                className="w-full rounded-card bg-blue400 shadow-none py-3 lg:py-4 px-5 lg:px-10 2xl:px-14 font-aeonik-bold text-base lg:text-lg 2xl:text-xl !normal-case"
              >
                Are you an Consumer?
              </Button>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </Container>
    </FlexBox>
  );
}
