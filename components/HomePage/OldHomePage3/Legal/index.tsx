import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";

import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";

export default function Legal() {
  return (
    <FlexBox className="w-full max-w-desktop relative">
      <img
        draggable={false}
        src="/assets/img/home/oldHome-3/legal/logo.png"
        alt=""
        className="w-3/4 md:w-min absolute z-10 left-0 top-1/2 -translate-y-1/2"
      />
      <Container className="w-11/12 max-w-container my-5 sm:my-10 md:my-20 flex-col items-center text-center relative">
        <FlexBox className="flex-col items-center z-20">
          <Typography className="text-xl md:text-2xl text-blue150 font-aeonik-bold py-2 md:py-4">
            What we do
          </Typography>

          <Typography className="text-2xl sm:3xl md:text-4xl xl:text-5xl text-blue400 w-full sm:w-4/5 font-aeonik-bold">
            we are the only company in the industry that does not sell any data
            of our clients to 3rd parties.
          </Typography>

          <Typography className="text-neutral-700 text-base md:text-xl py-3 md:py-6 w-full sm:w-3/5">
            MyEmployment specializes in employment and income verification and
            does not sell any data to 3rd parties.
          </Typography>

          <FlexBox className="relative justify-center">
            <img
              draggable={false}
              src="/assets/img/home/oldHome-3/legal/image.png"
              alt=""
              className="ms-4 lg:ms-0 w-full md:w-4/5 2xl:w-min z-20"
            />
            <img
              draggable={false}
              src="/assets/img/home/oldHome-3/legal/resume.png"
              alt=""
              className="hidden lg:block w-52 2xl:w-min absolute z-10 -top-14 -left-6 2xl:-left-52"
            />
            <img
              draggable={false}
              src="/assets/img/home/oldHome-3/legal/mark.png"
              alt=""
              className="hidden lg:block w-40 2xl:w-min absolute bottom-14 right-10 2xl:-right-16 z-30"
            />
          </FlexBox>

          <FlexBox className="flex-col lg:flex-row gap-8 lg:gap-0 w-full max-w-tablet items-center justify-center">
            <InputBase
              placeholder="Type a Message here.."
              multiline
              rows={5}
              className="border border-neutral-300 w-11/12 md:w-2/3 lg:w-1/2 2xl:w-2/3 text-black font-aeonik bg-light150 rounded-t-3xl rounded-bl-3xl py-6 px-8"
            />

            <FlexBox className="flex-col gap-4 w-2/3 md:w-1/3">
              <Typography className="text-neutral-700 text-sm sm:text-base md:text-xl">
                share this info and help us educate the message
              </Typography>

              <FlexBox className="w-full justify-center gap-4">
                <IconButton className="bg-light150 text-blue400 h-7 md:h-auto w-7 md:w-min">
                  <FacebookIcon className="text-base md:text-2xl" />
                </IconButton>
                <IconButton className="bg-light150 text-blue400 h-7 md:h-auto w-7 md:w-min">
                  <InstagramIcon className="text-base md:text-2xl" />
                </IconButton>
                <IconButton className="bg-light150 text-blue400 h-7 md:h-auto w-7 md:w-min">
                  <XIcon className="text-base md:text-2xl" />
                </IconButton>
                <IconButton className="bg-light150 text-blue400 h-7 md:h-auto w-7 md:w-min">
                  <LinkedInIcon className="text-base md:text-2xl" />
                </IconButton>
              </FlexBox>
            </FlexBox>
          </FlexBox>

          <FlexBox className="flex-col items-center md:items-start gap-4 sm:gap-8 md:gap-0 md:flex-row w-4/5 2xl:w-full max-w-screen-xl justify-evenly pt-5 md:pt-10 my-5 md:my-10">
            <FlexBox className="flex-col text-center md:text-start gap-2">
              <Typography className="text-4xl md:text-5xl 2xl:text-6xl font-aeonik-black text-blue400">
                900 <span className="text-blue150">K</span>
              </Typography>
              <Typography className="text-base md:text-lg 2xl:text-xl">
                Successful <br />
                Verification Done
              </Typography>
            </FlexBox>

            <FlexBox className="flex-col text-center md:text-start gap-2">
              <Typography className="text-4xl md:text-5xl 2xl:text-6xl font-aeonik-black text-blue400">
                10 <span className="text-blue150">+</span>
              </Typography>
              <Typography className="text-base md:text-lg 2xl:text-xl">
                Years of <br /> Trust in Business
              </Typography>
            </FlexBox>

            <FlexBox className="flex-col text-center md:text-start gap-2">
              <Typography className="text-4xl md:text-5xl 2xl:text-6xl font-aeonik-black text-blue400">
                850 <span className="text-blue150">K</span>
              </Typography>
              <Typography className="text-base md:text-lg 2xl:text-xl">
                Five Star <br /> User Ratings
              </Typography>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </Container>
    </FlexBox>
  );
}
