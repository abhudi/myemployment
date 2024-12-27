import FlexBox from "@/components/Common/FlexBox";
import ActivitySummary from "@/components/DashboardPage/Common/ActivitySummary";
import QuickActions from "@/components/DashboardPage/Common/QuickActions";
import SystemStatusOverview from "@/components/DashboardPage/DataContributorPage/RootPage/SystemStatusOverview";
import { dataContributorQuickActionsData } from "@/constant/dashboardPage";

export default function DataContributorPage() {
  return (
    <FlexBox className="w-[97%] 4xl:w-11/12 mx-auto my-10 md:my-16 flex-col max-w-desktop gap-6 4xl:gap-12">
      <FlexBox className="w-full flex-col 2xl:flex-row justify-between items-stretch gap-6 4xl:gap-12">
        {/* <FlexBox className="flex-col w-auto 2xl:w-3/4 gap-6 4xl:gap-12">
          <DataModelSwitch style="w-full" />
        </FlexBox> */}
        <ActivitySummary />
        <QuickActions content={dataContributorQuickActionsData} />
      </FlexBox>
      {/* <SystemStatusOverview /> */}
    </FlexBox>
  );
}
