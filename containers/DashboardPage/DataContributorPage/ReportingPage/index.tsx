import FlexBox from "@/components/Common/FlexBox";
import CostBenefitAnalysis from "@/components/DashboardPage/DataContributorPage/ReportingPage/CostBenefitAnalysis";
import DataManagementOverview from "@/components/DashboardPage/DataContributorPage/ReportingPage/DataManagementOverview";
import TimeLaborSavingsReport from "@/components/DashboardPage/DataContributorPage/ReportingPage/TimeLaborSavingsReport";

export default function ReportingPage() {
  return (
    <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 max-w-desktop flex-col 2xl:flex-row items-start gap-6 4xl:gap-12">
      <FlexBox className="w-full 2xl:w-2/3 flex-col justify-stretch gap-6 4xl:gap-12">
        <TimeLaborSavingsReport />
        <CostBenefitAnalysis />
      </FlexBox>

      <DataManagementOverview />
    </FlexBox>
  );
}
