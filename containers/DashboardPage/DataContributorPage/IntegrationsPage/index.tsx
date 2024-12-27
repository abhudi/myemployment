import FlexBox from "@/components/Common/FlexBox";
import ApiManagement from "@/components/DashboardPage/DataContributorPage/IntegrationsPage/ApiManagement";
import ApiMetricsSummary from "@/components/DashboardPage/DataContributorPage/IntegrationsPage/ApiMetricsSummary";
import DocumentationAccess from "@/components/DashboardPage/DataContributorPage/IntegrationsPage/DocumentationAccess";
import SystemAccessConfiguration from "@/components/DashboardPage/DataContributorPage/IntegrationsPage/SystemAccessConfiguration";

export default function IntegrationsPage() {
  return (
    <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 flex-col max-w-desktop">
      <FlexBox className="w-full flex-col 2xl:flex-row justify-between items-start gap-6 4xl:gap-12">
        <ApiManagement />
        <ApiMetricsSummary />
      </FlexBox>

      <FlexBox className="w-full flex-col 2xl:flex-row justify-between items-start gap-6 4xl:gap-12">
        <DocumentationAccess />
        <SystemAccessConfiguration />
      </FlexBox>
    </FlexBox>
  );
}
