import FlexBox from "@/components/Common/FlexBox";
import AccessLogs from "@/components/DashboardPage/DataContributorPage/DataAccessPage/AccessLogs";
import DataRetentionPolicy from "@/components/DashboardPage/DataContributorPage/DataAccessPage/DataRetentionPolicy";
import SystemIntegrationStatus from "@/components/DashboardPage/DataContributorPage/DataAccessPage/SystemIntegrationStatus";

export default function DataAccessPage() {
  return (
    <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 flex-col max-w-desktop gap-6 4xl:gap-12">
      <FlexBox className="w-full flex-col 3xl:flex-row justify-between items-stretch gap-6 4xl:gap-12">
        <SystemIntegrationStatus />
        <AccessLogs />
      </FlexBox>

      <DataRetentionPolicy />
    </FlexBox>
  );
}
