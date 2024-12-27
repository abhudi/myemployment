import FlexBox from "@/components/Common/FlexBox";
import ComplianceAlertCenter from "@/components/DashboardPage/DataContributorPage/ComplianceReportingPage/ComplianceAlertCenter";
import DataCorrentionLogs from "@/components/DashboardPage/DataContributorPage/ComplianceReportingPage/DataCorrectionLogs";
import DataStorage from "@/components/DashboardPage/DataContributorPage/ComplianceReportingPage/DataStorage";
import VerificationRequestSummary from "@/components/DashboardPage/DataContributorPage/ComplianceReportingPage/VerificationRequestSummary";

export default function ComplianceReportingPage() {
  return (
    <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 flex-col max-w-desktop gap-6 4xl:gap-12">
      <FlexBox className="w-full flex-col 2xl:flex-row justify-between items-stretch gap-6 4xl:gap-12">
        <DataCorrentionLogs />
        <VerificationRequestSummary />
      </FlexBox>

      <FlexBox className="w-full flex-col 2xl:flex-row justify-between items-stretch gap-6 4xl:gap-12">
        <DataStorage />
        <ComplianceAlertCenter />
      </FlexBox>
    </FlexBox>
  );
}
