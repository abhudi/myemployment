import Typography from "@mui/material/Typography";

import CustomCheckBox from "@/components/Common/CustomCheckBox";
import FlexBox from "@/components/Common/FlexBox";

export default function TermsAndConditions() {
  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center 2xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
        Terms and Conditions
      </Typography>

      <FlexBox className="w-full flex-col items-center md:items-start gap-6">
        <FlexBox className="w-full flex-col">
          <Typography className="text-blue400 text-xl font-aeonik-bold my-4 text-center md:text-start">
            Latest platform terms and FCRA requirements
          </Typography>
          <Typography className="text-neutral-700 text-sm md:text-base text-start">
            Donec mollis vehicula nulla eu porta. Vestibulum volutpat
            easeleifend sapien, eget ultricies lacus scelerisque non. Curabitur
            dapibus nunc in diam tincidunt, id semper magna vulputate. Cras non
            porttitor turpis. Morbi convallis mauris gravida, gravida lacus at,
            iaculis metus. Morbi at tortor luctus, hendrerit nisi sed,
          </Typography>
        </FlexBox>

        <FlexBox className="w-full flex-col">
          <Typography className="text-blue400 text-xl font-aeonik-bold my-4 text-center md:text-start">
            FCRA requirements
          </Typography>
          <Typography className="text-neutral-700 text-sm md:text-base text-start">
            Donec mollis vehicula nulla eu porta. Vestibulum volutpat
            easeleifend sapien, eget ultricies lacus scelerisque non. Curabitur
            dapibus nunc in diam tincidunt, id semper magna vulputate. Cras non
            porttitor turpis.
          </Typography>
        </FlexBox>

        <FlexBox className="w-full flex-col">
          <Typography className="text-blue400 text-xl font-aeonik-bold my-4 text-center md:text-start">
            Electronic Acknowledgment
          </Typography>
          <FlexBox className="w-full gap-2 items-center">
            <CustomCheckBox />
            <Typography className="text-neutral-700 text-sm md:text-base text-start">
              Donec mollis vehicula nulla eu porta. Vestibulum volutpat
              easeleifend sapien, eget ultricies lacus scelerisque non.
            </Typography>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
