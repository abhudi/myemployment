import Typography from "@mui/material/Typography";

import FlexBox from "@/components/Common/FlexBox";

export default function SubmissionManagement() {
  return (
    <FlexBox className="flex-col bg-white px-4 md:px-8 3xl:px-10 4xl:px-14 py-5 md:py-10 w-auto xl:w-2/3 rounded-2xl border border-slate-200 shadow-card">
      <Typography className="text-center xl:text-start text-3xl 3xl:text-4xl font-aeonik-bold text-blue400 mt-2 mb-6">
        API Submission Management
      </Typography>

      <FlexBox className="flex-col md:flex-row items-center md:items-stretch gap-6 3xl:gap-10 mb-2">
        <FlexBox className="flex-col justify-between items-center text-center rounded-3xl green-gradient px-6 3xl:px-10 py-8 w-11/12 sm:w-3/4 md:w-1/2 gap-4 border border-green200">
          <img
            draggable="false"
            src="/assets/img/dashboard/dataContributor/dataSubmission/submissionManagement/icon1.png"
            alt=""
            className="w-min my-6"
          />
          <Typography className="text-blue400 font-aeonik-bold text-2xl 2xl:text-3xl max-w-2/3">
            API keys and Documentation Access
          </Typography>
        </FlexBox>

        {/* <FlexBox className="flex-col justify-start items-center text-center rounded-3xl purple-gradient px-6 3xl:px-10 py-8 w-11/12 sm:w-3/4 md:w-1/2 gap-4 border border-purple100">
          <img
            draggable="false"
            src="/assets/img/dashboard/dataContributor/dataSubmission/submissionManagement/icon2.png"
            alt=""
            className="w-min my-6"
          />
          <Typography className="text-blue400 font-aeonik-bold text-2xl 2xl:text-3xl max-w-2/3">
            Recent API Submission Logs
          </Typography>
        </FlexBox> */}
      </FlexBox>
    </FlexBox>
  );
}
