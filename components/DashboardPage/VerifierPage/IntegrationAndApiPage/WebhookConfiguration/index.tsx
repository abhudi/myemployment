import Typography from "@mui/material/Typography";

import Button from "@/components/Common/Button";
import FlexBox from "@/components/Common/FlexBox";
import FormControl from "@/components/Common/FormControl";

export default function WebhookConfiguration() {
  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-full rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center 2xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
        Webhook Configuration
      </Typography>

      <FlexBox className="w-full flex-col 2xl:flex-row gap-8 justify-between items-center 2xl:items-end">
        <FlexBox className="w-full 2xl:w-1/2 flex-col items-center 2xl:items-start">
          <Typography className="w-full text-blue400 text-base md:text-xl font-aeonik-bold mt-4 text-center 2xl:text-start">
            Url
          </Typography>

          <FlexBox className="flex-col 2xl:flex-row items-center gap-3">
            <FormControl
              className="text-start w-auto min-w-[280px] sm:min-w-[320px] md:min-w-[380px] md:w-1/2"
              placeholder="https://test.com"
              labelStyle="text-sm sm:text-base font-aeonik-bold py-1 px-3 text-gray-700"
              inputStyle="p-1 rounded-lg"
            />

            <Button className="min-w-40 mt-1 medium-blue-gradient px-6 py-4 text-lg rounded-lg font-bold text-white hover:text-blue200 transition-all duration-700 ease-in-out leading-none">
              Add Service
            </Button>
          </FlexBox>
        </FlexBox>

        <FlexBox className="-11/12 sm:w-4/5 md:w-2/3 2xl:w-2/5 flex-col gap-2 p-6 bg-light475 rounded-lg border border-purple225">
          <Typography className="font-aeonik-bold text-blue400 text-xl">
            Webhook
          </Typography>
          <Typography className="text-neutral-700 text-base">
            Curabitur haendrerit dui scelerisque laoase irsdsdi osdfis itti
            osdaso iasie iaseoiroreet dictum..
          </Typography>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}
