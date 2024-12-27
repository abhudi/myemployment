import FlexBox from "@/components/Common/FlexBox";
import AuditTrail from "@/components/DashboardPage/VerifierPage/ComplianceCenterPage/AuditTrail";
import CredentialingDashboard from "@/components/DashboardPage/VerifierPage/ComplianceCenterPage/CredentialingDashboard";
import DocumentSubmission from "@/components/DashboardPage/VerifierPage/ComplianceCenterPage/DocumentSubmission";
import TermsAndConditions from "@/components/DashboardPage/VerifierPage/ComplianceCenterPage/TermsAndConditions";

export default function ComplianceCenterPage() {
  return (
    <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 max-w-desktop flex-col gap-6 4xl:gap-12">
      <FlexBox className="w-full flex-col 2xl:flex-row gap-6 4xl:gap-12 items-start">
        <FlexBox className="w-full 2xl:w-3/5 flex-col gap-6 4xl:gap-12">
          <CredentialingDashboard />
          <TermsAndConditions />
        </FlexBox>

        <DocumentSubmission />
      </FlexBox>

      <AuditTrail />
    </FlexBox>
  );
}
