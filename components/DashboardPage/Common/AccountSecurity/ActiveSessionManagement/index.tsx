import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";

export default function ActiveSessionManagement() {
  return (
    <FlexBox className="flex-col justify-start items-center xl:items-start bg-white px-2 md:px-4 3xl:px-7 4xl:px-10 py-5 md:py-10 w-auto xl:w-full rounded-2xl border border-slate-200 shadow-card">
      <FlexBox className="w-full flex-col items-center xl:items-start gap-4 md:gap-8">
        <FlexBox className="flex-col text-center md:text-start gap-4">
          <Typography className="gap-4 flex items-center text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
            <img
              draggable={false}
              src="/assets/img/dashboard/common/accountSecurity/activeSession.png"
              alt=""
              className="hidden md:block w-7 h-7 mb-1"
            />
            Active Session Management
          </Typography>
          <Typography className="font-aeonik-bold text-base 2xl:text-xl text-blue400 text-center xl:text-start">
            Active Sessions
          </Typography>
        </FlexBox>

        <FlexBox className="w-full flex-col gap-8">
          <FlexBox className="w-full justify-between flex-col md:flex-row gap-2 items-center">
            <FlexBox className="w-11/12 md:w-1/2 gap-4 items-center justify-center 2xl:justify-start">
              <FlexBox className="w-10 h-10 items-center justify-center">
                <img
                  draggable={false}
                  src="/assets/img/dashboard/common/accountSecurity/device.png"
                  alt=""
                />
              </FlexBox>
              <Typography className="text-base text-neutral-700 w-40">
                <span className="text-blue400 font-aeonik-bold text-lg">
                  Device name <br />
                </span>
                Chrome, Windows 10
              </Typography>
            </FlexBox>

            <FlexBox className="w-11/12 md:w-1/2 gap-4 items-center justify-center 2xl:justify-start">
              <FlexBox className="w-10 h-10 items-center justify-center">
                <img
                  draggable={false}
                  src="/assets/img/dashboard/common/accountSecurity/location.png"
                  alt=""
                />
              </FlexBox>
              <Typography className="text-base text-neutral-700 w-40">
                <span className="text-blue400 font-aeonik-bold text-lg">
                  Location <br />
                </span>
                New York, USA
              </Typography>
            </FlexBox>
          </FlexBox>

          <FlexBox className="w-full justify-between flex-col md:flex-row gap-2 items-center">
            <FlexBox className="w-11/12 md:w-1/2 gap-4 items-center justify-center 2xl:justify-start">
              <FlexBox className="w-10 h-10 items-center justify-center">
                <img
                  draggable={false}
                  src="/assets/img/dashboard/common/accountSecurity/device.png"
                  alt=""
                />
              </FlexBox>
              <Typography className="text-base text-neutral-700 w-40">
                <span className="text-blue400 font-aeonik-bold text-lg">
                  Device name <br />
                </span>
                iPhone
              </Typography>
            </FlexBox>

            <FlexBox className="w-11/12 md:w-1/2 gap-4 items-center justify-center 2xl:justify-start">
              <FlexBox className="w-10 h-10 items-center justify-center">
                <img
                  draggable={false}
                  src="/assets/img/dashboard/common/accountSecurity/location.png"
                  alt=""
                />
              </FlexBox>
              <Typography className="text-base text-neutral-700 w-40">
                <span className="text-blue400 font-aeonik-bold text-lg">
                  Location <br />
                </span>
                New York, USA
              </Typography>
            </FlexBox>
          </FlexBox>
        </FlexBox>

        <Button className="medium-blue-gradient px-6 py-4 text-base 3xl:text-lg rounded-xl font-aeonik-medium text-white hover:text-blue200 transition-all duration-700 ease-in-out leading-none gap-2">
          Terminate All Sessions
        </Button>
      </FlexBox>
    </FlexBox>
  );
}
