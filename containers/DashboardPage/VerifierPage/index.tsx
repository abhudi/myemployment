import FlexBox from "@/components/Common/FlexBox";
import BillingOverview from "@/components/DashboardPage/VerifierPage/RootPage/BillingOverview";
import ComplianceStatus from "@/components/DashboardPage/VerifierPage/RootPage/ComplianceStatus";
import IntegrationStatus from "@/components/DashboardPage/VerifierPage/RootPage/IntegrationStatus";
import VerificationSummary from "@/components/DashboardPage/VerifierPage/RootPage/VerificationSummary";

export default function VerifierPage() {
  return (
    <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 flex-col max-w-desktop gap-6 4xl:gap-12">
      <FlexBox className="w-full flex-col xl:flex-row justify-between gap-6 4xl:gap-12">
        <VerificationSummary />
        <IntegrationStatus />
      </FlexBox>
      <FlexBox className="w-full flex-col xl:flex-row justify-between gap-6 4xl:gap-12">
        <ComplianceStatus />
        <BillingOverview />
      </FlexBox>
    </FlexBox>
  );
}
