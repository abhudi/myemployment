import Typography from "@mui/material/Typography";

import FlexBox from "@/components/Common/FlexBox";

export default function ComplianceAlertCenter() {
  return (
    <FlexBox className="flex-col justify-start items-center gap-4 md:gap-6 bg-white px-1 md:px-4 3xl:px-7 4xl:px-10 py-5 md:py-10 w-auto 2xl:w-1/3 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="w-full text-center 3xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2">
        Compliance Alert Center
      </Typography>

      <Typography className="w-full text-center 3xl:text-start text-xl 3xl:text-2xl text-neutral-600">
        Recent compliance notifications
      </Typography>

      <FlexBox className="min-w-[270px] sm:min-w-[300px] w-2/3 2xl:w-full flex-col justify-center gap-4 px-4 md:px-8 purple-gradient border-2 border-purple200 rounded-2xl py-6">
        <FlexBox className="gap-2 items-center">
          <img
            draggable={false}
            src="/assets/img/dashboard/dataContributor/complianceReporting/alert.png"
            alt=""
          />
          <Typography className="text-2xl font-aeonik-bold text-neutral-700 mt-1">
            01 days ago
          </Typography>
        </FlexBox>

        <Typography className="text-base 3xl:text-lg text-neutral-700">
          Title of the Notifiation asasiause assaoe iasuej otieas uaswe
        </Typography>
      </FlexBox>
    </FlexBox>
  );
}
