import FlexBox from "@/components/Common/FlexBox";
import BulkRequestTool from "@/components/DashboardPage/VerifierPage/VerificationRequestPage/BulkRequestTool";
import NewRequestForm from "@/components/DashboardPage/VerifierPage/VerificationRequestPage/NewRequestForm";
import RequestingTracking from "@/components/DashboardPage/VerifierPage/VerificationRequestPage/RequestTracking";

export default function VerificationRequestPage() {
  return (
    <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 flex-col max-w-desktop gap-6 4xl:gap-12">
      <FlexBox className="w-full flex-col 2xl:flex-row justify-between items-start gap-6 4xl:gap-12">
        <NewRequestForm />
        <BulkRequestTool />
      </FlexBox>

      <RequestingTracking />
    </FlexBox>
  );
}
