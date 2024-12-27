import Typography from "@mui/material/Typography";

import FlexBox from "@/components/Common/FlexBox";

export default function ApiManagement() {
  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-auto 2xl:w-2/3 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center 3xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 my-2">
        API Management Dashboard
      </Typography>

      <FlexBox className="items-center flex-col lg:flex-row gap-4 my-4 md:my-8">
        <FlexBox className="min-w-[250px] lg:min-w-min items-center gap-6 lg:gap-2 3xl:gap-3 px-4 3xl:px-6 py-3 3xl:py-5 purple-gradient border-2 border-purple200 rounded-3xl">
          <img
            draggable={false}
            src="/assets/img/dashboard/dataContributor/integrations/add.png"
            alt=""
            className="w-6 3xl:w-min"
          />
          <Typography className="text-blue400 text-lg 3xl:text-xl mt-1">
            Generate API Keys
          </Typography>
        </FlexBox>

        <FlexBox className="min-w-[250px] lg:min-w-min items-center gap-6 lg:gap-2 3xl:gap-3 px-4 3xl:px-6 py-3 3xl:py-5 bg-light400 border-2 border-gray250 rounded-3xl">
          <img
            draggable={false}
            src="/assets/img/dashboard/dataContributor/integrations/deactivate.png"
            alt=""
            className="w-6 3xl:w-min"
          />
          <Typography className="text-blue400 text-lg 3xl:text-xl mt-1">
            Deactivate API Keys
          </Typography>
        </FlexBox>

        <FlexBox className="min-w-[250px] lg:min-w-min items-center gap-6 lg:gap-2 3xl:gap-3 px-4 3xl:px-6 py-3 3xl:py-5 bg-light400 border-2 border-gray250 rounded-3xl">
          <img
            draggable={false}
            src="/assets/img/dashboard/dataContributor/integrations/refresh.png"
            alt=""
            className="w-6 3xl:w-min"
          />
          <Typography className="text-blue400 text-lg 3xl:text-xl mt-1">
            Refresh
          </Typography>
        </FlexBox>
      </FlexBox>

      <Typography className="text-blue400 text-xl font-aeonik-bold my-4 text-center md:text-start">
        Usage Statistics and Rate Limiting Information:
      </Typography>

      <Typography className="text-neutral-700 text-base md:text-lg leading-6 md:leading-8">
        Lorem ipsum dolor sit amet, consectetur adipiasrrscing elit. Quisque
        iaculis ipsum at dui gravida venenatis. In ut scelerisque ante, ac
        faucibus aue. Aliquam lacinia tellus eget velit congue, sper porttitor
        massa dictum. Praesent et mi sit ameast felis volutpat dapibus in quis
        nibh. Maenas ac rhoncus nisi. Pellentesque aliquet libero turpis,
      </Typography>
    </FlexBox>
  );
}
