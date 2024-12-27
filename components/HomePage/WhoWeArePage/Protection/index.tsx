import Typography from "@mui/material/Typography";

import Container from "@/components/Common/Container";
import FlexBox from "@/components/Common/FlexBox";

export default function Protection() {
  return (
    <FlexBox className="w-full bg-blue500">
      <Container className="w-11/12 max-w-container">
        <FlexBox className="w-full flex-col xl:flex-row text-white justify-center items-center my-10 md:my-20 gap-10 md:gap-20">
          <img
            draggable={false}
            src="/assets/img/home/whoWeAre/protection/image.png"
            className="w-4/5 sm:w-3/5 md:w-1/2 xl:w-2/5 3xl:w-min"
            alt=""
          />

          <FlexBox className="flex-col w-11/12 3xl:w-2/3 items-center xl:items-start">
            <Typography className="text-2xl sm:3xl md:text-4xl xl:text-5xl font-aeonik-bold text-center xl:text-start">
              Protecting Sensitive Information
            </Typography>

            <Typography className="text-center xl:text-start text-base sm:text-xl md:text-2xl text-blue150 font-aeonik-bold py-2">
              Many employers unknowingly allow employee data to be sold to debt
              collectors, lenders, and other parties looking to “automatically”
              employment or income. MyEmployment&apos;s mission is to address
              the following challenges in employment verification and consumer
              privacy:
            </Typography>

            <FlexBox className="flex-col gap-4 my-5 md:my-10 w-full sm:w-11/12 md:w-10/12">
              <FlexBox className="items-start gap-4">
                <img
                  draggable={false}
                  src="/assets/img/home/oldHome-3/whoWeAre/tick.png"
                  alt=""
                  className="w-min"
                />
                <Typography className="text-sm sm:text-base font-aeonik-light">
                  <span className="font-aeonik-bold">
                    Lack of consumer control over personal data:
                  </span>{" "}
                  MyEmployment empowers consumers by allowing them to configure
                  data-sharing preferences, set profile locks, and receive
                  notifications about verification requests.
                </Typography>
              </FlexBox>

              <FlexBox className="items-start gap-4">
                <img
                  draggable={false}
                  src="/assets/img/home/oldHome-3/whoWeAre/tick.png"
                  alt=""
                  className="w-min"
                />
                <Typography className="text-sm sm:text-base font-aeonik-light">
                  <span className="font-aeonik-bold">
                    Data security and compliance risks:
                  </span>{" "}
                  MyEmployment meets various high-security and compliance
                  standards to protect data integrity and privacy.
                </Typography>
              </FlexBox>

              <FlexBox className="items-start gap-4">
                <img
                  draggable={false}
                  src="/assets/img/home/oldHome-3/whoWeAre/tick.png"
                  alt=""
                  className="w-min"
                />
                <Typography className="text-sm sm:text-base font-aeonik-light">
                  <span className="font-aeonik-bold">
                    Lengthy verification processes:
                  </span>{" "}
                  MyEmployment streamlines this process by automating report
                  generation and integrating directly with payroll systems to
                  provide up-to-date employment data.
                </Typography>
              </FlexBox>

              <FlexBox className="items-start gap-4">
                <img
                  draggable={false}
                  src="/assets/img/home/oldHome-3/whoWeAre/tick.png"
                  alt=""
                  className="w-min"
                />
                <Typography className="text-sm sm:text-base font-aeonik-light">
                  <span className="font-aeonik-bold">
                    Inconsistent data across payroll and HRIS systems:
                  </span>{" "}
                  MyEmployment integrates with popular payroll systems,
                  minimizing inconsistencies and ensuring that verifiers can
                  access accurate and current information.
                </Typography>
              </FlexBox>

              <FlexBox className="items-start gap-4">
                <img
                  draggable={false}
                  src="/assets/img/home/oldHome-3/whoWeAre/tick.png"
                  alt=""
                  className="w-min"
                />
                <Typography className="text-sm sm:text-base font-aeonik-light">
                  <span className="font-aeonik-bold">
                    Inability to support high-volume verification needs:
                  </span>{" "}
                  MyEmployment&apos;s scalable infrastructure can manage large
                  volumes of verification requests without compromising
                  performance.
                </Typography>
              </FlexBox>

              <FlexBox className="items-start gap-4">
                <img
                  draggable={false}
                  src="/assets/img/home/oldHome-3/whoWeAre/tick.png"
                  alt=""
                  className="w-min"
                />
                <Typography className="text-sm sm:text-base font-aeonik-light">
                  <span className="font-aeonik-bold">
                    Lack of transparent communication with consumers:
                  </span>{" "}
                  MyEmployment provides consumers with notifications when
                  verification requests occur, along with the ability to view
                  their data-sharing history.
                </Typography>
              </FlexBox>

              <FlexBox className="items-start gap-4">
                <img
                  draggable={false}
                  src="/assets/img/home/oldHome-3/whoWeAre/tick.png"
                  alt=""
                  className="w-min"
                />
                <Typography className="text-sm sm:text-base font-aeonik-light">
                  <span className="font-aeonik-bold">
                    Limited flexibility in verification and billing options:
                  </span>{" "}
                  MyEmployment offers flexible billing options, including
                  prepaid credits and subscriptions, along with customizable
                  report settings based on consumer preferences.
                </Typography>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </Container>
    </FlexBox>
  );
}
